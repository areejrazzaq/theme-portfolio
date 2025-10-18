import React from 'react';

export function Skills() {
  // Tech skills with Devicon class names and consistent colors
  const techSkills = [
    // Languages - Purple
    { name: "javascript", displayName: "JavaScript", color: "text-purple-primary", bgColor: "bg-purple-primary/10" },
    { name: "php", displayName: "PHP", color: "text-purple-primary", bgColor: "bg-purple-primary/10" },
    { name: "mysql", displayName: "MySQL", color: "text-purple-primary", bgColor: "bg-purple-primary/10" },
    
    // Frameworks - Gold
    { name: "laravel", displayName: "Laravel", color: "text-gold-primary", bgColor: "bg-gold-primary/10" },
    { name: "angular", displayName: "Angular", color: "text-gold-primary", bgColor: "bg-gold-primary/10" },
    { name: "nextjs", displayName: "Next.js", color: "text-gold-primary", bgColor: "bg-gold-primary/10" },
    { name: "react", displayName: "React", color: "text-gold-primary", bgColor: "bg-gold-primary/10" },
    
    // Cloud & DevOps - Teal
    { name: "amazonwebservices", displayName: "AWS", color: "text-teal-primary", bgColor: "bg-teal-primary/10" },
    { name: "docker", displayName: "Docker", color: "text-teal-primary", bgColor: "bg-teal-primary/10" },
    { name: "github", displayName: "GitHub", color: "text-teal-primary", bgColor: "bg-teal-primary/10" },
    
    // Third Party - Purple
    { name: "twilio", displayName: "Twilio", color: "text-purple-primary", bgColor: "bg-purple-primary/10" },
    { name: "stripe", displayName: "Stripe", color: "text-purple-primary", bgColor: "bg-purple-primary/10" },
    { name: "slack", displayName: "Slack", color: "text-purple-primary", bgColor: "bg-purple-primary/10" },
    
    // Additional Skills - Gold
    { name: "typescript", displayName: "TypeScript", color: "text-gold-primary", bgColor: "bg-gold-primary/10" },
    { name: "nodejs", displayName: "Node.js", color: "text-gold-primary", bgColor: "bg-gold-primary/10" },
    { name: "git", displayName: "Git", color: "text-gold-primary", bgColor: "bg-gold-primary/10" },
  ];

  return (
    <section className="w-full bg-gray-900 py-8 overflow-hidden relative">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Technical Arsenal
        </h2>
        <p className="text-gray-300 text-lg">
          Technologies I work with to build amazing solutions
        </p>
      </div>
      
      {/* Single row - sliding left */}
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll-left-very-slow">
          {[...techSkills, ...techSkills, ...techSkills, ...techSkills].map((skill, index) => (
            <div key={`skill-${index}`} className="flex-shrink-0 mx-8 flex flex-col items-center group">
              <div className={`w-16 h-16 ${skill.bgColor} rounded-xl flex items-center justify-center border border-gray-700 hover:border-opacity-50 transition-all duration-300 hover:scale-110 group-hover:shadow-lg`}>
                <i className={`devicon-${skill.name}-plain ${skill.color} text-3xl`}></i>
              </div>
              <span className="text-xs text-gray-400 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {skill.displayName}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Legend */}
      <div className="mt-7 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div className="flex items-center justify-center space-x-3">
          <div className="w-4 h-4 bg-purple-primary rounded-full"></div>
          <span className="text-gray-300 text-sm font-medium">Languages</span>
        </div>
        <div className="flex items-center justify-center space-x-3">
          <div className="w-4 h-4 bg-gold-primary rounded-full"></div>
          <span className="text-gray-300 text-sm font-medium">Frameworks</span>
        </div>
        <div className="flex items-center justify-center space-x-3">
          <div className="w-4 h-4 bg-teal-primary rounded-full"></div>
          <span className="text-gray-300 text-sm font-medium">Cloud & DevOps</span>
        </div>
        <div className="flex items-center justify-center space-x-3">
          <div className="w-4 h-4 bg-purple-primary rounded-full"></div>
          <span className="text-gray-300 text-sm font-medium">Integrations</span>
        </div>
      </div>
    </section>
  );
}
