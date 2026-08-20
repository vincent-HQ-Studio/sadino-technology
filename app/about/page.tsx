"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, stagger, slideLeft, slideRight, viewportOnce } from "@/lib/animations";

const values = [
  {
    title: "Innovation",
    icon: "⚡",
    desc: "We don't just follow trends — we set them. Our R&D lab explores AI, Blockchain, and Edge computing to give clients an unfair advantage.",
  },
  {
    title: "Quality",
    icon: "🎯",
    desc: "Our 'No-Compromise' QA protocol ensures every deployment is scalable, secure, and resilient under the most demanding conditions.",
  },
  {
    title: "Client-Centricity",
    icon: "🤝",
    desc: "Your goals are our benchmarks. We operate as an extension of your team, ensuring transparency and alignment at every milestone.",
  },
];

const cultureImages = [
  "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=600",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=600",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600",
  "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=600",
];

export default function AboutPage() {
  return (
    <div className="bg-white">

      {/* ===== HERO ===== */}
      <motion.section
        variants={stagger}
        initial="hidden"
        animate="show"
        className="pt-36 pb-24 container-custom"
      >
        <motion.span
          variants={fadeUp}
          className="inline-block py-1 px-4 bg-blue-100 text-blue-600 text-xs font-bold rounded-full mb-6 uppercase tracking-widest"
        >
          Established 2019
        </motion.span>

        <motion.h1
          variants={fadeUp}
          className="text-5xl md:text-7xl font-extrabold leading-tight mb-8 tracking-tight max-w-4xl"
        >
          Crafting the{" "}
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Future
          </span>{" "}
          of Technology
        </motion.h1>

        <motion.p variants={fadeUp} className="text-xl text-gray-500 mb-10 max-w-2xl leading-relaxed">
          We are more than a software house. We are digital architects dedicated
          to transforming complex business challenges into seamless,
          high-performance technological realities.
        </motion.p>

        <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
          <Link href="/services" className="btn-primary">
            Our Ecosystem
          </Link>
          <button className="bg-[#f2f4f6] px-8 py-3 rounded-xl font-bold hover:bg-gray-200 transition">
            Watch Film
          </button>
        </motion.div>
      </motion.section>

      {/* ===== STATS ===== */}
      <section className="py-20 bg-[#f2f4f6]">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="container-custom grid md:grid-cols-3 gap-6"
        >
          {[
            { num: "100+", label: "Projects Delivered", sub: "Across 12 industries" },
            { num: "5+", label: "Years Excellence", sub: "Continuous innovation" },
            { num: "50+", label: "Global Clients", sub: "From startups to Fortune 500" },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-white p-8 rounded-2xl border-l-4 border-blue-600 shadow-sm"
            >
              <h3 className="text-4xl font-bold text-blue-600 mb-1">{item.num}</h3>
              <p className="font-semibold text-gray-900">{item.label}</p>
              <p className="text-sm text-gray-400 mt-1">{item.sub}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ===== STORY ===== */}
      <section className="py-28 container-custom">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid md:grid-cols-2 gap-20 items-center"
        >
          <motion.div variants={slideRight} className="relative">
            <div className="rounded-3xl overflow-hidden aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800"
                alt="Sadino Technology Office"
                width={800}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>

          <motion.div variants={slideLeft}>
            <h2 className="text-4xl font-bold mb-6 tracking-tight">Our Story</h2>
            <p className="text-gray-500 mb-4 leading-relaxed">
              Founded in 2019, Sadino Technology emerged from a simple observation:
              the bridge between visionary business ideas and robust technical
              execution was often fragmented.
            </p>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Today, we've grown into a multidisciplinary powerhouse of architects,
              developers, and designers — but our core philosophy remains: engineering
              with empathy.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { year: "2019", label: "Founded & First Enterprise Partner" },
                { year: "2022", label: "Expansion to European Markets" },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-[#f7f9fb] rounded-xl">
                  <p className="text-blue-600 font-bold text-lg">{item.year}</p>
                  <p className="text-sm text-gray-500 mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ===== VALUES ===== */}
      <section className="py-28 bg-[#f2f4f6]">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="container-custom"
        >
          <motion.div variants={fadeUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Values that Define Us</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              The principles that guide every line of code we write and every strategy we build.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="bg-white p-10 rounded-2xl shadow-sm"
              >
                <div className="text-3xl mb-5">{v.icon}</div>
                <h3 className="text-xl font-bold mb-3">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ===== LEADERSHIP ===== */}
      <section className="py-28 container-custom">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.div
            variants={fadeUp}
            className="grid md:grid-cols-2 bg-[#f7f9fb] rounded-3xl overflow-hidden"
          >
            <div className="relative min-h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800"
                alt="Alex Sadino"
                fill
                className="object-cover object-top"
              />
            </div>

            <motion.div variants={slideLeft} className="p-12 md:p-16 flex flex-col justify-center">
              <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-3">Leadership</p>
              <h2 className="text-4xl font-bold mb-2">Alex Sadino</h2>
              <p className="text-blue-500 font-semibold text-sm mb-6">Founder & CEO</p>
              <p className="text-gray-500 italic leading-relaxed mb-8 text-lg">
                "Technology is most powerful when it becomes invisible — seamlessly
                enabling human potential without the friction of complexity."
              </p>
              <div className="flex gap-4 text-sm text-blue-600 font-semibold">
                <span className="cursor-pointer hover:opacity-70 transition">Twitter</span>
                <span className="cursor-pointer hover:opacity-70 transition">LinkedIn</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ===== CULTURE ===== */}
      <section className="py-28 bg-[#f2f4f6]">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="container-custom grid lg:grid-cols-12 gap-12"
        >
          <motion.div variants={slideRight} className="lg:col-span-5 flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-6">Life at Sadino</h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              We thrive in an environment of radical candor and relentless curiosity.
              Our team isn't just about work — it's about building a community of
              thinkers who dare to challenge the status quo.
            </p>
            <ul className="space-y-3 mb-8">
              {["Hybrid-First Remote Flexibility", "Annual Innovation Retreats", "Continuous Learning Stipends"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 text-sm">
                  <span className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center shrink-0">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn-primary w-fit">
              Join the Team
            </Link>
          </motion.div>

          <motion.div variants={slideLeft} className="lg:col-span-7 grid grid-cols-2 gap-4">
            {cultureImages.map((src, i) => (
              <div key={i} className="rounded-2xl overflow-hidden aspect-[4/3]">
                <Image
                  src={src}
                  alt={`Culture ${i + 1}`}
                  width={400}
                  height={300}
                  className="object-cover w-full h-full hover:scale-105 transition duration-500"
                />
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ===== FOOTER CTA ===== */}
      <section className="py-24 container-custom">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="bg-gradient-to-br from-blue-700 to-blue-500 rounded-3xl p-12 md:p-20 text-white text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Ready to build together?</h2>
            <p className="text-blue-100 mb-10 max-w-xl mx-auto">
              Let's turn your vision into a market-leading digital product.
            </p>
            <Link href="/contact" className="bg-white text-blue-700 px-10 py-4 rounded-xl font-bold hover:bg-gray-50 hover:scale-105 transition-all shadow-xl">
              Get Free Consultation
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
