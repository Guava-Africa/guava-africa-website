"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function CorporateGovernance() {
    return (
        <div className="relative min-h-screen bg-linear-to-br from-amber-50 via-white to-green-50 overflow-x-hidden">

            <Navbar />

            {/* Animated Tech Artwork - Corners only */}
            <motion.div 
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="fixed top-10 left-6 opacity-30 pointer-events-none z-0"
            >
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                    <text x="5" y="15" fontSize="20" fill="#F39221" opacity="0.5">&lt;/&gt;</text>
                    <rect x="8" y="50" width="12" height="12" stroke="#91D050" strokeWidth="1.5" fill="none" />
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
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                                Corporate <span className="text-[#F39221]">Governance</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-6">
                                Commitment to Excellence, Transparency, and Accountability
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="relative h-80 rounded-xl overflow-hidden shadow-2xl"
                        >
                            <img
                                src="/governance-hero.jpg"
                                alt="Corporate governance"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="relative z-10 py-12 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-12"
                    >
                        {/* Governance Statement with Picture */}
                        <div className="p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200 shadow-md hover:shadow-lg transition">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="text-3xl">🏛️</div>
                                <h2 className="text-2xl font-bold text-gray-900">Governance Framework</h2>
                            </div>
                            <div className="flex flex-col lg:flex-row gap-8 items-start">
                                <div className="lg:w-1/4 flex flex-col items-center">
                                    <div className="w-40 h-40 rounded-xl overflow-hidden shadow-lg mb-4">
                                        <img
                                            src="/africapaciti-board.jpg"
                                            alt="Africapaciti Board"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <p className="text-xs text-gray-500 text-center">Africapaciti Board of Directors</p>
                                </div>
                                <div className="lg:w-3/4">
                                    <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                                        <span className="font-semibold">Guava is committed to the highest standards of corporate governance 
                                        and is ultimately managed by the Africapaciti Board.</span>
                                    </p>
                                    <p className="text-gray-600 leading-relaxed">
                                        Our governance framework is built on the principles of transparency, accountability, 
                                        fairness, and responsibility. We adhere to international best practices and comply 
                                        with all applicable laws and regulations in every jurisdiction where we operate.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}