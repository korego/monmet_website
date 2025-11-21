# Monmet Technologies Website - Deployment Guide

## 📦 Deployment Package Contents

**File:** `MONMET_WEBSITE_PRODUCTION.zip`  
**Size:** ~38 MB  
**Date:** November 20, 2025

## 🚀 How to Deploy on GoDaddy

### Step 1: Download the ZIP File

- Download `MONMET_WEBSITE_PRODUCTION.zip` from this location

### Step 2: Access GoDaddy File Manager

1. Login to your GoDaddy account
2. Navigate to **Hosting → Manage → File Manager**
3. Navigate to the **public_html** folder

### Step 3: Upload and Extract

1. Click **Upload** button
2. Select `MONMET_WEBSITE_PRODUCTION.zip`
3. Once uploaded, right-click the ZIP file
4. Select **Extract** or **Unzip**
5. A folder named `MONMET WEBSITE` will be created

### Step 4: Move Files to Root (Important!)

The website files should be in the **public_html** root directory, not in a subfolder:

**Correct Structure:**

```
public_html/
├── index.html
├── about.html
├── products.html
├── privacy-policy.html
├── terms-of-service.html
├── css/
├── js/
├── img/
├── includes/
└── favicon.png
```

**To fix if needed:**

1. In File Manager, if you see `public_html/MONMET WEBSITE/`, open that folder
2. Select ALL contents (Ctrl+A)
3. Cut the files
4. Navigate back to `public_html`
5. Paste the files here
6. Delete the empty `MONMET WEBSITE` folder

### Step 5: Verify File Permissions

- Set folder permissions to **755** (rwxr-xr-x)
- Set file permissions to **644** (rw-r--r--)

**In File Manager:**

1. Right-click each folder → Properties → Permissions
2. Set to 755 for folders, 644 for files

### Step 6: Test the Website

1. Go to https://monmettech.com
2. Test all pages:
   - Home (index.html) ✓
   - About ✓
   - Products ✓
   - Client Success Stories (link from nav) ✓
   - Contact form ✓
   - Language switcher (EN/FR) ✓
   - Privacy Policy ✓
   - Terms of Service ✓

## 📋 Website Features Included

### ✅ Fully Bilingual (EN/FR)

- Complete English and French translations throughout
- Language toggle button in navigation
- localStorage persistence (remembers user's language choice)

### ✅ Responsive Design

- Mobile-friendly layouts
- CSS media queries
- Optimized for all screen sizes

### ✅ Modern Features

- Professional hero slideshow
- Dynamic product catalog (100+ products)
- Client testimonials with Read More/Less
- Custom contact form (currently disabled - awaiting email setup)
- Language-specific styling

### ✅ Modular Architecture

- Header and footer in separate `/includes/` folder
- Dynamically loaded via JavaScript
- Easy to maintain - update header/footer once, applies everywhere

### ✅ SEO Ready

- Proper meta tags
- Semantic HTML
- Open Graph ready (optional)

## 🔐 Important Notes

### Contact Form

- **Status:** Currently disabled (shows custom modal)
- **Reason:** Awaiting Formspree info@monmettech.com account approval
- **Action:** When Formspree is ready, contact your developer to re-enable

### reCAPTCHA v2

- **Site Key:** `6LejEhQsAAAAAL44bRANg4Mij7BOFm_-e-jZy-hX`
- Already integrated and working
- No configuration needed

### Email Settings

- Currently not functional
- Need to configure Formspree or alternative email service
- Update `js/script.js` line ~400-450 when ready

## 📁 File Structure

```
MONMET WEBSITE/
├── index.html                 # Homepage
├── about.html                 # About page
├── products.html              # Products catalog
├── privacy-policy.html        # Privacy Policy
├── terms-of-service.html      # Terms of Service
├── favicon.png                # Website icon
├── css/
│   ├── style.css             # Main styles (1600+ lines)
│   ├── about.css             # About page specific styles
│   └── products.css          # Products page specific styles
├── js/
│   ├── translations.js       # Bilingual translation system (590 lines)
│   ├── script.js             # Main JavaScript (600+ lines)
│   ├── products.js           # Product catalog logic (1300+ lines)
│   ├── slideshow.js          # Hero slideshow
│   └── include.js            # Header/footer include system
├── includes/
│   ├── header.html           # Navigation (modular)
│   └── footer.html           # Footer (modular)
└── img/
    ├── logos/                # Brand logos
    ├── slideshow/            # Hero slideshow images
    └── products_catalog/     # 100+ product images
```

## 🛠 Troubleshooting

### Images Not Loading

- Check image paths are relative (`img/...` not `/img/...`)
- Verify all image files are uploaded
- Clear browser cache (Ctrl+F5)

### Styles Not Applied

- Check CSS files are in `css/` folder
- Clear browser cache
- Verify media types in HTML link tags

### JavaScript Not Working

- Check browser console for errors (F12)
- Verify all `.js` files are in `js/` folder
- Ensure `includes/header.html` and `footer.html` exist

### Language Toggle Not Working

- Check `localStorage` is enabled in browser
- Verify `js/translations.js` has complete data
- Check browser console for errors

## 📞 Support

For deployment issues:

1. Check file permissions
2. Verify file structure matches above
3. Clear browser cache and hard refresh (Ctrl+Shift+F5)
4. Check browser console (F12) for errors
5. Contact your web hosting support for server-side issues

## 🔄 Updates

When updating the website:

1. Make changes locally
2. Test thoroughly
3. Create new ZIP file
4. Upload and extract on GoDaddy
5. Follow Steps 4-6 above
6. Test all features again

---

**Last Updated:** November 20, 2025  
**Version:** 1.0 Production Ready  
**Repository:** https://github.com/korego/monmet_website
