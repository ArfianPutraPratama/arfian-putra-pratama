"use client"
import { motion } from "framer-motion"
import Image from "next/image"

const clients = [
  { id: 2, name: "PT Prima Visi", logo: "/images/primavisi.png" },
  { id: 3, name: "Celerates", logo: "/images/cele.png" },
  { id: 4, name: "VINIX7", logo: "/images/vinix.png" },
  { id: 8, name: "SDN Simokerto", logo: "/images/SDNsimokerto.png" },
  { id: 9, name: "CV Raxka", logo: "/images/cvraxka.png" },
]

export function ClientsSection() {
  return (
    <section className="py-24 bg-[#121212] border-y border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
            Trusted by <span className="text-[#C4874A]">Organizations</span>
          </h2>
          <p className="text-white/40 font-mono text-sm mt-3">
            Institusi dan perusahaan tempat saya magang serta berkolaborasi dalam pengerjaan proyek
          </p>
        </div>
        
        {/* Grid border ala referensi gambar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-t border-l border-white/5">
          {clients.map((client, i) => (
            <motion.div
              key={client.id}
              className="relative aspect-[3/2] flex items-center justify-center p-6 border-b border-r border-white/5 hover:bg-white/5 transition-colors grayscale hover:grayscale-0 cursor-pointer group"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              {client.logo ? (
                <div className="relative w-full h-full p-2 flex items-center justify-center">
                  <Image src={client.logo} alt={client.name} fill className="object-contain" />
                </div>
              ) : (
                <span className="font-black text-white/30 group-hover:text-white transition-colors text-center tracking-tighter text-lg md:text-xl">
                  {client.name}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
