"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function NotFound() {
    return (
        <div className="relative min-h-screen bg-linear-to-br from-[#0a0a0a] via-[#0d0d1a] to-[#0a1a0a] overflow-x-hidden">

            {/* 404 Content */}
            <section className="relative z-10 pt-32 pb-32 px-6 flex items-center justify-center min-h-[calc(100vh-200px)]">
                <div className="max-w-2xl mx-auto text-center">
                    {/* Animated 404 Text */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8"
                    >
                        <h1 className="text-9xl md:text-[120px] font-black text-transparent bg-clip-text bg-linear-to-r from-[#F39221] via-orange-400 to-yellow-300 mb-4">
                            404
                        </h1>
                    </motion.div>

                    {/* Error Message */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mb-8"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Page Not Found
                        </h2>
                        <p className="text-xl text-gray-400 mb-8">
                            Oops! It looks like the page you're looking for has gone into the void. Don't worry, we'll help you get back on track.
                        </p>
                    </motion.div>

                    {/* Floating Elements */}
                    <motion.div
                        className="absolute top-1/2 left-10 w-32 h-32 bg-[#F39221]/10 rounded-full blur-3xl"
                        animate={{
                            y: [0, -20, 0],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                        }}
                    />
                    <motion.div
                        className="absolute bottom-1/4 right-10 w-40 h-40 bg-green-500/10 rounded-full blur-3xl"
                        animate={{
                            y: [0, 20, 0],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                        }}
                    />

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10"
                    >
                        <Link
                            href="/"
                            className="px-8 py-3 bg-linear-to-r from-[#F39221] to-orange-500 text-white font-semibold rounded-lg hover:from-orange-500 hover:to-orange-600 transition-all transform hover:scale-105"
                        >
                            Back to Home
                        </Link>
                        <Link
                            href="/products"
                            className="px-8 py-3 border-2 border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-[#F39221] hover:text-[#F39221] transition-all"
                        >
                            View Products
                        </Link>
                    </motion.div>

                    {/* Helpful Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mt-16 pt-12 border-t border-gray-700"
                    >
                        <p className="text-gray-500 text-sm mb-6">Quick Navigation</p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link href="/" className="text-gray-400 hover:text-[#F39221] transition">
                                Home
                            </Link>
                            <Link href="/products" className="text-gray-400 hover:text-[#F39221] transition">
                                Products
                            </Link>
                            <Link href="/about" className="text-gray-400 hover:text-[#F39221] transition">
                                About
                            </Link>
                            <Link href="/contact" className="text-gray-400 hover:text-[#F39221] transition">
                                Contact
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
