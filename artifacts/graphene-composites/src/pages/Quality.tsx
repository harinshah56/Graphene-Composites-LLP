import { PageLayout } from "@/components/layout/PageLayout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CheckCircle2 } from "lucide-react";

export default function Quality() {
  const points = [
    "ISO 9001:2015 Certified Operations",
    "Stringent Raw Material Supplier Evaluation",
    "Automated Control Systems for exact parameter adherence",
    "Rigorous 3-Stage Quality Inspection per piece",
    "Skilled manpower ensuring the 'quality touch'",
    "Full support for Third-Party Inspections",
    "Consistent Quality + Assured Timelines"
  ];

  return (
    <PageLayout>
      <div className="py-24 bg-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div>
               <SectionHeader 
                title="Uncompromising Quality Assurance" 
                subtitle="Because in structural engineering, there is no margin for error."
                align="left"
                light
              />
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                At Graphene Composites, quality is not a final step—it is embedded in our culture and every phase of our manufacturing process. From raw material sourcing to final dispatch, our zero-defect policy ensures global competitiveness.
              </p>

              <ul className="space-y-4">
                {points.map((pt, i) => (
                  <li key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-lg border border-white/10">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                    <span className="text-white font-medium">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={`${import.meta.env.BASE_URL}images/products/image9.jpeg`}
                alt="Precision FRP profile — automated quality-controlled process"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                  <p className="text-white text-xl font-display font-bold italic">
                    "Every piece is scientifically inspected. We do not rely on batch sampling."
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
