"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { ArrowLeft, ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { fadeUp, stagger, slideLeft, slideRight, viewportOnce } from "@/lib/animations";

export default function PortfolioClientDetail({ portfolio }: { portfolio: any }) {
  const [activeImg, setActiveImg] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const gallery: string[] = portfolio.gallery?.length
    ? portfolio.gallery
    : Array(4).fill("https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=600");

  const mainImages = [portfolio.image, ...gallery.slice(0, 3)];

  return (
    <div className="pt-24 pb-24 bg-white">
      <div className="container-custom">

        {/* BACK */}
        <motion.div variants={fadeUp} initial="hidden" animate="show" className="mb-10">
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 transition font-medium">
            <ArrowLeft size={16} /> Back to Portfolio
          </Link>
        </motion.div>

        {/* ===== HERO ===== */}
        <motion.section
          variants={stagger}
          initial="hidden"
          animate="show"
          className="grid lg:grid-cols-12 gap-14 items-start mb-28"
        >
          {/* LEFT — Gallery */}
          <motion.div variants={slideRight} className="lg:col-span-7 space-y-4">
            {/* Main Image */}
            <div
              className="rounded-2xl overflow-hidden aspect-video bg-gray-100 cursor-zoom-in relative"
              onClick={() => setLightbox(activeImg)}
            >
              <Image
                src={mainImages[activeImg] || portfolio.image}
                alt={portfolio.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover transition duration-500"
              />
              <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition flex items-center justify-center">
                <span className="opacity-0 hover:opacity-100 bg-white/90 text-xs font-semibold px-3 py-1.5 rounded-full transition">
                  Click to enlarge
                </span>
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="grid grid-cols-4 gap-3">
              {mainImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`aspect-video rounded-xl overflow-hidden border-2 transition ${
                    activeImg === i ? "border-blue-600 shadow-md" : "border-transparent hover:border-gray-300"
                  }`}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={img}
                      alt={`thumb ${i + 1}`}
                      fill
                      sizes="120px"
                      className="object-cover"
                    />
                  </div>
                </button>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — Info */}
          <motion.div variants={slideLeft} className="lg:col-span-5 space-y-7 lg:pt-2">
            <div className="flex gap-2 flex-wrap">
              <span className="px-3 py-1 text-[10px] font-bold uppercase bg-blue-100 text-blue-600 rounded-full tracking-widest">
                Case Study
              </span>
              <span className="px-3 py-1 text-[10px] font-bold uppercase bg-gray-100 text-gray-600 rounded-full tracking-widest">
                {portfolio.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-gray-900">
              {portfolio.title}
            </h1>

            <p className="text-gray-500 text-lg leading-relaxed">{portfolio.description}</p>

            {/* Meta grid */}
            <div className="grid grid-cols-2 gap-5 py-6 border-y border-gray-100">
              <Meta label="Client" value={portfolio.meta?.client} />
              <Meta label="Year" value={portfolio.meta?.year} />
              <Meta label="Role" value={portfolio.meta?.role} />
              <Meta label="Tech Stack" value={(portfolio.meta?.tech || []).join(", ")} />
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={portfolio.liveUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2"
              >
                View Live Project <ArrowUpRight size={16} />
              </a>
              <Link href="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </motion.section>

        {/* ===== CHALLENGE ===== */}
        {portfolio.challenge && (
          <motion.section
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid lg:grid-cols-2 gap-16 items-center mb-28"
          >
            <motion.div variants={slideRight}>
              <div className="w-10 h-1 bg-blue-600 rounded-full mb-6" />
              <h2 className="text-3xl font-bold mb-4 text-gray-900">{portfolio.challenge.title || "The Challenge"}</h2>
              <p className="text-gray-500 mb-6 leading-relaxed">{portfolio.challenge.desc}</p>
              <ul className="space-y-3">
                {(portfolio.challenge.points || []).map((p: string, i: number) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 text-sm">
                    <span className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center shrink-0">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={slideLeft}>
              <div className="rounded-2xl overflow-hidden aspect-video bg-gray-100">
                <Image
                  src={portfolio.challenge.image || "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800"}
                  alt="Challenge"
                  width={800}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>
          </motion.section>
        )}

        {/* ===== SOLUTION ===== */}
        {portfolio.solution && (
          <motion.section
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid lg:grid-cols-2 gap-16 items-center mb-28"
          >
            <motion.div variants={slideRight} className="order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden aspect-video bg-gray-100">
                <Image
                  src={portfolio.solution.image || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800"}
                  alt="Solution"
                  width={800}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>

            <motion.div variants={slideLeft} className="order-1 lg:order-2">
              <div className="w-10 h-1 bg-blue-600 rounded-full mb-6" />
              <h2 className="text-3xl font-bold mb-4 text-gray-900">{portfolio.solution.title || "The Solution"}</h2>
              <p className="text-gray-500 mb-6 leading-relaxed">{portfolio.solution.desc}</p>
              {portfolio.solution?.quote && (
                <div className="bg-[#f7f9fb] border-l-4 border-blue-500 p-6 rounded-r-xl">
                  <p className="text-gray-600 italic leading-relaxed">"{portfolio.solution.quote.text}"</p>
                  <p className="text-blue-600 text-sm font-semibold mt-3">— {portfolio.solution.quote.author}</p>
                </div>
              )}
            </motion.div>
          </motion.section>
        )}

        {/* ===== RESULT ===== */}
        {portfolio.result && (
          <motion.section
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="bg-[#f7f9fb] rounded-3xl p-10 md:p-16 mb-16"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeUp}>
                <div className="w-10 h-1 bg-blue-600 rounded-full mb-6" />
                <h2 className="text-3xl font-bold mb-4 text-gray-900">{portfolio.result.title || "The Result"}</h2>
                <p className="text-gray-500 leading-relaxed">{portfolio.result.desc}</p>
              </motion.div>

              <div className="grid grid-cols-2 gap-5">
                {(portfolio.result.metrics || []).map((item: any, i: number) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    whileHover={{ y: -4 }}
                    className="bg-white p-6 rounded-2xl border-l-4 border-blue-600 shadow-sm"
                  >
                    <p className="text-3xl font-extrabold text-blue-600">{item.value}</p>
                    <p className="text-xs uppercase tracking-wider text-gray-400 mt-1 font-semibold">{item.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        )}

        {/* ===== NEXT PROJECT CTA ===== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="text-center py-8"
        >
          <p className="text-gray-400 text-sm mb-4">Ready to build something great?</p>
          <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
            Start a Project <ArrowUpRight size={16} />
          </Link>
        </motion.div>
      </div>

      {/* ===== LIGHTBOX ===== */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-5 right-5 text-white p-2 rounded-full hover:bg-white/10 transition"
            >
              <X size={24} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); setLightbox(Math.max(0, (lightbox ?? 0) - 1)); }}
              className="absolute left-4 text-white p-2 rounded-full hover:bg-white/10 transition"
            >
              <ChevronLeft size={28} />
            </button>

            <motion.div
              key={lightbox}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={mainImages[lightbox] || portfolio.image}
                alt="Gallery"
                fill
                className="object-contain"
                sizes="90vw"
              />
            </motion.div>

            <button
              onClick={(e) => { e.stopPropagation(); setLightbox(Math.min(mainImages.length - 1, (lightbox ?? 0) + 1)); }}
              className="absolute right-4 text-white p-2 rounded-full hover:bg-white/10 transition"
            >
              <ChevronRight size={28} />
            </button>

            <div className="absolute bottom-5 flex gap-2">
              {mainImages.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setLightbox(i); }}
                  className={`w-2 h-2 rounded-full transition ${i === lightbox ? "bg-white" : "bg-white/40"}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Meta({ label, value }: { label: string; value?: string }) {
  return (
    <div>
      <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold mb-1">{label}</p>
      <p className="text-sm font-semibold text-gray-900">{value || "—"}</p>
    </div>
  );
}
