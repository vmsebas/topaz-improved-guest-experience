import { CheckCircle, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: CheckCircle,
    title: "Easy Check-in",
    description: "Streamline your guest check-in process with our intuitive interface."
  },
  {
    icon: Zap,
    title: "Fast & Reliable",
    description: "Lightning-fast performance ensures smooth operation at all times."
  },
  {
    icon: Shield,
    title: "Secure",
    description: "Enterprise-grade security to protect your guests' data."
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-16 bg-muted/50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">
          Everything you need
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-background shadow-sm hover:shadow-md transition-shadow animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <feature.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};