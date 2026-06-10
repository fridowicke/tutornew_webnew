/**
 * @class German lip-sync processor
 * @author Mika Suominen (Original), German adaptation
 */

class LipsyncDe {
  /**
   * @constructor
   */
  constructor() {
    // German words to Oculus visemes, adapted from English rules
    this.rules = {
      A: [
        "[A]=aa",
        "[AU]=aa UU",
        "[AI]=aa I",
        "[AY]=aa I",
        "[AH]=aa",
        "[Ä]=E",
        "[ÄU]=O I",
        "[A]=aa",
      ],

      B: ["[B]=PP"],

      C: ["[CH]=CH", "[CK]=kk", "[C]+=SS", "[C]=kk"],

      D: ["[D]=DD"],

      E: ["[EI]=aa I", "[EU]=O I", "[E]=E"],

      F: ["[F]=FF"],

      G: ["[G]=kk"],

      H: ["[H]#=", "[H]=I"],

      I: ["[IE]=I", "[I]=I"],

      J: ["[J]=I"],

      K: ["[K]=kk"],

      L: ["[L]=nn"],

      M: ["[M]=PP"],

      N: ["[NG]=nn kk", "[NK]=nn kk", "[N]=nn"],

      O: ["[Ö]=O", "[OE]=O", "[O]=O"],

      P: ["[PF]=PP FF", "[PH]=FF", "[P]=PP"],

      Q: ["[QU]=kk FF", "[Q]=kk"],

      R: ["[R]=RR"],

      S: [
        "[SCH]=SS",
        "[SP]=SS PP",
        "[ST]=SS DD",
        "[S]S=SS",
        "[SS]=SS",
        "[ß]=SS",
        "[S]=SS",
      ],

      T: ["[TION]=SS I O nn", "[TZ]=DD SS", "[TH]=DD", "[T]=DD"],

      U: ["[Ü]=I", "[UE]=I", "[U]=U"],

      V: ["[V]=FF"],

      W: ["[W]=FF"],

      X: ["[X]=kk SS"],

      Y: ["[Y]=I"],

      Z: ["[Z]=DD SS"],
    };

    const ops = {
      "#": "[AEIOUYÄÖÜäöü]+", // One or more vowels including German umlauts
      ".": "[BDVGJLMNRWZ]", // One voiced consonant
      "%": "(?:ER|E|ES|ED|EN|EM|T)", // Common German suffixes
      "&": "(?:[SCGZXJ]|CH|SCH)", // German consonant combinations
      "@": "(?:[TSRDLZNJ]|TH|CH|SCH)", // German consonant combinations
      "^": "[BCDFGHJKLMNPQRSTVWXZß]", // One consonant including German ß
      "+": "[EIYäöüÄÖÜ]", // German vowels and umlauts
      ":": "[BCDFGHJKLMNPQRSTVWXZß]*", // Zero or more consonants in German
      " ": "\\b", // Start/end of the word
    };

    // Convert rules to regex
    Object.keys(this.rules).forEach((key) => {
      this.rules[key] = this.rules[key].map((rule) => {
        const posL = rule.indexOf("[");
        const posR = rule.indexOf("]");
        const posE = rule.indexOf("=");
        const strLeft = rule.substring(0, posL);
        const strLetters = rule.substring(posL + 1, posR);
        const strRight = rule.substring(posR + 1, posE);
        const strVisemes = rule.substring(posE + 1);

        const o = { regex: "", move: 0, visemes: [] };

        let exp = "";
        exp += [...strLeft].map((x) => ops[x] || x).join("");
        const ctxLetters = [...strLetters];
        ctxLetters[0] = ctxLetters[0].toLowerCase();
        exp += ctxLetters.join("");
        o.move = ctxLetters.length;
        exp += [...strRight].map((x) => ops[x] || x).join("");
        o.regex = new RegExp(exp);

        if (strVisemes.length) {
          strVisemes.split(" ").forEach((viseme) => {
            o.visemes.push(viseme);
          });
        }

        return o;
      });
    });

    // Viseme durations in relative unit (1=average)
    // Slightly adjusted for German pronunciation
    this.visemeDurations = {
      aa: 0.95,
      E: 0.9,
      I: 0.92,
      O: 0.98,
      U: 0.95,
      PP: 1.08,
      SS: 1.25,
      TH: 1,
      DD: 1.05,
      FF: 1.0,
      kk: 1.21,
      nn: 0.88,
      RR: 0.85,
      CH: 1.12,
      sil: 1, // Added CH for German and adjusted some durations
    };

    // Pauses in relative units (1=average)
    this.specialDurations = { " ": 1, ",": 3, "-": 0.5, "'": 0.5 };

    // German number words
    this.digits = [
      "null",
      "eins",
      "zwei",
      "drei",
      "vier",
      "fünf",
      "sechs",
      "sieben",
      "acht",
      "neun",
    ];
    this.ones = [
      "",
      "ein",
      "zwei",
      "drei",
      "vier",
      "fünf",
      "sechs",
      "sieben",
      "acht",
      "neun",
    ];
    this.tens = [
      "",
      "zehn",
      "zwanzig",
      "dreißig",
      "vierzig",
      "fünfzig",
      "sechzig",
      "siebzig",
      "achtzig",
      "neunzig",
    ];
    this.teens = [
      "zehn",
      "elf",
      "zwölf",
      "dreizehn",
      "vierzehn",
      "fünfzehn",
      "sechzehn",
      "siebzehn",
      "achtzehn",
      "neunzehn",
    ];

    // Symbols to German words
    this.symbols = {
      "%": "prozent",
      "€": "euro",
      "&": "und",
      "+": "plus",
      $: "dollar",
    };
    this.symbolsReg = /[%€&\+\$]/g;
  }

  convert_digit_by_digit(num) {
    num = String(num).split("");
    let numWords = "";
    for (let m = 0; m < num.length; m++) {
      numWords += this.digits[num[m]] + " ";
    }
    numWords = numWords.substring(0, numWords.length - 1); // kill final space
    return numWords;
  }

  // Modified for German number format where ones come before tens
  convert_tens(num) {
    num = Number(num);
    if (num < 10) {
      return (
        (num != 0 && num.toString().startsWith("0") ? "null " : "") +
        this.ones[num]
      );
    } else if (num >= 10 && num < 20) {
      return this.teens[num - 10];
    } else {
      // In German, we say "einundzwanzig" (one-and-twenty) for 21
      if (num % 10 === 0) {
        return this.tens[Math.floor(num / 10)];
      } else {
        return this.ones[num % 10] + "und" + this.tens[Math.floor(num / 10)];
      }
    }
  }

  convert_hundreds(num) {
    if (num > 99) {
      if (num % 100 === 0) {
        return this.ones[Math.floor(num / 100)] + "hundert";
      } else {
        return (
          this.ones[Math.floor(num / 100)] +
          "hundert" +
          this.convert_tens(num % 100)
        );
      }
    } else {
      return this.convert_tens(num);
    }
  }

  convert_thousands(num) {
    if (num >= 1000) {
      if (num % 1000 === 0) {
        if (Math.floor(num / 1000) === 1) {
          return "eintausend";
        } else {
          return this.convert_hundreds(Math.floor(num / 1000)) + "tausend";
        }
      } else {
        if (Math.floor(num / 1000) === 1) {
          return "eintausend" + this.convert_hundreds(num % 1000);
        } else {
          return (
            this.convert_hundreds(Math.floor(num / 1000)) +
            "tausend" +
            this.convert_hundreds(num % 1000)
          );
        }
      }
    } else {
      return this.convert_hundreds(num);
    }
  }

  convert_millions(num) {
    if (num >= 1000000) {
      if (num % 1000000 === 0) {
        if (Math.floor(num / 1000000) === 1) {
          return "eine Million";
        } else {
          return (
            this.convert_hundreds(Math.floor(num / 1000000)) + " Millionen"
          );
        }
      } else {
        if (Math.floor(num / 1000000) === 1) {
          return "eine Million " + this.convert_thousands(num % 1000000);
        } else {
          return (
            this.convert_hundreds(Math.floor(num / 1000000)) +
            " Millionen " +
            this.convert_thousands(num % 1000000)
          );
        }
      }
    } else {
      return this.convert_thousands(num);
    }
  }

  // This method determines how to convert a number to words based on context
  convertNumberToWords(num) {
    if (num == "0") {
      return "null";
    } else if (num.startsWith("0")) {
      return this.convert_digit_by_digit(num);
    } else if ((num < 1000 && num > 99) || (num > 10000 && num < 1000000)) {
      // Read area and zip codes digit by digit
      return this.convert_digit_by_digit(num);
    } else if ((num > 1000 && num < 2000) || (num > 2009 && num < 3000)) {
      // Read years in a special way
      if (num % 100 === 0) {
        return this.convert_hundreds(num);
      } else if (num < 2000) {
        return "neunzehnhundert" + this.convert_tens(num % 100);
      } else {
        return "zweitausend" + this.convert_tens(num % 100);
      }
    } else {
      return this.convert_millions(num);
    }
  }

  /**
   * Preprocess text:
   * - convert symbols to words
   * - convert numbers to words
   * - filter out characters that should be left unspoken
   * @param {string} s Text
   * @return {string} Pre-processsed text.
   */
  preProcessText(s) {
    return s
      .replace('/[#_*":;]/g', "")
      .replace(this.symbolsReg, (symbol) => {
        return " " + this.symbols[symbol] + " ";
      })
      .replace(/(\d)\.(\d)/g, "$1 Komma $2") // German decimal separator
      .replace(/(\d),(\d)/g, "$1 Komma $2") // Alternative German decimal notation
      .replace(/\d+/g, this.convertNumberToWords.bind(this)) // Numbers to words
      .replace(/(\D)\1\1+/g, "$1$1") // max 2 repeating chars
      .replaceAll("  ", " ") // Only one repeating space
      .trim();
  }

  /**
   * Convert word to Oculus LipSync Visemes and durations
   * @param {string} w Text
   * @return {Object} Oculus LipSync Visemes and durations.
   */
  wordsToVisemes(w) {
    let o = {
      words: w.toUpperCase(),
      visemes: [],
      times: [],
      durations: [],
      i: 0,
    };
    let t = 0;

    const chars = [...o.words];
    while (o.i < chars.length) {
      const c = chars[o.i];
      const ruleset = this.rules[c];
      if (ruleset) {
        for (let i = 0; i < ruleset.length; i++) {
          const rule = ruleset[i];
          const test =
            o.words.substring(0, o.i) +
            c.toLowerCase() +
            o.words.substring(o.i + 1);
          let matches = test.match(rule.regex);
          if (matches) {
            rule.visemes.forEach((viseme) => {
              if (
                o.visemes.length &&
                o.visemes[o.visemes.length - 1] === viseme
              ) {
                const d = 0.7 * (this.visemeDurations[viseme] || 1);
                o.durations[o.durations.length - 1] += d;
                t += d;
              } else {
                const d = this.visemeDurations[viseme] || 1;
                o.visemes.push(viseme);
                o.times.push(t);
                o.durations.push(d);
                t += d;
              }
            });
            o.i += rule.move;
            break;
          }
        }
      } else {
        o.i++;
        t += this.specialDurations[c] || 0;
      }
    }

    return o;
  }
}

export { LipsyncDe };
