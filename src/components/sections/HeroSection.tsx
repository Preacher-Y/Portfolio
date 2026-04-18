"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { personalInfo, heroWords } from "@/data/content";

export function HeroSection() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    const word = heroWords[currentWordIndex];
    let charIndex = 0;
    setIsTyping(true);

    const typeInterval = setInterval(() => {
      if (charIndex <= word.length) {
        setDisplayedText(word.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
        setTimeout(() => {
          setIsTyping(true);
          setCurrentWordIndex((prev) => (prev + 1) % heroWords.length);
        }, 2500);
      }
    }, 60);

    return () => clearInterval(typeInterval);
  }, [currentWordIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.4, 0, 0.2, 1] as const },
    },
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#0a0a09]" />

      <div className="relative z-20 text-center max-w-4xl mx-auto px-6 sm:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="space-y-2">
            <p className="text-xs uppercase tracking-[0.3em] text-[#78716c]">
              Software Engineer
            </p>
            <h1
              className="text-serif text-6xl sm:text-7xl md:text-8xl lg:text-[8rem] text-[#faf9f7] leading-none tracking-tight"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              {personalInfo.name}
            </h1>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center justify-center text-center">
            <div className="inline-flex max-w-full flex-wrap items-center justify-center gap-2 text-center">
              <span className="text-base sm:text-lg text-[#78716c]">
                I build
              </span>
              <span
                className="text-base sm:text-lg text-[#c9a962] font-light"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontStyle: "italic" }}
              >
                {displayedText}
                <span className="inline-block w-px h-5 ml-1 bg-[#c9a962] animate-blink" />
              </span>
            </div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-[#a8a29e] max-w-lg mx-auto leading-relaxed"
          >
            {personalInfo.shortIntro}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 bg-[#c9a962] text-[#0a0a09] text-xs uppercase tracking-[0.2em] hover:bg-[#dfc07a] transition-all duration-300"
            >
              View Projects
            </motion.a>

            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 bg-transparent text-[#faf9f7] text-xs uppercase tracking-[0.2em] border border-[#1f1f1c] hover:border-[#c9a962]/50 transition-all duration-300"
            >
              Contact
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-6 pt-4"
          >
            {[
              { label: "GitHub", href: personalInfo.github },
              { label: "LinkedIn", href: personalInfo.linkedin },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#78716c] hover:text-[#c9a962] transition-colors duration-300 text-xs uppercase tracking-widest"
                whileHover={{ y: -2 }}
              >
                {social.label}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
