import { useState } from "react";
import { Card } from "@/components/ui/card";

type Step = {
  id: number;
  title: string;
  description: string;
  bullets: string[];
};

const steps: Step[] = [
  {
    id: 1,
    title: "Pick a film",
    description: "Browse available projects and choose what resonates with you.",
    bullets: [
      "See director, cast, budget, timeline.",
      "Read risks in plain language.",
      "Decide fast with a one-page summary."
    ]
  },
  {
    id: 2,
    title: "Commit funds",
    description: "Secure your participation with our transparent process.",
    bullets: [
      "Minimum ₱5k–₱10k.",
      "Funds held in escrow until target is reached.",
      "Auto-refund if a project does not proceed."
    ]
  },
  {
    id: 3,
    title: "Track progress",
    description: "Stay informed throughout the entire production journey.",
    bullets: [
      "Email updates at each milestone.",
      "Transparent dates and deliverables.",
      "Post-release report and distributions."
    ]
  }
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(1);

  const handleStepClick = (stepId: number) => {
    setActiveStep(stepId);
    // Analytics event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'howitworks_step_view', {
        step_name: steps.find(s => s.id === stepId)?.title || `step_${stepId}`
      });
    }
  };

  const activeStepData = steps.find(step => step.id === activeStep) || steps[0];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-grotesk font-bold text-foreground mb-4">
            How it works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to start crowdproducing Filipino films
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Steps List */}
          <div className="space-y-4">
            {steps.map((step) => (
              <button
                key={step.id}
                onClick={() => handleStepClick(step.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleStepClick(step.id);
                  }
                }}
                className={`w-full text-left p-6 rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                  activeStep === step.id
                    ? 'border-primary bg-primary/5 shadow-lg'
                    : 'border-border bg-card hover:border-primary/50 hover:shadow-md'
                }`}
                role="tab"
                aria-selected={activeStep === step.id}
                aria-controls={`step-panel-${step.id}`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                      activeStep === step.id
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {step.id}
                  </div>
                  <div>
                    <h3
                      className={`text-lg font-semibold ${
                        activeStep === step.id ? 'text-primary' : 'text-foreground'
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      {step.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Detail Panel */}
          <div
            id={`step-panel-${activeStep}`}
            role="tabpanel"
            aria-labelledby={`step-${activeStep}`}
            className="lg:sticky lg:top-8"
          >
            <Card className="p-8 shadow-lg">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                    {activeStepData.id}
                  </div>
                  <h3 className="text-2xl font-grotesk font-bold text-foreground">
                    {activeStepData.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-lg">
                  {activeStepData.description}
                </p>
              </div>

              <div className="space-y-3">
                {activeStepData.bullets.map((bullet, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-foreground">{bullet}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;