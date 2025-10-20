"use client";

import * as React from "react";
import { GithubIcon, LinkedinIcon, Mail, MessageCircle } from "lucide-react";
import { useAnimate } from "framer-motion";

import {
  HighlighterItem,
  HighlightGroup,
  Particles,
} from "../components/ui/highlighter";

export function Connect() {
  const [scope, animate] = useAnimate();

  React.useEffect(() => {
    animate(
      [
        ["#pointer", { left: 200, top: 60 }, { duration: 0 }],
        ["#javascript", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 50, top: 102 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#javascript", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
        ["#react-js", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 224, top: 170 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#react-js", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
        ["#typescript", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 88, top: 198 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#typescript", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
        ["#next-js", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 200, top: 60 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#next-js", { opacity: 0.5 }, { at: "-0.3", duration: 0.1 }],
      ],
      {
        repeat: Number.POSITIVE_INFINITY,
      }
    );
  }, [animate]);
  return (
    <section className="relative mx-auto mb-10 mt-6 max-w-5xl  ">
      <HighlightGroup className="group h-full">
        <div
          className="group/item h-full md:col-span-6 lg:col-span-12"
          data-aos="fade-down"
        >
          <HighlighterItem className="rounded-3xl p-6">
            <div className="relative z-20 h-full overflow-hidden rounded-3xl border border-slate-200 bg-white">
              <Particles
                className="absolute inset-0 -z-10 opacity-10 transition-opacity duration-1000 ease-in-out group-hover/item:opacity-100"
                quantity={200}
                color={"#555555"}
                vy={-0.2}
              />
              <div className="flex justify-center">
                <div className="flex h-full flex-col justify-center gap-10 p-4 md:h-[300px] md:flex-row">
                  <div
                    className="relative mx-auto h-[270px] w-[300px] md:h-[270px] md:w-[300px]"
                    ref={scope}
                  >
                    <div className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground text-xs font-bold">
                        A
                      </span>
                    </div>
                    <div
                      id="next-js"
                      className="text-foreground border-ring absolute bottom-12 left-2 rounded-3xl border border-slate-400 bg-slate-200 px-2 py-1.5 text-xs opacity-50"
                    >
                      AI-driven systems
                    </div>
                    <div
                      id="react-js"
                      className="text-foreground border-ring absolute left-2 top-20 rounded-3xl border border-slate-400 bg-slate-200 px-2 py-1.5 text-xs opacity-50 "
                    >
                      UI-UX
                    </div>
                    <div
                      id="typescript"
                      className="text-foreground border-ring absolute bottom-20 right-1 rounded-3xl border border-slate-400 bg-slate-200 px-2 py-1.5 text-xs opacity-50 "
                    >
                      Web Application
                    </div>
                    <div
                      id="javascript"
                      className="text-foreground border-ring absolute right-12 top-10 rounded-3xl border border-slate-400 bg-slate-200 px-2 py-1.5 text-xs opacity-50 "
                    >
                      Quick MVP
                    </div>

                    <div id="pointer" className="absolute">
                      <svg
                        width="16.8"
                        height="18.2"
                        viewBox="0 0 12 13"
                        className="fill-red-500"
                        stroke="white"
                        strokeWidth="1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 5.50676L0 0L2.83818 13L6.30623 7.86537L12 5.50676V5.50676Z"
                        />
                      </svg>
                      <span className="bg-pink relative -top-1 left-3 rounded-3xl px-2 py-1 text-xs text-white">
                        Areej
                      </span>
                    </div>
                  </div>

                  <div className="-mt-20 flex h-full flex-col justify-center p-2 md:-mt-4 md:ml-10 md:w-[400px]">
                    <div className="flex flex-col items-start">
                      <h3 className="mt-6   pb-1 font-bold ">
                        <span className="text-foreground text-2xl md:text-4xl">
                          Let's Connect
                        </span>
                      </h3>
                    </div>
                    <p className="mb-4 text-slate-400 text-md md:text-lg">
                      Whether you have a project in mind, want to collaborate,
                      or just want to chat about technology—I'd love to hear
                      from you
                    </p>
                    <div className="flex flex-wrap gap-1">
                    <a
                        href="https://www.linkedin.com/in/areej-razzaq/"
                        target="_blank"
                        className="bg-primary-foreground text-primary p-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-110"
                      >
                        <LinkedinIcon size={24} />
                      </a>
                      <a
                        href="https://wa.me/923414787831"
                        target="_blank"
                        className="bg-primary-foreground text-primary p-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-110"
                      >
                        <MessageCircle size={24} />
                      </a>
                      <a
                        href="mailto:areejrazzaq00@gmail.com"
                        target="_blank"
                        className="bg-primary-foreground text-primary p-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-110"
                      >
                        <Mail size={24} />
                      </a>
                      <a
                        href="https://github.com/areejrazzaq"
                        target="_blank"
                        className="bg-primary-foreground text-primary p-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-110"
                      >
                        <GithubIcon size={24} />
                      </a>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </HighlighterItem>
        </div>
      </HighlightGroup>
    </section>
  );
}
