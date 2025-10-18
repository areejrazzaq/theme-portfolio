import React from 'react';
import { TrendingUpIcon, AwardIcon, GlobeIcon, LightbulbIcon, RocketIcon, HeartIcon } from 'lucide-react';

export function FutureGoals() {
  const goals = [
    {
      icon: TrendingUpIcon,
      title: "Career Growth",
      description: "To advance my technical expertise and take on leadership roles in innovative projects that push the boundaries of what's possible.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: AwardIcon,
      title: "Skill Mastery",
      description: "To become an expert in emerging technologies like AI/ML integration, advanced cloud architectures, and cutting-edge development practices.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: GlobeIcon,
      title: "Making an Impact",
      description: "To develop applications that solve real-world problems and positively impact people's lives, creating meaningful change through technology.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: LightbulbIcon,
      title: "Innovation & Learning",
      description: "To continuously learn and contribute to groundbreaking solutions in the tech industry, staying at the forefront of technological advancement.",
      color: "bg-orange-100 text-orange-600"
    }
  ];

  return (
    <section id="chapter5" className="py-20 bg-purple-primary relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-white opacity-5"></div>
      <div className="absolute top-20 right-20 w-24 h-24 rounded-full bg-white opacity-5"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-gold-primary opacity-10"></div>
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Visual Content */}
          <div className="lg:w-1/2">
            <div className="relative">
              {/* Enhanced umbrella illustration */}
              <div className="relative">
                {/* Layered shadow effect */}
                <div className="absolute inset-0 bg-friends-nude rounded-lg transform translate-x-4 translate-y-4 opacity-20"></div>
                {/* Frame with polaroid effect */}
                <div className="relative bg-white p-4 rounded shadow-xl transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                  <img 
                    src="/IMG_6906.JPG" 
                    alt="Future goals illustration" 
                    className="w-full h-auto rounded max-h-80 object-cover" 
                  />
                  {/* Polaroid caption */}
                  <div className="text-center pt-3 pb-2">
                    <p className="text-purple-primary text-sm font-medium">
                      The one where I achieve my goals
                    </p>
                  </div>
                </div>
                {/* Decorative tape pieces */}
                <div className="absolute -top-2 left-1/4 w-8 h-3 bg-gold-primary opacity-60 transform -rotate-12"></div>
                <div className="absolute -bottom-2 right-1/4 w-8 h-3 bg-gold-primary opacity-60 transform rotate-12"></div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-1/2">
            <div className="mb-8">
              <span className="text-gold-primary font-semibold text-lg">Chapter 5</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                The Future
              </h2>
              <p className="text-xl text-gold-primary mb-8">
                What I'm working toward next—my aspirations, learning goals, and how I plan to grow.
              </p>
            </div>

            <div className="space-y-6">
              {goals.map((goal, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-full ${goal.color} flex-shrink-0`}>
                      <goal.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-charcoal mb-2">
                        {goal.title}
                      </h3>
                      <p className="text-charcoal-light leading-relaxed">
                        {goal.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to action */}
            <div className="mt-8 bg-gold-primary p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <RocketIcon className="text-friends-maroon mr-3" size={24} />
                <h3 className="text-xl font-semibold text-charcoal">Ready to Connect?</h3>
              </div>
              <p className="text-charcoal-light mb-4">
                I'm always excited to discuss new opportunities, collaborations, or just chat about technology and innovation.
              </p>
              <a
                href="#connect"
                className="inline-flex items-center px-6 py-3 bg-purple-primary text-white rounded-lg hover:bg-purple-dark transition-all duration-300 transform hover:scale-105"
              >
                <HeartIcon size={18} className="mr-2" />
                Let's Start a Conversation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}