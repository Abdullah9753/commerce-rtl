
# Lumina | Next.js Commerce RTL Starter

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FAbdullah9753%2Fcommerce-rtl&project-name=lumina-commerce&repository-name=lumina-commerce&env=SHOPIFY_STORE_DOMAIN,SHOPIFY_STOREFRONT_ACCESS_TOKEN,COMPANY_NAME,SITE_NAME)

**Lumina** is a localized, **RTL-first** implementation of the official Next.js Commerce. It bridges the gap between the cutting-edge performance of the original template and the specific requirements of Arabic/RTL storefronts, without sacrificing speed or architecture.

This project demonstrates how to implement **Internationalization (i18n)** and **Right-to-Left (RTL)** layouts while strictly adhering to **React Server Components (RSC)** best practices and maintaining a **100/100 Lighthouse score**.

---

## 🚀 Key Features

- **🌍 Native RTL Support:** Full Arabic localization with logical CSS properties (Start/End) ensuring zero layout shifts.
- **⚡ Uncompromised Performance:** Maintains the original 100 Lighthouse score. The direction logic (`dir="rtl"`) is injected server-side to prevent hydration mismatches.
- **🛍️ Shopify 2.0 Integration:** Fully compatible with Shopify Headless architecture.
- **🧩 Pure Server Components:** No client-side bloat for translation logic. Content is fetched and rendered on the server.

---

## 💡 Why this fork?

Handling RTL in modern Next.js 14/15 App Router can be tricky. Many solutions force client-side rendering or heavy libraries that degrade Core Web Vitals.

**Lumina solves this by:**
1.  Using **Server-Side Direction Injection**: The `<html>` tag receives the correct `dir` attribute from the server headers/URL, ensuring the browser renders RTL immediately (No FOUC).
2.  **Logical CSS**: Leveraging Tailwind's logical properties (`ps`, `pe`, `ms`, `me`) to maintain a single maintainable codebase for both LTR and RTL.

---

## 📦 Getting Started

### 1. Clone the repository
```bash
git clone [https://github.com/Abdullah9753/commerce-rtl.git](https://github.com/Abdullah9753/commerce-rtl.git)
cd commerce-rtl
```
## Running locally

You will need to use the environment variables [defined in `.env.example`](.env.example) to run Next.js Commerce. It's recommended you use [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables) for this, but a `.env` file is all that is necessary.

> Note: You should not commit your `.env` file or it will expose secrets that will allow others to control your Shopify store.

1. Install Vercel CLI: `npm i -g vercel`
2. Link local instance with Vercel and GitHub accounts (creates `.vercel` directory): `vercel link`
3. Download your environment variables: `vercel env pull`

```bash
pnpm install
pnpm dev
```

Your app should now be running on [localhost:3000](http://localhost:3000/).


## Vercel, Next.js Commerce, and Shopify Integration Guide

You can use this comprehensive [integration guide](https://vercel.com/docs/integrations/ecommerce/shopify) with step-by-step instructions on how to configure Shopify as a headless CMS using Next.js Commerce as your headless Shopify storefront on Vercel.

## 👥 Created by

**Lumina** is a project by **[Bamzahem Digital](https://github.com/Abdullah9753)**, led by **Abdullah Bamzahem**.

We specialize in building high-performance, headless e-commerce solutions using Next.js & Shopify.

- 🌐 **GitHub:** [@Abdullah9753](https://github.com/Abdullah9753)
- 📧 **Email:** dev.abdullah.bamzahem@gmail.com

Acknowledgments & Credits
This project is built upon the incredible foundation provided by Vercel Commerce.

We are deeply grateful to the Next.js and Vercel teams for open-sourcing such a high-quality standard for e-commerce. This fork aims to extend their vision to the Arabic-speaking developer community, proving that "The Web is Global" and high performance is possible in every language.

📄 License
This project is open-source and available under the MIT License.