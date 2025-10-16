import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Chill & Surf School</h3>
            <p className="text-sm opacity-90">
              Learn to surf and dive in paradise. Professional instruction with guaranteed results.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm opacity-90">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Beach Road, Weligama, Sri Lanka</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+94123456789" className="hover:underline">+94 123 456 789</a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 flex-shrink-0" />
                <a href="https://wa.me/94123456789" className="hover:underline">WhatsApp</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:info@chillandsurf.lk" className="hover:underline">info@chillandsurf.lk</a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><Link to="/surfing" className="hover:underline">Surfing</Link></li>
              <li><Link to="/diving" className="hover:underline">Diving</Link></li>
              <li><Link to="/transport" className="hover:underline">Transport</Link></li>
              <li><Link to="/pricing" className="hover:underline">Pricing</Link></li>
              <li><Link to="/about" className="hover:underline">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm opacity-90 mb-4">
              <li><Link to="/terms" className="hover:underline">Terms of Service</Link></li>
              <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
              <li><Link to="/refund" className="hover:underline">Refund Policy</Link></li>
            </ul>
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook" className="hover:opacity-80 transition-opacity">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="hover:opacity-80 transition-opacity">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-75">
          <p>&copy; {new Date().getFullYear()} Chill & Surf School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
