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
      <section className="relative min-h-[90vh] flex items-center bg-[#1a1c1e] overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={`${import.meta.env.BASE_URL}images/products/image11.jpeg`}
            alt="Graphene Composites Manufacturing Facility"
            className="w-full h-full object-cover opacity-30 grayscale contrast-125 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1c1e] via-[#1a1c1e]/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c1e] via-transparent to-transparent" />
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
              <div className="mb-6">
                <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm block mb-4">
                  You define, we deliver
                </span>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white font-display leading-[1.1]">
                  Advanced Composites for a <span className="text-primary">Stronger World</span>
                </h1>
              </div>
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
                src={`${import.meta.env.BASE_URL}images/products/image13.jpeg`}
                alt="Graphene Composites LLP — Savli Facility"
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
                desc: "20 automated lines producing standard and custom shapes (I-Beams, Channels, Angles) for structural and cooling tower applications.",
                link: "/products#pultrusion",
                img: `${import.meta.env.BASE_URL}images/products/image10.jpeg`,
                imgAlt: "Pultruded FRP square tube profiles"
              },
              {
                title: "Custom Moulding",
                desc: "Specialized in Nacelle Covers for Wind Energy using Infusion, Hand Lay-up, and Vacuum Bagging techniques.",
                link: "/products#moulding",
                img: `${import.meta.env.BASE_URL}images/products/image6.jpeg`,
                imgAlt: "FRP wind turbine nacelle covers"
              },
              {
                title: "Molded FRP Grating",
                desc: "High-strength, corrosion-resistant grating panels in various resins, colors, mesh sizes, and surface finishes.",
                link: "/products#grating",
                img: `${import.meta.env.BASE_URL}images/products/image2.jpeg`,
                imgAlt: "Colorful FRP molded grating panels"
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
                  <div className="relative h-52 overflow-hidden">
                    <img src={prod.img} alt={prod.imgAlt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold font-display mb-3 text-foreground">{prod.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                      {prod.desc}
                    </p>
                    <Link href={prod.link}>
                      <span className="text-primary font-semibold flex items-center hover:text-primary/80 transition-colors cursor-pointer text-sm">
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





// V-2

// import { useState } from "react";
// import { Link } from "wouter";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowRight, Package, Settings, Grid3X3, Handshake, CheckCircle2, Clock, Globe2, ShieldCheck } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { PageLayout } from "@/components/layout/PageLayout";

// const BASE = import.meta.env.BASE_URL;

// type NeedId = "profiles" | "moulding" | "grating" | "contract";

// const NEEDS: { id: NeedId; icon: typeof Package; title: string; subtitle: string }[] = [
//   { id: "profiles", icon: Package, title: "Buy Standard Profiles", subtitle: "I-beams, channels, angles, tubes" },
//   { id: "moulding", icon: Settings, title: "Commission Custom Parts", subtitle: "Nacelle covers, complex shapes" },
//   { id: "grating", icon: Grid3X3, title: "Source FRP Grating", subtitle: "Walkways, platforms, covers" },
//   { id: "contract", icon: Handshake, title: "Contract Manufacturing", subtitle: "You spec, we manufacture" },
// ];

// const CONTENT: Record<NeedId, {
//   heading: string; desc: string; img: string;
//   specs: string[]; cta: string; ctaLink: string;
//   timeline: string; minOrder: string;
// }> = {
//   profiles: {
//     heading: "Pultruded FRP Profiles",
//     desc: "20 automated pultrusion lines producing structural profiles to your exact specifications. Standard catalog available — custom sections in 4–6 weeks.",
//     img: `${BASE}images/products/image10.jpeg`,
//     specs: ["I-Beams, Channels, Angles, Tubes, Rods", "Standard & custom cross-sections", "Resin: Polyester, Vinylester, Epoxy", "Colors: Natural, gray, green, custom", "Tolerances: ±0.5mm standard"],
//     cta: "View Pultruded Profiles", ctaLink: "/products#pultrusion",
//     timeline: "2–6 weeks lead time", minOrder: "500 kg minimum",
//   },
//   moulding: {
//     heading: "Custom Moulded FRP Parts",
//     desc: "Infusion, hand lay-up, and vacuum bagging for large and complex shapes. We work from your CAD files. Nacelle covers are our flagship product.",
//     img: `${BASE}images/products/image6.jpeg`,
//     specs: ["Parts up to 6m × 3m dimensions", "Process: Infusion / Hand Lay-up / Vacuum Bag", "Tooling from your CAD or ours", "Wind, marine, industrial applications", "Third-party inspection supported"],
//     cta: "View Custom Moulding", ctaLink: "/products#moulding",
//     timeline: "Sample in 4–8 weeks", minOrder: "Project-based pricing",
//   },
//   grating: {
//     heading: "Molded FRP Grating",
//     desc: "High-strength, anti-slip grating panels in various mesh sizes, resins, and surface finishes. In stock for standard sizes — custom panels in 2–3 weeks.",
//     img: `${BASE}images/products/image2.jpeg`,
//     specs: ["Mesh: 38×38mm, 25×25mm, custom", "Panel sizes: 1000×4000mm standard", "Surface: Gritted / Concave / Smooth top", "Resins: ISO, DCPD, Vinylester, Phenolic", "Load ratings per ASTM E985 available"],
//     cta: "View FRP Grating", ctaLink: "/products#grating",
//     timeline: "In stock / 2–3 wk custom", minOrder: "10 panels minimum",
//   },
//   contract: {
//     heading: "Contract Manufacturing",
//     desc: "End-to-end manufacturing partnership. You provide the spec — we handle raw material sourcing, production, quality control, and export logistics.",
//     img: `${BASE}images/products/image11.jpeg`,
//     specs: ["Dedicated production capacity allocation", "Full quality traceability per piece", "Third-party inspection support", "Export documentation (COC, COA, B/L)", "Annual volume pricing available"],
//     cta: "Explore Contract Mfg", ctaLink: "/contract-manufacturing",
//     timeline: "Onboarding in 4 weeks", minOrder: "Volume-based agreements",
//   },
// };

// export default function Home() {
//   const [activeNeed, setActiveNeed] = useState<NeedId>("profiles");
//   const content = CONTENT[activeNeed];

//   return (
//     <PageLayout>
//       {/* ── HERO — question-led qualifier ── */}
//       <section className="pt-16 bg-foreground relative overflow-hidden min-h-[72vh] flex items-center">
//         {/* Background facility photo */}
//         <div className="absolute inset-0 z-0">
//           <img
//             src={`${BASE}images/products/image13.jpeg`}
//             alt="Graphene Composites Facility"
//             className="w-full h-full object-cover opacity-10"
//           />
//           <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 to-foreground" />
//         </div>

//         <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 py-20 w-full text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//           >
//             <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 px-3 py-1.5 rounded-full text-primary text-xs font-bold uppercase tracking-widest mb-6">
//               <span className="relative flex h-2 w-2">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
//                 <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
//               </span>
//               FRP Manufacturer — 95% Exports — ISO 9001:2015 Certified
//             </div>

//             <h1 className="text-5xl md:text-6xl font-bold text-white font-display leading-tight mb-4">
//               How Can We <span className="text-primary">Help You?</span>
//             </h1>
//             <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
//               India's leading FRP manufacturer, trusted by global industry since 2017. Select what you need and we'll show you exactly what we offer.
//             </p>

//             {/* SELECTOR CARDS */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
//               {NEEDS.map((need, i) => (
//                 <motion.button
//                   key={need.id}
//                   onClick={() => setActiveNeed(need.id)}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.1 + i * 0.08 }}
//                   className={`p-5 rounded-2xl border text-left transition-all duration-200 ${activeNeed === need.id
//                       ? "bg-primary/15 border-primary scale-[1.03] shadow-lg shadow-primary/20"
//                       : "border-white/10 bg-white/5 hover:border-white/25 hover:bg-white/8"
//                     }`}
//                 >
//                   <need.icon className={`w-6 h-6 mb-3 transition-colors ${activeNeed === need.id ? "text-primary" : "text-gray-500"}`} />
//                   <div className={`font-bold text-sm mb-1 ${activeNeed === need.id ? "text-white" : "text-gray-300"}`}>
//                     {need.title}
//                   </div>
//                   <div className="text-xs text-gray-500 leading-snug">{need.subtitle}</div>
//                 </motion.button>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ── DYNAMIC CONTENT PANEL ── */}
//       <section className="bg-white border-t-4 border-primary">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={activeNeed}
//             initial={{ opacity: 0, y: 16 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -16 }}
//             transition={{ duration: 0.3 }}
//             className="max-w-6xl mx-auto px-4 sm:px-8 py-16"
//           >
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
//               {/* Left — specs */}
//               <div>
//                 <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
//                   {content.heading}
//                 </h2>
//                 <p className="text-muted-foreground text-lg leading-relaxed mb-6">{content.desc}</p>

//                 <ul className="space-y-3 mb-8">
//                   {content.specs.map((spec, i) => (
//                     <li key={i} className="flex items-start gap-3">
//                       <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
//                       <span className="text-foreground/80 text-sm">{spec}</span>
//                     </li>
//                   ))}
//                 </ul>

//                 {/* Lead time + min order */}
//                 <div className="flex gap-4 mb-8">
//                   <div className="bg-secondary border border-border rounded-xl p-4 flex items-center gap-3 flex-1">
//                     <Clock className="w-5 h-5 text-primary" />
//                     <div>
//                       <div className="text-xs text-muted-foreground uppercase tracking-wider">Lead Time</div>
//                       <div className="text-sm font-semibold text-foreground mt-0.5">{content.timeline}</div>
//                     </div>
//                   </div>
//                   <div className="bg-secondary border border-border rounded-xl p-4 flex items-center gap-3 flex-1">
//                     <Package className="w-5 h-5 text-primary" />
//                     <div>
//                       <div className="text-xs text-muted-foreground uppercase tracking-wider">Min. Order</div>
//                       <div className="text-sm font-semibold text-foreground mt-0.5">{content.minOrder}</div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex gap-3 flex-wrap">
//                   <Link href={content.ctaLink}>
//                     <Button size="lg" className="h-12 px-6">
//                       {content.cta} <ArrowRight className="ml-2 w-4 h-4" />
//                     </Button>
//                   </Link>
//                   <Link href="/contact">
//                     <Button size="lg" variant="outline" className="h-12 px-6">
//                       Request a Quote
//                     </Button>
//                   </Link>
//                 </div>
//               </div>

//               {/* Right — product photo */}
//               <div className="relative">
//                 <img
//                   src={content.img}
//                   alt={content.heading}
//                   className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
//                 />
//                 <div className="absolute top-4 left-4 bg-foreground/80 backdrop-blur-sm px-3 py-1.5 rounded-full">
//                   <span className="text-xs text-white font-semibold">95% Exported to USA & Europe</span>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </section>

//       {/* ── TRUST BAR ── */}
//       <section className="py-10 bg-secondary border-t border-border">
//         <div className="max-w-5xl mx-auto px-4 sm:px-8">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
//             {[
//               { icon: ShieldCheck, label: "ISO 9001:2015 Certified" },
//               { icon: Globe2, label: "95% Global Exports" },
//               { icon: CheckCircle2, label: "3-Stage Quality Inspection" },
//               { icon: Clock, label: "Assured Lead Times" },
//             ].map((item, i) => (
//               <motion.div
//                 key={i}
//                 className="flex flex-col items-center gap-2"
//                 initial={{ opacity: 0, y: 10 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.08 }}
//               >
//                 <item.icon className="w-6 h-6 text-primary" />
//                 <span className="text-xs text-muted-foreground font-medium">{item.label}</span>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── CTA SECTION ── */}
//       <section className="py-20 bg-foreground text-white text-center">
//         <div className="max-w-3xl mx-auto px-4 sm:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <h2 className="text-4xl md:text-5xl font-bold font-display mb-5">
//               Ready to Source from India's <span className="text-primary">Leading FRP Manufacturer?</span>
//             </h2>
//             <p className="text-gray-400 text-lg mb-10 leading-relaxed">
//               Send us your specifications. We'll respond with pricing, lead times, and a sample plan within 24 hours.
//             </p>
//             <div className="flex flex-col sm:flex-row justify-center gap-4">
//               <Link href="/contact">
//                 <Button size="lg" className="h-14 px-8 text-lg font-bold shadow-lg shadow-primary/30">
//                   Send Specifications <ArrowRight className="ml-2 w-5 h-5" />
//                 </Button>
//               </Link>
//               <Link href="/contract-manufacturing">
//                 <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-bold border-2 border-white/20 text-white hover:bg-white hover:text-foreground">
//                   Contract Manufacturing
//                 </Button>
//               </Link>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </PageLayout>
//   );
// }
