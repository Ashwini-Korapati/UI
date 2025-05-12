
import Link from 'next/link';
import { Mail, MapPin, Phone, Globe, Linkedin, Facebook, Instagram, Twitter } from 'lucide-react';
import { ClientLogos } from '@/components/shared/client-logos';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Animated Bubbles Container - Must be inside the relatively positioned footer */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="footer-bubble bubble-1"></div>
        <div className="footer-bubble bubble-2"></div>
        <div className="footer-bubble bubble-3"></div>
        <div className="footer-bubble bubble-4"></div>
      </div>

       {/* Client Logos Section - needs z-index, min-h-screen and centering */}
       <div className="bg-secondary py-12 md:py-16 relative z-10 min-h-screen flex items-center justify-center">
         <ClientLogos />
       </div>

      {/* Main Footer Content - needs z-index to be above bubbles */}
      <div className="container mx-auto py-4 md:py-6 px-4 relative z-10">
        {/* Reduced gap, added lg:grid-cols-4 to accommodate map */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">

          {/* About Section */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-3 text-accent-foreground/90">Events Unlimited</h4>
            <p className="text-sm text-primary-foreground/80">
              Crafting memorable moments. We specialize in creating unforgettable experiences for every occasion, connecting you with India’s best vendors.
            </p>
            {/* Follow Us Section - Moved under About for better flow on smaller screens */}
            <div className="mt-4">
                <h4 className="text-md font-semibold mb-2 text-accent-foreground/90">Follow Us</h4>
                <div className="flex space-x-3">
                    {/* Using lucide-react icons as requested */}
                    <a href="https://www.linkedin.com/in/eventsunlimited365" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-accent-foreground transition-colors" aria-label="LinkedIn">
                        <Linkedin className="h-5 w-5" />
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-accent-foreground transition-colors" aria-label="Facebook">
                        <Facebook className="h-5 w-5" />
                    </a>
                    <a href="https://www.instagram.com/events_unlimited_365?igsh=MWYybzdnODYyc3dpMA==" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-accent-foreground transition-colors" aria-label="Instagram">
                        <Instagram className="h-5 w-5" />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-accent-foreground transition-colors" aria-label="Twitter">
                        <Twitter className="h-5 w-5" />
                    </a>
                </div>
            </div>
          </div>

          {/* Quick Links */}
           <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-3 text-accent-foreground/90">Quick Links</h4>
            <ul className="space-y-1.5 text-sm">
              <li><Link href="/" className="hover:text-accent-foreground/80 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-accent-foreground/80 transition-colors">About Us</Link></li>
              <li><Link href="/corporate-events" className="hover:text-accent-foreground/80 transition-colors">Corporate Events</Link></li>
              <li><Link href="/contact" className="hover:text-accent-foreground/80 transition-colors">Contact Us</Link></li>
              <li><Link href="/become-vendor" className="hover:text-accent-foreground/80 transition-colors">Become a Vendor</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
           <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-3 text-accent-foreground/90">Contact Info</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-accent-foreground/90" />
                <span>42, 4th Temple St Rd, Vyalikaval, Kodandarampura, Malleshwaram, Bengaluru, Karnataka 560003</span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="h-4 w-4 mt-0.5 shrink-0 text-accent-foreground/90" />
                <div className="flex flex-col">
                     <a href="tel:+917647367436" className="hover:text-accent-foreground/80 transition-colors">+91 76473 67436</a>
                    <a href="tel:+919845925252" className="hover:text-accent-foreground/80 transition-colors">+91 98459 25252</a>
                </div>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 shrink-0 text-accent-foreground/90" />
                <a href="mailto:eventsunlimited365@gmail.com" className="hover:text-accent-foreground/80 transition-colors break-all">eventsunlimited365@gmail.com</a>
              </li>
               <li className="flex items-center space-x-2">
                 <Globe className="h-4 w-4 shrink-0 text-accent-foreground/90" />
                <a href="https://geventsunlimited.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent-foreground/80 transition-colors break-all">geventsunlimited.com</a>
              </li>
            </ul>
          </div>

           {/* Map Section - Moved to the 4th column */}
           <div className="lg:col-span-1">
             <h4 className="text-lg font-semibold mb-3 text-accent-foreground/90">Our Location</h4>
             <div className="w-full aspect-video rounded overflow-hidden border border-primary-foreground/20">
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9889.73841034661!2d77.5657754066365!3d13.002696760010618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae179898500811%3A0x1ae97c253f82d79b!2sEvents%20unlimited!5e0!3m2!1sen!2sin!4v1720808098342!5m2!1sen!2sin"
                title="Events Unlimited Location"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" // Added for good practice
                ></iframe>
            </div>
           </div>

        </div>

        {/* Copyright - Reduced padding top */}
        <div className="border-t border-primary-foreground/20 pt-4 text-center text-xs text-primary-foreground/70">
          © {currentYear} Events Unlimited. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
