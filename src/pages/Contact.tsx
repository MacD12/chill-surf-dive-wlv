import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, MessageCircle, Facebook, Instagram, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[40vh] flex items-center justify-center bg-gradient-to-b from-primary/90 to-primary">
        <div className="container text-center text-primary-foreground">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            We're here to answer your questions and help plan your adventure
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <Card>
                <CardContent className="pt-6">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          className="w-full px-4 py-2 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          className="w-full px-4 py-2 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-2 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="+94 123 456 789"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        required
                        className="w-full px-4 py-2 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="How can we help?"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={6}
                        className="w-full px-4 py-2 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                        placeholder="Tell us about your plans, questions, or special requests..."
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                
                <div className="space-y-4">
                  <Card>
                    <CardHeader>
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <div>
                          <CardTitle className="text-lg mb-2">Location</CardTitle>
                          <p className="text-sm text-muted-foreground">
                            Beach Road, Weligama<br />
                            Southern Province, Sri Lanka
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-start gap-3">
                        <Phone className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <div>
                          <CardTitle className="text-lg mb-2">Phone</CardTitle>
                          <a 
                            href="tel:+94123456789" 
                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            +94 123 456 789
                          </a>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-start gap-3">
                        <MessageCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <div>
                          <CardTitle className="text-lg mb-2">WhatsApp</CardTitle>
                          <a 
                            href="https://wa.me/94123456789" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            Chat with us on WhatsApp
                          </a>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-start gap-3">
                        <Mail className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <div>
                          <CardTitle className="text-lg mb-2">Email</CardTitle>
                          <a 
                            href="mailto:info@chillandsurf.lk" 
                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            info@chillandsurf.lk
                          </a>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-start gap-3">
                        <Clock className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <div>
                          <CardTitle className="text-lg mb-2">Business Hours</CardTitle>
                          <div className="text-sm text-muted-foreground space-y-1">
                            <p>Monday - Sunday: 6:00 AM - 7:00 PM</p>
                            <p className="text-xs">Open every day of the year</p>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </div>
              </div>

              {/* Social Links */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg mb-4">Follow Us</CardTitle>
                  <div className="flex gap-4">
                    <a 
                      href="#" 
                      aria-label="Facebook"
                      className="p-3 rounded-full bg-accent/10 hover:bg-accent/20 transition-colors"
                    >
                      <Facebook className="h-5 w-5 text-accent" />
                    </a>
                    <a 
                      href="#" 
                      aria-label="Instagram"
                      className="p-3 rounded-full bg-accent/10 hover:bg-accent/20 transition-colors"
                    >
                      <Instagram className="h-5 w-5 text-accent" />
                    </a>
                  </div>
                </CardHeader>
              </Card>

              {/* Quick Info */}
              <Card className="bg-accent/5">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-3">Quick Response</h3>
                  <p className="text-sm text-muted-foreground">
                    We typically respond to all inquiries within 2-4 hours during business hours. 
                    For urgent bookings or questions, WhatsApp is the fastest way to reach us!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-8">Find Us</h2>
          <Card className="overflow-hidden">
            <div className="w-full h-[400px] bg-muted flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <MapPin className="h-12 w-12 mx-auto mb-4" />
                <p className="text-sm">Map embed placeholder</p>
                <p className="text-xs mt-2">Beach Road, Weligama, Sri Lanka</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Have Questions?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Check out our surfing and diving pages for detailed FAQs, or contact us directly.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button variant="outline" asChild>
              <a href="/surfing#faq">Surfing FAQs</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/diving#faq">Diving FAQs</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
