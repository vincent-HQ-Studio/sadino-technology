"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";

export default function ArticleHero() {
  return (
    <section className="container-custom mb-16 pt-4">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="max-w-4xl"
      >
        <motion.span
          variants={fadeUp}
          className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest mb-6"
        >
          Our Journal
        </motion.span>

        <motion.h1
          variants={fadeUp}
          className="text-5xl md:text-7xl font-extrabold leading-[1.05] mb-6 tracking-tight"
        >
          Insights from our{" "}
          <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Engineers
          </span>{" "}
          &{" "}
          <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
            Designers
          </span>
        </motion.h1>

        <motion.p variants={fadeUp} className="text-gray-500 text-lg max-w-2xl leading-relaxed">
          Deep dives into modern software architecture, creative design systems,
          and the evolving landscape of artificial intelligence.
        </motion.p>
      </motion.div>
    </section>
  );
}
