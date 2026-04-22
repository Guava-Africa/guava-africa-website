"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Tel() {
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
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                            <span className="text-[#91D050]">Guava</span>Tel
                        </h1>
                        <p className="text-xl text-gray-600">
                            Advanced telecommunications and connectivity infrastructure
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
                                We have established strategic partnerships with Tier 1 Internet Access Providers, leveraging undersea cable capacity, VSAT global infrastructure, and metro fiber networks to deliver reliable, scalable, and cost-effective connectivity solutions. Our offerings span FTTB, FTTH, and VSAT, enabling us to provide seamless, high-performance internet access tailored to both urban and remote environments.
                            </p>
                        </div>

                        <div className="p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200 shadow-md hover:shadow-lg transition">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="text-3xl">📡</div>
                                <h2 className="text-2xl font-bold text-gray-900">What We Do</h2>
                            </div>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                GuavaTel is the connectivity and network infrastructure arm of the Guava ecosystem, dedicated to delivering reliable, high-performance internet and networking solutions for businesses, institutions, and emerging markets. We specialize in designing, deploying, and managing robust network systems that form the backbone of modern digital operations.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Our core services include enterprise internet connectivity, network design and implementation, and ongoing network management. We provide tailored connectivity solutions using fiber, wireless, and hybrid technologies to ensure consistent uptime, scalability, and performance across diverse operating environments.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Beyond connectivity, we build and maintain secure network infrastructures, including routers, switches, and access systems, optimized for efficiency and resilience. Our approach emphasizes proactive monitoring, rapid fault resolution, and adherence to strict service level agreements (SLAs), ensuring minimal downtime and uninterrupted business operations.
                            </p>
                        </div>

                        <div className="p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200 shadow-md hover:shadow-lg transition">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Services</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#91D050]/5 transition">
                                    <div className="text-2xl">🌐</div>
                                    <div>
                                        <div className="font-semibold text-gray-900">Internet Connectivity</div>
                                        <div className="text-sm text-gray-500">FTTB, FTTH, VSAT solutions</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#91D050]/5 transition">
                                    <div className="text-2xl">🏗️</div>
                                    <div>
                                        <div className="font-semibold text-gray-900">Network Design</div>
                                        <div className="text-sm text-gray-500">Custom infrastructure solutions</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#91D050]/5 transition">
                                    <div className="text-2xl">⚙️</div>
                                    <div>
                                        <div className="font-semibold text-gray-900">Network Management</div>
                                        <div className="text-sm text-gray-500">24/7 monitoring and support</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#91D050]/5 transition">
                                    <div className="text-2xl">🔒</div>
                                    <div>
                                        <div className="font-semibold text-gray-900">Secure Infrastructure</div>
                                        <div className="text-sm text-gray-500">Enterprise-grade security</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200 shadow-md hover:shadow-lg transition">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose GuavaTel?</h2>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="text-[#91D050] text-xl mt-1">✓</div>
                                    <div>
                                        <div className="font-semibold text-gray-900">Tier 1 Partnerships</div>
                                        <div className="text-gray-600">Direct access to global network infrastructure</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="text-[#91D050] text-xl mt-1">✓</div>
                                    <div>
                                        <div className="font-semibold text-gray-900">99.9% Uptime</div>
                                        <div className="text-gray-600">Reliable connectivity you can depend on</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="text-[#91D050] text-xl mt-1">✓</div>
                                    <div>
                                        <div className="font-semibold text-gray-900">Scalable Solutions</div>
                                        <div className="text-gray-600">From small businesses to large enterprises</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="text-[#91D050] text-xl mt-1">✓</div>
                                    <div>
                                        <div className="font-semibold text-gray-900">African Expertise</div>
                                        <div className="text-gray-600">Understanding local infrastructure challenges</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-center pt-8">
                            <Link href="/contact">
                                <button className="px-8 py-3 rounded-full bg-[#91D050] text-white font-semibold shadow-md hover:shadow-lg transition">
                                    Get Started with GuavaTel →
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
