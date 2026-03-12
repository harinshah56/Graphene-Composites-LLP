import { PageLayout } from "@/components/layout/PageLayout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Settings, Maximize, Truck, ShieldCheck, Activity, Users2 } from "lucide-react";

export default function Manufacturing() {
  const features = [
    {
      icon: Maximize,
      title: "Massive Scale",
      desc: "Greenfield 400,000 sqft facility designed for optimized workflow and massive output capacity."
    },
    {
      icon: Activity,
      title: "20 Pultrusion Lines",
      desc: "Running 24x7 with automated control systems to ensure exact parameter adherence and consistency."
    },
    {
      icon: ShieldCheck,
      title: "3-Stage QC",
      desc: "Every single piece is inspected three times. We don't rely on batch sampling; we ensure 100% compliance."
    },
    {
      icon: Settings,
      title: "Custom Fabrication",
      desc: "Dedicated fabrication department equipped for precision cutting, drilling, and assembly of complex profiles."
    },
    {
      icon: Users2,
      title: "Tooling & Design",
      desc: "In-house design, engineering, and tooling team capable of developing custom molds rapidly."
    },
    {
      icon: Truck,
      title: "Tailor-made Packing",
      desc: "In-house packaging department designs custom crates/pallets to ensure damage-free global transit."
    }
  ];

  return (
    <PageLayout>
      {/* Hero */}
      <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-foreground text-white overflow-hidden">
         <div className="absolute inset-0 z-0">
          <img 
            src={`${import.meta.env.BASE_URL}images/hero-bg.png`} 
            alt="Manufacturing Facility" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/80 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">State-of-the-Art Manufacturing</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Located in Savli, Gujarat. Built for global scale, precision, and zero-defect output.
          </p>
        </div>
      </div>

      <div className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Infrastructure Capabilities" 
            subtitle="Our facility is the backbone of our 'You Define, We Deliver' promise."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feat, i) => (
              <div key={i} className="bg-white border border-border p-8 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <feat.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold font-display text-foreground mb-3">{feat.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
