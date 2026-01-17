/**
 * KOLIVO™ Header
 * Style: Institutional / Corporate
 */

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CDN } from "@/lib/cdn";
import { Menu, X, ArrowRight } from "lucide-react";
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
      security: "Trust",
      company: "Company",
      contact: "Contact"
    },
    fr: {
      products: "Produits",
      solutions: "Solutions",
      security: "Confiance",
      company: "Entreprise",
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
          "fixed top-0 left-0 right-0 z-50 transition-all duration-200",
          scrolled ? "nav-header scrolled" : "nav-header"
        )}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <img 
                src={CDN.logos.wordmark.white}
                alt="KOLIVO™" 
                className="h-6 w-auto"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.style.display = 'none';
                }}
              />
              <span className="sr-only">KOLIVO™</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "nav-link",
                    location === link.href && "active"
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
                <Button className="btn-primary text-sm">
                  {t.contact}
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground-secondary hover:text-foreground"
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
            className="absolute inset-0 bg-background/95 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Menu Content */}
          <div className="absolute top-16 left-0 right-0 bg-background-secondary border-b border-border p-4">
            <nav className="space-y-1">
              {navLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "block px-4 py-3 rounded-lg text-base font-medium transition-colors",
                    location === link.href 
                      ? "bg-background-tertiary text-foreground" 
                      : "text-foreground-secondary hover:text-foreground hover:bg-background-tertiary"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
              <LanguageSwitch />
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button className="btn-primary text-sm">
                  {t.contact}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Spacer for fixed header */}
      <div className="h-16" />
    </>
  );
}
