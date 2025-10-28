import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Package, Truck, Users, FileText, Clock, Shield, MapPin, CheckCircle2 } from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      icon: Package,
      title: "First-Mile Pickup",
      description: "Reliable pickup of goods from warehouses and distribution centers with real-time tracking.",
      features: [
        "Scheduled and on-demand pickups",
        "Warehouse-to-hub transfers",
        "Inventory verification",
        "Real-time status updates",
      ],
    },
    {
      icon: Truck,
      title: "Last-Mile Delivery",
      description: "Timely delivery to local hubs or end customers across the city with proof of delivery.",
      features: [
        "Same-day and next-day delivery",
        "Hub-to-customer delivery",
        "GPS tracking",
        "Digital proof of delivery",
      ],
    },
    {
      icon: Users,
      title: "Fleet Solutions",
      description: "Dedicated vehicles and drivers for your logistics operations with full management.",
      features: [
        "Dedicated fleet allocation",
        "Professional drivers",
        "Vehicle maintenance included",
        "Flexible scheduling",
      ],
    },
    {
      icon: FileText,
      title: "Custom Contracts",
      description: "Scalable solutions tailored to your specific B2B logistics requirements.",
      features: [
        "Customized service agreements",
        "Volume-based pricing",
        "Priority support",
        "Performance guarantees",
      ],
    },
  ];

  const benefits = [
    { icon: Clock, title: "98% On-Time Delivery", description: "Industry-leading punctuality" },
    { icon: Shield, title: "Secure & Insured", description: "Complete cargo protection" },
    { icon: MapPin, title: "Real-Time Tracking", description: "Know where your goods are" },
    { icon: CheckCircle2, title: "Quality Assured", description: "ISO-compliant processes" },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-primary-foreground/90">
              Comprehensive first and last-mile logistics solutions designed for B2B excellence
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {mainServices.map((service, index) => (
              <Card key={index} className="border-2 hover:border-accent transition-all hover:shadow-xl">
                <CardContent className="p-8">
                  <div className="p-3 bg-accent/10 rounded-lg w-fit mb-4">
                    <service.icon className="h-10 w-10 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Why Choose Our Services?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the difference of working with a reliable logistics partner
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center border-none shadow-lg">
                <CardContent className="pt-8 pb-8">
                  <div className="p-3 bg-accent/10 rounded-lg w-fit mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-2xl p-12 text-center text-primary-foreground max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Contact us today to discuss your logistics needs and get a customized solution
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Request a Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
