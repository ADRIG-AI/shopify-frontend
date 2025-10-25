#!/bin/bash

# Environment Setup Script for Dagala Analytics
echo "🔧 Setting up environment variables for Dagala Analytics..."

# Check if .env already exists
if [ -f ".env" ]; then
    echo "⚠️  .env file already exists. Backing up to .env.backup"
    cp .env .env.backup
fi

# Copy example file to .env
if [ -f "env.example" ]; then
    cp env.example .env
    echo "✅ Created .env file from env.example"
    echo ""
    echo "📝 Please update the following values in your .env file:"
    echo "   - VITE_SHOPIFY_API_KEY: Your Shopify app client ID"
    echo "   - VITE_SHOPIFY_API_SECRET: Your Shopify app client secret"
    echo "   - VITE_SUPABASE_URL: Your Supabase project URL"
    echo "   - VITE_SUPABASE_ANON_KEY: Your Supabase anon key"
    echo "   - SUPABASE_ACCESS_TOKEN: Your Supabase access token"
    echo "   - STRIPE_SECRET_KEY: Your Stripe secret key (if using Stripe)"
    echo ""
    echo "🚀 After updating .env, run: npm run dev"
else
    echo "❌ env.example file not found. Please create it manually."
fi
