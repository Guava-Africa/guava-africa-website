"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function About() {
    return (
        <div className="relative min-h-screen bg-linear-to-br from-amber-50 via-white to-green-50 overflow-x-hidden">

            <Navbar />

            {/* Content */}
            <section className="relative z-10 pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                            About <span className="text-[#F39221]">Guava</span>
                        </h1>
                        <p className="text-xl text-gray-600">
                            Shaping Africa's digital future since 2015
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
                                <div className="text-3xl">🔭</div>
                                <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                To be a leading pan-African provider of integrated technology and infrastructure solutions, transforming how businesses connect, operate, and transact through innovative digital platforms, reliable connectivity, and sustainable energy.
                            </p>
                        </div>

                        <div className="p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200 shadow-md hover:shadow-lg transition">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="text-3xl">🎯</div>
                                <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                To deliver an integrated technology and infrastructure ecosystem that empowers businesses through reliable connectivity, innovative digital solutions, seamless financial platforms, and sustainable energy—driving efficiency, growth, and economic transformation across Africa.
                            </p>
                        </div>

                        <div className="p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200 shadow-md hover:shadow-lg transition">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="text-3xl">🌱</div>
                                <h2 className="text-2xl font-bold text-gray-900">Our Story</h2>
                            </div>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Founded in 2015 as a fibre infrastructure contractor in South Africa, Guava has evolved into a leading ICT brand across Africa. Inspired by the ubiquitous guava tree, we provide reliable connectivity, secure payments, and robust data protection through our divisions: GuavaTel (telecommunications), GuavaPay (digital payments), and GuavaTech (digital transformation).
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                With a focus on innovation and strategic partnerships, we're empowering Africa's digital future.
                            </p>
                        </div>

                        <div className="p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200 shadow-md hover:shadow-lg transition">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="text-3xl">🌍</div>
                                <h2 className="text-2xl font-bold text-gray-900">Bridging Africa's Technology Gap</h2>
                            </div>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                In a world where technology is constantly being developed to address mostly first world challenges, our African markets continue to be left behind. A paradigm shift is therefore required to address the technology gap between African markets and the rest of the World.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                It is therefore our quest to ensure that Africa does not continue to be left behind. We have committed financial, technical and human resources to improving the livelihoods and improve the ease of doing business for our clients and the communities their service offering impacts. Partner with Africa's fastest growing ICT disruptors.
                            </p>
                        </div>

                        <div className="p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200 shadow-md hover:shadow-lg transition">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Three Divisions</h2>
                            <div className="space-y-4">
                                <div className="p-4 rounded-lg hover:bg-[#F39221]/5 transition">
                                    <h3 className="text-xl font-bold text-[#F39221] mb-2">GuavaPay</h3>
                                    <p className="text-gray-600">Digital payment solutions driving financial inclusion across Africa.</p>
                                    <Link href="/pay" className="text-sm text-[#F39221] hover:underline mt-2 inline-block">Learn more →</Link>
                                </div>
                                <div className="p-4 rounded-lg hover:bg-[#91D050]/5 transition">
                                    <h3 className="text-xl font-bold text-[#91D050] mb-2">GuavaTel</h3>
                                    <p className="text-gray-600">Advanced telecommunications and connectivity infrastructure.</p>
                                    <Link href="/tel" className="text-sm text-[#91D050] hover:underline mt-2 inline-block">Learn more →</Link>
                                </div>
                                <div className="p-4 rounded-lg hover:bg-linear-to-r hover:from-[#F39221]/5 hover:to-[#91D050]/5 transition">
                                    <h3 className="text-xl font-bold bg-linear-to-r from-[#F39221] to-[#91D050] bg-clip-text text-transparent mb-2">GuavaTech</h3>
                                    <p className="text-gray-600">Cutting-edge technology and digital transformation services.</p>
                                    <Link href="/tech" className="text-sm bg-linear-to-r from-[#F39221] to-[#91D050] bg-clip-text text-transparent hover:underline mt-2 inline-block">Learn more →</Link>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200 shadow-md hover:shadow-lg transition">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="text-center p-4 rounded-lg hover:bg-[#F39221]/5 transition">
                                    <div className="text-3xl mb-2">�</div>
                                    <div className="font-semibold text-gray-900">Innovation</div>
                                    <div className="text-sm text-gray-500">Pushing technological boundaries</div>
                                </div>
                                <div className="text-center p-4 rounded-lg hover:bg-[#F39221]/5 transition">
                                    <div className="text-3xl mb-2">⚖️</div>
                                    <div className="font-semibold text-gray-900">Integrity</div>
                                    <div className="text-sm text-gray-500">Building trust through honesty</div>
                                </div>
                                <div className="text-center p-4 rounded-lg hover:bg-[#F39221]/5 transition">
                                    <div className="text-3xl mb-2">⭐</div>
                                    <div className="font-semibold text-gray-900">Excellence</div>
                                    <div className="text-sm text-gray-500">Delivering quality in everything</div>
                                </div>
                                <div className="text-center p-4 rounded-lg hover:bg-[#F39221]/5 transition">
                                    <div className="text-3xl mb-2">⚡</div>
                                    <div className="font-semibold text-gray-900">Agility</div>
                                    <div className="text-sm text-gray-500">Adapting quickly to change</div>
                                </div>
                                <div className="text-center p-4 rounded-lg hover:bg-[#F39221]/5 transition">
                                    <div className="text-3xl mb-2">👥</div>
                                    <div className="font-semibold text-gray-900">Customer-Centricity</div>
                                    <div className="text-sm text-gray-500">Putting clients first</div>
                                </div>
                                <div className="text-center p-4 rounded-lg hover:bg-[#F39221]/5 transition">
                                    <div className="text-3xl mb-2">🤝</div>
                                    <div className="font-semibold text-gray-900">Collaboration</div>
                                    <div className="text-sm text-gray-500">Working together for success</div>
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