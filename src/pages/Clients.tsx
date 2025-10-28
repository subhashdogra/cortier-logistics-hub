import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building2, TrendingUp, Users, Award } from "lucide-react";

const Clients = () => {
  const clients = [
    {
      name: "Delhivery",
      description: "Leading logistics and supply chain services company",
      partnership: "Primary logistics partner for last-mile deliveries",
    },
    {
      name: "E-Commerce Platforms",
      description: "Major online retail partners",
      partnership: "Direct warehouse-to-customer delivery services",
    },
    {
      name: "Distribution Centers",
      description: "Regional fulfillment hubs",
      partnership: "First-mile pickup and inter-hub transfers",
    },
  ];

  const partnerships = [
    {
      icon: Building2,
      title: "Enterprise Partnerships",
      description: "Long-term contracts with India's leading logistics companies",
    },
    {
      icon: TrendingUp,
      title: "Growing Network",
      description: "Expanding partnerships across multiple cities",
    },
    {
      icon: Users,
      title: "B2B Focus",
      description: "Dedicated to serving business clients with enterprise-grade service",
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "98% client satisfaction with consistent performance",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Our Clients & Partners</h1>
            <p className="text-xl text-primary-foreground/90">
              Trusted by industry leaders for reliable logistics solutions
            </p>
          </div>
        </div>
      </section>

      {/* Main Clients */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Trusted Partners</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Working with India's leading logistics and e-commerce companies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {clients.map((client, index) => (
              <Card key={index} className="border-2 hover:border-accent transition-all hover:shadow-xl">
                <CardContent className="p-8">
                  <div className="h-20 flex items-center justify-center mb-6 bg-secondary rounded-lg">
                    <Building2 className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3">{client.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{client.description}</p>
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm font-medium text-primary">{client.partnership}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Why Companies Choose Us</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The benefits of partnering with Cortier Logistics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {partnerships.map((item, index) => (
              <Card key={index} className="text-center border-none shadow-lg">
                <CardContent className="pt-8 pb-8">
                  <div className="p-3 bg-accent/10 rounded-lg w-fit mx-auto mb-4">
                    <item.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-accent shadow-xl">
              <CardContent className="p-12">
                <div className="text-center">
                  <div className="text-6xl text-accent mb-4">"</div>
                  <p className="text-xl text-muted-foreground mb-6 italic">
                    Cortier Logistics has been an invaluable partner in our operations. Their reliability, 
                    professionalism, and commitment to on-time delivery have consistently exceeded our 
                    expectations. We look forward to growing together.
                  </p>
                  <div className="pt-6 border-t border-border">
                    <p className="font-semibold text-primary">Logistics Partner</p>
                    <p className="text-sm text-muted-foreground">Major Distribution Center</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Become Our Partner</h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Join the growing list of companies that trust Cortier Logistics for their delivery needs
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Partner With Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
