# 🌐 GDKYD International — Official Website

> **Guangdong KYD** — Leading Manufacturer of Nonwoven PPE & Medical Equipment Machinery.  
> Production URL: [https://gdkyd.com](https://gdkyd.com)

---

## 📖 Overview

This repository contains the modern, high-performance international web application for **Guangdong KYD**, built with **Next.js 16 (App Router)** and **React 19**. It features product catalogs, engineering processes, company portfolios, industry news, dynamic SEO sitemaps, and automated CI/CD deployment pipelines.

---

## ⚡ Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Framework** | [Next.js 16 (App Router & Turbopack)](https://nextjs.org/) |
| **UI & Runtime** | [React 19](https://react.dev/), [Node.js 20+](https://nodejs.org/) |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com/), [DaisyUI 5](https://daisyui.com/) |
| **Animations & UI** | [Framer Motion](https://www.framer.com/motion/), [React Slick](https://react-slick.neostack.com/), [React Icons](https://react-icons.github.io/react-icons/) |
| **Feedback & UX** | [React Hot Toast](https://react-hot-toast.com/), [NextTopLoader](https://github.com/TheSGJ/nextjs-toploader) |
| **Analytics & SEO** | `@next/third-parties/google` (Google Tag Manager & Google Analytics 4) |
| **CI / CD & Hosting**| GitHub Actions, Hostinger VPS, PM2, Nginx Reverse Proxy |

---

## ✨ Key Features

- **🚀 Next.js 16 App Router**: Server-side rendering (SSR) and static generation (SSG) for fast page loads and Core Web Vitals performance.
- **🔍 Comprehensive SEO Engine**:
  - OpenGraph, Twitter cards, and structured metadata.
  - Multi-language `hreflang` alternate links (`en`, `bn`, `pt`, `de`, `ja`, `hi`).
  - Search engine verification tags (Google Search Console, Yandex, Baidu).
  - Dynamic `sitemap.xml` generators for products, categories, news, and portfolios.
  - Auto-generated `robots.txt`.
- **🛡️ Enterprise Security**: Pre-configured HTTP security headers in `next.config.ts` including strict CSP (Content Security Policy), HSTS, X-Frame-Options, and Referrer-Policy.
- **📊 Analytics Ready**: Integrated Google Tag Manager (`GTM-W3BPJSZR`) and GA4 (`G-9GV6PTWLPM`) via `@next/third-parties/google`.
- **💬 Interactive Features**: Live inquiry chatbox, interactive photo viewer, dynamic progress bar, and responsive navigation.
- **🔄 Automated CI/CD Pipeline**: GitHub Actions workflow automatically builds and deploys updates to the Hostinger VPS using PM2.

---

## 📁 Project Structure

```text
├── .github/
│   └── workflows/
│       └── deploy-app.yaml      # Automated CI/CD deployment to Hostinger VPS
├── public/                      # Static assets, logos, and icons
├── src/
│   ├── app/
│   │   ├── about/               # About Us page
│   │   ├── category/            # Product category listings & dynamic sitemaps
│   │   ├── contact/             # Contact and inquiry form
│   │   ├── news/                # News, guides & dynamic article routes
│   │   ├── portfolio/           # Project showcases & sitemap
│   │   ├── privacy-policy/      # Privacy Policy
│   │   ├── process/             # Manufacturing & technology process
│   │   ├── product/             # Product catalog & dynamic slug details
│   │   ├── profile/             # Company profile & certifications
│   │   ├── success/             # Form submission success feedback
│   │   ├── terms-conditions/    # Terms & conditions
│   │   ├── globals.css          # Global CSS & Tailwind configuration
│   │   ├── layout.js            # Root layout with GTM, GA4, Navigation & Footer
│   │   ├── page.js              # Home landing page
│   │   ├── robots.js            # Robots.txt generator
│   │   └── sitemap.js           # Root sitemap generator
│   ├── components/              # Modular UI components (Navbar, Footer, ChatBox, etc.)
│   ├── lib/                     # Shared libraries & API client helpers
│   └── utils/                   # Helper functions and utilities
├── Constant.js                  # Global API endpoints & constants
├── next.config.ts               # Next.js configurations & CSP security headers
├── package.json                 # Project dependencies and npm scripts
└── tsconfig.json                # TypeScript / Next.js type configurations
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `v20.x` or `v22.x` / `v24.x`
- **npm** (or `pnpm` / `yarn`)
- **Git**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sultanmahmud07/GDKYD-International.git
   cd GDKYD-International
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **View in browser:**  
   Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Runs the Next.js development server with Turbopack on port 3000 |
| `npm run build` | Builds an optimized production bundle |
| `npm run start` | Runs the Next.js production server (requires `npm run build` first) |
| `npm run lint` | Runs ESLint to check for code quality and style issues |

---

## 🚢 CI/CD & Deployment

Every push to the `main` branch triggers an automated GitHub Actions workflow (`.github/workflows/deploy-app.yaml`):

1. Checks out the repository.
2. Sets up Node.js 24 and runs `npm ci`.
3. Compiles the Next.js production build (`npm run build`).
4. Securely establishes SSH connection with the Hostinger VPS.
5. Syncs files via `rsync` into `/var/www/Gdkyd-Frontend`.
6. Installs production dependencies and gracefully reloads PM2 process `gdkyd-frontend`.

### Required GitHub Secrets

To ensure automated deployment works, configure these repository secrets under **Settings → Secrets and variables → Actions**:

- `HOSTINGER_HOST`: IP address of the Hostinger VPS.
- `HOSTINGER_USER`: VPS SSH user (e.g., `root`).
- `HOSTINGER_SSH_KEY`: SSH private key with authorized VPS access.
- `HOSTINGER_SSH_PORT`: *(Optional)* SSH port (default: `22`).
- `FRONTEND_ENVS`: *(Optional)* Production `.env` contents.

---

## 📄 License & Ownership

© **Guangdong KYD (GDKYD)**. All rights reserved.  
Unauthorized copying or distribution of these assets and source code is strictly prohibited.
