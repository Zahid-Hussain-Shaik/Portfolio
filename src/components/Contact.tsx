import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolio";
import { Mail, MapPin, Linkedin, Github, Instagram, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const subject = formData.subject.trim() || "Portfolio Contact";
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`;
    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open immediately to preserve the user gesture (avoids popup/protocol blockers).
    window.location.href = mailtoLink;

    // UI feedback (kept async, but mailto open is not delayed).
    setTimeout(() => {
      setStatus("sent");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 300);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
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
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Let's Work{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Together
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-xl">
              <h3 className="text-xl font-bold text-slate-800 mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-indigo-500/50 transition-all duration-300 group"
                >
                  <div className="p-3 bg-indigo-500/10 rounded-xl group-hover:bg-indigo-500/20 transition-colors">
                    <Mail className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 font-medium lowercase">Email</div>
                    <div className="text-slate-900 font-bold">
                      {personalInfo.email}
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="p-3 bg-cyan-500/10 rounded-xl">
                    <MapPin className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 font-medium lowercase">Location</div>
                    <div className="text-slate-900 font-bold">
                      {personalInfo.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-xl">
              <h3 className="text-xl font-bold text-slate-800 mb-6">
                Connect With Me
              </h3>

              <div className="flex gap-4">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 text-center group"
                >
                  <Linkedin className="w-6 h-6 text-slate-500 mx-auto mb-2 group-hover:text-blue-600 transition-colors" />
                  <div className="text-xs font-bold text-slate-500 group-hover:text-blue-600 transition-colors">
                    LinkedIn
                  </div>
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300 text-center group"
                >
                  <Github className="w-6 h-6 text-slate-500 mx-auto mb-2 group-hover:text-purple-600 transition-colors" />
                  <div className="text-xs font-bold text-slate-500 group-hover:text-purple-600 transition-colors">
                    GitHub
                  </div>
                </a>
                <a
                  href={personalInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-pink-500/50 hover:bg-pink-500/10 transition-all duration-300 text-center group"
                >
                  <Instagram className="w-6 h-6 text-slate-500 mx-auto mb-2 group-hover:text-pink-600 transition-colors" />
                  <div className="text-xs font-bold text-slate-500 group-hover:text-pink-600 transition-colors">
                    Instagram
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 bg-white rounded-2xl border border-slate-200 shadow-xl"
          >
            <h3 className="text-xl font-bold text-slate-800 mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 lowercase">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-medium"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 lowercase">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-medium"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 lowercase">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-medium"
                  placeholder="Subject (optional)"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 lowercase">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none font-medium"
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 ${
                  status === "sending"
                    ? "bg-slate-200 text-slate-500 cursor-wait"
                    : status === "sent"
                    ? "bg-emerald-500 text-white"
                    : "bg-gradient-to-r from-indigo-600 to-cyan-600 text-white hover:shadow-lg hover:shadow-indigo-500/30"
                }`}
              >
                {status === "sending" ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-slate-400 border-t-transparent rounded-full"
                    />
                    Sending...
                  </>
                ) : status === "sent" ? (
                  "Message Sent!"
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
