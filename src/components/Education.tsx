import { motion } from "framer-motion";
import { education } from "../data/portfolio";
import { GraduationCap, MapPin } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-24 bg-slate-950 relative overflow-hidden">
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
              Education Details
            </h2>
            <div className="h-0.5 w-full bg-teal-400/30 mt-2"></div>
          </div>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-slate-700 hidden md:block"></div>

          <div className="space-y-12 md:space-y-24">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
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
                    
                    <h4 className="text-xl font-bold text-teal-600 mb-2">
                      {edu.degree}
                    </h4>
                    <div className="space-y-3">
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {edu.institution}, {edu.location}
                      </p>
                      {edu.description && (
                        <p className="text-slate-800 font-semibold text-sm">
                          {edu.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Timeline Axis Elements */}
                <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center justify-center">
                  <div className="w-12 h-12 bg-teal-500 rounded-full border-4 border-slate-900 flex items-center justify-center shadow-lg z-20">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Year Label */}
                  <div className={`absolute whitespace-nowrap text-slate-400 font-medium text-sm ${
                    index % 2 === 0 ? "right-16" : "left-16"
                  }`}>
                    {edu.startDate}-{edu.endDate}
                  </div>
                </div>

                {/* Mobile Icon/Year (shown only on mobile) */}
                <div className="md:hidden flex flex-col items-center gap-2 mr-4 min-w-[60px]">
                  <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center shadow-lg">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-slate-400 text-xs font-medium">
                    {edu.startDate}-{edu.endDate}
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
