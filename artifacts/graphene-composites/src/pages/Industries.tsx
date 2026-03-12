import { PageLayout } from "@/components/layout/PageLayout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Wind, Waves, Beaker, Factory, Shield, Sun, Droplets, HardHat, Building2, Ship, Train, Tent } from "lucide-react";

const INDUSTRIES = [
  { icon: Wind, name: "Wind Energy" },
  { icon: Factory, name: "Cooling Towers" },
  { icon: Beaker, name: "Chemical, Oil & Gas" },
  { icon: Droplets, name: "Water & Wastewater" },
  { icon: Shield, name: "Pharmaceuticals" },
  { icon: Sun, name: "Solar Power" },
  { icon: Waves, name: "Power & Utilities" },
  { icon: Beaker, name: "Food & Beverages" }, // Reusing beaker for F&B processing
  { icon: Building2, name: "Telecommunication" },
  { icon: HardHat, name: "Construction & Arch" },
  { icon: Ship, name: "Offshore & Marine" },
  { icon: Train, name: "Transportation" },
  { icon: Tent, name: "Recreational Areas" },
];

export default function Industries() {
  return (
    <PageLayout>
      <div className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader 
            title="Industries We Serve" 
            subtitle="Our advanced composites provide critical infrastructure across highly demanding global sectors."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mt-12">
            {INDUSTRIES.map((ind, i) => (
              <div 
                key={i} 
                className="bg-secondary p-6 rounded-xl border border-border flex flex-col items-center justify-center gap-4 hover:border-primary hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <ind.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-center font-display">{ind.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
