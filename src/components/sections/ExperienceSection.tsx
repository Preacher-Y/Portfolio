"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experience } from "@/data/content";

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref} className="relative py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a09]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="accent-line" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#78716c]">Career</span>
            <div className="accent-line" />
          </div>
          <h2
            className="text-serif text-5xl md:text-6xl lg:text-7xl text-[#faf9f7]"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Experience
          </h2>
          <p className="text-[#78716c] max-w-lg mx-auto">
            Building production systems while mentoring the next generation of engineers
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#1f1f1c] -translate-x-1/2" />

          {experience.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={item.company}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative mb-12 last:mb-0"
              >
                <div className="absolute left-1/2 top-8 w-2 h-2 bg-[#c9a962] -translate-x-1/2 rounded-full" />

                <div className={`flex items-start gap-8 ${isLeft ? "" : "flex-row-reverse"}`}>
                  <div className="flex-1">
                    <div className={`${isLeft ? "text-right" : "text-left"}`}>
                      <div className="inline-block luxury-border p-6">
                        <div className="mb-3">
                          <span className="inline-block px-3 py-1 text-xs text-[#78716c] border border-[#1f1f1c] mb-3">
                            {item.period}
                          </span>
                        </div>
                        <h3 className="text-xl font-light text-[#faf9f7] mb-1" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                          {item.role}
                        </h3>
                        <p className="text-sm text-[#c9a962] mb-4">{item.company}</p>
                        <ul className="space-y-2">
                          {item.highlights.map((highlight, i) => (
                            <li key={i} className={`flex items-start gap-2 text-sm text-[#a8a29e] ${isLeft ? "justify-end" : "justify-start"}`}>
                              {isLeft && <span className="mt-1.5 w-1 h-1 rounded-full bg-[#c9a962] flex-shrink-0" />}
                              <span>{highlight}</span>
                              {!isLeft && <span className="mt-1.5 w-1 h-1 rounded-full bg-[#c9a962] flex-shrink-0" />}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="flex-shrink-0 w-4" />

                  <div className="flex-1" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
