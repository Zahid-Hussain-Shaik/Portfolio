import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolio";
import { Github, Linkedin, Instagram, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">
                {personalInfo.name.charAt(0)}
              </span>
            </div>
            <div className="text-slate-400 text-sm">
              © {currentYear} {personalInfo.name}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4"
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-900/50 rounded-lg border border-slate-800 text-slate-400 hover:text-white hover:border-indigo-500 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-900/50 rounded-lg border border-slate-800 text-slate-400 hover:text-white hover:border-indigo-500 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-900/50 rounded-lg border border-slate-800 text-slate-400 hover:text-white hover:border-indigo-500 transition-all duration-300"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
