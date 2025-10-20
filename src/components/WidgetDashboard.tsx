import { useState, useEffect } from "react";

export function WidgetDashboard() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "2-digit",
    });
  };

  const getGreeting = (date: Date) => {
    const hour = date.getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <section className="w-full bg-background py-8 px-4 min-h-screen">
      <div className="w-full max-w-3xl mx-auto">
        {/* Widget Grid */}
        <div className="space-y-2">
          {/* First Row - Profile, Activity, GitHub */}
          <div className="xl:px-8 max-w-4xl md:mx-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* GitHub Widget */}
              <a
                target="_blank"
                href="https://github.com/areejrazzaq"
                className="md:col-span-3 bg-pink rounded-3xl p-3 shadow-xl widget-hover cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  {/* GitHub Icon */}
                  <div className="w-12 h-12 bg-pink rounded-full flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-card-foreground"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>

                  {/* External Link Arrow */}
                  <div className="w-8 h-8 bg-card-foreground/20 rounded-lg flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 text-card-foreground"
                    >
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                {/* Text Content */}
                <div>
                  <p className="text-card-foreground text-lg font-bold mb-1">
                    GitHub
                  </p>
                  <small className="text-card-foreground text-sm">
                    @areejrazzaq
                  </small>
                </div>
              </a>

              {/* Activity Widget */}
              <div className="md:col-span-6  bg-card rounded-3xl p-6 shadow-xl widget-hover border border-border">
                {/* Date in top-left */}
                <div className="mb-6">
                  <p className="text-card-foreground text-sm font-medium">
                    {formatDate(currentTime)}
                  </p>
                </div>

                {/* Main content with rings and text */}
                <div className="flex items-center space-x-6">
                  {/* Activity Rings */}
                  <div className="relative w-20 h-20">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      {/* Primary outermost ring - almost full */}
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="#0abf53"
                        strokeWidth="8"
                        strokeDasharray="283"
                        strokeDashoffset="28"
                        strokeLinecap="round"
                        transform="rotate(-90 50 50)"
                      />
                      {/* Accent middle ring - less filled */}
                      <circle
                        cx="50"
                        cy="50"
                        r="37"
                        fill="none"
                        stroke="#d7f5e3"
                        strokeWidth="8"
                        strokeDasharray="232"
                        strokeDashoffset="58"
                        strokeLinecap="round"
                        transform="rotate(-90 50 50)"
                      />
                      {/* Primary innermost ring - least filled */}
                      <circle
                        cx="50"
                        cy="50"
                        r="29"
                        fill="none"
                        stroke="#0abf53"
                        strokeWidth="8"
                        strokeDasharray="182"
                        strokeDashoffset="91"
                        strokeLinecap="round"
                        transform="rotate(-90 50 50)"
                      />
                      {/* Inner circle with primary dot */}
                      <circle cx="50" cy="50" r="21" fill="#00112c" />
                      <circle cx="50" cy="29" r="3" fill="#0abf53" />
                    </svg>
                  </div>

                  {/* Text content */}
                  <div className="flex-1">
                    <p className="text-card-foreground text-lg font-bold mb-1">
                      {getGreeting(currentTime)}
                    </p>
                    <p className="text-card-foreground text-lg font-bold">
                      {formatTime(currentTime)}
                    </p>
                  </div>
                </div>
              </div>
              {/* Design Code Future Widget */}
              <div className="md:col-span-3 bg-card rounded-3xl p-6 shadow-xl widget-hover border border-border">
                <div className="flex flex-col justify-center items-center h-full py-10">
                  <p className="text-card-foreground text-xl font-bold">
                    Design.
                  </p>
                  <p className="text-primary text-xl font-bold">Code.</p>
                  <p className="text-card-foreground text-xl font-bold">
                    Future.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Second Row - Design Code Future, Stats, Photos */}
          <div className="xl:px-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-10 gap-6">
              {/* Combined widget - 35% width */}
              <div className="md:col-span-4">
                {/* Profile Widget */}
                <div className=" bg-card rounded-3xl p-7 shadow-xl widget-hover border border-border">
                  {/* <div className="flex items-center justify-center space-x-4"> */}
                  {/* <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-2xl font-bold">T</span>
                  </div> */}
                  <div className="flex-1 justify-center align-middle items-center">
                    <h3 className="text-lg font-bold text-card-foreground mb-1">
                      Areej Razzaq
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Full Stack Developer
                    </p>
                    <div className="flex items-center mt-2">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                      <small className="text-xs text-muted-foreground">
                        Available for work
                      </small>
                    </div>
                  </div>
                  {/* </div> */}
                </div>
                {/* Stats Widget */}
                <div className="mt-3 bg-card rounded-3xl p-6 shadow-xl widget-hover border border-border">
                  <div className="">
                    <div className="text-center">
                      <p className="text-card-foreground text-3xl font-bold">
                        3+
                      </p>
                      <p className="text-muted-foreground text-sm">
                        Years Exp.
                      </p>
                    </div>
                    <div className="mt-3 text-center">
                      <p className="text-card-foreground text-3xl font-bold">
                        15+
                      </p>
                      <p className="text-muted-foreground text-sm">Projects</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Photos Widget - 65% width */}
              <div className="md:col-span-6 bg-card rounded-3xl p-4 shadow-xl widget-hover border border-border">
                {/* Header with Apple Photos icon */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="20"
                      height="20"
                      viewBox="0 0 48 48"
                      fill="none"
                      className="w-full h-full"
                    >
                      <path
                        fill="#FFB74D"
                        d="M24.449 22.978c-.157-.18-.317-.357-.449-.55-.132.193-.292.371-.449.55C23.7 22.988 23.848 23 24 23S24.3 22.988 24.449 22.978zM23.293 14.808c.27.27.5.563.707.866.208-.303.438-.596.707-.866l4.949-4.95c.102-.101.218-.172.322-.264C29.77 6.471 27.177 4 24 4s-5.77 2.471-5.979 5.594c.105.092.222.163.323.264L23.293 14.808z"
                      ></path>
                      <path
                        fill="#64B5F6"
                        d="M23.551 25.021c.157.181.317.357.449.551.132-.192.292-.37.449-.551C24.3 25.012 24.152 25 24 25S23.7 25.012 23.551 25.021zM24.707 33.191c-.27-.27-.5-.562-.707-.865-.208.305-.438.597-.707.865l-4.95 4.951c-.101.1-.217.172-.323.264C18.23 41.529 20.823 44 24 44s5.77-2.471 5.979-5.594c-.104-.092-.222-.164-.322-.264L24.707 33.191z"
                      ></path>
                      <path
                        fill="#F48FB1"
                        d="M14.808 24.707c.27-.27.562-.5.866-.707-.303-.208-.596-.438-.866-.707l-4.95-4.95c-.101-.101-.172-.217-.264-.323C6.471 18.23 4 20.823 4 24s2.471 5.77 5.594 5.979c.092-.104.163-.222.264-.322L14.808 24.707zM22.978 23.551c-.18.157-.357.317-.55.449.193.132.371.292.55.449C22.988 24.3 23 24.152 23 24S22.988 23.7 22.978 23.551z"
                      ></path>
                      <path
                        fill="#8BC34A"
                        d="M25 24c0 .152.012.3.021.449.181-.157.357-.317.551-.449-.192-.132-.37-.292-.551-.449C25.012 23.7 25 23.848 25 24zM44 24c0-3.177-2.471-5.77-5.594-5.979-.092.105-.164.222-.264.323l-4.951 4.95c-.27.27-.563.5-.865.707.305.208.597.438.865.707l4.951 4.949c.1.102.172.218.264.323C41.529 29.77 44 27.177 44 24z"
                      ></path>
                      <path
                        fill="#C0CA33"
                        d="M30 17c0 .378-.039.747-.105 1.106C30.253 18.039 30.621 18 31 18h7c.137 0 .271.012.406.021 2.05-2.357 1.979-5.92-.264-8.163-2.244-2.242-5.807-2.314-8.164-.264C29.988 9.729 30 9.863 30 10V17zM25.021 23.551c.018-.223.045-.442.084-.657-.215.041-.435.067-.656.084.09.103.16.217.258.315S24.919 23.461 25.021 23.551z"
                      ></path>
                      <path
                        fill="#F9A825"
                        d="M24.707,14.808c-0.27,0.27-0.5,0.563-0.707,0.866c1.389,2.033,1.389,4.722,0,6.754c0.132,0.193,0.292,0.371,0.449,0.55c0.223-0.017,0.441-0.043,0.656-0.084c0.453-2.425,2.362-4.335,4.787-4.787C29.961,17.747,30,17.378,30,17v-7c0-0.137-0.012-0.271-0.021-0.406c-0.104,0.092-0.222,0.163-0.322,0.264L24.707,14.808z"
                      ></path>
                      <path
                        fill="#689F38"
                        d="M31,18c-0.379,0-0.747,0.039-1.105,0.106c-0.453,2.425-2.362,4.335-4.787,4.787c-0.041,0.215-0.067,0.435-0.084,0.657c0.18,0.157,0.356,0.317,0.55,0.449c2.032-1.389,4.723-1.389,6.754,0c0.304-0.208,0.597-0.438,0.866-0.707l4.949-4.95c0.101-0.101,0.172-0.217,0.265-0.323C38.271,18.012,38.137,18,38,18H31z"
                      ></path>
                      <path
                        fill="#827717"
                        d="M29.895,18.106c-2.426,0.452-4.336,2.362-4.787,4.787C27.531,22.441,29.441,20.532,29.895,18.106z"
                      ></path>
                      <path
                        fill="#BA68C8"
                        d="M18 31c0-.379.039-.747.106-1.105C17.747 29.961 17.378 30 17 30h-7c-.137 0-.271-.012-.406-.021-2.05 2.357-1.979 5.922.264 8.164 2.242 2.241 5.805 2.313 8.163.264C18.012 38.271 18 38.137 18 38V31zM22.978 24.449c-.017.223-.043.441-.084.656.215-.039.435-.066.657-.084-.09-.103-.16-.217-.258-.314S23.081 24.539 22.978 24.449z"
                      ></path>
                      <path
                        fill="#5C6BC0"
                        d="M23.293,33.191c0.27-0.27,0.5-0.562,0.707-0.865c-1.389-2.031-1.389-4.721,0-6.754c-0.132-0.192-0.292-0.37-0.449-0.551c-0.223,0.018-0.442,0.045-0.657,0.084c-0.452,2.426-2.362,4.336-4.787,4.787C18.039,30.253,18,30.621,18,31v7c0,0.137,0.012,0.271,0.021,0.406c0.105-0.092,0.222-0.164,0.323-0.264L23.293,33.191z"
                      ></path>
                      <path
                        fill="#D81B60"
                        d="M17,30c0.378,0,0.747-0.039,1.106-0.105c0.452-2.426,2.362-4.336,4.787-4.787c0.041-0.215,0.067-0.436,0.084-0.657c-0.18-0.157-0.357-0.317-0.55-0.449c-2.032,1.39-4.721,1.39-6.754,0c-0.304,0.208-0.596,0.438-0.866,0.707l-4.95,4.949c-0.101,0.102-0.172,0.218-0.264,0.323C9.729,29.988,9.863,30,10,30H17z"
                      ></path>
                      <path
                        fill="#880E4F"
                        d="M18.106,29.895c2.425-0.453,4.335-2.362,4.787-4.787C20.468,25.559,18.559,27.469,18.106,29.895z"
                      ></path>
                      <path
                        fill="#FF5252"
                        d="M23.551 22.978c-.223-.017-.442-.043-.657-.084.041.215.067.435.084.657.103-.09.217-.16.315-.258S23.461 23.081 23.551 22.978zM17 18c.378 0 .747.039 1.106.106C18.039 17.747 18 17.378 18 17v-7c0-.137.012-.271.021-.406-2.357-2.05-5.92-1.979-8.163.264-2.243 2.243-2.314 5.805-.264 8.163C9.729 18.012 9.863 18 10 18H17z"
                      ></path>
                      <path
                        fill="#EF6C00"
                        d="M18,17c0,0.378,0.039,0.747,0.106,1.106c2.425,0.452,4.335,2.362,4.787,4.787c0.215,0.041,0.435,0.067,0.657,0.084c0.157-0.18,0.317-0.357,0.449-0.55c-1.389-2.032-1.389-4.721,0-6.754c-0.208-0.303-0.438-0.596-0.707-0.866l-4.95-4.95c-0.101-0.101-0.217-0.172-0.323-0.264C18.012,9.729,18,9.863,18,10V17z"
                      ></path>
                      <path
                        fill="#F44336"
                        d="M14.808,23.293c0.27,0.27,0.563,0.5,0.866,0.707c2.032-1.389,4.721-1.389,6.754,0c0.193-0.132,0.371-0.292,0.55-0.449c-0.017-0.223-0.043-0.442-0.084-0.657c-2.425-0.452-4.335-2.362-4.787-4.787C17.747,18.039,17.378,18,17,18h-7c-0.137,0-0.271,0.012-0.406,0.021c0.092,0.105,0.163,0.222,0.264,0.323L14.808,23.293z"
                      ></path>
                      <path
                        fill="#DD2C00"
                        d="M18.106,18.106c0.452,2.425,2.362,4.335,4.787,4.787C22.441,20.468,20.532,18.559,18.106,18.106z"
                      ></path>
                      <path
                        fill="#E65100"
                        d="M24,15.673c-1.389,2.033-1.389,4.722,0,6.754C25.389,20.395,25.389,17.706,24,15.673z"
                      ></path>
                      <path
                        fill="#B71C1C"
                        d="M15.673,24c2.033,1.389,4.722,1.389,6.754,0C20.395,22.611,17.706,22.611,15.673,24z"
                      ></path>
                      <path
                        fill="#00ACC1"
                        d="M31 30c-.379 0-.747-.039-1.105-.105C29.961 30.253 30 30.621 30 31v7c0 .137-.012.271-.021.406 2.357 2.05 5.922 1.979 8.164-.264 2.241-2.244 2.313-5.807.264-8.164C38.271 29.988 38.137 30 38 30H31zM24.449 25.021c.223.018.441.045.656.084-.039-.215-.066-.435-.084-.656-.103.09-.217.16-.314.258S24.539 24.919 24.449 25.021z"
                      ></path>
                      <path
                        fill="#0277BD"
                        d="M30,31c0-0.379-0.039-0.747-0.105-1.105c-2.426-0.453-4.336-2.362-4.787-4.787c-0.215-0.041-0.436-0.067-0.657-0.084c-0.157,0.18-0.317,0.356-0.449,0.55c1.39,2.032,1.39,4.723,0,6.754c0.208,0.305,0.438,0.597,0.707,0.866l4.949,4.949c0.102,0.101,0.218,0.172,0.323,0.265C29.988,38.271,30,38.137,30,38V31z"
                      ></path>
                      <path
                        fill="#00796B"
                        d="M33.191,24.707c-0.27-0.27-0.562-0.5-0.865-0.707c-2.032,1.389-4.721,1.389-6.754,0c-0.192,0.132-0.37,0.292-0.551,0.449c0.018,0.223,0.045,0.441,0.084,0.656c2.426,0.453,4.336,2.362,4.787,4.787C30.253,29.961,30.621,30,31,30h7c0.137,0,0.271-0.012,0.406-0.021c-0.092-0.104-0.164-0.222-0.264-0.322L33.191,24.707z"
                      ></path>
                      <path
                        fill="#006064"
                        d="M29.895,29.895c-0.453-2.426-2.362-4.336-4.787-4.787C25.559,27.531,27.469,29.441,29.895,29.895z"
                      ></path>
                      <path
                        fill="#1B5E20"
                        d="M25.572,24c2.033,1.389,4.722,1.389,6.754,0C30.295,22.611,27.605,22.611,25.572,24z"
                      ></path>
                      <path
                        fill="#0D47A1"
                        d="M24,32.326c1.389-2.031,1.389-4.721,0-6.754C22.611,27.605,22.611,30.295,24,32.326z"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-card-foreground font-bold text-lg">
                    Photos
                  </span>
                </div>

                {/* Main image area */}
                <div className="relative">
                  <div className="w-50 h-48 rounded-2xl overflow-hidden relative">
                    <img 
                      src="/Headshots_2.png" 
                      alt="Portfolio photo" 
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Navigation dots */}
                  <div className="flex justify-center mt-4 space-x-2">
                    {[1, 2, 3, 4, 5].map((dot) => (
                      <div
                        key={dot}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          dot === 2 ? "bg-primary" : "bg-muted"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Third Row - Social Media, Notes */}
          <div className="xl:px-8 max-w-4xl md:mx-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Social Media Widget */}
              <div className="md:col-span-1 bg-card rounded-3xl p-4 shadow-xl widget-hover border border-border">
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="grid grid-cols-2 gap-3">
                    {/* Email */}
                    <a
                      href="mailto:areejrazzaq00@gmail.com"
                      className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 shadow-lg"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 text-white"
                      >
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                    </a>

                    {/* LinkedIn */}
                    <a
                      href="https://linkedin.com/in/areej-razzaq"
                      className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 shadow-lg"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 text-white"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>

                    {/* WhatsApp */}
                    <a
                      href="https://wa.me/923414787831"
                      className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 shadow-lg"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 text-white"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                      </svg>
                    </a>

                    {/* GitHub */}
                    <a
                      href="https://github.com/areejrazzaq"
                      className="w-12 h-12 bg-gray-800 rounded-2xl flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 shadow-lg"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 text-white"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Notes Widget */}
              <div className="grid-cols-1 md:col-span-2 bg-card rounded-3xl shadow-xl widget-hover  border border-border overflow-hidden">
                {/* Yellow Header */}
                <div className="bg-yellow px-4 py-3 flex items-center space-x-3">
                  <div className="w-6 h-6 text-primary-foreground">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M10 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2h-8l-2-2z" />
                    </svg>
                  </div>
                  <span className="text-primary-foreground font-semibold text-lg">
                    Notes
                  </span>
                </div>

                {/* Content Area */}
                <div className="bg-card px-6 py-8">
                  <small className="text-card-foreground text-center leading-relaxed">
                    "East, West, South or North makes little difference. No
                    matter what your destination, just be sure to make every
                    journey a journey within"
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
