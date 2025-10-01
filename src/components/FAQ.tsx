import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "What is crowdproducing?",
    answer: "Crowdproducing is a form of film financing where individuals contribute funds to support film production in exchange for potential returns based on the film's performance. Unlike traditional crowdfunding, participants may receive financial returns if the film is successful."
  },
  {
    question: "What are the minimum amounts?",
    answer: "The minimum participation starts at ₱5,000 to ₱10,000 per film project. This makes it accessible for Filipino film enthusiasts to support local cinema while potentially earning returns."
  },
  {
    question: "What are the risks?",
    answer: "Film investments are high-risk. Projects may not reach funding targets, films may not be completed, or completed films may not generate sufficient revenue for returns. You could lose your entire investment. Only invest what you can afford to lose."
  },
  {
    question: "How will I get updates?",
    answer: "You'll receive regular email updates at key production milestones including pre-production, filming, post-production, and distribution. We maintain transparent communication with detailed progress reports and financial summaries."
  },
  {
    question: "When will investing open?",
    answer: "We're currently in development and preparing our first batch of film projects. Join our waitlist to be notified when the platform launches and film investments become available."
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