
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      {/* Page Header - Full Width */}
      <section className="py-12 md:py-20 bg-secondary text-center px-4">
        <div className="max-w-4xl mx-auto"> {/* Added max-width for content */}
          <h1 className="text-4xl md:text-5xl font-bold text-primary">About Events Unlimited</h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground">Learn more about our team, mission, and values.</p>
        </div>
      </section>

      {/* Who We Are Section - Full Width */}
      <section className="py-16 md:py-24 bg-background px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto"> {/* Added max-width */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Who We Are</h2>
            <p className="text-lg text-foreground/80 mb-4">
              We are a dedicated team of professionals based in Bangalore, driven by a singular goal: to exceed your expectations and make your events unforgettable. Our passion lies in connecting clients with the best event vendors across India, ensuring high-quality experiences without the hefty price tag.
            </p>
            <p className="text-lg text-foreground/80">
              Our team of experts meticulously handpicks and vets a selection of top-tier vendors. This rigorous process guarantees access to a wide range of reliable services and products, tailored to meet the specific needs of your corporate events, celebrations, and gatherings. We pride ourselves on blending affordability with excellence.
            </p>
          </div>
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://picsum.photos/600/400?random=team2"
              alt="Professional team working"
              layout="fill"
              objectFit="cover"
              data-ai-hint="team collaboration"
            />
          </div>
        </div>
      </section>

      {/* Vision & Mission Section - Full Width */}
      <section className="py-16 md:py-24 bg-secondary px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto"> {/* Added max-width */}
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg order-last md:order-first">
            <Image
              src="https://picsum.photos/600/400?random=mission2"
              alt="Mission concept graphic"
              layout="fill"
              objectFit="cover"
              data-ai-hint="success strategy"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Our Vision & Our Mission</h2>
            <p className="text-lg text-foreground/80 mb-6">
              At Events Unlimited, our mission is to fundamentally simplify the process of event planning and execution. We achieve this by:
            </p>
            <ul className="space-y-3 text-lg text-foreground/80">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" />
                Providing a comprehensive, user-friendly platform featuring a curated selection of top-notch vendors, ensuring the best prices and packages available.
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" />
                Connecting you seamlessly with industry-leading services and products specifically tailored to your unique event requirements.
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" />
                Making the entire event planning process easy and stress-free, allowing you to focus on your goals while building lasting relationships through our extended client services.
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" />
                Our vision includes expanding our services globally, aiming to elevate public awareness of our diverse offerings and proven expertise in event management.
              </li>
            </ul>
          </div>
        </div>
      </section>

        {/* Why Choose Us Section - Full Width */}
      <section className="py-16 md:py-24 bg-background px-4">
        <div className="max-w-5xl mx-auto"> {/* Kept max-width for centered content */}
           <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Why Partner With Us?</h2>
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Unmatched Network", description: "Access our vast, vetted network of premier event vendors for any scale.", icon: CheckCircle },
                { title: "Simplified Planning", description: "Our intuitive platform streamlines vendor selection and booking.", icon: CheckCircle },
                { title: "Expert Guidance", description: "Benefit from our experienced team's advice every step of the way.", icon: CheckCircle },
                { title: "Transparent Value", description: "Clear pricing and negotiated rates ensure you get the best value.", icon: CheckCircle },
                 { title: "Quality Assurance", description: "We stand by the quality and reliability of our handpicked vendors.", icon: CheckCircle },
                 { title: "Client Focused", description: "Your satisfaction is our priority, driving everything we do.", icon: CheckCircle },
              ].map((item, index) => (
                 <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-secondary transition-colors">
                    <item.icon className="h-7 w-7 text-accent mt-1 shrink-0" />
                    <div>
                       <h3 className="text-lg font-semibold mb-1 text-primary">{item.title}</h3>
                       <p className="text-sm text-foreground/80">{item.description}</p>
                    </div>
                 </div>
              ))}
           </div>
        </div>
      </section>
    </>
  );
}
