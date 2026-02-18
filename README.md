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
