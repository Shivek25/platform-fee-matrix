# ⚡ Platform Fee Matrix (platformfeematrix.com)

> **Compare platform fees, net take-home profit, and global tax compliance across 14 top creator platforms in real time.**

**Platform Fee Matrix** is an interactive financial calculator and decision matrix built for digital creators, SaaS founders, ebook authors, course creators, template sellers, and freelancers. It provides clear, real-time comparisons of exact take-home profits, transaction fees, fixed monthly overheads, and global VAT/tax compliance costs across leading creator payment platforms.

---

## 🚀 What Our Solution Solves

Choosing the right platform to sell digital products, services, or subscriptions has a massive impact on your bottom line. Platform pricing models vary dramatically:

- **Merchant of Record (MoR) Platforms** (Lemon Squeezy, Paddle) charge a slightly higher per-transaction fee (~5% + $0.50) but **automatically handle, remit, and file all global VAT/GST/sales taxes** on your behalf across 100+ countries.
- **Direct Payment Gateways** (Stripe Direct, Whop) offer lower base fee rates (~2.9% + $0.30) but leave **all global tax liability, VAT compliance, and filing requirements to you**.
- **Fixed Monthly Plan Platforms** (Sellfy, Podia, Stan Store, Payhip, Teachable) charge flat monthly fees ($29–$119/mo) with reduced or 0% platform transaction fees, which become far more profitable as your monthly sales volume increases.
- **Freelance & Creator Marketplaces** (Fiverr, Etsy, Amazon KDP, Upwork) charge flat commissions (10%–30%) or handle buyer payment processing fees directly.

**Platform Fee Matrix** eliminates the guesswork by simulating your exact product price and monthly sales volume, factoring in payment processing methods, international card surcharges, PayPal fees, and tier optimizations.

---

## ✨ Key Features

### 1. 🌍 Live Real-Time Multi-Currency Engine
- **Live Mid-Market Exchange Rates**: Automatically fetches live exchange rates via `open.er-api.com` on page load with clean caching.
- **6 Supported Currencies**:
  - **USD ($)** — United States Dollar
  - **EUR (€)** — Euro
  - **GBP (£)** — British Pound
  - **INR (₹)** — Indian Rupee
  - **CAD (C$)** — Canadian Dollar
  - **AUD (A$)** — Australian Dollar
- **End-to-End Real-Time Conversion**: Converts product prices, fixed monthly plan costs ($29, $39, $99, $119), fixed transaction fees ($0.50, $0.30, $0.49, $0.25, $0.20), gross revenue, platform subtotals, net profit, comparison deltas, and preset descriptions instantly when switching currencies.

### 2. 📍 Sticky Controls Panel & Translucent Glassmorphism
- **Sticky Controls Card**: Calculator controls (presets, price & volume sliders, payment toggles, currency selector) stay fixed near the top of the screen as you scroll down through the platform cards, eliminating repetitive scrolling.
- **Translucent Glass Surface**: Styled with an elevated floating shadow and 88% glass opacity with 20px backdrop blur in both dark and light modes.

### 3. 🎨 Dark & Light Dual-Theme Engine
- **Midnight Dark Theme**: Deep dark canvas (`#0b0f17`), glassmorphic card surfaces, and warm ambient golden glows.
- **Eye-Appealing Light Theme**: Pristine background (`#f8fafc`), high-contrast text (`#0f172a`), amber primary accents (`#d97706`), profit green highlights (`#059669`), and sky-blue ambient neon mesh background orbs.
- **Ambient Floating Neon Orbs**: 60 FPS hardware-accelerated background neon orbs that float organically and react dynamically to mouse movement.

### 4. 📊 Compact & Formatted Net Profit Formatting
- **Indian Numbering System (INR ₹)**:
  - **Crores (Cr)**: $\ge 1,00,00,000$ (e.g. `₹1,14,16,895.18 (≈ ₹1.14 Cr)`)
  - **Lakhs (L)**: $\ge 1,00,000$ (e.g. `₹15,42,300.00 (≈ ₹15.42 L)`)
  - **Thousands (K)**: $\ge 1,000$ (e.g. `₹85,000 (≈ ₹85 K)`)
- **Western System (USD $, EUR €, GBP £, CAD C$, AUD A$)**:
  - **Millions (M)**: $\ge 1,000,000$ (e.g. `$1,141,689.52 (≈ $1.14M)`)
  - **Thousands (K)**: $\ge 1,000$ (e.g. `$15,420.00 (≈ $15.42K)`)

### 5. 🏆 14 Supported Creator Platforms
1. **Stripe Direct**: 2.9% + $0.30 per transaction (Direct payment gateway).
2. **Lemon Squeezy**: 5% + $0.50 per sale + 1.5% PayPal/intl (MoR with global tax remittance).
3. **Paddle**: 5% + $0.50 per sale + 1.5% intl (MoR with automated global VAT/tax compliance).
4. **Gumroad**: Direct (10% + $0.50) vs. Discover (30% marketplace cut).
5. **Whop**: 3% platform fee + 2.9% + $0.30 card processing.
6. **Sellfy**: Starter Plan ($29/mo + 0% platform fee, 2.9% + $0.30 card processing).
7. **Podia**: Mover Plan ($39/mo + 0% platform fee, 2.9% + $0.30 card processing).
8. **Stan Store**: Creator Plan ($29/mo + 0% platform fee, 2.9% + $0.30 card processing).
9. **Payhip**: Free (5%), Plus ($29/mo + 2%), Pro ($99/mo + 0%), with dynamic tier recommendation.
10. **Teachable**: Basic ($39/mo + 5%) vs. Pro ($119/mo + 0%), with dynamic tier recommendation.
11. **Fiverr**: 20% flat seller commission (Freelance Marketplace).
12. **Etsy**: $0.20 listing fee + 6.5% transaction + 3% + $0.25 card + 2.5% intl currency conversion (Creator Marketplace).
13. **Amazon KDP**: 30% platform fee (70% royalty tier) + $0.15/MB delivery fee (Digital Book Publishing).
14. **Upwork**: 10% standard freelancer contract service fee (Freelance Platform).

### 6. 🛠️ Toolbar Filtering & Sorting
- **Filter Tabs**: `All Platforms (14)`, `Auto-Tax (MoR)`, `Direct Gateways`, `Fixed Monthly Plans`, `Marketplace & Freelance`.
- **Sorting Dropdown**: `Highest Take-Home`, `Lowest Effective Fee %`, `Alphabetical`.
- **1-Click Quick Presets**: `$5 Micro-Template`, `$29 Ebook`, `$149 Course`, `$49 SaaS`.

### 7. ⚓ Floating Winner Dock
- Glassmorphism floating pill with golden glowing border and live animated pulse dot.
- Displays current top platform winner and take-home net profit.
- Automatically fades out when scrolling down to the guide section and footer.

### 8. 🔍 Interactive Platform Detail Modals
- Clicking any platform pill in the hero section or platform card opens a detailed modal with feature breakdowns, tax coverage, fee structures, and direct site links.

---

## 🛠️ Project Structure

```text
platformfeematrix.com/
├── public/
│   ├── favicon.svg
│   └── logos/               # SVG brand icons for all 14 platforms
├── src/
│   ├── components/
│   │   ├── Calculator.astro   # Interactive matrix, controls panel, platform calculation formulas
│   │   ├── FloatingDock.astro # Floating winner dock & quick nav bar
│   │   ├── GuideSection.astro # Educational platform guide & taxonomy breakdown
│   │   ├── Nav.astro          # Navigation bar & theme switcher
│   │   ├── Footer.astro       # Footer links & copyright
│   │   ├── PlatformModal.astro# Interactive platform detail modal
│   │   └── ScrollProgress.astro# Top reading progress indicator
│   ├── layouts/
│   │   └── Layout.astro       # Root HTML layout, meta tags, and ambient neon background script
│   ├── pages/
│   │   └── index.astro        # Main page hero section, 5-5-4 platform pills, and stats grid
│   └── styles/
│       └── global.css         # CSS design tokens, dark & light themes, and ambient background animations
├── astro.config.mjs
├── package.json
├── package-lock.json
└── tsconfig.json
```

---

## 💻 Quick Start & Commands

Clone the repository and run the development server locally:

```bash
# 1. Clone the repository
git clone https://github.com/Shivek25/platform-fee-matrix.git
cd platform-fee-matrix

# 2. Install dependencies
npm install

# 3. Start local dev server
npm run dev
```

Visit `http://localhost:4321` in your browser.

### Build Commands

| Command | Action |
| :--- | :--- |
| `npm install` | Installs project dependencies |
| `npm run dev` | Starts local development server at `http://localhost:4321` |
| `npm run build` | Builds optimized static site bundle into `./dist/` |
| `npm run preview` | Previews production build bundle locally |

---

## 🛠️ Tech Stack

- **Framework**: [Astro 5](https://astro.build/) (Static Site Generation)
- **Language**: TypeScript & HTML5
- **Styling**: Vanilla CSS Design Tokens, Glassmorphism, & CSS Grid Layout
- **Live Exchange Rate API**: [Open Exchange Rates API](https://open.er-api.com/v6/latest/USD)

---

## 📄 License

MIT License © Platform Fee Matrix
