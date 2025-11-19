# Monmet Website - Security Implementation Guide

## Current Security Measures ✅

### 1. **Formspree Email Service**

- **Type**: Server-side form handler
- **Encryption**: SSL/TLS (all data encrypted in transit)
- **Bot Protection**: Built-in email verification on first submission
- **Features**:
  - Automatically filters spam
  - Requires email confirmation for first submission from any address
  - Stores submissions securely
  - No backend code exposure

### 2. **Static HTML Website**

- **Type**: No backend server required
- **Security Benefit**: No database vulnerabilities, no server-side code injection risks
- **Hosting**: Pure HTML/CSS/JavaScript (no PHP, no Node.js, no database)

### 3. **Client-Side Input Validation**

- Name field validation (non-empty)
- Email field validation (regex pattern matching)
- Phone field validation (optional, accepts common formats)
- Prevents empty/malformed submissions before reaching server

---

## Enhanced Security: reCAPTCHA v3 Setup

### What is reCAPTCHA v3?

**Invisible bot protection** that:

- ✅ Detects bots automatically (no "I'm not a robot" checkbox)
- ✅ Assigns a risk score (0.0 to 1.0) to each submission
- ✅ Works transparently - users don't see it
- ✅ Blocks automated attacks, spam bots, and script attacks
- ✅ Free tier: unlimited requests

### Step-by-Step Setup

#### Step 1: Get reCAPTCHA Keys

1. Visit: https://www.google.com/recaptcha/admin
2. Sign in with your Google account (create if needed)
3. Click **Create** or **+** icon
4. Fill in form:
   - **Label**: "Monmet Website" (or your preference)
   - **reCAPTCHA type**: Select `reCAPTCHA v3`
   - **Domains**: Enter your domain (e.g., `monmettech.com`)
5. Click **Create**
6. Copy the two keys:
   - **Site Key** (public, use in HTML)
   - **Secret Key** (private, keep safe - not needed for static site)

#### Step 2: Add Site Key to Website

Replace `YOUR_RECAPTCHA_SITE_KEY` in these files:

**File 1: `js/script.js` (Line ~420)**

```javascript
const siteKey = "YOUR_RECAPTCHA_SITE_KEY";
```

Replace with your actual Site Key:

```javascript
const siteKey = "6Lcxxx_VxxxxxxxxxxxxxxxxxxxxxxxxxxxxMM";
```

**File 2: `js/products.js` (Line ~992)**

```javascript
const siteKey = "YOUR_RECAPTCHA_SITE_KEY";
```

Replace with same Site Key:

```javascript
const siteKey = "6Lcxxx_VxxxxxxxxxxxxxxxxxxxxxxxxxxxxMM";
```

#### Step 3: Verify it Works

After replacing keys:

1. Upload website to GoDaddy
2. Visit your domain
3. Fill out contact form
4. Form should submit successfully
5. Check Google reCAPTCHA dashboard to see analytics

---

## How Security Works on Your Website

### Contact Form Flow (index.html)

```
User fills form
    ↓
Submit button clicked (onsubmit="handleContactSubmit(event)")
    ↓
reCAPTCHA v3 assigned risk score
    ↓
Score sent to Formspree hidden field
    ↓
Formspree receives submission
    ↓
Email verification sent to user's email
    ↓
User clicks verification link
    ↓
Email delivered to info@monmettech.com
    ↓
Forms now fully trusted for future submissions
```

### Quote Form Flow (products.html)

```
User clicks "Request a Quote"
    ↓
Quote modal opens with form
    ↓
User fills form and clicks submit
    ↓
JavaScript handler captures form
    ↓
reCAPTCHA v3 assigned risk score
    ↓
Score sent with quote data to Formspree
    ↓
Formspree processes submission
    ↓
Email delivered to info@monmettech.com
    ↓
Success message shown to user
```

---

## Security Layers Explained

| Layer                      | Protection                    | Strength                       |
| -------------------------- | ----------------------------- | ------------------------------ |
| **Client-side validation** | Prevents empty/malformed data | ⭐⭐ (user can bypass)         |
| **reCAPTCHA v3**           | Blocks automated bots         | ⭐⭐⭐⭐⭐ (AI powered)        |
| **Formspree verification** | Confirms real email addresses | ⭐⭐⭐⭐ (requires action)     |
| **SSL/TLS encryption**     | Protects data in transit      | ⭐⭐⭐⭐⭐ (industry standard) |
| **Static HTML website**    | No server vulnerabilities     | ⭐⭐⭐⭐⭐ (no backend code)   |

---

## Frequently Asked Questions

### Q: What if I don't add reCAPTCHA?

**A:** Formspree's email verification still provides excellent protection. Forms still work but are slightly more vulnerable to spam bots. Formspree is sufficient for most websites.

### Q: Can users bypass reCAPTCHA?

**A:** Not easily. It uses advanced machine learning to detect bot behavior. Human users never have to do anything - it works invisibly.

### Q: What's the difference between reCAPTCHA v2 and v3?

- **v2**: Shows checkbox or image puzzle (intrusive, some users struggle)
- **v3**: Invisible (best user experience), assigns risk score

### Q: Is reCAPTCHA free?

**A:** Yes, completely free with unlimited requests per month.

### Q: Does reCAPTCHA track users?

**A:** reCAPTCHA only collects bot detection data, not personal user information. It complies with GDPR and privacy laws.

### Q: What if a legitimate user gets blocked?

**A:** Very rare. reCAPTCHA v3 is tuned to allow legitimate users. Worst case: form shows error and user can call 514-788-6007.

---

## Deployment Checklist for Security

- [ ] **Add reCAPTCHA keys** to js/script.js and js/products.js
- [ ] **Replace Formspree ID** in index.html and products.html
- [ ] **Test contact form** - should redirect after Formspree verification
- [ ] **Test quote form** - should show success message
- [ ] **Check reCAPTCHA dashboard** - see if requests are being processed
- [ ] **Monitor email** - info@monmettech.com should receive test submissions
- [ ] **Review Formspree analytics** - see submission history and stats
- [ ] **Keep Secret Key safe** - never share, never commit to git

---

## Monitoring & Maintenance

### Monthly Checks

1. **Formspree Dashboard**: https://formspree.io/

   - Check submission count
   - Review spam reports
   - Update email if needed

2. **reCAPTCHA Dashboard**: https://www.google.com/recaptcha/admin

   - View bot detection analytics
   - Check traffic patterns
   - Adjust settings if needed

3. **Email Inbox** (info@monmettech.com)
   - Review incoming submissions
   - Respond to customer quotes
   - Flag any suspicious patterns

---

## Troubleshooting Security Issues

### Problem: "reCAPTCHA not working" (form not submitting)

**Solution 1**: Check if Site Key is correct

- Go to js/script.js, verify reCAPTCHA Site Key matches your project
- Check reCAPTCHA admin for correct key

**Solution 2**: Check if domain is registered in reCAPTCHA

- Go to https://www.google.com/recaptcha/admin
- Edit your reCAPTCHA project
- Verify your domain (monmettech.com) is listed under "Domains"

**Solution 3**: Check browser console for errors

- Press F12 in browser
- Click "Console" tab
- Look for red error messages
- Report any errors

### Problem: "All submissions marked as spam"

**Solution**: Adjust reCAPTCHA sensitivity

- Go to reCAPTCHA admin → Select project → Settings
- Lower the threshold score (default is 0.5)
- Retest form

### Problem: "Formspree not sending emails"

**Solution 1**: Verify Formspree ID is correct

- Check index.html and products.html
- Confirm YOUR_FORMSPREE_ID is replaced with actual ID

**Solution 2**: Check Formspree dashboard

- Visit https://formspree.io/
- Log in with email used for setup
- Verify form project exists
- Check "Submissions" tab for rejected submissions

**Solution 3**: Verify email permissions

- First submission from new email address needs verification
- Check info@monmettech.com inbox for verification email
- Click verification link if present

---

## Security Best Practices

### DO ✅

- Keep reCAPTCHA Site Key updated if you change domains
- Monitor Formspree monthly for spam patterns
- Respond to legitimate quote requests promptly
- Regularly check email inbox for new submissions
- Keep documentation updated with current keys

### DON'T ❌

- Don't share Secret Key (not needed for static site)
- Don't commit keys to GitHub (use placeholders)
- Don't disable reCAPTCHA without monitoring spam
- Don't ignore unverified email addresses in Formspree
- Don't expose Formspree ID in public code comments

---

## Support

- **Formspree Support**: https://formspree.io/help
- **reCAPTCHA Support**: https://support.google.com/recaptcha
- **Website Issues**: Contact 514-788-6007

---

## Summary

Your website now has **three layers of protection**:

1. ✅ **Client-side validation** - Checks form data format
2. ✅ **reCAPTCHA v3** - Blocks bots with AI detection (once configured)
3. ✅ **Formspree verification** - Confirms real email addresses

This makes your website **highly resistant to spam and bot attacks** while maintaining excellent user experience.
