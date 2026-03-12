import { PageLayout } from "@/components/layout/PageLayout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Handshake, FileSearch, CalendarCheck, Globe2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function ContractManufacturing() {
  return (
    <PageLayout>
      <div className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader 
            title="Your Partner in Production" 
            subtitle="We serve as the reliable backbone for global OEMs and distributors."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            
            <div className="bg-secondary p-10 rounded-2xl border border-border text-left">
              <Handshake className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold font-display text-foreground mb-4">Complete Transparency</h3>
              <p className="text-muted-foreground leading-relaxed">
                We believe in building long-term partnerships based on trust. Our contract manufacturing clients have full visibility into our processes, material sourcing, and production schedules.
              </p>
            </div>

            <div className="bg-secondary p-10 rounded-2xl border border-border text-left">
              <FileSearch className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold font-display text-foreground mb-4">100% Traceability</h3>
              <p className="text-muted-foreground leading-relaxed">
                From the specific batch of resin to the operator on the floor, our robust ERP and QA systems ensure every product is fully traceable to its origins.
              </p>
            </div>

            <div className="bg-secondary p-10 rounded-2xl border border-border text-left">
              <CalendarCheck className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold font-display text-foreground mb-4">Assured Timelines</h3>
              <p className="text-muted-foreground leading-relaxed">
                With 20 automated lines running 24x7, we guarantee agreed-upon shipments and dispatches. Your supply chain will never be interrupted.
              </p>
            </div>

            <div className="bg-secondary p-10 rounded-2xl border border-border text-left">
              <Globe2 className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold font-display text-foreground mb-4">Global Reach</h3>
              <p className="text-muted-foreground leading-relaxed">
                Exporting 95% of our capacity, our packaging and logistics teams are experts in international shipping, ensuring damage-free delivery anywhere in the world.
              </p>
            </div>

          </div>

          <div className="mt-20 p-12 bg-primary text-white rounded-3xl text-center">
            <h2 className="text-3xl font-display font-bold mb-6">Ready to scale your business with us?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Discuss your OEM or private label requirements with our technical sales team today.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="text-primary font-bold px-10 h-14">
                Start a Conversation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
