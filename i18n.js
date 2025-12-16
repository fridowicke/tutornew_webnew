const translations = {
    de: {
        // Navigation
        nav_how: "So funktioniert's",
        nav_faq: "FAQ",
        nav_about: "Über uns",
        nav_legal: "Impressum & AGB",
        nav_back: "← Zurück zur Startseite",
        
        // Hero
        hero_title_pre: "Lerne mit der",
        hero_title_highlight: "KI,",
        hero_subtitle_pre: "die",
        hero_subtitle_highlight: "schöne Notizen",
        hero_subtitle_post: "erstellt",
        
        // Steps
        step_1_heading: "Starte, wo du es brauchst",
        step_1_content: "Lade ein Foto vom Arbeitsblatt oder dem Buch hoch, oder sag der KI, was du nicht gecheckt hast. Wir erkennen das Thema und helfen dir, genau wo du es brauchst.",
        step_2_heading: "Lern mit der KI",
        step_2_content: "Du sprichst im (Voice-)chat mit der KI. Gemeinsam löst ihr Aufgaben (deine mitgebrachten, oder von der KI ausgesuchte), und du erhältst geduldge Erklärungen und Antworten auf all deine Fragen.",
        step_3_heading: "Nimm die Mitschrift mit!",
        step_3_content: "Während dem Lernen erstellt die KI strukturierte Notizen mit Visualisierungen für dich. Du kannst sie jederzeit bearbeiten und zum Lernen runterladen.",
        
        // Examples
        examples_title: "Wann hilft dir das?",
        example_1_text: "\"Ich versteh die Hausaufgaben nicht\"",
        example_1_highlight: "→ Hochladen & gemeinsam lösen",
        example_2_text: "\"Der Test ist morgen\"",
        example_2_highlight: "→ Gezielte Vorbereitung",
        example_3_text: "\"Ich will eine Sprache lernen\"",
        example_3_highlight: "→ Konversation & Vokabeln üben",
        example_4_text: "\"Ich häng total hinterher\"",
        example_4_highlight: "→ Aufholen in deinem Tempo",
        
        // Pricing
        cta_sticker: "Gratis testen",
        price_highlight: "Dann 2.99€/Woche",
        price_sub: "Jederzeit kündbar",
        cta_button_secondary: "→ Kostenlos testen",
        
        // So funktioniert's Page
        how_title: "So funktioniert's",
        how_step_1_title: "Schritt 1: Problem teilen",
        how_step_1_text: "Mach einfach ein Foto von deiner Aufgabe oder tippe deine Frage ein. Egal ob Mathe, Geschichte oder Sprachen - wir sind bereit.",
        how_step_2_title: "Schritt 2: Interaktiver Dialog",
        how_step_2_text: "Die KI erklärt dir nicht nur die Lösung, sondern führt dich Schritt für Schritt hin. Du kannst jederzeit nachfragen, wenn du etwas nicht verstehst.",
        how_step_3_title: "Schritt 3: Perfekte Notizen",
        how_step_3_text: "Am Ende erhältst du eine wunderschöne, strukturierte Zusammenfassung deiner Lernsession als PDF oder Bild. Perfekt zum Wiederholen!",

        // FAQ Page
        faq_title: "Häufige Fragen (FAQ)",
        faq_q1: "Ist tutor.new wirklich kostenlos?",
        faq_a1: "Du kannst tutor.new kostenlos ausprobieren! Für unbegrenzten Zugang und alle Premium-Features gibt es ein faires monatliches Abo.",
        faq_q2: "Welche Fächer werden unterstützt?",
        faq_a2: "Wir unterstützen fast alle Schulfächer, von Mathematik und Physik über Deutsch und Englisch bis hin zu Geschichte und Biologie.",
        faq_q3: "Kann ich meine Notizen speichern?",
        faq_a3: "Ja! Alle erstellten Lernnotizen werden in deinem Profil gespeichert und du kannst sie jederzeit wieder aufrufen oder herunterladen.",
        faq_q4: "Ist die KI immer richtig?",
        faq_a4: "Unsere KI ist sehr fortgeschritten, aber wie auch echte Lehrer können Fehler passieren. Wir arbeiten ständig daran, die Genauigkeit zu verbessern.",
        
        // About Page
        about_title: "Über tutor.new",
        about_intro_heading: "Hallo! 👋🏻",
        about_intro_text: "Wir sind Gero und Friedrich, ein Informatiker und ein Mathematiker. Wir haben uns kennengelernt, als wir beide an der ETH Zürich studierten und schnell gemerkt, dass wir beide Technologie nutzen wollen, um großartige Lernerfahrungen zu schaffen. Das war der Beginn von tutor.new ...",
        about_history_heading: "Unsere Geschichte",
        about_history_p1: "Wir beide hatten schon immer eine Leidenschaft fürs Unterrichten. Während unseres Studiums an der ETH Zürich stellten wir fest, dass viele Studierende nicht kämpften, weil ihnen die Fähigkeiten fehlten, sondern weil sie personalisierte Aufmerksamkeit und Unterstützung brauchten, die traditionelle Bildungssysteme nicht bieten konnten.",
        about_history_p2: "Wir erkannten, dass KI-Technologie diese Lücke schließen könnte - intelligente Tutoren schaffen, die sich an den einzigartigen Lernstil, das Tempo und die Bedürfnisse jedes Schülers anpassen. So entstand tutor.new.",
        about_history_p3: "Heute sind wir stolz darauf, Schülern aller Bildungsebenen dabei zu helfen, ihre Ziele durch personalisierte KI-Nachhilfe zu erreichen.",
        
        // Legal Page
        legal_title: "Rechtliches",
        legal_imprint_heading: "Impressum",
        legal_imprint_content: `
            <p><strong>Sophia Edu Labs GmbH</strong><br>
            Murwiesenstrasse 43<br>
            8057 Zürich</p>
            
            <p><strong>Kontakt:</strong><br>
            E-Mail: friedrich@tutor.new</p>
        `,
        legal_terms_heading: "AGB (Terms & Conditions)",
        legal_terms_content: `
            <p><strong>1. Einführung</strong></p>
            <p>Diese Nutzungsbedingungen regeln die Nutzung der Plattform und Dienste von tutor.new. Durch den Zugriff auf unsere Website oder die Nutzung unserer Angebote erklärst du dich mit diesen Bedingungen einverstanden. Bitte lies sie sorgfältig durch. Wenn du nicht einverstanden bist, darfst du unsere Dienste nicht nutzen.</p>
            
            <p>⸻</p>
            
            <p><strong>2. Unsere Dienstleistungen</strong></p>
            <p>Unsere Leistungen umfassen insbesondere:</p>
            <ul>
                <li>Bereitstellung von Online-Nachhilfe für Schüler:innen der Klassen 1–12, Uni und AusbildCung.</li>
                <li>Organisation von Live-Unterrichtssitzungen per Zoom oder vergleichbaren Tools.</li>
                <li>Nutzung von KI-gestützten Lernfunktionen, interaktiven Notizen und Lernverläufen.</li>
                <li>Bereitstellung von Übungen, Lernmaterialien und Lernanalysen.</li>
                <li>Kommunikation mit Eltern und Schüler:innen zur Koordination des Unterrichts.</li>
                <li>Archivierung von vergangenen Lernmaterialien und Sessions.</li>
            </ul>
            
            <p>⸻</p>
            
            <p><strong>3. Nutzungsbeschränkungen und Jugendschutz</strong></p>
            <p><strong>Mindestalter und Einwilligung:</strong> Die Nutzung unserer Dienste durch Kinder unter 13 Jahren ist nicht gestattet. Minderjährige zwischen 13 und 17 Jahren dürfen den Dienst nur mit ausdrücklicher Zustimmung eines Erziehungsberechtigten nutzen.</p>
            
            <p>⸻</p>

            <p><strong>4. Plattformen und Zugänglichkeit</strong></p>
            <p>Die Dienste können über verschiedene Plattformen bereitgestellt werden, einschließlich Website, mobilen Diensten, Zoom, WhatsApp oder anderen Kommunikationskanälen. Wir bemühen uns, den Dienst jederzeit verfügbar zu halten, können dies aber nicht garantieren. Gelegentliche Unterbrechungen, Updates oder technische Wartungsarbeiten können auftreten.</p>
            
            <p>⸻</p>
            
            <p><strong>5. Kündigung und Beendigung</strong></p>
            <p>Die Buchung von wöchentlichen Unterrichtseinheiten kann jederzeit beendet werden. Eltern können Sessions abbestellen oder pausieren.</p>
        `,
        legal_privacy_heading: "Datenschutzerklärung",
        legal_privacy_content: `
            <p><strong>1. Einleitung</strong></p>
            <p>Wir nehmen den Schutz deiner persönlichen Daten sehr ernst. In dieser Datenschutzerklärung erklären wir, welche Daten wir erheben, zu welchen Zwecken wir sie verwenden und welche Rechte du in Bezug auf deine Daten hast. Wir verarbeiten alle personenbezogenen Daten gemäß der geltenden Datenschutzgesetze, einschließlich der DSGVO.</p>
            
            <p>⸻</p>
            
            <p><strong>2. Verantwortliche Stelle</strong></p>
            <p>Verantwortlich für die Verarbeitung deiner personenbezogenen Daten ist:</p>
            <p>tutor.new<br>
            Murwiesenstrasse 43, 8057 Zürich<br>
            Kontakt: friedrich@tutor.new</p>
            <p>Wenn du Fragen zum Datenschutz oder zur Datenverarbeitung hast, kannst du uns jederzeit kontaktieren.</p>
            
            <p>⸻</p>
            
            <p><strong>3. Welche Daten wir erheben</strong></p>
            <p>Wir verarbeiten je nach Nutzung unserer Dienste insbesondere folgende Daten:</p>
            <ul>
                <li>Angaben, die du uns freiwillig zur Verfügung stellst (z. B. Name, E-Mail, Telefonnummer).</li>
                <li>Daten aus der Nutzung unserer Dienste (z. B. Unterrichtsverlauf, Lernfortschritt, gebuchte Sessions).</li>
                <li>Technische Daten (z. B. IP-Adresse, Geräteinformationen, Browsertyp).</li>
                <li>Kommunikationsdaten (z. B. Nachrichten an unseren Support).</li>
                <li>Abrechnungs- und Zahlungsinformationen, falls du eine kostenpflichtige Leistung buchst.</li>
            </ul>
            
            <p>⸻</p>
            
            <p><strong>4. Zwecke der Datenverarbeitung</strong></p>
            <p>Wir verarbeiten deine Daten zu folgenden Zwecken:</p>
            <ul>
                <li>Um dir unsere Lern- und Tutoringleistungen bereitzustellen.</li>
                <li>Um deine Sessions zu organisieren, zu personalisieren und zu verbessern.</li>
                <li>Zur Kommunikation mit dir (z. B. Terminbestätigungen, Support).</li>
                <li>Zur Analyse und Optimierung unserer Plattform.</li>
                <li>Um gesetzlichen Verpflichtungen nachzukommen.</li>
                <li>Zum Schutz unserer Systeme und zur Missbrauchserkennung.</li>
            </ul>
            
            <p>⸻</p>
            
            <p><strong>5. Rechtsgrundlagen der Verarbeitung</strong></p>
            <p>Wir verarbeiten personenbezogene Daten ausschließlich auf Grundlage der gesetzlichen Erlaubnistatbestände, insbesondere:</p>
            <ul>
                <li>Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung) – z. B. Durchführung von Unterrichtssitzungen.</li>
                <li>Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) – z. B. Analyse-Tools, Newsletter.</li>
                <li>Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse) – z. B. Verbesserung des Angebots, IT-Sicherheit.</li>
                <li>Art. 6 Abs. 1 lit. c DSGVO (rechtliche Verpflichtung) – z. B. steuerliche Aufbewahrungspflichten.</li>
            </ul>
            
            <p>⸻</p>
            
            <p><strong>6. Weitergabe von Daten</strong></p>
            <p>Wir geben personenbezogene Daten nur weiter, wenn dies notwendig ist:</p>
            <ul>
                <li>an technische Dienstleister (z. B. Hosting, Videokonferenzen),</li>
                <li>an Zahlungsdienstleister bei Buchung von Leistungen,</li>
                <li>an Teammitglieder, die für die Bereitstellung der Lernangebote zuständig sind,</li>
                <li>wenn gesetzliche Verpflichtungen dies erfordern.</li>
            </ul>
            <p>Eine Weitergabe an Dritte zu Werbezwecken findet nicht statt.</p>
            
            <p>⸻</p>
            
            <p><strong>7. Speicherdauer</strong></p>
            <p>Wir speichern personenbezogene Daten nur so lange, wie dies für die jeweiligen Zwecke erforderlich ist oder wir rechtlich dazu verpflichtet sind. Nach Ablauf der Fristen werden die Daten gelöscht oder anonymisiert.</p>
            
            <p>⸻</p>
            
            <p><strong>8. Deine Rechte</strong></p>
            <p>Du hast im Rahmen der DSGVO jederzeit folgende Rechte:</p>
            <ul>
                <li>Recht auf Auskunft über deine gespeicherten Daten.</li>
                <li>Recht auf Berichtigung unrichtiger Daten.</li>
                <li>Recht auf Löschung deiner Daten („Recht auf Vergessenwerden").</li>
                <li>Recht auf Einschränkung der Verarbeitung.</li>
                <li>Recht auf Datenübertragbarkeit (Datenexport).</li>
                <li>Widerspruchsrecht gegen bestimmte Verarbeitungen.</li>
                <li>Widerrufsrecht für erteilte Einwilligungen.</li>
            </ul>
            <p>Um eines dieser Rechte auszuüben, kontaktiere uns bitte direkt.</p>
            
            <p>⸻</p>
            
            <p><strong>9. Kontakt</strong></p>
            <p>Wenn du Fragen zur Verarbeitung deiner Daten hast oder deine Datenschutzrechte ausüben möchtest, kannst du uns jederzeit unter der folgenden Adresse erreichen:</p>
            <p>friedrich@tutor.new</p>
        `,

        // Footer/Misc
        footer_copyright: "© 2023 tutor.new" // Example if needed
    },
    en: {
        // Navigation
        nav_how: "How it works",
        nav_faq: "FAQ",
        nav_about: "About us",
        nav_legal: "Legal & Terms",
        nav_back: "← Back to home",
        
        // Hero
        hero_title_pre: "Learn with the",
        hero_title_highlight: "AI",
        hero_subtitle_pre: "that creates",
        hero_subtitle_highlight: "beautiful notes",
        hero_subtitle_post: "", // Empty in English structure if needed, or adjust flow
        
        // Steps
        step_1_heading: "Start where you need it",
        step_1_content: "Upload a photo of your worksheet or book, or tell the AI what you didn't get. We identify the topic and help you exactly where you need it.",
        step_2_heading: "Learn with the AI",
        step_2_content: "You talk in (voice) chat with the AI. Together you solve problems (yours or ones picked by the AI), and you get patient explanations and answers to all your questions.",
        step_3_heading: "Take the notes with you!",
        step_3_content: "While learning, the AI creates structured notes with visualizations for you. You can edit them anytime and download them to study.",
        
        // Examples
        examples_title: "When does this help?",
        example_1_text: "\"I don't understand the homework\"",
        example_1_highlight: "→ Upload & solve together",
        example_2_text: "\"The test is tomorrow\"",
        example_2_highlight: "→ Targeted preparation",
        example_3_text: "\"I want to learn a language\"",
        example_3_highlight: "→ Practice conversation & vocab",
        example_4_text: "\"I'm totally behind\"",
        example_4_highlight: "→ Catch up at your own pace",
        
        // Pricing
        cta_sticker: "Try for free",
        price_highlight: "Then $2.99/Week", // Will be replaced with locale-based currency
        price_sub: "Cancel anytime",
        cta_button_secondary: "→ Try for free",
        
        // So funktioniert's Page
        how_title: "How it works",
        how_step_1_title: "Step 1: Share the problem",
        how_step_1_text: "Just take a photo of your task or type in your question. Whether math, history, or languages - we are ready.",
        how_step_2_title: "Step 2: Interactive Dialogue",
        how_step_2_text: "The AI doesn't just explain the solution, but guides you step by step. You can ask follow-up questions anytime if you don't understand something.",
        how_step_3_title: "Step 3: Perfect Notes",
        how_step_3_text: "At the end, you get a beautiful, structured summary of your learning session as a PDF or image. Perfect for reviewing!",

        // FAQ Page
        faq_title: "Frequently Asked Questions",
        faq_q1: "Is tutor.new really free?",
        faq_a1: "You can try tutor.new for free! For unlimited access and all premium features, there is a fair monthly subscription.",
        faq_q2: "Which subjects are supported?",
        faq_a2: "We support almost all school subjects, from Mathematics and Physics to German and English, as well as History and Biology.",
        faq_q3: "Can I save my notes?",
        faq_a3: "Yes! All created study notes are saved in your profile and you can access or download them at any time.",
        faq_q4: "Is the AI always right?",
        faq_a4: "Our AI is very advanced, but like real teachers, mistakes can happen. We are constantly working to improve accuracy.",
        
        // About Page
        about_title: "About tutor.new",
        about_intro_heading: "Hello! 👋🏻",
        about_intro_text: "We are Gero and Friedrich, a computer scientist and a mathematician. We met while studying at ETH Zurich and quickly realized that we both wanted to use technology to create great learning experiences. That was the beginning of tutor.new ...",
        about_history_heading: "Our Story",
        about_history_p1: "We both always had a passion for teaching. During our studies at ETH Zurich, we noticed that many students struggled not because they lacked the ability, but because they needed personalized attention and support that traditional education systems couldn't provide.",
        about_history_p2: "We realized that AI technology could bridge this gap - creating intelligent tutors that adapt to each student's unique learning style, pace, and needs. Thus, tutor.new was born.",
        about_history_p3: "Today, we are proud to help students of all education levels achieve their goals through personalized AI tutoring.",

        // Legal Page
        legal_title: "Legal",
        legal_imprint_heading: "Imprint",
        legal_imprint_content: `
            <p><strong>Sophia Edu Labs GmbH</strong><br>
            Murwiesenstrasse 43<br>
            8057 Zürich, Switzerland</p>
            
            <p><strong>Contact:</strong><br>
            Email: friedrich@tutor.new</p>
        `,
        legal_terms_heading: "Terms & Conditions",
        legal_terms_content: `
            <p><strong>1. Introduction</strong></p>
            <p>These terms and conditions govern the use of the tutor.new platform and services. By accessing our website or using our offerings, you agree to these terms. Please read them carefully. If you do not agree, you must not use our services.</p>
            
            <p>⸻</p>
            
            <p><strong>2. Our Services</strong></p>
            <p>Our services include in particular:</p>
            <ul>
                <li>Provision of online tutoring for students in grades 1–12, university, and vocational training.</li>
                <li>Organization of live teaching sessions via Zoom or comparable tools.</li>
                <li>Use of AI-supported learning functions, interactive notes, and learning paths.</li>
                <li>Provision of exercises, learning materials, and learning analytics.</li>
                <li>Communication with parents and students to coordinate lessons.</li>
                <li>Archiving of past learning materials and sessions.</li>
            </ul>
            
            <p>⸻</p>
            
            <p><strong>3. Usage Restrictions and Youth Protection</strong></p>
            <p><strong>Minimum age and consent:</strong> Use of our services by children under 13 is not permitted. Minors between 13 and 17 years of age may only use the service with the <strong>explicit consent</strong> of a parent or guardian.</p>
            
            <p>⸻</p>

            <p><strong>4. Platforms and Accessibility</strong></p>
            <p>The services may be provided via various platforms, including website, mobile services, Zoom, WhatsApp, or other communication channels. We strive to keep the service available at all times but cannot guarantee this. Occasional interruptions, updates, or technical maintenance may occur.</p>
            
            <p>⸻</p>
            
            <p><strong>5. Termination</strong></p>
            <p>The booking of weekly lessons can be terminated at any time. Parents can cancel or pause sessions.</p>
        `,
        legal_privacy_heading: "Privacy Policy",
        legal_privacy_content: `
            <p><strong>1. Introduction</strong></p>
            <p>We take the protection of your personal data very seriously. In this privacy policy, we explain what data we collect, for what purposes we use it, and what rights you have regarding your data. We process all personal data in accordance with applicable data protection laws, including the GDPR.</p>
            
            <p>⸻</p>
            
            <p><strong>2. Responsible Body</strong></p>
            <p>Responsible for the processing of your personal data is:</p>
            <p>tutor.new<br>
            Murwiesenstrasse 43, 8057 Zürich, Switzerland<br>
            Contact: friedrich@tutor.new</p>
            <p>If you have any questions about data protection or data processing, you can contact us at any time.</p>
            
            <p>⸻</p>
            
            <p><strong>3. Data We Collect</strong></p>
            <p>Depending on your use of our services, we process the following data in particular:</p>
            <ul>
                <li>Information you voluntarily provide to us (e.g., name, email, phone number).</li>
                <li>Data from the use of our services (e.g., lesson history, learning progress, booked sessions).</li>
                <li>Technical data (e.g., IP address, device information, browser type).</li>
                <li>Communication data (e.g., messages to our support).</li>
                <li>Billing and payment information if you book a paid service.</li>
            </ul>
            
            <p>⸻</p>
            
            <p><strong>4. Purposes of Data Processing</strong></p>
            <p>We process your data for the following purposes:</p>
            <ul>
                <li>To provide you with our learning and tutoring services.</li>
                <li>To organize, personalize, and improve your sessions.</li>
                <li>To communicate with you (e.g., appointment confirmations, support).</li>
                <li>To analyze and optimize our platform.</li>
                <li>To comply with legal obligations.</li>
                <li>For the protection of our systems and for abuse detection.</li>
            </ul>
            
            <p>⸻</p>
            
            <p><strong>5. Legal Basis for Processing</strong></p>
            <p>We process personal data exclusively based on statutory permission facts, in particular:</p>
            <ul>
                <li>Art. 6 (1) lit. b GDPR (Performance of contract) – e.g., conducting teaching sessions.</li>
                <li>Art. 6 (1) lit. a GDPR (Consent) – e.g., analysis tools, newsletters.</li>
                <li>Art. 6 (1) lit. f GDPR (Legitimate interest) – e.g., improvement of the offer, IT security.</li>
                <li>Art. 6 (1) lit. c GDPR (Legal obligation) – e.g., tax retention obligations.</li>
            </ul>
            
            <p>⸻</p>
            
            <p><strong>6. Data Sharing</strong></p>
            <p>We only share personal data if this is necessary:</p>
            <ul>
                <li>with technical service providers (e.g., hosting, video conferencing),</li>
                <li>with payment service providers when booking services,</li>
                <li>with team members responsible for providing the learning offers,</li>
                <li>if legal obligations require this.</li>
            </ul>
            <p>Data is not passed on to third parties for advertising purposes.</p>
            
            <p>⸻</p>
            
            <p><strong>7. Retention Period</strong></p>
            <p>We store personal data only as long as necessary for the respective purposes or as legally required. After the deadlines expire, the data is deleted or anonymized.</p>
            
            <p>⸻</p>
            
            <p><strong>8. Your Rights</strong></p>
            <p>Under the GDPR, you have the following rights at any time:</p>
            <ul>
                <li>Right to information about your stored data.</li>
                <li>Right to correction of incorrect data.</li>
                <li>Right to deletion of your data ("Right to be forgotten").</li>
                <li>Right to restriction of processing.</li>
                <li>Right to data portability (data export).</li>
                <li>Right to objection against certain processing.</li>
                <li>Right of withdrawal for given consents.</li>
            </ul>
            <p>To exercise any of these rights, please contact us directly.</p>
            
            <p>⸻</p>
            
            <p><strong>9. Contact</strong></p>
            <p>If you have questions about the processing of your data or wish to exercise your data protection rights, you can reach us at any time at the following address:</p>
            <p>friedrich@tutor.new</p>
        `,
    }
};

class I18n {
    constructor() {
        this.currentLang = localStorage.getItem('language') || 'de';
        this.currentLocale = this.detectLocale();
        document.documentElement.lang = this.currentLang;
    }

    detectLocale() {
        // Try to get from localStorage first
        const savedLocale = localStorage.getItem('locale');
        if (savedLocale) return savedLocale;

        // Detect from browser
        const browserLang = navigator.language || navigator.userLanguage;
        const langCode = browserLang.toLowerCase();
        
        // UK locales
        if (langCode.startsWith('en-gb') || langCode.startsWith('en-ie')) {
            return 'uk';
        }
        
        // US locale
        if (langCode.startsWith('en-us')) {
            return 'us';
        }
        
        // European countries (excluding UK)
        const europeanCountries = ['de', 'fr', 'it', 'es', 'nl', 'pl', 'pt', 'ro', 'hu', 'cs', 'sk', 'sl', 'bg', 'hr', 'el', 'fi', 'sv', 'da', 'no', 'et', 'lv', 'lt'];
        const langBase = langCode.split('-')[0];
        if (europeanCountries.includes(langBase)) {
            return 'eu';
        }
        
        // Default to US for other English speakers and non-European countries
        if (langCode.startsWith('en')) {
            return 'us';
        }
        
        // Default to US for unknown locales
        return 'us';
    }

    getCurrency() {
        switch (this.currentLocale) {
            case 'uk':
                return '£';
            case 'us':
                return '$';
            case 'eu':
                return '€';
            default:
                return '$';
        }
    }

    getPriceText() {
        const currency = this.getCurrency();
        // Base price is 2.99, adjust if needed for different currencies
        // For now, keeping 2.99 for all currencies (you can adjust conversion rates later)
        return `Then ${currency}2.99/Week`;
    }

    setLanguage(lang) {
        if (!translations[lang]) return;
        this.currentLang = lang;
        localStorage.setItem('language', lang);
        document.documentElement.lang = lang;
        this.updateContent();
        this.updateActiveState();
    }

    updateContent() {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[this.currentLang][key] !== undefined) {
                let text = translations[this.currentLang][key];
                
                // Special handling for price_highlight to use locale-based currency
                if (key === 'price_highlight') {
                    text = this.getPriceText();
                }
                
                // If the element has children (like bold tags inside), we might need to be careful
                // For now, we assume simple text replacement or innerHTML if it contains HTML
                // Using innerHTML to allow for formatting if needed in translations
                element.innerHTML = text;
            }
        });
    }

    updateActiveState() {
        const buttons = document.querySelectorAll('.lang-btn');
        buttons.forEach(btn => {
            if (btn.dataset.lang === this.currentLang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    init() {
        // Update locale on init (in case browser language changed)
        this.currentLocale = this.detectLocale();
        this.updateContent();
        // Create language switcher if it doesn't exist
        this.injectSwitcher();
    }
    
    injectSwitcher() {
        // Find a good place to inject the switcher. 
        // Maybe in the header or footer?
        // Let's look for the header or create a floating one if needed.
        // Ideally, the user of this script puts the placeholder in HTML, but we can append to body or header.
        
        // We'll append it to the header if it exists
        const header = document.querySelector('header');
        if (header && !document.querySelector('.lang-switcher')) {
            const switcher = document.createElement('div');
            switcher.className = 'lang-switcher';
            switcher.innerHTML = `
                <button class="lang-btn" data-lang="de" onclick="i18n.setLanguage('de')">DE</button>
                <span class="lang-separator">|</span>
                <button class="lang-btn" data-lang="en" onclick="i18n.setLanguage('en')">EN</button>
            `;
            header.appendChild(switcher);
            
            // Add styles for switcher
            const style = document.createElement('style');
            style.textContent = `
                .lang-switcher {
                    margin-left: auto;
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    font-size: 0.9rem;
                    z-index: 100;
                }
                .lang-btn {
                    background: none;
                    border: none;
                    cursor: pointer;
                    font-family: inherit;
                    opacity: 0.5;
                    padding: 2px 5px;
                    font-weight: bold;
                }
                .lang-btn.active {
                    opacity: 1;
                    text-decoration: underline;
                }
                .lang-separator {
                    opacity: 0.3;
                }
            `;
            document.head.appendChild(style);
        }
        
        this.updateActiveState();
    }
}

const i18n = new I18n();
// Initialize after DOM load
document.addEventListener('DOMContentLoaded', () => {
    i18n.init();
});

