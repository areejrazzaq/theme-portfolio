import React from 'react';
import { TrendingUpIcon, AwardIcon, GlobeIcon } from 'lucide-react';
export function FutureGoals() {
  return <section id="goals" className="py-16 bg-friends-maroon relative overflow-hidden">
      {/* Decorative coffee cup rings */}
      <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-white opacity-5"></div>
      <div className="absolute top-20 right-20 w-24 h-24 rounded-full bg-white opacity-5"></div>
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
          <div className="w-full md:w-1/2 order-2 md:order-1 max-w-sm md:max-w-none mx-auto md:mx-0">
            {/* Enhanced umbrella illustration */}
            <div className="relative">
              {/* Layered shadow effect */}
              <div className="absolute inset-0 bg-friends-nude rounded-lg transform translate-x-4 translate-y-4 opacity-20"></div>
              {/* Frame with polaroid effect */}
              <div className="relative bg-white p-2 md:p-3 rounded shadow-xl transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                <img 
                  src="/IMG_6906.JPG" 
                  alt="Friends umbrella illustration" 
                  className="w-full h-auto rounded max-h-48 sm:max-h-64 md:max-h-80 lg:max-h-96 object-cover" 
                />
                {/* Polaroid caption */}
                <div className="text-center pt-2 md:pt-3 pb-1">
                  <p className="font-friends text-friends-maroon text-xs md:text-sm">
                    The one where I achieve my goals
                  </p>
                </div>
              </div>
              {/* Decorative tape pieces */}
              <div className="absolute -top-2 left-1/4 w-8 h-3 bg-friends-nude opacity-60 transform -rotate-12"></div>
              <div className="absolute -bottom-2 right-1/4 w-8 h-3 bg-friends-nude opacity-60 transform rotate-12"></div>
            </div>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Season 6-8: Future Goals
            </h2>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md transform hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center mb-4">
                  <TrendingUpIcon className="text-friends-maroon mr-3" size={24} />
                  <h3 className="text-xl font-semibold">Career Growth</h3>
                </div>
                <p>
                  To advance my technical expertise and take on leadership roles
                  in innovative projects, much like Chandler's career evolution.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md transform hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center mb-4">
                  <AwardIcon className="text-friends-maroon mr-3" size={24} />
                  <h3 className="text-xl font-semibold">Skill Mastery</h3>
                </div>
                <p>
                  To become an expert in emerging technologies and contribute to
                  groundbreaking solutions in the tech industry.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md transform hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center mb-4">
                  <GlobeIcon className="text-friends-maroon mr-3" size={24} />
                  <h3 className="text-xl font-semibold">Making an Impact</h3>
                </div>
                <p>
                  To develop applications that solve real-world problems and
                  positively impact people's lives, creating my own success
                  story.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}