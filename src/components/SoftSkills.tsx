import React from 'react';
import { HeartIcon, MessageSquareIcon, RepeatIcon } from 'lucide-react';
export function SoftSkills() {
  return <section id="skills" className="py-16 bg-friends-nude relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-full h-32 bg-gradient-to-t from-white opacity-20"></div>
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-friends-maroon">
            Season 9-10: The 3 Cs
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            Just as the Friends group had their unique strengths, I bring my own
            set of soft skills to every project.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center transform hover:-translate-y-2 transition-transform duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-friends-maroon mb-6 shadow-md">
              <HeartIcon className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Commitment</h3>
            <p>
              Like Monica's dedication to perfection, I bring unwavering
              commitment to every project, ensuring quality and excellence in
              all deliverables.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center transform hover:-translate-y-2 transition-transform duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-friends-maroon mb-6 shadow-md">
              <MessageSquareIcon className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Communication</h3>
            <p>
              With the clarity of Ross in his lectures (not his breakups), I
              effectively communicate complex ideas and collaborate seamlessly
              with team members.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center transform hover:-translate-y-2 transition-transform duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-friends-maroon mb-6 shadow-md">
              <RepeatIcon className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Consistency</h3>
            <p>
              Like Phoebe's unwavering authenticity, I maintain consistent
              performance and reliability, adapting to challenges while staying
              true to core principles.
            </p>
          </div>
        </div>
      </div>
    </section>;
}