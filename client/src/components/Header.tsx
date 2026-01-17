/**
 * KOLIVO™ Header
 * Style: Institutional Light Mode
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
          "site-header",
          scrolled && "scrolled"
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
                <Button className="btn btn-primary">
                  {t.contact}
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground-secondary hover:text-foreground rounded"
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
          <div className="absolute top-16 left-0 right-0 bg-background border-b border-border shadow-lg">
            <div className="container py-4">
              <nav className="space-y-1">
                {navLinks.map((link) => (
                  <Link 
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "block px-4 py-3 rounded text-base font-medium transition-colors",
                      location === link.href 
                        ? "bg-background-secondary text-foreground" 
                        : "text-foreground-secondary hover:text-foreground hover:bg-background-secondary"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                <LanguageSwitch />
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="btn btn-primary">
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
