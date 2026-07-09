"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import { ExternalLink, Github, ChevronLeft, ChevronRight, Building, X, ZoomIn } from "lucide-react"

export const projects = [
  {
    id: 11,
    title: "Aplikasi Pencatatan Keuangan",
    category: "Web Dev",
    description:
      "Aplikasi modern untuk mencatat pengeluaran dan pemasukan harian dengan fitur analitik dan laporan keuangan secara berkala.",
    tech: ["Laravel", "PHP", "MySQL"],
    color: "#3498db",
    image: "/images/pencatatankeuangan.png",
    github: "#",
    live: "#",
    featured: true,
  },
  {
    id: 10,
    title: "Manajemen Keuangan",
    category: "Mobile Dev",
    description:
      "Aplikasi pencatatan dan manajemen keuangan untuk memonitor arus kas, pemasukan, serta pengeluaran dengan visualisasi data interaktif.",
    tech: ["Flutter", "Dart", "Firebase"],
    color: "#f39c12",
    image: "/images/keuangan.png",
    github: "#",
    live: "#",
    featured: true,
  },
  {
    id: 9,
    title: "Sistem Absensi Pegawai",
    category: "Mobile Dev",
    description:
      "Aplikasi absensi digital berbasis lokasi (GPS) dan pengenalan wajah (Face Recognition) untuk memantau kehadiran pegawai secara akurat dan real-time.",
    tech: ["Flutter", "Dart", "Firebase"],
    color: "#e74c3c",
    image: "/images/absensi.png",
    github: "#",
    live: "#",
    featured: true,
  },
  {
    id: 8,
    title: "Invoice Management",
    category: "Mobile Dev",
    description:
      "Aplikasi mobile modern untuk membuat, mengelola, dan melacak invoice atau tagihan secara efisien dengan fitur export dan dashboard statistik.",
    tech: ["Flutter", "Dart", "Firebase"],
    color: "#2ecc71",
    image: "/images/invoice.png",
    github: "#",
    live: "#",
    featured: true,
  },
  {
    id: 7,
    title: "SIMKRES",
    category: "Mobile Dev",
    description:
      "Sistem Informasi Manajemen Sarana dan Prasarana berbasis Flutter. Dirancang untuk memantau dan mengelola data inventaris sekolah secara real-time dengan antarmuka yang responsif untuk perangkat mobile dan dashboard internal.",
    tech: ["Flutter", "Dart", "Mobile"],
    color: "#9b59b6",
    image: "/images/simkres.png",
    github: "#",
    live: "#",
    featured: true,
  },
  {
    id: 1,
    title: "NeuroScan AI",
    category: "AI & GenAI",
    description:
      "Brain tumor detection system using MRI scans. Features CNN ResNet50 for classification, Grad-CAM for explainability, and a Google Gemini API virtual assistant.",
    tech: ["Python", "Streamlit", "ResNet50", "Grad-CAM", "PostgreSQL"],
    color: "#C4874A",
    image: "/images/neuro.png",
    github: "#",
    live: "https://neuroscan-brain-ai.streamlit.app/",
    featured: true,
    client: "Celerates",
  },
  {
    id: 2,
    title: "Mobile E-Procurement App",
    category: "Mobile Dev",
    description:
      "Designed and implemented an E-Procurement mobile application for Yayasan Salib Suci to streamline vendor management and procurement processes. Built with Flutter and RESTful APIs.",
    tech: ["Flutter", "Dart", "REST API", "Figma"],
    color: "#FF6B35",
    image: "/images/eprocurement.png",
    github: "#",
    live: "https://play.google.com/store/apps/details?id=com.perusahaan.mobile_eproc_odd&hl=id",
    featured: true,
    client: "PT Prima Visi Globalindo",
  },
  {
    id: 3,
    title: "Okaneflow Finance App",
    category: "Mobile Dev",
    description:
      "Cross-platform mobile app for personal finance management with expense tracking, budget planning, graphical reports, and real-time synchronization. Built with Flutter & Firebase.",
    tech: ["Flutter", "Firebase", "Dart", "REST API"],
    color: "#00D4FF",
    image: "/images/okaneflow.png",
    github: "#",
    live: "https://apkpure.com/id/okaneflow/com.fian.okaneflow",
    featured: true,
  },
  {
    id: 4,
    title: "StudyMate AI - Virtual Student Assistant",
    category: "AI & ML",
    description:
      "A smart, web-based virtual learning assistant powered by Google Gemini AI. Features a sleek, minimalist UI designed to help students summarize study materials, explain complex coding concepts, and generate personalized study plans efficiently.",
    tech: ["JavaScript", "Node.js", "Express.js", "Gemini API", "Vercel"],
    color: "#C4874A",
    image: "/images/studymate-chatbot.png",
    github: "#",
    live: "https://studymate-chatbot-rust.vercel.app/",
    featured: false,
  },
  {
    id: 5,
    title: "SOPilot AI - Intelligent SOP Assistant",
    category: "Web Dev",
    description:
      "Client-side AI web application for corporate document and knowledge management, featuring dynamic Markdown parsing and semantic chat powered by Google GenAI.",
    tech: ["JavaScript", "HTML/CSS", "Gemini API", "Marked.js"],
    color: "#FF6B35",
    image: "/images/sopilot.png",
    github: "#",
    live: "https://sopilot-ai-assistant-git-main-fians-projects-ae029f5d.vercel.app/",
    featured: false,
  },
  {
    id: 6,
    title: "EduLetter - Sistem Administrasi",
    category: "Mobile Dev",
    description:
      "Aplikasi administrasi sekolah digital berbasis Flutter untuk pengelolaan surat, dokumen, dan data siswa dengan dashboard responsif dan antarmuka modern.",
    tech: ["Flutter", "Dart", "BLoC"],
    color: "#4A90E2",
    image: "/images/aplikasi-administrasi.png",
    github: "https://github.com/ArfianPutraPratama/mobile-apps-Sistem-Administrasi-dan-Surat-Sekolah-Digital",
    live: "#",
    featured: false,
  },
]

export function ProjectCard({ project, index, onClick }: { project: (typeof projects)[0]; index: number; onClick: (project: (typeof projects)[0]) => void }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500"
    >
      {/* Image */}
      <div 
        className="relative h-48 overflow-hidden cursor-pointer"
        onClick={() => onClick(project)}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/40 to-transparent pointer-events-none" />

        {/* Zoom icon on hover */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
          initial={false}
        >
          <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
            <ZoomIn className="w-5 h-5 text-white" />
          </div>
        </motion.div>

        {/* Category badge */}
        <div
          className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold font-mono tracking-wider text-[#121212]"
          style={{ backgroundColor: project.color }}
        >
          {project.category}
        </div>

        {/* Links overlay */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute top-3 right-3 flex gap-2"
            >
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-8 h-8 bg-white/90 rounded-lg flex items-center justify-center hover:bg-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                suppressHydrationWarning
              >
                <Github className="w-4 h-4 text-[#121212]" />
              </motion.a>
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-8 h-8 rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity"
                style={{ backgroundColor: project.color }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                suppressHydrationWarning
              >
                <ExternalLink className="w-4 h-4 text-[#121212]" />
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-black text-white text-base mb-1 group-hover:text-white transition-colors">
          {project.title}
        </h3>
        
        {project.client && (
          <div className="flex items-center gap-1.5 text-white/40 mb-3">
            <Building className="w-3.5 h-3.5" />
            <span className="text-[10px] font-mono uppercase tracking-wider">{project.client}</span>
          </div>
        )}

        <p className="text-white/50 font-mono text-xs leading-relaxed mb-4">{project.description}</p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[10px] font-mono px-2 py-1 rounded-md border border-white/10 text-white/50"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Bottom accent */}
        <motion.div
          className="h-[2px] rounded-full mt-4"
          style={{ backgroundColor: project.color }}
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
        />
      </div>
    </motion.div>
  )
}

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [filter, setFilter] = useState("All")
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  const categories = ["All", "AI & GenAI", "Mobile Dev", "Data Analysis", "Web Dev", "AI & ML"]
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter)
  const displayProjects = filtered.slice(0, 6)

  return (
    <section id="projects" className="relative py-20 bg-[#121212] overflow-hidden">
      <div ref={ref} className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <motion.span
            className="inline-block font-mono text-[#C4874A] text-[10px] tracking-[0.35em] uppercase mb-3"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            My Work
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Featured <span className="text-[#C4874A]">Projects</span>
          </h2>
          <p className="text-white/40 font-mono text-sm mt-3 max-w-lg mx-auto">
            A collection of projects I've built — from AI systems to mobile apps
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold font-mono tracking-wide transition-all duration-300 ${
                filter === cat
                  ? "bg-[#C4874A] text-[#121212]"
                  : "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              suppressHydrationWarning
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {displayProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} index={index} onClick={setSelectedProject} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Button */}
        {filtered.length > 6 && (
          <motion.div 
            className="mt-16 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <a href="/projects">
              <motion.button
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-[#C4874A] text-[#121212] font-black font-mono text-sm uppercase tracking-wider rounded-full overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                suppressHydrationWarning
              >
                <span className="relative z-10 flex items-center gap-2">
                  Lihat Semua Projek
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              </motion.button>
            </a>
          </motion.div>
        )}
      </div>

      {/* Lightbox modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative bg-[#1a1a1a] border border-white/10 rounded-3xl overflow-hidden max-w-5xl w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-[60vh] md:h-[80vh]">
                <Image src={selectedProject.image} alt={selectedProject.title} fill className="object-contain" />
              </div>
              <motion.button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-black/80 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-5 h-5 text-white" />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
