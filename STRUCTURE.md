# Project Structure

## 📁 Directory Organization

### Source Files (11ty)
```
src/
├── _includes/
│   ├── layouts/
│   │   ├── base.njk      # Base HTML structure
│   │   ├── main.njk      # Layout with navigation
│   │   └── simple.njk    # Layout with back button
│   └── partials/
│       ├── navigation.njk
│       └── footer.njk
├── index.html            # ✅ Migrated homepage
└── faq.html              # ✅ Migrated FAQ page
```

### Static Assets (Root Level)
```
Root/
├── styles.css            # Global CSS
├── common.js             # Shared JavaScript
├── i18n.js               # Internationalization
├── favicon.ico
├── robots.txt
├── CNAME
├── llms.txt
├── *.png, *.jpg, *.jpeg  # Root level images
└── stroke.png
```

### Asset Directories
```
media-outlets/     # Media outlet logos
tutors/            # Tutor profile images
didactics_assets/  # Didactics page images
rewards/           # Reward images
```

### Legacy Content (To Be Migrated)
```
Root/
├── *.html                 # Legacy HTML files (to migrate to src/)
├── blog/                  # Blog posts (to migrate)
├── open/                  # Open source page (to migrate)
├── privacy/               # Privacy page (to migrate)
├── for-llms/              # LLM page (to migrate)
└── ugc/                   # UGC content (to migrate)
```

### Build Output
```
_site/              # Generated static HTML (gitignored)
node_modules/       # Dependencies (gitignored)
```

## 🎯 Migration Priority

1. **High Priority** (Main pages):
   - `pricing.html`
   - `didaktik.html`
   - `so-funktionierts.html`
   - `rewards.html`
   - `ueber-uns.html`

2. **Medium Priority** (Content pages):
   - `students.html`, `parents.html`, `schools.html`
   - `uni.html`, `lifelong-learning.html`, `languages.html`
   - `impressum-agb.html`, `terms.html`

3. **Low Priority** (Subdirectories):
   - `blog/*.html`
   - `open/index.html`
   - `privacy/index.html`
   - `for-llms/index.html`
   - `ugc/index.html`

## 📝 Notes

- Old HTML files remain in root until fully migrated and tested
- All templates use `src/_includes/` for layouts and partials
- Build output goes to `_site/` (deploy this directory)
- Static assets are copied as-is during build

