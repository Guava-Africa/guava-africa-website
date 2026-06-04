"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Services() {
    const services = [
        {
            name: "GuavaPay",
            title: "Payment Processing Platform",
            desc: "Seamless payment processing platform designed for businesses and individuals. Send, receive, and manage payments with ease, featuring multi-currency support, payment links, transaction analytics, and advanced security protocols.",
            division: "Pay",
            link: "/pay",
            status: "In Development",
            image: "/screenshots/guavapay.png",
            icon: "/logos/guava-pay.png",
            features: ["Multi-currency support", "Payment links", "Transaction analytics", "Advanced security", "Bulk payments", "Instant settlements"],
            color: "#F39221",
            bgLight: "bg-orange-50",
            borderLight: "border-orange-200"
        },
        {
            name: "GuavaTel",
            title: "Internet Service Provider",
            desc: "Internet service provider solution powered by Liquid, delivering reliable internet connectivity to communities. Focused on bridging the digital divide and providing accessible internet to the people with enterprise-grade network infrastructure.",
            division: "Tel",
            link: "/tel",
            status: "In Development",
            image: "/screenshots/guavatel.webp",
            icon: "/logos/guava-tel.png",
            features: ["Reliable connectivity", "Community access", "Enterprise networks", "Fiber solutions", "VSAT services", "24/7 support"],
            color: "#91D050",
            bgLight: "bg-green-50",
            borderLight: "border-green-200"
        }
    ];

    return (
        <div className="relative min-h-screen bg-linear-to-br from-amber-50 via-white to-green-50 overflow-x-hidden">
            <Navbar />

            {/* Hero */}
            <section className="relative z-10 pt-32 pb-12 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                            Our <span className="text-[#F39221]">Services</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Enterprise-grade solutions powering Africa's digital economy.
                            Reliable, scalable, and built for the future.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid - 2 Columns with Large Images */}
            <section className="relative z-10 pb-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {services.map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -8 }}
                                className={`rounded-2xl ${service.bgLight} backdrop-blur-sm border ${service.borderLight} shadow-md hover:shadow-xl transition-all overflow-hidden`}
                            >
                                {/* Large Image */}
                                <div className="relative w-full h-72 overflow-hidden">
                                    <img 
                                        src={service.image} 
                                        alt={`${service.name} screenshot`}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 rounded-xl bg-white shadow-lg flex items-center justify-center p-2">
                                                <img 
                                                    src={service.icon} 
                                                    alt={`${service.name} icon`} 
                                                    className="w-8 h-8 object-contain"
                                                />
                                            </div>
                                            <div>
                                                <h2 className="text-2xl font-bold text-white">{service.name}</h2>
                                                <p className="text-white/80 text-sm">{service.title}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Content */}
                                <div className="p-6">
                                    <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                                        {service.desc}
                                    </p>
                                    
                                    <div className="mb-6">
                                        <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: service.color }} />
                                            Key Features
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {service.features.slice(0, 4).map((feature, idx) => (
                                                <span key={idx} className="text-xs px-2 py-1 rounded-full bg-white/80 text-gray-600">
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                                        <span className={`text-xs px-3 py-1 rounded-full bg-white/80 text-gray-500`}>
                                            {service.status}
                                        </span>
                                        <Link href={service.link}>
                                            <button 
                                                className="px-6 py-2 rounded-full font-semibold text-sm transition shadow-md hover:shadow-lg flex items-center gap-2"
                                                style={{ backgroundColor: service.color, color: 'white' }}
                                            >
                                                Learn more about {service.division} →
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative z-10 py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-gradient-to-r from-[#F39221]/10 to-[#91D050]/10 rounded-3xl p-8 md:p-12 text-center border border-[#F39221]/20 shadow-xl"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Ready to Get Started?
                        </h2>
                        <p className="text-gray-600 text-base md:text-lg mb-8 max-w-2xl mx-auto">
                            Contact our team to learn how Guava's services can help your business grow.
                        </p>
                        <Link href="/contact">
                            <button className="px-6 md:px-8 py-3 rounded-full bg-gradient-to-r from-[#F39221] to-[#91D050] text-white font-semibold shadow-md hover:shadow-lg transition text-sm md:text-base cursor-pointer">
                                Contact →
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}