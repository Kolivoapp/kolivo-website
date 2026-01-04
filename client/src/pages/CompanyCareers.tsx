/**
 * Careers Page
 * Design: Swiss Corporate Modernism
 */

import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import { Link } from "wouter";

export default function CompanyCareers() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 lg:py-32 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/images/enterprise-scale.png" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a2332] via-[#1a2332]/80 to-transparent" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <p className="section-number mb-4">Careers</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Build the Future of Digital Governance
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Join a team of disciplined professionals committed to building 
              systems that last.
            </p>
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="section-number mb-4">Our Culture</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Excellence Through Discipline
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At KOLIVO™, we believe that excellence is not an accident. It is 
                the result of disciplined practice, clear thinking, and unwavering 
                commitment to quality.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We are building a company for the long term. That means we invest 
                in our people, our processes, and our platform with a perspective 
                measured in years, not quarters.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-muted/30 rounded-lg p-6">
                <h3 className="font-display font-semibold text-foreground mb-2">Remote-First</h3>
                <p className="text-sm text-muted-foreground">
                  We believe great work can happen anywhere. Our team is distributed 
                  across North America, with a focus on asynchronous communication 
                  and deep work.
                </p>
              </div>
              <div className="bg-muted/30 rounded-lg p-6">
                <h3 className="font-display font-semibold text-foreground mb-2">Ownership Mentality</h3>
                <p className="text-sm text-muted-foreground">
                  Every team member is expected to take ownership of their domain, 
                  make decisions with confidence, and be accountable for outcomes.
                </p>
              </div>
              <div className="bg-muted/30 rounded-lg p-6">
                <h3 className="font-display font-semibold text-foreground mb-2">Continuous Learning</h3>
                <p className="text-sm text-muted-foreground">
                  We invest in professional development and create space for our 
                  team to grow their skills and expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="section-number mb-4">Open Positions</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Current Opportunities
            </h2>
            <p className="text-lg text-muted-foreground">
              We are always looking for exceptional people. If you don't see a 
              role that fits, reach out anyway.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-8 text-center">
              <p className="text-muted-foreground mb-6">
                We are currently building our team thoughtfully. While we may not 
                have open positions listed at this moment, we are always interested 
                in connecting with exceptional candidates.
              </p>
              <p className="text-muted-foreground mb-8">
                If you believe you would be a strong fit for KOLIVO™, we encourage 
                you to reach out with your background and areas of interest.
              </p>
              <a href="mailto:careers@kolivo.ca">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Mail className="mr-2 h-4 w-4" />
                  careers@kolivo.ca
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-navy text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Not Ready to Apply?
            </h2>
            <p className="text-lg text-white/70 mb-8">
              Learn more about what we're building and how we work.
            </p>
            <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
              <Link href="/company">
                About KOLIVO™
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
