import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Factory, Globe2, Users, ChevronRight, ShieldCheck, Zap, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageLayout } from "@/components/layout/PageLayout";
import { SectionHeader } from "@/components/ui/SectionHeader";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 }
};

export default function Home() {
  return (
    <PageLayout>
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center bg-foreground overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={`${import.meta.env.BASE_URL}images/hero-bg.png`} 
            alt="Advanced Manufacturing Facility" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground via-transparent to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm font-semibold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                ISO 9001:2015 Certified
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white font-display leading-[1.1] mb-6">
                Advanced Composites for a <span className="text-primary">Stronger World</span>
              </h1>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
                India's premier FRP manufacturer. Supplying state-of-the-art Pultrusion, Custom Moulding, and Grating solutions globally since 2017. 
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/products">
                  <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg font-semibold shadow-lg shadow-primary/30">
                    Explore Products
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg font-semibold border-2 border-white/20 text-white hover:bg-white hover:text-foreground">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-primary text-primary-foreground py-12 relative z-20 -mt-8 mx-4 sm:mx-8 lg:mx-auto max-w-7xl rounded-2xl shadow-xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8">
          {[
            { icon: Factory, value: "400,000", label: "Sqft Facility" },
            { icon: Zap, value: "20+", label: "Pultrusion Lines" },
            { icon: Globe2, value: "95%", label: "Global Export" },
            { icon: Users, value: "150+", label: "Professionals" },
          ].map((stat, i) => (
            <motion.div 
              key={i} 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <stat.icon className="w-8 h-8 mx-auto mb-3 opacity-80" />
              <div className="text-3xl md:text-4xl font-bold font-display mb-1">{stat.value}</div>
              <div className="text-primary-foreground/80 font-medium text-sm md:text-base uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABOUT INTRO */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <SectionHeader 
                title="Engineering the Future of Materials" 
                align="left"
              />
              <div className="prose prose-lg text-muted-foreground">
                <p>
                  Established in 2017 in the Composites Hub of India—Savli, Vadodara—Graphene Composites LLP has rapidly grown into a globally recognized leader in Fiber Reinforced Plastics (FRP).
                </p>
                <p>
                  Our motto, <strong className="text-primary italic">"You Define, We Deliver,"</strong> drives our commitment to producing high-performance, tailor-made solutions. With a sprawling 400,000 sqft facility and fully automated systems, we ensure unmatched precision, exporting 95% of our products to the USA and Europe.
                </p>
                <ul className="space-y-4 mt-8 list-none pl-0">
                  {["Pultruded Profiles", "Custom Infusion & Moulding", "Molded FRP Grating"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                      <CheckCircle2 className="text-primary w-6 h-6 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  <Link href="/about">
                    <Button variant="outline" className="group">
                      Read Our Story
                      <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute inset-0 bg-primary/10 translate-x-4 translate-y-4 rounded-2xl -z-10" />
              <img 
                src={`${import.meta.env.BASE_URL}images/pultrusion.png`}
                alt="Advanced Pultrusion Process"
                className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs border border-border">
                <ShieldCheck className="w-10 h-10 text-primary mb-3" />
                <h4 className="font-bold text-foreground mb-1">3-Stage Quality Check</h4>
                <p className="text-sm text-muted-foreground">Every piece is scientifically inspected before dispatch.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PRODUCTS PREVIEW */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Our Product Portfolio" 
            subtitle="Precision-engineered composite solutions for demanding environments."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Pultruded Profiles",
                desc: "20 automated lines producing standard and custom shapes (I-Beams, Channels, Angles) for structural applications.",
                link: "/products#pultrusion"
              },
              {
                title: "Custom Moulding",
                desc: "Specialized in Nacelle Covers for Wind Energy using Infusion, Hand Lay-up, and Vacuum Bagging techniques.",
                link: "/products#moulding"
              },
              {
                title: "Molded FRP Grating",
                desc: "High-strength, corrosion-resistant grating panels available in various resins, colors, and surface finishes.",
                link: "/products#grating"
              }
            ].map((prod, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <Card className="h-full group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-border/50 overflow-hidden bg-white">
                  <div className="h-2 w-full bg-gray-200 group-hover:bg-primary transition-colors" />
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold font-display mb-4 text-foreground">{prod.title}</h3>
                    <p className="text-muted-foreground mb-8 leading-relaxed">
                      {prod.desc}
                    </p>
                    <Link href={prod.link}>
                      <span className="text-primary font-semibold flex items-center hover:text-primary/80 transition-colors cursor-pointer">
                        View Details <ArrowRight className="ml-2 w-4 h-4" />
                      </span>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY FRP VS STEEL */}
      <section className="py-24 bg-foreground text-white clip-path-slant pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <SectionHeader 
            title="The Advantage of FRP" 
            subtitle="Why modern industries are replacing traditional steel with Fiber Reinforced Plastics."
            light
          />

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-white/20">
                  <th className="py-4 px-6 font-display text-xl text-gray-400 font-normal">Property</th>
                  <th className="py-4 px-6 font-display text-2xl text-primary w-2/5">FRP (Composites)</th>
                  <th className="py-4 px-6 font-display text-xl text-gray-400 font-normal w-2/5">Steel</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-lg">
                {[
                  { prop: "Weight", frp: "60-80% Lighter", steel: "Heavy & Hard to handle" },
                  { prop: "Corrosion", frp: "Excellent Resistance", steel: "Rusts, requires coating" },
                  { prop: "Conductivity", frp: "Non-Conductive (Safe)", steel: "Highly Conductive" },
                  { prop: "Maintenance", frp: "Virtually Zero", steel: "High (Repainting/Repair)" },
                  { prop: "Lifespan", frp: "50+ Years", steel: "Shorter in harsh environments" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors">
                    <td className="py-5 px-6 font-medium text-gray-300">{row.prop}</td>
                    <td className="py-5 px-6 font-semibold text-white flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" /> {row.frp}
                    </td>
                    <td className="py-5 px-6 text-gray-500 flex items-center gap-2">
                      <X className="w-5 h-5" /> {row.steel}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">Looking for a Reliable Manufacturing Partner?</h2>
          <p className="text-xl opacity-90 mb-10">
            We offer contract manufacturing with complete transparency, traceability, and assured timelines for global partners.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contract-manufacturing">
              <Button size="lg" variant="secondary" className="h-14 px-8 text-lg font-bold text-primary">
                Learn About Partnering
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-bold border-white/30 hover:bg-white/10 text-white">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
