import { PageLayout } from "@/components/layout/PageLayout";
import { Settings, Maximize, Truck, ShieldCheck, Activity, Users2, MapPin } from "lucide-react";

const BASE = import.meta.env.BASE_URL;

const FACILITY_IMAGES = [
  {
    src: `${BASE}images/products/image13.jpeg`,
    caption: "Graphene Composites — Savli facility exterior with dispatch area",
  },
  {
    src: `${BASE}images/products/image11.jpeg`,
    caption: "Factory floor — pultruded profiles in production",
  },
  {
    src: `${BASE}images/products/image10.jpeg`,
    caption: "Finished pultruded square tubes ready for dispatch",
  },
  {
    src: `${BASE}images/products/image12.jpeg`,
    caption: "Outdoor stock yard — pultruded profiles batch ready for export",
  },
  {
    src: `${BASE}images/products/image8.jpeg`,
    caption: "Fiberglass reinforcement lay-up — moulding division",
  },
  {
    src: `${BASE}images/products/image6.jpeg`,
    caption: "Nacelle covers completed — ready for global dispatch",
  },
];

export default function Manufacturing() {
  const features = [
    {
      icon: Maximize,
      title: "400,000 Sqft Facility",
      desc: "Greenfield state-of-the-art facility in Savli, Vadodara — designed for optimized workflow and massive output capacity across multiple product lines.",
    },
    {
      icon: Activity,
      title: "20 Pultrusion Lines",
      desc: "Running 24×7 with automated control systems ensuring scientifically calculated parameters and consistent quality across every production run.",
    },
    {
      icon: ShieldCheck,
      title: "3-Stage Quality Control",
      desc: "Every single piece passes through three independent inspection stages. We rely on 100% piece inspection — not batch sampling.",
    },
    {
      icon: Settings,
      title: "Custom Fabrication",
      desc: "Fully equipped fabrication department for precision cutting, drilling, and assembly. Provide us drawings; we deliver ready-to-use products.",
    },
    {
      icon: Users2,
      title: "In-house Tooling & Design",
      desc: "Complete engineering and tooling team capable of developing custom molds and jigs for any geometry — supporting our moulding division.",
    },
    {
      icon: Truck,
      title: "Tailor-made Packing",
      desc: "Our in-house packaging team designs custom crates and pallets for each product, ensuring safe international transit with full traceability.",
    },
  ];

  const departments = [
    "Dispatch Area",
    "Pultrusion Dept",
    "Maintenance Dept",
    "Resin Mixing",
    "Moulding Dept",
    "Steel Fabrication",
    "Laboratory",
    "Fabrication Area",
  ];

  return (
    <PageLayout>
      {/* Hero */}
      <div className="relative pt-32 pb-24 lg:pt-44 lg:pb-36 bg-foreground text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={`${BASE}images/products/image13.jpeg`}
            alt="Graphene Composites Manufacturing Facility"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/85 to-foreground/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">Manufacturing & Infrastructure</p>
          <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 max-w-3xl leading-tight">
            State-of-the-Art Facility in India's Composites Hub
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl leading-relaxed mb-8">
            Located in Savli, Vadodara — the composites manufacturing heartland of India. 
            A 400,000 sqft greenfield facility engineered for global-scale production 
            with zero compromise on quality.
          </p>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <MapPin className="w-4 h-4 text-primary" />
            <span>Opp. Baroda Dairy, Savli-Jarod Road, Gothda, Vadodara, Gujarat — 391770</span>
          </div>
        </div>
      </div>

      {/* Location Advantages */}
      <div className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold font-display mb-8 text-center">
            Strategic Location Advantages — Savli, Vadodara
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "150 km", label: "From JNPT Seaport" },
              { value: "Hub", label: "India's Composites Capital" },
              { value: "Abundant", label: "Skilled Manpower Pool" },
              { value: "Multi-modal", label: "Road / Rail / Air Connectivity" },
            ].map((item) => (
              <div key={item.label} className="py-4">
                <div className="text-2xl font-bold mb-1 opacity-95">{item.value}</div>
                <div className="text-sm opacity-75 font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Photo Gallery */}
      <div className="py-20 bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">Facility Gallery</p>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
              Inside Our Manufacturing Operations
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Real photos from our Savli facility — not stock imagery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {FACILITY_IMAGES.map((img, i) => (
              <div
                key={i}
                className={`relative group overflow-hidden rounded-2xl bg-foreground shadow-lg ${
                  i === 0 ? "md:col-span-2 lg:col-span-2 aspect-[16/9]" : "aspect-[4/3]"
                }`}
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm font-medium leading-snug">{img.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Departments */}
      <div className="py-16 bg-foreground text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">Plant Layout</p>
            <h2 className="text-3xl font-bold font-display">Dedicated Production Departments</h2>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm">
              Each department is purpose-built for its function — ensuring focused expertise and 
              efficient material flow across the facility.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {departments.map((dept) => (
              <div
                key={dept}
                className="px-5 py-3 border border-primary/30 rounded-xl text-sm font-semibold text-gray-300 bg-primary/5 hover:bg-primary/15 hover:text-white transition-colors"
              >
                {dept}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Infrastructure Capabilities */}
      <div className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">Infrastructure</p>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
              Built for Zero-Defect, Global-Scale Manufacturing
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Every infrastructure decision at our facility is engineered around the 
              "You Define, We Deliver" promise to our global customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feat, i) => (
              <div
                key={i}
                className="bg-white border border-border p-8 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <feat.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold font-display text-foreground mb-3">{feat.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Automated Control — Unique Capability */}
      <div className="py-20 bg-secondary border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">Unique Advantage</p>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-6">
                Automated Control Systems — Unique in the Industry
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We have deployed a proprietary <strong>Automated Control System</strong> — a capability 
                unique in the Indian composites industry. This system ensures that scientifically 
                calculated parameters are maintained during production with zero human error.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Combined with our skilled workforce of 150+ professionals, this technology gives 
                our global customers the assurance that every batch meets the exact specifications 
                agreed upon — consistently, across every order.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <img
                src={`${BASE}images/products/image9.jpeg`}
                alt="Precision pultruded profile — automated process"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white text-sm font-medium">
                  Close-up precision: pultruded FRP square tube — manufactured with automated parameter control
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
