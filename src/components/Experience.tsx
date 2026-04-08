import { motion } from "framer-motion";
import { experiences } from "../data/portfolio";
import { ClipboardList, MapPin, Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block relative">
            <h2 className="text-3xl md:text-4xl font-bold text-teal-400 tracking-widest uppercase mb-2">
              Work Experience
            </h2>
            <div className="h-0.5 w-full bg-teal-400/30 mt-2"></div>
          </div>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-slate-700 hidden md:block"></div>

          <div className="space-y-12 md:space-y-24">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company + exp.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center justify-between md:justify-normal w-full overflow-hidden ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content Card */}
                <div className="w-full md:w-[45%] group">
                  <div className="p-8 bg-white rounded-xl shadow-xl transition-all duration-300 relative">
                    {/* Tooltip triangle */}
                    <div
                      className={`hidden md:block absolute top-10 w-4 h-4 bg-white rotate-45 ${
                        index % 2 === 0
                          ? "-left-2"
                          : "-right-2"
                      }`}
                    ></div>
                    
                    <div className="flex flex-col gap-1 mb-4">
                      <h4 className="text-xl font-bold text-teal-600">
                        {exp.title}
                      </h4>
                      <div className="flex items-center gap-2 text-slate-500 font-semibold">
                        <Briefcase className="w-4 h-4" />
                        {exp.company} {exp.location && `| ${exp.location}`}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <ul className="space-y-2">
                        {exp.description.map((desc, i) => (
                          <li key={i} className="text-slate-600 text-sm leading-relaxed flex gap-2">
                            <span className="text-teal-500 font-bold">•</span>
                            {desc}
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 bg-slate-100 border border-slate-200 rounded text-slate-600 text-[10px] font-medium uppercase tracking-wider"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline Axis Elements */}
                <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center justify-center">
                  <div className="w-12 h-12 bg-teal-500 rounded-full border-4 border-slate-900 flex items-center justify-center shadow-lg z-20">
                    <ClipboardList className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Year Label */}
                  <div className={`absolute whitespace-nowrap text-slate-400 font-medium text-sm ${
                    index % 2 === 0 ? "right-16" : "left-16"
                  }`}>
                    {exp.startDate}
                  </div>
                </div>

                {/* Mobile Icon/Year (shown only on mobile) */}
                <div className="md:hidden flex flex-col items-center gap-2 mr-4 min-w-[60px]">
                  <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center shadow-lg">
                    <ClipboardList className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-slate-400 text-xs font-medium">
                    {exp.startDate}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
