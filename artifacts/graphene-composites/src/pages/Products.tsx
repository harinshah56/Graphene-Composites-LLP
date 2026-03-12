import { PageLayout } from "@/components/layout/PageLayout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CheckCircle2, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const PRODUCT_SECTIONS = [
  {
    id: "pultrusion",
    title: "Pultruded Profiles",
    subtitle: "High-volume, continuous manufacturing for structural shapes.",
    content: [
      "We operate 20 state-of-the-art pultrusion lines running 24x7, producing standard structural shapes and custom profiles.",
      "Common profiles include: Angles, C-Channels, Flats, H-Beams, I-Beams, Round Pipes, and Square Pipes.",
      "Heavily utilized in Cooling Towers and specialty architectural applications.",
      "Supported by our in-house fabrication department for precision cutting and custom assembly.",
      "Every profile undergoes our rigorous 3-stage quality check process."
    ]
  },
  {
    id: "moulding",
    title: "Custom Moulding",
    subtitle: "Complex geometries and large-scale parts via Infusion, Hand Lay-up, and Vacuum Bagging.",
    content: [
      "Specialized in manufacturing large-scale components like Nacelle Covers for the Wind Energy sector.",
      "End-to-end solutions: from initial design and engineering to custom tooling, mold making, and final production.",
      "Techniques utilized include Resin Infusion, traditional Hand Lay-up, and Vacuum Bagging depending on structural requirements.",
      "We provide tailor-made packing solutions to ensure safe global transit of large molded parts."
    ]
  },
  {
    id: "grating",
    title: "Molded FRP Grating",
    subtitle: "The ultimate solution for industrial flooring and walkways.",
    content: [
      "Standard mesh sizes: 38x38mm available in heights of 25mm and 38mm.",
      "Full panel size: 1220mm x 3660mm.",
      "Available in Isophthalic Polyester and Vinyl Ester resins to match chemical resistance requirements.",
      "Surface finish options: Meniscus (Concave), Gritted (Anti-slip), Flat, and Chequered plate.",
      "Ideal for Cooling Towers, Chemical Plants, Water/Wastewater facilities, and Offshore platforms."
    ]
  }
];

export default function Products() {
  return (
    <PageLayout>
      <div className="bg-secondary py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground font-display mb-6">Our Products</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Engineered for strength. Built for endurance. Discover our comprehensive range of FRP solutions.
          </p>
        </div>
      </div>

      <div className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {PRODUCT_SECTIONS.map((section, index) => (
            <div 
              key={section.id} 
              id={section.id} 
              className={`py-16 ${index !== PRODUCT_SECTIONS.length - 1 ? 'border-b border-border' : ''}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 uppercase tracking-wider">
                    Category {index + 1}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">{section.title}</h2>
                  <p className="text-xl text-muted-foreground mb-8">{section.subtitle}</p>
                  
                  <ul className="space-y-4">
                    {section.content.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-10">
                    <Link href="/contact">
                      <Button className="h-12 px-8 text-base">Request Specifications</Button>
                    </Link>
                  </div>
                </div>
                
                <div className={`bg-secondary rounded-2xl h-80 lg:h-full min-h-[400px] p-8 flex items-center justify-center border border-border relative overflow-hidden ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                   {/* Placeholder for specific product images - using abstract shapes for now as we only generated general facility imgs */}
                   <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                   <h3 className="text-3xl font-display font-bold text-muted-foreground/30 rotate-[-45deg] whitespace-nowrap">
                     {section.title.toUpperCase()}
                   </h3>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </PageLayout>
  );
}
