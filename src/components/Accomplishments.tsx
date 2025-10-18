import { TrendingUpIcon, CodeIcon, UsersIcon, ZapIcon, AwardIcon, TargetIcon, ClockIcon, DollarSignIcon } from "lucide-react";

export function Accomplishments() {
  const achievements = [
    {
      icon: TrendingUpIcon,
      title: "Project Success",
      metric: "40%",
      metricLabel: "Conversion Rate Increase",
      description: "Lead-management pipeline with real-time scoring",
      color: "bg-green-100 text-green-600",
      bgGradient: "from-green-50 to-green-100",
      borderColor: "border-green-200"
    },
    {
      icon: CodeIcon,
      title: "Technical Mastery",
      metric: "35%",
      metricLabel: "Faster Response Times",
      description: "AWS infrastructure optimization & API caching",
      color: "bg-blue-100 text-blue-600",
      bgGradient: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200"
    },
    {
      icon: ZapIcon,
      title: "Business Value",
      metric: "Clear",
      metricLabel: "ROI Delivered",
      description: "Unified automation flows & API integrations",
      color: "bg-purple-100 text-purple-600",
      bgGradient: "from-purple-50 to-purple-100",
      borderColor: "border-purple-200"
    },
    {
      icon: UsersIcon,
      title: "Leadership",
      metric: "90+",
      metricLabel: "Students Mentored",
      description: "IEEE WIE Chairperson & cross-functional projects",
      color: "bg-orange-100 text-orange-600",
      bgGradient: "from-orange-50 to-orange-100",
      borderColor: "border-orange-200"
    },
  ];

  const stats = [
    { label: "Projects Completed", value: "20+", icon: TargetIcon },
    { label: "Years Experience", value: "3+", icon: ClockIcon },
    { label: "Cost Savings", value: "30%", icon: DollarSignIcon },
    { label: "Team Members Led", value: "15+", icon: UsersIcon },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-neutral-light to-white relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-primary opacity-3 rounded-full transform -translate-x-1/3 -translate-y-1/3 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal-primary opacity-4 rounded-full transform translate-x-1/3 translate-y-1/3 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gold-primary opacity-2 rounded-full transform -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <span className="text-purple-primary font-semibold text-lg">Chapter 2</span>
          <h2 className="text-5xl md:text-6xl font-bold text-charcoal mb-8">
            Accomplishments & Skills
          </h2>
          <p className="text-xl text-charcoal-light max-w-4xl mx-auto leading-relaxed">
            Real results, measurable impact, and the skills that make it all possible.
          </p>
        </div>

        {/* Visual Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-neutral-base group">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-primary/20 to-purple-primary/10 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <stat.icon className="text-purple-primary" size={28} />
                </div>
                <div className="text-4xl font-bold text-charcoal mb-3 group-hover:text-purple-primary transition-colors duration-300">{stat.value}</div>
                <div className="text-sm text-charcoal-light font-medium group-hover:text-charcoal transition-colors duration-300">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}