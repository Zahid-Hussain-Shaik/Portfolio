import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "../data/portfolio";
import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

const TITLES = [
  "Software Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Programmer"
];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % TITLES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleDownload = () => {
    window.open("mailto:zahidhussain6@gmail.com?subject=Request for Resume");
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-sm font-medium">
              Hello, I'm
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-white via-indigo-200 to-cyan-200 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </motion.h1>

          {/* Title with changing effect */}
          <div className="h-20 mb-12 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.h2
                key={TITLES[index]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-300"
              >
                {TITLES[index]}
              </motion.h2>
            </AnimatePresence>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 flex items-center gap-2"
            >
              HIRE ME
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="/Zahid_Hussain_ATS_Final.pdf"
              download="Shaik_Zahid_Hussain_Resume.pdf"
              className="px-8 py-4 bg-slate-800/50 border border-slate-700 text-white font-semibold rounded-full hover:bg-slate-800 transition-all duration-300 flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Get Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex gap-6"
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-slate-800/50 border border-slate-700 rounded-full hover:border-indigo-500 hover:bg-indigo-500/20 transition-all duration-300 group"
            >
              <Github className="w-6 h-6 text-slate-400 group-hover:text-indigo-400 transition-colors" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-slate-800/50 border border-slate-700 rounded-full hover:border-cyan-500 hover:bg-cyan-500/20 transition-all duration-300 group"
            >
              <Linkedin className="w-6 h-6 text-slate-400 group-hover:text-cyan-400 transition-colors" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-4 bg-slate-800/50 border border-slate-700 rounded-full hover:border-purple-500 hover:bg-purple-500/20 transition-all duration-300 group"
            >
              <Mail className="w-6 h-6 text-slate-400 group-hover:text-purple-400 transition-colors" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-3 bg-slate-500 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
