"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { X } from "lucide-react"
import { certificates } from "@/lib/certificates"
import { CertCard, type Certificate } from "./certificate-card"

export function CertificatesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [selected, setSelected] = useState<Certificate | null>(null)
  
  const visibleCertificates = certificates.slice(0, 6)

  return (
    <section id="certifications" className="relative py-20 bg-[#f5f5f0] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C4874A]/20 rounded-full blur-[120px] pointer-events-none" />

      <div ref={ref} className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <motion.span
            className="inline-block font-mono text-[#121212]/50 text-[10px] tracking-[0.35em] uppercase mb-3"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            Achievements
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-black text-[#121212] tracking-tight">
            Licenses & <span className="text-[#C4874A]">Certifications</span>
          </h2>
          <p className="text-[#121212]/50 font-mono text-sm mt-3 max-w-lg mx-auto">
            Klik sertifikat untuk melihat detailnya — proses belajar dan berkembang tidak pernah berhenti
          </p>
        </motion.div>

        {/* Certificates grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {visibleCertificates.map((cert, index) => (
            <CertCard key={cert.id} cert={cert} index={index} onClick={setSelected} />
          ))}
        </div>

        {/* Lihat Semua Button */}
        <div className="mt-12 flex justify-center">
          <Link href="/certificates">
            <motion.button
              className="bg-[#121212] text-white px-8 py-3 rounded-full font-bold text-sm tracking-wide relative overflow-hidden group shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              suppressHydrationWarning
            >
              <span className="relative z-10">Lihat Semua Sertifikat</span>
              <motion.div
                className="absolute inset-0 bg-[#C4874A] -translate-x-full group-hover:translate-x-0"
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </Link>
        </div>
      </div>

      {/* Lightbox modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative bg-white rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-[60vh]">
                <Image src={selected.image} alt={selected.title} fill className="object-cover" />
              </div>
              <div className="p-6 flex items-center justify-between">
                <div>
                  <h3 className="font-black text-[#121212] text-lg">{selected.title}</h3>
                  <p className="text-[#121212]/50 font-mono text-sm mt-1">
                    {selected.issuer} · {selected.date}
                  </p>
                </div>
                <motion.button
                  onClick={() => setSelected(null)}
                  className="w-10 h-10 bg-[#121212] rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  suppressHydrationWarning
                >
                  <X className="w-4 h-4 text-white" />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
