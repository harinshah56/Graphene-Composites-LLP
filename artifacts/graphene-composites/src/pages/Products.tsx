import { PageLayout } from "@/components/layout/PageLayout";
import { CheckCircle2, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  },
  viewport: { once: true, margin: "-100px" }
};

const BASE = import.meta.env.BASE_URL;

const PULTRUSION_IMAGES = [
  { src: `${BASE}images/products/pultrusion_1.png`, alt: "Pultruded white channels stacked ready for dispatch" },
  { src: `${BASE}images/products/pultrusion_3.png`, alt: "High-precision pultruded white square tubes" },
  { src: `${BASE}images/products/pultrusion_2.png`, alt: "Pultruded black angles and square profiles" },
  { src: `${BASE}images/products/pultrusion_4.png`, alt: "Close-up of pultruded FRP profiles batch" },
  { src: `${BASE}images/products/pultrusion_5.png`, alt: "Automated precision pultrusion of structural shapes" },
];

const MOULDING_IMAGES = [
  { src: `${BASE}images/products/moulding_1.png`, alt: "Wind turbine nacelle covers — custom moulding" },
  { src: `${BASE}images/products/moulding_2.png`, alt: "FRP nacelle cover component detail" },
  { src: `${BASE}images/products/image8.jpeg`, alt: "Fiberglass reinforcement lay-up process" },
];

const GRATING_IMAGES = [
  { src: `${BASE}images/products/image2.jpeg`, alt: "Colorful FRP grating panels — blue, green, yellow variants" },
  { src: `${BASE}images/products/image3.png`, alt: "FRP grating installed in industrial plant walkway" },
  { src: `${BASE}images/products/image5.jpeg`, alt: "FRP grating walkway on solar power plant" },
];

function ImageGallery({ images }: { images: { src: string; alt: string }[] }) {
  const [active, setActive] = useState(0);
  return (
    <div className="space-y-3">
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-secondary border border-border shadow-lg">
        <AnimatePresence mode="wait">
          <motion.img
            key={active}
            src={images[active].src}
            alt={images[active].alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>
      {images.length > 1 && (
        <div className="flex gap-2">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`flex-1 aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all duration-200 ${i === active ? "border-primary shadow-md" : "border-transparent opacity-60 hover:opacity-90"
                }`}
            >
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Products() {
  return (
    <PageLayout>
      {/* Header */}
      <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-foreground text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={`${BASE}images/products/pultrusion_4.png`}
            alt="Manufacturing facility"
            className="w-full h-full object-cover opacity-55 grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/60" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">Our Products</p>
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 max-w-3xl text-white">
              Engineered for Strength. Built for Endurance.
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              Three core product lines — Pultruded Profiles, Custom Moulded Parts, and FRP Grating —
              trusted by global industry leaders across America and Europe.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Product Nav */}
      <div className="sticky top-16 z-20 bg-background border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-0 overflow-x-auto">
            {[
              { label: "Pultruded Profiles", href: "#pultrusion" },
              { label: "Custom Moulding", href: "#moulding" },
              { label: "FRP Grating", href: "#grating" },
            ].map((nav) => (
              <a
                key={nav.href}
                href={nav.href}
                className="flex-shrink-0 px-6 py-4 text-sm font-semibold text-muted-foreground hover:text-primary hover:border-b-2 hover:border-primary border-b-2 border-transparent transition-all whitespace-nowrap"
              >
                {nav.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── SECTION 1: PULTRUDED PROFILES ── */}
      <section id="pultrusion" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm uppercase tracking-wider mb-6">
                Product Line 01
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground mb-5">
                Pultruded Profiles
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We operate <strong>20 state-of-the-art pultrusion lines</strong> running 24×7, producing
                a comprehensive range of structural shapes primarily used in cooling tower applications
                and many specialty applications. Our fabrication department is fully equipped to offer
                all kinds of fabrication — you provide the drawings, we deliver the finished product.
              </p>

              <h3 className="text-base font-semibold text-foreground uppercase tracking-wider mb-4">Available Profiles</h3>
              <motion.div
                className="grid grid-cols-2 gap-x-6 gap-y-3 mb-8"
                variants={staggerContainer}
              >
                {[
                  "Angles (All Sizes)",
                  "C-Channels",
                  "Flat Bars",
                  "H-Beams",
                  "I-Beams",
                  "Round Pipes",
                  "Square Pipes",
                  "Custom Profiles",
                ].map((profile) => (
                  <motion.div key={profile} className="flex items-center gap-2 text-foreground" variants={fadeInUp}>
                    <ChevronRight className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="font-medium">{profile}</span>
                  </motion.div>
                ))}
              </motion.div>

              <h3 className="text-base font-semibold text-foreground uppercase tracking-wider mb-4">Key Advantages</h3>
              <motion.ul
                className="space-y-3 mb-10"
                variants={staggerContainer}
              >
                {[
                  "24×7 production with 20 dedicated pultrusion lines",
                  "3-stage quality inspection on every single piece",
                  "In-house fabrication for ready-to-use profiles",
                  "Tailor-made packing for safe international transit",
                  "Custom shapes available from customer drawings",
                ].map((point, i) => (
                  <motion.li key={i} className="flex items-start gap-3" variants={fadeInUp}>
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground leading-relaxed">{point}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <div className="p-5 bg-secondary rounded-xl border border-border mb-8">
                <p className="text-sm font-semibold text-foreground mb-1">Primary Application</p>
                <p className="text-muted-foreground text-sm">
                  Cooling Tower structural components — our square pipes, angles, and channels are the
                  backbone of cooling tower fill frameworks deployed worldwide. Also used in construction,
                  electrical enclosures, marine, and specialty engineering applications.
                </p>
              </div>

              <Link href="/contact">
                <Button size="lg" className="h-12 px-8">
                  Request Profile Specifications <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              className="lg:sticky lg:top-32"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ImageGallery images={PULTRUSION_IMAGES} />
              <p className="text-xs text-muted-foreground text-center mt-3 italic">
                Actual products from our Savli, Vadodara facility
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: CUSTOM MOULDING ── */}
      <section id="moulding" className="py-24 bg-secondary border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            <motion.div
              className="lg:sticky lg:top-32 lg:order-1 order-2"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ImageGallery images={MOULDING_IMAGES} />
              <p className="text-xs text-muted-foreground text-center mt-3 italic">
                Wind turbine nacelle covers manufactured at our facility
              </p>
            </motion.div>

            <motion.div
              className="lg:order-2 order-1"
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm uppercase tracking-wider mb-6">
                Product Line 02
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground mb-5">
                Custom Moulding
              </h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Many industries across the world regularly require FRP products with very specific designs,
                shapes, and dimensions. Our Custom Moulding department is focused primarily on the
                <strong> Wind Sector</strong>, with our prime product being the <strong>Nacelle Cover</strong> —
                the aerodynamic housing that protects the wind turbine gearbox and generator.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                You have a design, concept, idea, or expectation — share it with us. Our engineering team
                takes it from concept to finished product. We offer complete end-to-end solutions.
              </p>

              <h3 className="text-base font-semibold text-foreground uppercase tracking-wider mb-4">Manufacturing Processes</h3>
              <motion.div
                className="grid grid-cols-1 gap-4 mb-8"
                variants={staggerContainer}
              >
                {[
                  {
                    process: "Resin Infusion",
                    desc: "Closed-mold process delivering outstanding fiber-to-resin ratios for structural large-format parts."
                  },
                  {
                    process: "Hand Lay-up",
                    desc: "Skilled technicians apply fiberglass layers with precision for complex curvatures and geometries."
                  },
                  {
                    process: "Vacuum Bagging",
                    desc: "Vacuum consolidation ensures void-free, high-density laminates for critical structural components."
                  },
                ].map((item) => (
                  <motion.div key={item.process} className="flex gap-4 p-4 bg-background rounded-xl border border-border" variants={fadeInUp}>
                    <div className="w-2 bg-primary rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-bold text-foreground">{item.process}</p>
                      <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <h3 className="text-base font-semibold text-foreground uppercase tracking-wider mb-4">End-to-End Service</h3>
              <motion.ul
                className="space-y-3 mb-10"
                variants={staggerContainer}
              >
                {[
                  "Product design and engineering from concept/drawings",
                  "Custom tooling and mold fabrication in-house",
                  "Serial production with strict QC at every stage",
                  "Tailor-made packing for large-format international shipping",
                  "Fastest-growing nacelle cover supplier in the Indian wind sector",
                ].map((point, i) => (
                  <motion.li key={i} className="flex items-start gap-3" variants={fadeInUp}>
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground leading-relaxed">{point}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <Link href="/contact">
                <Button size="lg" className="h-12 px-8">
                  Discuss Your Requirement <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: FRP GRATING ── */}
      <section id="grating" className="py-24 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm uppercase tracking-wider mb-6">
                Product Line 03
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground mb-5">
                Molded FRP Grating
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Grating is one of the most common composite products — used across the world in almost all
                large-scale industries as platforms, structural parts, walkways, and weather-resistant covers.
                We offer wide varieties of combinations tailored to your specific requirements.
              </p>

              {/* Specifications Grid */}
              <motion.div
                className="grid grid-cols-2 gap-4 mb-8"
                variants={staggerContainer}
              >
                {[
                  { label: "Mesh Sizes", value: "38 × 38 mm", sub: "Heights: 25mm & 38mm" },
                  { label: "Full Panel Size", value: "1220 × 3660 mm", sub: "Custom sizes available" },
                  { label: "Resin Options", value: "Polyester", sub: "+ Vinyl Ester available" },
                  { label: "Colors", value: "Full Spectrum", sub: "Custom color matching" },
                ].map((spec) => (
                  <motion.div key={spec.label} className="p-5 bg-secondary rounded-xl border border-border" variants={fadeInUp}>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">{spec.label}</p>
                    <p className="font-bold text-foreground">{spec.value}</p>
                    <p className="text-sm text-muted-foreground mt-1">{spec.sub}</p>
                  </motion.div>
                ))}
              </motion.div>

              <h3 className="text-base font-semibold text-foreground uppercase tracking-wider mb-4">Surface Finish Options</h3>
              <motion.div
                className="grid grid-cols-2 gap-3 mb-8"
                variants={staggerContainer}
              >
                {[
                  { name: "Meniscus", desc: "Concave surface, standard grip" },
                  { name: "Gritted", desc: "Anti-slip, high friction surface" },
                  { name: "Flat", desc: "Smooth flat surface finish" },
                  { name: "Chequered Plate", desc: "Patterned anti-slip surface" },
                ].map((s) => (
                  <motion.div key={s.name} className="p-4 border border-border rounded-xl bg-secondary" variants={fadeInUp}>
                    <p className="font-semibold text-foreground text-sm">{s.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">{s.desc}</p>
                  </motion.div>
                ))}
              </motion.div>

              <h3 className="text-base font-semibold text-foreground uppercase tracking-wider mb-4">Applications</h3>
              <motion.div
                className="flex flex-wrap gap-2 mb-10"
                variants={staggerContainer}
              >
                {[
                  "Cooling Towers", "Chemical/Oil & Gas Plants", "Water & Wastewater",
                  "Pharmaceuticals", "Pulp & Paper", "Solar Plants", "Telecommunication",
                  "Food & Beverages", "Power & Utilities", "Offshore Projects",
                  "Recreational Areas", "Architectural Decking", "Transportation",
                ].map((app) => (
                  <motion.span
                    key={app}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20"
                    variants={fadeInUp}
                  >
                    {app}
                  </motion.span>
                ))}
              </motion.div>

              <Link href="/contact">
                <Button size="lg" className="h-12 px-8">
                  Request Grating Specifications <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              className="lg:sticky lg:top-32"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ImageGallery images={GRATING_IMAGES} />
              <p className="text-xs text-muted-foreground text-center mt-3 italic">
                FRP Grating in industrial & solar applications
              </p>

              {/* FRP vs Steel quick comparison */}
              <motion.div
                className="mt-8 p-6 bg-foreground text-white rounded-2xl shadow-xl"
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-bold mb-4 text-white">Why FRP over Steel?</h4>
                <div className="space-y-3">
                  {[
                    ["Weight", "60–80% lighter than steel"],
                    ["Corrosion", "Excellent resistance — no rust"],
                    ["Electrical", "Non-conductive — safe for live areas"],
                    ["Lifespan", "50+ years with zero maintenance"],
                    ["Installation", "50% lower cost vs steel"],
                  ].map(([prop, val]) => (
                    <div key={prop} className="flex justify-between items-center text-sm border-b border-white/10 pb-2">
                      <span className="text-gray-400 font-medium">{prop}</span>
                      <span className="text-primary font-semibold">{val}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Need a Custom FRP Solution?
          </h2>
          <p className="text-lg opacity-90 mb-8">
            You define your requirement — we will engineer, manufacture, and deliver the exact product.
            Contact our team for technical specifications, samples, or a quote.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="h-14 px-10 text-lg font-bold text-primary">
              Get a Quote Today
            </Button>
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
