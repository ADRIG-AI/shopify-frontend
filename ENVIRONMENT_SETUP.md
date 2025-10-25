# Environment Variables Setup

This document explains how to properly configure environment variables for the Dagala Analytics application.

## Required Environment Variables

### 1. Shopify App Credentials
```bash
VITE_SHOPIFY_API_KEY=your_shopify_app_client_id
VITE_SHOPIFY_API_SECRET=your_shopify_app_client_secret
VITE_REDIRECT_URI=http://localhost:8080/auth/callback
```

### 2. Backend Configuration
```bash
VITE_BACKEND_ENDPOINT=http://localhost:3001/api
```

### 3. Supabase Configuration
```bash
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_ACCESS_TOKEN=your_supabase_access_token
```

### 4. Stripe Configuration (Optional)
```bash
STRIPE_SECRET_KEY=your_stripe_secret_key
VITE_STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
```

## Setup Instructions

### For Local Development

1. **Copy the example file:**
   ```bash
   cp env.example .env
   ```

2. **Update the values in `.env` with your actual credentials:**
   - Replace Shopify app credentials with your actual Shopify app
   - Update Supabase credentials with your project details
   - Set the correct backend endpoint

3. **Start the development server:**
   ```bash
   npm run dev
   ```

### For Docker Deployment

1. **Set environment variables in your system:**
   ```bash
   export VITE_SHOPIFY_API_KEY=your_actual_key
   export VITE_SHOPIFY_API_SECRET=your_actual_secret
   # ... set all other variables
   ```

2. **Run Docker Compose:**
   ```bash
   docker-compose up
   ```

### For Production Deployment (Vercel/Netlify)

1. **Set environment variables in your deployment platform:**
   - Go to your project settings
   - Add all required environment variables
   - Make sure to use production URLs for backend and redirect URIs

## Security Notes

- **Never commit `.env` files to version control**
- **Use different credentials for development and production**
- **Rotate credentials regularly**
- **The `VITE_SHOPIFY_API_SECRET` should ideally be used only on the backend**

## Current Configuration

The application is currently configured to use environment variables from:
- `.env` file (for local development)
- Docker environment variables (for containerized deployment)
- Platform environment variables (for production deployment)

All hardcoded credentials have been removed and replaced with environment variable references.
