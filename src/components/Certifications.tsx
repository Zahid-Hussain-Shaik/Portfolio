import { motion } from "framer-motion";
import { certifications } from "../data/portfolio";
import { Award, ExternalLink } from "lucide-react";

export function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block relative">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-widest uppercase mb-2">
              Certifications & <span className="text-teal-400">Internships</span>
            </h2>
            <div className="h-0.5 w-full bg-teal-400/30 mt-2"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title + index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative"
            >
              <div className="bg-white rounded-2xl border border-slate-200 p-4 transition-all duration-300 shadow-xl hover:shadow-2xl hover:border-teal-500/50 group-hover:shadow-teal-500/10 overflow-hidden">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 mb-4 shadow-inner">
                  {cert.image ? (
                    cert.image.endsWith('.pdf') ? (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-slate-50 text-slate-400">
                        <Award className="w-16 h-16 mb-4 opacity-50" />
                        <span className="text-sm font-bold px-4 text-center text-slate-600">{cert.title}</span>
                        <span className="text-xs mt-2 opacity-60">(PDF Certificate)</span>
                      </div>
                    ) : (
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-contain bg-white transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                    )
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-slate-50">
                      <Award className="w-12 h-12 text-slate-300" />
                    </div>
                  )}
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-teal-900/0 group-hover:bg-teal-900/10 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                     <a 
                      href={cert.image} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full text-teal-600 shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:scale-110 border border-teal-100"
                    >
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  </div>
                </div>

                <div className="space-y-1 text-center pb-2">
                  <h3 className="text-slate-800 font-bold group-hover:text-teal-600 transition-colors leading-tight px-2">
                    {cert.title}
                  </h3>
                  <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">
                    {cert.issuer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
