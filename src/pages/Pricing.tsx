import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import GuaranteeBadge from "@/components/GuaranteeBadge";

const Pricing = () => {
  const surfPackages = [
    {
      title: "Single Lesson",
      price: "$35",
      duration: "2 hours",
      includes: ["Professional instructor", "All equipment", "Beach safety brief", "Photo session"],
      popular: false,
    },
    {
      title: "3-Lesson Pack",
      price: "$90",
      duration: "Save $15",
      includes: ["3 x 2-hour sessions", "Progress tracking", "All equipment", "Video analysis", "Guaranteed stand-up"],
      popular: true,
    },
    {
      title: "7-Day Package",
      price: "$200",
      duration: "Best value",
      includes: ["7 x 2-hour sessions", "Personalized coaching", "All equipment", "Video analysis", "Advanced techniques", "Certificate"],
      popular: false,
    },
  ];

  const divingPackages = [
    {
      title: "Intro Dive",
      price: "$45",
      duration: "3 hours",
      includes: ["Shore dive", "All equipment", "Certified guide", "Safety briefing", "Fish guarantee"],
      popular: false,
    },
    {
      title: "Reef Adventure",
      price: "$65",
      duration: "4 hours",
      includes: ["Boat to reef", "All equipment", "Expert guide", "2 dive sites", "Fish guarantee", "Underwater photos"],
      popular: true,
    },
    {
      title: "Dive Bundle",
      price: "$150",
      duration: "3 dives",
      includes: ["3 reef dives", "All equipment", "Expert guides", "Multiple sites", "Fish guarantee", "Photo package", "Certification option"],
      popular: false,
    },
  ];

  const comboDeals = [
    {
      title: "Surf + Dive Combo",
      price: "$75",
      includes: ["1 surf lesson", "1 intro dive", "All equipment", "Both guarantees"],
    },
    {
      title: "Weekly Adventure",
      price: "$350",
      includes: ["5 surf lessons", "3 reef dives", "All equipment", "Both guarantees", "Free transport"],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[40vh] flex items-center justify-center bg-gradient-to-b from-primary/90 to-primary">
        <div className="container text-center text-primary-foreground">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Pricing & Packages</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Transparent pricing with unbeatable guarantees
          </p>
        </div>
      </section>

      {/* Guarantee Badges */}
      <section className="py-8 bg-card">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-6">
            <GuaranteeBadge type="surf" />
            <GuaranteeBadge type="dive" />
            <GuaranteeBadge type="transport" />
          </div>
        </div>
      </section>

      {/* Surf Packages */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Surfing Packages</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {surfPackages.map((pkg, index) => (
              <Card key={index} className={`relative ${pkg.popular ? 'border-accent shadow-lg' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-accent text-accent-foreground">Most Popular</Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{pkg.title}</CardTitle>
                  <CardDescription>{pkg.duration}</CardDescription>
                  <div className="text-3xl font-bold text-primary mt-4">{pkg.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {pkg.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link to="/booking">Book Now</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Diving Packages */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Diving Packages</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {divingPackages.map((pkg, index) => (
              <Card key={index} className={`relative ${pkg.popular ? 'border-accent shadow-lg' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-accent text-accent-foreground">Most Popular</Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{pkg.title}</CardTitle>
                  <CardDescription>{pkg.duration}</CardDescription>
                  <div className="text-3xl font-bold text-primary mt-4">{pkg.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {pkg.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link to="/booking">Book Now</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Combo Deals */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Combo Deals</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {comboDeals.map((combo, index) => (
              <Card key={index} className="border-accent">
                <CardHeader>
                  <CardTitle>{combo.title}</CardTitle>
                  <div className="text-3xl font-bold text-primary mt-4">{combo.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {combo.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link to="/booking">Book Now</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">What's Included</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">All Packages Include</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• Professional instruction</p>
                <p>• All necessary equipment</p>
                <p>• Safety briefings</p>
                <p>• Insurance coverage</p>
                <p>• Free transport within 2km</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Refund Policy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p><strong>Surfing:</strong> No Stand, No Pay guarantee</p>
                <p><strong>Diving:</strong> No Fish, Refund guarantee</p>
                <p>• 24-hour cancellation policy</p>
                <p>• Weather-related reschedules free</p>
                <p>• See full terms for details</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <div className="container">
          <h2 className="text-3xl font-bold mb-4">Ready to Book?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Choose your package and start your adventure today
          </p>
          <Button asChild size="lg">
            <Link to="/booking">Book Your Lesson</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
