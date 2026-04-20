"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { aboutContent } from "@/data/content";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="relative py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-[rgba(10,10,9,0.72)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="accent-line" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#78716c]">About</span>
            <div className="accent-line" />
          </div>
          <h2
            className="text-serif text-5xl md:text-6xl lg:text-7xl text-[#faf9f7]"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Building with Purpose
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="border border-[#1f1f1c] p-6">
              <h3 className="text-xs uppercase tracking-[0.2em] text-[#c9a962] mb-4">My Story</h3>
              <p className="text-[#a8a29e] leading-relaxed">{aboutContent.bio}</p>
            </div>

            <div className="border border-[#1f1f1c] p-6">
              <h3 className="text-xs uppercase tracking-[0.2em] text-[#c9a962] mb-4">Philosophy</h3>
              <p className="text-[#a8a29e] leading-relaxed">{aboutContent.philosophy}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#78716c]">What I Actually Bring</h3>
            <ul className="space-y-4">
              {aboutContent.whatIBring.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="mt-2 w-1 h-1 rounded-full bg-[#c9a962] flex-shrink-0" />
                  <span className="text-[#a8a29e]">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12"
        >
          {aboutContent.strengths.map((strength, index) => (
            <div
              key={strength.title}
              className="border border-[#1f1f1c] p-5 hover:border-[#c9a962]/30 transition-colors"
            >
              <div className="w-6 h-px bg-[#c9a962] mb-4" />
              <h4 className="text-[#faf9f7] font-light mb-2" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                {strength.title}
              </h4>
              <p className="text-xs text-[#78716c] leading-relaxed">{strength.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
