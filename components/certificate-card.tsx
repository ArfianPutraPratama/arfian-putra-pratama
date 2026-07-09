"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Award, ZoomIn } from "lucide-react"

export type Certificate = {
  id: number
  title: string
  issuer: string
  date: string
  color: string
  image: string
  category: string
}

interface CertCardProps {
  cert: Certificate
  index: number
  onClick: (cert: Certificate) => void
}

export function CertCard({ cert, index, onClick }: CertCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.4, 0.25, 1] }}
      whileHover={{ y: -6, scale: 1.02 }}
      onClick={() => onClick(cert)}
      className="group relative bg-white rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500"
    >
      {/* Certificate image */}
      <div className="relative h-44 overflow-hidden bg-gray-100">
        <Image
          src={cert.image}
          alt={cert.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent" />

        {/* Zoom icon on hover */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          initial={false}
        >
          <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
            <ZoomIn className="w-5 h-5 text-[#121212]" />
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start gap-3">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
            style={{ backgroundColor: `${cert.color}20` }}
          >
            <Award className="w-4 h-4" style={{ color: cert.color }} />
          </div>
          <div>
            <h3 className="font-black text-[#121212] text-sm leading-tight">{cert.title}</h3>
            <p className="text-[#121212]/50 font-mono text-[10px] mt-1">
              {cert.issuer} · {cert.date}
            </p>
          </div>
        </div>

        {/* Color accent bottom bar */}
        <motion.div
          className="h-1 rounded-full mt-4"
          style={{ backgroundColor: cert.color }}
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 + index * 0.08 }}
        />
      </div>
    </motion.div>
  )
}
