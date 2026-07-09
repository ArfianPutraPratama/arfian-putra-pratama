"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { ChevronLeft, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { projects, ProjectCard } from "@/components/projects-section"

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All")
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  const categories = ["All", "AI & GenAI", "Mobile Dev", "Data Analysis", "Web Dev", "AI & ML"]
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter)

  return (
    <div className="min-h-screen bg-[#121212] pt-24 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <Link 
          href="/#projects" 
          className="inline-flex items-center gap-2 text-white/50 hover:text-white mb-8 font-mono text-sm transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Kembali
        </Link>

        {/* Header */}
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Semua <span className="text-[#C4874A]">Projek</span>
          </h1>
          <p className="text-white/40 font-mono text-sm max-w-2xl">
            Jelajahi seluruh portofolio projek yang pernah saya kerjakan.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold font-mono tracking-wide transition-all duration-300 ${
                filter === cat
                  ? "bg-[#C4874A] text-[#121212]"
                  : "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
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
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-black/80 transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
