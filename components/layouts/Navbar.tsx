"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const services = [
  { name: "Web Development", href: "/services/web-development" },
  { name: "UI/UX Design", href: "/services/ui-ux-design" },
  { name: "API / Backend", href: "/services/backend-api" },
  { name: "Company Profile", href: "/services/company-profile" },
  { name: "Mobile Apps", href: "/services/mobile-apps" },
];

const navLinks = [
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Articles", href: "/articles" },
  { name: "Pricing", href: "/pricing" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  // Hide/show on scroll
  useEffect(() => {
    const onScroll = () => {
      const cur = window.scrollY;
      setVisible(cur <= lastScroll || cur <= 80);
      setLastScroll(cur);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScroll]);

  // Close mobile on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: visible ? 0 : -80, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.25, ease: "easeOut" as const }}
        className="w-full bg-white/90 backdrop-blur-lg shadow-sm fixed top-0 z-50 border-b border-gray-100"
      >
        <div className="container-custom flex items-center justify-between h-16">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2.5">
            <NavLogo />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-1">
            <ServicesDropdown />
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium transition-colors duration-150 ${
                    isActive
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* DESKTOP CTA */}
          <Link href="/contact" className="btn-primary hidden md:block text-sm">
            Get Free Consultation
          </Link>

          {/* HAMBURGER */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden p-2 rounded-xl text-gray-700 hover:bg-gray-100 transition"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/30 z-40 md:hidden"
            />
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="fixed top-0 right-0 h-full w-80 bg-white z-50 shadow-2xl md:hidden flex flex-col"
            >
              <div className="flex items-center justify-between px-6 h-16 border-b">
                <span className="font-extrabold text-lg">
                  Sadino<span className="text-blue-600">Technology</span>
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-xl hover:bg-gray-100"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto p-5 space-y-1">
                {/* Services accordion */}
                <div>
                  <button
                    onClick={() => setMobileServicesOpen((v) => !v)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition ${
                      pathname.startsWith("/services")
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    Services
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden ml-3 mt-1 space-y-0.5"
                      >
                        {services.map((s) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            className={`block px-4 py-2.5 rounded-xl text-sm transition ${
                              pathname === s.href
                                ? "bg-blue-50 text-blue-600"
                                : "text-gray-600 hover:bg-gray-50"
                            }`}
                          >
                            {s.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition ${
                      pathname === link.href
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              <div className="p-5 border-t">
                <Link
                  href="/contact"
                  className="btn-primary block text-center text-sm"
                >
                  Get Free Consultation
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

/* ===== LOGO — image jika ada, fallback ke text ===== */
function NavLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="relative w-8 h-8 shrink-0">
        <Image
          src="/images/logo.png"
          alt="Sadino Technology"
          fill
          className="object-contain"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      </div>
      <span className="text-xl font-extrabold tracking-tight text-gray-900">
        Sadino<span className="text-blue-600">Technology</span>
      </span>
    </div>
  );
}

/* ===== DESKTOP DROPDOWN — pakai state, bukan pure CSS hover ===== */
function ServicesDropdown() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isActive = pathname.startsWith("/services");

  // Pakai delay saat mouse leave supaya tidak langsung hilang
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  };

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={`px-4 py-2 text-sm font-medium flex items-center gap-1 transition-colors duration-150 ${
          isActive
            ? "text-blue-600 border-b-2 border-blue-600"
            : "text-gray-600 hover:text-blue-600"
        }`}
      >
        Services
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={14} />
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.97 }}
            transition={{ duration: 0.15, ease: "easeOut" as const }}
            className="absolute top-full left-0 mt-2 w-56 z-50"
          >
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-2">
              {services.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-4 py-2.5 rounded-xl text-sm transition ${
                    pathname === item.href
                      ? "bg-blue-50 text-blue-600 font-medium"
                      : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
