"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Tech() {
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
                            <span className="text-[#F39221]">Guava</span>Tech
                        </h1>
                        <p className="text-xl text-gray-600">
                            Cutting-edge technology and digital transformation
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
                                We empower enterprises and government institutions through intelligent, scalable technology solutions that enhance decision-making, streamline operations, and reduce risk. At GuavaTech, we combine software engineering, web development, and managed services to build robust digital platforms that drive efficiency, innovation, and sustainable business growth.
                            </p>
                        </div>

                        <div className="p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200 shadow-md hover:shadow-lg transition">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="text-3xl">⚙️</div>
                                <h2 className="text-2xl font-bold text-gray-900">What We Do</h2>
                            </div>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                GuavaTech specializes in software engineering and professional advisory services, delivering robust, custom-built solutions that enable corporate and government clients to scale and optimize their operations through technology. We provide critical business support systems ranging from governance and risk management platforms to sector-specific solutions such as agronomy systems.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Our core offerings include web development, custom software development, and fully managed IT services, allowing organizations to design, deploy, and maintain reliable digital platforms with ease. We focus on building scalable, secure, and high-performance systems tailored to complex operational environments.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Renowned for our ability to solve intricate business challenges, GuavaTech combines technical expertise with strategic insight to drive digital transformation, improve efficiency, and support sustainable growth for our clients.
                            </p>
                        </div>

                        <div className="p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200 shadow-md hover:shadow-lg transition">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Services</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-linear-to-r hover:from-[#F39221]/5 hover:to-[#91D050]/5 transition">
                                    <div className="text-2xl">💻</div>
                                    <div>
                                        <div className="font-semibold text-gray-900">Software Engineering</div>
                                        <div className="text-sm text-gray-500">Custom development solutions</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-linear-to-r hover:from-[#F39221]/5 hover:to-[#91D050]/5 transition">
                                    <div className="text-2xl">🌐</div>
                                    <div>
                                        <div className="font-semibold text-gray-900">Web Development</div>
                                        <div className="text-sm text-gray-500">Modern web platforms</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-linear-to-r hover:from-[#F39221]/5 hover:to-[#91D050]/5 transition">
                                    <div className="text-2xl">⚙️</div>
                                    <div>
                                        <div className="font-semibold text-gray-900">Managed IT Services</div>
                                        <div className="text-sm text-gray-500">Ongoing support and maintenance</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-linear-to-r hover:from-[#F39221]/5 hover:to-[#91D050]/5 transition">
                                    <div className="text-2xl">📊</div>
                                    <div>
                                        <div className="font-semibold text-gray-900">Business Intelligence</div>
                                        <div className="text-sm text-gray-500">Data-driven insights</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200 shadow-md hover:shadow-lg transition">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose GuavaTech?</h2>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="bg-linear-to-r from-[#F39221] to-[#91D050] bg-clip-text text-transparent text-xl mt-1">✓</div>
                                    <div>
                                        <div className="font-semibold text-gray-900">Expert Engineering</div>
                                        <div className="text-gray-600">Deep technical expertise across modern technologies</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="bg-linear-to-r from-[#F39221] to-[#91D050] bg-clip-text text-transparent text-xl mt-1">✓</div>
                                    <div>
                                        <div className="font-semibold text-gray-900">Scalable Solutions</div>
                                        <div className="text-gray-600">Built to grow with your business needs</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="bg-linear-to-r from-[#F39221] to-[#91D050] bg-clip-text text-transparent text-xl mt-1">✓</div>
                                    <div>
                                        <div className="font-semibold text-gray-900">Strategic Partnership</div>
                                        <div className="text-gray-600">Long-term collaboration for success</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="bg-linear-to-r from-[#F39221] to-[#91D050] bg-clip-text text-transparent text-xl mt-1">✓</div>
                                    <div>
                                        <div className="font-semibold text-gray-900">African Expertise</div>
                                        <div className="text-gray-600">Understanding local challenges and opportunities</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-center pt-8">
                            <Link href="/contact">
                                <button className="px-8 py-3 rounded-full bg-linear-to-r from-[#F39221] to-[#91D050] text-white font-semibold shadow-md hover:shadow-lg transition">
                                    Get Started with GuavaTech →
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
