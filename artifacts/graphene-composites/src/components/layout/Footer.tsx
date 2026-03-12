import { Link } from "wouter";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-foreground text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="space-y-6">
            <div className="bg-white inline-block p-3 rounded-xl shadow-lg">
              <img src="/graphene-logo.png" alt="Graphene Composites" className="h-10" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              India's premier FRP manufacturer, delivering advanced composite solutions globally. 
              <br/><br/>
              <span className="text-primary font-medium italic">"You Define, We Deliver."</span>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold font-display mb-6 text-white border-b border-white/10 pb-2">Company</h3>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Manufacturing Facility", href: "/manufacturing" },
                { label: "Quality Assurance", href: "/quality" },
                { label: "Contract Manufacturing", href: "/contract-manufacturing" },
                { label: "Contact Us", href: "/contact" }
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group cursor-pointer text-sm">
                      <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-bold font-display mb-6 text-white border-b border-white/10 pb-2">Products & Solutions</h3>
            <ul className="space-y-3">
              {[
                { label: "Pultruded Profiles", href: "/products#pultrusion" },
                { label: "Custom Moulding", href: "/products#moulding" },
                { label: "Molded FRP Grating", href: "/products#grating" },
                { label: "Technology", href: "/technology" },
                { label: "Industries Served", href: "/industries" }
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group cursor-pointer text-sm">
                      <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold font-display mb-6 text-white border-b border-white/10 pb-2">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary shrink-0 mt-1" size={18} />
                <span>Opp Baroda Dairy, Savli-Jarod Road,<br/>Gothda, Vadodara,<br/>Gujarat 391770, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary shrink-0" size={18} />
                <span>+91 96626 77211</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary shrink-0" size={18} />
                <a href="mailto:sanjay@graphenecomposites.in" className="hover:text-primary transition-colors">
                  sanjay@graphenecomposites.in
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <Link href="/contact">
                <Button variant="outline" className="w-full bg-transparent border-gray-600 text-white hover:bg-primary hover:border-primary hover:text-white transition-all">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Graphene Composites LLP. All rights reserved.</p>
          <div className="flex gap-4">
            <span>ISO 9001:2015 Certified</span>
            <span className="hidden md:inline">|</span>
            <Link href="/"><span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
