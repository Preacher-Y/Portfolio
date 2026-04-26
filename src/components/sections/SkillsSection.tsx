"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { skillCategories } from "@/data/content";

function SkillCard({ category, index }: { category: typeof skillCategories[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border border-[#c9a962]/10 bg-[#111110]/60 backdrop-blur-sm p-5 hover:border-[#c9a962]/30 hover:bg-[#111110]/80 transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-1.5 h-1.5 rounded-full bg-[#c9a962]" />
        <h3 className="text-base font-light text-[#faf9f7]" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
          {category.name}
        </h3>
      </div>

      <p className="text-xs text-[#78716c] mb-4 leading-relaxed">{category.description}</p>

      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <button
            key={skill}
            onMouseEnter={() => setHoveredSkill(skill)}
            onMouseLeave={() => setHoveredSkill(null)}
            className={`px-3 py-1.5 text-xs border transition-all duration-200 ${
              hoveredSkill === skill
                ? "border-[#c9a962]/50 text-[#c9a962] bg-[#c9a962]/5"
                : "border-[#1f1f1c] text-[#78716c] hover:border-[#78716c]/30"
            }`}
          >
            {skill}
          </button>
        ))}
      </div>
    </motion.div>
  );
}

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref} className="relative py-32 md:py-40 overflow-hidden">
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
            <span className="text-xs uppercase tracking-[0.3em] text-[#78716c]">Expertise</span>
            <div className="accent-line" />
          </div>
          <h2
            className="text-serif text-5xl md:text-6xl lg:text-7xl text-[#faf9f7]"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Tech Stack
          </h2>
          <p className="text-[#78716c] max-w-lg mx-auto">
            Technologies I work with to build production-ready systems
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.name} category={category} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-6 px-8 py-4 border border-[#c9a962]/10 bg-[#111110]/60 backdrop-blur-sm">
            <span className="text-[#78716c] text-sm">Always learning</span>
            <div className="w-px h-4 bg-[#1f1f1c]" />
            <span className="text-[#a8a29e] text-sm">Exploring AI/ML integration</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
