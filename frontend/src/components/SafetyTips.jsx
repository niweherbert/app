import React from 'react';
import { safetyTips } from '../mock';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { AlertCircle } from 'lucide-react';

export const SafetyTips = () => {
  return (
    <section id="safety" className="py-20 bg-white" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <AlertCircle className="h-8 w-8 text-red-600" />
              <h2 className="text-4xl font-bold text-gray-900">Fire Safety Tips</h2>
            </div>
            <p className="text-xl text-gray-600 mb-8">
              Essential knowledge for proper fire extinguisher usage and maintenance
            </p>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {safetyTips.map((tip) => (
                <AccordionItem key={tip.id} value={`item-${tip.id}`} className="border-2 border-gray-200 rounded-lg px-6 hover:border-red-300 transition-colors">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-red-600">
                    {tip.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-base leading-relaxed pt-2">
                    {tip.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1552879890-3a06dd3a06c2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwyfHxzYWZldHklMjBlcXVpcG1lbnR8ZW58MHx8fHwxNzYyNDIzOTIwfDA&ixlib=rb-4.1.0&q=85" 
                alt="Safety Equipment"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              
              {/* Emergency Banner */}
              <div className="absolute bottom-8 left-8 right-8 bg-red-600 text-white p-6 rounded-lg shadow-xl">
                <h3 className="text-2xl font-bold mb-2">Emergency?</h3>
                <p className="text-red-100 mb-3">Call emergency services immediately</p>
                <div className="text-3xl font-bold">911</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
