"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Board() {
    const boardMembers = [
        {
            name: "Mr Benson Samudzimu",
            title: "Chairman of the Board",
            // bio: "Benson Samudzimu is a seasoned business leader with over 25 years of experience in infrastructure development, telecommunications, and strategic investments across Africa. He is the founder and Chairman of the Africapaciti Group, a diversified investment holding company with interests in technology, infrastructure, and energy. His visionary leadership has been instrumental in positioning Guava as a pan-African technology leader.",
            image: "/img/benson.jpg",
            linkedin: "https://www.linkedin.com/",
        },
        // {
        //     name: "Mr Tawanda Moyo",
        //     title: "Non-Executive Director",
        //     bio: "Tawanda Moyo is a corporate finance specialist with extensive experience in mergers and acquisitions, capital raising, and strategic advisory across African markets. He previously served as Head of Corporate Finance at Stanbic Bank Zimbabwe and has advised numerous companies on growth and expansion strategies.",
        //     image: "/board/tawanda.jpg",
        //     linkedin: "https://www.linkedin.com/",
        // },
        // {
        //     name: "Ms Tendai Mupasi",
        //     title: "Independent Director",
        //     bio: "Tendai Mupasi is a legal expert specializing in corporate governance, compliance, and regulatory affairs. She is a partner at one of Africa's leading law firms and serves on several boards across the continent. Her expertise in governance frameworks has been invaluable to Guava's growth and compliance journey.",
        //     image: "/board/tendai.jpg",
        //     linkedin: "https://www.linkedin.com/",
        // },
        // {
        //     name: "Mr Farai Machingura",
        //     title: "Non-Executive Director",
        //     bio: "Farai Machingura is a technology entrepreneur with deep expertise in digital transformation, software development, and IT strategy. He is the founder of a successful fintech startup and brings a wealth of practical technology experience to the board.",
        //     image: "/board/farai.jpg",
        //     linkedin: "https://www.linkedin.com/",
        // },
        // {
        //     name: "Ms Nyarai Gumbo",
        //     title: "Independent Director",
        //     bio: "Nyarai Gumbo is a seasoned finance professional with over 20 years of experience in banking, investment management, and financial strategy. She is currently a senior executive at a leading pan-African bank and has a strong track record of driving financial performance and governance.",
        //     image: "/board/nyarai.jpg",
        //     linkedin: "https://www.linkedin.com/",
        // },
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
                            Our <span className="text-[#F39221]">Board</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Meet the distinguished leaders guiding Guava's strategic vision and growth.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Board Grid */}
            <section className="relative z-10 py-12 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {boardMembers.map((member, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="group bg-white/60 backdrop-blur-sm tech-panel border border-gray-200 shadow-md hover:shadow-xl transition-all overflow-hidden hover:scale-[1.02]"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <h3 className="text-xl font-bold text-white">{member.name}</h3>
                                        <p className="text-[#F39221] text-sm font-medium">{member.title}</p>
                                    </div>
                                    {member.linkedin && (
                                        <a
                                            href={member.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-white transition opacity-0 group-hover:opacity-100"
                                        >
                                            <svg className="w-5 h-5 text-[#0077B5]" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.204 0 22.225 0z" />
                                            </svg>
                                        </a>
                                    )}
                                </div>
                                {/* <div className="p-6">
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {member.bio}
                                    </p>
                                </div> */}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Board Committee Info */}
            {/* <section className="relative z-10 py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        <div className="p-6 tech-panel bg-white/60 backdrop-blur-sm border border-gray-200 shadow-md hover:shadow-lg transition text-center">
                            <div className="text-4xl mb-3">📊</div>
                            <h3 className="font-bold text-gray-900">Audit Committee</h3>
                            <p className="text-gray-600 text-sm mt-2">Overseeing financial reporting, internal controls, and audit processes.</p>
                        </div>
                        <div className="p-6 tech-panel bg-white/60 backdrop-blur-sm border border-gray-200 shadow-md hover:shadow-lg transition text-center">
                            <div className="text-4xl mb-3">⚠️</div>
                            <h3 className="font-bold text-gray-900">Risk Committee</h3>
                            <p className="text-gray-600 text-sm mt-2">Identifying and managing enterprise risks and business continuity.</p>
                        </div>
                        <div className="p-6 tech-panel bg-white/60 backdrop-blur-sm border border-gray-200 shadow-md hover:shadow-lg transition text-center">
                            <div className="text-4xl mb-3">💰</div>
                            <h3 className="font-bold text-gray-900">Remuneration Committee</h3>
                            <p className="text-gray-600 text-sm mt-2">Ensuring fair and competitive compensation practices.</p>
                        </div>
                    </motion.div>
                </div>
            </section> */}

            <Footer />
        </div>
    );
}