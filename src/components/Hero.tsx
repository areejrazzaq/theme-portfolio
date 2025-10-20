import { ArrowDownIcon, CodeIcon, CoffeeIcon, SparklesIcon, MessageSquareCode, Cloudy } from 'lucide-react';
import { IconCloud } from './ui/interactive-icon-cloud';
import { GooeyText } from './ui/gooey-text-morphing';

export function Hero() {
  return (
    <section className="min-h-90 w-full bg-background flex items-center justify-center relative overflow-hidden py-8 sm:py-0">
      {/* Subtle background shapes */}
      {/* <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-purple-primary opacity-3 blur-xl"></div>
      <div className="absolute top-1/3 right-20 w-32 h-32 rounded-full bg-teal-primary opacity-4 blur-lg"></div>
      <div className="absolute bottom-20 left-1/4 w-24 h-24 rounded-full bg-gold-primary opacity-5 blur-md"></div>
      <div className="absolute top-1/2 right-1/3 w-20 h-20 rounded-full bg-purple-primary opacity-3 blur-lg"></div> */}
      
      {/* Main content container */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Left side - Content */}
          <div className="flex-1 text-left lg:max-w-2xl">
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground leading-tight mb-3 mt-4 sm:mt-0">
              I build meaningful{' '}
              <span className="block text-primary mt-3">
                <GooeyText
                  texts={["web apps", "AI-driven apps", "automations", "scalable apps"]}
                  morphTime={2}
                  cooldownTime={0.5}
                  className="block"
                  textClassName="text-primary text-4xl sm:text-5xl md:text-7xl font-bold"
                />
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground my-6 leading-relaxed max-w-xl">
              Full-stack developer crafting solutions that bridge the gap between 
              <span className="text-accent-foreground font-semibold"> innovation</span> and 
              <span className="text-accent-foreground font-semibold"> impact</span>
            </p>

            {/* CTA Button */}
            <div className="mb-5">
              <a
                href="#about-me"
                className="inline-flex items-center px-6 sm:px-10 py-4 sm:py-5 bg-primary text-primary-foreground text-lg sm:text-xl font-semibold rounded-theme hover:bg-accent-foreground transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <SparklesIcon className="mr-3" size={24} />
                Begin the Story
                <ArrowDownIcon className="ml-3" size={24} />
              </a>
            </div>

            {/* Tech stack preview */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <span className="flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-sm border border-border text-sm font-medium text-card-foreground">
                <CoffeeIcon size={18} className="text-primary" />
                Laravel
              </span>
              <span className="flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-sm border border-border text-sm font-medium text-card-foreground">
                <CodeIcon size={18} className="text-primary" />
                React
              </span>
              <span className="flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-sm border border-border text-sm font-medium text-card-foreground">
                <MessageSquareCode  size={18} className="text-primary" />
                Angular
              </span>
              <span className="flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-sm border border-border text-sm font-medium text-card-foreground">
                <CodeIcon size={18} className="text-primary" />
                TypeScript
              </span>
              <span className="flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-sm border border-border text-sm font-medium text-card-foreground">
                <Cloudy  size={18} className="text-primary" />
                AWS
              </span>
            </div>
          </div>

          {/* Right side - Interactive Icon Cloud */}
          <div className="flex-1 max-w-[75%] sm:max-w-full lg:max-w-lg m-0">
            <div className="relative">
              {/* Icon Cloud Container */}
              <div className="">
                <IconCloud iconSlugs={[
                  "javascript",
                  "aws",
                  "angular",
                  "typescript",
                  "laravel",
                  "react",
                  "html5",
                  "css3",
                  "nodedotjs",
                  "mysql",
                  "express",
                  "nextdotjs",
                  "amazonaws",
                  "postgresql",
                  "firebase",
                  "nginx",
                  "vercel",
                  "testinglibrary",
                  "jest",
                  "cypress",
                  "docker",
                  "git",
                  "azure",
                  "jira",
                  "github",
                  "gitlab",
                  "visualstudiocode",
                  "androidstudio",
                  "figma",
                ]} />
              </div>
              
              {/* Floating elements */}
              {/* <div className="absolute -top-6 -left-6 w-12 h-12 bg-purple-primary rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gold-primary rounded-full opacity-15 animate-bounce"></div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDownIcon className="text-primary" size={24} />
      </div>
    </section>
  );
}
