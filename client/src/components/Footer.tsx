/**
 * KOLIVO™ Footer Component
 * Level: Apple / Fortune 500
 * Features: Premium design, product colors, HALO ID integration
 */

import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { ExternalLink, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { CDN } from "@/lib/cdn";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();

  const content = {
    en: {
      description: "Building the infrastructure for shared living. Technology that brings people together, responsibly.",
      products: "Products",
      solutions: "Solutions",
      company: "Company",
      legal: "Legal",
      identity: "Identity",
      about: "About KOLIVO™",
      careers: "Careers",
      security: "Security & Trust",
      contact: "Contact",
      privacy: "Privacy Policy",
      terms: "Terms of Use",
      cookies: "Cookie Policy",
      copyright: `© ${currentYear} KOLIVO™ Technologies Inc. All rights reserved.`,
      tagline: "Shared Living, Simplified",
      haloPortal: "HALO ID Portal",
      coliving: "Coliving",
      owners: "Property Owners",
      communities: "Communities",
      ecosystem: "Ecosystem",
      headquarters: "Headquarters",
      getInTouch: "Get in Touch"
    },
    fr: {
      description: "Construire l'infrastructure de la vie partagée. La technologie qui rassemble les gens, de manière responsable.",
      products: "Produits",
      solutions: "Solutions",
      company: "Entreprise",
      legal: "Légal",
      identity: "Identité",
      about: "À propos de KOLIVO™",
      careers: "Carrières",
      security: "Sécurité et Confiance",
      contact: "Contact",
      privacy: "Politique de confidentialité",
      terms: "Conditions d'utilisation",
      cookies: "Politique des témoins",
      copyright: `© ${currentYear} KOLIVO™ Technologies Inc. Tous droits réservés.`,
      tagline: "La colocation, simplifiée",
      haloPortal: "Portail HALO ID",
      coliving: "Colocation",
      owners: "Propriétaires",
      communities: "Communautés",
      ecosystem: "Écosystème",
      headquarters: "Siège social",
      getInTouch: "Nous contacter"
    }
  };

  const t = content[language];

  const products = [
    { name: "HUB by KOLIVO™", href: "/products/hub", color: "#10B981" },
    { name: "Nest by KOLIVO™", href: "/products/nest", color: "#F59E0B" },
    { name: "Seed by KOLIVO™", href: "/products/seed", color: "#14B8A6" },
  ];

  const solutions = [
    { name: t.coliving, href: "/solutions/coliving" },
    { name: t.owners, href: "/solutions/owners" },
    { name: t.communities, href: "/solutions/communities" },
  ];

  const company = [
    { name: t.about, href: "/company" },
    { name: t.careers, href: "/company/careers" },
    { name: t.security, href: "/security-trust" },
    { name: t.contact, href: "/contact" },
    { name: t.ecosystem, href: "/ecosystem" },
  ];

  const legal = [
    { name: t.privacy, href: "/legal/privacy" },
    { name: t.terms, href: "/legal/terms" },
    { name: t.cookies, href: "/legal/cookies" },
  ];

  return (
    <footer className="bg-[#172638] text-white relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#172638] via-[#1e3a5f]/30 to-[#172638] pointer-events-none" />
      
      <div className="container relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-24">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
            {/* Brand Column - Spans 2 columns on large screens */}
            <div className="col-span-2 md:col-span-3 lg:col-span-2 mb-8 lg:mb-0">
              <Link href="/" className="inline-block mb-6">
                <img 
                  src={CDN.logos.wordmark.white}
                  alt="KOLIVO™" 
                  className="h-8 w-auto"
                  onError={(e) => {
                    e.currentTarget.src = '/images/kolivo/KOLIVO_wordmark_full-white.png';
                  }}
                />
              </Link>
              <p className="text-white/60 leading-relaxed max-w-sm mb-8 text-sm">
                {t.description}
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-white/40 mt-1 flex-shrink-0" />
                  <div className="text-sm text-white/60">
                    <p className="font-medium text-white/80">{t.headquarters}</p>
                    <p>Tour de la Bourse - Place Victoria</p>
                    <p>800, rue du Square-Victoria, Suite 2624</p>
                    <p>Montréal (Québec) H3C 0B4</p>
                  </div>
                </div>
                <a 
                  href="mailto:contact@kolivo.ca" 
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors group"
                >
                  <Mail className="w-4 h-4 text-white/40 group-hover:text-white/60" />
                  contact@kolivo.ca
                </a>
              </div>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-semibold text-xs uppercase tracking-wider text-white/40 mb-5">
                {t.products}
              </h4>
              <ul className="space-y-3">
                {products.map((product) => (
                  <li key={product.name}>
                    <Link 
                      href={product.href}
                      className="group flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                    >
                      <div 
                        className="w-1.5 h-1.5 rounded-full transition-transform group-hover:scale-125" 
                        style={{ backgroundColor: product.color }}
                      />
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h4 className="font-semibold text-xs uppercase tracking-wider text-white/40 mb-5">
                {t.solutions}
              </h4>
              <ul className="space-y-3">
                {solutions.map((solution) => (
                  <li key={solution.name}>
                    <Link 
                      href={solution.href}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {solution.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-xs uppercase tracking-wider text-white/40 mb-5">
                {t.company}
              </h4>
              <ul className="space-y-3">
                {company.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Identity & Legal */}
            <div>
              <h4 className="font-semibold text-xs uppercase tracking-wider text-white/40 mb-5">
                {t.identity}
              </h4>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://id.halo.kolivo.ca"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 text-sm font-medium text-[#EF4444] hover:text-[#EF4444]/80 transition-colors"
                  >
                    {t.haloPortal}
                    <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </li>
              </ul>
              
              <h4 className="font-semibold text-xs uppercase tracking-wider text-white/40 mb-5 mt-8">
                {t.legal}
              </h4>
              <ul className="space-y-3">
                {legal.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <p className="text-sm text-white/40">
                {t.copyright}
              </p>
              <span className="hidden md:block text-white/20">|</span>
              <span className="text-xs text-white/30 uppercase tracking-wider">
                {t.tagline}
              </span>
            </div>
            
            {/* Corporate Link */}
            <a 
              href="https://corporate.kolivo.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors"
            >
              KOLIVO™ Technologies Inc.
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
