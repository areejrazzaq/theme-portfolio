import React from "react";
export function Introduction() {
  return (
    <section id="introduction" className="py-16 bg-friends-beige">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-friends-maroon">
              Season 1: Pilot
            </h2>
            <div className="relative mb-6">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-friends-maroon"></div>
              <p className="text-lg mb-4">
                Coffee in one hand, keyboard in the other that’s me, <strong>AREEJ
                RAZZAQ </strong>👋🏻
              </p>
              <p className="text-lg mb-4 text-justify">
                What started as curiosity evolved into a passion for
                problem-solving and creating solutions that make a difference.
                Like Chandler who eventually found his true calling, I knew CS
                was where I belonged.
              </p>
              <p className="text-lg mb-4 text-justify">
                My journey into Computer Science began when I realized
                technology is like that reliable friend who's always there for
                you. What started as curiosity soon became a full-blown
                obsession with problem-solving and creating solutions that
                actually matter. Like Chandler eventually figuring out his
                thing, I knew CS was where I truly belonged.
              </p>
              <p className="text-lg mb-4 text-justify">
                Back in 2023, I wrapped up my Software Engineering degree from
                Pakistan's top institution, NUST, think of it as my ‘college
                Monica moment,’ the start of a lifelong passion.
              </p>
            </div>
            <div className="mt-8 flex justify-start">
              <a
                href="#accomplishments"
                className="px-6 py-3 bg-friends-maroon text-white rounded-md hover:bg-opacity-90 transition-colors"
              >
                Next Episode →
              </a>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative">
              {/* Decorative coffee cup ring stain behind the video */}
              <div className="absolute -left-4 -top-4 w-16 h-32 rounded-full bg-friends-nude opacity-20 blur-sm"></div>
              <div className="relative z-10 aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl border-4 border-friends-nude transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <iframe
                  src="https://www.youtube.com/embed/ps9IaSy966Y"
                  title="Introduction Video"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              {/* Central Perk Logo with enhanced styling */}
              <div className="z-20 absolute -bottom-8 -right-8 w-32 h-32 rounded-full p-1 bg-white shadow-lg transform rotate-6 hover:rotate-0 transition-all duration-300 hover:scale-105">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-friends-maroon">
                  <img
                    src="/IMG_6903.jpg"
                    alt="Central Perk Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Decorative dots pattern */}
              <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2">
                <div className="w-2 h-2 rounded-full bg-friends-maroon"></div>
                <div className="w-2 h-2 rounded-full bg-friends-maroon"></div>
                <div className="w-2 h-2 rounded-full bg-friends-maroon"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
