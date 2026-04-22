"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import Logo from "@/public/logos/logo.png";
import Image from "next/image";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className={`fixed top-6 left-4 right-4 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 z-50 transition-all duration-300 rounded-full px-6 py-2 overflow-visible ${scrolled
                ? "bg-white/90 backdrop-blur-xl border border-gray-200 shadow-lg"
                : "bg-white/60 backdrop-blur-md border border-gray-100"
                }`}
        >
            {/* Desktop (unchanged) */}
            <div className="hidden sm:flex items-center gap-8">
                <Link href="/" className="flex items-center gap-2">
                    <Image src={Logo} alt="Guava Logo" className="w-20 h-8" />
                </Link>
                <div className="flex gap-6">
                    <Link href="/products" className="text-gray-600 text-sm hover:text-[#F39221] transition font-medium">
                        Products
                    </Link>
                    <Link href="/about" className="text-gray-600 text-sm hover:text-[#F39221] transition font-medium">
                        About
                    </Link>
                    <Link href="/contact" className="text-gray-600 text-sm hover:text-[#F39221] transition font-medium">
                        Contact
                    </Link>
                </div>
            </div>

            {/* Mobile: left logo + hamburger */}
            <div className="flex sm:hidden items-center justify-between w-full">
                <Link href="/" className="flex items-center gap-2">
                    <Image src={Logo} alt="Guava Logo" className="h-8 w-auto" />
                </Link>
                <button
                    className="ml-3 p-2 rounded-md text-gray-700 hover:bg-gray-100"
                    aria-label="Toggle menu"
                    onClick={() => setMobileOpen((v) => !v)}
                >
                    {mobileOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {mobileOpen && (
                <div className="sm:hidden absolute left-4 right-4 top-full mt-3 bg-white/95 backdrop-blur-md border border-gray-100 rounded-lg shadow-lg p-4 z-50">
                    <nav className="flex flex-col gap-3">
                        <Link href="/products" className="text-gray-700 text-base hover:text-[#F39221] font-medium" onClick={() => setMobileOpen(false)}>
                            Products
                        </Link>
                        <Link href="/about" className="text-gray-700 text-base hover:text-[#F39221] font-medium" onClick={() => setMobileOpen(false)}>
                            About
                        </Link>
                        <Link href="/contact" className="text-gray-700 text-base hover:text-[#F39221] font-medium" onClick={() => setMobileOpen(false)}>
                            Contact
                        </Link>
                    </nav>
                </div>
            )}
        </motion.nav>
    );
}