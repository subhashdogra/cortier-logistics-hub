import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, TrendingUp, Shield } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Reliability",
      description: "Consistent, on-time delivery you can count on",
    },
    {
      icon: Heart,
      title: "Transparency",
      description: "Clear communication and honest partnerships",
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "Scaling with our partners' success",
    },
    {
      icon: Target,
      title: "Sustainability",
      description: "Building for the long-term future",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-primary mb-6">About Cortier Logistics</h1>
            <p className="text-xl text-muted-foreground">
              Building India's most reliable small-fleet logistics partner, one delivery at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-6">Our Story</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Cortier Logistics was founded with a vision to bring reliability, transparency, and structure 
                to small-fleet logistics operations across India. We recognized that while e-commerce and 
                logistics companies were growing rapidly, they needed dependable partners who could handle 
                first and last-mile deliveries with consistency and professionalism.
              </p>
              <p>
                Starting with a small fleet and a big vision, we partnered with Delhivery and other leading 
                logistics companies to prove that a well-managed, dedicated fleet could deliver superior 
                results. Today, we operate 5 Tata Ace vehicles and 1 twenty-two-foot truck, generating 
                ₹5.2 lakh in monthly revenue with ₹2 lakh in profit.
              </p>
              <p>
                Our success isn't just measured in numbers—it's reflected in our 98% on-time delivery rate 
                and the trust our partners place in us to handle their critical logistics operations. We're 
                now expanding our fleet by 50% to serve more B2B clients across multiple cities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-2xl text-primary-foreground/90">
              To make last-mile logistics predictable, transparent, and efficient for businesses across India.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-2 hover:border-accent transition-colors">
                <CardContent className="pt-8 pb-8">
                  <div className="p-3 bg-accent/10 rounded-lg w-fit mx-auto mb-4">
                    <value.icon className="h-10 w-10 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-8 text-center">Meet Our Founder</h2>
            <Card className="border-none shadow-xl">
              <CardContent className="p-8">
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-lg">
                    Our founder recognized the gap in India's logistics ecosystem—the need for reliable, 
                    professional small-fleet operators who could partner with major logistics companies 
                    while maintaining the agility and personal touch of a dedicated service provider.
                  </p>
                  <p className="text-lg">
                    With a background in operations and a passion for building sustainable businesses, 
                    the vision for Cortier Logistics emerged: a company that would combine the efficiency 
                    of modern logistics with the reliability that only a dedicated, well-managed fleet can provide.
                  </p>
                  <p className="text-lg">
                    Today, that vision is becoming reality, with Cortier Logistics earning the trust of 
                    industry leaders and building a reputation for excellence in every delivery.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
