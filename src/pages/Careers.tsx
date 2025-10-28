import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Truck, Users, TrendingUp, Heart, CheckCircle2 } from "lucide-react";

const Careers = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
  });

  const benefits = [
    {
      icon: TrendingUp,
      title: "Growth Opportunities",
      description: "Grow with a rapidly expanding company",
    },
    {
      icon: Heart,
      title: "Positive Culture",
      description: "Professional and supportive work environment",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Work with dedicated professionals",
    },
    {
      icon: Truck,
      title: "Modern Fleet",
      description: "Well-maintained vehicles and equipment",
    },
  ];

  const positions = [
    {
      title: "Delivery Drivers",
      description: "Experienced drivers for our expanding fleet",
      requirements: ["Valid driving license", "Good knowledge of local routes", "Professional attitude"],
    },
    {
      title: "Fleet Managers",
      description: "Manage day-to-day fleet operations",
      requirements: ["Operations experience", "Team management skills", "Problem-solving abilities"],
    },
    {
      title: "Vehicle Owners",
      description: "Partner with your own vehicles",
      requirements: ["Well-maintained vehicle", "Commitment to quality", "Business partnership mindset"],
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest. We'll contact you soon.",
    });
    setFormData({ name: "", email: "", phone: "", position: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl text-primary-foreground/90">
              Be part of India's fastest-growing logistics network
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Why Join Cortier Logistics?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Grow your career with a company that values its people
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center border-2 hover:border-accent transition-colors">
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

      {/* Open Positions */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Open Positions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're always looking for talented individuals to join our team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {positions.map((position, index) => (
              <Card key={index} className="border-2 hover:border-accent transition-colors">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-3">{position.title}</h3>
                  <p className="text-muted-foreground mb-6">{position.description}</p>
                  <div className="space-y-2">
                    <p className="font-semibold text-sm text-primary">Requirements:</p>
                    {position.requirements.map((req, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{req}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">Apply Now</h2>
              <p className="text-xl text-muted-foreground">
                Fill out the form below and we'll get back to you soon
              </p>
            </div>

            <Card className="border-2 shadow-xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="position">Position of Interest *</Label>
                    <Input
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      required
                      placeholder="e.g., Delivery Driver"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Tell Us About Yourself</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Share your experience, skills, and why you'd like to join Cortier Logistics..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
