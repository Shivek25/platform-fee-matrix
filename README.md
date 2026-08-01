# ⚡ Platform Fee Matrix (platformfeematrix.com)

> **Compare platform fees, net take-home profit, and global tax compliance across 10 top creator platforms in real time.**

**Platform Fee Matrix** is an interactive financial calculator and decision matrix built for digital creators, SaaS founders, ebook authors, course creators, and template sellers. It provides clear, real-time comparisons of exact take-home profits, transaction fees, fixed monthly overheads, and global VAT/tax compliance costs across leading creator payment platforms.

---

## 🚀 What Our Solution Solves

Choosing the right platform to sell digital products or subscriptions has a massive impact on your bottom line. Platform pricing models vary dramatically:

- **Merchant of Record (MoR) Platforms** (Lemon Squeezy, Paddle) charge a slightly higher per-transaction fee (~5% + $0.50) but **automatically handle, remit, and file all global VAT/GST/sales taxes** on your behalf across 100+ countries.
- **Direct Payment Gateways** (Stripe Direct, Whop) offer lower fee rates (~2.9% + $0.30) but leave **all global tax liability, VAT compliance, and filing requirements to you**.
- **Fixed Monthly Plan Platforms** (Sellfy, Podia, Stan Store, Payhip, Teachable) charge flat monthly fees ($29–$119/mo) with reduced or 0% platform transaction fees, which become far more profitable as your monthly volume increases.

**Platform Fee Matrix** eliminates the guesswork by simulating your exact product price and monthly sales volume, factoring in payment processing methods, international card surcharges, and tier optimizations.

---

## ✨ Key Features

### 1. 🌍 Live Real-Time Multi-Currency Engine
- **Live Mid-Market Exchange Rates**: Automatically fetches live exchange rates via `open.er-api.com` on page load.
- **6 Supported Currencies**:
  - **USD ($)** — United States Dollar
  - **EUR (€)** — Euro
  - **GBP (£)** — British Pound
  - **INR (₹)** — Indian Rupee
  - **CAD (C$)** — Canadian Dollar
  - **AUD (A$)** — Australian Dollar
- **End-to-End Real-Time Conversion**: Converts product prices, fixed monthly plan costs ($29, $39, $99, $119), fixed transaction fees ($0.50, $0.30, $0.49), gross revenue, platform subtotals, net profit, comparison deltas, and preset descriptions instantly when switching currencies.

### 2. 📊 Compact & Formatted Net Profit Formatting
- **Indian Numbering System (INR ₹)**:
  - **Crores (Cr)**: $\ge 1,00,00,000$ (e.g. `₹1,14,16,895.18 (≈ ₹1.14 Cr)`)
  - **Lakhs (L)**: $\ge 1,00,000$ (e.g. `₹15,42,300.00 (≈ ₹15.42 L)`)
  - **Thousands (K)**: $\ge 1,000$ (e.g. `₹85,000 (≈ ₹85 K)`)
- **Western System (USD $, EUR €, GBP £, CAD C$, AUD A$)**:
  - **Millions (M)**: $\ge 1,000,000$ (e.g. `$1,141,689.52 (≈ $1.14M)`)
  - **Thousands (K)**: $\ge 1,000$ (e.g. `$15,420.00 (≈ $15.42K)`)
- Displayed alongside exact net profits across all 14 platform cards, multi-tier rows, summary card, and floating winner dock.

### 3. 📈 Unlimited Dynamic Sliders & Numeric Inputs
- **Expanded Scales**: Default sliders scale up to `$10,000` price and `100,000` monthly sales volume.
- **Auto-Expanding Max Bounds**: Typing high values into numeric input fields automatically expands the slider `max` bound on the fly without artificial capping or ceiling limits.

### 4. 🏆 14 Supported Creator Platforms
1. **Stripe Direct**: 2.9% + $0.30 per transaction (Direct payment gateway).
2. **Lemon Squeezy**: 5% + $0.50 per sale (MoR with global tax remittance).
3. **Paddle**: 5% + $0.50 per sale (MoR with automated global VAT/tax compliance).
4. **Gumroad**: Direct (10% + $0.50) vs. Discover (30% marketplace cut).
5. **Whop**: 3% platform fee + 2.9% + $0.30 card processing.
6. **Sellfy**: Starter Plan ($29/mo + 0% platform fee, 2.9% + $0.30 card processing).
7. **Podia**: Mover Plan ($39/mo + 0% platform fee, 2.9% + $0.30 card processing).
8. **Stan Store**: Creator Plan ($29/mo + 0% platform fee, 2.9% + $0.30 card processing).
9. **Payhip**: Free (5%), Plus ($29/mo + 2%), Pro ($99/mo + 0%), with dynamic tier recommendation.
10. **Teachable**: Basic ($39/mo + 5%) vs. Pro ($119/mo + 0%), with dynamic tier recommendation.
11. **Fiverr**: 20% flat seller commission (Freelance Marketplace).
12. **Etsy**: $0.20 listing fee + 6.5% transaction + 3% + $0.25 card fee (Creator Marketplace).
13. **Amazon KDP**: 30% platform fee (70% royalty tier) + $0.15/MB delivery fee (Digital Book Publishing).
14. **Upwork**: 10% standard freelancer contract service fee (Freelance Platform).

### 5. 🛠️ Toolbar Filtering & Sorting
- **Filter Tabs**: `All Platforms (14)`, `Auto-Tax (MoR)`, `Direct Gateways`, `Fixed Monthly Plans`, `Marketplace & Freelance`.
- **Sorting Dropdown**: `Highest Take-Home`, `Lowest Effective Fee %`, `Alphabetical`.
- **1-Click Quick Presets**: `$5 Micro-Template`, `$29 Ebook`, `$149 Course`, `$49 SaaS`.

### 6. ⚓ High-Contrast Floating Winner Dock
- High-opacity glassmorphism floating pill (`rgba(13, 19, 32, 0.95)`) with amber-gold glowing outline and dual 3D elevation shadow.
- Live animated pulse dot tracking the active top platform.
- Displays clean, un-nested profit metrics (e.g. `⚡ Best: Stripe Direct  €10.13M net  (€10,130,571.05)`).

---

## 🛠️ Project Structure

```text
platformfeematrix.com/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Calculator.astro   # Main interactive matrix, exchange rate engine, platform formulas
│   │   ├── FloatingDock.astro # Floating winner dock & quick nav bar
│   │   ├── GuideSection.astro # Educational platform guide & taxonomy breakdown
│   │   ├── Header.astro       # Navigation bar & brand header
│   │   └── Footer.astro       # Footer links & copyright
│   ├── layouts/
│   │   └── Layout.astro       # Root HTML layout & meta tags
│   ├── pages/
│   │   └── index.astro        # Main page with hero section & stats grid
│   └── styles/
│       └── global.css         # CSS design tokens, custom theme rules & base typography
├── graphify-out/              # Knowledge graph output (GRAPH_REPORT.md, graph.json)
├── astro.config.mjs
└── package.json
```

---

## 💻 Development Commands

| Command | Action |
| :--- | :--- |
| `npm install` | Installs project dependencies |
| `npm run dev` | Starts local development server at `http://localhost:4321` |
| `npm run build` | Builds optimized static site bundle into `./dist/` |
| `npm run preview` | Previews production build locally |

---

## 🛠️ Tech Stack

- **Framework**: [Astro 5](https://astro.build/) (Static Site Generation)
- **Styling**: Vanilla CSS Design Tokens & CSS Grid layout
- **Live Rates API**: [Open Exchange Rates API](https://open.er-api.com/v6/latest/USD)
- **Knowledge Graph**: Graphify AST Code Graph

---

## 📄 License

MIT License © Platform Fee Matrix
