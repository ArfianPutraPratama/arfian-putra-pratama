"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, X } from "lucide-react"
import { certificates } from "@/lib/certificates"
import { CertCard, type Certificate } from "@/components/certificate-card"
import ClickSpark from "@/components/click-spark"

export default function CertificatesPage() {
  const [selected, setSelected] = useState<Certificate | null>(null)

  return (
    <ClickSpark
      sparkColor="#C4874A"
      sparkSize={12}
      sparkRadius={20}
      sparkCount={8}
      duration={400}
      easing="ease-out"
    >
      <main className="min-h-screen bg-[#f5f5f0] pt-24 pb-20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="fixed top-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#C4874A]/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="fixed bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#0062FF]/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          {/* Header & Back Button */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-[#121212]/60 hover:text-[#C4874A] font-mono text-sm tracking-wide transition-colors mb-6 group"
              >
                <span className="w-8 h-8 rounded-full border border-current flex items-center justify-center group-hover:-translate-x-1 transition-transform">
                  <ArrowLeft className="w-4 h-4" />
                </span>
                Kembali ke Beranda
              </Link>
              <h1 className="text-4xl md:text-6xl font-black text-[#121212] tracking-tight">
                All <span className="text-[#C4874A]">Certifications</span>
              </h1>
              <p className="text-[#121212]/50 font-mono text-sm mt-4 max-w-lg">
                Koleksi lengkap sertifikat dan penghargaan yang telah saya raih selama perjalanan karir dan pembelajaran saya.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-mono text-[#121212]/40 text-sm"
            >
              Total: {certificates.length} Sertifikat
            </motion.div>
          </div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {certificates.map((cert, index) => (
              <CertCard key={cert.id} cert={cert} index={index} onClick={setSelected} />
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
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
                className="relative bg-white rounded-3xl overflow-hidden max-w-3xl w-full shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative h-[65vh]">
                  <Image src={selected.image} alt={selected.title} fill className="object-contain bg-gray-100/50" />
                </div>
                <div className="p-6 flex items-center justify-between bg-white border-t border-gray-100">
                  <div>
                    <h3 className="font-black text-[#121212] text-xl">{selected.title}</h3>
                    <p className="text-[#121212]/60 font-mono text-sm mt-1">
                      {selected.issuer} · {selected.date}
                    </p>
                  </div>
                  <motion.button
                    onClick={() => setSelected(null)}
                    className="w-12 h-12 bg-[#121212] rounded-full flex items-center justify-center flex-shrink-0 ml-4 hover:bg-[#C4874A] transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <X className="w-5 h-5 text-white" />
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </ClickSpark>
  )
}
