
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const corporateServices = [
 {
    id: "dj",
    title: "DJ Services",
    description: "Our professional DJs curate the perfect soundtrack for your corporate event, from background ambiance to high-energy dance floors. We work with you to understand your audience and event theme, ensuring the music enhances the overall experience.",
    imageUrl: "https://picsum.photos/600/400?random=dj",
    aiHint: "dj setup"
  },
  {
    id: "anchoring",
    title: "Anchoring & Hosting",
    description: "Engage your audience with our experienced and charismatic anchors. They masterfully guide your event's flow, introduce speakers, facilitate discussions, and keep energy levels high, ensuring a smooth and professional presentation.",
    imageUrl: "https://picsum.photos/600/400?random=anchor",
     aiHint: "public speaking"
  },
  {
    id: "gifting",
    title: "Corporate Gifting",
    description: "Make a lasting impression with thoughtfully curated corporate gifts. We offer a wide range of options, from branded merchandise to luxury items, tailored to your budget and recipient profile, perfect for attendees, speakers, or employees.",
    imageUrl: "https://picsum.photos/600/400?random=gifts",
    aiHint: "gift boxes"
  },
  {
    id: "printing",
    title: "Event Printing Solutions",
    description: "High-quality printing services for all your event needs. We handle everything from invitations, banners, backdrops, brochures, and signage, ensuring professional-looking materials that align with your brand identity.",
    imageUrl: "https://picsum.photos/600/400?random=printing",
    aiHint: "print machine"
  },
  {
    id: "games",
    title: "Games & Team Building",
    description: "Foster collaboration and fun with our engaging games and team-building activities. We design customized experiences, from icebreakers to complex challenges, perfect for boosting morale and strengthening team dynamics.",
    imageUrl: "https://picsum.photos/600/400?random=games",
    aiHint: "team building"
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
                  <div className="grid md:grid-cols-3 gap-6 items-start">
                    <div className="md:col-span-2">
                      <p className="text-base text-foreground/80">
                        {service.description}
                      </p>
                    </div>
                    <div className="relative h-48 w-full md:col-span-1 rounded-md overflow-hidden shadow-sm">
                       <Image
                        src={service.imageUrl}
                        alt={service.title}
                        layout="fill"
                        objectFit="cover"
                        data-ai-hint={service.aiHint}
                      />
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
             ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
