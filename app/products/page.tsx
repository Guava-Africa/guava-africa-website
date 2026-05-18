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
        {
            name: "ACX (Africa Credit Exchange)",
            desc: "A dual-purpose platform combining loan application processing with a comprehensive credit rating system. Streamlines international credit assessment and borrowing.",
            division: "Pay",
            status: "In Development",
            images: [
                "/screenshots/acx.webp",
            ],
            imageBg: "bg-linear-to-br from-[#F39221]/20 to-[#F39221]/5",
            icon: "💱",
            features: ["Loan applications", "Credit rating system", "International credit exchange"],
            color: "#F39221"
        },
        {
            name: "GuavaSupport",
            desc: "Customer support portal for clients seeking technical assistance with our applications or other technical issues. Provides streamlined ticket management and support resolution.",
            division: "Tech",
            status: "In Development",
            images: [
                "/screenshots/guavasupport.webp",
            ],
            imageBg: "bg-linear-to-br from-[#91D050]/20 to-[#91D050]/5",
            icon: "🎧",
            features: ["Ticket management", "Client support", "Technical assistance"],
            color: "#91D050"
        },
        {
            name: "GuavaTel",
            desc: "Internet service provider solution powered by Liquid delivering reliable internet connectivity to communities. Focused on bridging the digital divide and providing accessible internet to the people.",
            division: "Tel",
            status: "In Development",
            images: [
                "/screenshots/guavatel.webp",
            ],
            imageBg: "bg-linear-to-br from-[#00B4D8]/20 to-[#00B4D8]/5",
            icon: "📡",
            features: ["Internet connectivity", "Community access", "Network solutions"],
            color: "#00B4D8"
        }
    ];

    // Helper function to get status color
    const getStatusColor = (status: string) => {
        switch (status) {
            case "Live":
                return "bg-green-100 text-green-700";
            case "In Development":
                return "bg-blue-100 text-blue-700";
            case "Beta":
                return "bg-orange-100 text-orange-700";
            case "Coming Soon":
                return "bg-purple-100 text-purple-700";
            default:
                return "bg-gray-100 text-gray-700";
        }
    };

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
                            Each product is built for scale, security, and user experience.
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
                                {/* Product Image Area with Status Badge on Top Right */}
                                <div className={`relative h-64 ${product.imageBg} overflow-hidden border-b border-gray-200`}>
                                    {/* Status Badge - Top Right Corner */}
                                    <div className="absolute bottom-3 right-3 z-10">
                                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${getStatusColor(product.status)} shadow-sm`}>
                                            {product.status}
                                        </span>
                                    </div>

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
                                        <div className="w-full h-full flex items-center justify-center">
                                            <div className="text-center">
                                                <div className="text-5xl mb-2">{product.icon}</div>
                                                <p className="text-gray-400 text-sm font-medium">App Screenshot</p>
                                            </div>
                                        </div>
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