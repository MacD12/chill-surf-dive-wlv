# 🏄 Chill & Surf — Weligama Surf & Dive Experience

A modern, responsive website built using **Next.js** and **Tailwind CSS** for **Chill & Surf**, a Weligama-based surf and dive camp. The project combines sleek UI, fast performance, and a relaxing island aesthetic to attract adventure seekers from around the world.

---

## 🌴 Overview

**Chill & Surf** provides surf lessons, diving experiences, and oceanfront activities in southern Sri Lanka. This web project helps showcase packages, instructors, and the natural charm of the destination while ensuring high user engagement and SEO performance.

---

## ⚙️ Tech Stack

* **Framework:** Next.js 15
* **Language:** TypeScript
* **Styling:** Tailwind CSS + Shadcn/UI
* **UI Components:** Radix UI, Lucide React Icons
* **Animations:** Framer Motion
* **Data Fetching:** @tanstack/react-query
* **Theme System:** next-themes (light/dark mode)
* **Notifications:** sonner

---

## ✨ Features

* 🏄‍♂️ **Modern UI:** Clean, professional beach aesthetic with responsive layouts.
* 🌊 **Dynamic Pages:** For Surfing, Diving, Pricing, About, and Contact sections.
* 💡 **Reusable Components:** Built with Shadcn UI and Radix primitives.
* 🌗 **Dark/Light Themes:** Handled via next-themes.
* ⚡ **Fast Performance:** Optimized for Lighthouse and Core Web Vitals.
* 🔔 **Interactive Toasts:** Via sonner and Radix Toast.
* 🧭 **SEO Optimized:** Includes semantic HTML and customizable metadata.

---

## 📁 Project Structure

```
chill-surf-next/
├── app/                  # App router pages
│   ├── layout.tsx        # Global layout with ThemeProvider
│   └── page.tsx          # Homepage rendering App.tsx
├── components/           # All reusable UI and content components
│   ├── ui/               # Shadcn-style UI primitives
│   ├── pages/            # Page-level components
│   ├── Layout.tsx        # Shared layout
│   └── App.tsx           # Root React component
├── lib/                  # Utility functions
│   └── utils.ts          # cn() helper for class merging
├── public/               # Static images and media
│   └── assets/           # Image assets
├── styles/               # Tailwind + global CSS
│   └── globals.css
└── package.json          # Project config and dependencies
```

---

## 🧩 Installation

```bash
# Clone the repo
git clone https://github.com/yourusername/chill-and-surf.git

# Navigate into it
cd chill-and-surf

# Install dependencies
npm install

# Start development
npm run dev
```

Visit: **[http://localhost:3000](http://localhost:3000)**

---

## 🚀 Deployment

Deploy easily with **Vercel**, **Netlify**, or **AWS Amplify**.

```bash
npm run build
npm start
```

For automated CI/CD, connect your repo to [Vercel](https://vercel.com).

---

## 🧠 Developer Notes

* Uses Shadcn’s UI pattern for consistent styling.
* All UI components are modular and reusable.
* Assets live in `/public/assets` for easy CDN optimization.
* Compatible with Node.js v18+.

---

## ✍️ Credits

**Developer:** Yesith Themiya Pieris
**Email:** [themiyapieris33@gmail.com](mailto:themiyapieris33@gmail.com)
**Framework:** Next.js + Tailwind CSS
**Design & Concept:** GroBern
**Hosting:** Vercel / AWS Lightsail

---

## 📞 Contact

🌐 Website: [https://grobern.com](https://grobern.com)
📍 Weligama, Sri Lanka
📧 [themiyapieris33@gmail.com](mailto:themiyapieris33@gmail.com)

---

> *"Ride the waves. Explore the deep. Live the island life with Chill & Surf."*
