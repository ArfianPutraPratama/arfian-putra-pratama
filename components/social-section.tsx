"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, MapPin, Github, Linkedin, Send } from "lucide-react"
import { toast } from "sonner"

export function SocialSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [formState, setFormState] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
        }),
      })
      
      const result = await response.json()
      if (result.success) {
        toast.success("Pesan berhasil dikirim! Saya akan segera membalasnya.")
        setFormState({ name: "", email: "", message: "" })
      } else {
        toast.error("Gagal mengirim pesan. Silakan coba lagi.")
      }
    } catch (error) {
      toast.error("Terjadi kesalahan sistem, silakan coba lagi.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative py-24 bg-[#121212] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#C4874A]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#C4874A]/10 rounded-full blur-[100px] pointer-events-none" />

      <div ref={ref} className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
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
            Let's Connect
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Get In <span className="text-[#C4874A]">Touch</span>
          </h2>
          <p className="text-white/50 font-mono text-sm mt-4 max-w-lg mx-auto leading-relaxed">
            Tertarik untuk berkolaborasi, membahas proyek, atau sekadar menyapa? Jangan ragu untuk menghubungi saya.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info (Left Side) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Informasi Kontak</h3>

              <div className="space-y-6">
                <a href="mailto:fian.kurus06@gmail.com" className="flex items-center gap-5 group">
                  <div className="w-14 h-14 rounded-2xl bg-[#1a1a1a] border border-white/5 flex items-center justify-center group-hover:bg-[#C4874A]/10 group-hover:border-[#C4874A]/30 transition-all duration-300">
                    <Mail className="w-6 h-6 text-[#C4874A]" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs font-mono mb-1">Email</p>
                    <p className="text-white font-medium group-hover:text-[#C4874A] transition-colors">fian.kurus06@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-5 group">
                  <div className="w-14 h-14 rounded-2xl bg-[#1a1a1a] border border-white/5 flex items-center justify-center group-hover:bg-[#C4874A]/10 group-hover:border-[#C4874A]/30 transition-all duration-300">
                    <MapPin className="w-6 h-6 text-[#C4874A]" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs font-mono mb-1">Lokasi</p>
                    <p className="text-white font-medium group-hover:text-[#C4874A] transition-colors">Surabaya, Indonesia</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <h3 className="text-lg font-bold text-white mb-5">Social Media</h3>
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/in/arfianputrapratama/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-14 h-14 rounded-2xl bg-[#1a1a1a] border border-white/5 flex items-center justify-center hover:bg-[#C4874A] hover:text-[#121212] text-white transition-all duration-300 hover:-translate-y-1 shadow-sm"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a 
                  href="https://github.com/ArfianPutraPratama" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-14 h-14 rounded-2xl bg-[#1a1a1a] border border-white/5 flex items-center justify-center hover:bg-[#C4874A] hover:text-[#121212] text-white transition-all duration-300 hover:-translate-y-1 shadow-sm"
                >
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form (Right Side) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="bg-[#1a1a1a] p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden" suppressHydrationWarning>
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C4874A]/5 rounded-full blur-[50px]" />

              <h3 className="text-2xl font-bold text-white mb-8 relative z-10">Kirim Pesan</h3>

              <div className="space-y-5 relative z-10">
                <div>
                  <label htmlFor="name" className="block text-white/50 text-xs font-mono mb-2">Nama Lengkap</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-[#121212] border border-white/10 rounded-xl px-5 py-3.5 text-white focus:outline-none focus:border-[#C4874A] transition-colors"
                    placeholder="Masukkan nama Anda"
                    suppressHydrationWarning
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white/50 text-xs font-mono mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full bg-[#121212] border border-white/10 rounded-xl px-5 py-3.5 text-white focus:outline-none focus:border-[#C4874A] transition-colors"
                    placeholder="nama@email.com"
                    suppressHydrationWarning
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white/50 text-xs font-mono mb-2">Pesan</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-[#121212] border border-white/10 rounded-xl px-5 py-3.5 text-white focus:outline-none focus:border-[#C4874A] transition-colors resize-none"
                    placeholder="Tulis pesan Anda di sini..."
                    suppressHydrationWarning
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#C4874A] text-[#121212] px-6 py-4 rounded-xl font-bold text-base tracking-wide relative overflow-hidden group flex items-center justify-center gap-2 mt-4 disabled:opacity-70 shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  suppressHydrationWarning
                >
                  <span className="relative z-10">{isSubmitting ? "Mengirim..." : "Kirim Pesan"}</span>
                  {!isSubmitting && <Send className="w-5 h-5 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                  <motion.div
                    className="absolute inset-0 bg-white/20 -translate-x-full"
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
