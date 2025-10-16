import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import GuaranteeBadge from "@/components/GuaranteeBadge";
import { Award, Fish, Car, Users, Shield, Clock } from "lucide-react";
import heroSurf from "@/assets/hero-surf.jpg";
import surfBeginner from "@/assets/surf-beginner.jpg";
import surfAdvanced from "@/assets/surf-advanced.jpg";
import heroDive from "@/assets/hero-dive.jpg";
import instructors from "@/assets/instructors.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroSurf} 
            alt="Surfer riding a perfect wave at golden hour in Weligama, Sri Lanka" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60" />
        </div>
        
        <div className="relative z-10 container text-center text-primary-foreground">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Ride Waves. Dive Deep. Live Free.
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Learn to surf in Weligama. Dive with confidence. We guarantee results.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button size="lg" asChild>
              <Link to="/booking">Book a Lesson</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/diving">Explore Diving</Link>
            </Button>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <GuaranteeBadge type="surf" className="bg-background/20 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground" />
            <GuaranteeBadge type="dive" className="bg-background/20 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground" />
            <GuaranteeBadge type="transport" className="bg-background/20 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground" />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-card">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Chill & Surf?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're not just another surf school. We guarantee your success or you don't pay.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>No Stand, No Pay</CardTitle>
                <CardDescription>
                  Our surfing guarantee: If you don't stand on the board during your lesson, you don't pay. Simple as that.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Fish className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>No Fish, Refund</CardTitle>
                <CardDescription>
                  Diving guarantee: If you don't see any fish during your dive, we'll give you a full refund. We're that confident.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-secondary/50 flex items-center justify-center mb-4">
                  <Car className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Free Transport</CardTitle>
                <CardDescription>
                  We offer complimentary pickup and drop-off within 2km of our school. Your adventure starts at your doorstep.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs Snapshot */}
      <section className="py-16">
        <div className="container">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Our Programs</h2>
              <p className="text-muted-foreground">Choose your adventure</p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/pricing">View All Programs →</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <div className="relative h-48">
                <img src={surfBeginner} alt="Beginner surf lesson on the beach" className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4">
                  <GuaranteeBadge type="surf" className="text-xs" />
                </div>
              </div>
              <CardHeader>
                <CardTitle>Surf Lessons</CardTitle>
                <CardDescription>
                  From complete beginners to advanced surfers. All levels welcome with expert instruction.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <Button asChild className="flex-1">
                    <Link to="/surfing">Learn More</Link>
                  </Button>
                  <Button variant="outline" asChild className="flex-1">
                    <Link to="/booking">Book</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <div className="relative h-48">
                <img src={heroDive} alt="Colorful fish and coral reef underwater" className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4">
                  <GuaranteeBadge type="dive" className="text-xs" />
                </div>
              </div>
              <CardHeader>
                <CardTitle>Diving Experiences</CardTitle>
                <CardDescription>
                  Explore vibrant underwater worlds. Shore dives, reef dives, and intro courses available.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <Button asChild className="flex-1">
                    <Link to="/diving">Learn More</Link>
                  </Button>
                  <Button variant="outline" asChild className="flex-1">
                    <Link to="/booking">Book</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <div className="relative h-48">
                <img src={surfAdvanced} alt="Advanced surfer carving a wave" className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <CardTitle>Kids & Family</CardTitle>
                <CardDescription>
                  Special programs designed for families and young adventurers. Safe, fun, and educational.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <Button asChild className="flex-1">
                    <Link to="/surfing">Learn More</Link>
                  </Button>
                  <Button variant="outline" asChild className="flex-1">
                    <Link to="/booking">Book</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Adventure Starts Here</h2>
              <p className="text-lg mb-6">
                At Chill & Surf School, we believe learning should be fun, safe, and guaranteed. With over a decade of experience teaching thousands of students, we've perfected our methods to ensure everyone succeeds.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Professional Instructors</h3>
                    <p className="text-muted-foreground">Certified, experienced, and passionate about your success</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Safety First</h3>
                    <p className="text-muted-foreground">Top-quality equipment and comprehensive safety protocols</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Flexible Scheduling</h3>
                    <p className="text-muted-foreground">Lessons available daily with convenient time slots</p>
                  </div>
                </div>
              </div>
              <Button asChild size="lg">
                <Link to="/about">More About Us</Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src={instructors} 
                alt="Team of professional surf instructors on the beach" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Transport Teaser */}
      <section className="py-16">
        <div className="container">
          <Card className="bg-primary text-primary-foreground overflow-hidden">
            <div className="grid md:grid-cols-2">
              <CardHeader className="p-12">
                <GuaranteeBadge type="transport" className="mb-4 bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground" />
                <CardTitle className="text-3xl mb-4">We'll Pick You Up</CardTitle>
                <CardDescription className="text-primary-foreground/90 text-lg mb-6">
                  Free transport within 2km of our school. Just tell us where you are, and we'll handle the rest.
                </CardDescription>
                <Button variant="secondary" asChild size="lg" className="w-fit">
                  <Link to="/transport">Learn More About Transport</Link>
                </Button>
              </CardHeader>
              <div className="relative h-64 md:h-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent z-10" />
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-card">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Everything you need to know</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6 bg-background">
              <AccordionTrigger>Do I need prior experience to surf?</AccordionTrigger>
              <AccordionContent>
                Not at all! Our beginner lessons are designed for complete novices. We start with beach basics and work our way to the water at your pace.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border rounded-lg px-6 bg-background">
              <AccordionTrigger>What does the "No Stand, No Pay" guarantee mean?</AccordionTrigger>
              <AccordionContent>
                If you take a beginner surf lesson and don't manage to stand on the board during the session, you don't pay. We're that confident in our teaching methods.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border rounded-lg px-6 bg-background">
              <AccordionTrigger>What's included in the lesson price?</AccordionTrigger>
              <AccordionContent>
                All equipment (surfboard, wetsuit if needed), professional instruction, safety briefing, and free transport within 2km are included in every lesson.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border rounded-lg px-6 bg-background">
              <AccordionTrigger>Can I try both surfing and diving?</AccordionTrigger>
              <AccordionContent>
                Absolutely! We offer combination packages for those who want to experience both. Check our pricing page for details on surf + dive combos.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Catch Your First Wave?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book your lesson today — only pay if you stand.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/booking">Book Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
