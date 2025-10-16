import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import GuaranteeBadge from "@/components/GuaranteeBadge";
import { Fish, Shield, Award } from "lucide-react";
import heroDive from "@/assets/hero-dive.jpg";
import diveGear from "@/assets/dive-gear.jpg";

const Diving = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroDive} alt="Colorful underwater coral reef teeming with tropical fish" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-primary/50" />
        </div>
        <div className="relative z-10 container text-center text-primary-foreground">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Diving Experiences</h1>
          <p className="text-xl md:text-2xl mb-6">Explore the underwater wonders of Sri Lanka</p>
          <GuaranteeBadge type="dive" className="bg-background/20 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground" />
        </div>
      </section>

      {/* Overview */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Discover Sri Lanka's Marine Life</h2>
          <p className="text-lg mb-4">
            The waters around Weligama are home to an incredible diversity of marine life. From colorful reef fish to sea turtles, rays, and even the occasional whale shark, every dive is an adventure.
          </p>
          <p className="text-lg mb-4">
            Whether you're a complete beginner or an experienced diver, our certified guides will ensure you have a safe, memorable experience. And with our "No Fish, Refund" guarantee, you can dive with confidence.
          </p>
        </div>
      </section>

      {/* Dive Experiences */}
      <section className="py-16 bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Dive Programs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-lg">
              <CardHeader>
                <Fish className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Intro Dive</CardTitle>
                <CardDescription>
                  Perfect for first-timers. No certification required—just curiosity and a sense of adventure.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm mb-4">
                  <li>• No experience needed</li>
                  <li>• Full equipment provided</li>
                  <li>• Professional PADI instructor</li>
                  <li>• Shallow water dive (max 12m)</li>
                </ul>
                <Button asChild className="w-full">
                  <Link to="/booking">Book Intro Dive</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <Fish className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Shore Dive</CardTitle>
                <CardDescription>
                  Explore local reefs and rocky areas directly from the beach. Great for all levels.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm mb-4">
                  <li>• Easy beach entry</li>
                  <li>• Local reef exploration</li>
                  <li>• Abundant marine life</li>
                  <li>• 45-60 minute dive time</li>
                </ul>
                <Button asChild className="w-full">
                  <Link to="/booking">Book Shore Dive</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <Fish className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Reef Dive</CardTitle>
                <CardDescription>
                  Boat dive to pristine coral reefs with incredible biodiversity and visibility.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm mb-4">
                  <li>• Boat transportation included</li>
                  <li>• Pristine coral formations</li>
                  <li>• Diverse fish species</li>
                  <li>• Possible turtle encounters</li>
                </ul>
                <Button asChild className="w-full">
                  <Link to="/booking">Book Reef Dive</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gear & Safety */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img src={diveGear} alt="Professional scuba diving equipment on beach" className="rounded-lg shadow-xl" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Equipment & Safety</h2>
              <p className="text-lg mb-6">
                Your safety and comfort are our top priorities. We use only modern, well-maintained equipment from leading brands, and all our guides are PADI certified professionals.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Shield className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Certified Guides</h3>
                    <p className="text-muted-foreground">All instructors are PADI certified with extensive local knowledge</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Quality Equipment</h3>
                    <p className="text-muted-foreground">Modern BCDs, regulators, and wetsuits regularly serviced</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Safety First</h3>
                    <p className="text-muted-foreground">Comprehensive briefings, emergency protocols, and small group sizes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Banner */}
      <section className="py-16 bg-primary/10">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto">
            <GuaranteeBadge type="dive" className="mb-6 inline-flex" />
            <h2 className="text-3xl font-bold mb-4">Our Marine Life Guarantee</h2>
            <p className="text-lg mb-6">
              We're confident you'll see incredible marine life on every dive. If you complete a dive and don't see any fish, we'll refund your money completely.
            </p>
            <p className="text-muted-foreground">
              Sri Lanka's waters are so rich with marine biodiversity that this almost never happens—but it shows how confident we are in our dive sites.
            </p>
          </div>
        </div>
      </section>

      {/* Marine Life */}
      <section className="py-16 bg-card">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">What You Might See</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Sea Turtles</CardTitle>
                <CardDescription>Green and hawksbill turtles frequent our reefs</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Reef Fish</CardTitle>
                <CardDescription>Hundreds of colorful tropical species</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Rays & Eels</CardTitle>
                <CardDescription>Stingrays, eagle rays, and moray eels</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Coral Gardens</CardTitle>
                <CardDescription>Vibrant hard and soft coral formations</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Diving FAQs</h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6 bg-card">
              <AccordionTrigger>Do I need to be certified to dive?</AccordionTrigger>
              <AccordionContent>
                Not for our intro dives! These are designed for complete beginners. For shore and reef dives, you'll need a PADI Open Water certification or equivalent.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border rounded-lg px-6 bg-card">
              <AccordionTrigger>What's included in the dive price?</AccordionTrigger>
              <AccordionContent>
                All equipment (wetsuit, BCD, regulator, tank, weights), professional guide, safety briefing, and transport to dive sites are included.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border rounded-lg px-6 bg-card">
              <AccordionTrigger>How deep will we go?</AccordionTrigger>
              <AccordionContent>
                Intro dives are limited to 12 meters. Certified divers can go to 18-30 meters depending on certification level and site conditions.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border rounded-lg px-6 bg-card">
              <AccordionTrigger>What is the visibility like?</AccordionTrigger>
              <AccordionContent>
                Visibility in Weligama typically ranges from 10-25 meters, with the best conditions from November to April.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore Underwater?</h2>
          <p className="text-xl mb-8 opacity-90">Book your dive experience with our marine life guarantee</p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/booking">Book Your Dive</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Diving;
