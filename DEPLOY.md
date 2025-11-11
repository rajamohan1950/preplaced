# Deployment Guide for Railway

## Prerequisites
1. Railway account (sign up at https://railway.app)
2. GitHub repository with your code
3. Railway CLI (optional) or use Railway web dashboard

## Deployment Steps

### Option 1: Deploy via Railway Dashboard (Recommended)

1. **Push to GitHub**
   ```bash
   git remote add origin <your-github-repo-url>
   git branch -M main
   git push -u origin main
   ```

2. **Connect to Railway**
   - Go to https://railway.app
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Authorize Railway to access your GitHub
   - Select your `Preplaced.com` repository

3. **Configure Deployment**
   - Railway will auto-detect the static site
   - It will use the `Procfile` or `package.json` start script
   - The `railway.json` file provides additional configuration

4. **Set Environment Variables** (if needed)
   - Go to your project settings
   - Add any environment variables if required

5. **Deploy**
   - Railway will automatically deploy on every push to main
   - Or click "Deploy" button to deploy manually

### Option 2: Deploy via Railway CLI

1. **Install Railway CLI**
   ```bash
   npm i -g @railway/cli
   ```

2. **Login to Railway**
   ```bash
   railway login
   ```

3. **Initialize Railway Project**
   ```bash
   cd Preplaced.com
   railway init
   ```

4. **Deploy**
   ```bash
   railway up
   ```

## Configuration Files

- **`Procfile`**: Specifies the command to run the web server
- **`package.json`**: Contains start script and Node.js configuration
- **`railway.json`**: Railway-specific deployment configuration
- **`server.js`**: Alternative Node.js server (if needed)

## Static Site Serving

Railway will serve the static files using:
- `npx serve -s . -l $PORT` (from Procfile/package.json)
- This serves all files in the root directory
- `-s` flag enables SPA mode (serves index.html for all routes)
- `-l $PORT` uses Railway's assigned port

## Custom Domain

1. Go to your Railway project settings
2. Click "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Environment Variables

Currently, no environment variables are required for this static site.

## Troubleshooting

- **Build fails**: Check that `package.json` has correct Node.js version
- **404 errors**: Ensure `index.html` is in root directory
- **Port issues**: Make sure server uses `$PORT` environment variable
- **Static files not loading**: Check file paths are relative to root

## Notes

- Railway automatically installs dependencies from `package.json`
- The `serve` package will be installed automatically via npx
- All routes will serve `index.html` (SPA mode) for client-side routing
- Static assets (CSS, JS, images) are served from their respective directories

