/**
 * Studio+ by KOLIVO™ Product Page
 * Design: Swiss Corporate Modernism
 */

import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Target, Users, Lightbulb } from "lucide-react";
import { Link } from "wouter";

export default function ProductStudioPlus() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 lg:py-32 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src="/images/enterprise-scale.png" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a2332] via-[#1a2332]/80 to-transparent" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <p className="section-number mb-4">Product</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Studio+ by KOLIVO™
            </h1>
            <p className="text-xl text-white/70 leading-relaxed mb-8">
              Our dedicated consulting and delivery practice for enterprises 
              undertaking complex, high-stakes digital transformation initiatives.
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/contact">
                Engage Studio+
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              </Button>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-number mb-4">Overview</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Strategic Consulting, Disciplined Delivery
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Studio+ by KOLIVO™ is not a traditional consulting practice. It is a 
                strategic delivery arm that combines deep platform expertise with 
                rigorous execution methodology.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We engage with enterprises at the highest level to design, architect, 
                and deliver transformational initiatives that leverage the full power 
                of the KOLIVO™ ecosystem.
              </p>
            </div>
            <div className="bg-muted/30 rounded-lg p-8">
              <h3 className="font-display text-xl font-semibold mb-6">Engagement Model</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Strategic Advisory</h4>
                    <p className="text-sm text-muted-foreground">Executive-level guidance on digital strategy and ecosystem design.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Solution Architecture</h4>
                    <p className="text-sm text-muted-foreground">Technical design and architecture for complex implementations.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Managed Delivery</h4>
                    <p className="text-sm text-muted-foreground">End-to-end project delivery with dedicated Studio+ teams.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Enablement & Training</h4>
                    <p className="text-sm text-muted-foreground">Knowledge transfer and capability building for your teams.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready for Strategic Partnership?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Engage Studio+ by KOLIVO™ for your most critical digital initiatives.
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/contact">
                Connect with KOLIVO™
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
