import PricingCard from "../common/PricingCard";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-14">
          <h3 className="mb-3 text-white">
            Simple, Scalable Pricing
          </h3>
          <p className="text-muted-foreground text-sm">
            Start free and scale as your knowledge base grows.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <PricingCard
            title="PERSONAL"
            price="$0"
            buttonText="Get Started Free"
            features={[
              "3 PDF uploads per month",
              "Standard AI synthesis",
              "Mobile app access",
            ]}
          />

          <PricingCard
            title="PROFESSIONAL"
            price="$19"
            buttonText="Upgrade to Pro"
            popular
            features={[
              "Unlimited PDF uploads",
              "Deep semantic analysis",
              "Export to Notion & Slack",
              "Priority AI processing",
            ]}
          />
        </div>
      </div>
    </section>
  );
}