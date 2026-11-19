"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function About() {
    const leadership = [
        { name: "Paul Charamba", role: "Acting General Manager", initials: "PC", accent: "bg-[#f39221] text-[#241607]" },
        { name: "Tafadzwa Gashira", role: "Technical Manager", initials: "TG", accent: "bg-[#91d050] text-[#172718]" },
    ];

    const chairman = {
        name: "Mr Benson Samudzimu",
        title: "Chairman",
        message: "Over the past decade, Guava has grown from a small infrastructure contractor into a pan-African technology leader. This journey has been driven by our unwavering commitment to innovation, integrity, and the African renaissance. We believe that Africa's time is now, and Guava is proud to be at the forefront of this digital revolution. Our divisions Pay, Tel, and Tech represent our strategic focus on the three pillars of modern economies: financial inclusion, reliable connectivity, and digital transformation. As we look to the future, we remain dedicated to bridging the technology gap across our continent and creating sustainable value for all our stakeholders. Thank you for being part of this incredible journey.",
        image: "/img/benson.jpg",
    };

    return (
        <div className="site-shell relative min-h-screen overflow-x-hidden">

            <Navbar />

            {/* Animated Tech Artwork - Corners only with subtle movement */}
            <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="fixed top-10 left-6 opacity-30 pointer-events-none z-0"
            >
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                    <path d="M15 25 L25 20 L20 15" stroke="#F39221" strokeWidth="2" strokeLinecap="round" />
                    <path d="M10 40 L20 35 L15 30" stroke="#91D050" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="25" cy="18" r="4" stroke="#F39221" strokeWidth="1.5" fill="none" />
                    <rect x="8" y="50" width="12" height="12" stroke="#91D050" strokeWidth="1.5" fill="none" />
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
                    <line x1="15" y1="35" x2="55" y2="35" stroke="#91D050" strokeWidth="1.5" />
                    <line x1="35" y1="15" x2="35" y2="55" stroke="#F39221" strokeWidth="1.5" />
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
                    <ellipse cx="35" cy="35" rx="15" ry="5" stroke="#91D050" strokeWidth="1.5" fill="none" />
                    <ellipse cx="35" cy="50" rx="15" ry="5" stroke="#F39221" strokeWidth="1.5" fill="none" />
                </svg>
            </motion.div>

            <motion.div
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="fixed bottom-10 right-6 opacity-30 pointer-events-none z-0"
            >
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <path d="M15 30 Q30 15 45 30" stroke="#91D050" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                    <path d="M22 37 Q30 28 38 37" stroke="#F39221" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                    <circle cx="30" cy="45" r="3" fill="#91D050" />
                </svg>
            </motion.div>

            <motion.div
                animate={{ x: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="fixed top-1/2 left-6 opacity-20 pointer-events-none z-0"
            >
                <text x="0" y="0" fontSize="28" fill="#F39221" fontFamily="monospace">{'{  }'}</text>
            </motion.div>

            <motion.div
                animate={{ opacity: [0.1, 0.4, 0.1] }}
                transition={{ duration: 7, repeat: Infinity }}
                className="fixed top-1/3 right-6 opacity-20 pointer-events-none z-0"
            >
                <text x="0" y="0" fontSize="24" fill="#91D050" fontFamily="monospace">{'$>'}</text>
            </motion.div>

            {/* Hero Section - Our Company */}
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

            {/* Main Content Container */}
            <section className="relative z-10 py-12 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-12"
                    >
                        {/* Chairman's Message Section - Trendy & Professional */}
                        <div className="relative overflow-hidden tech-panel bg-gradient-to-br from-white via-orange-50/50 to-green-50/50 border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-500">
                            {/* Decorative accent bar */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F39221] via-[#91D050] to-[#F39221]"></div>

                            {/* Decorative circles */}
                            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#F39221]/5 blur-2xl"></div>
                            <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-[#91D050]/5 blur-2xl"></div>

                            <div className="relative p-8 md:p-10" id="chairman">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#F39221] to-[#91D050] flex items-center justify-center text-2xl shadow-lg">
                                        📜
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900">Message from Our Chairman</h2>
                                        <p className="text-sm text-gray-500">A word from our leadership</p>
                                    </div>
                                </div>

                                <div className="flex flex-col lg:flex-row gap-10 items-center">
                                    <div className="lg:w-1/3 flex flex-col items-center">
                                        <div className="relative">
                                            <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-[#F39221] to-[#91D050] opacity-20 blur-md"></div>
                                            <div className="relative w-56 h-56 rounded-xl overflow-hidden shadow-xl border-4 border-white">
                                                <img
                                                    src={chairman.image}
                                                    alt={chairman.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mt-4 text-center">{chairman.name}</h3>
                                        <p className="text-[#F39221] text-sm font-medium text-center">{chairman.title}</p>
                                        <div className="flex gap-1 mt-2">
                                            <span className="w-2 h-2 rounded-full bg-[#F39221]"></span>
                                            <span className="w-2 h-2 rounded-full bg-[#91D050]"></span>
                                            <span className="w-2 h-2 rounded-full bg-[#F39221]"></span>
                                        </div>
                                    </div>

                                    <div className="lg:w-2/3">
                                        <div className="relative">
                                            <svg className="absolute -top-2 -left-2 w-8 h-8 text-[#F39221]/20" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4.995v10.009l-4.978.001zm-9.034 0v-7.391c0-5.704 3.748-9.57 9.005-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.995v10.009l-5 .001z" />
                                            </svg>
                                            <p className="text-gray-700 leading-relaxed italic text-lg pl-6">
                                                "{chairman.message}"
                                            </p>
                                        </div>
                                        <div className="mt-6 pt-6 border-t border-gray-200 flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#F39221]/10 to-[#91D050]/10 flex items-center justify-center text-2xl">
                                                👤
                                            </div>
                                            <div>
                                                <p className="text-gray-800 font-semibold">Mr Benson Samudzimu</p>
                                                <p className="text-sm text-gray-500">Chairman, Guava Africa</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <section id="team" aria-labelledby="team-heading" className="tech-panel grid scroll-mt-24 overflow-hidden bg-[#142d24] md:grid-cols-[1.1fr_1fr]">
                            <div className="relative flex min-h-56 items-end md:min-h-80">
                                <Image src="/team.png" alt="" fill sizes="(max-width: 767px) 100vw, 55vw" className="object-cover object-center" />
                                <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-[#0b1e17] via-[#0b1e17]/35 to-transparent" />
                                <h2 id="team-heading" className="relative p-6 text-4xl font-bold tracking-tight text-white sm:p-8 md:text-5xl">Our Team</h2>
                            </div>
                            <ol className="flex flex-col justify-center divide-y divide-white/15 px-6 py-3 sm:px-8 md:py-8">
                                {leadership.map(({ name, role, initials, accent }) => (
                                    <li key={role} className="flex items-center gap-4 py-5">
                                        <span aria-hidden="true" className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-bold ${accent}`}>{initials}</span>
                                        <div>
                                            <h3 className="text-xl font-bold tracking-tight text-white">{name}</h3>
                                            <p className="mt-1 text-sm font-medium text-[#c6dece]">{role}</p>
                                        </div>
                                    </li>
                                ))}
                            </ol>
                        </section>

                        {/* Vision & Mission */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-8 tech-panel bg-white/60 backdrop-blur-sm border border-gray-200 shadow-md hover:shadow-lg transition">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="text-3xl">🔭</div>
                                    <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    To be a leading pan-African provider of integrated technology and infrastructure solutions, transforming how businesses connect, operate, and transact through innovative digital platforms, reliable connectivity, and sustainable energy.
                                </p>
                            </div>

                            <div className="p-8 tech-panel bg-white/60 backdrop-blur-sm border border-gray-200 shadow-md hover:shadow-lg transition">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="text-3xl">🎯</div>
                                    <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    To deliver an integrated technology and infrastructure ecosystem that empowers businesses through reliable connectivity, innovative digital solutions, seamless financial platforms, and sustainable energy—driving efficiency, growth, and economic transformation across Africa.
                                </p>
                            </div>
                        </div>

                        {/* Our Story */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 tech-panel bg-green-50 backdrop-blur-sm border border-gray-200 shadow-md hover:shadow-lg transition" id="company">
                            <div className="rounded-xl overflow-hidden shadow-lg">
                                <img
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

                        {/* Bridging Africa's Technology Gap */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 tech-panel bg-orange-50 backdrop-blur-sm border border-gray-200 shadow-md hover:shadow-lg transition">
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
                        <div className="p-8 tech-panel bg-white/60 backdrop-blur-sm border border-gray-200 shadow-md hover:shadow-lg transition">
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
