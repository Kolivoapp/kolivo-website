/**
 * KOLIVO™ Home Page
 * Design: Swiss Corporate Modernism
 * Bilingual support (FR/EN)
 */

import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Layers, Lock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-navy overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/images/hero-abstract.png" 
            alt="" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/80" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-primary text-sm font-medium uppercase tracking-wider mb-6"
            >
              {t("hero.tagline")}
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              {t("hero.title1")}{" "}
              <span className="text-primary">{t("hero.title2")}</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-white/70 leading-relaxed mb-8 max-w-2xl"
            >
              {t("hero.description")}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium gap-2">
                <Link href="/contact">
                  {t("hero.cta.primary")} <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 font-medium">
                <Link href="/products/hub">
                  {t("hero.cta.secondary")}
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <p className="text-primary text-sm font-medium uppercase tracking-wider mb-4">
              {t("ecosystem.tagline")}
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {t("ecosystem.title")}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("ecosystem.description")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: t("products.hub.title"), desc: t("products.hub.desc"), href: "/products/hub", img: "/images/platform-hub.png" },
              { title: t("products.studio.title"), desc: t("products.studio.desc"), href: "/products/studio-plus", img: "/images/enterprise-scale.png" },
              { title: t("products.guardo.title"), desc: t("products.guardo.desc"), href: "/products/guardo", img: "/images/security-trust.png" },
              { title: t("products.partenario.title"), desc: t("products.partenario.desc"), href: "/products/partenario", img: "/images/partnership-network.png" },
            ].map((product, index) => (
              <Link key={product.title} href={product.href}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={product.img} 
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {product.desc}
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Capabilities */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <p className="text-primary text-sm font-medium uppercase tracking-wider mb-4">
              {t("platform.tagline")}
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {t("platform.title")}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("platform.description")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: Shield, title: t("platform.governance.title"), desc: t("platform.governance.desc") },
              { icon: Lock, title: t("platform.security.title"), desc: t("platform.security.desc") },
              { icon: Layers, title: t("platform.integration.title"), desc: t("platform.integration.desc") },
              { icon: Zap, title: t("platform.scale.title"), desc: t("platform.scale.desc") },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6 p-6 bg-card border border-border rounded-lg"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 lg:py-32 bg-navy text-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary text-sm font-medium uppercase tracking-wider mb-4">
                {t("trust.tagline")}
              </p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                {t("trust.title")}
              </h2>
              <p className="text-lg text-white/70 leading-relaxed mb-8">
                {t("trust.description")}
              </p>
              <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/10 font-medium gap-2">
                <Link href="/security-trust">
                  {t("trust.cta")} <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src="/images/security-trust.png" 
                alt="Security"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {t("cta.title")}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {t("cta.description")}
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium gap-2">
              <Link href="/contact">
                {t("cta.button")} <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
