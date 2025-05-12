
import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import { ClientLogos } from '@/components/shared/client-logos';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
       {/* Reduce padding in ClientLogos wrapper */}
       <div className="bg-secondary py-6 md:py-8">
         <ClientLogos />
       </div>
      {/* Reduce padding in main footer container */}
      <div className="container mx-auto py-6 md:py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h4 className="text-lg font-semibold mb-3 text-accent-foreground/90">Events Unlimited</h4>
            <p className="text-sm text-primary-foreground/80">
              Crafting memorable moments. We specialize in creating unforgettable experiences for every occasion, connecting you with India’s best vendors.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-3 text-accent-foreground/90">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-accent-foreground/80 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-accent-foreground/80 transition-colors">About Us</Link></li>
              <li><Link href="/corporate-events" className="hover:text-accent-foreground/80 transition-colors">Corporate Events</Link></li>
              <li><Link href="/contact" className="hover:text-accent-foreground/80 transition-colors">Contact Us</Link></li>
              <li><Link href="/become-vendor" className="hover:text-accent-foreground/80 transition-colors">Become a Vendor</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-3 text-accent-foreground/90">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>42, 4th Temple St Rd, Vyalikaval, Kodandarampura, Malleshwaram, Bengaluru, Karnataka 560003</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 shrink-0" />
                <a href="tel:+917647367436" className="hover:text-accent-foreground/80 transition-colors">+91 7647367436</a>
                <span className="text-primary-foreground/60">/</span>
                 <a href="tel:+919845925252" className="hover:text-accent-foreground/80 transition-colors">+91 9845925252</a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 shrink-0" />
                <a href="mailto:hello@eventsunlimited.in" className="hover:text-accent-foreground/80 transition-colors">hello@eventsunlimited.in</a>
              </li>
               <li className="flex items-center space-x-2">
                 {/* Placeholder for Website Icon */}
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                <a href="https://geventsunlimited.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent-foreground/80 transition-colors">geventsunlimited.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 pt-6 text-center text-sm text-primary-foreground/70">
          © {currentYear} Events Unlimited. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
