/**
 * Impact & Community Solutions Page
 * Design: Swiss Corporate Modernism
 */

import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, Target, BarChart3 } from "lucide-react";
import { Link } from "wouter";

export default function SolutionImpact() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 lg:py-32 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/images/partnership-network.png" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a2332] via-[#1a2332]/80 to-transparent" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <p className="section-number mb-4">Solutions</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Impact & Community
            </h1>
            <p className="text-xl text-white/70 leading-relaxed mb-8">
              An operating system for your mission. KOLIVO™ provides the platform 
              for mission-driven organizations to maximize impact, manage communities, 
              and operate with enterprise-grade efficiency.
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/contact">
                Explore Impact Solutions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              </Button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <p className="section-number mb-4">The Challenge</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Mission-Driven Organizations Deserve Enterprise-Grade Tools
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Organizations focused on social impact, community development, and 
              public good face unique operational challenges. They must balance 
              mission delivery with accountability, community engagement with 
              governance, and growth with sustainability. KOLIVO™ provides the 
              platform to manage these tensions with clarity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                Impact Measurement
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Track and report on the outcomes that matter most to your 
                mission and stakeholders.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                Community Management
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Engage, organize, and mobilize your community with tools 
                designed for meaningful connection.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                Program Delivery
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Manage programs, grants, and initiatives with the rigor 
                and transparency your stakeholders expect.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                Stakeholder Reporting
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Generate comprehensive reports for funders, boards, and 
                communities with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Amplify Your Impact?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Connect with our team to explore how KOLIVO™ can serve as the 
              operational backbone for your mission.
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
