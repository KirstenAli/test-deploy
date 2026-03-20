# CAD Services Scotland - Deployment & Hosting Guide

## Quick Summary

Your modern Vue2 website is **complete and ready to deploy**. This guide explains how to get it online.

---

## 📋 Pre-Deployment Checklist

Before deploying, ensure you have:

- [ ] Tested locally with `npm run serve`
- [ ] Verified all pages load correctly
- [ ] Tested responsive design on mobile
- [ ] Tested form validation
- [ ] Tested gallery filtering
- [ ] Updated company information (phone, email)
- [ ] Added your own portfolio images (optional)
- [ ] Customized colors if needed (optional)

---

## 🏗️ Building for Production

### Step 1: Build the Project

```bash
cd /Users/kirstenali/Downloads/cadservices/vue-website
npm run build
```

This creates a `dist/` folder with all production-ready files.

### Step 2: Verify Build Output

The `dist/` folder should contain:
- `index.html` - Main HTML file
- `css/` folder - Compiled stylesheets
- `js/` folder - Minified JavaScript
- `favicon.ico` - Website icon

### Step 3: Test Production Build Locally

```bash
# Using Python 3
cd dist
python -m http.server 8000

# Using Node http-server (install if needed)
npm install -g http-server
http-server dist
```

Visit `http://localhost:8000` to test.

---

## 🌐 Deployment Options

### Option 1: Netlify (Recommended - Easiest)

**Benefits**: Free, easy deployment, auto-HTTPS, continuous deployment

**Steps**:
1. Go to [netlify.com](https://www.netlify.com)
2. Sign up or log in with GitHub
3. Click "New site from Git" → Choose GitHub repository
4. Set build command: `npm run build`
5. Set publish directory: `dist`
6. Click "Deploy"

**Or use drag-and-drop**:
1. Go to [netlify.com/drop](https://app.netlify.com/drop)
2. Drag and drop the `dist` folder
3. Your site is live!

### Option 2: Vercel

**Benefits**: Optimized for Vue/React, fast deployment, free tier

**Steps**:
1. Go to [vercel.com](https://vercel.com)
2. Sign up or log in with GitHub
3. Import project → Select GitHub repo
4. Vercel auto-detects Vue.js
5. Click "Deploy"

### Option 3: GitHub Pages (Free)

**Benefits**: Completely free, integrated with GitHub

**Steps**:
1. Push code to GitHub repository
2. Go to Settings → Pages
3. Select "Source" as "GitHub Actions"
4. Add `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 16
      - run: npm install
      - run: npm run build
      - uses: actions/upload-artifact@v3
        with:
          name: dist
          path: dist
```

### Option 4: Traditional Web Server (Apache/Nginx)

**For your own server**:

1. Build project: `npm run build`
2. Upload `dist` folder contents to web server
3. Configure server routing:

**Nginx Configuration**:
```nginx
server {
    listen 80;
    server_name www.cadscotland.co.uk;

    root /var/www/cadservices/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Caching
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

**Apache Configuration** (.htaccess):
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Caching headers
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresDefault "access plus 1 month"
  ExpiresByType text/html "access plus 0 seconds"
</IfModule>
```

### Option 5: AWS S3 + CloudFront

**Benefits**: Scalable, professional, global CDN

**Steps**:
1. Create S3 bucket
2. Upload `dist` folder contents
3. Enable static website hosting
4. Set up CloudFront distribution
5. Point domain to CloudFront

---

## 🔗 Setting Up Your Domain

### Option A: New Domain

1. Register domain (Namecheap, GoDaddy, etc.)
2. Choose hosting from options above
3. Update nameservers to point to hosting provider
4. Set up SSL certificate (most providers do this automatically)

### Option B: Existing Domain

**For Netlify/Vercel**:
1. In hosting dashboard, add custom domain
2. Update DNS records as instructed
3. SSL auto-configured

**For self-hosted**:
1. Point A record to your server IP
2. Set up SSL with Let's Encrypt (free)
3. Update web server configuration

---

## 🔒 SSL/HTTPS Setup

Most modern hosting (Netlify, Vercel, GitHub Pages) automatically provides HTTPS.

**For self-hosted servers**, use Let's Encrypt:

```bash
# Using Certbot
sudo certbot certonly --webroot -w /var/www/cadservices -d www.cadscotland.co.uk
```

---

## 📧 Contact Form Setup

The contact form currently shows success messages but doesn't send emails. To enable email:

### Option 1: Formspree (Recommended)

1. Go to [formspree.io](https://formspree.io)
2. Create account
3. Get form ID
4. Update `Contact.vue` submitForm() method:

```javascript
async submitForm() {
  if (!this.validateForm()) return
  
  this.isSubmitting = true
  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.form)
    })
    
    if (response.ok) {
      this.submitted = true
    }
  } catch (error) {
    this.errors.submit = 'Failed to send message'
  } finally {
    this.isSubmitting = false
  }
}
```

### Option 2: EmailJS

1. Go to [emailjs.com](https://www.emailjs.com)
2. Sign up and create service/template
3. Install EmailJS: `npm install @emailjs/browser`
4. Initialize in main.js:

```javascript
import emailjs from '@emailjs/browser'
emailjs.init('YOUR_PUBLIC_KEY')
```

### Option 3: Backend API

Connect to your own backend (Node.js, Python, PHP, etc.)

---

## 📊 Performance Optimization

### Enable Gzip Compression

**Netlify/Vercel**: Automatic ✅

**Nginx**:
```nginx
gzip on;
gzip_types text/plain text/css text/javascript application/json;
gzip_min_length 1000;
```

### Add Analytics

Add Google Analytics to `public/index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## 🔍 SEO Checklist

- [ ] Add Google Search Console verification
- [ ] Submit sitemap to Google
- [ ] Add meta descriptions to pages
- [ ] Ensure page titles are descriptive
- [ ] Add Open Graph meta tags
- [ ] Test with Google PageSpeed Insights
- [ ] Monitor Core Web Vitals

---

## 📱 Post-Deployment Testing

After deployment, verify:

1. **Load**: Does site load quickly?
2. **Navigation**: Do all links work?
3. **Responsiveness**: Test on mobile devices
4. **Forms**: Test contact form submission
5. **Images**: All images load?
6. **Performance**: Check Lighthouse score
7. **Mobile**: Test on real devices
8. **Analytics**: Tracking is working?

### Quick Testing URLs:

- Google PageSpeed: https://pagespeed.web.dev/
- Mobile Testing: https://search.google.com/test/mobile-friendly
- Lighthouse: Built into Chrome DevTools (F12)
- Responsive Design: Chrome DevTools → Toggle Device Toolbar (Ctrl+Shift+M)

---

## 🐛 Troubleshooting

### White Screen After Deployment
- Check browser console (F12) for JavaScript errors
- Verify all files uploaded correctly
- Check if routing is configured properly on server

### CSS Not Loading
- Verify `dist` folder was built correctly
- Check web server is serving CSS files
- Verify MIME types are set correctly

### Form Not Submitting
- Check browser console for errors
- Verify form submission endpoint is correct
- Check CORS settings if using external API

### Images Not Showing
- Verify image paths are correct
- Check if images are in deployment folder
- Use relative paths, not absolute paths

---

## 📞 Support Resources

- [Vue.js Deployment Guide](https://vitejs.dev/guide/deploy.html)
- [Netlify Documentation](https://docs.netlify.com/)
- [Vercel Guides](https://vercel.com/docs)
- [GitHub Pages Help](https://docs.github.com/en/pages)

---

## 🎯 Next Steps

1. **Choose hosting** → Pick from options above
2. **Build project** → `npm run build`
3. **Deploy** → Upload to chosen hosting
4. **Setup domain** → Point domain to site
5. **Setup email** → Configure contact form
6. **Monitor** → Add analytics and monitoring
7. **Maintain** → Update content regularly

---

## 📅 Maintenance Schedule

- **Monthly**: Review analytics, check for broken links
- **Quarterly**: Update content, add new portfolio items
- **Yearly**: Renew SSL certificates, update dependencies, security review

---

**Deployment Guide Version**: 1.0
**Last Updated**: March 2026
**Status**: Ready for Deployment ✅

