/**
 * KOLIVO™ Header Component
 * Level: Apple / Fortune 500
 * Features: Glass morphism, smooth animations, adaptive dark mode
 */

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { CDN } from "@/lib/cdn";
import { Menu, X, ArrowRight, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitch from "./LanguageSwitch";

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language } = useLanguage();

  // Handle scroll effect
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
      security: "Security & Trust",
      company: "Company",
      contact: "Contact",
      haloId: "HALO ID",
      viewAll: "View all products",
      productsData: [
        { 
          name: "HUB by KOLIVO™", 
          href: "/products/hub", 
          desc: "Simplified colocation management",
          color: "#10B981",
          status: "In development"
        },
        { 
          name: "Nest by KOLIVO™", 
          href: "/products/nest", 
          desc: "Next-gen property management",
          color: "#F59E0B",
          status: "2027"
        },
        { 
          name: "Seed by KOLIVO™", 
          href: "/products/seed", 
          desc: "Community project incubator",
          color: "#14B8A6",
          status: "Planned"
        },
      ],
      solutionsData: [
        { name: "Coliving", href: "/solutions/coliving", desc: "For roommates and shared living" },
        { name: "Property Owners", href: "/solutions/owners", desc: "Manage your shared residences" },
        { name: "Communities", href: "/solutions/communities", desc: "Social impact projects" },
      ]
    },
    fr: {
      products: "Produits",
      solutions: "Solutions",
      security: "Sécurité et Confiance",
      company: "Entreprise",
      contact: "Contact",
      haloId: "HALO ID",
      viewAll: "Voir tous les produits",
      productsData: [
        { 
          name: "HUB by KOLIVO™", 
          href: "/products/hub", 
          desc: "Gestion de colocation simplifiée",
          color: "#10B981",
          status: "En développement"
        },
        { 
          name: "Nest by KOLIVO™", 
          href: "/products/nest", 
          desc: "Gestion immobilière nouvelle génération",
          color: "#F59E0B",
          status: "2027"
        },
        { 
          name: "Seed by KOLIVO™", 
          href: "/products/seed", 
          desc: "Incubateur de projets communautaires",
          color: "#14B8A6",
          status: "Planifié"
        },
      ],
      solutionsData: [
        { name: "Colocation", href: "/solutions/coliving", desc: "Pour les colocataires" },
        { name: "Propriétaires", href: "/solutions/owners", desc: "Gérez vos résidences partagées" },
        { name: "Communautés", href: "/solutions/communities", desc: "Projets d'impact social" },
      ]
    }
  };

  const t = content[language];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled 
          ? "bg-white/90 dark:bg-[#0D1117]/90 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50 shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo - Using local asset with correct path */}
          <Link href="/" className="flex items-center group">
            <img 
              src={scrolled ? CDN.logos.wordmark.navy : CDN.logos.wordmark.white}
              alt="KOLIVO™" 
              className="h-7 lg:h-8 w-auto transition-all duration-300"
              onError={(e) => {
                e.currentTarget.src = '/images/kolivo/KOLIVO_wordmark_original.png';
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="gap-1">
              {/* Products */}
              <NavigationMenuItem>
                <NavigationMenuTrigger 
                  className={cn(
                    "bg-transparent font-medium text-sm transition-colors",
                    scrolled 
                      ? "text-[#172638] dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800" 
                      : "text-white hover:bg-white/10"
                  )}
                >
                  {t.products}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[500px] p-6">
                    <div className="grid gap-4">
                      {t.productsData.map((product) => (
                        <Link
                          key={product.name}
                          href={product.href}
                          className="group flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all"
                        >
                          <div 
                            className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: `${product.color}15` }}
                          >
                            <div 
                              className="w-3 h-3 rounded-full"
                              style={{ backgroundColor: product.color }}
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-[#172638] dark:text-white group-hover:text-[#172638] dark:group-hover:text-white">
                                {product.name}
                              </span>
                              <span 
                                className="text-xs px-2 py-0.5 rounded-full font-medium"
                                style={{ 
                                  backgroundColor: `${product.color}20`,
                                  color: product.color
                                }}
                              >
                                {product.status}
                              </span>
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                              {product.desc}
                            </p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#172638] dark:group-hover:text-white group-hover:translate-x-1 transition-all opacity-0 group-hover:opacity-100" />
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                      <Link 
                        href="/ecosystem" 
                        className="flex items-center gap-2 text-sm font-medium text-[#172638] dark:text-white hover:text-[#EF4444] transition-colors"
                      >
                        {t.viewAll}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Solutions */}
              <NavigationMenuItem>
                <NavigationMenuTrigger 
                  className={cn(
                    "bg-transparent font-medium text-sm transition-colors",
                    scrolled 
                      ? "text-[#172638] dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800" 
                      : "text-white hover:bg-white/10"
                  )}
                >
                  {t.solutions}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[400px] p-6">
                    <div className="grid gap-2">
                      {t.solutionsData.map((solution) => (
                        <Link
                          key={solution.name}
                          href={solution.href}
                          className="group flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all"
                        >
                          <div>
                            <span className="font-semibold text-[#172638] dark:text-white">
                              {solution.name}
                            </span>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                              {solution.desc}
                            </p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#172638] dark:group-hover:text-white group-hover:translate-x-1 transition-all" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Security & Trust */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link 
                    href="/security-trust" 
                    className={cn(
                      "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors",
                      scrolled 
                        ? "text-[#172638] dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800" 
                        : "text-white hover:bg-white/10",
                      location === "/security-trust" && "bg-gray-100 dark:bg-gray-800"
                    )}
                  >
                    {t.security}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Company */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link 
                    href="/company" 
                    className={cn(
                      "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors",
                      scrolled 
                        ? "text-[#172638] dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800" 
                        : "text-white hover:bg-white/10",
                      location === "/company" && "bg-gray-100 dark:bg-gray-800"
                    )}
                  >
                    {t.company}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Contact */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link 
                    href="/contact" 
                    className={cn(
                      "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors",
                      scrolled 
                        ? "text-[#172638] dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800" 
                        : "text-white hover:bg-white/10",
                      location === "/contact" && "bg-gray-100 dark:bg-gray-800"
                    )}
                  >
                    {t.contact}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right Side: Language + HALO ID CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitch scrolled={scrolled} />
            {/* HALO ID CTA - Red accent with glow */}
            <Button 
              asChild 
              className="bg-[#EF4444] hover:bg-[#DC2626] text-white font-semibold rounded-full px-6 shadow-lg hover:shadow-xl hover:shadow-[#EF4444]/20 transition-all duration-300"
            >
              <a href="https://id.halo.kolivo.ca" target="_blank" rel="noopener noreferrer">
                {t.haloId}
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-3">
            <LanguageSwitch scrolled={scrolled} />
            <button
              className={cn(
                "p-2 rounded-lg transition-colors",
                scrolled 
                  ? "text-[#172638] dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800" 
                  : "text-white hover:bg-white/10"
              )}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-gray-200/50 dark:border-gray-800/50 animate-fade-in bg-white dark:bg-[#0D1117]">
            <nav className="flex flex-col gap-1">
              {/* Products Section */}
              <div className="py-3">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-2">
                  {t.products}
                </p>
                {t.productsData.map((product) => (
                  <Link 
                    key={product.name} 
                    href={product.href}
                    className="flex items-center gap-3 py-3 px-2 rounded-lg text-[#172638] dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div 
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: product.color }}
                    />
                    <span className="font-medium">{product.name}</span>
                  </Link>
                ))}
              </div>

              {/* Solutions Section */}
              <div className="py-3 border-t border-gray-100 dark:border-gray-800">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-2">
                  {t.solutions}
                </p>
                {t.solutionsData.map((solution) => (
                  <Link 
                    key={solution.name} 
                    href={solution.href}
                    className="block py-3 px-2 rounded-lg text-[#172638] dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {solution.name}
                  </Link>
                ))}
              </div>

              {/* Other Links */}
              <div className="py-3 border-t border-gray-100 dark:border-gray-800 space-y-1">
                <Link 
                  href="/security-trust" 
                  className="block py-3 px-2 rounded-lg text-[#172638] dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.security}
                </Link>
                <Link 
                  href="/company" 
                  className="block py-3 px-2 rounded-lg text-[#172638] dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.company}
                </Link>
                <Link 
                  href="/contact" 
                  className="block py-3 px-2 rounded-lg text-[#172638] dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.contact}
                </Link>
              </div>

              {/* HALO ID CTA */}
              <div className="pt-4 mt-2 border-t border-gray-100 dark:border-gray-800">
                <Button 
                  asChild 
                  className="w-full bg-[#EF4444] hover:bg-[#DC2626] text-white font-semibold rounded-full shadow-lg"
                >
                  <a 
                    href="https://id.halo.kolivo.ca" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t.haloId}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
