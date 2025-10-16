import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const posts = [
    {
      title: "5 Essential Surf Tips for Beginners",
      category: "Surf Tips",
      excerpt: "Starting your surf journey? These five fundamental tips will help you catch your first waves with confidence and style.",
      author: "Chaminda Silva",
      date: "March 15, 2024",
      readTime: "5 min read",
    },
    {
      title: "Best Diving Spots Around Weligama",
      category: "Diving Guides",
      excerpt: "Explore the underwater wonders of Weligama Bay. From vibrant coral reefs to fascinating marine life, discover where to dive.",
      author: "Lakmal Perera",
      date: "March 10, 2024",
      readTime: "7 min read",
    },
    {
      title: "Understanding Sri Lankan Wave Patterns",
      category: "Surf Tips",
      excerpt: "Learn how to read the ocean around Weligama. Seasonal changes, tides, and swell direction explained for better surf sessions.",
      author: "Chaminda Silva",
      date: "March 5, 2024",
      readTime: "6 min read",
    },
    {
      title: "Marine Life You'll See While Diving",
      category: "Diving Guides",
      excerpt: "A visual guide to the colorful fish, turtles, and coral species that make Weligama's underwater world so spectacular.",
      author: "Lakmal Perera",
      date: "February 28, 2024",
      readTime: "8 min read",
    },
    {
      title: "What to Pack for Your Sri Lanka Surf Trip",
      category: "Travel",
      excerpt: "Essential gear, clothing, and items to bring for the perfect surf vacation in Weligama. Don't forget these must-haves!",
      author: "Sanjaya Fernando",
      date: "February 20, 2024",
      readTime: "5 min read",
    },
    {
      title: "Diving Safety: What Every Beginner Should Know",
      category: "Diving Guides",
      excerpt: "Safety is paramount when exploring underwater. Learn the essential protocols and practices for a safe diving experience.",
      author: "Nimal Jayawardena",
      date: "February 15, 2024",
      readTime: "10 min read",
    },
    {
      title: "The Best Beaches for Surfing in Sri Lanka",
      category: "Travel",
      excerpt: "Beyond Weligama, discover other incredible surf spots across Sri Lanka's stunning coastline. A surfer's guide to the island.",
      author: "Chaminda Silva",
      date: "February 10, 2024",
      readTime: "7 min read",
    },
    {
      title: "How to Choose the Right Surfboard",
      category: "Surf Tips",
      excerpt: "Longboard, shortboard, or funboard? Understanding board types and choosing the right one for your skill level and style.",
      author: "Sanjaya Fernando",
      date: "February 5, 2024",
      readTime: "6 min read",
    },
    {
      title: "Weligama: A Guide for First-Time Visitors",
      category: "Travel",
      excerpt: "Everything you need to know about Weligama - from best restaurants to local culture, accommodation tips, and hidden gems.",
      author: "Team Chill & Surf",
      date: "January 30, 2024",
      readTime: "9 min read",
    },
  ];

  const categories = ["All", "Surf Tips", "Diving Guides", "Travel"];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[40vh] flex items-center justify-center bg-gradient-to-b from-primary/90 to-primary">
        <div className="container text-center text-primary-foreground">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Surf & Dive Blog</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Tips, guides, and stories from the waves and reefs of Weligama
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-card border-b">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Badge 
                key={category} 
                variant={category === "All" ? "default" : "outline"}
                className="cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-full aspect-video bg-muted rounded-lg mb-4" />
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <Button variant="ghost" className="w-full group/btn">
                    Read More
                    <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-muted-foreground mb-8">
            Get the latest surf reports, diving guides, and travel tips delivered to your inbox.
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-4 py-2 rounded-md border bg-background"
            />
            <Button>Subscribe</Button>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <div className="container">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience It Yourself?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Stop reading and start surfing. Book your lesson today.
          </p>
          <Button asChild size="lg">
            <Link to="/booking">Book Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Blog;
