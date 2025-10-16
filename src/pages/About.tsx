import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Heart, Shield, Users } from "lucide-react";
import instructorsImg from "@/assets/instructors.jpg";
import weligamaImg from "@/assets/weligama-aerial.jpg";

const About = () => {
  const team = [
    {
      name: "Chaminda Silva",
      role: "Head Surf Instructor",
      experience: "15+ years",
      specialty: "Advanced techniques",
    },
    {
      name: "Lakmal Perera",
      role: "Lead Dive Master",
      experience: "12+ years",
      specialty: "Reef diving",
    },
    {
      name: "Sanjaya Fernando",
      role: "Surf Instructor",
      experience: "8+ years",
      specialty: "Beginners",
    },
    {
      name: "Nimal Jayawardena",
      role: "Dive Instructor",
      experience: "10+ years",
      specialty: "Safety & training",
    },
  ];

  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Certified instructors, top-quality equipment, and comprehensive insurance for every student.",
    },
    {
      icon: Heart,
      title: "Passion for Teaching",
      description: "We love what we do and it shows in our results. Your success is our success.",
    },
    {
      icon: Award,
      title: "Guaranteed Results",
      description: "Our unique guarantees ensure you get what you pay for - or you don't pay at all.",
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "Supporting local communities, sustainable practices, and ocean conservation.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <img 
          src={weligamaImg} 
          alt="Weligama aerial view" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/70" />
        <div className="container relative text-center text-primary-foreground z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Chill & Surf</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Weligama's most trusted surf and dive school
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2015, Chill & Surf School was born from a simple idea: make surfing and diving 
                  accessible to everyone who dreams of riding waves or exploring underwater worlds.
                </p>
                <p>
                  Located in the heart of Weligama, one of Sri Lanka's premier surf destinations, we've taught 
                  thousands of students from around the world. Our instructors are local experts who know these 
                  waters like the back of their hands.
                </p>
                <p>
                  We're the first school in Sri Lanka to offer our unique guarantees: No Stand, No Pay for surfing 
                  and No Fish, Refund for diving. We believe in our teaching methods so much that we put our money 
                  where our mouth is.
                </p>
                <p>
                  Beyond lessons, we're committed to sustainable tourism, ocean conservation, and supporting our 
                  local community. When you learn with us, you're part of something bigger.
                </p>
              </div>
            </div>
            <div>
              <img 
                src={instructorsImg} 
                alt="Our instructors" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">What We Stand For</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-full bg-accent/10">
                        <Icon className="h-8 w-8 text-accent" />
                      </div>
                    </div>
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Meet the Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="w-full aspect-square bg-muted rounded-lg mb-4 overflow-hidden">
                    <img 
                      src={instructorsImg} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <Badge variant="secondary" className="w-fit mt-2">{member.role}</Badge>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p><strong>Experience:</strong> {member.experience}</p>
                  <p><strong>Specialty:</strong> {member.specialty}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Certifications & Partnerships</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Award className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-semibold mb-2">ISA Certified</h3>
                <p className="text-sm text-muted-foreground">International Surfing Association accredited instructors</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Award className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-semibold mb-2">PADI Partners</h3>
                <p className="text-sm text-muted-foreground">Professional Association of Diving Instructors certified</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Award className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Eco Certified</h3>
                <p className="text-sm text-muted-foreground">Committed to sustainable tourism practices</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">Our Commitment to Sustainability</h2>
          <Card>
            <CardContent className="pt-6 space-y-4">
              <p className="text-muted-foreground">
                At Chill & Surf, we believe in protecting the ocean that provides us with so much joy. Our 
                sustainability initiatives include:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Regular beach cleanup drives with students and community</li>
                <li>• Zero plastic policy - we provide reusable water bottles</li>
                <li>• Reef-safe sunscreen requirement for all dive students</li>
                <li>• Partnership with local marine conservation groups</li>
                <li>• Education programs on ocean health and preservation</li>
                <li>• Support for local fishermen and sustainable fishing practices</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;
