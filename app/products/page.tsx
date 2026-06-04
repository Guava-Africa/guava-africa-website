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
            name: "HRX",
            title: "Human Resources Exchange",
            desc: "Complete HR management system with job posting, candidate tracking, employer portal, and centralized candidate management. Streamline your entire recruitment and HR operations.",
            division: "Tech",
            status: "Beta",
            image: "/screenshots/hrx.webp",
            icon: "/logos/hrx.png",
            features: ["Job postings", "Candidate tracking", "Employer portal"],
            color: "#91D050",
            link: "https://hrx.global",
            external: true
        },
        {
            name: "Abide",
            desc: "All-in-one payment app for churches. Manage tithes, offerings, donations, event registrations, and all church-related payments seamlessly through a single platform.",
            division: "Pay",
            status: "In Development",
            image: "/screenshots/abide.png",
            icon: "/logos/abide.png",
            features: ["Tithes & offerings", "Event payments", "Donation tracking"],
            color: "#F39221",
            link: null,
            external: false
        },
        {
            name: "ACX",
            title: "Africa Credit Exchange",
            desc: "A dual-purpose platform combining loan application processing with a comprehensive credit rating system. Streamlines international credit assessment and borrowing.",
            division: "Pay",
            status: "In Development",
            image: "/screenshots/acx.png",
            icon: "/logos/ACX logoText.png",
            features: ["Loan applications", "Credit rating system", "International credit exchange"],
            color: "#F39221",
            link: null,
            external: false
        },
        {
            name: "Funky GuavaSupport",
            desc: "Customer support portal for clients seeking technical assistance with our applications or other technical issues. Provides streamlined ticket management and support resolution.",
            division: "Tech",
            status: "In Development",
            image: "/screenshots/guavasupport.png",
            icon: "/logos/guava-tech.png",
            features: ["Ticket management", "Client support", "Technical assistance"],
            color: "#91D050",
            link: null,
            external: false
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
                return "bg-red-100 text-red-700";
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                                whileHover={{ y: -8 }}
                                onMouseEnter={() => setHoveredProduct(i)}
                                onMouseLeave={() => setHoveredProduct(null)}
                                className="group rounded-xl bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all overflow-hidden cursor-pointer flex flex-col"
                            >
                                {/* Product Image Area - Fixed 16:9 Aspect Ratio */}
                                <div className="relative w-full bg-gray-100 overflow-hidden" style={{ aspectRatio: '16 / 9' }}>
                                    {product.image ? (
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={product.image}
                                                alt={`${product.name} screenshot`}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                priority={i < 3}
                                            />
                                        </div>
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                                            <div className="text-center">
                                                {product.icon ? (
                                                    <img src={product.icon} alt={`${product.name} icon`} className="w-16 h-16 mx-auto" />
                                                ) : (
                                                    <div className="text-5xl mb-2">📱</div>
                                                )}
                                                <p className="text-gray-400 text-sm font-medium mt-2">App Screenshot</p>
                                            </div>
                                        </div>
                                    )}
                                    {/* Status Badge - Bottom Right Corner */}
                                    <div className="absolute bottom-3 right-3 z-10">
                                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${getStatusColor(product.status)} shadow-sm backdrop-blur-sm bg-opacity-90`}>
                                            {product.status}
                                        </span>
                                    </div>
                                </div>

                                {/* Product Info - Flexible height, pushes button to bottom */}
                                <div className="p-5 flex flex-col flex-grow">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            {product.icon && (
                                                <img src={product.icon} alt={`${product.name} icon`} className="w-8 h-8 object-contain" />
                                            )}
                                            <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                                        </div>
                                        <div className="text-xs font-mono font-bold px-2 py-1 rounded-full bg-[#F39221]/10 text-[#F39221] whitespace-nowrap">
                                            {product.division}
                                        </div>
                                    </div>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-2 mt-2 line-clamp-3">
                                        {product.title ? product.title : null}
                                    </p>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-4">
                                        {product.desc}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {product.features.map((feature, idx) => (
                                            <span key={idx} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                    
                                    {/* Link Button - only show if product has a link */}
                                    {product.link ? (
                                        <a
                                            href={product.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full py-2 rounded-lg bg-gradient-to-r from-[#F39221] to-[#91D050] text-white text-sm font-semibold hover:shadow-lg transition mt-auto flex items-center justify-center gap-2"
                                        >
                                            Visit Website
                                            <svg 
                                                xmlns="http://www.w3.org/2000/svg" 
                                                className="h-4 w-4" 
                                                fill="none" 
                                                viewBox="0 0 24 24" 
                                                stroke="currentColor"
                                            >
                                                <path 
                                                    strokeLinecap="round" 
                                                    strokeLinejoin="round" 
                                                    strokeWidth={2} 
                                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                                                />
                                            </svg>
                                        </a>
                                    ) : (
                                        <button 
                                            disabled
                                            className="w-full py-2 rounded-lg border border-gray-300 bg-gray-100 text-gray-400 text-sm font-semibold cursor-not-allowed mt-auto"
                                        >
                                            Coming Soon
                                        </button>
                                    )}
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