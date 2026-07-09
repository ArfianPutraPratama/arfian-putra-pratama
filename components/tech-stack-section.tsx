"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const tools = [
  {
    name: "Flutter",
    category: "Mobile Framework",
    icon: "https://cdn.simpleicons.org/flutter/02569B",
  },
  {
    name: "Dart",
    category: "Programming Language",
    icon: "https://cdn.simpleicons.org/dart/0175C2",
  },
  {
    name: "Kotlin",
    category: "Programming Language",
    icon: "https://cdn.simpleicons.org/kotlin/7F52FF",
  },
  {
    name: "Jetpack Compose",
    category: "Android UI Toolkit",
    icon: "https://cdn.simpleicons.org/jetpackcompose/4285F4",
  },
  {
    name: "Android Studio",
    category: "IDE",
    icon: "https://cdn.simpleicons.org/androidstudio/3DDC84",
  },
  {
    name: "Python",
    category: "Programming Language",
    icon: "https://cdn.simpleicons.org/python/3776AB",
  },
  {
    name: "TensorFlow",
    category: "Machine Learning",
    icon: "https://cdn.simpleicons.org/tensorflow/FF6F00",
  },
  {
    name: "PyTorch",
    category: "Machine Learning",
    icon: "https://cdn.simpleicons.org/pytorch/EE4C2C",
  },
  {
    name: "Scikit-learn",
    category: "Machine Learning",
    icon: "https://cdn.simpleicons.org/scikitlearn/F7931E",
  },

  {
    name: "Pandas",
    category: "Data Analysis",
    icon: "https://cdn.simpleicons.org/pandas/150458",
  },
  {
    name: "NumPy",
    category: "Data Analysis",
    icon: "https://cdn.simpleicons.org/numpy/013243",
  },
  {
    name: "Tableau",
    category: "Data Visualization",
    icon: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg",
  },
  {
    name: "React JS",
    category: "Web Framework",
    icon: "https://cdn.simpleicons.org/react/61DAFB",
  },
  {
    name: "Next JS",
    category: "Web Framework",
    icon: "https://cdn.simpleicons.org/nextdotjs/white",
  },
  {
    name: "Node JS",
    category: "JavaScript Runtime",
    icon: "https://cdn.simpleicons.org/nodedotjs/339933",
  },
  {
    name: "FastAPI",
    category: "Backend Framework",
    icon: "https://cdn.simpleicons.org/fastapi/009688",
  },
  {
    name: "Firebase",
    category: "BaaS",
    icon: "https://cdn.simpleicons.org/firebase/FFCA28",
  },
  {
    name: "Visual Studio Code",
    category: "Code Editor",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
  },
  {
    name: "Git",
    category: "Version Control",
    icon: "https://cdn.simpleicons.org/git/F05032",
  },
  {
    name: "Github",
    category: "Repository",
    icon: "https://cdn.simpleicons.org/github/white",
  },
  {
    name: "Docker",
    category: "Containerization",
    icon: "https://cdn.simpleicons.org/docker/2496ED",
  },
  {
    name: "Tailwind CSS",
    category: "CSS Framework",
    icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
  },
  {
    name: "Figma",
    category: "Design Tool",
    icon: "https://cdn.simpleicons.org/figma/F24E1E",
  },
  {
    name: "Laravel",
    category: "Backend Framework",
    icon: "https://cdn.simpleicons.org/laravel/FF2D20",
  },
  {
    name: "PHP",
    category: "Programming Language",
    icon: "https://cdn.simpleicons.org/php/777BB4",
  },
  {
    name: "HTML5",
    category: "Markup Language",
    icon: "https://cdn.simpleicons.org/html5/E34F26",
  },
  {
    name: "CSS3",
    category: "Style Sheet",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  },
  {
    name: "Swift",
    category: "Programming Language",
    icon: "https://cdn.simpleicons.org/swift/F05138",
  },
]

export function TechStackSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section id="techstack" className="relative py-24 bg-[#0d0d0d] overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
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
            Capabilities
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Tech <span className="text-[#C4874A]">Stack</span>
          </h2>
          <p className="text-white/40 font-mono text-sm mt-3 max-w-2xl mx-auto">
            Berikut adalah teknologi, framework, dan tools yang biasa saya gunakan dalam pengembangan aplikasi Mobile, Web, AI, dan Desain UI/UX.
          </p>
        </motion.div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-4 bg-[#141414] border border-white/5 hover:border-white/10 p-4 rounded-xl transition-all duration-300 shadow-sm"
            >
              <div className="w-12 h-12 flex-shrink-0 bg-[#1f1f1f] rounded-lg p-2.5 flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={tool.icon} 
                  alt={`${tool.name} logo`} 
                  className="w-full h-full object-contain drop-shadow-sm"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-semibold text-sm">{tool.name}</span>
                <span className="text-white/40 text-xs mt-0.5 font-medium">{tool.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
