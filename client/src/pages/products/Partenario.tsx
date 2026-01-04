/**
 * PARTENARIO by KOLIVO™ Product Page
 * Design: Swiss Corporate Modernism
 */

import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Handshake, BookOpen, BarChart3 } from "lucide-react";
import { Link } from "wouter";

export default function ProductPartenario() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 lg:py-32 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src="/images/partnership-network.png" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a2332] via-[#1a2332]/80 to-transparent" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <p className="section-number mb-4">Product</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              PARTENARIO by KOLIVO™
            </h1>
            <p className="text-xl text-white/70 leading-relaxed mb-8">
              The dedicated portal for partners who build, deliver, and manage 
              solutions within the KOLIVO™ ecosystem.
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/contact">
                Become a Partner
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
                A Partnership Built on Mutual Success
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                PARTENARIO by KOLIVO™ is the operational hub for our partner ecosystem. 
                It provides the tools, resources, and governance framework for partners 
                to deliver exceptional value to shared clients.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe that strong partnerships are built on transparency, clear 
                expectations, and shared accountability. PARTENARIO embodies these 
                principles in every interaction.
              </p>
            </div>
            <div className="bg-muted/30 rounded-lg p-8">
              <h3 className="font-display text-xl font-semibold mb-6">Partner Capabilities</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Handshake className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Deal Registration</h4>
                    <p className="text-sm text-muted-foreground">Transparent opportunity management and pipeline visibility.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Enablement Resources</h4>
                    <p className="text-sm text-muted-foreground">Training, certification, and technical documentation.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Co-delivery Support</h4>
                    <p className="text-sm text-muted-foreground">Collaborative project management and technical assistance.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Performance Analytics</h4>
                    <p className="text-sm text-muted-foreground">Clear metrics and reporting on partnership health.</p>
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
              Ready to Partner with KOLIVO™?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join our partner ecosystem and help enterprises build their digital future.
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
