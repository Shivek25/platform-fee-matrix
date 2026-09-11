// src/data/comparisons.ts
// Programmatic comparison pairs and matchup intelligence

export interface ComparisonPair {
  slug: string;
  p1Id: string;
  p2Id: string;
  title: string;
  headline: string;
  metaDescription: string;
  verdictSummary: string;
  p1Advantage: string;
  p2Advantage: string;
  scenarioWinners: {
    soloCreators: string;
    globalSaaS: string;
    physicalMerch: string;
    highVolume: string;
  };
  tableHighlights: Array<{
    feature: string;
    p1Value: string;
    p2Value: string;
    winner: "p1" | "p2" | "tie";
    notes: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export const COMPARISONS_DATA: Record<string, ComparisonPair> = {
  "gumroad-vs-lemon-squeezy": {
    slug: "gumroad-vs-lemon-squeezy",
    p1Id: "gumroad",
    p2Id: "lemonsqueezy",
    title: "Gumroad vs Lemon Squeezy: 2026 Fee & Profit Comparison",
    headline: "Which platform takes less of your money: Gumroad or Lemon Squeezy?",
    metaDescription: "Detailed fee comparison between Gumroad and Lemon Squeezy. See real-time calculations, tax liability differences, and which platform maximizes creator take-home profit.",
    verdictSummary: "Lemon Squeezy wins on profit margins for almost all creator sales volumes (5% + $0.50 vs Gumroad's 10% + $0.50 + card fees) AND legally acts as your Merchant of Record to handle 100% of global VAT/GST sales tax compliance. Gumroad only wins if you rely heavily on its internal Discover marketplace audience.",
    p1Advantage: "Built-in Discover marketplace recommendations with an existing buyer base.",
    p2Advantage: "Much lower fee cut (~6.5% vs ~13.5%), native Merchant of Record tax remittance, and software license key management.",
    scenarioWinners: {
      soloCreators: "Lemon Squeezy (keeps ~7% more of every sale and eliminates VAT liabilities)",
      globalSaaS: "Lemon Squeezy (built for software, webhooks, and auto-tax)",
      physicalMerch: "Tie (neither excels for physical logistics; use Shopify or Sellfy)",
      highVolume: "Lemon Squeezy (saving 7–8% on $20,000/mo puts $1,400+/mo back in your pocket)"
    },
    tableHighlights: [
      {
        feature: "Base Platform Cut",
        p1Value: "10% + $0.50 (+ card fees)",
        p2Value: "5% + $0.50 (inclusive of gateway)",
        winner: "p2",
        notes: "Gumroad stacks payment processing on top; Lemon Squeezy bundles it."
      },
      {
        feature: "Sales Tax / EU VAT",
        p1Value: "Marketplace Facilitator",
        p2Value: "Full Merchant of Record",
        winner: "p2",
        notes: "Lemon Squeezy assumes legal seller liability across all jurisdictions."
      },
      {
        feature: "Marketplace Discovery",
        p1Value: "Gumroad Discover (30% cut)",
        p2Value: "None (Direct traffic only)",
        winner: "p1",
        notes: "Gumroad has active directory search; Lemon Squeezy is checkout infrastructure."
      },
      {
        feature: "Payout Frequency",
        p1Value: "Weekly (Fridays)",
        p2Value: "Weekly or Bi-weekly",
        winner: "tie",
        notes: "Both deposit reliably to bank accounts."
      }
    ],
    faqs: [
      {
        question: "Is Lemon Squeezy cheaper than Gumroad?",
        answer: "Yes, significantly. On a $50 digital product, Lemon Squeezy takes $3.00 (6%), while Gumroad takes roughly $7.25 (~14.5% including payment processing). You keep $4.25 more on every sale with Lemon Squeezy."
      },
      {
        question: "Can I migrate my customers from Gumroad to Lemon Squeezy?",
        answer: "Yes, Lemon Squeezy provides a Gumroad migration tool that imports customers, product files, and active subscriptions."
      }
    ]
  },

  "stripe-vs-paddle": {
    slug: "stripe-vs-paddle",
    p1Id: "stripe",
    p2Id: "paddle",
    title: "Stripe vs Paddle: Payment Gateway vs Merchant of Record",
    headline: "Stripe Direct vs Paddle: Raw processing margin vs full tax automation",
    metaDescription: "Compare Stripe Direct vs Paddle. Weigh Stripe's lower 2.9% + $0.30 processing fees against Paddle's 5% + $0.50 automated global sales tax and SaaS billing infrastructure.",
    verdictSummary: "Stripe offers lower raw payment fees (2.9% + $0.30 vs 5% + $0.50) and faster rolling 2-day payouts, but leaves you 100% legally liable for registering, calculating, and filing sales tax and VAT in every state and country. Paddle charges ~2% more but acts as your Merchant of Record, saving thousands in international accounting and tax filing overhead.",
    p1Advantage: "Lowest raw processing rate, fastest 2-day payouts, and boundless API customization.",
    p2Advantage: "Total global tax compliance, dunning workflows, and zero foreign tax registration headaches.",
    scenarioWinners: {
      soloCreators: "Paddle (avoiding international VAT audits is well worth the 2% fee difference)",
      globalSaaS: "Paddle (turnkey global B2B/B2C SaaS billing and compliance)",
      physicalMerch: "Stripe (Paddle strictly supports digital goods and SaaS)",
      highVolume: "Stripe (if earning >$100k/mo domestically with an existing in-house tax team)"
    },
    tableHighlights: [
      {
        feature: "Transaction Fee",
        p1Value: "2.9% + $0.30",
        p2Value: "5.0% + $0.50",
        winner: "p1",
        notes: "Stripe is 2% cheaper on raw processing."
      },
      {
        feature: "Tax Filing Liability",
        p1Value: "You (Self-File)",
        p2Value: "Paddle (Merchant of Record)",
        winner: "p2",
        notes: "Paddle files and remits all global taxes for you."
      },
      {
        feature: "Payout Schedule",
        p1Value: "Rolling 2 business days",
        p2Value: "Monthly wire/ACH",
        winner: "p1",
        notes: "Stripe provides near-immediate cash flow."
      }
    ],
    faqs: [
      {
        question: "Does Stripe handle EU VAT like Paddle?",
        answer: "No. Stripe Tax calculates the tax amount for an extra 0.5% fee, but YOU are still legally responsible for registering, filing returns, and paying local tax authorities. Paddle files and remits the taxes on their own tax returns."
      }
    ]
  },

  "fiverr-vs-upwork": {
    slug: "fiverr-vs-upwork",
    p1Id: "fiverr",
    p2Id: "upwork",
    title: "Fiverr vs Upwork: Freelancer Fee & Earning Comparison",
    headline: "Which freelance platform takes less: Fiverr's 20% or Upwork's 10%?",
    metaDescription: "Fiverr vs Upwork seller fee comparison. Compare Fiverr's 20% flat commission with Upwork's 10% rate, escrow protections, and long-term earnings potential.",
    verdictSummary: "Upwork takes half the commission of Fiverr (10% flat vs 20% on all earnings and tips). On a $1,000 gig, you keep $900 on Upwork compared to just $800 on Fiverr. However, Fiverr's productized gig catalog makes it easier to sell standardized services without bidding on job postings.",
    p1Advantage: "Inbound orders from pre-packaged gig listings without spending money on proposal tokens.",
    p2Advantage: "Half the platform fee (10% vs 20%), higher contract budgets, and hourly payment protection.",
    scenarioWinners: {
      soloCreators: "Fiverr (for quick $25–$150 digital service packages like voiceovers and logos)",
      globalSaaS: "Upwork (for developer and engineering contracts)",
      physicalMerch: "N/A",
      highVolume: "Upwork (saving 10% of total revenue is massive for high-earning freelancers)"
    },
    tableHighlights: [
      {
        feature: "Seller Commission",
        p1Value: "20% flat on all orders & tips",
        p2Value: "10% flat freelancer fee",
        winner: "p2",
        notes: "Upwork lets you pocket 10% more on every invoice."
      },
      {
        feature: "Proposal / Application Cost",
        p1Value: "Free to receive orders",
        p2Value: "Connects cost $0.15 each",
        winner: "p1",
        notes: "Fiverr doesn't charge you to apply to jobs."
      },
      {
        feature: "Payment Clearance",
        p1Value: "14 days (7 for Top Rated)",
        p2Value: "10 days (hourly) / upon milestone approval",
        winner: "p2",
        notes: "Upwork clears funds slightly faster."
      }
    ],
    faqs: [
      {
        question: "Why does Fiverr take 20% while Upwork takes 10%?",
        answer: "Fiverr charges clients less upfront and extracts its margin primarily from sellers (20% commission + 20% on tips). Upwork simplified its fee structure in 2023 to a flat 10% freelancer cut, shifting part of the platform fee to clients."
      }
    ]
  },

  "gumroad-vs-etsy": {
    slug: "gumroad-vs-etsy",
    p1Id: "gumroad",
    p2Id: "etsy",
    title: "Gumroad vs Etsy: Digital Downloads & Creator Fees Compared",
    headline: "Selling digital downloads: Gumroad storefront vs Etsy marketplace",
    metaDescription: "Gumroad vs Etsy seller fee comparison. Compare Gumroad's 10% cut against Etsy's $0.20 listing fee, 6.5% transaction fee, and organic search traffic.",
    verdictSummary: "Etsy is unbeatable for tapping into existing organic buyer search demand for printables, SVG craft files, and templates (costing roughly 9.5% + $0.45 per sale). Gumroad is far better if you drive your own audience from social media, email, or YouTube, as it offers direct customer email capture and subscription billing.",
    p1Advantage: "You own the customer email list, support recurring subscriptions, and have zero per-listing renewal fees.",
    p2Advantage: "Massive built-in search engine where millions of buyers search for templates daily.",
    scenarioWinners: {
      soloCreators: "Etsy if you have no audience; Gumroad if you have a following",
      globalSaaS: "Gumroad (Etsy doesn't support software licenses or SaaS)",
      physicalMerch: "Etsy (huge physical craft and handmade marketplace)",
      highVolume: "Gumroad (direct traffic gives full audience ownership)"
    },
    tableHighlights: [
      {
        feature: "Fee Structure",
        p1Value: "10% + $0.50 + card fees (~13.5%)",
        p2Value: "$0.20 listing + 6.5% tx + 3% + $0.25 card (~10–14%)",
        winner: "p2",
        notes: "Etsy is slightly cheaper on items over $15."
      },
      {
        feature: "Audience & Traffic",
        p1Value: "Mostly your own traffic",
        p2Value: "Huge organic search volume",
        winner: "p2",
        notes: "Etsy shoppers actively search for printable goods."
      },
      {
        feature: "Customer Relationship",
        p1Value: "You own buyer emails",
        p2Value: "Etsy owns the customer",
        winner: "p1",
        notes: "Gumroad lets you export and email your buyers anytime."
      }
    ],
    faqs: [
      {
        question: "Can I sell the same digital files on both Gumroad and Etsy?",
        answer: "Yes! Many creators cross-list on Etsy for passive search discovery while directing their loyal followers to Gumroad for higher-priced bundles and subscriptions."
      }
    ]
  },

  "podia-vs-teachable": {
    slug: "podia-vs-teachable",
    p1Id: "podia",
    p2Id: "teachable",
    title: "Podia vs Teachable: Course Platform & Creator Pricing",
    headline: "Online courses and memberships: Podia vs Teachable fee breakdown",
    metaDescription: "Compare Podia vs Teachable platform fees. See how Podia's $39/mo flat 0% plan compares to Teachable's Basic (5% fee) and Pro ($119/mo) plans.",
    verdictSummary: "Podia offers significantly better pricing for emerging course creators, charging $39/mo with 0% platform transaction fees on its Mover plan. In contrast, Teachable charges $39/mo PLUS a 5% transaction cut on its Basic plan, forcing you to pay $119/mo for the Pro plan to eliminate the 5% fee.",
    p1Advantage: "0% transaction fees starting at just $39/month, plus built-in community, webinars, and email marketing.",
    p2Advantage: "Advanced graded student quizzes, compliance tracking, and multi-instructor revenue sharing.",
    scenarioWinners: {
      soloCreators: "Podia (saves 5% of all course sales on the $39 plan)",
      globalSaaS: "Tie",
      physicalMerch: "N/A",
      highVolume: "Tie (both offer 0% platform cuts on higher tiers)"
    },
    tableHighlights: [
      {
        feature: "$39/mo Tier Transaction Fee",
        p1Value: "0% fee (Mover plan)",
        p2Value: "5% fee (Basic plan)",
        winner: "p1",
        notes: "Teachable double-dips on subscription + 5% cut."
      },
      {
        feature: "0% Fee Starting Price",
        p1Value: "$39 / month",
        p2Value: "$119 / month",
        winner: "p1",
        notes: "Podia gives you 0% transaction fees for $80/mo less."
      }
    ],
    faqs: [
      {
        question: "Is Podia really cheaper than Teachable?",
        answer: "Yes. If you make $3,000/mo in course sales, Teachable Basic costs $39 + $150 (5%) = $189/mo. Podia costs just $39/mo, saving you $150 every single month."
      }
    ]
  },

  "payhip-vs-gumroad": {
    slug: "payhip-vs-gumroad",
    p1Id: "payhip",
    p2Id: "gumroad",
    title: "Payhip vs Gumroad: Which Digital Storefront Is More Profitable?",
    headline: "Payhip (5% to 0%) vs Gumroad (10% + $0.50): Side-by-side fee math",
    metaDescription: "Payhip vs Gumroad fee comparison. Learn how Payhip's 5% free tier and $99/mo 0% plan compare to Gumroad's 10% commission on digital products.",
    verdictSummary: "Payhip beats Gumroad on price at every single volume level. On the free plan, Payhip charges 5% vs Gumroad's 10% + $0.50. At higher volumes, Payhip's $99/mo Pro plan eliminates transaction fees entirely (0%), while Gumroad keeps taking 10% forever.",
    p1Advantage: "Half the platform cut on the free plan (5% vs 10%), instant payouts to Stripe/PayPal, and a 0% fee tier.",
    p2Advantage: "Established brand recognition and the Discover recommendation marketplace.",
    scenarioWinners: {
      soloCreators: "Payhip (keep 5% more profit per unit)",
      globalSaaS: "Payhip (supports license keys and 0% tier)",
      physicalMerch: "Payhip (includes physical inventory tracking)",
      highVolume: "Payhip (Pro plan at $99/mo saves thousands compared to Gumroad's 10%)"
    },
    tableHighlights: [
      {
        feature: "Free Plan Commission",
        p1Value: "5% platform fee",
        p2Value: "10% + $0.50 platform fee",
        winner: "p1",
        notes: "Payhip cuts your platform fees in half on day one."
      },
      {
        feature: "0% Fee Option",
        p1Value: "Yes ($99/mo Pro plan)",
        p2Value: "No (always 10%)",
        winner: "p1",
        notes: "Gumroad never reduces its 10% cut regardless of your volume."
      }
    ],
    faqs: [
      {
        question: "How much do I save switching from Gumroad to Payhip?",
        answer: "On $5,000/month in sales, Gumroad takes approximately $650 in platform cuts. On Payhip Pro ($99/mo), you pay $99 + card fees, saving over $400 every month."
      }
    ]
  },

  "sellfy-vs-stan-store": {
    slug: "sellfy-vs-stan-store",
    p1Id: "sellfy",
    p2Id: "stan",
    title: "Sellfy vs Stan Store: Merch Storefront vs Link-in-Bio",
    headline: "E-commerce storefront (Sellfy) vs 1-click mobile checkout (Stan Store)",
    metaDescription: "Compare Sellfy and Stan Store fees ($29/mo each). Compare print-on-demand merch features against mobile link-in-bio conversion rates.",
    verdictSummary: "Both platforms charge $29/mo with 0% platform transaction fees. Choose Stan Store if your traffic comes primarily from TikTok, Instagram Reels, or YouTube Shorts where 1-click mobile checkout is king. Choose Sellfy if you want a complete branded website with built-in Print-on-Demand merchandise fulfillment.",
    p1Advantage: "Built-in Print-on-Demand merchandise production and customizable full-page storefronts.",
    p2Advantage: "High-converting mobile link-in-bio checkout with built-in coaching call booking.",
    scenarioWinners: {
      soloCreators: "Stan Store (for social media creators and coaches)",
      globalSaaS: "Tie",
      physicalMerch: "Sellfy (integrated print-on-demand catalog)",
      highVolume: "Stan Store (for mobile social conversion)"
    },
    tableHighlights: [
      {
        feature: "Starter Monthly Cost",
        p1Value: "$29 / month",
        p2Value: "$29 / month",
        winner: "tie",
        notes: "Both charge $29/mo with 0% transaction cuts."
      },
      {
        feature: "Print-on-Demand",
        p1Value: "Built-in auto fulfillment",
        p2Value: "None (digital / services only)",
        winner: "p1",
        notes: "Sellfy prints, packs, and ships merch for you."
      }
    ],
    faqs: [
      {
        question: "Which has higher conversion rates for Instagram traffic?",
        answer: "Stan Store generally converts social media traffic higher because customers can purchase in 1 click without ever leaving the Instagram or TikTok app browser."
      }
    ]
  },

  "stripe-vs-lemon-squeezy": {
    slug: "stripe-vs-lemon-squeezy",
    p1Id: "stripe",
    p2Id: "lemonsqueezy",
    title: "Stripe vs Lemon Squeezy: Direct Gateway vs Auto-Tax MoR",
    headline: "Stripe Direct vs Lemon Squeezy: 2.9% vs 5% + Merchant of Record",
    metaDescription: "Stripe vs Lemon Squeezy comparison. Is Lemon Squeezy's 5% fee worth the automatic global sales tax compliance over Stripe's 2.9% + $0.30?",
    verdictSummary: "Stripe costs 2.9% + $0.30, while Lemon Squeezy costs 5% + $0.50. That ~2.1% difference pays for complete global sales tax compliance, EU/UK VAT filing, chargeback defense, and automated invoicing. For creators selling internationally, Lemon Squeezy easily saves thousands in accounting fees.",
    p1Advantage: "2.1% lower fee per unit and rolling 2-day bank deposits.",
    p2Advantage: "Zero tax liability: Lemon Squeezy legally acts as the reseller and files all global sales taxes.",
    scenarioWinners: {
      soloCreators: "Lemon Squeezy (peace of mind with international VAT laws)",
      globalSaaS: "Lemon Squeezy (auto-tax, license keys, and subscription billing)",
      physicalMerch: "Stripe",
      highVolume: "Stripe (if selling primarily in your home jurisdiction)"
    },
    tableHighlights: [
      {
        feature: "Fee on $100 Sale",
        p1Value: "$3.20 (96.8% net)",
        p2Value: "$5.50 (94.5% net)",
        winner: "p1",
        notes: "Stripe saves $2.30 per $100 transaction."
      },
      {
        feature: "Tax Filings & Audits",
        p1Value: "Your responsibility",
        p2Value: "Handled by Lemon Squeezy",
        winner: "p2",
        notes: "MoR assumes all legal compliance risk."
      }
    ],
    faqs: [
      {
        question: "Can I use both Stripe and Lemon Squeezy?",
        answer: "Yes. Many businesses use direct Stripe for domestic clients or custom enterprise contracts, and Lemon Squeezy for self-serve international digital downloads to automate cross-border tax compliance."
      }
    ]
  },

  "whop-vs-gumroad": {
    slug: "whop-vs-gumroad",
    p1Id: "whop",
    p2Id: "gumroad",
    title: "Whop vs Gumroad: Modern Creator Hub vs Classic Storefront",
    headline: "Whop (3% cut) vs Gumroad (10% cut): Which creator platform wins?",
    metaDescription: "Whop vs Gumroad platform fee comparison. Compare Whop's 3% fee and Discord/community tools against Gumroad's 10% fee and audience network.",
    verdictSummary: "Whop is substantially cheaper than Gumroad, charging just 3% commission compared to Gumroad's 10% + $0.50. Whop also offers deep Discord/Telegram integrations and community management. Gumroad is only preferable for standalone ebook or simple file downloads where you don't need community features.",
    p1Advantage: "Only 3% platform commission (saves 7% on every transaction) and native community features.",
    p2Advantage: "Established marketplace with 10+ years of trust among indie authors.",
    scenarioWinners: {
      soloCreators: "Whop (keep 7% more profit)",
      globalSaaS: "Whop (better app and software licensing integrations)",
      physicalMerch: "Tie",
      highVolume: "Whop (saving 7% on $10k/mo puts $700/mo back in your pocket)"
    },
    tableHighlights: [
      {
        feature: "Platform Commission",
        p1Value: "3% flat",
        p2Value: "10% + $0.50",
        winner: "p1",
        notes: "Whop takes less than one-third of Gumroad's cut."
      }
    ],
    faqs: [
      {
        question: "Is Whop only for Discord communities?",
        answer: "No. While Whop started with Discord bots and trading groups, it now supports digital file downloads, web app access, online courses, and coaching packages."
      }
    ]
  },

  "paddle-vs-lemon-squeezy": {
    slug: "paddle-vs-lemon-squeezy",
    p1Id: "paddle",
    p2Id: "lemonsqueezy",
    title: "Paddle vs Lemon Squeezy: The Best Merchant of Record in 2026",
    headline: "Comparing top Merchants of Record: Paddle vs Lemon Squeezy",
    metaDescription: "Paddle vs Lemon Squeezy comparison. Both charge 5% + $0.50 as Merchants of Record. See which is better for SaaS billing vs digital creator storefronts.",
    verdictSummary: "Both platforms charge an identical base rate of 5% + $0.50 as full Merchants of Record that automate global sales tax. Paddle is tailored for enterprise and B2B SaaS with custom dunning, quote-to-cash, and wire payouts. Lemon Squeezy is tailored for creators and indie hackers with turnkey hosted storefronts and license keys.",
    p1Advantage: "Enterprise sales-assisted billing, wire payouts, and deep B2B localization.",
    p2Advantage: "Simpler creator setup, affiliate marketing, customer self-service portal, and weekly payouts.",
    scenarioWinners: {
      soloCreators: "Lemon Squeezy (turnkey checkouts and weekly payouts)",
      globalSaaS: "Paddle (for B2B) / Lemon Squeezy (for B2C)",
      physicalMerch: "Neither",
      highVolume: "Paddle for enterprise contracts; Lemon Squeezy for creator volume"
    },
    tableHighlights: [
      {
        feature: "Base Fee",
        p1Value: "5% + $0.50",
        p2Value: "5% + $0.50",
        winner: "tie",
        notes: "Identical base pricing for both Merchants of Record."
      },
      {
        feature: "Payout Frequency",
        p1Value: "Monthly ($100 min)",
        p2Value: "Weekly ($50 min)",
        winner: "p2",
        notes: "Lemon Squeezy provides faster access to cash."
      }
    ],
    faqs: [
      {
        question: "Which has better customer support?",
        answer: "Lemon Squeezy offers faster dedicated chat support for indie creators and developers, while Paddle provides dedicated account management for enterprise SaaS clients."
      }
    ]
  },

  "etsy-vs-sellfy": {
    slug: "etsy-vs-sellfy",
    p1Id: "etsy",
    p2Id: "sellfy",
    title: "Etsy vs Sellfy: Marketplace Discovery vs Branded Storefront",
    headline: "Selling crafts & merch: Etsy marketplace vs Sellfy online store",
    metaDescription: "Etsy vs Sellfy comparison for print-on-demand and digital creators. Compare Etsy's marketplace search against Sellfy's $29/mo 0% commission storefront.",
    verdictSummary: "Etsy is a marketplace where shoppers search for products; you pay listing fees and commissions but gain organic discovery. Sellfy is a private e-commerce store ($29/mo with 0% platform fees) with built-in Print-on-Demand merchandise where you own the branding and customer data.",
    p1Advantage: "Massive organic search volume from millions of active buyers looking for creative items.",
    p2Advantage: "0% platform transaction fee, custom domain, and built-in Print-on-Demand fulfillment.",
    scenarioWinners: {
      soloCreators: "Etsy if you don't have an audience; Sellfy if you have social followers",
      globalSaaS: "N/A",
      physicalMerch: "Etsy (huge craft market) or Sellfy (integrated POD merch)",
      highVolume: "Sellfy (fixed $29/mo avoids per-unit marketplace commissions)"
    },
    tableHighlights: [
      {
        feature: "Business Model",
        p1Value: "Marketplace directory",
        p2Value: "Standalone online store",
        winner: "tie",
        notes: "Depends on whether you need organic traffic or custom branding."
      }
    ],
    faqs: [
      {
        question: "Can I use Sellfy Print-on-Demand with Etsy?",
        answer: "Sellfy's Print-on-Demand is designed for your Sellfy storefront, though you can manually fulfill orders or use services like Printify on Etsy."
      }
    ]
  },

  "gumroad-vs-stripe": {
    slug: "gumroad-vs-stripe",
    p1Id: "gumroad",
    p2Id: "stripe",
    title: "Gumroad vs Stripe: Creator Storefront vs Raw Payment Gateway",
    headline: "Gumroad (13.5% total cut) vs Stripe Direct (2.9% + $0.30)",
    metaDescription: "Gumroad vs Stripe fee comparison. See the exact dollar difference between Gumroad's hosted storefront and Stripe Direct processing.",
    verdictSummary: "Stripe saves you around 10% on every single sale compared to Gumroad (2.9% + $0.30 vs ~13.5%). On $10,000 in monthly sales, Stripe fees are ~$320 while Gumroad fees are ~$1,350—a difference of over $1,000/month. However, Stripe requires setting up your own website and managing your own sales taxes.",
    p1Advantage: "Ready-made storefront, zero code, digital file hosting, and automatic EU VAT handling.",
    p2Advantage: "Saves ~10% in platform fees and delivers rolling 2-day direct bank deposits.",
    scenarioWinners: {
      soloCreators: "Gumroad to start fast with zero technical setup",
      globalSaaS: "Stripe",
      physicalMerch: "Stripe",
      highVolume: "Stripe (saving 10% on $50k/mo is $5,000/mo in savings)"
    },
    tableHighlights: [
      {
        feature: "Total Fee on $50 Product",
        p1Value: "$7.25 (~14.5%)",
        p2Value: "$1.75 (~3.5%)",
        winner: "p2",
        notes: "Stripe puts an extra $5.50 in your pocket per sale."
      }
    ],
    faqs: [
      {
        question: "Is it worth switching from Gumroad to Stripe?",
        answer: "If you earn more than $1,500/month, yes. The 10% savings will easily pay for tools like Lemon Squeezy, Payhip, or custom landing page hosting."
      }
    ]
  }
};

export const ALL_COMPARISONS = Object.values(COMPARISONS_DATA);
