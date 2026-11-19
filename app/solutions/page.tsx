"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Solutions() {
    const solutions = [
        {
            id: "banking",
            title: "Banking & Finance",
            icon: "🏦",
            color: "#F39221",
            bgLight: "bg-orange-50",
            borderLight: "border-orange-200",
            description: "Empowering financial institutions with secure, scalable, and innovative technology solutions that drive financial inclusion across Africa.",
            paragraph1: "Guava provides cutting-edge financial technology solutions designed to transform how banking and financial services are delivered across the continent. Our platforms enable financial institutions to reach underserved communities, streamline operations, and offer innovative products that meet the evolving needs of modern consumers.",
            paragraph2: "From digital payment systems and POS solutions to bulk payment processing and financial inclusion platforms, we equip banks, fintechs, and microfinance institutions with the tools they need to drive growth and expand their reach. Our solutions are built with security, scalability, and user experience at their core.",
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1170&auto=format&fit=crop",
            features: ["Digital payment platforms", "POS systems", "Bulk payment processing", "Financial inclusion solutions", "Multi-currency support"],
        },
        {
            id: "enterprise",
            title: "Enterprise Solutions",
            icon: "🏢",
            color: "#91D050",
            bgLight: "bg-green-50",
            borderLight: "border-green-200",
            description: "Comprehensive technology solutions designed to optimize operations, enhance productivity, and drive growth for businesses of all sizes.",
            paragraph1: "Our enterprise solutions are designed to help businesses streamline operations, improve efficiency, and drive sustainable growth. We understand the unique challenges facing African enterprises and deliver tailored technology solutions that address specific needs while ensuring scalability for future expansion.",
            paragraph2: "From HR management systems and business process automation to custom software development and managed IT services, we provide the digital backbone that modern enterprises need to compete in today's fast-paced market. Our solutions are flexible, cost-effective, and designed to evolve with your business.",
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1169&auto=format&fit=crop",
            features: ["HR management systems", "Business process automation", "Custom software development", "Managed IT services", "Cloud solutions"],
        },
        {
            id: "digital-asset",
            title: "Digital Asset & Risk Management",
            icon: "🔒",
            color: "#F39221",
            bgLight: "bg-orange-50",
            borderLight: "border-orange-200",
            description: "Protecting and optimizing your digital assets with cutting-edge risk management solutions and robust security frameworks.",
            paragraph1: "In today's digital economy, protecting your assets and managing risk is more critical than ever. Guava offers comprehensive digital asset and risk management solutions that help organizations safeguard their resources, ensure compliance, and make informed decisions based on accurate risk assessments.",
            paragraph2: "Our platforms include credit rating systems, risk assessment tools, asset protection frameworks, and compliance management solutions. We help businesses and financial institutions identify, assess, and mitigate risks while maximizing the value of their digital assets through robust security protocols and intelligent monitoring.",
            image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1172&auto=format&fit=crop",
            features: ["Credit rating systems", "Risk assessment tools", "Asset protection", "Compliance management", "Data security"],
        },
        {
            id: "government",
            title: "Government Enterprise Admin Solutions",
            icon: "🏛️",
            color: "#91D050",
            bgLight: "bg-green-50",
            borderLight: "border-green-200",
            description: "Streamlining government operations with intelligent administration platforms that enhance service delivery and citizen engagement.",
            paragraph1: "Guava is committed to supporting governments in their digital transformation journey. Our government enterprise administration solutions help public sector organizations streamline operations, improve service delivery, and enhance citizen engagement through intelligent platforms and data-driven decision making.",
            paragraph2: "From governance platforms and citizen service portals to public administration systems and policy implementation tools, we provide the technology infrastructure that enables governments to operate more efficiently and transparently. Our solutions help bridge the gap between citizens and government services, making public administration more accessible and responsive.",
            image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1170&auto=format&fit=crop",
            features: ["Governance platforms", "Citizen service portals", "Public administration systems", "Data management", "Policy implementation tools"],
        },
        {
            id: "connectivity",
            title: "Connectivity",
            icon: "📡",
            color: "#00B4D8",
            bgLight: "bg-cyan-50",
            borderLight: "border-cyan-200",
            description: "Delivering reliable, high-speed connectivity solutions that bridge the digital divide and enable seamless communication across Africa.",
            paragraph1: "Connectivity is the foundation of digital transformation. Guava delivers reliable, high-speed connectivity solutions that bridge the digital divide and enable seamless communication across Africa. Our infrastructure solutions ensure that businesses, institutions, and communities have access to the connectivity they need to thrive in the digital age.",
            paragraph2: "Through strategic partnerships and cutting-edge technology, we provide fiber networks, VSAT connectivity, enterprise internet solutions, and community access networks. We are committed to ensuring that no community is left behind, delivering connectivity solutions that are reliable, affordable, and accessible to all.",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1470&auto=format&fit=crop",
            features: ["Fiber networks", "VSAT connectivity", "Enterprise internet", "Network management", "Community access solutions"],
        },
    ];

    return (
        <div className="site-shell relative min-h-screen overflow-x-hidden">

            <Navbar />

            {/* Animated Artwork */}
            <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="fixed top-10 left-6 opacity-30 pointer-events-none z-0"
            >
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                    <text x="5" y="15" fontSize="20" fill="#F39221" opacity="0.5">&lt;/&gt;</text>
                </svg>
            </motion.div>

            <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="fixed top-10 right-6 opacity-30 pointer-events-none z-0"
            >
                <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
                    <circle cx="35" cy="35" r="20" stroke="#91D050" strokeWidth="1.5" />
                    <ellipse cx="35" cy="35" rx="8" ry="20" stroke="#F39221" strokeWidth="1.5" />
                </svg>
            </motion.div>

            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="fixed bottom-10 left-6 opacity-30 pointer-events-none z-0"
            >
                <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
                    <ellipse cx="35" cy="20" rx="15" ry="5" stroke="#F39221" strokeWidth="1.5" fill="none" />
                    <line x1="20" y1="20" x2="20" y2="50" stroke="#F39221" strokeWidth="1.5" />
                    <line x1="50" y1="20" x2="50" y2="50" stroke="#F39221" strokeWidth="1.5" />
                </svg>
            </motion.div>

            <motion.div
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="fixed bottom-10 right-6 opacity-30 pointer-events-none z-0"
            >
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <path d="M15 30 Q30 15 45 30" stroke="#91D050" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                    <circle cx="30" cy="45" r="3" fill="#F39221" />
                </svg>
            </motion.div>

            {/* Hero Section */}
            <section className="relative z-10 pt-32 pb-12 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                            Our <span className="text-[#F39221]">Solutions</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive technology solutions designed to drive innovation,
                            efficiency, and growth across every sector of the African economy.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Detailed Solution Showcase - Alternating Images */}
            <section className="relative z-10 py-2 px-6 bg-white/50">
                <div className="max-w-6xl mx-auto">
                    <div className="space-y-12">
                        {solutions.map((solution, idx) => (
                            <motion.div
                                key={solution.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                className={`grid grid-cols-1 ${idx % 2 === 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-2'} gap-8 items-center p-6 md:p-8 tech-panel ${solution.bgLight} border ${solution.borderLight} shadow-md hover:shadow-lg transition`}
                            >
                                {/* Image - Alternating sides */}
                                <div className={`${idx % 2 === 0 ? 'order-1 lg:order-1' : 'order-1 lg:order-2'} relative h-72 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg`}>
                                    <img
                                        src={solution.image}
                                        alt={solution.title}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                    {/* <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-md">
                                        <span className="text-2xl">{solution.icon}</span>
                                        <span className="text-sm font-semibold text-gray-900">{solution.title}</span>
                                    </div> */}
                                </div>

                                {/* Content - Alternating sides */}
                                <div className={`${idx % 2 === 0 ? 'order-2 lg:order-2' : 'order-2 lg:order-1'} space-y-4`}>
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{solution.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {solution.paragraph1}
                                        </p>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        {solution.paragraph2}
                                    </p>
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {solution.features.map((feature, i) => (
                                            <span key={i} className="text-xs px-3 py-1 rounded-full bg-white/80 text-gray-600 border border-gray-200">
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="pt-2">
                                        <Link href="/contact">
                                            <button className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#F39221] to-[#91D050] text-white text-sm font-semibold hover:shadow-lg transition">
                                                Learn More →
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative z-10 py-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-gradient-to-r from-[#F39221]/10 to-[#91D050]/10 rounded-3xl p-8 md:p-12 text-center border border-[#F39221]/20 shadow-xl"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Ready to Find the Right <span className="text-[#F39221]">Solution</span>?
                        </h2>
                        <p className="text-gray-600 text-base md:text-lg mb-8 max-w-2xl mx-auto">
                            Let's discuss your specific needs and how Guava can help you achieve your goals.
                        </p>
                        <Link href="/contact">
                            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-[#F39221] to-[#91D050] text-white font-semibold shadow-md hover:shadow-lg transition text-sm md:text-base cursor-pointer">
                                Talk to Our Team →
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}