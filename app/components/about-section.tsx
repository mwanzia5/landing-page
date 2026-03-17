"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Award, Globe } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2010 by a team of passionate aviators and adventure enthusiasts, SkyBound Adventures began with a simple mission: to make extreme aerial sports accessible to everyone.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              What started as a small skydiving operation has grown into a comprehensive adventure company offering multiple aerial experiences across the country. Our team of certified instructors has collectively logged over 50,000 hours of flight time.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700">Meet Our Team</Button>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: Calendar, title: "14 Years", description: "Of adventure experience" },
              { icon: Users, title: "10K+", description: "Satisfied adventurers" },
              { icon: Award, title: "50+", description: "Certified instructors" },
              { icon: Globe, title: "5", description: "Locations nationwide" }
            ].map((stat, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4">
                    <stat.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl text-center">{stat.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">{stat.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
