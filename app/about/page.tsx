"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function About() {
    return (
        <div className="relative min-h-screen bg-linear-to-br from-amber-50 via-white to-green-50 overflow-x-hidden">

            <Navbar />

            {/* Vector Art sections (keeping your existing SVG code) */}
            <div className="fixed bottom-0 left-0 opacity-40 pointer-events-none z-0">
                <svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M30 470 L60 400 L45 350 L80 290 L60 240 L100 180 L80 130 L120 80"
                        stroke="#F39221" strokeWidth="3" fill="none" strokeLinecap="round"
                    />
                    <path
                        d="M60 400 L100 380 L85 340 L110 310"
                        stroke="#91D050" strokeWidth="2.5" fill="none" strokeLinecap="round"
                    />
                    <path
                        d="M80 290 L40 280 L55 260 L30 240"
                        stroke="#F39221" strokeWidth="2.5" fill="none" strokeLinecap="round"
                    />
                    <path
                        d="M100 180 L140 170 L125 150 L150 130"
                        stroke="#91D050" strokeWidth="2.5" fill="none" strokeLinecap="round"
                    />
                    <path
                        d="M120 80 L160 70 L145 50"
                        stroke="#F39221" strokeWidth="2" fill="none" strokeLinecap="round"
                    />
                    <path
                        d="M45 350 L15 340 L25 320"
                        stroke="#91D050" strokeWidth="2" fill="none" strokeLinecap="round"
                    />
                    <path
                        d="M60 240 L35 230 L45 210"
                        stroke="#F39221" strokeWidth="2" fill="none" strokeLinecap="round"
                    />
                    <path
                        d="M80 130 L55 120 L65 100"
                        stroke="#91D050" strokeWidth="2" fill="none" strokeLinecap="round"
                    />
                    <circle cx="135" cy="75" r="18" stroke="#F39221" strokeWidth="2.5" fill="none" />
                    <circle cx="135" cy="75" r="8" fill="#91D050" opacity="0.5" />
                    <rect x="20" y="350" width="22" height="22" stroke="#91D050" strokeWidth="2.5" fill="none" />
                    <rect x="28" y="358" width="6" height="6" fill="#F39221" opacity="0.5" />
                    <circle cx="165" cy="125" r="12" stroke="#F39221" strokeWidth="2" fill="none" />
                    <circle cx="165" cy="125" r="5" fill="#91D050" opacity="0.4" />
                    <rect x="130" y="280" width="18" height="18" stroke="#91D050" strokeWidth="2" fill="none" />
                    <circle cx="50" cy="230" r="8" stroke="#F39221" strokeWidth="2" fill="none" />
                    <circle cx="30" cy="460" r="4" fill="#F39221" />
                    <circle cx="50" cy="450" r="3" fill="#91D050" />
                    <circle cx="70" cy="465" r="2.5" fill="#F39221" />
                    <circle cx="90" cy="445" r="3.5" fill="#91D050" />
                    <circle cx="110" cy="460" r="2" fill="#F39221" />
                    <circle cx="40" cy="300" r="3" fill="#F39221" />
                    <circle cx="70" cy="270" r="2.5" fill="#91D050" />
                    <circle cx="55" cy="200" r="3" fill="#F39221" />
                    <circle cx="90" cy="160" r="2" fill="#91D050" />
                    <circle cx="70" cy="100" r="2.5" fill="#F39221" />
                    <circle cx="110" cy="140" r="2" fill="#91D050" />
                    <circle cx="140" cy="200" r="3" fill="#F39221" />
                    <circle cx="45" cy="380" r="2" fill="#91D050" />
                    <line x1="135" y1="75" x2="160" y2="70" stroke="#F39221" strokeWidth="1.5" strokeDasharray="5,5" />
                    <line x1="165" y1="125" x2="140" y2="130" stroke="#91D050" strokeWidth="1.5" strokeDasharray="4,6" />
                    <line x1="80" y1="290" x2="50" y2="280" stroke="#F39221" strokeWidth="1.5" strokeDasharray="3,7" />
                    <line x1="120" y1="80" x2="100" y2="60" stroke="#91D050" strokeWidth="1.5" strokeDasharray="4,4" />
                    <path
                        d="M160 310 L180 295 L175 280"
                        stroke="#F39221" strokeWidth="2" fill="none" strokeLinecap="round"
                    />
                    <circle cx="180" cy="300" r="4" stroke="#91D050" strokeWidth="1.5" fill="none" />
                    <path
                        d="M15 420 L35 410 L30 395"
                        stroke="#91D050" strokeWidth="2" fill="none" strokeLinecap="round"
                    />
                    <circle cx="35" cy="405" r="3" fill="#F39221" />
                </svg>
            </div>

            <div className="fixed bottom-8 right-6 opacity-30 pointer-events-none z-0">
                <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
                    <path
                        d="M150 170 L165 145 L155 120 L170 95"
                        stroke="#91D050" strokeWidth="2.5" fill="none" strokeLinecap="round"
                    />
                    <path
                        d="M165 145 L185 140 L180 125"
                        stroke="#F39221" strokeWidth="2" fill="none" strokeLinecap="round"
                    />
                    <circle cx="175" cy="90" r="10" stroke="#F39221" strokeWidth="2" fill="none" />
                    <circle cx="175" cy="90" r="4" fill="#91D050" opacity="0.5" />
                    <rect x="145" y="130" width="14" height="14" stroke="#91D050" strokeWidth="2" fill="none" />
                    <circle cx="155" cy="155" r="5" stroke="#F39221" strokeWidth="1.5" fill="none" />
                    <circle cx="170" cy="160" r="2" fill="#F39221" />
                    <circle cx="150" cy="110" r="2" fill="#91D050" />
                </svg>
            </div>

            <div className="fixed top-24 left-6 opacity-25 pointer-events-none z-0">
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                    <path
                        d="M20 80 L35 60 L30 40 L45 25"
                        stroke="#F39221" strokeWidth="2" fill="none" strokeLinecap="round"
                    />
                    <path
                        d="M35 60 L50 55 L45 45"
                        stroke="#91D050" strokeWidth="1.5" fill="none" strokeLinecap="round"
                    />
                    <circle cx="50" cy="22" r="6" stroke="#91D050" strokeWidth="1.5" fill="none" />
                    <circle cx="20" cy="85" r="3" fill="#F39221" />
                </svg>
            </div>

            <div className="fixed top-32 right-6 opacity-20 pointer-events-none z-0">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                    <path
                        d="M70 20 L80 35 L75 50"
                        stroke="#F39221" strokeWidth="2" fill="none" strokeLinecap="round"
                    />
                    <circle cx="82" cy="32" r="4" stroke="#91D050" strokeWidth="1.5" fill="none" />
                    <circle cx="70" cy="55" r="2" fill="#F39221" />
                </svg>
            </div>

            {/* Hero Section with Image - Black team */}
            <section className="relative z-10 pt-32 pb-12 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                                About <span className="text-[#F39221]">Guava</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-6">
                                Shaping Africa's digital future since 2015
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                From fibre infrastructure to a pan-African technology leader — Guava is building the backbone of Africa's digital economy.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="relative h-80 rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <img
                                src="team.png"
                                alt="Black tech professionals working together"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="relative z-10 py-12 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-8"
                    >
                        {/* Vision & Mission */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                        </div>

                        {/* Our Story - Black team meeting */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200 shadow-md hover:shadow-lg transition">
                            <div className="rounded-xl overflow-hidden shadow-lg">
                                <img
                                    // src="/ourstory.png"
                                    src="/img/IMG_6464.jpeg"
                                    alt="Black colleagues in a meeting"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div>
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
                        </div>

                        {/* Bridging Africa's Technology Gap - Black man presenting */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200 shadow-md hover:shadow-lg transition">
                            <div>
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
                            <div className="h-64 rounded-xl overflow-hidden shadow-lg">
                                <img
                                    src="techgap.png"
                                    alt="Black man presenting to team"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Our Values */}
                        <div className="p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200 shadow-md hover:shadow-lg transition">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Values</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                                <div className="text-center p-4 rounded-lg hover:bg-[#F39221]/5 transition">
                                    <div className="text-3xl mb-2">💡</div>
                                    <div className="font-semibold text-gray-900">Innovation</div>
                                    <div className="text-xs text-gray-500">Pushing boundaries</div>
                                </div>
                                <div className="text-center p-4 rounded-lg hover:bg-[#F39221]/5 transition">
                                    <div className="text-3xl mb-2">⚖️</div>
                                    <div className="font-semibold text-gray-900">Integrity</div>
                                    <div className="text-xs text-gray-500">Building trust</div>
                                </div>
                                <div className="text-center p-4 rounded-lg hover:bg-[#F39221]/5 transition">
                                    <div className="text-3xl mb-2">⭐</div>
                                    <div className="font-semibold text-gray-900">Excellence</div>
                                    <div className="text-xs text-gray-500">Delivering quality</div>
                                </div>
                                <div className="text-center p-4 rounded-lg hover:bg-[#F39221]/5 transition">
                                    <div className="text-3xl mb-2">⚡</div>
                                    <div className="font-semibold text-gray-900">Agility</div>
                                    <div className="text-xs text-gray-500">Adapting quickly</div>
                                </div>
                                <div className="text-center p-4 rounded-lg hover:bg-[#F39221]/5 transition">
                                    <div className="text-3xl mb-2">👥</div>
                                    <div className="font-semibold text-gray-900">Customer-Centric</div>
                                    <div className="text-xs text-gray-500">Putting clients first</div>
                                </div>
                                <div className="text-center p-4 rounded-lg hover:bg-[#F39221]/5 transition">
                                    <div className="text-3xl mb-2">🤝</div>
                                    <div className="font-semibold text-gray-900">Collaboration</div>
                                    <div className="text-xs text-gray-500">Working together</div>
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