"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Join() {
    return (
        <div className="site-shell relative min-h-screen overflow-x-hidden">

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
                                Join the <span className="text-[#F39221]">Guava</span> Team
                            </h1>
                            <p className="text-xl text-gray-600 mb-6">
                                Be part of Africa's digital revolution
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                We're building the infrastructure for tomorrow's economy, and we need passionate,
                                talented individuals to help us shape Africa's digital future.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="relative h-80 rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <img
                                src="/team.png"
                                alt="Guava team working together"
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
                        {/* Why Join Us */}
                        {/* <div className="p-8 tech-panel bg-white/60 backdrop-blur-sm border border-gray-200 shadow-md hover:shadow-lg transition">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="text-3xl">🚀</div>
                                <h2 className="text-2xl font-bold text-gray-900">Why Join Guava?</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="text-center p-4 rounded-lg hover:bg-[#F39221]/5 transition">
                                    <div className="text-4xl mb-3">💡</div>
                                    <h3 className="font-semibold text-gray-900">Innovation</h3>
                                    <p className="text-gray-600 text-sm mt-1">Work on cutting-edge technology that's transforming industries across Africa.</p>
                                </div>
                                <div className="text-center p-4 rounded-lg hover:bg-[#F39221]/5 transition">
                                    <div className="text-4xl mb-3">🌍</div>
                                    <h3 className="font-semibold text-gray-900">Impact</h3>
                                    <p className="text-gray-600 text-sm mt-1">Make a tangible difference in communities and businesses across the continent.</p>
                                </div>
                                <div className="text-center p-4 rounded-lg hover:bg-[#F39221]/5 transition">
                                    <div className="text-4xl mb-3">📈</div>
                                    <h3 className="font-semibold text-gray-900">Growth</h3>
                                    <p className="text-gray-600 text-sm mt-1">Join a fast-growing company with opportunities for personal and professional development.</p>
                                </div>
                            </div>
                        </div> */}

                        {/* What We're Looking For */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-8 tech-panel bg-orange-50 backdrop-blur-sm border border-orange-200 shadow-md hover:shadow-lg transition">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="text-3xl">👨‍💻</div>
                                    <h2 className="text-2xl font-bold text-gray-900">We're Looking For</h2>
                                </div>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#F39221] mt-1">•</span>
                                        <span className="text-gray-600">Passionate innovators who want to make a difference</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#F39221] mt-1">•</span>
                                        <span className="text-gray-600">Talented developers, engineers, and designers</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#F39221] mt-1">•</span>
                                        <span className="text-gray-600">Problem-solvers who thrive in dynamic environments</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#F39221] mt-1">•</span>
                                        <span className="text-gray-600">Team players who value collaboration and diversity</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="p-8 tech-panel bg-green-50 backdrop-blur-sm border border-green-200 shadow-md hover:shadow-lg transition">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="text-3xl">🎯</div>
                                    <h2 className="text-2xl font-bold text-gray-900">Our Culture</h2>
                                </div>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#91D050] mt-1">•</span>
                                        <span className="text-gray-600">Innovation-driven and future-focused</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#91D050] mt-1">•</span>
                                        <span className="text-gray-600">Inclusive and diverse workplace</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#91D050] mt-1">•</span>
                                        <span className="text-gray-600">Collaborative and supportive environment</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#91D050] mt-1">•</span>
                                        <span className="text-gray-600">Commitment to work-life balance</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* CTA Section */}
                        <div className="p-10 tech-panel bg-gradient-to-r from-[#F39221]/10 to-[#91D050]/10 border border-[#F39221]/20 shadow-xl text-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Ready to Join the <span className="text-[#F39221]">Growing</span> Team?
                            </h2>
                            <p className="text-gray-600 text-base md:text-lg mb-8 max-w-2xl mx-auto">
                                Explore our open positions and take the first step toward an exciting career at Guava Africa.
                            </p>
                            <a
                                href="https://hrxchange.global/search"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#F39221] to-[#91D050] text-white font-semibold shadow-md hover:shadow-lg transition text-sm md:text-base cursor-pointer"
                            >
                                View Open Positions
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
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
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}