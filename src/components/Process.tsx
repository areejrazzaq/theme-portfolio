import React from 'react';
import { SearchIcon, PaletteIcon, CodeIcon, TestTubeIcon, RocketIcon, ArrowRightIcon } from 'lucide-react';

export function Process() {
  const processSteps = [
    {
      icon: SearchIcon,
      title: "Research & Discovery",
      description: "Understanding the problem, user needs, and business requirements through thorough analysis and stakeholder interviews.",
      color: "bg-purple-primary text-white"
    },
    {
      icon: PaletteIcon,
      title: "Design & Planning",
      description: "Creating wireframes, user flows, and technical architecture that aligns with both user experience and business goals.",
      color: "bg-gold-primary text-white"
    },
    {
      icon: CodeIcon,
      title: "Development",
      description: "Building robust, scalable solutions using modern technologies and best practices, with clean, maintainable code.",
      color: "bg-teal-primary text-white"
    },
    {
      icon: TestTubeIcon,
      title: "Testing & Quality",
      description: "Comprehensive testing including unit tests, integration tests, and user acceptance testing to ensure reliability.",
      color: "bg-purple-primary text-white"
    },
    {
      icon: RocketIcon,
      title: "Deployment & Launch",
      description: "Seamless deployment with monitoring, documentation, and ongoing support to ensure successful project delivery.",
      color: "bg-gold-primary text-white"
    }
  ];

  return (
    <section id="chapter4" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background shapes */}
      <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-purple-primary opacity-3 blur-xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-teal-primary opacity-4 blur-lg"></div>
      <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-gold-primary opacity-3 blur-md"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-charcoal mb-8">
            How I Work
          </h2>
          <p className="text-xl md:text-2xl text-charcoal-light max-w-4xl mx-auto leading-relaxed">
            Every great project starts with a clear process. Here's how I transform ideas into impactful solutions.
          </p>
        </div>

        {/* Process Steps - Horizontal Layout */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-purple-primary via-gold-primary to-teal-primary opacity-20 transform -translate-y-1/2"></div>
          
          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {processSteps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Step Card */}
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-neutral-base group-hover:border-purple-primary">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${step.color} mb-6 shadow-lg`}>
                    <step.icon size={28} />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-charcoal mb-4">
                    {step.title}
                  </h3>
                  <p className="text-charcoal-light leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>

                {/* Arrow connector (desktop only) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-8 bg-white rounded-full border-2 border-purple-primary flex items-center justify-center shadow-lg">
                      <ArrowRightIcon size={16} className="text-purple-primary" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Process Story */}
        <div className="mt-24 bg-gradient-to-r from-neutral-light to-neutral-base p-12 rounded-2xl border border-neutral-base">
          <div className="max-w-5xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-charcoal mb-8">
              A Real Example
            </h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <p className="text-lg text-charcoal-light leading-relaxed mb-6">
                  When I was tasked with building a lead management system, I didn't jump straight into coding. 
                  Instead, I spent time understanding the sales team's daily challenges, analyzed their existing 
                  workflow, and identified the real bottlenecks.
                </p>
                <p className="text-lg text-charcoal-light leading-relaxed">
                  This research-first approach led to a solution that not only automated their processes but 
                  also provided insights they never had before. The result? A 40% increase in conversion rates 
                  and a system the team actually wanted to use.
                </p>
              </div>
              
              {/* Visual representation */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-purple-primary rounded-full"></div>
                    <span className="text-sm font-medium text-charcoal">Research Phase</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gold-primary rounded-full"></div>
                    <span className="text-sm font-medium text-charcoal">Design & Planning</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-teal-primary rounded-full"></div>
                    <span className="text-sm font-medium text-charcoal">Development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-purple-primary rounded-full"></div>
                    <span className="text-sm font-medium text-charcoal">Testing & QA</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gold-primary rounded-full"></div>
                    <span className="text-sm font-medium text-charcoal">Deployment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
