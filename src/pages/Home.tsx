import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Shield, Clock, Users, Package, Truck, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-logistics.jpg";

const Home = () => {
  const metrics = [
    { icon: TrendingUp, value: "₹5.2L", label: "Monthly Revenue" },
    { icon: Clock, value: "98%", label: "On-Time Delivery" },
    { icon: Truck, value: "6", label: "Fleet Vehicles" },
    { icon: Users, value: "35%", label: "YoY Growth" },
  ];

  const services = [
    {
      icon: Package,
      title: "First-Mile Pickup",
      description: "Reliable pickup of goods from warehouses and distribution centers.",
    },
    {
      icon: Truck,
      title: "Last-Mile Delivery",
      description: "Timely delivery to local hubs or end customers across the city.",
    },
    {
      icon: Shield,
      title: "Fleet Solutions",
      description: "Dedicated vehicles and drivers for your logistics operations.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/70" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-primary-foreground">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Reliable First & Last Mile Logistics Partner for India's Leading Companies
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 animate-fade-in">
              Trusted by Delhivery and growing businesses for efficient fleet-based logistics solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <Link to="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Partner With Us
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/20">
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <Card key={index} className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-6 pb-6">
                  <metric.icon className="h-10 w-10 mx-auto mb-3 text-accent" />
                  <div className="text-3xl font-bold text-primary mb-1">{metric.value}</div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive logistics solutions tailored for B2B partners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:border-accent transition-colors group">
                <CardContent className="pt-8 pb-8">
                  <div className="p-3 bg-accent/10 rounded-lg w-fit mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <service.icon className="h-8 w-8 text-accent group-hover:text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/services">
              <Button size="lg" variant="outline">
                View All Services
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Why Partner with Cortier Logistics?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div className="p-6 bg-primary-foreground/10 rounded-lg">
                <Shield className="h-10 w-10 mb-4 text-accent" />
                <h3 className="text-xl font-semibold mb-2">Reliable & Secure</h3>
                <p className="text-primary-foreground/80">Track-and-trace enabled fleet with 98% on-time performance</p>
              </div>
              <div className="p-6 bg-primary-foreground/10 rounded-lg">
                <TrendingUp className="h-10 w-10 mb-4 text-accent" />
                <h3 className="text-xl font-semibold mb-2">Growing & Profitable</h3>
                <p className="text-primary-foreground/80">35% YoY growth with proven track record</p>
              </div>
              <div className="p-6 bg-primary-foreground/10 rounded-lg">
                <Users className="h-10 w-10 mb-4 text-accent" />
                <h3 className="text-xl font-semibold mb-2">Trusted Partner</h3>
                <p className="text-primary-foreground/80">Working with India's leading logistics companies</p>
              </div>
              <div className="p-6 bg-primary-foreground/10 rounded-lg">
                <Truck className="h-10 w-10 mb-4 text-accent" />
                <h3 className="text-xl font-semibold mb-2">Modern Fleet</h3>
                <p className="text-primary-foreground/80">Well-maintained vehicles with expansion plans</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-12 text-center text-primary-foreground">
            <h2 className="text-4xl font-bold mb-4">Ready to Optimize Your Logistics?</h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Join industry leaders who trust Cortier Logistics for their first and last mile delivery needs.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Get Started Today
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
