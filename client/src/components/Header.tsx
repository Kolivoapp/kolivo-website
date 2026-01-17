/**
 * KOLIVO™ Header
 * Style: Institutional Light Mode
 * FIXED: No white line gap
 */

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CDN } from "@/lib/cdn";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitch from "./LanguageSwitch";

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const content = {
    en: {
      products: "Products",
      solutions: "Solutions",
      security: "Security",
      company: "About",
      contact: "Contact"
    },
    fr: {
      products: "Produits",
      solutions: "Solutions",
      security: "Sécurité",
      company: "À propos",
      contact: "Contact"
    }
  };

  const t = content[language];

  const navLinks = [
    { label: t.products, href: "/products" },
    { label: t.solutions, href: "/solutions" },
    { label: t.security, href: "/security-trust" },
    { label: t.company, href: "/company" },
  ];

  return (
    <>
      <header 
        className={cn(
          "sticky top-0 z-50 bg-white border-b border-slate-200",
          scrolled && "shadow-sm"
        )}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <img 
                src={CDN.logos.wordmark.navy}
                alt="KOLIVO™" 
                className="h-6 w-auto"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.style.display = 'none';
                }}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                    location === link.href 
                      ? "text-slate-900 bg-slate-100" 
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Side */}
            <div className="hidden lg:flex items-center gap-3">
              <LanguageSwitch />
              <Link href="/contact">
                <Button className="bg-slate-900 hover:bg-slate-800 text-white text-sm px-4 py-2 rounded-lg">
                  {t.contact}
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900 rounded"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/20"
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Menu Content */}
          <div className="absolute top-16 left-0 right-0 bg-white border-b border-slate-200 shadow-lg">
            <div className="container py-4">
              <nav className="space-y-1">
                {navLinks.map((link) => (
                  <Link 
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "block px-4 py-3 rounded-md text-base font-medium transition-colors",
                      location === link.href 
                        ? "bg-slate-100 text-slate-900" 
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-4 pt-4 border-t border-slate-200 flex items-center justify-between">
                <LanguageSwitch />
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="bg-slate-900 hover:bg-slate-800 text-white text-sm px-4 py-2 rounded-lg">
                    {t.contact}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
