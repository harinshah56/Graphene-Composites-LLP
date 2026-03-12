import { PageLayout } from "@/components/layout/PageLayout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Cog, Layers, Cpu, Wrench } from "lucide-react";

export default function Technology() {
  return (
    <PageLayout>
      <div className="py-20 lg:py-32 bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Technology & Processes" 
            subtitle="Mastering advanced composite manufacturing techniques."
            align="left"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
            
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="w-16 h-16 shrink-0 rounded-2xl bg-white shadow-sm border border-border flex items-center justify-center">
                  <Cog className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-display mb-3 text-foreground">Pultrusion Technology</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A continuous manufacturing process producing linear FRP profiles with constant cross-sections. Reinforcements (rovings/mats) are pulled through a resin bath and then through a heated die where curing occurs.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-16 h-16 shrink-0 rounded-2xl bg-white shadow-sm border border-border flex items-center justify-center">
                  <Layers className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-display mb-3 text-foreground">Infusion & Vacuum Bagging</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Used for large, complex structures like wind turbine nacelle covers. Dry reinforcements are laid in a mold, sealed with a vacuum bag, and resin is drawn through by vacuum pressure, resulting in a high strength-to-weight ratio and zero voids.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="w-16 h-16 shrink-0 rounded-2xl bg-white shadow-sm border border-border flex items-center justify-center">
                  <Cpu className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-display mb-3 text-foreground">Automated Control Systems</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Unique to our facility, we employ advanced automated PLCs on our production lines. This removes human error by scientifically controlling temperature, pull speed, and resin flow parameters.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-16 h-16 shrink-0 rounded-2xl bg-white shadow-sm border border-border flex items-center justify-center">
                  <Wrench className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-display mb-3 text-foreground">Material Science</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We expertly formulate combinations of Fiberglass reinforcements with various matrix systems—primarily Isophthalic Polyester and Vinyl Ester resins—tailoring the product's chemical resistance and mechanical properties to the exact application.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </PageLayout>
  );
}
