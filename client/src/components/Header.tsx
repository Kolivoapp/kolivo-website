/**
 * KOLIVO™ Header Component
 * Design: Brand Aligned 2026 - Navy Foundation
 * Bilingual support (FR/EN)
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
import { Menu, X, ExternalLink } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitch from "./LanguageSwitch";

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, language } = useLanguage();

  // Updated products - removed GUARDO, added consumer-focused products
  const products = [
    { 
      title: "HUB by KOLIVO™", 
      href: "/products/hub", 
      description: language === 'fr' ? "Gestion de colocation simplifiée" : "Simplified colocation management",
      color: "#10b981"
    },
    { 
      title: "Nest by KOLIVO™", 
      href: "/products/nest", 
      description: language === 'fr' ? "Gestion immobilière nouvelle génération" : "Next-gen property management",
      color: "#f59e0b"
    },
    { 
      title: "Seed by KOLIVO™", 
      href: "/products/seed", 
      description: language === 'fr' ? "Incubateur de projets communautaires" : "Community project incubator",
      color: "#14b8a6"
    },
  ];

  const solutions = [
    { 
      title: language === 'fr' ? "Colocation" : "Coliving", 
      href: "/solutions/coliving", 
      description: language === 'fr' ? "Pour les colocataires" : "For roommates"
    },
    { 
      title: language === 'fr' ? "Propriétaires" : "Property Owners", 
      href: "/solutions/owners", 
      description: language === 'fr' ? "Gérez vos résidences partagées" : "Manage your shared residences"
    },
    { 
      title: language === 'fr' ? "Communautés" : "Communities", 
      href: "/solutions/communities", 
      description: language === 'fr' ? "Projets d'impact social" : "Social impact projects"
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo - CDN */}
          <Link href="/" className="flex items-center">
            <img 
              src="https://cdn.groupekolivo.com/logos/kolivo-wordmark-navy-tm.svg" 
              alt="KOLIVO™" 
              className="h-8 w-auto"
              onError={(e) => {
                // Fallback to local
                (e.target as HTMLImageElement).src = "/images/kolivo-logo.png";
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="gap-1">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-gray-50 text-[#172638] font-medium">
                  {t("nav.products")}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1">
                    {products.map((product) => (
                      <ListItem 
                        key={product.title} 
                        title={product.title} 
                        href={product.href}
                        color={product.color}
                      >
                        {product.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-gray-50 text-[#172638] font-medium">
                  {t("nav.solutions")}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1">
                    {solutions.map((solution) => (
                      <ListItem key={solution.title} title={solution.title} href={solution.href}>
                        {solution.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/security-trust" className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-[#172638] transition-colors hover:bg-gray-50 focus:bg-gray-50 focus:outline-none",
                    location === "/security-trust" && "bg-gray-50"
                  )}>
                    {t("nav.security")}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/company" className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-[#172638] transition-colors hover:bg-gray-50 focus:bg-gray-50 focus:outline-none",
                    location === "/company" && "bg-gray-50"
                  )}>
                    {t("nav.company")}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/contact" className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-[#172638] transition-colors hover:bg-gray-50 focus:bg-gray-50 focus:outline-none",
                    location === "/contact" && "bg-gray-50"
                  )}>
                    {t("nav.contact")}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right Side: Language + HALO ID CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitch />
            {/* HALO ID CTA - Red accent */}
            <Button 
              asChild 
              className="bg-[#EF4444] hover:bg-[#DC2626] text-white font-medium rounded-full px-6"
            >
              <a href="https://id.halo.kolivo.ca" target="_blank" rel="noopener noreferrer">
                {language === 'fr' ? 'HALO ID' : 'HALO ID'}
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <LanguageSwitch />
            <button
              className="p-2 text-[#172638]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100 animate-fade-in">
            <nav className="flex flex-col gap-2">
              <div className="py-2">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">{t("nav.products")}</p>
                {products.map((product) => (
                  <Link 
                    key={product.title} 
                    href={product.href}
                    className="block py-2 text-sm text-[#172638] hover:text-[#EF4444] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {product.title}
                  </Link>
                ))}
              </div>
              <div className="py-2">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">{t("nav.solutions")}</p>
                {solutions.map((solution) => (
                  <Link 
                    key={solution.title} 
                    href={solution.href}
                    className="block py-2 text-sm text-[#172638] hover:text-[#EF4444] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {solution.title}
                  </Link>
                ))}
              </div>
              <Link 
                href="/security-trust" 
                className="py-2 text-sm text-[#172638] hover:text-[#EF4444] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("nav.security")}
              </Link>
              <Link 
                href="/company" 
                className="py-2 text-sm text-[#172638] hover:text-[#EF4444] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("nav.company")}
              </Link>
              <Link 
                href="/contact" 
                className="py-2 text-sm text-[#172638] hover:text-[#EF4444] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("nav.contact")}
              </Link>
              <div className="pt-4">
                <Button 
                  asChild 
                  className="w-full bg-[#EF4444] hover:bg-[#DC2626] text-white font-medium rounded-full"
                >
                  <a 
                    href="https://id.halo.kolivo.ca" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    HALO ID
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

const ListItem = ({ 
  className, 
  title, 
  children, 
  href,
  color 
}: { 
  className?: string; 
  title: string; 
  children: React.ReactNode; 
  href: string;
  color?: string;
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-50 focus:bg-gray-50",
            className
          )}
        >
          <div className="flex items-center gap-2">
            {color && (
              <div 
                className="w-2 h-2 rounded-full" 
                style={{ backgroundColor: color }}
              />
            )}
            <div className="text-sm font-medium leading-none text-[#172638]">{title}</div>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-gray-500 mt-1 ml-4">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};
