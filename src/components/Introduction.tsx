import { Circle, MoreHorizontal } from "lucide-react";
import { Tilt } from "../components/ui/tilt";


export function Introduction() {
  return (
    <section
      id="about-me"
      className="bg-background py-5 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary opacity-5 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent opacity-10 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        

        <Tilt rotationFactor={8} isRevese>
        <div
          style={{
            borderRadius: '12px',
          }}
          className='flex max-w-50 flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900'
        >
          <div className="bg-card border border-border rounded-lg shadow-2xl overflow-hidden">
              {/* Terminal Title Bar */}
              <div className="bg-dark border-b border-border px-4 py-3 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Circle
                    size={12}
                    className="text-foreground fill-foreground"
                  />
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-popover rounded-full"></div>
                    <div className="w-2 h-2 bg-popover rounded-full"></div>
                    <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="text-foreground text-sm font-mono">
                    ══ CODE FILES ══
                  </div>
                  <MoreHorizontal size={16} className="text-muted-foreground" />
                </div>
              </div>

              {/* Terminal Content */}
              <div
                className="bg-dark panel p-6 text-base text-foreground leading-relaxed relative text-justify"
                style={{ fontFamily: "VT323, Fira Code, monospace !important" }}
              >
                <div className="space-y-3 w-full">
                  <div className="text-white">who am I ? (from my POV)</div>

                  <div className="text-white">
                    Coffee in one hand, keyboard in the other that's me, AREEJ
                    RAZZAQ 👋🏻
                  </div>

                  <div className="text-white">
                    It all started with curiosity and a deep love for figuring
                    things out. Like Chandler Bing finding his niche, I found
                    mine in Computer Science — a perfect blend of logic,
                    creativity, and caffeine. 💡
                  </div>

                  <div className="text-white">
                    Graduating from NUST in 2023 felt like my Friends finale
                    moment — emotional, exciting, and just the beginning of
                    something bigger. Since then, I’ve been building, learning,
                    and refining my craft one line of code at a time.
                  </div>

                  <div className="text-white">
                    When it comes to problem-solving, I think like House MD, act
                    like Harvey Specter, and occasionally talk to my code like
                    Walter White convincing chemistry to behave. 🧠🔥
                  </div>
                  <div className="text-white">
                    I love creating digital experiences that tell a story, solve
                    real problems, and make technology feel just a little more
                    human. 🌐💫
                  </div>
                </div>                
              </div>
            </div>
          <div className='p-2 text-right'>
            <h1 className='font-mono leading-snug text-zinc-950 dark:text-zinc-50'>
             Me in a nutshell
            </h1>
            <p className='text-zinc-700 dark:text-zinc-400'>Code. Coffee. Chill.</p>
          </div>
        </div>
      </Tilt>

        {/* Continue Button */}
        {/* <div className="mt-6 text-center">
          <a
            href="#projects"
            className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-accent-foreground transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Continue the Story
            <ArrowRightIcon className="ml-2" size={18} />
          </a>
        </div> */}
      </div>
    </section>
  );
}
