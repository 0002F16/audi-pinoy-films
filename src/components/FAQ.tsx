import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "What is Audience Impact?",
    answer: "Audience Impact lets you invest in Filipino films while they're still in pre-production—before cameras roll. You become a crowdproducer who helps bring stories to life and shares in the potential returns once the film is released."
  },
  {
    question: "How does crowdproducing work?",
    answer: "You browse upcoming projects in pre-production, choose one you believe in, and fund part of its budget. When the film earns from cinemas, streaming, or licensing, you receive your share of the profit."
  },
  {
    question: "How much can I start with?",
    answer: "Start with as little as ₱5,000. It's built for everyday Filipinos who want access to the movie business without needing millions."
  },
  {
    question: "Is this the same as crypto or MLM?",
    answer: "No. You're not buying tokens or joining a network. You're helping finance real films with real directors, actors, and crews—transparent and trackable from concept to release."
  },
  {
    question: "How do I earn returns?",
    answer: "After production and agreed fees, the remaining profit pool is split among backers. Returns depend on each film's actual performance."
  },
  {
    question: "Is my money safe?",
    answer: "Every project includes full disclosures, signed agreements, and production updates. You always know where your funds go and how the project is progressing."
  },
  {
    question: "When can I join?",
    answer: "We're running a concept test ahead of launch. Join an early interview and get ₱500 compensation for your insights—you'll be among the first to help shape the platform."
  }
];

const FAQ = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-proxima font-bold text-foreground mb-4">
            Frequently asked questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about crowdproducing Filipino films
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqData.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-background border border-border rounded-lg px-6"
            >
              <AccordionTrigger className="text-left font-medium hover:no-underline hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;