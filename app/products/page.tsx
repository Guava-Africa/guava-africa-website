"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Products() {
    const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

    const products = [
        {
            name: "SpiritPay",
            desc: "All-in-one payment app for churches. Manage tithes, offerings, donations, event registrations, and all church-related payments seamlessly through a single platform.",
            division: "Pay",
            status: "In Development",
            images: [
                "/screenshots/spiritpay.webp",
                "/screenshots/spiritpay.webp",
                "/screenshots/spiritpay.webp"
            ],
            imageBg: "bg-linear-to-br from-[#F39221]/20 to-[#F39221]/5",
            icon: "⛪",
            features: ["Tithes & offerings", "Event payments", "Donation tracking"],
            color: "#F39221"
        },
        {
            name: "HRX",
            desc: "Complete HR management system with job posting, candidate tracking, employer portal, and centralized candidate management. Streamline your entire recruitment and HR operations.",
            division: "Tech",
            status: "In Development",
            image: "/screenshots/hrx.webp",
            imageBg: "bg-linear-to-br from-[#91D050]/20 to-[#91D050]/5",
            icon: "👥",
            features: ["Job postings", "Candidate tracking", "Employer portal"],
            color: "#91D050"
        },
        // {
        //     name: "Guava Pay SDK",
        //     desc: "Developer-first payment integration toolkit. Accept payments, manage subscriptions, and handle disputes with one API.",
        //     division: "Pay",
        //     status: "Live",
        //     image: "/products/pay-sdk.jpg",
        //     imageBg: "bg-linear-to-br from-[#F39221]/20 to-[#F39221]/5",
        //     icon: "💳",
        //     features: ["One-click checkout", "Subscription management", "Webhook events", "Mobile SDKs"],
        //     color: "#F39221"
        // },
        // {
        //     name: "Global SMS Gateway",
        //     desc: "High-throughput SMS delivery system. Send millions of messages globally with real-time delivery tracking.",
        //     division: "Tel",
        //     status: "Live",
        //     image: "/products/sms-gateway.jpg",
        //     imageBg: "bg-linear-to-br from-[#91D050]/20 to-[#91D050]/5",
        //     icon: "📡",
        //     features: ["Bulk SMS", "Two-way messaging", "Delivery reports", "Short codes"],
        //     color: "#91D050"
        // },
        // {
        //     name: "Edge Compute Network",
        //     desc: "Distributed computing at the edge. Run code closer to your users for sub-millisecond responses.",
        //     division: "Tech",
        //     status: "Beta",
        //     image: "/products/edge-compute.jpg",
        //     imageBg: "bg-linear-to-br from-[#F39221]/20 to-[#91D050]/10",
        //     icon: "⚡",
        //     features: ["Global edge locations", "Sub-50ms latency", "Auto-scaling", "Built-in caching"],
        //     color: "#F39221"
        // },
        // {
        //     name: "Fraud Detection Engine",
        //     desc: "AI-powered transaction monitoring. Detect and prevent fraud in real-time with machine learning.",
        //     division: "Pay",
        //     status: "Live",
        //     image: "/products/fraud-engine.jpg",
        //     imageBg: "bg-linear-to-br from-[#F39221]/20 to-[#F39221]/5",
        //     icon: "🛡️",
        //     features: ["Real-time scoring", "Custom rules", "ML models", "Case management"],
        //     color: "#F39221"
        // },
        // {
        //     name: "Number Verification API",
        //     desc: "Global phone number validation. Verify phone numbers across 200+ countries with instant lookup.",
        //     division: "Tel",
        //     status: "Live",
        //     image: "/products/number-verify.jpg",
        //     imageBg: "bg-linear-to-br from-[#91D050]/20 to-[#91D050]/5",
        //     icon: "✅",
        //     features: ["Format validation", "Carrier lookup", "Line type detection", "Portability check"],
        //     color: "#91D050"
        // },
        // {
        //     name: "Serverless Platform",
        //     desc: "Scale-to-zero function hosting. Deploy code without servers. Pay only for what you use.",
        //     division: "Tech",
        //     status: "Coming Soon",
        //     image: "/products/serverless.jpg",
        //     imageBg: "bg-linear-to-br from-[#F39221]/20 to-[#91D050]/10",
        //     icon: "☁️",
        //     features: ["Auto-scaling", "Multiple runtimes", "Built-in monitoring", "Custom domains"],
        //     color: "#F39221"
        // },
        // {
        //     name: "Recurring Billing Engine",
        //     desc: "Subscription management at scale. Handle recurring payments, prorations, and dunning with ease.",
        //     division: "Pay",
        //     status: "Live",
        //     image: "/products/billing.jpg",
        //     imageBg: "bg-linear-to-br from-[#F39221]/20 to-[#F39221]/5",
        //     icon: "🔄",
        //     features: ["Flexible billing cycles", "Usage-based billing", "Invoice generation", "Payment retries"],
        //     color: "#F39221"
        // },
        // {
        //     name: "Voice API",
        //     desc: "Programmable voice infrastructure. Build voice applications with crystal-clear quality globally.",
        //     division: "Tel",
        //     status: "Beta",
        //     image: "/products/voice-api.jpg",
        //     imageBg: "bg-linear-to-br from-[#91D050]/20 to-[#91D050]/5",
        //     icon: "📞",
        //     features: ["Call routing", "Conference calling", "Speech recognition", "Recording"],
        //     color: "#91D050"
        // },
        // {
        //     name: "Object Storage",
        //     desc: "Scalable cloud storage. Store and retrieve unlimited data with 11 nines durability.",
        //     division: "Tech",
        //     status: "Live",
        //     image: "/products/storage.jpg",
        //     imageBg: "bg-linear-to-br from-[#F39221]/20 to-[#91D050]/10",
        //     icon: "📦",
        //     features: ["S3-compatible API", "Versioning", "Lifecycle policies", "CDN integration"],
        //     color: "#F39221"
        // },
    ];

    // Placeholder for actual images - using colored divs with icons as placeholder
    // Replace with actual image paths when you have them

    return (
        <div className="relative min-h-screen bg-linear-to-br from-amber-50 via-white to-green-50 overflow-x-hidden">

            <Navbar />

            {/* Hero */}
            <section className="relative z-10 pt-32 pb-12 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                            Our <span className="text-[#F39221]">Products</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Building the infrastructure of tomorrow, one product at a time.
                            Each product is built for scale, security, and developer experience.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="relative z-10 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {products.map((product, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                                whileHover={{ y: -8 }}
                                onMouseEnter={() => setHoveredProduct(i)}
                                onMouseLeave={() => setHoveredProduct(null)}
                                className="group rounded-xl bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all overflow-hidden cursor-pointer"
                            >
                                {/* Product Image Area - Placeholder for app screenshots */}
                                <div className={`h-64 ${product.imageBg} relative overflow-hidden border-b border-gray-200`}>
                                    {product.images?.length ? (
                                        <div className="grid h-full w-full gap-0" style={{ gridTemplateColumns: `repeat(${product.images.length}, 1fr)` }}>
                                            {product.images.map((img, imgIdx) => (
                                                <div key={imgIdx} className="relative h-full w-full overflow-hidden">
                                                    <Image
                                                        src={img}
                                                        alt={`${product.name} screenshot ${imgIdx + 1}`}
                                                        fill
                                                        className="object-contain object-center"
                                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    ) : product.image ? (
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={product.image}
                                                alt={`${product.name} screenshot`}
                                                fill
                                                className="object-cover object-center"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            />
                                        </div>
                                    ) : (
                                        <p className="text-gray-400 text-sm font-medium">App Screenshot</p>
                                    )}
                                </div>

                                {/* Product Info */}
                                <div className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-2">
                                            <span className="text-2xl">{product.icon}</span>
                                            <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                                        </div>
                                        <div className="text-xs font-mono font-bold px-2 py-1 rounded-full bg-[#F39221]/10 text-[#F39221]">
                                            {product.division}
                                        </div>
                                    </div>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                        {product.desc}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {product.features.slice(0, 3).map((feature, idx) => (
                                            <span key={idx} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                    <button className="w-full py-2 rounded-lg border border-[#F39221] text-[#F39221] text-sm font-semibold hover:bg-[#F39221] hover:text-white transition">
                                        View Product →
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}