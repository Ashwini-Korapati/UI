
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CalendarDays, GanttChartSquare, Handshake, Palette, ScreenShare, Zap, Users, Gift, Printer, Puzzle } from 'lucide-react'; // Added new icons

const corporateServices = [
 {
    id: "dj-services", // Unique ID
    title: "DJ Services",
    description: "Our professional DJs curate the perfect soundtrack for your corporate event, from background ambiance to high-energy dance floors. We work with you to understand your audience and event theme, ensuring the music enhances the overall experience.",
    imageUrl: "/dj1.jpeg",
    aiHint: "dj setup console" // AI Hint
  },
  {
    id: "anchoring-hosting", // Unique ID
    title: "Anchoring & Hosting",
    description: "Engage your audience with our experienced and charismatic anchors. They masterfully guide your event's flow, introduce speakers, facilitate discussions, and keep energy levels high, ensuring a smooth and professional presentation.",
    imageUrl: "https://picsum.photos/600/400?random=anchor",
     aiHint: "public speaking"
  },
  {
    id: "corporate-gifting", // Unique ID
    title: "Corporate Gifting",
    description: "Make a lasting impression with thoughtfully curated corporate gifts. We offer a wide range of options, from branded merchandise to luxury items, tailored to your budget and recipient profile, perfect for attendees, speakers, or employees.",
    imageUrls: Array.from({ length: 13 }, (_, i) => `/print${i + 1}.jpg`),
    aiHint: "gift boxes" // AI Hint
  },
  {
    id: "event-printing", // Unique ID
    title: "Event Printing Solutions",
    description: "High-quality printing services for all your event needs. We handle everything from invitations, banners, backdrops, brochures, and signage, ensuring professional-looking materials that align with your brand identity.",
    imageUrl: "https://picsum.photos/600/400?random=printing",
    aiHint: "print machine" // AI Hint
  },
  {
    id: "games-team-building", // Unique ID
    title: "Games & Team Building",
    description: "Foster collaboration and fun with our engaging games and team-building activities. We design customized experiences, from icebreakers to complex challenges, perfect for boosting morale and strengthening team dynamics.",
    imageUrl: "/games.JPG",
    aiHint: "team building activity" // AI Hint
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
    icon: Handshake,
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


export default function CorporateEventsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="py-12 md:py-20 bg-secondary text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">Corporate Event Services</h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Tailored solutions to make your corporate gatherings impactful and memorable. Explore our range of services designed for excellence.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Our Offerings</h2>
           <Accordion type="single" collapsible className="w-full">
             {corporateServices.map((service) => (
              <AccordionItem value={service.id} key={service.id} id={service.id} className="border-b border-border last:border-b-0">
                <AccordionTrigger className="text-xl hover:no-underline text-primary hover:text-accent py-4 px-2">
                  {service.title}
                </AccordionTrigger>
                <AccordionContent className="px-2 pb-6">
                  {service.id === 'corporate-gifting' && service.imageUrls && Array.isArray(service.imageUrls) ? (
                    // Gifting Gallery Layout
                    <div className="md:col-span-3 mt-2">
                      <p className="text-base text-foreground/80 mb-6">
                        {service.description}
                      </p>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {service.imageUrls.map((url, index) => (
                          <div key={url} className="flex justify-center items-center p-1 bg-muted/10 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-md overflow-hidden">
                              <Image
                                src={url}
                                alt={`${service.title} Example ${index + 1}`}
                                layout="fill"
                                objectFit="contain"
                                data-ai-hint={service.aiHint || "corporate gift"}
                                unoptimized // Useful for many local static images if sizes vary
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    // Standard layout for other services (text + single image)
                    <div className="grid md:grid-cols-3 gap-6 items-start">
                      <div className="md:col-span-2">
                        <p className="text-base text-foreground/80">
                          {service.description}
                        </p>
                      </div>
                      {service.imageUrl && (
                        <div className="relative h-48 w-full md:col-span-1 rounded-md overflow-hidden shadow-sm">
                          <Image
                            src={service.imageUrl}
                            alt={service.title}
                            layout="fill"
                            objectFit="cover"
                            data-ai-hint={service.aiHint}
                            unoptimized={service.imageUrl.startsWith('/')} // Unoptimize local images
                          />
                        </div>
                      )}
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
             ))}
          </Accordion>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="corporate-faq" className="py-16 md:py-24 bg-secondary min-h-screen flex flex-col items-center justify-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary animate-fadeInUp">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full bg-background p-6 rounded-lg shadow-md border border-border">
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
    </>
  );
}
