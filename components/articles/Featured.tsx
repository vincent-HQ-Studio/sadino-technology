"use client";

import { motion } from "framer-motion";
import { fadeUp, slideRight, slideLeft, stagger } from "@/lib/animations";
import { articles } from "@/constants/articles";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ArticleFeatured() {
  const featured = articles.find((a) => a.featured);
  if (!featured) return null;

  return (
    <motion.section
      variants={stagger}
      initial="hidden"
      animate="show"
      className="container-custom mb-20"
    >
      <div className="grid md:grid-cols-2 rounded-3xl overflow-hidden bg-white shadow-xl shadow-blue-50/60">
        {/* IMAGE */}
        <motion.div variants={slideRight} className="relative h-[320px] md:h-auto min-h-[380px]">
          <Image
            src={featured.image}
            alt={featured.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          {/* Overlay badge */}
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="px-3 py-1 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
              Featured
            </span>
            <span className="px-3 py-1 bg-white/90 text-gray-700 text-[10px] font-semibold uppercase tracking-wide rounded-full">
              {featured.category}
            </span>
          </div>
        </motion.div>

        {/* CONTENT */}
        <motion.div variants={slideLeft} className="p-10 md:p-12 flex flex-col justify-center">
          <div className="text-sm text-blue-600 font-medium mb-4">
            {featured.category} · {featured.readTime}
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight tracking-tight text-gray-900">
            {featured.title}
          </h2>

          <p className="text-gray-500 mb-8 leading-relaxed">{featured.description}</p>

          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center gap-3">
              <img
                src={featured.author.avatar}
                alt={featured.author.name}
                className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-100"
              />
              <div>
                <p className="text-sm font-semibold text-gray-900">{featured.author.name}</p>
                <p className="text-xs text-gray-400">{featured.author.role}</p>
              </div>
            </div>

            <Link
              href={`/articles/${featured.slug}`}
              className="inline-flex items-center gap-2 text-blue-600 text-sm font-bold hover:gap-3 transition-all"
            >
              Read Article <ArrowRight size={14} />
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
