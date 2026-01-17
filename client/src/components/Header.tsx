/**
 * KOLIVO™ Header
 * Style: Institutional Light Mode
 * All official products included
 */

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CDN, PRODUCT_COLORS } from "@/lib/cdn";
import { Menu, X, ChevronDown, Users, Shield, Eye, Home, Sprout, Code, KeyRound, Link2, TrendingUp, Lock, Lightbulb } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitch from "./LanguageSwitch";

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language } = useLanguage();
  const productsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (productsRef.current && !productsRef.current.contains(event.target as Node)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const content = {
    en: {
      products: "Products",
      solutions: "Solutions",
      security: "Security",
      company: "About",
      contact: "Contact",
      coreProducts: "Core Products",
      platformProducts: "Platform & Infrastructure",
      productsList: [
        // Core Products
        { name: "KOLIVO™ Hub", desc: "Shared living management", href: "/products/hub", icon: Users, color: PRODUCT_COLORS.hub, status: "Beta", category: "core" },
        { name: "Halo • ID", desc: "Digital identity", href: "/products/halo", icon: Shield, color: PRODUCT_COLORS.halo, status: "Available", category: "core" },
        { name: "KOLIVO™ Nest", desc: "Property management", href: "/products/nest", icon: Home, color: PRODUCT_COLORS.nest, status: "2027", category: "core" },
        { name: "KOLIVO™ Seed", desc: "Community incubator", href: "/products/seed", icon: Sprout, color: PRODUCT_COLORS.seed, status: "Dev", category: "core" },
        // Platform Products
        { name: "KOLIVO™ Lens", desc: "Business optimization", href: "/products/lens", icon: Eye, color: PRODUCT_COLORS.lens, status: "Soon", category: "platform" },
        { name: "KOLIVO™ Atlas", desc: "Investor portal", href: "/products/atlas", icon: TrendingUp, color: PRODUCT_COLORS.atlas, status: "Soon", category: "platform" },
        { name: "KOLIVO™ Studio", desc: "Strategic consulting", href: "/products/studio", icon: Lightbulb, color: PRODUCT_COLORS.studio, status: "Invite", category: "platform" },
        // Infrastructure (hidden from main nav, accessible via direct link)
        { name: "KOLIVO™ Forge", desc: "Development platform", href: "/products/forge", icon: Code, color: PRODUCT_COLORS.forge, status: "Internal", category: "infra" },
        { name: "KOLIVO™ Gate", desc: "Access management", href: "/products/gate", icon: KeyRound, color: PRODUCT_COLORS.gate, status: "Dev", category: "infra" },
        { name: "KOLIVO™ Link", desc: "Integration platform", href: "/products/link", icon: Link2, color: PRODUCT_COLORS.link, status: "Dev", category: "infra" },
        { name: "KOLIVO™ Vault", desc: "Secure storage", href: "/products/vault", icon: Lock, color: PRODUCT_COLORS.vault, status: "Dev", category: "infra" },
      ]
    },
    fr: {
      products: "Produits",
      solutions: "Solutions",
      security: "Sécurité",
      company: "À propos",
      contact: "Contact",
      coreProducts: "Produits principaux",
      platformProducts: "Plateforme & Infrastructure",
      productsList: [
        // Core Products
        { name: "KOLIVO™ Hub", desc: "Gestion de colocation", href: "/products/hub", icon: Users, color: PRODUCT_COLORS.hub, status: "Bêta", category: "core" },
        { name: "Halo • ID", desc: "Identité numérique", href: "/products/halo", icon: Shield, color: PRODUCT_COLORS.halo, status: "Dispo", category: "core" },
        { name: "KOLIVO™ Nest", desc: "Gestion immobilière", href: "/products/nest", icon: Home, color: PRODUCT_COLORS.nest, status: "2027", category: "core" },
        { name: "KOLIVO™ Seed", desc: "Incubateur communautaire", href: "/products/seed", icon: Sprout, color: PRODUCT_COLORS.seed, status: "Dev", category: "core" },
        // Platform Products
        { name: "KOLIVO™ Lens", desc: "Optimisation d'affaires", href: "/products/lens", icon: Eye, color: PRODUCT_COLORS.lens, status: "Bientôt", category: "platform" },
        { name: "KOLIVO™ Atlas", desc: "Portail investisseur", href: "/products/atlas", icon: TrendingUp, color: PRODUCT_COLORS.atlas, status: "Bientôt", category: "platform" },
        { name: "KOLIVO™ Studio", desc: "Conseil stratégique", href: "/products/studio", icon: Lightbulb, color: PRODUCT_COLORS.studio, status: "Invitation", category: "platform" },
        // Infrastructure
        { name: "KOLIVO™ Forge", desc: "Plateforme de développement", href: "/products/forge", icon: Code, color: PRODUCT_COLORS.forge, status: "Interne", category: "infra" },
        { name: "KOLIVO™ Gate", desc: "Gestion des accès", href: "/products/gate", icon: KeyRound, color: PRODUCT_COLORS.gate, status: "Dev", category: "infra" },
        { name: "KOLIVO™ Link", desc: "Plateforme d'intégration", href: "/products/link", icon: Link2, color: PRODUCT_COLORS.link, status: "Dev", category: "infra" },
        { name: "KOLIVO™ Vault", desc: "Stockage sécurisé", href: "/products/vault", icon: Lock, color: PRODUCT_COLORS.vault, status: "Dev", category: "infra" },
      ]
    }
  };

  const t = content[language];
  
  // Filter products for navigation (exclude internal infra)
  const navProducts = t.productsList.filter(p => p.category !== 'infra');
  const coreProducts = t.productsList.filter(p => p.category === 'core');
  const platformProducts = t.productsList.filter(p => p.category === 'platform');

  const navLinks = [
    { label: t.solutions, href: "/solutions/coliving" },
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
              {/* Products Dropdown */}
              <div className="relative" ref={productsRef}>
                <button
                  onClick={() => setProductsOpen(!productsOpen)}
                  className={cn(
                    "flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors",
                    productsOpen || location.startsWith('/products')
                      ? "text-slate-900 bg-slate-100" 
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  )}
                >
                  {t.products}
                  <ChevronDown className={cn("h-4 w-4 transition-transform", productsOpen && "rotate-180")} />
                </button>

                {productsOpen && (
                  <div className="absolute top-full left-0 mt-1 w-80 bg-white border border-slate-200 rounded-lg shadow-lg py-2">
                    {/* Core Products */}
                    <div className="px-4 py-2">
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{t.coreProducts}</p>
                    </div>
                    {coreProducts.map((product) => (
                      <Link
                        key={product.href}
                        href={product.href}
                        onClick={() => setProductsOpen(false)}
                        className="flex items-center gap-3 px-4 py-2 hover:bg-slate-50 transition-colors"
                      >
                        <div 
                          className="w-8 h-8 rounded-md flex items-center justify-center"
                          style={{ backgroundColor: `${product.color}15` }}
                        >
                          <product.icon className="w-4 h-4" style={{ color: product.color }} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-slate-900">{product.name}</span>
                            <span className="text-xs px-1.5 py-0.5 rounded bg-slate-100 text-slate-500">
                              {product.status}
                            </span>
                          </div>
                          <span className="text-xs text-slate-500">{product.desc}</span>
                        </div>
                      </Link>
                    ))}
                    
                    {/* Platform Products */}
                    <div className="px-4 py-2 mt-2 border-t border-slate-100">
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{t.platformProducts}</p>
                    </div>
                    {platformProducts.map((product) => (
                      <Link
                        key={product.href}
                        href={product.href}
                        onClick={() => setProductsOpen(false)}
                        className="flex items-center gap-3 px-4 py-2 hover:bg-slate-50 transition-colors"
                      >
                        <div 
                          className="w-8 h-8 rounded-md flex items-center justify-center"
                          style={{ backgroundColor: `${product.color}15` }}
                        >
                          <product.icon className="w-4 h-4" style={{ color: product.color }} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-slate-900">{product.name}</span>
                            <span className="text-xs px-1.5 py-0.5 rounded bg-slate-100 text-slate-500">
                              {product.status}
                            </span>
                          </div>
                          <span className="text-xs text-slate-500">{product.desc}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {navLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                    location === link.href || location.startsWith(link.href.split('/').slice(0, 2).join('/'))
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
          <div className="absolute top-16 left-0 right-0 bg-white border-b border-slate-200 shadow-lg max-h-[80vh] overflow-y-auto">
            <div className="container py-4">
              {/* Core Products Section */}
              <div className="mb-4">
                <p className="px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {t.coreProducts}
                </p>
                <nav className="space-y-1">
                  {coreProducts.map((product) => (
                    <Link 
                      key={product.href}
                      href={product.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-slate-50 transition-colors"
                    >
                      <div 
                        className="w-8 h-8 rounded-md flex items-center justify-center"
                        style={{ backgroundColor: `${product.color}15` }}
                      >
                        <product.icon className="w-4 h-4" style={{ color: product.color }} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-slate-900">{product.name}</span>
                          <span className="text-xs px-1.5 py-0.5 rounded bg-slate-100 text-slate-500">
                            {product.status}
                          </span>
                        </div>
                        <span className="text-xs text-slate-500">{product.desc}</span>
                      </div>
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Platform Products Section */}
              <div className="mb-4 pt-4 border-t border-slate-200">
                <p className="px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {t.platformProducts}
                </p>
                <nav className="space-y-1">
                  {platformProducts.map((product) => (
                    <Link 
                      key={product.href}
                      href={product.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-slate-50 transition-colors"
                    >
                      <div 
                        className="w-8 h-8 rounded-md flex items-center justify-center"
                        style={{ backgroundColor: `${product.color}15` }}
                      >
                        <product.icon className="w-4 h-4" style={{ color: product.color }} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-slate-900">{product.name}</span>
                          <span className="text-xs px-1.5 py-0.5 rounded bg-slate-100 text-slate-500">
                            {product.status}
                          </span>
                        </div>
                        <span className="text-xs text-slate-500">{product.desc}</span>
                      </div>
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Other Links */}
              <div className="border-t border-slate-200 pt-4">
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
              </div>

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
