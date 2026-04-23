"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Pay() {
    return (
        <div className="relative min-h-screen bg-linear-to-br from-amber-50 via-white to-green-50 overflow-x-hidden">
            <Navbar />

            <section className="relative z-10 pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-12"
                    >
                        <div className="flex justify-center mb-6">
                            <Image
                                src="/logos/guava-pay.png"
                                alt="GuavaPay Logo"
                                width={200}
                                height={100}
                                className="h-auto"
                            />
                        </div>
                        <p className="text-xl text-gray-600">
                            Driving financial inclusion across Africa
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200 shadow-md hover:shadow-lg transition">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="text-3xl">🎯</div>
                                <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                We have developed scalable, cost-effective, and innovative payment technology designed to advance financial inclusion by bringing the unbanked into the formal financial ecosystem, while simultaneously simplifying and streamlining bulk payment processing for large enterprises through efficient, user-friendly platforms.
                            </p>
                        </div>

                        <div className="p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200 shadow-md hover:shadow-lg transition">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="text-3xl">💰</div>
                                <h2 className="text-2xl font-bold text-gray-900">What We Do</h2>
                            </div>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                GuavaPay specializes in the development and delivery of robust payment and banking solutions designed to drive financial inclusion and economic growth across Africa. We are committed to building responsible, affordable, and efficient digital payment systems that reduce reliance on cash and eliminate unnecessary intermediaries that increase transaction costs.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Recognizing the challenges faced by many African economies, particularly the complexity and high fees associated with existing mobile money and payment platforms, GuavaPay focuses on creating streamlined solutions that prioritize simplicity, accessibility, and cost-effectiveness.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Our offerings include Point of Sale (POS) systems, custom payment management platforms, and fully integrated payment solutions tailored to organizational needs. We enable businesses to build and manage their own payment ecosystems, providing tools to process transactions, track revenue, and optimize financial operations efficiently.
                            </p>
                        </div>

                        <div className="p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200 shadow-md hover:shadow-lg transition">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#F39221]/5 transition">
                                    <div className="text-2xl">💳</div>
                                    <div>
                                        <div className="font-semibold text-gray-900">POS Systems</div>
                                        <div className="text-sm text-gray-500">Point of sale solutions</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#F39221]/5 transition">
                                    <div className="text-2xl">📊</div>
                                    <div>
                                        <div className="font-semibold text-gray-900">Payment Management</div>
                                        <div className="text-sm text-gray-500">Custom platforms</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#F39221]/5 transition">
                                    <div className="text-2xl">🔄</div>
                                    <div>
                                        <div className="font-semibold text-gray-900">Bulk Processing</div>
                                        <div className="text-sm text-gray-500">Streamlined operations</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#F39221]/5 transition">
                                    <div className="text-2xl">🛡️</div>
                                    <div>
                                        <div className="font-semibold text-gray-900">Financial Inclusion</div>
                                        <div className="text-sm text-gray-500">Bringing the unbanked in</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200 shadow-md hover:shadow-lg transition">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose GuavaPay?</h2>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="text-[#F39221] text-xl mt-1">✓</div>
                                    <div>
                                        <div className="font-semibold text-gray-900">Cost-Effective Solutions</div>
                                        <div className="text-gray-600">Reduce transaction costs and eliminate unnecessary intermediaries</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="text-[#F39221] text-xl mt-1">✓</div>
                                    <div>
                                        <div className="font-semibold text-gray-900">Scalable Technology</div>
                                        <div className="text-gray-600">Built to grow with your business needs</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="text-[#F39221] text-xl mt-1">✓</div>
                                    <div>
                                        <div className="font-semibold text-gray-900">User-Friendly Platforms</div>
                                        <div className="text-gray-600">Intuitive interfaces for seamless operations</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="text-[#F39221] text-xl mt-1">✓</div>
                                    <div>
                                        <div className="font-semibold text-gray-900">African Focus</div>
                                        <div className="text-gray-600">Tailored for African market challenges and opportunities</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-center pt-8">
                            <Link href="/contact">
                                <button className="px-8 py-3 rounded-full bg-[#F39221] text-white font-semibold shadow-md hover:shadow-lg transition">
                                    Get Started with GuavaPay →
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
