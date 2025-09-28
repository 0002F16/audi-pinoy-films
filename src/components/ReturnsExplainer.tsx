import { Card } from "@/components/ui/card";

const scenarios = [
  {
    label: "Good",
    proceeds: "₱15M",
    principal: "₱10M",  
    directorFee: "₱1.5M",
    misc: "₱1.5M",
    distributable: "₱2M",
    yourShare: "₱2,000",
    returns: "20%"
  },
  {
    label: "Better", 
    proceeds: "₱25M",
    principal: "₱10M",
    directorFee: "₱2.5M", 
    misc: "₱2.5M",
    distributable: "₱10M",
    yourShare: "₱10,000",
    returns: "100%"
  },
  {
    label: "Best",
    proceeds: "₱50M", 
    principal: "₱10M",
    directorFee: "₱5M",
    misc: "₱5M", 
    distributable: "₱30M",
    yourShare: "₱30,000",
    returns: "300%"
  }
];

const ReturnsExplainer = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-grotesk font-bold text-foreground mb-4">
            Returns depend on film performance
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Here's an illustrative example based on a ₱10,000 investment in a film with a ₱10M total budget.
          </p>
          <div className="bg-muted/50 p-4 rounded-lg max-w-2xl mx-auto">
            <p className="text-sm text-muted-foreground font-medium">
              Formula: Distributable pool = Total proceeds − principal − 10% director fee − 10% misc.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {scenarios.map((scenario) => (
            <Card key={scenario.label} className="p-6 shadow-card hover:shadow-lg transition-shadow">
              <div className="text-center mb-6">
                <h3 className={`text-xl font-grotesk font-bold mb-2 ${
                  scenario.label === 'Good' ? 'text-maroon' :
                  scenario.label === 'Better' ? 'text-primary' : 'text-teal-light'
                }`}>
                  {scenario.label}
                </h3>
                <p className="text-2xl font-bold text-foreground">{scenario.proceeds}</p>
                <p className="text-sm text-muted-foreground">Total proceeds</p>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Principal:</span>
                  <span className="text-foreground font-medium">-{scenario.principal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Director fee (10%):</span>
                  <span className="text-foreground font-medium">-{scenario.directorFee}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Misc (10%):</span>
                  <span className="text-foreground font-medium">-{scenario.misc}</span>
                </div>
                <hr className="border-border" />
                <div className="flex justify-between font-semibold">
                  <span className="text-foreground">Distributable:</span>
                  <span className="text-primary">{scenario.distributable}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Your share:</span>
                  <span className="text-foreground font-medium">{scenario.yourShare}</span>
                </div>
                <div className="flex justify-between text-lg font-bold">
                  <span className="text-foreground">Total returns:</span>
                  <span className={
                    scenario.label === 'Good' ? 'text-maroon' :
                    scenario.label === 'Better' ? 'text-primary' : 'text-teal-light'
                  }>
                    {scenario.returns}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center bg-muted/30 p-6 rounded-lg">
          <p className="text-sm text-muted-foreground font-medium">
            <strong>Important:</strong> This is illustrative only and not financial advice. 
            Actual returns may vary significantly and you may lose your entire investment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReturnsExplainer;