# Migration Guide: Converting Pages to 11ty

## ✅ Completed
- `index.html` → `src/index.html`
- `faq.html` → `src/faq.html`
- `privacy/index.html` → `src/privacy/index.html`
- `open/index.html` → `src/open/index.html`
- `for-llms/index.html` → `src/for-llms/index.html`
- `ugc/index.html` → `src/ugc/index.html`
- `so-funktionierts.html` → `src/so-funktionierts.html`
- `didaktik.html` → `src/didaktik.html`
- `pricing.html` → `src/pricing.html`
- `students.html` → `src/students.html`
- `parents.html` → `src/parents.html`
- `schools.html` → `src/schools.html`
- `uni.html` → `src/uni.html`
- `lifelong-learning.html` → `src/lifelong-learning.html`
- `languages.html` → `src/languages.html`
- `rewards.html` → `src/rewards.html`
- `ueber-uns.html` → `src/ueber-uns.html`
- `impressum-agb.html` → `src/impressum-agb.html`
- `terms.html` → `src/terms.html`

## 📋 Remaining Pages to Convert

### Pages with Subdirectories:
- `blog/*.html` - Blog posts (to be migrated)

## Conversion Steps

1. **Copy the HTML file to `src/`** (or `src/subdirectory/` for nested pages)
2. **Add front matter** at the top:
   ```yaml
   ---
   layout: layouts/simple.njk  # or layouts/main.njk for homepage-style
   title: Page Title
   lang: de
   permalink: /subdirectory/  # For nested pages
   pageStyles: |
     /* Page-specific CSS here */
   pageScripts: |
     // Page-specific JavaScript here
   scripts:
     - /i18n.js  # If needed
   ---
   ```

3. **Remove the boilerplate**:
   - Remove `<!DOCTYPE html>`, `<html>`, `<head>`, `<body>` tags
   - Remove navigation HTML (it's in the template)
   - Remove footer HTML (it's in the template)
   - Keep only the content between `<div class="container">` and `</div>`

4. **Update asset paths**:
   - Change `src="image.png"` to `src="{{ '/image.png' | url }}"`
   - Change `href="page.html"` to `href="{{ '/page.html' | url }}"`
   - For nested pages, use `{{ '/subdirectory/asset.png' | url }}`

5. **Move inline styles** to `pageStyles` in front matter (or extract to `styles.css`)

6. **Move inline scripts** to `pageScripts` in front matter

7. **Test the build**: `npm run build`

## Example Conversion

**Before** (`faq.html`):
```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    ...
    <style>...</style>
</head>
<body>
    <div class="container">
        <header>...</header>
        <h1>FAQ</h1>
        ...
    </div>
    <script src="i18n.js"></script>
</body>
</html>
```

**After** (`src/faq.html`):
```yaml
---
layout: layouts/simple.njk
title: FAQ - tutor.new
lang: de
pageStyles: |
  /* styles here */
---

<h1>FAQ</h1>
<!-- content here -->
```

## Benefits

- ✅ ~70% less code to maintain
- ✅ Single source of truth for navigation
- ✅ Easier to update styles globally
- ✅ Better organization
- ✅ Type-safe templates
