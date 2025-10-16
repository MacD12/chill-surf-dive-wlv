import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import GuaranteeBadge from "@/components/GuaranteeBadge";
import { Users, Award, Waves } from "lucide-react";
import heroSurf from "@/assets/hero-surf.jpg";
import surfBeginner from "@/assets/surf-beginner.jpg";
import surfAdvanced from "@/assets/surf-advanced.jpg";
import instructors from "@/assets/instructors.jpg";

const Surfing = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroSurf} alt="Professional surfer riding waves in Weligama" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-primary/50" />
        </div>
        <div className="relative z-10 container text-center text-primary-foreground">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Surfing Lessons</h1>
          <p className="text-xl md:text-2xl mb-6">Master the waves with expert instruction</p>
          <GuaranteeBadge type="surf" className="bg-background/20 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground" />
        </div>
      </section>

      {/* Overview */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Learn to Surf in Paradise</h2>
          <p className="text-lg mb-4">
            Weligama Bay offers perfect conditions for learning to surf. With warm water year-round, consistent waves, and soft sandy bottoms, it's the ideal spot for beginners and experienced surfers alike.
          </p>
          <p className="text-lg mb-4">
            Our experienced instructors will teach you everything from paddling techniques to wave selection, ensuring you progress quickly and safely. Best of all, our "No Stand, No Pay" guarantee means you can learn risk-free.
          </p>
        </div>
      </section>

      {/* Lesson Types */}
      <section className="py-16 bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Choose Your Level</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-lg">
              <div className="relative h-48">
                <img src={surfBeginner} alt="Beginner surf lesson" className="w-full h-full object-cover rounded-t-lg" />
              </div>
              <CardHeader>
                <CardTitle>Beginner Lessons</CardTitle>
                <CardDescription>
                  Never surfed before? Start here. We'll teach you beach safety, paddling, and how to catch your first wave.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm mb-4">
                  <li>• Beach theory and safety briefing</li>
                  <li>• Paddling and pop-up technique</li>
                  <li>• Wave selection basics</li>
                  <li>• Guaranteed to stand or free</li>
                </ul>
                <Button asChild className="w-full">
                  <Link to="/booking">Book Beginner Lesson</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <div className="relative h-48">
                <img src={surfAdvanced} alt="Intermediate surfer" className="w-full h-full object-cover rounded-t-lg" />
              </div>
              <CardHeader>
                <CardTitle>Intermediate Lessons</CardTitle>
                <CardDescription>
                  Ready to improve? Learn advanced techniques, better positioning, and how to ride longer waves.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm mb-4">
                  <li>• Wave reading and positioning</li>
                  <li>• Turning and trimming techniques</li>
                  <li>• Green wave riding</li>
                  <li>• Video analysis available</li>
                </ul>
                <Button asChild className="w-full">
                  <Link to="/booking">Book Intermediate Lesson</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <div className="relative h-48">
                <img src={surfAdvanced} alt="Advanced surfer carving" className="w-full h-full object-cover rounded-t-lg" />
              </div>
              <CardHeader>
                <CardTitle>Advanced Coaching</CardTitle>
                <CardDescription>
                  Take your surfing to the next level with personalized coaching and performance analysis.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm mb-4">
                  <li>• Advanced maneuvers training</li>
                  <li>• Competition preparation</li>
                  <li>• Video feedback sessions</li>
                  <li>• Custom training plans</li>
                </ul>
                <Button asChild className="w-full">
                  <Link to="/booking">Book Advanced Coaching</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Rentals */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6">Board Rentals</h2>
          <p className="text-lg mb-8 max-w-3xl">
            Already know how to surf? Rent quality equipment from our selection of shortboards, longboards, and soft-tops.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Soft Top Boards</CardTitle>
                <CardDescription>Perfect for beginners and learning</CardDescription>
                <div className="text-2xl font-bold">$15<span className="text-sm text-muted-foreground">/day</span></div>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Longboards</CardTitle>
                <CardDescription>Classic style and easy riding</CardDescription>
                <div className="text-2xl font-bold">$20<span className="text-sm text-muted-foreground">/day</span></div>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Shortboards</CardTitle>
                <CardDescription>For advanced surfers</CardDescription>
                <div className="text-2xl font-bold">$25<span className="text-sm text-muted-foreground">/day</span></div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Instructors */}
      <section className="py-16 bg-card">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Meet Your Instructors</h2>
              <p className="text-lg mb-6">
                Our team consists of certified surf instructors with years of experience teaching students from all over the world. Every instructor is passionate about surfing and dedicated to your success.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Award className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Internationally Certified</h3>
                    <p className="text-muted-foreground">All instructors hold recognized surfing qualifications</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Small Group Sizes</h3>
                    <p className="text-muted-foreground">Maximum 4 students per instructor for personalized attention</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Waves className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Local Knowledge</h3>
                    <p className="text-muted-foreground">Expert understanding of Weligama's surf conditions</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img src={instructors} alt="Team of surf instructors" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Banner */}
      <section className="py-16 bg-accent/10">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto">
            <GuaranteeBadge type="surf" className="mb-6 inline-flex" />
            <h2 className="text-3xl font-bold mb-4">Our Guarantee to You</h2>
            <p className="text-lg mb-6">
              We're so confident in our teaching methods that we offer a simple promise: if you take a beginner lesson and don't manage to stand on the board, you don't pay. No questions asked.
            </p>
            <p className="text-muted-foreground">
              This isn't just marketing—it's our commitment to your success. We've perfected our approach over thousands of lessons, and we know we can get you standing.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Surfing FAQs</h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6 bg-card">
              <AccordionTrigger>What should I bring to my surf lesson?</AccordionTrigger>
              <AccordionContent>
                Just bring swimwear, a towel, sunscreen, and a positive attitude! We provide all surfing equipment including boards and rash guards.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border rounded-lg px-6 bg-card">
              <AccordionTrigger>How long is a lesson?</AccordionTrigger>
              <AccordionContent>
                Our standard lessons are 2 hours, which includes a beach briefing, water time, and feedback session. This is the ideal length for learning and practicing without getting too tired.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border rounded-lg px-6 bg-card">
              <AccordionTrigger>Can I book a private lesson?</AccordionTrigger>
              <AccordionContent>
                Yes! Private one-on-one lessons are available for all levels. This provides maximum personalized attention and faster progress.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border rounded-lg px-6 bg-card">
              <AccordionTrigger>What if the conditions aren't good?</AccordionTrigger>
              <AccordionContent>
                We monitor conditions daily. If it's not safe or suitable for your level, we'll reschedule at no charge. Your safety is our priority.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Booking Module */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Ride Your First Wave?</h2>
          <p className="text-xl mb-8 opacity-90">Book your surf lesson today and experience our guarantee</p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/booking">Book Your Surf Lesson</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Surfing;
