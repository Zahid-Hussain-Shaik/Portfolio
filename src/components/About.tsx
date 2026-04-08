import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolio";
import { Code2, Server, Zap, Users } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Backend Systems",
      description:
        "Designing APIs, services, and data models that stay maintainable at scale.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Production Delivery",
      description:
        "Shipping features end-to-end with clean code and pragmatic decisions.",
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Reliable Execution",
      description:
        "Testing, error handling, and performance focus for stable releases.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Collaboration",
      description:
        "Working effectively with cross-functional teams in Agile environments.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-950/50 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 font-semibold tracking-wider uppercase text-sm">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Turning Ideas Into{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Reality
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative group">
              <div className="relative z-10 w-full max-w-[600px] rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
                <img
                  src="/WhatsApp Image 2026-03-10 at 4.08.45 PM.jpeg"
                  alt={personalInfo.name}
                  className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-indigo-500/20 rounded-2xl -z-0 blur-3xl" />
              <div className="absolute -top-8 -left-8 w-48 h-48 bg-cyan-500/20 rounded-2xl -z-0 blur-3xl" />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Full Stack Software Developer
            </h3>
            <p className="text-slate-400 leading-relaxed mb-8">
              With hands-on experience in both backend development and frontend
              technologies, I specialize in building scalable solutions that
              solve real-world problems. From data pipelines processing
              thousands of API calls to machine learning models predicting
              outcomes, I bring a pragmatic approach to every project.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 mb-12">
              <div className="text-center p-4 bg-white rounded-xl shadow-lg border border-slate-100">
                <div className="text-2xl font-bold text-indigo-600">7+</div>
                <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Months Exp.</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-lg border border-slate-100">
                <div className="text-2xl font-bold text-cyan-600">6+</div>
                <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Projects</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-lg border border-slate-100">
                <div className="text-2xl font-bold text-purple-600">10+</div>
                <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Certifications</div>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="p-3 bg-indigo-500/10 rounded-xl w-fit mb-4 group-hover:bg-indigo-500/20 transition-colors">
                    <div className="text-indigo-600">{item.icon}</div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
