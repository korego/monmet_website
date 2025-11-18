# Monmet Website - GoDaddy Deployment Setup Guide

## Overview
This is a standalone static HTML website with integrated email services. No backend server required - all email functionality is handled through Formspree.

---

## 📋 Pre-Deployment Checklist

### 1. **Set Up Formspree for Email Handling**

Formspree handles all form submissions and sends emails directly to your inbox. It's free, secure, and requires no backend code.

#### Steps:
1. Go to https://formspree.io/
2. Sign up with your email (info@monmettech.com)
3. Create a new form project
4. You'll get a Formspree ID (looks like: `xxxxx`)
5. Replace `YOUR_FORMSPREE_ID` in the following files with your actual ID:
   - `index.html` (Contact Form) - Line ~382
   - `products.html` (Quote Form) - Will need to be updated

#### Files Using Formspree:
- **index.html**: Contact form - sends to info@monmettech.com
- **products.html**: Quote request form - sends to info@monmettech.com

---

### 2. **Security & Bot Protection**

#### reCAPTCHA v3 (Recommended - Invisible)
1. Go to https://www.google.com/recaptcha/admin
2. Sign in with your Google account
3. Create new site:
   - Label: "Monmet Website"
   - reCAPTCHA type: v3
   - Domains: your-domain.com
4. You'll get:
   - Site Key
   - Secret Key
5. Add Site Key to HTML forms
6. Note: Secret Key needed for backend validation (optional for Formspree)

#### Alternative: Email Verification
- Formspree automatically verifies email addresses
- First submission requires email confirmation link
- Prevents spam effectively

---

### 3. **Directory Structure for GoDaddy**

```
/public_html/
├── index.html
├── about.html
├── products.html
├── css/
│   ├── style.css
│   └── products.css
├── js/
│   ├── script.js
│   ├── products.js
│   └── slideshow.js
├── img/
│   ├── logos/
│   ├── slideshow/
│   ├── products_catalog/
│   └── products/
└── DEPLOYMENT_SETUP.md
```

---

## 🚀 Deployment Steps

### Step 1: Get Your Formspree ID
- Create account at formspree.io
- Create new form
- Copy the form ID

### Step 2: Update Forms with Formspree ID
Before uploading, replace `YOUR_FORMSPREE_ID` in:
- `index.html` - Search for `YOUR_FORMSPREE_ID`
- Update the form action attribute

### Step 3: Upload to GoDaddy cPanel
1. Open cPanel File Manager
2. Navigate to `public_html` folder
3. Upload entire website folder
4. Ensure all files maintain proper directory structure

### Step 4: Test Forms
1. Go to your website
2. Fill out Contact form
3. Submit and verify email received
4. Test Quote request from products page

---

## 📧 Email Service Details

### Formspree Features:
✅ **Free tier**: 50 submissions/month  
✅ **Paid tier**: Unlimited submissions  
✅ **Bot Protection**: Built-in (email verification required)  
✅ **SSL/TLS**: All submissions encrypted  
✅ **No Setup Needed**: Works immediately after form submission  
✅ **Spam Filtering**: Formspree handles spam detection  

### Security:
- All form data encrypted in transit
- Email verification for first submission
- Rate limiting built-in
- No data stored on your server

---

## 🔧 Optional: Enhanced Bot Protection

### Add Google reCAPTCHA v3
```html
<!-- Add to <head> -->
<script src="https://www.google.com/recaptcha/api.js"></script>

<!-- Add hidden field to form -->
<input type="hidden" name="g-recaptcha-response" id="g-recaptcha-response" value="">
```

---

## 📝 Current Configuration

### Contact Form (index.html)
- **Recipient**: info@monmettech.com
- **Service**: Formspree
- **Fields**: Name, Email, Phone, Message

### Quote Request Form (products.html)
- **Recipient**: info@monmettech.com (via products.js modal)
- **Service**: Currently console.log only - needs Formspree integration
- **Fields**: Product Code, Product Name, Quantity, Company, Name, Email, Phone, Comments

---

## ⚠️ Important Notes

1. **No PHP/Backend Required**: Everything works as static HTML
2. **Email Goes To**: Set up on Formspree dashboard
3. **First Submission**: Requires email verification (one-time)
4. **Data Retention**: Check Formspree privacy policy
5. **Upgrade Path**: Can upgrade to paid tier if >50/month submissions

---

## 🆘 Troubleshooting

### Forms Not Sending Emails
- ❌ Check: Formspree ID is correct
- ❌ Check: Form action attribute is properly formatted
- ❌ Check: Email is verified in Formspree dashboard

### Formspree Email Verification
- First submission will trigger email verification link
- Click link in email to activate form
- All future submissions will work without verification

### Test Locally
- Forms won't send to Formspree on localhost
- Only works on live domain
- Test on GoDaddy after deployment

---

## 📞 Support Resources

- **Formspree Docs**: https://formspree.io/docs
- **GoDaddy cPanel Guide**: https://www.godaddy.com/help
- **HTML Form Best Practices**: https://developer.mozilla.org/en-US/docs/Learn/Forms

---

## ✅ Ready to Deploy?

1. ✅ Sign up for Formspree
2. ✅ Create form project
3. ✅ Get Formspree ID
4. ✅ Update YOUR_FORMSPREE_ID in index.html
5. ✅ Upload folder to GoDaddy /public_html
6. ✅ Test forms on live website
7. ✅ Verify emails are being received

**That's it! Your website is ready to go live.**
