import React from 'react';
import { stats, certifications } from '../mock';
import { Award, Users, Target, TrendingUp } from 'lucide-react';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';

const statIcons = [Award, Users, Target, TrendingUp];

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About FireSafety Pro</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Leading provider of fire safety solutions with over 25 years of experience in protecting lives and property
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, idx) => {
            const IconComponent = statIcons[idx];
            return (
              <Card key={idx} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-colors">
                <CardContent className="p-6 text-center">
                  <IconComponent className="h-8 w-8 text-red-400 mx-auto mb-3" />
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* About Content */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                At FireSafety Pro, we are committed to providing top-quality fire protection equipment and services. Our mission is to ensure every building is equipped with reliable, certified fire safety solutions that save lives and protect property.
              </p>
              <p className="text-gray-300 leading-relaxed">
                With decades of experience and a team of certified professionals, we offer comprehensive fire safety solutions including installation, maintenance, training, and compliance consulting.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Certifications & Standards</h3>
              <div className="flex flex-wrap gap-3">
                {certifications.map((cert, idx) => (
                  <Badge key={idx} className="bg-red-600 text-white text-sm px-4 py-2 hover:bg-red-700">
                    {cert}
                  </Badge>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-red-600/20 border-2 border-red-500 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Why Choose Us?</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Certified and experienced technicians</li>
                  <li>• 24/7 emergency response</li>
                  <li>• Competitive pricing</li>
                  <li>• Compliance guaranteed</li>
                  <li>• Free consultations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
