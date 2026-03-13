import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Manufacturing", href: "/manufacturing" },
  { label: "Technology", href: "/technology" },
  { label: "Industries", href: "/industries" },
  { label: "Quality", href: "/quality" },
  { label: "Contract Mfg", href: "/contract-manufacturing" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-white py-5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-50 relative">
          <img
            src="/graphene-logo.png"
            alt="Graphene Composites Logo"
            className={`transition-all duration-300 ${isScrolled ? "h-10" : "h-12"}`}
            onError={(e) => {
              // Fallback if image fails to load
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }}
          />
          <div className="hidden font-display font-bold text-xl leading-tight">
            <span className="text-primary">Graphene</span><br />
            <span className="text-foreground">Composites</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href}>
              <span
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-primary cursor-pointer ${location === link.href ? "text-primary bg-primary/5" : "text-foreground/80"
                  }`}
              >
                {link.label}
              </span>
            </Link>
          ))}
          <div className="ml-4 pl-4 border-l border-border">
            <Link href="/contact">
              <Button className="font-semibold shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-all">
                Get a Quote
              </Button>
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-foreground p-2 z-50 relative"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-white z-40 lg:hidden pt-24 px-6 pb-6 overflow-y-auto"
          >
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    className={`block py-3 text-lg font-medium border-b border-border/50 ${location === link.href ? "text-primary" : "text-foreground"
                      }`}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
              <div className="pt-4">
                <Link href="/contact">
                  <Button className="w-full text-lg py-6 shadow-md">
                    Get a Quote
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
