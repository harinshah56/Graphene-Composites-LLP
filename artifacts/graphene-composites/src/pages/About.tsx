import { PageLayout } from "@/components/layout/PageLayout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";
import { Target, Flag, Award, Factory } from "lucide-react";

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
      staggerChildren: 0.1
    }
  },
  viewport: { once: true, margin: "-100px" }
};

export default function About() {
  return (
    <PageLayout>
      {/* Hero */}
      <div className="bg-foreground py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={`${import.meta.env.BASE_URL}images/products/image13.jpeg`}
            alt="Graphene Composites facility"
            className="w-full h-full object-cover opacity-15 mix-blend-luminosity"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white font-display mb-6">About Us</h1>
            <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
              Pioneering the future of composite materials from the heart of Gujarat, India, to the global stage.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              <SectionHeader title="Our Story" align="left" />
              <div className="prose prose-lg text-muted-foreground">
                <p>
                  Established in 2017, Graphene Composites LLP was founded with a singular vision: to become the most reliable and technologically advanced manufacturer of Fiber Reinforced Plastics (FRP) in the region.
                </p>
                <p>
                  Located in Savli, Vadodara—widely recognized as the Composites Hub of India—we benefit from a rich ecosystem of raw material suppliers and highly skilled manpower. This strategic location, coupled with excellent connectivity to major seaports (just 150kms away) and transportation networks, allows us to serve the global market efficiently.
                </p>
                <p>
                  Today, we are proud to export 95% of our production to the highly demanding markets of the USA and Europe, a testament to our unwavering commitment to quality and international standards.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              {[
                { icon: Flag, title: "Founded", value: "2017" },
                { icon: Factory, title: "Facility", value: "400,000 sqft" },
                { icon: Target, title: "Focus", value: "100% Export Quality" },
                { icon: Award, title: "Certification", value: "ISO 9001:2015" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="bg-secondary p-8 rounded-2xl border border-border hover:border-primary/50 transition-colors group cursor-default"
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                >
                  <stat.icon className="w-10 h-10 text-primary mb-4 transition-transform group-hover:scale-110" />
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">{stat.title}</h4>
                  <p className="text-2xl font-bold font-display text-foreground">{stat.value}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="py-24 bg-foreground text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <motion.div
              className="p-10 rounded-3xl bg-white/5 border border-white/10 relative overflow-hidden group"
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full group-hover:bg-primary/30 transition-colors" />
              <h3 className="text-3xl font-display font-bold mb-6 text-primary">Our Vision</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                To be the globally preferred partner for advanced composite solutions, driving innovation and replacing traditional materials to build a more durable and sustainable world.
              </p>
            </motion.div>
            <motion.div
              className="p-10 rounded-3xl bg-white/5 border border-white/10 relative overflow-hidden group"
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full group-hover:bg-primary/30 transition-colors" />
              <h3 className="text-3xl font-display font-bold mb-6 text-primary">Our Mission</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                To consistently deliver precision-engineered FRP products by leveraging automated technology, stringent quality controls, and a dedicated team, living up to our motto: <strong className="text-white">"You Define, We Deliver."</strong>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
}
