import { motion } from "framer-motion";
import { skillCategories } from "../data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
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
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Skills &{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-indigo-500 rounded-full" />
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-700 text-sm font-semibold">
                        {skill.name}
                      </span>
                      {skill.level && (
                        <span className="text-slate-500 text-xs font-medium">
                          {skill.level}%
                        </span>
                      )}
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level || 70}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.2,
                          ease: "easeOut",
                        }}
                        className="h-full bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 p-8 bg-white rounded-2xl border border-slate-200 shadow-xl"
        >
          <h3 className="text-lg font-bold text-slate-800 mb-6 text-center">
            Also Familiar With
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Jupyter Notebook",
              "VS Code",
              "PyCharm",
              "IntelliJ IDEA",
              "MS Excel",
              "Apache Spark",
              "Databricks",
              "MongoDB",
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  delay: 0.5 + index * 0.03,
                }}
                className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-slate-700 font-medium text-sm hover:border-indigo-500 hover:text-indigo-600 transition-all duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
