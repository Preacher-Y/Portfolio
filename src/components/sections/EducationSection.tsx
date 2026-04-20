"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { education, certifications } from "@/data/content";

export function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" ref={ref} className="relative py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-[rgba(10,10,9,0.72)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="accent-line" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#78716c]">Background</span>
            <div className="accent-line" />
          </div>
          <h2
            className="text-serif text-5xl md:text-6xl lg:text-7xl text-[#faf9f7]"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Education & Training
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="luxury-border p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 border border-[#c9a962]/30 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#c9a962]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium text-[#faf9f7]">{education.degree}</h3>
                <p className="text-sm text-[#c9a962]">{education.institution}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 text-xs text-[#78716c] border border-[#1f1f1c]">
                {education.period}
              </span>
              <span className="px-3 py-1 text-xs text-[#78716c] border border-[#1f1f1c]">
                {education.focus}
              </span>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs uppercase tracking-[0.2em] text-[#78716c]">Key Areas</h4>
              <div className="flex flex-wrap gap-2">
                {education.details.map((detail, i) => (
                  <span key={i} className="px-3 py-1.5 text-sm text-[#a8a29e] border border-[#1f1f1c]">
                    {detail}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-sm uppercase tracking-[0.2em] text-[#78716c]">Certifications</h3>

            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="luxury-border p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-[#c9a962]/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-[#c9a962]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 15l-2-2m0 0l2-2m-2 2h12m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[#faf9f7] font-medium mb-1">{cert.name}</h4>
                    <p className="text-sm text-[#c9a962] mb-2">{cert.provider}</p>
                    <p className="text-sm text-[#78716c] mb-3">{cert.focus}</p>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, i) => (
                        <span key={i} className="px-2 py-1 text-xs text-[#78716c] border border-[#1f1f1c]">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="luxury-border p-6 flex items-center gap-4"
            >
              <div className="w-10 h-10 border border-[#c9a962]/30 flex items-center justify-center">
                <svg className="w-4 h-4 text-[#c9a962]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <div>
                <h4 className="text-[#faf9f7] font-medium">Always Learning</h4>
                <p className="text-sm text-[#78716c]">Actively exploring AI/ML integration</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
