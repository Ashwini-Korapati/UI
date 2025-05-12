
import Link from 'next/link';
import { Mail, MapPin, Phone, Globe, Linkedin, Facebook, Instagram, Twitter } from 'lucide-react'; // Added social icons
import { ClientLogos } from '@/components/shared/client-logos';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
       {/* Client Logos Section */}
       <div className="bg-secondary py-6 md:py-8">
         <ClientLogos />
       </div>
      {/* Main Footer Content */}
      <div className="container mx-auto py-6 md:py-8 px-4">
        {/* Adjusted gap for better spacing on smaller screens, maintained grid structure */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

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
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-accent-foreground/90" />
                <span>42, 4th Temple St Rd, Vyalikaval, Kodandarampura, Malleshwaram, Bengaluru, Karnataka 560003</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 shrink-0 text-accent-foreground/90" />
                <div className="flex flex-wrap gap-x-1">
                     <a href="tel:+917647367436" className="hover:text-accent-foreground/80 transition-colors">+91 7647367436</a>
                    <span className="text-primary-foreground/60">/</span>
                    <a href="tel:+919845925252" className="hover:text-accent-foreground/80 transition-colors">+91 9845925252</a>
                </div>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 shrink-0 text-accent-foreground/90" />
                <a href="mailto:hello@eventsunlimited.in" className="hover:text-accent-foreground/80 transition-colors break-all">hello@eventsunlimited.in</a>
              </li>
               <li className="flex items-center space-x-2">
                 <Globe className="h-4 w-4 shrink-0 text-accent-foreground/90" />
                <a href="https://geventsunlimited.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent-foreground/80 transition-colors break-all">geventsunlimited.com</a>
              </li>
               {/* Google Maps Embed */}
              <li className="mt-4">
                <div className="maps w-full aspect-video rounded overflow-hidden border border-primary-foreground/20">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9889.73841034661!2d77.5657754066365!3d13.002696760010618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae179898500811%3A0x1ae97c253f82d79b!2sEvents%20unlimited!5e0!3m2!1sen!2sin!4v1720808098342!5m2!1sen!2sin"
                    title="Events Unlimited Location"
                    className="w-full h-full border-0"
                    loading="lazy"
                  ></iframe>
                </div>
              </li>
            </ul>
          </div>

           {/* Follow Us Section */}
           <div>
            <h4 className="text-lg font-semibold mb-3 text-accent-foreground/90">Follow Us</h4>
             <div className="flex space-x-4">
                 <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-accent-foreground transition-colors" aria-label="LinkedIn">
                     <Linkedin className="h-6 w-6" />
                 </a>
                 <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-accent-foreground transition-colors" aria-label="Facebook">
                     <Facebook className="h-6 w-6" />
                 </a>
                 <a href="https://www.instagram.com/events_unlimited_365?igsh=MWYybzdnODYyc3dpMA==" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-accent-foreground transition-colors" aria-label="Instagram">
                     <Instagram className="h-6 w-6" />
                 </a>
                 <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-accent-foreground transition-colors" aria-label="Twitter">
                     <Twitter className="h-6 w-6" />
                 </a>
             </div>
           </div>

        </div>

        {/* Copyright */}
        {/* Adjusted padding top */}
        <div className="border-t border-primary-foreground/20 pt-6 text-center text-sm text-primary-foreground/70">
          © {currentYear} Events Unlimited. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
