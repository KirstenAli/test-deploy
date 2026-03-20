# GitHub Pages Deployment Guide

## Setup Complete ✓

Your Vue website is now configured for GitHub Pages deployment!

### What's Been Set Up:

1. **vue.config.js** - Configured with publicPath `/cadservices/` for production builds
2. **package.json** - Added `deploy` script for manual deployment
3. **GitHub Actions Workflow** - Automated deployment on push to `main` or `feature/vue-version` branches
4. **gh-pages package** - Installed for easy deployment

---

## Step 1: Push Changes to GitHub

Since GitHub no longer accepts password authentication, use one of these methods:

### Option A: Use GitHub CLI (Recommended)
```bash
# Install GitHub CLI if you haven't already
brew install gh

# Authenticate with GitHub
gh auth login

# Then push your code
cd /Users/kirstenali/Downloads/cadservices/vue-website
git push origin feature/vue-version
```

### Option B: Create a Personal Access Token (PAT)
1. Go to GitHub → Settings → Developer settings → Personal access tokens
2. Click "Generate new token"
3. Select scopes: `repo`, `workflow`
4. Copy the token
5. Use it as your password when pushing:
   ```bash
   cd /Users/kirstenali/Downloads/cadservices/vue-website
   git push origin feature/vue-version
   # When prompted for password, paste your PAT
   ```

### Option C: Set Up SSH Key
```bash
# Generate SSH key (if you don't have one)
ssh-keygen -t ed25519 -C "your-email@example.com"

# Add to SSH agent
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

# Add public key to GitHub → Settings → SSH and GPG keys

# Change remote to SSH
git remote set-url origin git@github.com:Abhairien/cadservices.git

# Then push
git push origin feature/vue-version
```

---

## Step 2: Configure GitHub Pages Settings

1. Go to your repository on GitHub: https://github.com/Abhairien/cadservices
2. Navigate to **Settings** → **Pages**
3. Under "Source", select the branch: **gh-pages**
4. Click **Save**

GitHub Actions will automatically create the `gh-pages` branch when it runs.

---

## Step 3: Automatic Deployment

Once you push your code:

1. GitHub Actions workflow will automatically trigger
2. It will build your Vue app
3. Deploy it to the `gh-pages` branch
4. Your site will be live at: **https://abhairien.github.io/cadservices/**

---

## Manual Deployment (Alternative)

If you prefer to deploy manually without GitHub Actions:

```bash
cd /Users/kirstenali/Downloads/cadservices/vue-website

# Build and deploy
npm run deploy
```

This will build your app and push it to the `gh-pages` branch.

---

## Troubleshooting

### Build fails with missing files?
Ensure all Vue files exist in `/src/pages/`:
- ✓ Home.vue
- ✓ About.vue
- ✓ Services.vue
- ✓ Gallery.vue
- ✓ Contact.vue
- ✓ ServiceDetail.vue

### GitHub Pages not updating?
- Check the "Actions" tab in your GitHub repository for workflow status
- Ensure the `gh-pages` branch is selected in Pages settings
- Clear your browser cache or use incognito mode

### Assets loading with wrong paths?
This is fixed by the `publicPath: '/cadservices/'` in vue.config.js. All assets will load correctly from the `/cadservices/` subdirectory.

---

## Next Steps

1. Authenticate with GitHub using one of the methods above
2. Push your code: `git push origin feature/vue-version`
3. Configure GitHub Pages in repository settings
4. Your site will deploy automatically!

Your Vue website will be live at: **https://abhairien.github.io/cadservices/**

