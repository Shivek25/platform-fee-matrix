// src/data/platforms.ts
// Single authoritative source of truth for platform fee profiles and SEO data

export interface PricingTier {
  name: string;
  monthlyCost: number;
  variableFeePercent: number;
  fixedFeePerUnit: number;
  description: string;
}

export interface PlatformSEOProfile {
  id: string;
  name: string;
  slug: string;
  icon: string;
  badge: string;
  badgeColor: string;
  category: "mor" | "direct" | "monthly" | "marketplace";
  categoryName: string;
  headline: string;
  description: string;
  bestFor: string;
  websiteUrl: string;
  feeFormula: string;
  taxMode: string;
  isMoR: boolean;
  payoutSchedule: string;
  payoutMethods: string[];
  payoutThreshold: string;
  chargebackFee: string;
  refundPolicyNotes: string;
  intlFeeNote: string;
  paypalFeeNote: string;
  pricingTiers: PricingTier[];
  pros: string[];
  cons: string[];
  hiddenFees: string[];
  faqs: Array<{ question: string; answer: string }>;
  lastVerified: string;
  officialPricingUrl?: string;
  calcDefaults: {
    price: number;
    volume: number;
    variableRate: number;
    fixedFee: number;
    monthlyFee: number;
  };
}

export const PLATFORMS_DATA: Record<string, PlatformSEOProfile> = {
  gumroad: {
    id: "gumroad",
    name: "Gumroad",
    slug: "gumroad",
    icon: "/icons/gumroad.svg",
    badge: "Creator Storefront",
    badgeColor: "#06B6D4",
    category: "direct",
    categoryName: "Creator Storefront",
    headline: "Zero-friction digital creator storefront with built-in audience discovery",
    description: "Gumroad is the classic zero-friction storefront for creators to sell ebooks, digital templates, software, and memberships. It handles digital product delivery and EU VAT with zero monthly subscription fees.",
    bestFor: "Indie creators, artists, ebook authors, and Notion template creators getting started without upfront costs.",
    websiteUrl: "https://gumroad.com",
    feeFormula: "Direct: 10% + $0.50 + Card Fee (2.9% + $0.30) · Discover: 30% flat",
    taxMode: "Gumroad Collects & Remits EU/UK VAT and US Sales Tax",
    isMoR: false,
    payoutSchedule: "Weekly (every Friday)",
    payoutMethods: ["Direct Bank Deposit (ACH)", "PayPal", "Stripe Connect"],
    payoutThreshold: "$10.00",
    chargebackFee: "$15.00 per disputed charge",
    refundPolicyNotes: "Platform fees are non-refundable when refunding customers.",
    intlFeeNote: "+1.5% surcharge on cross-border cards",
    paypalFeeNote: "3.49% + $0.49 when customer pays with PayPal",
    pricingTiers: [
      {
        name: "Direct Sales",
        monthlyCost: 0,
        variableFeePercent: 12.9,
        fixedFeePerUnit: 0.80,
        description: "10% Gumroad platform fee + 2.9% + $0.30 credit card processing + $0.50 per sale flat fee."
      },
      {
        name: "Gumroad Discover",
        monthlyCost: 0,
        variableFeePercent: 30.0,
        fixedFeePerUnit: 0.0,
        description: "30% flat commission on sales originating from Gumroad's recommendation engine."
      }
    ],
    pros: [
      "No upfront monthly subscriptions: completely free to set up and list products",
      "Huge built-in creator audience and active recommendation marketplace",
      "Automated EU/UK VAT collection and remittance on digital goods",
      "Built-in affiliate marketing, license keys, and email broadcast features"
    ],
    cons: [
      "10% + $0.50 platform cut plus payment gateway fees makes it expensive at scale",
      "Discover marketplace traffic takes a steep 30% revenue share",
      "Weekly payout schedule with 7-day hold on initial sales"
    ],
    hiddenFees: [
      "Credit card gateway fee of 2.9% + $0.30 applies ON TOP of the 10% Gumroad cut",
      "$0.50 per-unit transaction surcharge on direct sales",
      "Discover marketplace takes 30% total revenue if customer discovers your product via search or tags",
      "PayPal payment adds 3.49% + $0.49 per transaction"
    ],
    lastVerified: "September 2026",
    faqs: [
      {
        question: "How much does Gumroad actually take from each sale?",
        answer: "On direct sales, Gumroad takes 10% plus $0.50, plus standard payment processing (2.9% + $0.30). For a $25 product, total fees equal approximately $4.03 (~16.1%), leaving you with $20.97 net."
      },
      {
        question: "What is the difference between Direct and Discover on Gumroad?",
        answer: "When buyers purchase through your direct link, you pay 10% + $0.50 + card fees. If a customer finds your product through Gumroad Discover search or recommendations, Gumroad takes a flat 30% cut with no extra processing fees."
      },
      {
        question: "Does Gumroad handle EU VAT?",
        answer: "Yes, Gumroad acts as the marketplace facilitator for EU and UK VAT, automatically collecting and remitting tax on digital items."
      }
    ],
    calcDefaults: {
      price: 25,
      volume: 50,
      variableRate: 0.129,
      fixedFee: 0.80,
      monthlyFee: 0
    }
  },

  lemonsqueezy: {
    id: "lemonsqueezy",
    name: "Lemon Squeezy",
    slug: "lemonsqueezy",
    icon: "/icons/lemonsqueezy.svg",
    badge: "Merchant of Record",
    badgeColor: "#10B981",
    category: "mor",
    categoryName: "Merchant of Record (Auto-Tax)",
    headline: "All-in-one Merchant of Record handling global sales tax, VAT, and software licensing",
    description: "Lemon Squeezy operates as your legal Merchant of Record, taking on complete liability for global sales tax, EU VAT, invoicing, and chargebacks while providing hosted checkouts and recurring subscription management.",
    bestFor: "Software developers, SaaS companies, and digital creators selling to a global audience without wanting to manage international tax compliance.",
    websiteUrl: "https://lemonsqueezy.com",
    feeFormula: "5% + $0.50 per transaction (+1.5% PayPal/international)",
    taxMode: "Full Auto-Remit (Global VAT, GST & US Sales Tax)",
    isMoR: true,
    payoutSchedule: "Weekly or Bi-weekly (direct bank deposit)",
    payoutMethods: ["Direct Bank Deposit (Wise / Stripe)", "PayPal"],
    payoutThreshold: "$50.00",
    chargebackFee: "$15.00 per disputed charge",
    refundPolicyNotes: "Lemon Squeezy handles customer refund requests; platform fee is not refunded.",
    intlFeeNote: "+1.5% surcharge on cross-border payments outside your store region",
    paypalFeeNote: "+1.5% surcharge on transactions processed via PayPal",
    pricingTiers: [
      {
        name: "Standard Merchant of Record",
        monthlyCost: 0,
        variableFeePercent: 5.0,
        fixedFeePerUnit: 0.50,
        description: "5% platform cut + $0.50 per transaction. Covers full global tax filing and compliance."
      }
    ],
    pros: [
      "Zero tax compliance liability: automatically files and remits EU VAT, UK VAT, and US state sales taxes",
      "Full Merchant of Record protection: handles billing disputes, customer invoices, and fraud checks",
      "Native software licensing key engine, webhooks, and subscription portal",
      "Sleek customizable hosted checkout overlays and customer self-service dashboard"
    ],
    cons: [
      "5% + $0.50 is higher than direct Stripe (2.9% + $0.30) for purely domestic sellers",
      "+1.5% surcharge applies to PayPal transactions and cross-border currency conversions",
      "$50 minimum payout threshold"
    ],
    hiddenFees: [
      "Additional 1.5% on payments outside your base currency or country",
      "Additional 1.5% when buyer chooses PayPal checkout",
      "Currency conversion spread applies on international bank transfers"
    ],
    lastVerified: "September 2026",
    faqs: [
      {
        question: "Why should I use Lemon Squeezy instead of Stripe?",
        answer: "Stripe is just a payment processor: you are legally responsible for registering, calculating, and remitting sales taxes in every US state and foreign country. Lemon Squeezy is a Merchant of Record: they legally buy and resell your product, meaning they handle 100% of global tax filings and audits."
      },
      {
        question: "How much does Lemon Squeezy take on a $50 sale?",
        answer: "On a standard credit card sale, the fee is 5% ($2.50) + $0.50 = $3.00, yielding $47.00 take-home net (94% margin). If the buyer uses PayPal or an international card, an extra 1.5% ($0.75) applies."
      }
    ],
    calcDefaults: {
      price: 49,
      volume: 40,
      variableRate: 0.05,
      fixedFee: 0.50,
      monthlyFee: 0
    }
  },

  paddle: {
    id: "paddle",
    name: "Paddle",
    slug: "paddle",
    icon: "/icons/paddle.svg",
    badge: "Merchant of Record",
    badgeColor: "#10B981",
    category: "mor",
    categoryName: "Merchant of Record (Auto-Tax)",
    headline: "Enterprise billing and Merchant of Record built for global SaaS and software companies",
    description: "Paddle is the complete payments, billing, and tax infrastructure built specifically for SaaS and software companies selling worldwide. Like Lemon Squeezy, Paddle acts as your legal Merchant of Record.",
    bestFor: "B2B SaaS companies, Mac/Windows desktop software vendors, and developer tools scaling internationally.",
    websiteUrl: "https://paddle.com",
    feeFormula: "5% + $0.50 per transaction",
    taxMode: "Full Auto-Remit (Global VAT, GST & Sales Tax)",
    isMoR: true,
    payoutSchedule: "Monthly (wire transfer or ACH)",
    payoutMethods: ["Bank Wire Transfer", "ACH", "Payoneer"],
    payoutThreshold: "$100.00",
    chargebackFee: "$15.00 per dispute",
    refundPolicyNotes: "Handles customer refunds and VAT adjustments automatically.",
    intlFeeNote: "Included in base 5% rate for major currencies",
    paypalFeeNote: "Included in standard checkout",
    pricingTiers: [
      {
        name: "Paddle Billing",
        monthlyCost: 0,
        variableFeePercent: 5.0,
        fixedFeePerUnit: 0.50,
        description: "5% + $0.50 flat per transaction with custom volume discounting available over $50k/mo."
      }
    ],
    pros: [
      "Complete global tax filing and compliance in 200+ countries with full liability assumption",
      "Enterprise billing tools: dunning workflows, recurring subscription logic, and quote-to-cash",
      "Localized currencies and localized payment methods (iDEAL, Sofort, Alipay, etc.)"
    ],
    cons: [
      "Higher payout threshold ($100) and monthly payout cycle",
      "API and checkout integration requires developer knowledge compared to simple creator storefronts",
      "Approval process requires software verification"
    ],
    hiddenFees: [
      "Wire transfer fees may apply depending on receiving bank for monthly payouts below $1,000",
      "Exchange rate spread on exotic non-USD currencies"
    ],
    lastVerified: "September 2026",
    faqs: [
      {
        question: "How does Paddle differ from Lemon Squeezy?",
        answer: "Both are Merchants of Record charging 5% + $0.50. Paddle is heavily tailored toward enterprise and B2B SaaS (annual invoicing, complex dunning, sales-assisted billing), whereas Lemon Squeezy is tailored for creators, indie hackers, and digital downloads."
      }
    ],
    calcDefaults: {
      price: 99,
      volume: 25,
      variableRate: 0.05,
      fixedFee: 0.50,
      monthlyFee: 0
    }
  },

  stripe: {
    id: "stripe",
    name: "Stripe Direct",
    slug: "stripe",
    icon: "/icons/stripe.svg",
    badge: "Direct Gateway",
    badgeColor: "#3B82F6",
    category: "direct",
    categoryName: "Direct Gateway",
    headline: "The developer payment infrastructure standard delivering maximum profit margins",
    description: "Stripe is the world standard payment gateway. By processing payments directly through your own Stripe account, you avoid storefront commissions and keep maximum take-home profit, but take on your own sales tax compliance.",
    bestFor: "Custom web applications, developers, agency owners, and high-volume businesses with existing accounting/tax workflows.",
    websiteUrl: "https://stripe.com",
    feeFormula: "2.9% + $0.30 per transaction (+1.5% international)",
    taxMode: "Self-File Taxes (Stripe Tax available for extra 0.5%)",
    isMoR: false,
    payoutSchedule: "Rolling 2-business-day automatic bank transfer",
    payoutMethods: ["Direct Bank Deposit (ACH / SEPA / Faster Payments)"],
    payoutThreshold: "$1.00",
    chargebackFee: "$15.00 per chargeback",
    refundPolicyNotes: "Stripe keeps the original 2.9% + $0.30 fee when you refund a customer.",
    intlFeeNote: "+1.5% for international cards, +1.0% if currency conversion is needed",
    paypalFeeNote: "N/A (Stripe processes cards, Apple Pay, Google Pay, and bank transfers)",
    pricingTiers: [
      {
        name: "Standard Pay-as-you-go",
        monthlyCost: 0,
        variableFeePercent: 2.9,
        fixedFeePerUnit: 0.30,
        description: "2.9% + $0.30 per successful card charge. Volume discounts over $1M/year."
      }
    ],
    pros: [
      "Lowest baseline fees with zero monthly subscription overhead",
      "Rapid rolling 2-day automatic bank payouts straight to your business account",
      "Limitless flexibility, webhooks, and hundreds of third-party platform integrations"
    ],
    cons: [
      "You are the Merchant of Record: you must calculate, register, and file state and international taxes yourself",
      "Stripe does not refund processing fees when you issue customer refunds",
      "Requires building or paying for a checkout interface, hosting, and digital product delivery"
    ],
    hiddenFees: [
      "1.5% surcharge on non-US/international cards",
      "Additional 1.0% fee if currency conversion is required",
      "Optional Stripe Tax costs an extra 0.5% per transaction",
      "Stripe Billing for subscriptions costs 0.5% to 0.8% on recurring volume"
    ],
    lastVerified: "September 2026",
    faqs: [
      {
        question: "Is Stripe really the cheapest option?",
        answer: "Yes, for raw transaction fees, Stripe (2.9% + $0.30) takes the lowest cut among creator platforms. On a $100 sale, Stripe takes $3.20, leaving you with $96.80 (96.8% margin). However, you must handle sales tax filing and website hosting yourself."
      }
    ],
    calcDefaults: {
      price: 50,
      volume: 60,
      variableRate: 0.029,
      fixedFee: 0.30,
      monthlyFee: 0
    }
  },

  payhip: {
    id: "payhip",
    name: "Payhip",
    slug: "payhip",
    icon: "/icons/payhip.svg",
    badge: "Tier-Optimized Storefront",
    badgeColor: "#EC4899",
    category: "monthly",
    categoryName: "Fixed Monthly Plan",
    headline: "All-in-one digital & physical storefront offering an easy graduation path to 0% fees",
    description: "Payhip is an e-commerce platform for digital downloads, courses, coaching, and physical crafts. It features a Free plan with 5% transaction fees and tiered plans ($29/mo and $99/mo) that reduce platform fees to 0%.",
    bestFor: "Creators wanting to start free and seamlessly upgrade to 0% transaction fees as sales volume grows.",
    websiteUrl: "https://payhip.com",
    feeFormula: "Free (5% + gateway) · Plus ($29/mo + 2%) · Pro ($99/mo + 0%)",
    taxMode: "Payhip handles EU/UK VAT auto-reporting",
    isMoR: false,
    payoutSchedule: "Instant directly to connected Stripe or PayPal",
    payoutMethods: ["Stripe", "PayPal"],
    payoutThreshold: "$0.00 (instant)",
    chargebackFee: "Standard gateway dispute fee ($15)",
    refundPolicyNotes: "Processed directly inside your Stripe or PayPal account.",
    intlFeeNote: "Subject to standard Stripe/PayPal international card rates",
    paypalFeeNote: "Standard PayPal rate (3.49% + $0.49)",
    pricingTiers: [
      {
        name: "Free Forever",
        monthlyCost: 0,
        variableFeePercent: 5.0,
        fixedFeePerUnit: 0.0,
        description: "5% platform fee + standard gateway processing fees. All features included."
      },
      {
        name: "Plus Plan",
        monthlyCost: 29,
        variableFeePercent: 2.0,
        fixedFeePerUnit: 0.0,
        description: "$29/month + 2% transaction fee + standard gateway fees."
      },
      {
        name: "Pro Plan",
        monthlyCost: 99,
        variableFeePercent: 0.0,
        fixedFeePerUnit: 0.0,
        description: "$99/month + 0% platform transaction fee + standard gateway fees."
      }
    ],
    pros: [
      "Instant payouts directly to your connected Stripe or PayPal account",
      "Clear graduation roadmap: switch to $99/mo Pro to pay 0% platform fees once monthly sales exceed $2,000",
      "Automatic EU/UK VAT calculation and reporting for digital goods"
    ],
    cons: [
      "Requires connecting your own Stripe or PayPal account",
      "Storefront customization is simpler than dedicated website builders like Shopify or Webflow"
    ],
    hiddenFees: [
      "Gateway fees (Stripe 2.9% + $0.30 or PayPal) are always charged in addition to Payhip's tier fee"
    ],
    lastVerified: "September 2026",
    faqs: [
      {
        question: "When should I upgrade from Payhip Free to Plus or Pro?",
        answer: "Upgrade to Plus ($29/mo + 2%) when monthly revenue surpasses $967/mo (saving 3% pays for the $29 fee). Upgrade to Pro ($99/mo + 0%) when monthly revenue passes $2,333/mo."
      }
    ],
    calcDefaults: {
      price: 29,
      volume: 50,
      variableRate: 0.079,
      fixedFee: 0.30,
      monthlyFee: 0
    }
  },

  whop: {
    id: "whop",
    name: "Whop",
    slug: "whop",
    icon: "/icons/whop.svg",
    badge: "Social & Digital Hub",
    badgeColor: "#8B5CF6",
    category: "direct",
    categoryName: "Creator Storefront",
    headline: "Next-gen digital marketplace & subscription hub for apps, communities, and courses",
    description: "Whop is a fast-growing digital marketplace and subscription platform tailored for modern community creators, Discord/Telegram group leaders, trading syndicates, and software builders.",
    bestFor: "Community memberships, trading groups, Discord server monetizers, and indie SaaS tools.",
    websiteUrl: "https://whop.com",
    feeFormula: "3% platform cut + 2.9% + $0.30 card fee",
    taxMode: "Self-File Taxes (Integrated tax calculating options)",
    isMoR: false,
    payoutSchedule: "Instant to 2-day payouts",
    payoutMethods: ["Stripe Connect", "Coinbase / Crypto", "Direct Bank ACH"],
    payoutThreshold: "$10.00",
    chargebackFee: "$15.00 per dispute",
    refundPolicyNotes: "Handled through dashboard; transaction fees apply.",
    intlFeeNote: "+1.5% for international cards",
    paypalFeeNote: "3.49% + $0.49 if enabled",
    pricingTiers: [
      {
        name: "Standard Whop",
        monthlyCost: 0,
        variableFeePercent: 5.9,
        fixedFeePerUnit: 0.30,
        description: "3% flat platform cut + 2.9% + $0.30 card processing."
      }
    ],
    pros: [
      "Low 3% platform commission compared to 10% on Gumroad",
      "Native integrations with Discord, Telegram, web software, and course content",
      "Fast payout cycles including crypto options"
    ],
    cons: [
      "Card fees (2.9% + $0.30) are charged on top of the 3% cut",
      "Seller is responsible for sales tax reporting"
    ],
    hiddenFees: [
      "2.9% + $0.30 card fee added on top of the 3% platform rate",
      "Marketplace discovery features may carry promotional fees"
    ],
    lastVerified: "September 2026",
    faqs: [
      {
        question: "Is Whop cheaper than Gumroad?",
        answer: "Yes, significantly. Whop takes 3% + 2.9% + $0.30 (~5.9% + $0.30), whereas Gumroad takes 10% + $0.50 + 2.9% + $0.30 (~12.9% + $0.80). On a $100 sale, Whop fees are $6.20 vs $13.70 on Gumroad."
      }
    ],
    calcDefaults: {
      price: 49,
      volume: 30,
      variableRate: 0.059,
      fixedFee: 0.30,
      monthlyFee: 0
    }
  },

  sellfy: {
    id: "sellfy",
    name: "Sellfy",
    slug: "sellfy",
    icon: "/icons/sellfy.svg",
    badge: "Fixed Monthly Plan",
    badgeColor: "#6366F1",
    category: "monthly",
    categoryName: "Fixed Monthly Plan",
    headline: "E-commerce storefront for print-on-demand merchandise and digital downloads",
    description: "Sellfy allows creators to launch a customizable online store with print-on-demand merchandise fulfillment and digital goods with 0% platform transaction fees on paid plans.",
    bestFor: "YouTubers, podcasters, and visual creators selling both merchandise and digital downloads.",
    websiteUrl: "https://sellfy.com",
    feeFormula: "$29/mo Starter · 0% transaction fee + 2.9% + $0.30 card",
    taxMode: "Self-File Taxes",
    isMoR: false,
    payoutSchedule: "Instant directly via Stripe or PayPal",
    payoutMethods: ["Stripe", "PayPal"],
    payoutThreshold: "$0.00",
    chargebackFee: "$15.00 gateway fee",
    refundPolicyNotes: "Merchant handles refunds inside gateway.",
    intlFeeNote: "Standard gateway international fees",
    paypalFeeNote: "Standard PayPal merchant fees",
    pricingTiers: [
      {
        name: "Starter Plan",
        monthlyCost: 29,
        variableFeePercent: 0.0,
        fixedFeePerUnit: 0.0,
        description: "$29/mo (up to $10k annual sales). 0% platform fee, pay only card processing."
      },
      {
        name: "Business Plan",
        monthlyCost: 79,
        variableFeePercent: 0.0,
        fixedFeePerUnit: 0.0,
        description: "$79/mo (up to $50k annual sales). Includes upsells and cart abandonment."
      }
    ],
    pros: [
      "0% platform transaction cut on all paid subscription tiers",
      "Built-in Print-on-Demand merchandise catalog alongside digital downloads",
      "Instant payment into your connected Stripe or PayPal account"
    ],
    cons: [
      "Fixed $29/mo overhead even if you make zero sales that month",
      "Annual sales caps on lower-tier plans ($10,000/yr on Starter)"
    ],
    hiddenFees: [
      "Annual revenue cap forces upgrade to $79/mo plan once sales exceed $10k/year"
    ],
    lastVerified: "September 2026",
    faqs: [
      {
        question: "Does Sellfy take a transaction fee?",
        answer: "No, Sellfy charges 0% platform transaction fee on its paid plans. You only pay the monthly subscription and standard Stripe or PayPal card processing fees."
      }
    ],
    calcDefaults: {
      price: 35,
      volume: 40,
      variableRate: 0.029,
      fixedFee: 0.30,
      monthlyFee: 29
    }
  },

  podia: {
    id: "podia",
    name: "Podia",
    slug: "podia",
    icon: "/icons/podia.svg",
    badge: "All-in-One Academy",
    badgeColor: "#14B8A6",
    category: "monthly",
    categoryName: "Fixed Monthly Plan",
    headline: "All-in-one creator platform combining websites, digital products, and courses",
    description: "Podia is an all-in-one platform providing website builder, online courses, digital downloads, coaching, and community memberships under one clean dashboard.",
    bestFor: "Course creators, coaches, and community educators wanting an all-in-one platform without juggling plugins.",
    websiteUrl: "https://podia.com",
    feeFormula: "$39/mo Mover (0% fee) + 2.9% + $0.30 card",
    taxMode: "Self-File Taxes",
    isMoR: false,
    payoutSchedule: "Instant to connected Stripe or PayPal",
    payoutMethods: ["Stripe", "PayPal"],
    payoutThreshold: "$0.00",
    chargebackFee: "$15.00 gateway fee",
    refundPolicyNotes: "Handled inside Podia and gateway.",
    intlFeeNote: "Gateway standard",
    paypalFeeNote: "Gateway standard",
    pricingTiers: [
      {
        name: "Mover Plan",
        monthlyCost: 39,
        variableFeePercent: 0.0,
        fixedFeePerUnit: 0.0,
        description: "$39/mo with 0% transaction fees. Unlimited digital products and courses."
      },
      {
        name: "Shaker Plan",
        monthlyCost: 89,
        variableFeePercent: 0.0,
        fixedFeePerUnit: 0.0,
        description: "$89/mo with 0% fees, affiliate marketing, and third-party code embedding."
      }
    ],
    pros: [
      "Zero transaction fees on Mover ($39/mo) and higher plans",
      "Unlimited hosting for digital products, videos, and student courses",
      "All-in-one bundle includes email marketing and community spaces"
    ],
    cons: [
      "$39/month fixed ongoing expense",
      "Free tier has a steep 10% transaction fee"
    ],
    hiddenFees: [
      "Stripe or PayPal processing fees (2.9% + $0.30) apply to all sales"
    ],
    lastVerified: "September 2026",
    faqs: [
      {
        question: "Is Podia free tier worth it?",
        answer: "Podia's free tier has a 10% transaction fee. Once you earn more than $390/month, upgrading to the $39/mo Mover plan immediately saves you money."
      }
    ],
    calcDefaults: {
      price: 149,
      volume: 20,
      variableRate: 0.029,
      fixedFee: 0.30,
      monthlyFee: 39
    }
  },

  stan: {
    id: "stan",
    name: "Stan Store",
    slug: "stan",
    icon: "/icons/stan.svg",
    badge: "Link-in-Bio Store",
    badgeColor: "#F97316",
    category: "monthly",
    categoryName: "Fixed Monthly Plan",
    headline: "High-converting link-in-bio storefront built for TikTok and Instagram creators",
    description: "Stan Store is the premier mobile-first link-in-bio storefront engineered to convert TikTok, Instagram, and YouTube Shorts viewers into paying customers in 1 click.",
    bestFor: "Social media creators, influencers, fitness coaches, and consultants driving mobile traffic from social bios.",
    websiteUrl: "https://stan.store",
    feeFormula: "$29/mo Creator Plan · 0% transaction fee + 2.9% + $0.30 card",
    taxMode: "Self-File Taxes",
    isMoR: false,
    payoutSchedule: "Daily rolling Stripe payouts (1–2 business days)",
    payoutMethods: ["Stripe Connect"],
    payoutThreshold: "$1.00",
    chargebackFee: "$15.00 gateway fee",
    refundPolicyNotes: "Managed directly through Stan dashboard.",
    intlFeeNote: "Standard Stripe international rates",
    paypalFeeNote: "PayPal checkout options available",
    pricingTiers: [
      {
        name: "Creator Plan",
        monthlyCost: 29,
        variableFeePercent: 0.0,
        fixedFeePerUnit: 0.0,
        description: "$29/mo with 0% transaction fee. Unlimited products, bookings, and email collection."
      },
      {
        name: "Creator Pro Plan",
        monthlyCost: 99,
        variableFeePercent: 0.0,
        fixedFeePerUnit: 0.0,
        description: "$99/mo adds email flows, payment plans, order bumps, and affiliate tools."
      }
    ],
    pros: [
      "Fastest 1-click mobile checkout built for social media bio traffic",
      "0% platform transaction cut on all digital sales",
      "Built-in calendar booking, coaching call scheduling, and lead magnets"
    ],
    cons: [
      "No free tier: $29/mo recurring minimum",
      "Limited desktop website layouts compared to traditional web builders"
    ],
    hiddenFees: [
      "Underlying Stripe transaction fee of 2.9% + $0.30 applies to all sales"
    ],
    lastVerified: "September 2026",
    faqs: [
      {
        question: "Why do creators choose Stan Store over Linktree?",
        answer: "Linktree merely routes visitors to external sites. Stan Store processes the checkout right inside the link-in-bio drawer, resulting in significantly higher conversion rates for digital downloads and coaching calls."
      }
    ],
    calcDefaults: {
      price: 29,
      volume: 40,
      variableRate: 0.029,
      fixedFee: 0.30,
      monthlyFee: 29
    }
  },

  teachable: {
    id: "teachable",
    name: "Teachable",
    slug: "teachable",
    icon: "/icons/teachable.svg",
    badge: "Course Academy",
    badgeColor: "#8B5CF6",
    category: "monthly",
    categoryName: "Fixed Monthly Plan",
    headline: "Industry-standard online academy platform for structured courses and coaching",
    description: "Teachable is the industry-standard academy and online school platform for educators building structured course curriculums, student quizzes, certificates, and multi-instructor academies.",
    bestFor: "Professional educators, course creators, and enterprise training academies.",
    websiteUrl: "https://teachable.com",
    feeFormula: "Basic ($39/mo + 5%) · Pro ($119/mo + 0%) + card fees",
    taxMode: "Teachable handles student tax collection & payout remittance",
    isMoR: false,
    payoutSchedule: "Daily or Monthly payouts (via teachable:pay)",
    payoutMethods: ["Direct Bank Deposit (teachable:pay)", "PayPal"],
    payoutThreshold: "$10.00",
    chargebackFee: "$15.00 per dispute",
    refundPolicyNotes: "30-day student refund guarantee by default.",
    intlFeeNote: "Standard processing fees apply",
    paypalFeeNote: "Integrated through teachable:pay",
    pricingTiers: [
      {
        name: "Basic Plan",
        monthlyCost: 39,
        variableFeePercent: 5.0,
        fixedFeePerUnit: 0.0,
        description: "$39/month + 5% transaction fee + gateway card processing."
      },
      {
        name: "Pro Plan",
        monthlyCost: 119,
        variableFeePercent: 0.0,
        fixedFeePerUnit: 0.0,
        description: "$119/month + 0% platform transaction fee + gateway card processing."
      }
    ],
    pros: [
      "Pro plan ($119/mo) eliminates all 5% transaction fees",
      "Advanced student completion certificates, quizzes, and course compliance",
      "Automated affiliate payouts and multi-instructor revenue splits"
    ],
    cons: [
      "Basic plan charges 5% on top of the $39/mo subscription",
      "Pro plan has a high starting price of $119/mo"
    ],
    hiddenFees: [
      "Card processing fee (2.9% + $0.30) is added to the 5% Basic fee",
      "BackOffice tax handling incurs an extra 2% fee if enabled"
    ],
    lastVerified: "September 2026",
    faqs: [
      {
        question: "When should I upgrade to Teachable Pro ($119/mo)?",
        answer: "When your monthly course revenue exceeds $1,600/month, the 5% transaction fee on the Basic plan exceeds $80/mo (the difference between $39 and $119), making Pro the more profitable choice."
      }
    ],
    calcDefaults: {
      price: 199,
      volume: 15,
      variableRate: 0.079,
      fixedFee: 0.30,
      monthlyFee: 39
    }
  },

  fiverr: {
    id: "fiverr",
    name: "Fiverr",
    slug: "fiverr",
    icon: "/icons/fiverr.svg",
    badge: "Freelance Marketplace",
    badgeColor: "#10B981",
    category: "marketplace",
    categoryName: "Marketplace & Freelance",
    headline: "Global freelance service marketplace with productized gig packages",
    description: "Fiverr connects freelance digital service providers with international clients through standardized service packages, milestone escrow, and built-in search discovery.",
    bestFor: "Freelancers, designers, voiceover artists, video editors, and productized service sellers.",
    websiteUrl: "https://fiverr.com",
    feeFormula: "20% flat seller commission on completed orders",
    taxMode: "Marketplace Facilitator Tax",
    isMoR: false,
    payoutSchedule: "14-day clearing period (7 days for Top Rated Sellers)",
    payoutMethods: ["PayPal", "Fiverr Revenue Card (Payoneer)", "Bank Transfer"],
    payoutThreshold: "$5.00",
    chargebackFee: "Escrow cancellation policy applies",
    refundPolicyNotes: "Order cancellations forfeit seller revenue.",
    intlFeeNote: "Buyer pays gateway currency fees",
    paypalFeeNote: "Covered by buyer payment",
    pricingTiers: [
      {
        name: "Standard Seller",
        monthlyCost: 0,
        variableFeePercent: 20.0,
        fixedFeePerUnit: 0.0,
        description: "20% flat commission taken on every completed gig, package, and tip."
      }
    ],
    pros: [
      "Access to millions of active buyers actively searching for service packages",
      "Buyer pays the payment processing and service fees",
      "Escrow protection ensures payment upon delivery and acceptance"
    ],
    cons: [
      "Steep 20% platform cut on all earnings and tips",
      "14-day mandatory funds clearance hold before withdrawals"
    ],
    hiddenFees: [
      "Fiverr takes 20% of customer tips in addition to order revenue",
      "Withdrawal currency conversion fees apply via Payoneer/PayPal"
    ],
    lastVerified: "September 2026",
    faqs: [
      {
        question: "Does Fiverr take a cut of tips?",
        answer: "Yes, Fiverr takes the exact same 20% platform fee on all client tips as it does on base orders."
      }
    ],
    calcDefaults: {
      price: 50,
      volume: 20,
      variableRate: 0.20,
      fixedFee: 0.0,
      monthlyFee: 0
    }
  },

  etsy: {
    id: "etsy",
    name: "Etsy",
    slug: "etsy",
    icon: "/icons/etsy.svg",
    badge: "Creator Marketplace",
    badgeColor: "#06B6D4",
    category: "marketplace",
    categoryName: "Marketplace & Freelance",
    headline: "The global marketplace for digital printables, templates, and craft goods",
    description: "Etsy is the global marketplace for creative digital downloads, templates, and handmade goods, with massive built-in search discovery and automated digital file delivery.",
    bestFor: "Digital SVG cut files, printable planners, Notion templates, digital art, and handmade physical crafts.",
    websiteUrl: "https://etsy.com",
    feeFormula: "$0.20 listing + 6.5% transaction + 3% + $0.25 card fee",
    taxMode: "Marketplace Facilitator (Etsy handles sales tax)",
    isMoR: false,
    payoutSchedule: "Daily / Weekly deposit schedule to bank account",
    payoutMethods: ["Direct Bank Deposit (Etsy Payments)"],
    payoutThreshold: "$25.00",
    chargebackFee: "Protected under Etsy Seller Protection",
    refundPolicyNotes: "Listing fee ($0.20) is not refunded.",
    intlFeeNote: "+2.5% currency conversion fee on international sales",
    paypalFeeNote: "Integrated through Etsy Payments",
    pricingTiers: [
      {
        name: "Standard Seller",
        monthlyCost: 0,
        variableFeePercent: 9.5,
        fixedFeePerUnit: 0.45,
        description: "$0.20 listing fee + 6.5% transaction fee + 3% + $0.25 payment processing."
      }
    ],
    pros: [
      "Massive organic buyer intent for templates, printables, and creative gifts",
      "Automatic digital file download upon checkout",
      "Etsy handles sales tax collection and remittance across US states and countries"
    ],
    cons: [
      "$0.20 listing fee renews every 4 months or with each quantity sale",
      "Offsite Ads program can claim an additional 12%–15% fee on attributed sales"
    ],
    hiddenFees: [
      "$0.20 listing fee charged per unit sold or every 4 months",
      "12% to 15% Offsite Ads fee if a buyer purchases through an external Google/Facebook ad placed by Etsy"
    ],
    lastVerified: "September 2026",
    faqs: [
      {
        question: "How much does Etsy take on a $10 digital download?",
        answer: "On a $10 sale, Etsy takes $0.20 (listing) + $0.65 (6.5% transaction fee) + $0.55 (3% + $0.25 payment processing) = $1.40 total (~14.0% fee), giving you $8.60 net."
      }
    ],
    calcDefaults: {
      price: 15,
      volume: 60,
      variableRate: 0.095,
      fixedFee: 0.45,
      monthlyFee: 0
    }
  },

  kdp: {
    id: "kdp",
    name: "Amazon KDP",
    slug: "kdp",
    icon: "/icons/kdp.svg",
    badge: "Digital Book Publishing",
    badgeColor: "#D97706",
    category: "marketplace",
    categoryName: "Marketplace & Freelance",
    headline: "Global self-publishing for Kindle ebooks, print-on-demand paperbacks, and audiobooks",
    description: "Amazon Kindle Direct Publishing (KDP) allows authors and digital publishers to distribute ebooks and print-on-demand paperbacks directly to millions of readers across Amazon's worldwide marketplaces.",
    bestFor: "Self-published authors, fiction/non-fiction book publishers, comic artists, and low-content notebook sellers.",
    websiteUrl: "https://kdp.amazon.com",
    feeFormula: "30% platform cut (70% royalty tier) + $0.15/MB file delivery",
    taxMode: "Publishing Royalty Tax Withholding (US 1099/W-8BEN)",
    isMoR: false,
    payoutSchedule: "Monthly (approximately 60 days after month-end)",
    payoutMethods: ["Direct Bank Deposit (EFT)", "Wire Transfer", "Check"],
    payoutThreshold: "$0.00 for EFT",
    chargebackFee: "$0.00",
    refundPolicyNotes: "Amazon handles 7-day ebook returns automatically.",
    intlFeeNote: "Amazon distributes across all regional stores",
    paypalFeeNote: "N/A (Amazon checkout)",
    pricingTiers: [
      {
        name: "70% Royalty Option",
        monthlyCost: 0,
        variableFeePercent: 30.0,
        fixedFeePerUnit: 0.15,
        description: "30% platform cut on ebooks priced between $2.99 and $9.99 + $0.15/MB delivery fee."
      }
    ],
    pros: [
      "Unmatched global reach: access to hundreds of millions of Kindle e-readers and app users",
      "Amazon handles card processing, delivery, returns, and customer service",
      "Print-on-Demand paperback and hardcover options without upfront inventory"
    ],
    cons: [
      "30% platform cut on standard royalty tier (or 65% if priced outside $2.99–$9.99)",
      "Payment terms have a 60-day lag time"
    ],
    hiddenFees: [
      "File delivery fee of $0.15 per megabyte deducted from author royalty",
      "If priced below $2.99 or above $9.99, Amazon's cut jumps to 65% (35% royalty)"
    ],
    lastVerified: "September 2026",
    faqs: [
      {
        question: "How does Amazon KDP 70% royalty work?",
        answer: "For ebooks priced between $2.99 and $9.99, Amazon pays 70% royalty minus a delivery fee of $0.15 per megabyte of file size. Amazon takes the remaining 30%."
      }
    ],
    calcDefaults: {
      price: 9.99,
      volume: 100,
      variableRate: 0.30,
      fixedFee: 0.15,
      monthlyFee: 0
    }
  },

  upwork: {
    id: "upwork",
    name: "Upwork",
    slug: "upwork",
    icon: "/icons/upwork.svg",
    badge: "Professional Freelance",
    badgeColor: "#3B82F6",
    category: "marketplace",
    categoryName: "Marketplace & Freelance",
    headline: "The premier global freelance marketplace for hourly contracts, milestones, and projects",
    description: "Upwork connects skilled professionals, software developers, and agencies with clients worldwide for hourly, fixed-price, and enterprise freelance contracts with verified milestone escrow.",
    bestFor: "Freelance software engineers, copywriters, consultants, and agencies seeking high-budget client contracts.",
    websiteUrl: "https://upwork.com",
    feeFormula: "10% flat freelancer fee · Buyer pays gateway fees",
    taxMode: "Marketplace Facilitator Tax / Form 1099-K",
    isMoR: false,
    payoutSchedule: "Weekly for hourly work (after 10-day review cycle); upon milestone release for fixed price",
    payoutMethods: ["Direct to Local Bank", "Wire Transfer", "PayPal", "Payoneer"],
    payoutThreshold: "$0.00",
    chargebackFee: "Protected under Upwork Payment Protection",
    refundPolicyNotes: "Milestone escrow dispute mediation available.",
    intlFeeNote: "Upwork charges client payment processing fee",
    paypalFeeNote: "$2.00 fee per PayPal withdrawal",
    pricingTiers: [
      {
        name: "Standard Freelancer",
        monthlyCost: 0,
        variableFeePercent: 10.0,
        fixedFeePerUnit: 0.0,
        description: "10% flat freelancer service fee on all billed contract earnings."
      }
    ],
    pros: [
      "Competitive 10% flat freelancer fee (lower than Fiverr's 20%)",
      "Strong hourly payment protection with automated keystroke and work-diary tracking",
      "Clients pay their own payment processing surcharge (5% client marketplace fee)"
    ],
    cons: [
      "10-day lag between work completion and available funds withdrawal for hourly contracts",
      "Connects system requires purchasing tokens to submit job proposals"
    ],
    hiddenFees: [
      "Connects cost $0.15 each to apply for jobs",
      "$0.99 fee per local direct-to-bank withdrawal in certain non-US regions",
      "$30 wire transfer fee for foreign accounts"
    ],
    lastVerified: "September 2026",
    faqs: [
      {
        question: "Is Upwork cheaper than Fiverr?",
        answer: "Yes, Upwork charges a 10% freelancer fee, which is half of Fiverr's 20% commission. On a $1,000 contract, you keep $900 on Upwork versus $800 on Fiverr."
      }
    ],
    calcDefaults: {
      price: 150,
      volume: 10,
      variableRate: 0.10,
      fixedFee: 0.0,
      monthlyFee: 0
    }
  }
};

export const ALL_PLATFORMS = Object.values(PLATFORMS_DATA);
