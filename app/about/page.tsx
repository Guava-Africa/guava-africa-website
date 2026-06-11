"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function About() {
    // Team data
    const gm = {
        name: "Paul Charamba",
        title: "General Manager",
        qualifications: "MBA (University of Cape Town), BSc Computer Engineering (University of Zimbabwe), Executive Leadership Program (Harvard Business School)",
        experience: "15+ years of experience in telecommunications and fintech across Africa. Previously held senior positions at Econet and Liquid Telecom.",
        image: "/team/gm.png",
    };

    const divisionHeads = [
        {
            name: "Admire Chiwamba",
            division: "Pay",
            title: "Head of GuavaPay",
            qualifications: "MSc Fintech (University of Johannesburg), BCom Information Systems (University of Zimbabwe)",
            experience: "Former Head of Digital Payments at Nedbank, 10+ years in financial technology.",
            image: "/team/pay-head.png",
            color: "#F39221",
            bgLight: "bg-orange-50",
        },
        {
            name: "Mark Mateus",
            division: "Tel",
            title: "Head of GuavaTel",
            qualifications: "MSc Telecommunications Engineering (University of the Witwatersrand), BEng Electrical Engineering (University of Zimbabwe)",
            experience: "Former Network Director at TelOne, 12+ years in telecommunications infrastructure.",
            image: "/team/tel-head.png",
            color: "#91D050",
            bgLight: "bg-green-50",
        },
        {
            name: "Tafadzwa Gashira",
            division: "Tech",
            title: "Head of GuavaTech",
            qualifications: "MSc Software Engineering (Oxford University), BSc Computer Science (University of Cape Town)",
            experience: "Former CTO at Innovate Africa, 8+ years in software development and digital transformation.",
            image: "/team/tech-head.png",
            color: "#F39221",
            bgLight: "bg-orange-50",
        },
    ];

    const chairman = {
        name: "Eng. Tafadzwa Muguti",
        title: "Group Chairman",
        message: "Over the past decade, Guava has grown from a small infrastructure contractor into a pan-African technology leader. This journey has been driven by our unwavering commitment to innovation, integrity, and the African renaissance. We believe that Africa's time is now, and Guava is proud to be at the forefront of this digital revolution. Our divisions Pay, Tel, and Tech represent our strategic focus on the three pillars of modern economies: financial inclusion, reliable connectivity, and digital transformation. As we look to the future, we remain dedicated to bridging the technology gap across our continent and creating sustainable value for all our stakeholders. Thank you for being part of this incredible journey.",
        image: "https://pbs.twimg.com/profile_images/1310798303630626816/NI4WFGq4_400x400.jpg",
    };

    return (
        <div className="relative min-h-screen bg-linear-to-br from-amber-50 via-white to-green-50 overflow-x-hidden">

            <Navbar />

            {/* Animated Tech Artwork - Corners only with subtle movement */}
            {/* Top Left - Coding icons */}
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

            {/* Top Right - Network/Globe */}
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

            {/* Bottom Left - Database/Server */}
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

            {/* Bottom Right - WiFi/Signal */}
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

            {/* Middle Left - Code brackets */}
            <motion.div 
                animate={{ x: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="fixed top-1/2 left-6 opacity-20 pointer-events-none z-0"
            >
                <text x="0" y="0" fontSize="28" fill="#F39221" fontFamily="monospace">{'{  }'}</text>
            </motion.div>

            {/* Middle Right - Terminal prompt */}
            <motion.div 
                animate={{ opacity: [0.1, 0.4, 0.1] }}
                transition={{ duration: 7, repeat: Infinity }}
                className="fixed top-1/3 right-6 opacity-20 pointer-events-none z-0"
            >
                <text x="0" y="0" fontSize="24" fill="#91D050" fontFamily="monospace">{'$>'}</text>
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

            {/* Main Content Container - Consistent padding and spacing */}
            <section id="team" className="relative z-10 py-12 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-12"
                    >
                        {/* Chairman's Message Section */}
                        <div  className="p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200 shadow-md hover:shadow-lg transition">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="text-3xl">📜</div>
                                <h2 className="text-2xl font-bold text-gray-900">Message from Our Chairman</h2>
                            </div>
                            <div className="flex flex-col lg:flex-row gap-8 items-start">
                                <div className="lg:w-1/3 flex flex-col items-center">
                                    <div className="w-88 h-88 rounded-xl overflow-hidden shadow-lg mb-4">
                                        <img
                                            src={chairman.image}
                                            alt={chairman.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 text-center">{chairman.name}</h3>
                                    <p className="text-[#F39221] text-sm text-center">{chairman.title}</p>
                                </div>
                                <div className="lg:w-2/3">
                                    <p className="text-gray-700 leading-relaxed italic text-lg">
                                        "{chairman.message}"
                                    </p>
                                    <div className="mt-6 pt-6 border-t border-gray-200">
                                        <p className="text-gray-600">Eng. Tafadzwa Muguti </p>
                                        <p className="text-sm text-gray-500">Group Chairman, Africapaciti</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                         {/* Our Team - Organizational Structure */}
                        <div className="p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200 shadow-md hover:shadow-lg transition">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="text-3xl">👥</div>
                                <h2 className="text-2xl font-bold text-gray-900">Our Team</h2>
                            </div>
                            
                            {/* Group Managing Director - Top */}
                            <div className="flex justify-center mb-12">
                                <div className="w-full max-w-md text-center">
                                    <div className="relative mb-6">
                                        <div className="w-40 h-40 mx-auto rounded-full overflow-hidden shadow-xl border-4 border-[#F39221]/30">
                                            <img
                                                src={gm.image}
                                                alt={gm.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-[#F39221] text-white px-4 py-1 rounded-full text-sm font-semibold whitespace-nowrap">
                                            General Manager
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mt-4">{gm.name}</h3>
                                    <p className="text-gray-600 text-sm mt-2">{gm.qualifications}</p>
                                    <p className="text-gray-500 text-sm mt-2">{gm.experience}</p>
                                </div>
                            </div>

                            {/* Connecting line from GM to divisions */}
                            <div className="relative flex justify-center mb-8">
                                <div className="w-px h-12 bg-gradient-to-b from-[#F39221] to-[#91D050]"></div>
                            </div>

                            {/* Division Heads - 3 columns */}
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 text-center mb-8">Division Heads</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {divisionHeads.map((head, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: idx * 0.1 }}
                                            className={`text-center p-6 rounded-xl ${head.bgLight} border border-gray-200 shadow-md hover:shadow-lg transition`}
                                        >
                                            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg mb-4 border-4 border-white">
                                                <img
                                                    src={head.image}
                                                    alt={head.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3`}
                                                style={{ backgroundColor: `${head.color}20`, color: head.color }}>
                                                {head.division}
                                            </div>
                                            <h3 className="text-lg font-bold text-gray-900">{head.name}</h3>
                                            <p className="text-[#F39221] text-sm font-medium mb-2">{head.title}</p>
                                            <p className="text-gray-600 text-xs mt-2">{head.qualifications}</p>
                                            <p className="text-gray-500 text-xs mt-2">{head.experience}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>

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

                        {/* Our Story */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 rounded-2xl bg-green-50 backdrop-blur-sm border border-gray-200 shadow-md hover:shadow-lg transition">
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
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 rounded-2xl bg-orange-50 backdrop-blur-sm border border-gray-200 shadow-md hover:shadow-lg transition">
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