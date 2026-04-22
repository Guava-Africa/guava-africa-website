"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Contact() {
    const [hoveredOffice, setHoveredOffice] = useState<number | null>(null);

    const offices = [
        // { city: "Cape Town", country: "South Africa", address: "30 Waterkant St, Cape Town, 8001", phone: "+27 61 234 5678", email: "capetown@guava.africa" },
        { city: "Johannesburg", country: "South Africa", address: "2191, Sandton , Johannesburg", phone: "+27 835367696", email: "info_sa@guava.africa" },
        { city: "Harare", country: "Zimbabwe", address: "Eastgate Center 2nd Floor, Golden Bridge, Corner Robert Mugabe & Sam Nujoma Street, Harare, Zimbabwe", phone: "+263 242 257156/7", email: "info_zw@guava.africa" },
        // { city: "Bulawayo", country: "Zimbabwe", address: "89 Jason Moyo St, Bulawayo", phone: "+263 29 2345678", email: "bulawayo@guava.africa" }
    ];

    return (
        <div className="relative min-h-screen bg-linear-to-br from-amber-50 via-white to-green-50 overflow-x-hidden">

            <Navbar />

            {/* Hero */}
            <section className="relative z-10 pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                            Contact <span className="text-[#F39221]">Us</span>
                        </h1>
                        <p className="text-xl text-gray-600">
                            Let's build the future together
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-6"
                        >
                            <div className="p-6 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-200 hover:border-[#F39221]/30 transition shadow-md hover:shadow-lg">
                                <div className="text-[#F39221] font-bold mb-2 text-lg">📧 Email</div>
                                <a href="mailto:info_sa@guava.africa" className="text-gray-600 hover:text-[#F39221] transition block">info_sa@guava.africa</a>
                                <a href="mailto:info_zw@guava.africa" className="text-gray-600 hover:text-[#F39221] transition block mt-2">info_zw@guava.africa</a>
                                {/* <a href="mailto:support@guava.africa" className="text-gray-600 hover:text-[#F39221] transition block mt-2">support@guava.africa</a> */}
                            </div>

                            <div className="p-6 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-200 hover:border-[#F39221]/30 transition shadow-md hover:shadow-lg">
                                <div className="text-[#F39221] font-bold mb-2 text-lg">📞 Phone</div>
                                <a href="tel:+27835367696" className="text-gray-600 hover:text-[#F39221] transition block">+27 835367696 (South Africa)</a>
                                <a href="tel:+263242257156/7" className="text-gray-600 hover:text-[#F39221] transition block mt-2">+263 242 257156/7 (Zimbabwe)</a>
                            </div>

                            <div className="p-6 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-200 hover:border-[#F39221]/30 transition shadow-md hover:shadow-lg">
                                <div className="text-[#F39221] font-bold mb-2 text-lg">💬 Social</div>
                                <div className="flex gap-4 mt-2">
                                    {/* X (Twitter) */}
                                    <a href="https://x.com/Guava_Africa" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black transition">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                        </svg>
                                    </a>
                                    {/* Facebook */}
                                    <a href="https://www.facebook.com/guavaafricapvt" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#1877F2] transition">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                        </svg>
                                    </a>
                                    {/* Instagram */}
                                    <a href="https://www.instagram.com/guava_africa/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#D82472] transition">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Offices - South Africa & Zimbabwe */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-4"
                        >
                            <div className="p-6 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-200">
                                <div className="text-[#F39221] font-bold mb-4 text-lg">🌍 Our Offices</div>
                                {offices.map((office, i) => (
                                    <motion.div
                                        key={i}
                                        className={`mb-4 last:mb-0 p-4 rounded-lg transition-all cursor-pointer ${hoveredOffice === i ? "bg-[#F39221]/5 border border-[#F39221]/20" : "bg-white/40"
                                            }`}
                                        onMouseEnter={() => setHoveredOffice(i)}
                                        onMouseLeave={() => setHoveredOffice(null)}
                                    >
                                        <div className="font-semibold text-gray-900">{office.city}, {office.country}</div>
                                        <div className="text-gray-500 text-sm mt-1">{office.address}</div>
                                        <div className="text-gray-500 text-sm mt-1">📞 {office.phone}</div>
                                        <div className="text-gray-500 text-sm">✉️ {office.email}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}