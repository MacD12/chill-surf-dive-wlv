import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Waves } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Waves className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">Chill & Surf</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/surfing" className="text-sm font-medium hover:text-primary transition-colors">
            Surfing
          </Link>
          <Link to="/diving" className="text-sm font-medium hover:text-primary transition-colors">
            Diving
          </Link>
          <Link to="/pricing" className="text-sm font-medium hover:text-primary transition-colors">
            Pricing
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
          <Link to="/blog" className="text-sm font-medium hover:text-primary transition-colors">
            Blog
          </Link>
          <Link to="/contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>

        <Button asChild>
          <Link to="/booking">Book Now</Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;
