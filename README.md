# Website-To-Prove

A modern React storefront scaffold inspired by premium sales/course commerce sites.

## Features

- React + Vite architecture
- Multi-page routing (Home, Shop, Product, About, Contact)
- Animated UI via Framer Motion
- Global cart with quantity controls and local storage persistence
- Checkout CTA ready for Shopify integration
- Configurable favicon/tab logo

## Quick Start

1. Install Node.js 20+
2. In this folder, run:

```bash
npm install
npm run dev
```

## Shopify Wiring (Optional)

Create `.env` with:

```bash
VITE_SHOPIFY_STORE_DOMAIN=your-shop.myshopify.com
VITE_SHOPIFY_STOREFRONT_TOKEN=your_storefront_token
```

If not set, the app uses local demo product data.

## Deploy on Railway

This repo is configured for Railway with `railway.json`.

1. Create a new Railway project and link this GitHub repo.
2. Railway will run:
	- Build: `npm install && npm run build`
	- Start: `npm run start`
3. Add optional environment variables in Railway:
	- `VITE_SHOPIFY_STORE_DOMAIN`
	- `VITE_SHOPIFY_STOREFRONT_TOKEN`

The app serves the production Vite build on `0.0.0.0:$PORT`.
