
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle, HelpCircle, CalendarDays, GanttChartSquare, Handshake, Palette, ScreenShare, Users, Gift, Printer, Puzzle, Building, Rocket, UsersRound, Target, TrendingUp, CalendarCheck, UserCheck } from 'lucide-react';
import { ClientLogos } from '@/components/shared/client-logos';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { StatsSection } from '@/components/shared/stats-section';
import { HeroVideoCarousel } from '@/components/shared/hero-video-carousel'; // Added import

const whatWeOfferItems = [
  {
    title: "Event Vendors",
    description: "We have carefully curated a diverse list of event vendors, including venues, caterers, decorators, photographers, entertainers, and more. All pre-screened for reliability and quality.",
    back_description: "Access our extensive network of pre-screened, high-quality event vendors tailored to your needs."
  },
  {
    title: "Best Price Guarantee",
    description: "Our commitment is to bring you the best deals. We negotiate with vendors on your behalf to secure the most competitive prices for your events.",
    back_description: "Benefit from our negotiation expertise to get the most competitive pricing for all vendor services."
  },
  {
    title: "Custom Packages",
    description: "We understand each event is unique. We offer customized packages that cater to your specific needs, preferences, and budget.",
    back_description: "Let us tailor an event package that perfectly aligns with your vision, requirements, and budget."
  },
];

const faqItems = [
  {
    id: "faq-event-types",
    question: "What types of corporate events do you manage?",
    answer: "We manage a wide range of corporate events including Sports Day, Annual Day, Staff Parties, Product Launches, AGMs, Family Day events, and Tech Conferences.",
    icon: GanttChartSquare,
  },
  {
    id: "faq-booking-time",
    question: "How early should we book our event with you?",
    answer: "For larger events, we recommend reaching out at least 2-3 months in advance. For smaller or mid-scale events, a lead time of 4-6 weeks usually works well. Ideally, 30 days is perfect for us to deliver the best results.",
    icon: CalendarDays,
  },
  {
    id: "faq-venue-selection",
    question: "Can you help us choose the right venue?",
    answer: "Yes, we do take care of the venue selection and other bookings as well to ensure it aligns with your event's requirements and budget.",
    icon: Building,
  },
  {
    id: "faq-custom-themes",
    question: "Do you offer custom themes and creative concepts?",
    answer: "Yes, we specialize in customized events. Most of the time, we tailor themes and creative concepts to match your brand and event objectives.",
    icon: Palette,
  },
  {
    id: "faq-event-services",
    question: "What services do you provide as part of event management?",
    answer: "We provide end-to-end event management services, covering everything from initial planning and vendor coordination to on-site execution and post-event analysis.",
    icon: ScreenShare,
  },
];

const heroVideos = [
  { src: "/video1.mp4", type: "video/mp4" },
  { src: "/video2.mp4", type: "video/mp4" },
  { src: "/video3.mp4", type: "video/mp4" },
];


export default function Home() {
  return (
    <>
      {/* Hero Section - Full Width */}
      <section id="hero" className="relative min-h-screen w-full overflow-hidden flex items-center justify-center text-center px-4">
        {/* Video Background Carousel */}
        <div className="absolute inset-0 z-0">
           <HeroVideoCarousel videos={heroVideos} />
           {/* Gradient Overlay: primary color covering approx 50% from left, fading out. Opacity controls blend with video. */}
           <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-primary/10 to-transparent opacity-50 md:opacity-40 z-[1]"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto p-4"> {/* Text container, text will be on gradient */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary-foreground drop-shadow-lg animate-fadeInUp [animation-delay:0.1s]">
            Events should be memorable and engaging
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 drop-shadow-md animate-fadeInUp [animation-delay:0.3s]">
            Coming together is a beginning; working together is success.
          </p>
          <div className="animate-fadeInUp [animation-delay:0.5s]">
            <Link href="/about" passHref legacyBehavior>
              <a className="custom-sparkle-button">
                <div className="dots_border"></div>
                <svg className="sparkle" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true">
                  <path className="path" d="M6.83739 1.00001C6.93721 0.832825 7.16725 0.832825 7.26707 1.00001L8.28358 2.68359C8.33483 2.76938 8.42328 2.82251 8.52029 2.8269L10.3849 2.98674C10.5657 3.00101 10.6559 3.22026 10.5217 3.3369L9.14077 4.528C9.06813 4.59108 9.03527 4.68886 9.05578 4.78261L9.46295 6.60708C9.5002 6.78361 9.30981 6.91804 9.15419 6.82442L7.48362 5.80445C7.40006 5.75292 7.29336 5.75292 7.20979 5.80445L5.53922 6.82442C5.3836 6.91804 5.19322 6.78361 5.23046 6.60708L5.63763 4.78261C5.65814 4.68886 5.62528 4.59108 5.55264 4.528L4.17164 3.3369C4.03741 3.22026 4.12768 3.00101 4.30841 2.98674L6.17303 2.8269C6.27004 2.82251 6.3585 2.76938 6.40974 2.68359L6.83739 1.00001Z"></path>
                  <path className="path" d="M3.25342 6.00001C3.35324 5.83282 3.58328 5.83282 3.6831 6.00001L4.69961 7.68359C4.75086 7.76938 4.83931 7.82251 4.93632 7.8269L6.80094 7.98674C6.98167 8.00101 7.07194 8.22026 6.93771 8.3369L5.55671 9.528C5.48407 9.59108 5.45120 9.68886 5.47171 9.78261L5.87888 11.6071C5.91613 11.7836 5.72574 11.918 5.57012 11.8244L3.89955 10.8044C3.816 10.7529 3.70929 10.7529 3.62572 10.8044L1.95515 11.8244C1.79953 11.918 1.60915 11.7836 1.64639 11.6071L2.05356 9.78261C2.07407 9.68886 2.04121 9.59108 1.96857 9.528L0.587567 8.3369C0.453343 8.22026 0.543614 8.00101 0.724345 7.98674L2.58896 7.8269C2.68597 7.82251 2.77442 7.76938 2.82567 7.68359L3.25342 6.00001Z"></path>
                  <path className="path" d="M11.0085 6.76476C11.1083 6.59757 11.3383 6.59757 11.4381 6.76476L12.4546 8.44835C12.5059 8.53414 12.5943 8.58726 12.6913 8.59166L14.556 8.7515C14.7367 8.76576 14.827 8.98501 14.6927 9.10166L13.3117 10.2928C13.2391 10.3558 13.2062 10.4536 13.2267 10.5474L13.6339 12.3718C13.6711 12.5484 13.4807 12.6828 13.3251 12.5892L11.6546 11.5692C11.571 11.5177 11.4643 11.5177 11.3807 11.5692L9.71017 12.5892C9.55455 12.6828 9.36417 12.5484 9.40141 12.3718L9.80858 10.5474C9.82909 10.4536 9.79623 10.3558 9.72359 10.2928L8.34259 9.10166C8.20836 8.98501 8.29863 8.76576 8.47936 8.7515L10.344 8.59166C10.441 8.58726 10.5295 8.53414 10.5807 8.44835L11.0085 6.76476Z"></path>
                </svg>
                <span className="text_button">Learn More</span>
              </a>
            </Link>
           </div>
        </div>
      </section>

       {/* Intro Section - Full Width */}
      <section id="intro" className="py-16 md:py-24 bg-background min-h-screen flex flex-col items-center justify-center px-4">
        <div className="w-full text-center max-w-7xl mx-auto">
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

      {/* Stats Section - Full Width */}
      <StatsSection />


      {/* Who We Are Section - Full Width */}
      <section id="who-we-are" className="py-16 md:py-24 bg-secondary min-h-screen flex items-center px-4">
        <div className="w-full grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto"> {/* Added max-width for content */}
           <div className="animate-fadeInUp md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Who We Are</h2>
              <p className="text-lg text-foreground/80 mb-4">
                We are a dedicated team of professionals driven by a singular goal: to exceed your expectations and make your events unforgettable.
              </p>
              <p className="text-lg text-foreground/80">
                 Our team of experts meticulously handpicks a selection of top-tier vendors, ensuring that you have access to a wide range of services and products that cater to your specific event needs.
              </p>
           </div>
            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-lg animate-fadeInUp [animation-delay:0.2s] object-cover">
                 <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover" // Ensure video covers the div
                  >
                    <source src="/event.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
            </div>
        </div>
      </section>

       {/* Vision & Mission Section - Full Width */}
      <section id="vision-mission" className="py-16 md:py-24 bg-background min-h-screen flex items-center px-4">
        <div className="w-full grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto"> {/* Added max-width for content */}
          {/* Flippable Card */}
          <div className="group perspective-[1000px] order-last md:order-first animate-fadeInUp [animation-delay:0.2s] flex items-center justify-center h-full min-h-[280px] md:min-h-[320px]">
            <div className="relative w-full max-w-md h-full rounded-lg shadow-xl transition-transform duration-700 ease-in-out group-hover:rotate-y-180 preserve-3d">
              {/* Front Side */}
              <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-card p-6 rounded-lg backface-hidden shadow-md border border-border">
                <Rocket className="h-16 w-16 text-primary mb-4" />
                <h3 className="text-2xl font-semibold text-primary text-center">Our Vision</h3>
                <p className="text-center text-sm text-muted-foreground mt-2">
                  To be the leading partner in creating impactful and memorable event experiences.
                </p>
              </div>
              {/* Back Side */}
              <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-accent p-6 rounded-lg rotate-y-180 backface-hidden shadow-md border border-border">
                 <Target className="h-16 w-16 text-accent-foreground mb-4" />
                <h3 className="text-2xl font-semibold text-accent-foreground text-center">Our Mission</h3>
                <p className="text-center text-sm text-accent-foreground/80 mt-2">
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
              <ul className="space-y-3 text-lg text-foreground/80">
                {[
                  "Providing a comprehensive platform with a curated selection of top-notch vendors offering the best prices and packages.",
                  "Connecting you with industry-leading services and products that cater to your specific event requirements.",
                  "Making event planning easy and stress-free, ensuring you reach your targets while building lasting relationships.",
                  "Envisioning expanding our services worldwide to elevate public awareness of our offerings and expertise."
                ].map((item, index) => (
                  <li key={index} className="flex items-start animate-fadeInUp" style={{animationDelay: `${0.3 + index * 0.1}s`}}>
                    <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
           </div>
        </div>
      </section>

       {/* What We Offer Section - Full Width */}
      <section id="what-we-offer" className="py-16 md:py-24 bg-secondary min-h-screen flex flex-col items-center justify-center px-4">
        <div className="w-full text-center max-w-7xl mx-auto"> {/* Added max-width for content */}
           <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary animate-fadeInUp">What We Offer</h2>
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"> {/* Centered items */}
            {whatWeOfferItems.map((item, index) => (
              <div
                key={index}
                className="flip-card animate-fadeInUp"
                style={{animationDelay: `${0.2 + index * 0.1}s`}}
              >
                <div className="flip-card-inner">
                  {/* Front Side */}
                  <div className="flip-card-front">
                    <h3 className="title">{item.title}</h3>
                    <p className="mt-3 text-sm">{item.description}</p>
                  </div>
                  {/* Back Side */}
                  <div className="flip-card-back">
                    <h3 className="title">{item.title}</h3>
                    <p className="mt-3 text-sm opacity-90">{item.back_description}</p>
                  </div>
                </div>
              </div>
            ))}
           </div>
        </div>
      </section>

        {/* Why Choose Us Section - Full Width */}
      <section id="why-choose-us" className="py-16 md:py-24 bg-background min-h-screen flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-7xl mx-auto"> {/* Added max-width for content */}
           <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary animate-fadeInUp">Why Choose Us?</h2>
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Extensive Network", description: "With a vast network of trusted event vendors, we cater to events of any scale.", icon: UsersRound },
                { title: "Find the Best Vendors", description: "Photographers, caterers, decorators, entertainers - explore our extensive network.", icon: Handshake },
                { title: "Stress-Free Planning", description: "Our user-friendly platform streamlines planning, saving you time and effort.", icon: Puzzle },
                { title: "Expert Assistance", description: "Our event experts are ready to help with vendor selection and planning tips.", icon: HelpCircle },
                { title: "Transparent Pricing", description: "No hidden costs. Make informed decisions that fit your budget.", icon: CheckCircle },
                { title: "Genuine Reviews", description: "Access genuine client reviews to make well-informed decisions.", icon: CheckCircle },
              ].map((item, index) => (
                 <div key={index} className="flex items-start space-x-4 animate-fadeInUp" style={{animationDelay: `${0.2 + index * 0.07}s`}}>
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


       {/* Customer Satisfaction Section - Full Width */}
       <section id="customer-satisfaction" className="py-16 md:py-24 bg-secondary min-h-screen flex flex-col items-center justify-center px-4">
        <div className="w-full text-center max-w-3xl mx-auto"> {/* Added max-width for content */}
           <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary animate-fadeInUp">Customer Satisfaction</h2>
           <div className="space-y-6 animate-fadeInUp [animation-delay:0.1s]">
             <p className="text-lg text-foreground/80">
                Customer satisfaction is at the heart of everything we do. We take pride in delivering exceptional customer service and ensuring that each interaction with us is a positive one.
             </p>
              <p className="text-lg text-foreground/80">
               Our team is always ready to listen to your feedback and address any concerns promptly.
              </p>
            </div>
        </div>
      </section>

       {/* Join Us & CTA Section - Full Width */}
      <section id="join-us" className="py-16 md:py-24 bg-background min-h-screen flex flex-col items-center justify-center px-4">
        <div className="w-full text-center max-w-3xl mx-auto"> {/* Added max-width for content */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary animate-fadeInUp">Join Us on Our Journey</h2>
          <p className="text-lg text-foreground/80 mb-8 animate-fadeInUp [animation-delay:0.1s]">
            We invite you to be a part of our exciting journey as we continue to evolve and make a positive impact. Whether you are a customer, partner, or team member, we look forward to building meaningful connections and achieving great things together.
          </p>
          <div className="animate-fadeInUp [animation-delay:0.2s]">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section - Full Width */}
      <section id="faq" className="py-16 md:py-24 bg-secondary min-h-screen flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-5xl mx-auto"> {/* Increased max-width for FAQ card */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary animate-fadeInUp">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full bg-card p-6 rounded-lg shadow-md border border-border">
            {faqItems.map((item) => (
              <AccordionItem value={item.id} key={item.id} className="border-b border-border last:border-b-0">
                <AccordionTrigger className="text-lg md:text-xl hover:no-underline text-primary hover:text-accent py-4 text-left">
                  <item.icon className="h-5 w-5 mr-3 text-accent shrink-0" />
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-2 pb-4 text-base text-foreground/80">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

       {/* Client Logos are rendered within the Footer component, which has id="clients" */}
    </>
  );
}
