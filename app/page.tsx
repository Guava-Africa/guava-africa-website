"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import planes from "@/public/planes.png";
import Logo from "@/public/logos/logo.png";

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
      image: "https://images.unsplash.com/photo-1718010571964-bac048b9ded0?q=80&w=1070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      image: "https://images.unsplash.com/photo-1594915440248-1e419eba6611?q=80&w=1167&auto=format&fit=crop",
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
      image: "/img/IMG_6450.jpeg",
      features: ["Custom software", "Web development", "Managed IT services", "Governance platforms", "Digital transformation", "Enterprise solutions"],
      color: "#F39221",
      bgLight: "bg-orange-50",
      borderLight: "border-orange-200"
    }
  ];

  // Partner logos - using images from public/partners
  const partners = [
    { name: "africapaciti", file: "africapaciti.webp", link: "https://www.africapaciti.com/" },
    { name: "powertel", file: "powertel.webp", link: "https://www.powertel.co.zw/" },
    { name: "infradevcor", file: "infradevcor.webp", link: "https://www.infradevcor.com/" },
    { name: "staffing solutions", file: "staffing-solutions.webp", link: "#" },
    { name: "agridevcor", file: "agridevcor.webp", link: "https://agridevcor.com/" },
    { name: "payinc", file: "payinc.webp", link: "https://www.payinc.co.za/" },
    { name: "providence", file: "providence.webp", link: "https://www.providencehumancapital.com/" },
    { name: "nexgo", file: "nexgo.webp", link: "https://www.nexgoglobal.com/" },
    { name: "harvest acres", file: "harvest.webp", link: "#" },
    { name: "innbucks", file: "innbucks.webp", link: "https://innbucks.co.zw/" },
    { name: "nmb", file: "nmb.webp", link: "https://www.nmbzimbabwe.com/" },
    { name: "green patrol", file: "greenpatroll.webp", link: "#" },
    { name: "tcib", file: "tcib.webp", link: "https://www.tcib.africa/" },
    { name: "liquid", file: "liquid.webp", link: "https://www.liquid.tech/" },
  ];

  // Duplicate partners for seamless scrolling
  const scrollingPartners = [...partners, ...partners];

  // Techy images for the full-width strip - increased height
  const techImages = [
    "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?q=80&w=1469&auto=format&fit=crop", // Person on computer
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1470&auto=format&fit=crop", // Person making payment
    "https://images.unsplash.com/photo-1461749281345-5a6dd3e762c8?q=80&w=1469&auto=format&fit=crop", // Coding/tech
    "https://images.unsplash.com/photo-1687422808248-f807f4ea2a2e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Network/server
    "https://images.unsplash.com/photo-1638544253786-ab3078fe2f3f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Network/server
    "https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Network/server
    "https://images.unsplash.com/photo-1484788984921-03950022c9ef?q=80&w=1232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Network/server
  ];

  return (
    <div className="relative min-h-screen bg-linear-to-br from-amber-50 via-white to-green-50 overflow-x-hidden">

      {/* Enhanced Animated Background Elements - Pushed to Extreme Edges Only */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Moving gradient blobs - pushed to corners */}
        <motion.div
          animate={{ x: mousePos.x * 0.01 - 300, y: mousePos.y * 0.01 - 300 }}
          transition={{ type: "tween", duration: 0.3 }}
          className="absolute -top-48 -left-48 w-96 h-96 rounded-full bg-[#F39221] opacity-20 blur-[100px]"
        />
        <motion.div
          animate={{ x: mousePos.x * 0.01 + 300, y: mousePos.y * 0.01 - 300 }}
          transition={{ type: "tween", duration: 0.5 }}
          className="absolute -bottom-48 -right-48 w-96 h-96 rounded-full bg-[#91D050] opacity-20 blur-[100px]"
        />

        {/* Floating shapes - at extreme edges */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#F39221] opacity-10 blur-[80px]"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-[#91D050] opacity-10 blur-[80px]"
        />

        {/* Coding Tags - at far edges */}
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-10 left-[2%] text-[#F39221] font-mono text-sm opacity-30"
        >
          &lt;/&gt;
        </motion.div>
        <motion.div
          animate={{ y: [0, 30, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute bottom-10 right-[2%] text-[#91D050] font-mono text-xl opacity-30"
        >
          {'{ }'}
        </motion.div>
        <motion.div
          animate={{ rotate: [0, 10, -10, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-1/3 right-[1%] text-[#F39221] font-mono text-base opacity-20"
        >
          {'<> </>'}
        </motion.div>

        {/* Globe Icon - at edge */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-10 left-[1%] w-24 h-24 opacity-10"
        >
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="#F39221" strokeWidth="1.5" />
            <ellipse cx="12" cy="12" rx="4" ry="10" stroke="#91D050" strokeWidth="1.5" />
            <line x1="2" y1="12" x2="22" y2="12" stroke="#F39221" strokeWidth="1.5" />
            <line x1="12" y1="2" x2="12" y2="22" stroke="#91D050" strokeWidth="1.5" />
          </svg>
        </motion.div>

        {/* Tech Icons - all at edges */}
        <motion.div
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-20 right-[3%] w-8 h-8 opacity-20"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="#F39221" strokeWidth="1.5">
            <rect x="2" y="3" width="20" height="14" rx="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
          </svg>
        </motion.div>
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-[4%] w-10 h-10 opacity-20"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="#91D050" strokeWidth="1.5">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </motion.div>
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-1/4 left-[1%] w-6 h-6 opacity-20"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="#F39221" strokeWidth="1.5">
            <path d="M4 4l16 16M20 4L4 20" />
          </svg>
        </motion.div>
        <motion.div
          animate={{ rotate: [0, 180] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-1/3 right-[1%] w-8 h-8 opacity-20"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="#91D050" strokeWidth="1.5">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H5.78a1.65 1.65 0 0 0-1.51 1 1.65 1.65 0 0 0 .33 1.82l.04.04A10 10 0 0 0 12 17.66a10 10 0 0 0 6.36-2.62z" />
            <path d="M16.66 7.34A8 8 0 0 0 12 5.33a8 8 0 0 0-4.66 2.01" />
          </svg>
        </motion.div>
        <motion.div
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-2/3 left-[2%] w-5 h-5 opacity-20"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="#F39221" strokeWidth="1.5">
            <rect x="2" y="2" width="20" height="20" rx="4" />
            <line x1="8" y1="2" x2="8" y2="22" />
            <line x1="16" y1="2" x2="16" y2="22" />
          </svg>
        </motion.div>
        <motion.div
          animate={{ x: [0, 20, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute bottom-1/4 left-[3%] w-7 h-7 opacity-20"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="#91D050" strokeWidth="1.5">
            <path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.66 0 3-4 3-9s-1.34-9-3-9m0 18c-1.66 0-3-4-3-9s1.34-9 3-9" />
          </svg>
        </motion.div>
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] right-[5%] w-6 h-6 opacity-20"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="#F39221" strokeWidth="1.5">
            <path d="M2 12h20M12 2v20" />
            <circle cx="12" cy="12" r="4" />
          </svg>
        </motion.div>

        {/* Extra geometric shapes - at far edges */}
        <motion.div
          animate={{ rotate: [0, 45, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-1/2 left-[0.5%] w-16 h-16 border-2 border-[#F39221]/20 rounded-lg"
        />
        <motion.div
          animate={{ rotate: [45, 0, 45] }}
          transition={{ duration: 18, repeat: Infinity }}
          className="absolute bottom-1/3 right-[0.5%] w-12 h-12 border-2 border-[#91D050]/20 rounded-full"
        />
        <motion.div
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute top-[5%] left-[8%] w-3 h-3 bg-[#F39221]/30 rounded-full"
        />
        <motion.div
          animate={{ scale: [1.5, 1, 1.5] }}
          transition={{ duration: 9, repeat: Infinity }}
          className="absolute bottom-[5%] right-[8%] w-2 h-2 bg-[#91D050]/30 rounded-full"
        />
        <motion.div
          animate={{ x: [0, -15, 0], y: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-[80%] left-[2%] w-4 h-4 bg-[#F39221]/20 rounded-full"
        />
      </div>

      <Navbar />

      {/* Hero Section - Split Layout with Image */}
      <section className="relative z-10 pt-15 pb-25 px-6 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          {/* Larger Logo at the top of hero */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <Image src={Logo} alt="Guava Logo" width={680} height={312} className="w-auto h-38 md:h-72" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-gray-900 mb-6 leading-tight sm:text-left text-center">
                Disrupt the
                <span className="bg-linear-to-r from-[#F39221] to-[#91D050] bg-clip-text text-transparent"> Status Quo</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl sm:text-left text-center">
                Three divisions. One company.
                Guava provides the infrastructure for tomorrow's economy.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative lg:w-120 mx-auto rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src={planes.src}
                alt="Technology"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute left-1/2 -translate-x-1/2 mt-9"
          >
            <div className="w-6 h-10 rounded-full border-2 border-gray-400 flex justify-center">
              <div className="w-1 h-2 bg-[#F39221] rounded-full mt-2" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Full Width Techy Image Strip - increased height to h-96 */}
      <section className="relative z-10 w-full overflow-hidden bg-gray-900">
        <div className="relative">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div className="flex w-full overflow-hidden">
            <div
              className="flex gap-0 animate-scroll"
              style={{ width: "max-content" }}
            >
              {[...techImages, ...techImages].map((img, idx) => (
                <div key={idx} className="relative w-100 md:w-160 h-100 flex-shrink-0">
                  <img
                    src={img}
                    alt={`Tech scene ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/60 z-20" />
          <div className="absolute inset-0 flex items-center justify-center z-30">
            <h3 className="text-white text-2xl md:text-4xl font-bold text-center px-4">
              Driving Africa's Digital Future
            </h3>
          </div>
        </div>
        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 90s linear infinite;
          }
        `}</style>
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Three <span className="text-[#F39221]">Divisions</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
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
                className={`group p-6 md:p-8 rounded-2xl ${div.bgLight} backdrop-blur-sm border ${div.borderLight} shadow-md hover:shadow-xl transition-all cursor-pointer`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl md:text-4xl">{div.icon}</div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">{div.name}</h3>
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
                  <div />
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

      {/* Partners Section - Our Growing Guava Network */}
      <section className="relative z-10 py-16 px-6 ">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Our <span className="text-[#F39221]">Growing Guava Network</span>
            </h2>
            <p className="text-gray-500 text-xs md:text-sm">Join other companies building with Guava</p>
          </motion.div>

          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-white/50 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-white/50 to-transparent z-10 pointer-events-none" />

            <div className="overflow-hidden">
              <div
                className="flex gap-4 md:gap-12 py-4"
                style={{ width: "max-content", animation: "partnersScroll 50s linear infinite" }}
              >
                {scrollingPartners.map((partner, idx) => (
                  <div
                    key={`${partner.file}-${idx}`}
                    className="flex items-center justify-center min-w-24 md:min-w-40 px-2 md:px-3 py-2 md:py-4 bg-transparent transition-transform group"
                  >
                    <div className="w-20 h-14 md:w-40 md:h-28 flex items-center justify-center transition-transform duration-400 group-hover:scale-105">
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
        </div>
      </section>

      {/* What We Offer Section - Detailed WITH IMAGES */}
      <section id="what-we-offer" className="relative z-10 py-20 px-6 bg-white/80">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What We <span className="text-[#91D050]">Offer</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg">Deep dive into each division's capabilities</p>

            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-8">
              <button
                onClick={() => setActiveDivision(null)}
                className={`px-3 md:px-4 py-1 md:py-1.5 rounded-full text-xs md:text-sm font-medium transition ${activeDivision === null
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
                  className={`px-3 md:px-4 py-1 md:py-1.5 rounded-full text-xs md:text-sm font-medium transition ${activeDivision === tab
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
              className="mb-8 p-4 md:p-8 rounded-2xl bg-linear-to-r from-[#F39221]/5 to-[#91D050]/5 border border-[#F39221]/20 shadow-lg"
            >
              {(() => {
                const div = divisions.find(d => d.name.toLowerCase() === activeDivision);
                if (!div) return null;
                return (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
                    <div>
                      <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                        <div className="text-4xl md:text-6xl">{div.icon}</div>
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{div.name}</h3>
                          <p className="text-gray-600 text-sm md:text-base">{div.tag}</p>
                        </div>
                      </div>
                      <p className="text-gray-700 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">{div.fullDesc}</p>

                      <div className="mb-6 md:mb-8">
                        <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#F39221]" />
                          Key Features
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {div.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#F39221]" />
                              <span className="text-gray-600 text-xs md:text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
                      <img
                        src={div.image}
                        alt={div.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          )}

          {/* All divisions view - detailed cards WITH IMAGES */}
          {!activeDivision && (
            <div className="grid grid-cols-1 gap-6 md:gap-8">
              {divisions.map((div, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-4 md:p-8 rounded-2xl bg-white border border-gray-200 shadow-md hover:shadow-lg transition"
                >
                  <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="text-4xl md:text-5xl">{div.icon}</div>
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900">{div.name}</h3>
                          <div className="text-xs md:text-sm text-[#F39221] font-mono">{div.tag}</div>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">{div.fullDesc}</p>
                      <div className="flex flex-wrap gap-2">
                        {div.features.map((f, i) => (
                          <span key={i} className="text-xs px-2 py-1 rounded-full bg-[#F39221]/10 text-[#F39221]">
                            {f}
                          </span>
                        ))}
                      </div>
                      <div className="mt-6">
                        <Link href={`/${div.name.toLowerCase()}`}>
                          <button className="px-4 md:px-6 py-2 rounded-full border border-[#F39221] text-[#F39221] text-sm font-semibold hover:bg-[#F39221] hover:text-white transition cursor-pointer">
                            Explore {div.name} →
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className="md:w-80 h-48 md:h-64 rounded-xl overflow-hidden shadow-lg">
                      <img
                        src={div.image}
                        alt={div.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action Section - Before Footer */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-linear-to-r from-[#F39221]/10 to-[#91D050]/10 rounded-3xl p-8 md:p-12 text-center border border-[#F39221]/20 shadow-xl"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Ready to <span className="text-[#F39221]">Transform</span> Your Business?
            </h2>
            <p className="text-gray-600 text-base md:text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how Guava's innovative solutions can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="px-6 md:px-8 py-3 rounded-full bg-linear-to-r from-[#F39221] to-[#91D050] text-white font-semibold shadow-md hover:shadow-lg transition text-sm md:text-base cursor-pointer">
                  Get in Touch →
                </button>
              </Link>
              <Link href="/divisions">
                <button className="px-6 md:px-8 py-3 rounded-full border-2 border-[#F39221] text-[#F39221] font-semibold hover:bg-[#F39221] hover:text-white transition text-sm md:text-base cursor-pointer">
                  Explore Solutions
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}