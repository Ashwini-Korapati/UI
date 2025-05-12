
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import { ClientLogos } from '@/components/shared/client-logos'; // Re-importing here for clarity, assuming Footer handles display

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden bg-primary/10 flex items-center justify-center text-center">
        {/* Placeholder for Video Background - Replace with actual video if available */}
        <div className="absolute inset-0 z-0">
           <Image
              src="https://picsum.photos/1920/1080?random=hero"
              alt="Event background"
              layout="fill"
              objectFit="cover"
              className="opacity-30"
              priority
              data-ai-hint="event celebration"
            />
           {/* <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-30"
            poster="https://picsum.photos/1920/1080?random=poster" // Optional poster image
           >
            <source src="/placeholder-video.mp4" type="video/mp4" /> // Replace with actual video path
            Your browser does not support the video tag.
           </video> */}
           <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-primary-foreground drop-shadow-md">
            Events should be memorable and engaging
          </h1>
          <p className="text-lg md:text-2xl mb-6 text-primary-foreground/90 drop-shadow-sm">
            Coming together is a beginning; working together is success.
          </p>
          <Button asChild size="lg" variant="default" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/about">Learn More</Link>
          </Button>
        </div>
      </section>

       {/* Intro Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
           <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
             Events_Unlimited
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 italic">
            "Crafting Memorable Moments."
          </p>
          <p className="max-w-3xl mx-auto text-lg text-foreground/80 mb-6">
            We specialize in creating unforgettable experiences for every occasion. Welcome to EventsUnlimited! We’ve been your partner in crafting exceptional event experiences from our base in Bangalore. Our goal is simple yet powerful: connecting you with India’s best vendors to create extraordinary moments without the extravagant price tag.
          </p>
           <p className="max-w-3xl mx-auto text-lg text-foreground/80 mb-6">
            For corporate events, we blend affordability with excellence, ensuring your event is etched in hearts forever. At EventsUnlimited, we understand your event is as unique as you are. Our dedicated team is adept at turning visions into reality, making your dream event a seamless, unforgettable reality.
          </p>
          <p className="max-w-3xl mx-auto text-lg text-foreground/80">
            Thank you for choosing EventsUnlimited – let’s embark on this exciting journey together!
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
           <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Who We Are</h2>
              <p className="text-lg text-foreground/80 mb-4">
                We are a dedicated team of professionals driven by a singular goal: to exceed your expectations and make your events unforgettable.
              </p>
              <p className="text-lg text-foreground/80">
                 Our team of experts meticulously handpicks a selection of top-tier vendors, ensuring that you have access to a wide range of services and products that cater to your specific event needs.
              </p>
           </div>
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                 <Image
                  src="https://picsum.photos/600/400?random=team"
                  alt="Events Unlimited Team"
                  layout="fill"
                  objectFit="cover"
                   data-ai-hint="team meeting"
                />
            </div>
        </div>
      </section>

       {/* Vision & Mission Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
           <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg order-last md:order-first">
                 <Image
                  src="https://picsum.photos/600/400?random=vision"
                  alt="Vision and Mission concept"
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint="target goal"
                />
            </div>
           <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Our Vision & Our Mission</h2>
              <p className="text-lg text-foreground/80 mb-6">
                At Events Unlimited, our mission is to simplify event planning and execution by:
              </p>
              <ul className="space-y-3 text-lg text-foreground/80">
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
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 text-center">
           <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary">What We Offer</h2>
           <div className="grid md:grid-cols-3 gap-8">
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
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
           <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Why Choose Us?</h2>
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
       <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 text-center">
           <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Customer Satisfaction</h2>
           <p className="max-w-3xl mx-auto text-lg text-foreground/80 mb-6">
              Customer satisfaction is at the heart of everything we do. We take pride in delivering exceptional customer service and ensuring that each interaction with us is a positive one.
           </p>
            <p className="max-w-3xl mx-auto text-lg text-foreground/80">
             Our team is always ready to listen to your feedback and address any concerns promptly.
            </p>
        </div>
      </section>

       {/* Join Us & CTA Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Join Us on Our Journey</h2>
          <p className="max-w-3xl mx-auto text-lg text-foreground/80 mb-8">
            We invite you to be a part of our exciting journey as we continue to evolve and make a positive impact. Whether you are a customer, partner, or team member, we look forward to building meaningful connections and achieving great things together.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>

       {/* Client Logos are likely rendered within the Footer component */}
       {/* <ClientLogos /> */}
    </>
  );
}
