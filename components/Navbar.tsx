"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import Logo from "@/public/logos/logoNoText.png";
import Image from "next/image";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
    const [divisionsDropdownOpen, setDivisionsDropdownOpen] = useState(false);
    const [homeHovered, setHomeHovered] = useState(false);
    const [animateBorder, setAnimateBorder] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Trigger border animation periodically
    useEffect(() => {
        const interval = setInterval(() => {
            setAnimateBorder(true);
            setTimeout(() => setAnimateBorder(false), 1500);
        }, 8000);
        return () => clearInterval(interval);
    }, []);

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (!target.closest(".about-dropdown")) {
                setAboutDropdownOpen(false);
            }
            if (!target.closest(".divisions-dropdown")) {
                setDivisionsDropdownOpen(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    const navItems = [
        { name: "Home", href: "/" },
        { name: "Divisions", href: "#", hasDropdown: true, dropdownType: "divisions" },
        { name: "Products", href: "/products" },
        { name: "Services", href: "/services" },
        { name: "About", href: "/about", hasDropdown: true, dropdownType: "about" },
        { name: "Contact", href: "/contact" },
    ];

    const aboutDropdownItems = [
        { name: "Our Team", href: "/about#team" },
        { name: "Corporate Governance", href: "/governance" },
    ];

    const divisionsDropdownItems = [
        { name: "Pay", href: "/pay", desc: "Financial Inclusion" },
        { name: "Tel", href: "/tel", desc: "Connectivity Solutions" },
        { name: "Tech", href: "/tech", desc: "Digital Transformation" },
    ];

    return (
        <>
            {/* Navbar container with animated border */}
            <div className="fixed top-6 left-4 right-4 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 z-50">
                {/* Animated border effect - gradient shooting star */}
                <div className={`absolute -inset-[2px] rounded-full overflow-hidden ${animateBorder ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 pointer-events-none`}>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-[#F39221] to-[#91D050] animate-shooting-star" />
                </div>
                
                {/* Static border gradient (subtle) */}
                <div className="absolute -inset-[1px] rounded-full bg-gradient-to-r from-[#F39221]/20 via-[#91D050]/20 to-[#F39221]/20 opacity-50 pointer-events-none" />
                
                <motion.nav
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className={`relative transition-all duration-300 rounded-full px-6 py-2 overflow-visible ${scrolled
                        ? "bg-white/90 backdrop-blur-xl border border-gray-200"
                        : "bg-white/60 backdrop-blur-md border border-gray-100"
                        }`}
                >
                    {/* Desktop */}
                    <div className="hidden sm:flex items-center justify-between gap-8">
                        <div className="flex gap-6">
                            {navItems.map((item) => (
                                <div
                                    key={item.name}
                                    className={`relative ${item.dropdownType === "about" ? "about-dropdown" : item.dropdownType === "divisions" ? "divisions-dropdown" : ""}`}
                                    onMouseEnter={() => {
                                        if (item.dropdownType === "about") setAboutDropdownOpen(true);
                                        if (item.dropdownType === "divisions") setDivisionsDropdownOpen(true);
                                        if (item.name === "Home") setHomeHovered(true);
                                    }}
                                    onMouseLeave={() => {
                                        if (item.dropdownType === "about") setAboutDropdownOpen(false);
                                        if (item.dropdownType === "divisions") setDivisionsDropdownOpen(false);
                                        if (item.name === "Home") setHomeHovered(false);
                                    }}
                                >
                                    {/* Home item - text replaced by logo on hover */}
                                    {item.name === "Home" ? (
                                        <Link
                                            href={item.href}
                                            className="block"
                                        >
                                            <div className="relative min-w-[60px] text-center">
                                                <AnimatePresence mode="wait">
                                                    {homeHovered ? (
                                                        <motion.div
                                                            key="logo"
                                                            initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                                                            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                                                            exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                                                            transition={{ duration: 0.1 }}
                                                            className="flex items-center justify-center"
                                                        >
                                                            <Image 
                                                                src={Logo} 
                                                                alt="Guava Logo" 
                                                                className="h-6 w-auto transition-transform duration-300 hover:scale-110" 
                                                            />
                                                        </motion.div>
                                                    ) : (
                                                        <motion.span
                                                            key="text"
                                                            initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                                                            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                                                            exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                                                            transition={{ duration: 0.3 }}
                                                            className="text-gray-600 text-sm hover:text-[#F39221] transition font-medium inline-block"
                                                        >
                                                            {item.name}
                                                        </motion.span>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        </Link>
                                    ) : (
                                        <>
                                            <Link
                                                href={item.href}
                                                className="text-gray-600 text-sm hover:text-[#F39221] transition font-medium"
                                            >
                                                {item.name}
                                            </Link>
                                            
                                            {/* About Dropdown */}
                                            {item.dropdownType === "about" && (
                                                <AnimatePresence>
                                                    {aboutDropdownOpen && (
                                                        <motion.div
                                                            initial={{ opacity: 0, y: -10 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            exit={{ opacity: 0, y: -10 }}
                                                            transition={{ duration: 0.2 }}
                                                            className="absolute left-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden z-50"
                                                        >
                                                            {aboutDropdownItems.map((dropdownItem) => (
                                                                <Link
                                                                    key={dropdownItem.name}
                                                                    href={dropdownItem.href}
                                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#F39221]/10 hover:text-[#F39221] transition"
                                                                >
                                                                    {dropdownItem.name}
                                                                </Link>
                                                            ))}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            )}

                                            {/* Divisions Dropdown */}
                                            {item.dropdownType === "divisions" && (
                                                <AnimatePresence>
                                                    {divisionsDropdownOpen && (
                                                        <motion.div
                                                            initial={{ opacity: 0, y: -10 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            exit={{ opacity: 0, y: -10 }}
                                                            transition={{ duration: 0.2 }}
                                                            className="absolute left-0 top-full mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden z-50"
                                                        >
                                                            {divisionsDropdownItems.map((dropdownItem) => (
                                                                <Link
                                                                    key={dropdownItem.name}
                                                                    href={dropdownItem.href}
                                                                    className="block px-4 py-3 text-sm hover:bg-[#F39221]/10 transition group"
                                                                >
                                                                    <div className="font-semibold text-gray-900 group-hover:text-[#F39221]">{dropdownItem.name}</div>
                                                                    <div className="text-xs text-gray-500">{dropdownItem.desc}</div>
                                                                </Link>
                                                            ))}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            )}
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile: left logo + hamburger */}
                    <div className="flex sm:hidden items-center justify-between w-full">
                        <Link href="/" className="flex items-center gap-2 group">
                            <Image 
                                src={Logo} 
                                alt="Guava Logo" 
                                className="h-8 w-auto transition-transform duration-300 group-hover:scale-110" 
                            />
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

                    {/* Mobile Menu */}
                    <AnimatePresence>
                        {mobileOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.2 }}
                                className="sm:hidden absolute left-4 right-4 top-full mt-3 bg-white/95 backdrop-blur-md border border-gray-100 rounded-lg shadow-lg p-4 z-50"
                            >
                                <nav className="flex flex-col gap-3">
                                    {navItems.map((item) => (
                                        <div key={item.name}>
                                            {item.hasDropdown ? (
                                                <div>
                                                    <div className="text-gray-700 text-base font-medium py-1">
                                                        {item.name}
                                                    </div>
                                                    <div className="ml-4 mt-1 flex flex-col gap-2">
                                                        {item.dropdownType === "about" && aboutDropdownItems.map((dropdownItem) => (
                                                            <Link
                                                                key={dropdownItem.name}
                                                                href={dropdownItem.href}
                                                                className="text-gray-500 text-sm hover:text-[#F39221] transition"
                                                                onClick={() => setMobileOpen(false)}
                                                            >
                                                                {dropdownItem.name}
                                                            </Link>
                                                        ))}
                                                        {item.dropdownType === "divisions" && divisionsDropdownItems.map((dropdownItem) => (
                                                            <Link
                                                                key={dropdownItem.name}
                                                                href={dropdownItem.href}
                                                                className="text-gray-500 text-sm hover:text-[#F39221] transition"
                                                                onClick={() => setMobileOpen(false)}
                                                            >
                                                                <span className="font-medium">{dropdownItem.name}</span> - {dropdownItem.desc}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            ) : (
                                                <Link
                                                    href={item.href}
                                                    className="text-gray-700 text-base hover:text-[#F39221] font-medium block py-1"
                                                    onClick={() => setMobileOpen(false)}
                                                >
                                                    {item.name}
                                                </Link>
                                            )}
                                        </div>
                                    ))}
                                </nav>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.nav>
            </div>

            {/* Add keyframes for shooting star animation */}
            <style jsx>{`
                @keyframes shootingStar {
                    0% {
                        transform: translateX(-100%) translateY(0);
                        opacity: 0;
                    }
                    10% {
                        opacity: 1;
                    }
                    90% {
                        opacity: 1;
                    }
                    100% {
                        transform: translateX(100%) translateY(0);
                        opacity: 0;
                    }
                }
                .animate-shooting-star {
                    animation: shootingStar 1.5s ease-in-out forwards;
                    width: 30%;
                    height: 100%;
                    border-radius: 9999px;
                }
            `}</style>
        </>
    );
}