import { motion } from "framer-motion";
import { projects, personalInfo } from "../data/portfolio";
import { ExternalLink, Github, Linkedin, ChevronDown } from "lucide-react";
import { useState } from "react";

export function Projects() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 font-semibold tracking-wider uppercase text-sm">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div
                className={`p-6 bg-white rounded-2xl border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col ${
                  expandedProject === index ? "ring-2 ring-indigo-500/50" : ""
                }`}
              >
                {/* Project Image */}
                <div className="relative aspect-video rounded-xl overflow-hidden mb-6 bg-slate-100 shadow-inner">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-500/10 to-cyan-500/10">
                      <span className="text-4xl font-bold bg-gradient-to-br from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm font-medium leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Expandable Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedProject === index ? "max-h-96 mb-4" : "max-h-0"
                  }`}
                >
                  <div className="space-y-4 pt-4 border-t border-slate-100">
                    <div>
                      <h4 className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-2">
                        Problem
                      </h4>
                      <p className="text-slate-700 text-sm leading-snug">
                        {project.problem}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-cyan-600 uppercase tracking-wider mb-2">
                        Solution
                      </h4>
                      <p className="text-slate-700 text-sm leading-snug">
                        {project.solution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-slate-50 border border-slate-200 rounded text-slate-600 font-bold text-[10px] uppercase tracking-tighter"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-slate-50 border border-slate-200 rounded text-slate-400 font-bold text-[10px] uppercase">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() =>
                      setExpandedProject(
                        expandedProject === index ? null : index
                      )
                    }
                    className="flex-1 px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 text-sm font-bold hover:bg-slate-100 hover:border-slate-300 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {expandedProject === index ? "Show Less" : "Details"}
                    <motion.span
                      animate={{
                        rotate: expandedProject === index ? 180 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-4 h-4 text-slate-500" />
                    </motion.span>
                  </button>
                  {project.github && project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 hover:border-indigo-200 transition-all duration-300"
                      title="View Code"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.live && project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-500 hover:text-cyan-600 hover:bg-cyan-50 hover:border-cyan-200 transition-all duration-300"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-full hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 group"
          >
            HIRE ME
            <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
