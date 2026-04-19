"use client";

import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { projects, personalInfo } from "@/data/content";

interface Project {
  id: number;
  title: string;
  summary: string;
  problem: string;
  solution: string;
  techStack: string[];
  highlights: string[];
  impact: string;
  github: string;
  live: string | null;
  icon: string;
  images: string[];
}

function ProjectIcon({ icon }: { icon: string }) {
  const icons: Record<string, React.ReactElement> = {
    globe: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    shield: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    document: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14,2 14,8 20,8" />
      </svg>
    ),
  };
  return icons[icon] || icons.globe;
}

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className="group cursor-pointer"
    >
      <div className="relative border border-[#1f1f1c] p-5 transition-all duration-300 hover:border-[#c9a962]/30">
        <div className="flex items-start justify-between mb-4">
          <div className="w-10 h-10 border border-[#c9a962]/30 flex items-center justify-center text-[#c9a962]">
            <ProjectIcon icon={project.icon} />
          </div>

          <motion.div
            animate={{ x: isHovered ? 4 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <svg className="w-5 h-5 text-[#78716c]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12,5 19,12 12,19" />
            </svg>
          </motion.div>
        </div>

        <h3 className="text-lg font-light text-[#faf9f7] mb-2 transition-colors group-hover:text-[#c9a962]" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
          {project.title}
        </h3>
        <p className="text-sm text-[#78716c] leading-relaxed mb-4">
          {project.summary}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.slice(0, 3).map((tech) => (
            <span key={tech} className="px-2 py-1 text-xs text-[#78716c] border border-[#1f1f1c]">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 text-xs text-[#c9a962] uppercase tracking-wider">
          <span>View Details</span>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      style={{ background: "rgba(10, 10, 9, 0.95)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-[#111110] border border-[#1f1f1c] p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#78716c] hover:text-[#faf9f7] transition-colors z-10"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="space-y-6">
          <div>
            <div className="w-10 h-10 border border-[#c9a962]/30 flex items-center justify-center text-[#c9a962] mb-4">
              <ProjectIcon icon={project.icon} />
            </div>
            <h2 className="text-2xl font-light text-[#faf9f7] mb-2" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
              {project.title}
            </h2>
            <p className="text-[#a8a29e]">{project.summary}</p>
          </div>

          {project.images && project.images.length > 0 && (
            <div className="border border-[#1f1f1c] p-4">
              <h3 className="text-xs uppercase tracking-[0.2em] text-[#c9a962] mb-4">Preview</h3>
              <div className="grid grid-cols-1 gap-4">
                {project.images.map((img, idx) => (
                  <div
                    key={idx}
                    className="relative h-[320px] sm:h-[420px] bg-[#0a0a09] border border-[#1f1f1c] overflow-hidden"
                  >
                    <Image
                      src={img}
                      alt={`${project.title} screenshot ${idx + 1}`}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-contain p-2"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="border border-[#1f1f1c] p-4">
              <h3 className="text-xs uppercase tracking-[0.2em] text-[#c9a962] mb-2">Problem</h3>
              <p className="text-sm text-[#a8a29e] leading-relaxed">{project.problem}</p>
            </div>
            <div className="border border-[#1f1f1c] p-4">
              <h3 className="text-xs uppercase tracking-[0.2em] text-[#c9a962] mb-2">Solution</h3>
              <p className="text-sm text-[#a8a29e] leading-relaxed">{project.solution}</p>
            </div>
          </div>

          <div className="border border-[#1f1f1c] p-4">
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#c9a962] mb-3">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="px-3 py-1 text-sm text-[#a8a29e] border border-[#1f1f1c]">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="border border-[#1f1f1c] p-4">
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#c9a962] mb-3">Key Highlights</h3>
            <ul className="space-y-2">
              {project.highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#a8a29e]">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-[#c9a962] flex-shrink-0" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-[#1f1f1c] p-4">
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#c9a962] mb-2">Impact</h3>
            <p className="text-sm text-[#a8a29e]">{project.impact}</p>
          </div>

          <div className="flex gap-4 pt-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm border border-[#1f1f1c] text-[#a8a29e] hover:border-[#c9a962]/50 hover:text-[#c9a962] transition-all"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View Code
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm bg-[#c9a962] text-[#0a0a09] hover:bg-[#dfc07a] transition-all"
              >
                Live Demo
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12,5 19,12 12,19" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" ref={ref} className="relative py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a09]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="accent-line" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#78716c]">Work</span>
            <div className="accent-line" />
          </div>
          <h2
            className="text-serif text-5xl md:text-6xl lg:text-7xl text-[#faf9f7]"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Selected Projects
          </h2>
          <p className="text-[#78716c] max-w-lg mx-auto">
            Production-ready systems built with clean architecture
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project as Project}
              onClick={() => setSelectedProject(project as Project)}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href={personalInfo.github+"?tab=repositories"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 text-sm uppercase tracking-wider border border-[#1f1f1c] text-[#a8a29e] hover:border-[#c9a962]/50 hover:text-[#c9a962] transition-all"
          >
            View All on GitHub
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
