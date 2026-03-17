"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Plane, Cloud, Wind, Shield, Users, Star, Calendar, MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import AboutSection from "./components/about-section";

type AdventureType = {
  id: number;
  title: string;
  description: string;
  price: number;
  duration: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  features: string[];
  image: string;
  alt: string;
};

type TestimonialType = {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
  alt: string;
};

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    adventureType: ""
  });

  const adventures: AdventureType[] = [
    {
      id: 1,
      title: "Skydiving Experience",
      description: "Experience the ultimate adrenaline rush with a tandem skydive from 15,000 feet.",
      price: 299,
      duration: "4 hours",
      difficulty: "Beginner",
      features: ["Tandem jump with expert instructor", "Freefall at 120mph", "Professional photos & video", "Certificate of achievement"],
      image: "https://images.unsplash.com/photo-1520817562974-beb0c85c2842?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTI4OTR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzM3Mzk2MTB8&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "man jumping on desert"
    },
    {
      id: 2,
      title: "Paragliding Adventure",
      description: "Soar like a bird with breathtaking views of mountain ranges and coastal landscapes.",
      price: 189,
      duration: "3 hours",
      difficulty: "Beginner",
      features: ["Tandem flight with certified pilot", "30-45 minute flight", "GoPro footage included", "All equipment provided"],
      image: "https://images.unsplash.com/photo-1629212345095-503c3e711b8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTI4OTR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzM3Mzk2MTB8&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "person in red parachute under white clouds during daytime"
    },
    {
      id: 3,
      title: "Kiteboarding Thrill",
      description: "Master the wind and waves with our expert kiteboarding instruction in perfect conditions.",
      price: 249,
      duration: "6 hours",
      difficulty: "Intermediate",
      features: ["Professional instruction", "All equipment included", "Beachfront location", "Progress tracking"],
      image: "https://images.unsplash.com/photo-1643004864044-45eaa104fd1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTI4OTR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzM3Mzk2MTB8&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "a man flying through the air while riding a kiteboard"
    },
    {
      id: 4,
      title: "Scenic Flight Tour",
      description: "Enjoy a private scenic flight over stunning landscapes with panoramic views.",
      price: 399,
      duration: "2 hours",
      difficulty: "Beginner",
      features: ["Private aircraft", "Customizable route", "Professional pilot", "Comfortable seating"],
      image: "https://images.unsplash.com/photo-1735624974732-aaadb60f3c97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTI4OTR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzM3Mzk2MTB8&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "An airplane is flying through the blue sky"
    }
  ];

  const testimonials: TestimonialType[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "First-time Skydiver",
      content: "The most incredible experience of my life! The instructors were professional and made me feel completely safe. I can't wait to go again!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1545500970-9a3e859e36ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTI4OTR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzM3Mzk2MTB8&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "leaping person by trees silhouette"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Adventure Enthusiast",
      content: "The paragliding experience was absolutely breathtaking. The views were incredible and the pilot was extremely knowledgeable.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1572800597050-e17c899d7335?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTI4OTR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzM3Mzk2MTB8&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "wool photography of person spinning flames on rope"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Kiteboarding Student",
      content: "I learned kiteboarding in just two sessions! The instructors were patient and skilled. Highly recommend for anyone looking to try something new.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1652108701632-3f041bf50195?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTI4OTR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzM3Mzk2MTB8&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "birds flying over water"
    }
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing with ${email}! You'll receive our adventure updates soon.`);
      setEmail("");
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for your inquiry, ${formData.name}! We'll contact you at ${formData.email} within 24 hours.`);
    setFormData({ name: "", email: "", message: "", adventureType: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={cn(
          "w-4 h-4",
          i < rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"
        )}
      />
    ));
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-100 text-green-800";
      case "Intermediate": return "bg-yellow-100 text-yellow-800";
      case "Advanced": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Plane className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold tracking-tight text-gray-900">SkyBound Adventures</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#adventures" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Adventures</a>
            <a href="#about" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">About</a>
            <a href="#testimonials" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Testimonials</a>
            <a href="#contact" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
          </nav>
          <Button className="bg-blue-600 hover:bg-blue-700">Book Now</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1510924014959-7e1849088bfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4OTI4OTR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzM3Mzk2MTB8&ixlib=rb-4.1.0&q=80&w=1080')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/60" />
        </div>
        <div className="relative container mx-auto px-4 md:px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-white/20 text-white backdrop-blur-sm border-0">Experience the Sky</Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
              Defy Gravity, <span className="text-blue-300">Embrace Freedom</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl">
              Discover extreme aerial adventures that push your limits and create unforgettable memories. From skydiving to paragliding, we offer the most thrilling experiences in the sky.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Explore Adventures <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30">
                Watch Video
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Why Choose SkyBound</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine safety, expertise, and passion to deliver the ultimate aerial adventure experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Safety First", description: "Certified instructors and top-quality equipment ensure your safety is our priority." },
              { icon: Users, title: "Expert Guides", description: "Learn from experienced professionals with thousands of hours of flight time." },
              { icon: Cloud, title: "Perfect Conditions", description: "We operate in locations with ideal weather conditions for each activity." },
              { icon: Wind, title: "All Levels Welcome", description: "From beginners to experienced adventurers, we have something for everyone." }
            ].map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Adventures Section */}
      <section id="adventures" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Featured Adventures</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our selection of thrilling aerial experiences
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-8">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="beginner">Beginner</TabsTrigger>
              <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
              <TabsTrigger value="advanced">Advanced</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {adventures.map((adventure) => (
                  <Card key={adventure.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={adventure.image} 
                        alt={adventure.alt}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <Badge className={cn("absolute top-3 right-3", getDifficultyColor(adventure.difficulty))}>
                        {adventure.difficulty}
                      </Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{adventure.title}</CardTitle>
                      <CardDescription>{adventure.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-2xl font-bold text-blue-600">${adventure.price}</span>
                          <span className="text-sm text-gray-500">{adventure.duration}</span>
                        </div>
                        <ul className="space-y-2">
                          {adventure.features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">Book Now</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">What Our Adventurers Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have experienced the thrill with us
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "10,000+", label: "Adventures Completed" },
              { value: "100%", label: "Safety Record" },
              { value: "50+", label: "Certified Instructors" },
              { value: "4.9", label: "Average Rating" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Ready for Your Adventure?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Contact us to book your experience or ask any questions. Our team is here to help you plan the perfect adventure.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Call Us</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email Us</h3>
                    <p className="text-gray-600">hello@skyboundadventures.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Visit Us</h3>
                    <p className="text-gray-600">123 Adventure Way, Mountain View, CA 94043</p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>We'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      name="email"
                      type="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="adventureType">Adventure Interest</Label>
                    <Input 
                      id="adventureType" 
                      name="adventureType"
                      value={formData.adventureType}
                      onChange={handleInputChange}
                      placeholder="Skydiving, Paragliding, etc." 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your adventure plans..." 
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <Plane className="h-12 w-12 mx-auto mb-6 text-blue-300" />
          <h2 className="text-3xl font-bold tracking-tight mb-4">Stay Updated on New Adventures</h2>
          <p className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive offers, new adventure launches, and adventure tips.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-white/10 border-white/30 text-white placeholder:text-blue-200 flex-grow"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white">Subscribe</Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Plane className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold text-white">SkyBound Adventures</span>
              </div>
              <p className="text-sm">Creating unforgettable aerial experiences since 2010.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#adventures" className="hover:text-white transition-colors">Adventures</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Adventures</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Skydiving</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Paragliding</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Kiteboarding</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Scenic Flights</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> 123 Adventure Way, CA</li>
                <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +1 (555) 123-4567</li>
                <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@skybound.com</li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 bg-gray-700" />
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p>© 2024 SkyBound Adventures. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Safety Guidelines</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
