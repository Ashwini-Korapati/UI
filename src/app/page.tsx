
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import { ClientLogos } from '@/components/shared/client-logos'; // Re-importing here for clarity, assuming Footer handles display

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen w-full overflow-hidden bg-primary/10 flex items-center justify-center text-center">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
           <video
            autoPlay // Ensures video plays automatically
            loop // Loops the video
            muted // Muted is often required for autoplay in browsers
            playsInline // Important for mobile browsers
            className="absolute inset-0 w-full h-full object-cover opacity-50" // Video base opacity
            // Optional: Add a poster image for loading or unsupported browsers
            // poster="https://picsum.photos/1920/1080?random=poster"
           >
            <source src="/event1.mp4" type="video/mp4" /> {/* Updated video source */}
            Your browser does not support the video tag.
           </video>
           {/* Gradient Overlay: Reduced opacity further to make video more visible */}
           <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-10"></div> {/* Reduced opacity from 30 to 10 */}
        </div>
        <div className="relative z-10 container mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-primary-foreground drop-shadow-md animate-fadeInUp [animation-delay:0.1s]">
            Events should be memorable and engaging
          </h1>
          <p className="text-lg md:text-2xl mb-6 text-primary-foreground/90 drop-shadow-sm animate-fadeInUp [animation-delay:0.3s]">
            Coming together is a beginning; working together is success.
          </p>
          <div className="animate-fadeInUp [animation-delay:0.5s]">
            <Button asChild size="lg" variant="default" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/about">Learn More</Link>
            </Button>
           </div>
        </div>
      </section>

       {/* Intro Section */}
      <section id="intro" className="py-16 md:py-24 bg-background min-h-screen flex flex-col items-center justify-center">
        <div className="container mx-auto px-4 text-center">
           <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary animate-fadeInUp">
             Events_Unlimited
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 italic animate-fadeInUp [animation-delay:0.1s]">
            "Crafting Memorable Moments."
          </p>
          <div className="max-w-3xl mx-auto space-y-6 animate-fadeInUp [animation-delay:0.2s]">
            <p className="text-lg text-foreground/80">
              We specialize in creating unforgettable experiences for every occasion. Welcome to EventsUnlimited! We’ve been your partner in crafting exceptional event experiences from our base in Bangalore. Our goal is simple yet powerful: connecting you with India’s best vendors to create extraordinary moments without the extravagant price tag.
            </p>
            <p className="text-lg text-foreground/80">
              For corporate events, we blend affordability with excellence, ensuring your event is etched in hearts forever. At EventsUnlimited, we understand your event is as unique as you are. Our dedicated team is adept at turning visions into reality, making your dream event a seamless, unforgettable reality.
            </p>
            <p className="text-lg text-foreground/80">
              Thank you for choosing EventsUnlimited – let’s embark on this exciting journey together!
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section id="who-we-are" className="py-16 md:py-24 bg-secondary min-h-screen flex items-center">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
           <div className="animate-fadeInUp md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Who We Are</h2>
              <p className="text-lg text-foreground/80 mb-4">
                We are a dedicated team of professionals driven by a singular goal: to exceed your expectations and make your events unforgettable.
              </p>
              <p className="text-lg text-foreground/80">
                 Our team of experts meticulously handpicks a selection of top-tier vendors, ensuring that you have access to a wide range of services and products that cater to your specific event needs.
              </p>
           </div>
            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-lg animate-fadeInUp [animation-delay:0.2s]">
                 <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    <source src="/event.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
            </div>
        </div>
      </section>

       {/* Vision & Mission Section */}
      <section id="vision-mission" className="py-16 md:py-24 bg-background min-h-screen flex items-center">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          {/* Flippable Card */}
          <div className="group perspective-[1000px] order-last md:order-first animate-fadeInUp [animation-delay:0.2s] flex items-center justify-center">
            <div className="relative w-full max-w-md h-64 md:h-80 rounded-lg shadow-xl transition-transform duration-700 ease-in-out group-hover:rotate-y-180 preserve-3d">
              {/* Front Side */}
              <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-card p-6 rounded-lg backface-hidden shadow-md border border-border">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-16 w-16 text-primary mb-4"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                <h3 className="text-2xl font-semibold text-primary">Our Vision</h3>
                <p className="text-center text-sm text-muted-foreground mt-2">
                  To be the leading partner in creating impactful and memorable event experiences.
                </p>
              </div>
              {/* Back Side */}
              <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-accent p-6 rounded-lg rotate-y-180 backface-hidden shadow-md border border-border">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-16 w-16 text-accent-foreground mb-4"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
                <h3 className="text-2xl font-semibold text-accent-foreground">Our Mission</h3>
                <p className="text-center text-sm text-muted-foreground mt-2">
                  Simplify planning, connect with the best, and ensure unforgettable events.
                </p>
              </div>
            </div>
          </div>

           <div className="animate-fadeInUp">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Our Vision &amp; Our Mission</h2>
              <p className="text-lg text-foreground/80 mb-6">
                At Events Unlimited, our mission is to simplify event planning and execution by:
              </p>
              <ul className="space-y-3 text-lg text-foreground/80 stagger-children">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" />
                  Providing a comprehensive platform with a curated selection of top-notch vendors offering the best prices and packages.
                </li>
                 <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" />
                  Connecting you with industry-leading services and products that cater to your specific event requirements.
                </li>
                 <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" />
                 Making event planning easy and stress-free, ensuring you reach your targets while building lasting relationships.
                </li>
                 <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" />
                 Envisioning expanding our services worldwide to elevate public awareness of our offerings and expertise.
                </li>
              </ul>
           </div>

        </div>
      </section>

       {/* What We Offer Section */}
      <section id="what-we-offer" className="py-16 md:py-24 bg-secondary min-h-screen flex flex-col items-center justify-center">
        <div className="container mx-auto px-4 text-center">
           <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary animate-fadeInUp">What We Offer</h2>
           <div className="grid md:grid-cols-3 gap-8 stagger-children">
             <div className="bg-background p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-primary">Event Vendors</h3>
                <p className="text-foreground/80">
                   We have carefully curated a diverse list of event vendors, including venues, caterers, decorators, photographers, entertainers, and more. All pre-screened for reliability and quality.
                </p>
             </div>
              <div className="bg-background p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-primary">Best Price Guarantee</h3>
                <p className="text-foreground/80">
                  Our commitment is to bring you the best deals. We negotiate with vendors on your behalf to secure the most competitive prices for your events.
                </p>
             </div>
              <div className="bg-background p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-primary">Custom Packages</h3>
                <p className="text-foreground/80">
                  We understand each event is unique. We offer customized packages that cater to your specific needs, preferences, and budget.
                </p>
             </div>
           </div>
        </div>
      </section>

        {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-16 md:py-24 bg-background min-h-screen flex flex-col items-center justify-center">
        <div className="container mx-auto px-4">
           <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary animate-fadeInUp">Why Choose Us?</h2>
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
              {[
                { title: "Extensive Network", description: "With a vast network of trusted event vendors, we cater to events of any scale.", icon: CheckCircle },
                { title: "Find the Best Vendors", description: "Photographers, caterers, decorators, entertainers - explore our extensive network.", icon: CheckCircle },
                { title: "Stress-Free Planning", description: "Our user-friendly platform streamlines planning, saving you time and effort.", icon: CheckCircle },
                { title: "Expert Assistance", description: "Our event experts are ready to help with vendor selection and planning tips.", icon: CheckCircle },
                { title: "Transparent Pricing", description: "No hidden costs. Make informed decisions that fit your budget.", icon: CheckCircle },
                { title: "Genuine Reviews", description: "Access genuine client reviews to make well-informed decisions.", icon: CheckCircle },
              ].map((item, index) => (
                 <div key={index} className="flex items-start space-x-4">
                    <item.icon className="h-8 w-8 text-accent mt-1 shrink-0" />
                    <div>
                       <h3 className="text-xl font-semibold mb-2 text-primary">{item.title}</h3>
                       <p className="text-foreground/80">{item.description}</p>
                    </div>
                 </div>
              ))}
           </div>
        </div>
      </section>

       {/* Customer Satisfaction Section */}
       <section id="customer-satisfaction" className="py-16 md:py-24 bg-secondary min-h-screen flex flex-col items-center justify-center">
        <div className="container mx-auto px-4 text-center">
           <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary animate-fadeInUp">Customer Satisfaction</h2>
           <div className="max-w-3xl mx-auto space-y-6 animate-fadeInUp [animation-delay:0.1s]">
             <p className="text-lg text-foreground/80">
                Customer satisfaction is at the heart of everything we do. We take pride in delivering exceptional customer service and ensuring that each interaction with us is a positive one.
             </p>
              <p className="text-lg text-foreground/80">
               Our team is always ready to listen to your feedback and address any concerns promptly.
              </p>
            </div>
        </div>
      </section>

       {/* Join Us & CTA Section */}
      <section id="join-us" className="py-16 md:py-24 bg-background min-h-screen flex flex-col items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary animate-fadeInUp">Join Us on Our Journey</h2>
          <p className="max-w-3xl mx-auto text-lg text-foreground/80 mb-8 animate-fadeInUp [animation-delay:0.1s]">
            We invite you to be a part of our exciting journey as we continue to evolve and make a positive impact. Whether you are a customer, partner, or team member, we look forward to building meaningful connections and achieving great things together.
          </p>
          <div className="animate-fadeInUp [animation-delay:0.2s]">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

       {/* Client Logos are rendered within the Footer component, which has id="clients" */}
    </>
  );
}

