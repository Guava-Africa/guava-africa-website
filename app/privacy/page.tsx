"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Privacy() {
    return (
        <div className="relative min-h-screen bg-linear-to-br from-amber-50 via-white to-green-50 overflow-x-hidden">

            <Navbar />

            {/* Content */}
            <section className="relative z-10 pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
                        <p className="text-gray-500 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

                        <div className="space-y-6 text-gray-700">
                            <section className="p-6 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-200 shadow-sm">
                                <h2 className="text-xl font-semibold text-gray-900 mb-2">Introduction</h2>
                                <p>
                                    Guava Africa ("we", "us", "our") provides cloud, payments, and communications
                                    infrastructure to businesses and organisations. This Privacy Policy explains what
                                    information we collect from clients and visitors, how we use it, and the choices you have.
                                </p>
                            </section>

                            <section className="p-6 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-200 shadow-sm">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Information We Collect</h3>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li><strong>Account & Profile Data:</strong> name, company, email, role, billing details.</li>
                                    <li><strong>Payment & Billing:</strong> card or payment instrument details provided to our
                                        payment processors to complete transactions (we do not store full card numbers).</li>
                                    <li><strong>Usage & Technical Data:</strong> API usage, logs, IP addresses, device and
                                        browser information, error reports and performance metrics.</li>
                                    <li><strong>Communications:</strong> support requests, emails, and other messages you send us.</li>
                                </ul>
                            </section>

                            <section className="p-6 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-200 shadow-sm">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">How We Use Your Information</h3>
                                <p>We use collected information to:</p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Deliver and improve our services and APIs.</li>
                                    <li>Process payments and manage billing.</li>
                                    <li>Provide customer support and respond to enquiries.</li>
                                    <li>Detect and prevent fraud, abuse, and security incidents.</li>
                                    <li>Comply with legal obligations and enforce our terms.</li>
                                </ul>
                            </section>

                            <section className="p-6 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-200 shadow-sm">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Sharing & Third Parties</h3>
                                <p>
                                    We may share data with service providers who help deliver our products (payment
                                    processors, hosting/CDN, analytics providers, legal and compliance partners). We require
                                    such providers to follow appropriate security and confidentiality standards.
                                </p>
                            </section>

                            <section className="p-6 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-200 shadow-sm">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">International Transfers</h3>
                                <p>
                                    As a global company we may transfer and store information in countries outside your
                                    jurisdiction. When we do so we take steps to ensure appropriate safeguards are in place.
                                </p>
                            </section>

                            <section className="p-6 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-200 shadow-sm">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Retention</h3>
                                <p>
                                    We retain personal information as long as necessary to provide services, comply with
                                    legal obligations, resolve disputes, and enforce our agreements. If you request deletion
                                    we will remove data subject to legal and contractual restrictions.
                                </p>
                            </section>

                            <section className="p-6 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-200 shadow-sm">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Cookies & Tracking</h3>
                                <p>
                                    We and our partners use cookies and similar technologies for essential site functions,
                                    analytics, and to personalise your experience. You can manage cookie preferences in your
                                    browser settings; blocking cookies may affect functionality.
                                </p>
                            </section>

                            <section className="p-6 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-200 shadow-sm">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Security</h3>
                                <p>
                                    We implement administrative, technical and physical safeguards designed to protect
                                    personal information. However, no system is completely secure — if you suspect a breach,
                                    contact us immediately at info@guava.africa.
                                </p>
                            </section>

                            <section className="p-6 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-200 shadow-sm">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Your Rights</h3>
                                <p>
                                    Depending on your jurisdiction you may have rights to access, correct, port, restrict,
                                    or delete your personal data. To exercise these rights contact info@guava.africa and
                                    we will respond within applicable legal timeframes.
                                </p>
                            </section>

                            <section className="p-6 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-200 shadow-sm">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Children</h3>
                                <p>
                                    Our services are not directed to children under 16. We do not knowingly collect personal
                                    information from children; if we become aware we will take steps to delete such data.
                                </p>
                            </section>

                            <section className="p-6 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-200 shadow-sm">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Changes to this Policy</h3>
                                <p>
                                    We may update this policy; material changes will be posted on this page with a revised
                                    effective date.
                                </p>
                            </section>

                            <section className="p-6 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-200 shadow-sm">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact</h3>
                                <p>
                                    For privacy questions or to exercise your rights, email: <a className="text-[#F39221]" href="mailto:info@guava.africa">info@guava.africa</a>
                                </p>
                            </section>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}