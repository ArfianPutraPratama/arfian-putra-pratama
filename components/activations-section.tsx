"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Cloud, Brain, Server, AppWindow, Search } from "lucide-react"
import Image from "next/image"

const activations = [
  {
    icon: Cloud,
    title: "AWS Cloud Essentials",
    description: "Cloud Computing basics from Amazon Web Services.",
    provider: "Amazon Web Services",
    year: "2023",
    image: "/placeholder.svg",
    cta: "View Credential",
  },
  {
    icon: Brain,
    title: "Build an AI Agent",
    description: "Artificial Intelligence skills from IBM SkillsBuild.",
    provider: "IBM SkillsBuild",
    year: "2024",
    image: "/placeholder.svg",
    cta: "View Credential",
  },
  {
    icon: Server,
    title: "IT Customer Support",
    description: "IT support basics certification from Cisco.",
    provider: "Cisco",
    year: "2023",
    image: "/placeholder.svg",
    cta: "View Credential",
  },
  {
    icon: AppWindow,
    title: "Android App Development",
    description: "Android App Development from Simplilearn.",
    provider: "Simplilearn",
    year: "2024",
    image: "/images/mobile-sertifikat.png",
    cta: "View Credential",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
}

export function ActivationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="certifications" className="relative py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center mb-14"
        >
          <motion.span
            className="font-mono text-[#C4874A] text-xs tracking-widest inline-block mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            ACHIEVEMENTS
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-black text-[#121212] tracking-tighter mt-2 overflow-hidden">
            <motion.span
              className="inline-block"
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.2 }}
            >
              CERTIFICATIONS{" "}
            </motion.span>
            <motion.span
              className="text-[#C4874A] inline-block"
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.3 }}
            >
              & LICENSES
            </motion.span>
          </h2>
          <motion.p
            className="text-sm text-[#121212]/60 font-mono mt-4 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Continuous learning and upskilling in technology.
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {activations.map((activation) => (
            <motion.div
              key={activation.title}
              variants={itemVariants}
              whileHover={{
                y: -8,
                transition: { type: "spring", stiffness: 400, damping: 17 },
              }}
              className="group bg-white rounded-3xl overflow-hidden cursor-pointer relative shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 flex flex-col"
            >
              {/* Image Area */}
              <div className="relative h-48 w-full overflow-hidden bg-gray-50">
                <Image
                  src={activation.image}
                  alt={activation.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg scale-50 group-hover:scale-100">
                    <Search className="w-5 h-5 text-[#121212]" />
                  </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 flex gap-4 relative pb-7">
                <div className="w-12 h-12 rounded-2xl bg-[#C4874A]/10 flex items-center justify-center shrink-0">
                  <activation.icon className="w-6 h-6 text-[#C4874A]" />
                </div>
                <div className="pt-1">
                  <h3 className="text-base font-bold text-[#121212] tracking-tight leading-tight mb-1">
                    {activation.title}
                  </h3>
                  <p className="text-gray-500 font-mono text-xs">
                    {activation.provider} · {activation.year}
                  </p>
                </div>
                
                {/* Bottom colored bar */}
                <div className="absolute bottom-0 left-6 right-6 h-1 bg-[#C4874A] rounded-t-md opacity-80" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
