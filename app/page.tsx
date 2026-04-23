"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeDivision, setActiveDivision] = useState<string | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const divisions = [
    {
      name: "Pay",
      tag: "Financial Inclusion",
      shortDesc: "Scalable payment technology driving financial inclusion across Africa.",
      fullDesc: "GuavaPay develops cost-effective payment solutions that bring the unbanked into the formal financial ecosystem. We provide POS systems, custom payment platforms, and bulk payment processing that reduce cash reliance and eliminate costly intermediaries.",
      metric: "$2.4B",
      metricLabel: "Annual volume",
      icon: "💳",
      features: ["POS systems", "Bulk payments", "Financial inclusion", "Custom platforms", "Reduced cash reliance", "Cost-effective solutions"],
      color: "#F39221",
      bgLight: "bg-orange-50",
      borderLight: "border-orange-200"
    },
    {
      name: "Tel",
      tag: "Connectivity Solutions",
      shortDesc: "Reliable network infrastructure and connectivity across Africa.",
      fullDesc: "GuavaTel delivers enterprise-grade connectivity through strategic partnerships with Tier 1 providers. We offer fiber, VSAT, and metro network solutions for businesses, institutions, and emerging markets with guaranteed uptime and performance.",
      metric: "99.9%",
      metricLabel: "Uptime SLA",
      icon: "📡",
      features: ["Fiber networks", "VSAT connectivity", "Enterprise internet", "Network management", "Strategic partnerships", "Reliable infrastructure"],
      color: "#91D050",
      bgLight: "bg-green-50",
      borderLight: "border-green-200"
    },
    {
      name: "Tech",
      tag: "Digital Transformation",
      shortDesc: "Intelligent technology solutions for enterprise and government.",
      fullDesc: "GuavaTech provides software engineering, web development, and managed IT services. We build custom solutions including governance platforms, agronomy systems, and business support systems that drive efficiency and sustainable growth.",
      metric: "500+",
      metricLabel: "Projects delivered",
      icon: "⚙️",
      features: ["Custom software", "Web development", "Managed IT services", "Governance platforms", "Digital transformation", "Enterprise solutions"],
      color: "#F39221",
      bgLight: "bg-orange-50",
      borderLight: "border-orange-200"
    }
  ];

  // Partner logos - using SVG placeholders, replace with actual partner logos
  // Partner logos - replaced with images from public/partners
  const partners = [
    { name: "afr", file: "afr.jpg", link: "https://www.africapaciti.com/" },
    { name: "afrosoft", file: "afrosoft.jpg", link: "https://www.afrosoft.co.zw/" },
    { name: "Bankserve", file: "Bankserve.jpg", link: "https://www.bankservafrica.com/website/" },
    { name: "dfa", file: "dfa.jpg", link: "https://dfafrica.co.zw/" },
    { name: "nbs", file: "nbs.jpg", link: "https://www.nbs.co.zw/" },
    { name: "nexgo", file: "nexgo.jpg", link: "https://www.nexgoglobal.com/" },
    { name: "tcib", file: "tcib.jpg", link: "https://www.tcib.africa/" },
  ];

  // Duplicate partners twice for seamless scrolling
  const scrollingPartners = [...partners, ...partners];

  return (
    <div className="relative min-h-screen bg-linear-to-br from-amber-50 via-white to-green-50 overflow-x-hidden">

      {/* Background Elements */}
      <motion.div
        animate={{ x: mousePos.x - 300, y: mousePos.y - 300 }}
        transition={{ type: "tween", duration: 0.3 }}
        className="absolute w-150 h-150 rounded-full bg-[#F39221] opacity-10 blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{ x: mousePos.x - 400, y: mousePos.y - 400 }}
        transition={{ type: "tween", duration: 0.5 }}
        className="absolute w-150 h-150 rounded-full bg-[#91D050] opacity-8 blur-[100px] pointer-events-none"
      />

      <motion.div
        animate={{ scale: [1, 1.2, 1], x: [0, 100, 0], y: [0, 50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -right-48 w-96 h-96 rounded-full bg-[#F39221] opacity-10 blur-[120px]"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], x: [0, -100, 0], y: [0, -50, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 -left-48 w-96 h-96 rounded-full bg-[#91D050] opacity-10 blur-[120px]"
      />

      <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-[#F39221]/5 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[#91D050]/5 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-100 rounded-full bg-[#F39221]/5 blur-3xl" />

      <Navbar />

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-6 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center relative"
          >
            <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-6 leading-tight">
              Disrupt the
              <span className="bg-linear-to-r from-[#F39221] to-[#91D050] bg-clip-text text-transparent"> Status Quo</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three divisions. One company. Infinite possibilities.
              Guava provides the infrastructure for tomorrow's economy.
            </p>

            {/* Scroll indicator */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute -bottom-20 left-1/2 -translate-x-1/2"
            >
              <div className="w-6 h-10 rounded-full border-2 border-gray-400 flex justify-center">
                <div className="w-1 h-2 bg-[#F39221] rounded-full mt-2" />
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Vector/Sketch in bottom right - more prominent */}
          <div className="absolute bottom-0 right-0 opacity-40 pointer-events-none">
            <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.path
                animate={{ pathLength: [0, 1, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
                d="M320 60 L360 100 L320 140"
                stroke="#F39221" strokeWidth="4" fill="none" strokeLinecap="round"
              />
              <motion.circle
                animate={{ r: [15, 25, 15] }}
                transition={{ duration: 4, repeat: Infinity }}
                cx="340" cy="250" r="25" stroke="#F39221" strokeWidth="3" fill="none"
              />
              <motion.path
                animate={{ pathLength: [0, 1, 0] }}
                transition={{ duration: 6, repeat: Infinity, delay: 1 }}
                d="M250 150 L300 200 L250 250"
                stroke="#91D050" strokeWidth="4" fill="none" strokeLinecap="round"
              />
              <motion.rect
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 5, repeat: Infinity }}
                x="50" y="80" width="50" height="50" stroke="#91D050" strokeWidth="3" fill="none"
              />
              <motion.path
                animate={{ d: ["M80 300 L130 250 L180 300", "M80 290 L130 240 L180 290", "M80 300 L130 250 L180 300"] }}
                transition={{ duration: 3, repeat: Infinity }}
                d="M80 300 L130 250 L180 300" stroke="#F39221" strokeWidth="3" fill="none" strokeLinecap="round"
              />
              <motion.circle
                animate={{ r: [8, 15, 8] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
                cx="100" cy="200" r="10" stroke="#91D050" strokeWidth="2" fill="none"
              />
              <motion.line
                animate={{ x1: [200, 210, 200], y1: [350, 340, 350], x2: [250, 260, 250], y2: [350, 340, 350] }}
                transition={{ duration: 4, repeat: Infinity }}
                x1="200" y1="350" x2="250" y2="350" stroke="#F39221" strokeWidth="3" strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Three Divisions Section - Overview */}
      <section id="divisions" className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Three <span className="text-[#F39221]">Divisions</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              One unified company. Built for scale. Ready for the future.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {divisions.map((div, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => setActiveDivision(div.name.toLowerCase())}
                className={`group p-8 rounded-2xl ${div.bgLight} backdrop-blur-sm border ${div.borderLight} shadow-md hover:shadow-xl transition-all cursor-pointer`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-4xl">{div.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{div.name}</h3>
                    <div className="text-xs text-[#F39221] font-mono">{div.tag}</div>
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">{div.shortDesc}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {div.features.slice(0, 3).map((f, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 rounded-full bg-[#F39221]/10 text-[#F39221]">
                      {f}
                    </span>
                  ))}
                </div>

                <div className="flex items-end justify-between mt-4 pt-4 border-t border-gray-200">
                  <div>
                    {/* <div className="text-2xl font-bold text-[#F39221]">{div.metric}</div> */}
                    {/* <div className="text-xs text-gray-500">{div.metricLabel}</div> */}
                  </div>
                  <Link href={`/${div.name.toLowerCase()}`}>
                    <button className="text-sm font-semibold text-[#F39221] hover:underline opacity-0 group-hover:opacity-100 transition cursor-pointer">
                      Learn more →
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section - Infinite Scrolling Carousel */}
      <section className="relative z-10 py-16 px-6 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Trusted by <span className="text-[#F39221]">industry leaders</span>
            </h2>
            <p className="text-gray-500 text-sm">Join other companies building with Guava</p>
          </motion.div>

          {/* Scrolling Carousel */}
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-white/50 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-white/50 to-transparent z-10 pointer-events-none" />

            <div className="overflow-hidden">
              <div
                className="flex gap-8 py-4"
                style={{ width: "max-content", animation: "partnersScroll 24s linear infinite" }}
              >
                {scrollingPartners.map((partner, idx) => (
                  <div
                    key={`${partner.file}-${idx}`}
                    className="flex items-center justify-center min-w-40 px-3 py-4 bg-transparent transition-transform group"
                  >
                    <div className="w-40 h-28 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                      <Link href={partner.link} target="_blank" aria-label={`Partner ${partner.name}`}>
                        <Image src={`/partners/${partner.file}`} alt={partner.name} width={160} height={112} className="object-contain" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              <style>{`
                @keyframes partnersScroll {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
              `}</style>
            </div>
          </div>

          {/* Partner Stats */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-gray-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#F39221]">500+</div>
              <div className="text-xs text-gray-500 mt-1">Active Partners</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#91D050]">50+</div>
              <div className="text-xs text-gray-500 mt-1">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#F39221]">$2.4B</div>
              <div className="text-xs text-gray-500 mt-1">Partner Transaction Volume</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#91D050]">99.9%</div>
              <div className="text-xs text-gray-500 mt-1">Partner Satisfaction</div>
            </div>
          </div> */}
        </div>
      </section>

      {/* What We Offer Section - Detailed */}
      <section id="what-we-offer" className="relative z-10 py-20 px-6 bg-white/80">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What We <span className="text-[#91D050]">Offer</span>
            </h2>
            <p className="text-gray-600 text-lg">Deep dive into each division's capabilities</p>

            <div className="flex justify-center gap-3 mt-8">
              <button
                onClick={() => setActiveDivision(null)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${activeDivision === null
                  ? "bg-linear-to-r from-[#F39221] to-[#91D050] text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
              >
                All Divisions
              </button>
              {["pay", "tel", "tech"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveDivision(tab)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${activeDivision === tab
                    ? "bg-linear-to-r from-[#F39221] to-[#91D050] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Expanded detailed view when a division is selected */}
          {activeDivision && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-8 p-8 rounded-2xl bg-linear-to-r from-[#F39221]/5 to-[#91D050]/5 border border-[#F39221]/20 shadow-lg"
            >
              {(() => {
                const div = divisions.find(d => d.name.toLowerCase() === activeDivision);
                if (!div) return null;
                return (
                  <>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-6xl">{div.icon}</div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900">{div.name}</h3>
                        <p className="text-gray-600">{div.tag}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 text-lg mb-8 leading-relaxed">{div.fullDesc}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#F39221]" />
                          Key Features
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {div.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#F39221]" />
                              <span className="text-gray-600 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      {/* <div className="bg-white/50 rounded-xl p-4">
                        <h4 className="font-bold text-gray-900 mb-3">Performance Metrics</h4>
                        <div className="text-3xl font-bold text-[#F39221]">{div.metric}</div>
                        <div className="text-sm text-gray-500 mb-3">{div.metricLabel}</div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-linear-to-r from-[#F39221] to-[#91D050] h-2 rounded-full" style={{ width: "94%" }} />
                        </div>
                        <div className="text-xs text-gray-500 mt-2">+23% growth this quarter</div>
                      </div> */}
                    </div>

                    <div className="pt-4 border-t border-[#F39221]/20 flex justify-end">
                      <button className="px-6 py-2 rounded-full bg-linear-to-r from-[#F39221] to-[#91D050] text-white font-semibold hover:shadow-lg transition">
                        Request {div.name} Demo →
                      </button>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          )}

          {/* All divisions view - detailed cards */}
          {!activeDivision && (
            <div className="grid grid-cols-1 gap-8">
              {divisions.map((div, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 rounded-2xl bg-white border border-gray-200 shadow-md hover:shadow-lg transition"
                >
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="text-5xl">{div.icon}</div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{div.name}</h3>
                          <div className="text-sm text-[#F39221] font-mono">{div.tag}</div>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-4">{div.fullDesc}</p>
                      <div className="flex flex-wrap gap-2">
                        {div.features.map((f, i) => (
                          <span key={i} className="text-xs px-2 py-1 rounded-full bg-[#F39221]/10 text-[#F39221]">
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="md:w-64 p-4 rounded-xl bg-linear-to-br from-[#F39221]/5 to-[#91D050]/5 border border-gray-100">
                      <div className="text-center">
                        {/* <div className="text-3xl font-bold text-[#F39221]">{div.metric}</div> */}
                        {/* <div className="text-xs text-gray-500 mb-3">{div.metricLabel}</div> */}
                        <Link href={`/${div.name.toLowerCase()}`}>
                          <button className="w-full py-2 rounded-full border border-[#F39221] text-[#F39221] text-sm font-semibold hover:bg-[#F39221] hover:text-white transition cursor-pointer">
                            Explore {div.name} →
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* About Teaser */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-[#F39221]">Guava</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Guava Africa is a dynamic technology company shaping Africa's digital future through innovative telecommunications, fintech, and technology solutions. As part of the Africapaciti Group of Companies, we serve as a Centre of Excellence with operations in South Africa and Zimbabwe, driving digital transformation across the continent. At our core, we empower both public and private sector clients with smart, scalable solutions that address everyday communication needs as well as complex technological challenges.
            </p>
            <Link href="/about">
              <button className="px-8 py-3 cursor-pointer rounded-full bg-linear-to-r from-[#F39221] to-[#91D050] text-white font-semibold shadow-md hover:shadow-lg transition">
                Learn More About Us →
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}