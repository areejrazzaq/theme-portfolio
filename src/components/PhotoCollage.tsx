import { useState, useRef, useEffect } from "react";
export function PhotoCollage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const handleMouseEnter = (index: number) => {
    // Don't show videos on mobile screens
    if (!isMobile) {
      setHoveredIndex(index);
    }
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleClick = (index: number) => {
    // Don't show videos on mobile screens
    if (!isMobile) {
      setClickedIndex(clickedIndex === index ? null : index);
    }
  };

  const handleClosePIP = () => {
    setHoveredIndex(null);
    setClickedIndex(null);
  };

  // Check if screen is mobile/tablet size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Auto-close PIP when scrolling out of collage section
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

        if (!isVisible && (hoveredIndex !== null || clickedIndex !== null)) {
          handleClosePIP();
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hoveredIndex, clickedIndex]);

  // Ensure media plays when PIP opens (respect autoplay policies)
  useEffect(() => {
    const activeIndex = hoveredIndex ?? clickedIndex;
    if (activeIndex === null) return;

    const currentItem = collageItems[activeIndex];
    const isYouTube = /youtube\.com|youtu\.be/.test(currentItem.video);

    if (!isYouTube && videoRef.current) {
      const el = videoRef.current;
      const openedViaHover = hoveredIndex !== null && clickedIndex === null;
      el.currentTime = 0;
      // Autoplay must be muted without a user gesture
      el.muted = openedViaHover ? true : false;
      el.play().catch(() => {
        // If autoplay fails, fall back to muted play
        el.muted = true;
        el.play().catch(() => {});
      });
    }
    // For YouTube, autoplay is controlled by URL params; sound requires clicking inside the player
  }, [hoveredIndex, clickedIndex]);

  const collageItems = [
    {
      image: "/IMG_6904.jpg",
      caption: "I'm totally fine with debugging at 2 AM",
      video: "https://youtube.com/shorts/utr42QM-Fgw?si=c--QiI6305xOt3Qx",
    },
    {
      image: "/IMG_6914.jpg",
      caption: "How it feels when you merge without conflicts",
      video: "https://youtube.com/shorts/LSocIYUIkRE?si=4fJeOsoyLm7uxIIo",
    },
    {
      image: "/IMG_6919.JPG",
      caption: "Me explaining why my project needs 'just one more feature'",
      video: "https://youtube.com/shorts/TXDJadMRTLM?si=0qMbt67q-0BuhetG",
    },
    {
      image: "/IMG_6925.JPG",
      caption: "Joey doesn't share code without proper comments!",
      video: "https://youtube.com/shorts/Q4I8kC5VKzU?si=QMG5-K9UG_DVx9vl",
    },
    {
      image: "/IMG_6923.JPG",
      caption: "Happily ever after = 0 bugs in production",
      video: "https://youtube.com/shorts/S28Dz2xUxoM?si=Bswzg6fpkJa5JXO9",
    },
    {
      image: "/IMG_6922.JPG",
      caption: "I'll always be there for you!",
      video: "https://youtube.com/shorts/AnlNJX1esC0?si=7wTx5DbicEm5FKQX",
    },
  ];
  return (
    <section
      ref={sectionRef}
      className="py-16 bg-white relative overflow-hidden"
    >
      {/* Picture-in-Picture Video Popup - Only show on desktop */}
      {!isMobile && (hoveredIndex !== null || clickedIndex !== null) && (
        <div
          className="fixed bottom-4 right-4 z-50"
          style={{
            width: "320px",
            height: "180px",
          }}
        >
          <div className="relative w-full h-full bg-white rounded-lg shadow-2xl p-2 border-2 border-friends-maroon">
            {/* Close Button */}
            <button
              onClick={handleClosePIP}
              className="absolute -top-2 -right-2 z-20 bg-friends-maroon text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600 transition-colors duration-200 shadow-lg"
              aria-label="Close video"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 3L3 9M3 3L9 9"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {/* Media Container */}
            {(() => {
              const activeIndex =
                (hoveredIndex !== null ? hoveredIndex : clickedIndex) ?? 0;
              const src = collageItems[activeIndex]?.video ?? "";
              const isYouTube = /youtube\.com|youtu\.be/.test(src);
              if (isYouTube) {
                // Normalize Shorts URL to embed
                const idMatch = src.match(
                  /(?:shorts\/|v=|youtu\.be\/)([A-Za-z0-9_-]{6,})/
                );
                const videoId = idMatch ? idMatch[1] : "";
                const embed = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;
                return (
                  <iframe
                    ref={iframeRef}
                    width="100%"
                    height="100%"
                    src={embed}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="rounded-md w-full h-full bg-black"
                    style={{ display: "block" }}
                  />
                );
              }
              return (
                <video
                  ref={videoRef}
                  width="100%"
                  height="100%"
                  autoPlay
                  loop
                  playsInline
                  preload="auto"
                  controls
                  className="rounded-md object-contain w-full h-full bg-black"
                  src={src}
                  style={{ display: "block" }}
                >
                  Your browser does not support the video tag.
                </video>
              );
            })()}
          </div>
        </div>
      )}
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-friends-nude opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-full h-32 bg-gradient-to-t from-friends-nude opacity-10"></div>
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-friends-maroon">
            The One With The Memories
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
          Just like the Friends gang had their photo frames around Monica's peephole, here's a glimpse of my favorite clips that I find hilarious and relate to. 
          </p>
        </div>
        {/* Photo collage grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Main large image */}
          {/* <div className="md:col-span-2 md:row-span-2 relative group">
            <div className="relative transform rotate-1 hover:rotate-0 transition-transform duration-300 shadow-xl">
              <div className="absolute inset-0 bg-friends-maroon opacity-10 rounded-lg"></div>
              <div className="bg-white p-3 rounded-lg">
                <img src={collageItems[0].image} alt="Friends themed collage" className="w-full h-auto rounded-md" />
                <p className="mt-3 font-friends text-friends-maroon text-center">
                  {collageItems[0].caption}
                </p>
              </div>
              <div className="absolute -top-3 left-1/4 w-10 h-4 bg-friends-nude opacity-60 transform -rotate-12"></div>
            </div>
          </div> */}
          {/* Smaller images */}
          {collageItems.map((item, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(index)}
            >
              <div
                className={`relative transform ${
                  index % 2 === 0 ? "rotate-2" : "-rotate-2"
                } hover:rotate-0 transition-transform duration-300 shadow-lg`}
              >
                <div className="absolute inset-0 bg-friends-maroon opacity-10 rounded-lg"></div>
                <div className="bg-white p-2 rounded-lg">
                  <img
                    src={item.image}
                    alt={`Friends themed image ${index + 2}`}
                    className="w-full h-auto rounded-md max-h-64 md:max-h-80 lg:max-h-96 object-cover"
                  />
                  <p className="mt-2 text-sm font-friends text-friends-maroon text-center">
                    {item.caption}
                  </p>
                </div>
                {/* Decorative elements */}
                <div
                  className={`absolute ${
                    index % 2 === 0 ? "-bottom-2 right-1/4" : "-top-2 left-1/3"
                  } w-8 h-3 bg-friends-nude opacity-60 transform ${
                    index % 2 === 0 ? "rotate-12" : "-rotate-12"
                  }`}
                ></div>
              </div>
            </div>
          ))}
        </div>
        {/* Coffee stain decorative element */}
        <div className="absolute -bottom-16 -left-16 w-32 h-32 rounded-full bg-friends-nude opacity-10 blur-md"></div>
      </div>
    </section>
  );
}
