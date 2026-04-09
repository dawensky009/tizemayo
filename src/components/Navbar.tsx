"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ShoppingCart, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-black tracking-tighter text-white">TIZE<span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">MAYO</span></span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/shop" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Boutique</Link>
          <Link href="/collections" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Collections 2026</Link>
          <Link href="/about" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">À Propos</Link>
          
          <button className="relative p-2 text-white hover:text-teal-400 transition-colors group">
            <ShoppingCart size={20} />
            <span className="absolute top-0 right-0 w-4 h-4 bg-teal-500 rounded-full text-[10px] flex items-center justify-center font-bold">2</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="md:hidden absolute top-20 left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-6"
        >
          <Link href="/shop" className="text-xl font-medium text-white hover:text-teal-400" onClick={() => setMobileMenuOpen(false)}>Boutique</Link>
          <Link href="/collections" className="text-xl font-medium text-white hover:text-teal-400" onClick={() => setMobileMenuOpen(false)}>Collections 2026</Link>
          <Link href="/about" className="text-xl font-medium text-white hover:text-teal-400" onClick={() => setMobileMenuOpen(false)}>À Propos</Link>
        </motion.div>
      )}
    </motion.nav>
  );
}
