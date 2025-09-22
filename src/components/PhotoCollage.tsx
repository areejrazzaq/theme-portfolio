import React from 'react';
export function PhotoCollage() {
  const collageItems = [{
    image: "/IMG_6915.jpg",
    caption: 'When my code finally works after 5 hours of debugging'
  }, {
    image: "/IMG_6909.jpg",
    caption: "Me explaining why my project needs 'just one more feature'"
  }, {
    image: "/IMG_6911.jpg",
    caption: 'My relationship status with Stack Overflow'
  }, {
    image: "/IMG_6912.jpg",
    caption: "Joey doesn't share code without proper comments!"
  }, {
    image: "/IMG_6914.jpg",
    caption: 'How it feels when you merge without conflicts'
  }];
  return <section className="py-16 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-friends-nude opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-full h-32 bg-gradient-to-t from-friends-nude opacity-10"></div>
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-friends-maroon">
            The One With The Memories
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            Just like the Friends gang had their photo frames around Monica's
            peephole, here's a glimpse into my journey.
          </p>
        </div>
        {/* Photo collage grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main large image */}
          <div className="md:col-span-2 md:row-span-2 relative group">
            <div className="relative transform rotate-1 hover:rotate-0 transition-transform duration-300 shadow-xl">
              <div className="absolute inset-0 bg-friends-maroon opacity-10 rounded-lg"></div>
              <div className="bg-white p-3 rounded-lg">
                <img src={collageItems[0].image} alt="Friends themed collage" className="w-full h-auto rounded-md" />
                <p className="mt-3 font-friends text-friends-maroon text-center">
                  {collageItems[0].caption}
                </p>
              </div>
              {/* Decorative tape */}
              <div className="absolute -top-3 left-1/4 w-10 h-4 bg-friends-nude opacity-60 transform -rotate-12"></div>
            </div>
          </div>
          {/* Smaller images */}
          {collageItems.slice(1).map((item, index) => <div key={index} className="relative group">
              <div className={`relative transform ${index % 2 === 0 ? 'rotate-2' : '-rotate-2'} hover:rotate-0 transition-transform duration-300 shadow-lg`}>
                <div className="absolute inset-0 bg-friends-maroon opacity-10 rounded-lg"></div>
                <div className="bg-white p-2 rounded-lg">
                  <img src={item.image} alt={`Friends themed image ${index + 2}`} className="w-full h-auto rounded-md" />
                  <p className="mt-2 text-sm font-friends text-friends-maroon text-center">
                    {item.caption}
                  </p>
                </div>
                {/* Decorative elements */}
                <div className={`absolute ${index % 2 === 0 ? '-bottom-2 right-1/4' : '-top-2 left-1/3'} w-8 h-3 bg-friends-nude opacity-60 transform ${index % 2 === 0 ? 'rotate-12' : '-rotate-12'}`}></div>
              </div>
            </div>)}
        </div>
        {/* Coffee stain decorative element */}
        <div className="absolute -bottom-16 -left-16 w-32 h-32 rounded-full bg-friends-nude opacity-10 blur-md"></div>
      </div>
    </section>;
}