import { PageLayout } from "@/components/layout/PageLayout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Wind, Waves, Beaker, Factory, Shield, Sun, Droplets, HardHat, Building2, Ship, Train, Tent } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const BASE = import.meta.env.BASE_URL;

const INDUSTRIES = [
  { icon: Wind, name: "Wind Energy", desc: "Nacelle covers and structural components for wind turbines" },
  { icon: Factory, name: "Cooling Towers", desc: "Pultruded profiles forming the structural backbone of cooling towers" },
  { icon: Beaker, name: "Chemical, Oil & Gas", desc: "Corrosion-resistant grating and walkways for harsh chemical environments" },
  { icon: Droplets, name: "Water & Wastewater", desc: "Non-conductive, rust-free grating for water treatment facilities" },
  { icon: Shield, name: "Pharmaceuticals", desc: "Hygienic, non-corrosive platforms and walkways for clean rooms" },
  { icon: Sun, name: "Solar Power", desc: "300mm wide grating walkways for large-scale solar plant maintenance" },
  { icon: Waves, name: "Power & Utilities", desc: "Safe, non-conductive FRP solutions for electrical environments" },
  { icon: Beaker, name: "Food & Beverages", desc: "Hygienic, easy-to-clean grating for food processing facilities" },
  { icon: Building2, name: "Telecommunication", desc: "Lightweight structural profiles for tower and infrastructure applications" },
  { icon: HardHat, name: "Construction & Architecture", desc: "Custom profiles and gratings for modern construction projects" },
  { icon: Ship, name: "Offshore & Marine", desc: "Saltwater-resistant composites for offshore platforms and vessels" },
  { icon: Train, name: "Transportation", desc: "Lightweight structural components for rail and road infrastructure" },
  { icon: Tent, name: "Recreational Areas", desc: "Safe, durable walkways and decking for public recreation spaces" },
];

const FEATURED_APPLICATIONS = [
  {
    img: `${BASE}images/products/image4.jpeg`,
    title: "Cooling Tower Applications",
    desc: "FRP pultruded profiles — angles, channels, square tubes, and I-beams — form the complete structural framework of cooling towers worldwide. Corrosion-resistant and lightweight, they far outlast galvanised steel in wet tower environments.",
    product: "Pultruded Profiles",
    link: "/products#pultrusion",
  },
  {
    img: `${BASE}images/products/image5.jpeg`,
    title: "Solar Power Plant Walkways",
    desc: "FRP grating panels (300mm wide) are the industry standard walkway solution for large-scale solar plants. Non-conductive, lightweight, and maintenance-free — critical for safe access across solar panel arrays.",
    product: "Molded FRP Grating",
    link: "/products#grating",
  },
  {
    img: `${BASE}images/products/image3.png`,
    title: "Industrial Plant Walkways",
    desc: "Green FRP grating installed across pump rooms, chemical plants, and water treatment facilities as anti-slip, corrosion-resistant walkways. Outlasts steel grating by decades in wet and chemically aggressive environments.",
    product: "Molded FRP Grating",
    link: "/products#grating",
  },
  {
    img: `${BASE}images/products/image6.jpeg`,
    title: "Wind Energy — Nacelle Covers",
    desc: "Large-format FRP nacelle covers protect the turbine gearbox and generator from harsh weather conditions. We are one of the fastest-growing nacelle cover suppliers in the Indian wind sector, targeting global markets.",
    product: "Custom Moulding",
    link: "/products#moulding",
  },
];

export default function Industries() {
  return (
    <PageLayout>
      {/* Header */}
      <div className="pt-32 pb-16 lg:pt-40 bg-secondary border-b border-border text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">Industries Served</p>
          <h1 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-5">
            Global Industries We Power
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our advanced FRP solutions provide critical infrastructure across some of the world's most 
            demanding sectors — from wind energy to offshore platforms.
          </p>
        </div>
      </div>

      {/* Industries Grid */}
      <div className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
            {INDUSTRIES.map((ind, i) => (
              <div
                key={i}
                className="bg-white border border-border p-5 rounded-xl flex flex-col items-center justify-center gap-3 hover:border-primary hover:shadow-md transition-all duration-300 group text-center"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <ind.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground font-display text-sm">{ind.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{ind.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Applications with Real Photos */}
      <div className="py-20 bg-secondary border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">In Action</p>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
              Our Products at Work
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Real installations and products — not stock photography.
            </p>
          </div>

          <div className="space-y-16">
            {FEATURED_APPLICATIONS.map((app, i) => (
              <div
                key={i}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  i % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div className={`relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl ${i % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <img
                    src={app.img}
                    alt={app.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 bg-primary text-primary-foreground text-xs font-bold rounded-full uppercase tracking-wider">
                      {app.product}
                    </span>
                  </div>
                </div>
                <div className={i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <h3 className="text-2xl md:text-3xl font-bold font-display text-foreground mb-4">
                    {app.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {app.desc}
                  </p>
                  <Link href={app.link}>
                    <Button variant="outline" className="group">
                      View {app.product}
                      <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 bg-foreground text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold font-display mb-4">
            Your Industry Not Listed?
          </h2>
          <p className="text-gray-300 mb-8">
            Our engineering team works across virtually any industry requiring high-performance, 
            corrosion-resistant composite solutions. Contact us to discuss your specific application.
          </p>
          <Link href="/contact">
            <Button size="lg" className="h-12 px-8">
              Discuss Your Application
            </Button>
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
