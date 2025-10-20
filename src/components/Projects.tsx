import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { PlayIcon, InfoIcon, ChevronRightIcon } from "lucide-react";

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [heroProject, setHeroProject] = useState(0);

  // Handle project selection
  const selectProject = useCallback((projectIndex: number) => {
    setHeroProject(projectIndex);
  }, []);

  // Handle carousel navigation with infinite loop
  const scrollCarousel = useCallback((direction: "left" | "right") => {
    const carousel = document.querySelector(".projects-carousel");
    if (carousel) {
      const card = document.getElementById("apnawifi") as HTMLElement ;

      // Get its full width including margins (if needed)
      const cardStyle = window.getComputedStyle(card);
      const cardWidth = card.offsetWidth; // actual width including padding and border
      const gap = parseFloat(cardStyle.marginRight) || 0; // add horizontal gap if used

      // Dynamically calculate scroll amount
      const scrollAmount = cardWidth + 10;
      // const scrollAmount = 390; // Width of one card + gap
      const currentScroll = carousel.scrollLeft;
      const maxScroll = carousel.scrollWidth - carousel.clientWidth;

      let newScroll;
      if (direction === "left") {
        newScroll = currentScroll - scrollAmount;
        // If we're at the beginning, scroll to the end for infinite loop
        if (newScroll <= 0) {
          newScroll = maxScroll;
        }
      } else {
        newScroll = currentScroll + scrollAmount;
        // If we're at the end, scroll to the beginning for infinite loop
        if (newScroll >= maxScroll) {
          newScroll = 0;
        }
      }

      carousel.scrollTo({
        left: newScroll,
        behavior: "smooth",
      });
    }
  }, []);

  // const projects = [
  //   {
  //     title: "Lead Management System",
  //     date: "2023",
  //     problem: "Sales team was struggling with manual lead tracking and follow-ups, leading to missed opportunities and inconsistent processes.",
  //     role: "Full-Stack Developer",
  //     solution: "Built an end-to-end lead management pipeline with real-time scoring, automated SMS follow-ups, and CRM integration.",
  //     techStack: ["Laravel", "React", "MySQL", "AWS", "Twilio API"],
  //     outcomes: ["40% increase in conversion rates", "60% reduction in manual effort", "Real-time lead scoring"],
  //     image: "/IMG_6904.jpg",
  //     github: "#",
  //     live: "#",
  //     description: "A comprehensive lead management solution that automates the entire sales pipeline from lead capture to conversion.",
  //     tags: ["Web App", "Full-Stack", "CRM"]
  //   },
  //   {
  //     title: "API Optimization Project",
  //     date: "2023",
  //     problem: "Existing REST APIs were slow and expensive, causing poor user experience and high cloud costs.",
  //     role: "Backend Developer",
  //     solution: "Modernized infrastructure with caching, indexing, and rate-limiting to improve performance and reduce costs.",
  //     techStack: ["Laravel", "Redis", "AWS", "MySQL", "Docker"],
  //     outcomes: ["35% faster response times", "30% reduction in cloud costs", "Improved scalability"],
  //     image: "/IMG_6911.jpg",
  //     github: "#",
  //     live: "#",
  //     description: "Performance optimization project that dramatically improved API response times and reduced infrastructure costs.",
  //     tags: ["Backend", "Performance", "DevOps"]
  //   },
  //   {
  //     title: "API Optimization Project",
  //     date: "2023",
  //     problem: "Existing REST APIs were slow and expensive, causing poor user experience and high cloud costs.",
  //     role: "Backend Developer",
  //     solution: "Modernized infrastructure with caching, indexing, and rate-limiting to improve performance and reduce costs.",
  //     techStack: ["Laravel", "Redis", "AWS", "MySQL", "Docker"],
  //     outcomes: ["35% faster response times", "30% reduction in cloud costs", "Improved scalability"],
  //     image: "/IMG_6911.jpg",
  //     github: "#",
  //     live: "#",
  //     description: "Performance optimization project that dramatically improved API response times and reduced infrastructure costs.",
  //     tags: ["Backend", "Performance", "DevOps"]
  //   },
  //   {
  //     title: "API Optimization Project",
  //     date: "2023",
  //     problem: "Existing REST APIs were slow and expensive, causing poor user experience and high cloud costs.",
  //     role: "Backend Developer",
  //     solution: "Modernized infrastructure with caching, indexing, and rate-limiting to improve performance and reduce costs.",
  //     techStack: ["Laravel", "Redis", "AWS", "MySQL", "Docker"],
  //     outcomes: ["35% faster response times", "30% reduction in cloud costs", "Improved scalability"],
  //     image: "/IMG_6911.jpg",
  //     github: "#",
  //     live: "#",
  //     description: "Performance optimization project that dramatically improved API response times and reduced infrastructure costs.",
  //     tags: ["Backend", "Performance", "DevOps"]
  //   },
  //   {
  //     title: "Automation Platform",
  //     date: "2022-2023",
  //     problem: "Multiple communication channels (email, SMS, messaging) were managed separately, creating inefficiencies.",
  //     role: "Full-Stack Developer",
  //     solution: "Designed and launched unified automation flows integrating multiple third-party APIs for seamless communication.",
  //     techStack: ["Laravel", "React", "Node.js", "AWS", "Multiple APIs"],
  //     outcomes: ["Boosted re-engagement rates", "Increased conversion", "Clear ROI delivered"],
  //     image: "/IMG_6912.JPG",
  //     github: "#",
  //     live: "#",
  //     description: "Unified communication platform that streamlines multi-channel messaging and automation workflows.",
  //     tags: ["Automation", "Integration", "Communication"]
  //   },
  //   {
  //     title: "Automation Platform",
  //     date: "2022-2023",
  //     problem: "Multiple communication channels (email, SMS, messaging) were managed separately, creating inefficiencies.",
  //     role: "Full-Stack Developer",
  //     solution: "Designed and launched unified automation flows integrating multiple third-party APIs for seamless communication.",
  //     techStack: ["Laravel", "React", "Node.js", "AWS", "Multiple APIs"],
  //     outcomes: ["Boosted re-engagement rates", "Increased conversion", "Clear ROI delivered"],
  //     image: "/IMG_6912.JPG",
  //     github: "#",
  //     live: "#",
  //     description: "Unified communication platform that streamlines multi-channel messaging and automation workflows.",
  //     tags: ["Automation", "Integration", "Communication"]
  //   }
  // ];

  // Get the lead project and other projects
  const projects = [
    {
      title: "ChatBuddy",
      id: "chatbuddy",
      date: "2023–Present",
      problem:
        "Businesses struggled with fragmented communication—manual SMS, email, and voice follow-ups leading to inconsistent engagement.",
      role: "Project Lead & Backend Engineer",
      solution:
        "Architected a multi-tenant Laravel SaaS platform that automates customer communication across SMS, WhatsApp, email, and calls. Integrated Twilio, OpenAI, and Pinecone APIs for AI-driven message sequencing and CRM synchronization.",
      techStack: [
        "Laravel",
        "PHP 8",
        "Angular",
        "MySQL",
        "AWS (EC2, S3, Lambda)",
        "Twilio",
        "Mailgun",
        "Stripe",
        "OpenAI",
        "Pinecone",
      ],
      outcomes: [
        "Automated over 1M messages daily across multi-channel pipelines",
        "40% increase in engagement and follow-up success",
        "Reduced manual communication costs by 80%",
      ],
      image: "/chatbuddy.svg",
      github: "#",
      live: "",
      description:
        "A multi-tenant SaaS platform that automates customer engagement across SMS, WhatsApp, email, and calls. Features AI-driven sequencing, analytics, and real-time CRM syncs for end-to-end communication automation.",
      tags: ["SaaS", "AI", "Campaigns"],
    },
    {
      title: "CIAP Analyzer",
      id: "ciap",
      date: "2023",
      problem:
        "Real estate teams lacked structured follow-ups and lost potential leads due to manual workflows.",
      role: "Lead Developer",
      solution:
        "Built an AI-driven lead management system in Laravel integrating Follow Up Boss CRM and Twilio. Automated lead scoring, dynamic A/B message templates, and asynchronous queues using Redis and Supervisor for real-time tracking.",
      techStack: [
        "Laravel",
        "PHP 8",
        "Angular",
        "MySQL",
        "Redis",
        "Supervisor",
        "Twilio API",
        "OpenAI",
        "Follow Up Boss API",
      ],
      outcomes: [
        "Increased engagement by 35%",
        "Improved lead conversion rate by 2.3%",
        "Reduced manual CRM updates by 60%",
      ],
      image: "/ciap.svg",
      github: "#",
      live: "#",
      description:
        "An AI-powered CRM automation engine that qualifies lead from real time chat. Send personalized lead follow-ups, uses asynchronous queues for real-time tracking, scoring, and automated message optimization.",
      tags: ["CRM", "AI", "Automation", "Real Estate"],
    },
    {
      title: "AI Assistant",
      id: "assistant",
      date: "2023",
      problem:
        "Companies struggled to quickly access internal knowledge and respond to employee queries.",
      role: "Lead Developer",
      solution:
        "Built an AI-powered assistant with Laravel and React that indexes internal PDFs and documents. Integrated Slack, Teams, and Twilio APIs for natural language query handling and AI responses using OpenAI.",
      techStack: [
        "Laravel",
        "PHP 8",
        "React",
        "MySQL",
        "OpenAI",
        "Twilio",
        "S3",
        "Pinecone",
      ],
      outcomes: [
        "Reduced internal query resolution time by 50%",
        "Enabled automated document retrieval and AI summaries",
        "Improved internal support efficiency",
      ],
      image: "/assistant.svg",
      github: "#",
      live: "#",
      description:
        "An AI-based knowledge assistant that indexes company documents and responds to employee queries in real time. Integrated across Slack, Teams, and Twilio to streamline internal communication and support.",
      tags: ["AI Chatbot", "Integrations"],
    },
    {
      title: "Missed Calls Manager",
      id: "call_manager",
      date: "2023",
      problem:
        "Businesses often lost leads when missed calls went unhandled or were followed up manually.",
      role: "Lead Developer",
      solution:
        "Developed a Laravel system that automatically responds to missed calls via Twilio SMS and initiates AI-led conversations. Integrated queue processing and webhook handling for seamless 24/7 call automation.",
      techStack: [
        "Laravel",
        "PHP 8",
        "React",
        "MySQL",
        "Twilio API",
        "OpenAI",
        "Redis",
        "S3",
        "Tailwind",
      ],
      outcomes: [
        "Reduced lead drop-off by 70%",
        "Improved first-response time by 90%",
      ],
      image: "/call_manager.svg",
      github: "#",
      live: "#",
      description:
        "A Twilio-integrated missed call handler that triggers automated SMS responses and AI-led conversations. Ensures 24/7 lead recovery with queue-driven scalability and event-based automation.",
      tags: ["Automation", "Voice", "SMS", "Twilio"],
    },
    {
      title: "ApnaWifi",
      id: "apnawifi",
      date: "2022–Present",
      problem:
        "Businesses needed an automated way to capture customer data and engage visitors through WiFi access points.",
      role: "Full-Stack Developer",
      solution:
        "Built a multi-tenant WiFi engagement platform using Laravel and Angular integrated with Omada SDN and Twilio for OTP verification. Implemented marketing automation flows and analytics dashboards.",
      techStack: [
        "Laravel",
        "PHP 8",
        "Angular",
        "MySQL",
        "Omada SDN",
        "Twilio",
        "Webhook",
      ],
      outcomes: [
        "10K+ daily authentications",
        "40% boost in campaign engagement",
        "Enabled behavioral analytics with AI insights",
      ],
      image: "/apnawifi.svg",
      github: "#",
      live: "",
      description:
        "A WiFi marketing and data automation platform that captures customer data at login and drives engagement through targeted campaigns, real-time analytics, and automated remarketing.",
      tags: ["SaaS", "WiFi Auth", "Marketing"],
    },

    {
      title: "Fleet Management System",
      id: "hrpp",
      date: "2022",
      problem:
        "Vehicle agencies needed efficient driver and vehicle management with automated reporting.",
      role: "Backend Developer",
      solution:
        "Developed a full-stack fleet management system using Laravel and Angular. Integrated Jotform API for driver submissions, scheduled email/SMS reminders, and automated weekly reports using cron jobs and queues.",
      techStack: [
        "Laravel",
        "PHP 8",
        "Angular",
        "MySQL",
        "Jotform API",
        "Sinch SMS",
        "Azure Pipeline",
      ],
      outcomes: [
        "Tracked 50+ vehicles and 80+ drivers",
        "Automated report generation and notifications",
        "Improved operational visibility and scheduling accuracy",
      ],
      image: "/hrpp.svg",
      github: "#",
      live: "",
      description:
        "A fleet management system with automated driver tracking, reports, and alerts. Demonstrates scalable queue handling, scheduling, and event-driven backend design in Laravel.",
      tags: ["ERP", "Full-Stack", "Reporting"],
    },
  ];

  const leadProject = projects[heroProject];
  const otherProjects = projects;
  // const otherProjects = projects.filter((_, index) => index !== heroProject);

  return (
    <section
      ref={containerRef}
      id="projects"
      className="relative bg-background text-foreground py-10"
    >
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground">
            Click on any project to explore more details
          </p>
        </div>

        {/* Other Projects Carousel */}
        <div className="relative">
          {/* <h3 className="text-2xl font-bold text-white mb-6">Other Projects</h3> */}

          {/* Navigation Button - Half in, half out positioning */}
          <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 z-10">
            <button
              onClick={() => scrollCarousel("right")}
              className="w-12 h-12 bg-primary hover:bg-accent-foreground text-primary-foreground rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110"
            >
              <ChevronRightIcon size={24} />
            </button>
          </div>

          <div
            className="projects-carousel overflow-x-auto scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="flex gap-6 pb-6">
              {otherProjects.map((project, index) => {
                const originalIndex = projects.findIndex(
                  (p) => p.title === project.title
                );
                return (
                  <motion.div
                    key={`other-${originalIndex}`}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex-shrink-0 w-80 sm:w-96 cursor-pointer group"
                    onClick={() => selectProject(originalIndex)}
                  >
                    <div className="relative h-80 bg-card rounded-lg overflow-hidden group-hover:scale-105 transition-transform duration-300 shadow-lg border border-border"
                    id={project.id}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="mx-auto w-[60%] md:w-75 md:h-1/2 object-cover"
                      />
                      <div className="p-4 h-1/2 flex flex-col justify-between">
                        <div>
                          <h3 className="text-lg font-bold text-card-foreground mb-2 line-clamp-1 overflow-hidden">
                            {project.title}
                          </h3>
                          <p className="text-sm text-muted-foreground line-clamp-3 overflow-hidden">
                            {project.description}
                          </p>
                        </div>
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, tagIdx) => (
                              <span
                                key={tagIdx}
                                className="px-2 py-1 bg-primary text-primary-foreground text-xs rounded"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          {/* <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                             {project.date}
                           </span> */}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Lead Project - Horizontal Layout */}
        <div className="mb-12">
          <motion.div
            key={`lead-${heroProject}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-xl overflow-hidden shadow-2xl border border-border"
          >
            <div className="flex flex-col lg:flex-row items-center">
              {/* Project Image */}
              <div className="lg:w-1/2 ">
                <img
                  src={leadProject.image}
                  alt={leadProject.title}
                  className="mx-auto w-[60%] md:w-full md:h-70 object-cover"
                />
              </div>

              {/* Project Details */}
              <div className="lg:w-2/3 p-6 lg:p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-3xl font-bold text-card-foreground">
                    {leadProject.title}
                  </h3>
                  {/* <span className="px-4 py-2 bg-primary text-primary-foreground text-sm rounded-full font-medium">
                    {leadProject.date}
                  </span> */}
                </div>

                <p className="text-muted-foreground text-md md:text-lg mb-6 leading-relaxed">
                  {leadProject.description}
                </p>

                {/* Horizontal Details Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
                      The Problem
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {leadProject.problem}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
                      My Role & Solution
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      <strong className="text-primary">
                        {leadProject.role}
                      </strong>
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {leadProject.solution}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {leadProject.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
                      Key Outcomes
                    </h4>
                    <ul className="space-y-2">
                      {leadProject.outcomes.map((outcome, outcomeIndex) => (
                        <li
                          key={outcomeIndex}
                          className="text-sm text-muted-foreground flex items-start"
                        >
                          <span className="text-primary mr-2 mt-1">•</span>
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action Buttons */}
                {/* <div className="flex gap-4">
                  <button className="flex items-center px-6 py-3 bg-primary hover:bg-accent-foreground text-primary-foreground rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                    <PlayIcon size={20} className="mr-2" />
                    View Project
                  </button>
                  <button className="flex items-center px-6 py-3 bg-muted hover:bg-muted-foreground text-muted-foreground hover:text-muted rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                    <InfoIcon size={20} className="mr-2" />
                    More Info
                  </button>
                </div> */}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
