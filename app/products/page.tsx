"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Products() {
    const products = [
        {
            name: "HRX",
            title: "Human Resources Exchange",
            desc: "Complete HR management system with job posting, candidate tracking, employer portal, and centralized candidate management. Streamline your entire recruitment and HR operations.",
            division: "Tech",
            status: "Live",
            image: "/screenshots/hrx-home.webp",
            icon: "/logos/hrx-official.png",
            features: ["Job postings", "Candidate tracking", "Employer portal"],
            color: "#91D050",
            link: "https://hrxchange.global/",
            external: true
        },
        // {
        //     name: "Abide",
        //     desc: "All-in-one payment app for churches. Manage tithes, offerings, donations, event registrations, and all church-related payments seamlessly through a single platform.",
        //     division: "Pay",
        //     status: "In Development",
        //     // image: "/screenshots/abide.png",
        //     icon: "/logos/abide.png",
        //     features: ["Tithes & offerings", "Event payments", "Donation tracking"],
        //     color: "#F39221",
        //     link: null,
        //     external: false
        // },
        {
            name: "Tag-It",
            title: "Device Tracking and Protection",
            desc: "Register and track devices, verify ownership, and report equipment that goes missing. Businesses can manage fleets and receive alerts when protected devices leave approved areas.",
            division: "Tech",
            status: "Live",
            image: "/screenshots/tag-it-home.webp",
            icon: "/logos/tag-it.png",
            features: ["Device registry", "Geofence alerts", "Fleet management"],
            color: "#91D050",
            link: "https://tag-it.global/",
            external: true
        },
        {
            name: "ACX",
            title: "Africa Credit Exchange",
            desc: "A dual-purpose platform combining loan application processing with a comprehensive credit rating system. Streamlines international credit assessment and borrowing.",
            division: "Pay",
            status: "In Development",
            image: "/screenshots/acx.png",
            icon: "/logos/ACX logoText.png",
            features: ["Loan applications", "Credit rating system", "International credit exchange"],
            color: "#F39221",
            link: null,
            external: false
        },
        {
            name: "Gizmo HelpDesk",
            desc: "Customer support portal for clients seeking technical assistance with our applications or other technical issues. Provides streamlined ticket management and support resolution.",
            division: "Tech",
            status: "In Development",
            // image: "/screenshots/guavasupport.png",
            icon: "/logos/guava-tech.png",
            features: ["Ticket management", "Client support", "Technical assistance"],
            color: "#91D050",
            link: null,
            external: false
        }
    ];

    // Helper function to get status color
    const getStatusColor = (status: string) => {
        switch (status) {
            case "Live":
                return "bg-green-100 text-green-700";
            case "In Development":
                return "bg-blue-100 text-blue-700";
            case "Beta":
                return "bg-orange-100 text-orange-700";
            case "Coming Soon":
                return "bg-red-100 text-red-700";
            default:
                return "bg-gray-100 text-gray-700";
        }
    };

    return (
        <div className="site-shell relative min-h-screen overflow-x-hidden">
            <Navbar />

            {/* Hero */}
            <section className="relative z-10 pt-32 pb-12 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                            Our <span className="text-[#F39221]">Products</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Building the infrastructure of tomorrow, one product at a time.
                            Each product is built for scale, security, and user experience.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="relative z-10 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product, i) => (
                            <motion.div
                                key={product.name}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                                whileHover={{ y: -8 }}
                                className="tech-panel overflow-hidden bg-white transition-shadow hover:shadow-xl flex flex-col"
                            >
                                {/* Product Image Area - Fixed 16:9 Aspect Ratio */}
                                <div className="product-preview relative w-full aspect-video overflow-hidden">
                                    {product.image ? (
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={product.image}
                                                alt={`${product.name} website screenshot`}
                                                fill
                                                className="object-contain"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                priority={i < 3}
                                            />
                                        </div>
                                    ) : (
                                        <div className="flex h-full items-center justify-center">
                                            <Image src={product.icon} alt="" width={64} height={64} className="rounded-lg border border-white/80 bg-white p-2" />
                                        </div>
                                    )}
                                </div>

                                {/* Product Info - Flexible height, pushes button to bottom */}
                                <div className="flex grow flex-col p-5">
                                    <div className="flex items-center gap-3">
                                        <img src={product.icon} alt="" className="h-9 w-12 shrink-0 object-contain" />
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                                            {product.title && (
                                                <p className="mt-1 text-sm font-medium leading-snug text-gray-600">{product.title}</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="mb-4 mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
                                        <span className="text-sm font-semibold text-gray-600">Guava{product.division}</span>
                                        <span className={`rounded-full px-2.5 py-1 text-sm font-semibold ${getStatusColor(product.status)}`}>{product.status}</span>
                                    </div>
                                    <p className="mb-4 text-base leading-relaxed text-gray-700">
                                        {product.desc}
                                    </p>
                                    <ul className="mb-5 flex flex-wrap gap-x-4 gap-y-2">
                                        {product.features.map((feature) => (
                                            <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                                                <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-[#67993e]" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Link Button - only show if product has a link */}
                                    {product.link ? (
                                        <a
                                            href={product.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full py-2 rounded-lg bg-gradient-to-r from-[#F39221] to-[#91D050] text-white text-sm font-semibold hover:shadow-lg transition mt-auto flex items-center justify-center gap-2"
                                        >
                                            Visit Website
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                />
                                            </svg>
                                        </a>
                                    ) : (
                                        <button
                                            disabled
                                            className="w-full py-2 rounded-lg border border-gray-300 bg-gray-100 text-gray-400 text-sm font-semibold cursor-not-allowed mt-auto"
                                        >
                                            Coming Soon
                                        </button>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
