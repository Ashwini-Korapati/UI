
import { Mail, MapPin, Phone, Globe } from 'lucide-react';
import { ContactForm } from '@/components/forms/contact-form'; // Import the form component

export default function ContactPage() {
  return (
    <>
      {/* Page Header - Full Width */}
      <section className="py-12 md:py-20 bg-secondary text-center px-4">
        <div className="max-w-2xl mx-auto"> {/* Added max-width for content */}
          <h1 className="text-4xl md:text-5xl font-bold text-primary">Contact Us</h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground">
            We'd love to hear from you! Reach out with questions or to start planning your next unforgettable event.
          </p>
        </div>
      </section>

      {/* Contact Section - Full Width */}
      <section className="py-16 md:py-24 bg-background px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-7xl mx-auto"> {/* Added max-width */}

          {/* Contact Form */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border border-border">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">Be In Touch</h2>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div className="space-y-8 pt-4 lg:pt-0">
             <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">Contact Information</h2>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary flex items-center">
                <Phone className="h-5 w-5 mr-3 text-accent" /> Phone Number
              </h3>
              <p className="text-foreground/80">
                Call these numbers for any queries:
              </p>
              <div className="mt-2 space-y-1">
                <a href="tel:+919845925252" className="block text-lg text-accent hover:underline">
                  +91 98459 25252
                </a>
                 <a href="tel:+917647367436" className="block text-lg text-accent hover:underline">
                  +91 76473 67436
                </a>
              </div>
            </div>

             <div className="border-t border-border pt-8">
              <h3 className="text-xl font-semibold mb-3 text-primary flex items-center">
                <Mail className="h-5 w-5 mr-3 text-accent" /> Email
              </h3>
              <a href="mailto:eventsunlimited365@gmail.com" className="block text-lg text-accent hover:underline break-all">
                  eventsunlimited365@gmail.com
              </a>
            </div>


            <div className="border-t border-border pt-8">
              <h3 className="text-xl font-semibold mb-3 text-primary flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-accent" /> Location
              </h3>
              <p className="text-lg text-foreground/80">
                42, 4th Temple St Rd, Vyalikaval, Kodandarampura, Malleshwaram, Bengaluru, Karnataka 560003
              </p>
              {/* Optional: Add a Google Maps embed here */}
            </div>

            <div className="border-t border-border pt-8">
              <h3 className="text-xl font-semibold mb-3 text-primary flex items-center">
                <Globe className="h-5 w-5 mr-3 text-accent" /> Website
              </h3>
              <p className="text-foreground/80 mb-1">Reach us through our website:</p>
              <a
                href="https://geventsunlimited.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-accent hover:underline break-all"
              >
                geventsunlimited.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
