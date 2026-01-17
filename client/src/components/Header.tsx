/**
 * KOLIVO™ Header - Liquid Glass Design
 * Clean, minimal, premium navigation
 */

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CDN } from "@/lib/cdn";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
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
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const content = {
    en: {
      products: "Products",
      solutions: "Solutions",
      security: "Trust",
      company: "Company",
      contact: "Contact",
      cta: "Get Started"
    },
    fr: {
      products: "Produits",
      solutions: "Solutions",
      security: "Confiance",
      company: "Entreprise",
      contact: "Contact",
      cta: "Commencer"
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
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled 
            ? "glass-nav py-3" 
            : "bg-transparent py-5"
        )}
      >
        <div className="container">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <img 
                src={CDN.logos.wordmark.white}
                alt="KOLIVO™" 
                className="h-6 lg:h-7 w-auto"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/images/kolivo-logo-white.svg';
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
                    "px-4 py-2 text-sm font-medium rounded-full transition-all duration-200",
                    location === link.href 
                      ? "text-foreground bg-white/10" 
                      : "text-foreground/70 hover:text-foreground hover:bg-white/5"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Side */}
            <div className="hidden lg:flex items-center gap-4">
              <LanguageSwitch />
              <Link href="/contact">
                <Button className="glass-button-primary rounded-full px-6">
                  {t.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg glass"
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
      <div 
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-all duration-300",
          mobileMenuOpen 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-background/80 backdrop-blur-xl"
          onClick={() => setMobileMenuOpen(false)}
        />
        
        {/* Menu Content */}
        <div 
          className={cn(
            "absolute top-20 left-4 right-4 glass-highlight p-6 rounded-2xl transition-all duration-300",
            mobileMenuOpen 
              ? "translate-y-0 opacity-100" 
              : "-translate-y-4 opacity-0"
          )}
        >
          <nav className="space-y-2">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block px-4 py-3 text-lg font-medium rounded-xl transition-colors",
                  location === link.href 
                    ? "text-foreground bg-white/10" 
                    : "text-foreground/70 hover:text-foreground hover:bg-white/5"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
            <LanguageSwitch />
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              <Button className="glass-button-primary rounded-full px-6">
                {t.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
