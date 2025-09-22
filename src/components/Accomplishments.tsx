import React from 'react';
import { CheckCircleIcon } from 'lucide-react';
export function Accomplishments() {
  const achievements = [{
    title: 'Project Success',
    description: 'Led development of a key application that increased efficiency by 40%'
  }, {
    title: 'Technical Mastery',
    description: 'Became proficient in multiple programming languages and frameworks'
  }, {
    title: 'Recognition',
    description: "Received the 'Outstanding Contribution' award for innovative solutions"
  }, {
    title: 'Problem Solver',
    description: 'Resolved critical system issues that improved overall stability'
  }];
  return <section id="accomplishments" className="py-16 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-friends-beige opacity-10 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-friends-maroon">
            Season 2-5: The Accomplishments
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            Like Rachel's journey from a coffee shop waitress to a fashion
            executive, my path has been filled with growth and achievements.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {achievements.map((achievement, index) => <div key={index} className="bg-friends-beige p-6 rounded-lg shadow-md border-l-4 border-friends-maroon transform hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-start">
                <CheckCircleIcon className="text-friends-maroon mr-4 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {achievement.title}
                  </h3>
                  <p>{achievement.description}</p>
                </div>
              </div>
            </div>)}
        </div>
        {/* Enhanced "I'm Fine" image styling */}
        <div className="relative flex justify-center items-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-40 h-40 rounded-full bg-friends-nude opacity-10 blur-md"></div>
          </div>
          <div className="relative z-10 transform hover:scale-105 transition-transform duration-300">
            <div className="relative">
              {/* Speech bubble effect */}
              <div className="absolute -top-8 -right-4 w-6 h-6 bg-white transform rotate-45 shadow-md"></div>
              <img src="/IMG_6904.jpg" alt="I'm Fine illustration" className="w-64 h-auto rounded-lg shadow-lg border-4 border-white" />
            </div>
            {/* Caption */}
            <p className="text-center mt-4 text-friends-maroon italic font-medium">
              "I'm totally fine with debugging at 2 AM"
            </p>
          </div>
        </div>
      </div>
    </section>;
}