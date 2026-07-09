import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LenisProvider } from "@/components/lenis-provider"
import ClickSpark from "@/components/click-spark"
import { Toaster } from "@/components/ui/sonner"
import "./globals.css"

const _inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const _jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://arfian-putra-pratama.vercel.app"),
  title: "Arfian Putra Pratama | Software Engineer & AI Enthusiast",
  description: "Portofolio resmi Arfian Putra Pratama, mahasiswa UNESA. Spesialis Mobile App Developer (Flutter), Web Developer (Next.js), dan pemerhati Artificial Intelligence.",
  keywords: [
    "Arfian Putra Pratama",
    "Portofolio Arfian Putra Pratama",
    "UNESA",
    "Universitas Negeri Surabaya",
    "Mahasiswa UNESA",
    "Portofolio IT",
    "Software Engineer Indonesia",
    "Mobile Developer",
    "Flutter Developer",
    "Next.js Developer",
    "AI Developer",
    "AI Enthusiast"
  ],
  authors: [{ name: "Arfian Putra Pratama" }],
  creator: "Arfian Putra Pratama",
  openGraph: {
    title: "Arfian Putra Pratama | IT Portfolio",
    description: "Portofolio Arfian Putra Pratama, mahasiswa UNESA dan Software Engineer spesialis Mobile & Web Development.",
    siteName: "Arfian Putra Pratama Portfolio",
    images: [
      {
        url: "/images/fian.jpeg",
        width: 800,
        height: 600,
        alt: "Arfian Putra Pratama",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#121212",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`} suppressHydrationWarning>
        <ClickSpark
          sparkColor="#C4874A"
          sparkSize={12}
          sparkRadius={20}
          sparkCount={8}
          duration={400}
          easing="ease-out"
        >
          <LenisProvider>{children}</LenisProvider>
        </ClickSpark>
        <Toaster position="bottom-right" richColors />
        <Analytics />
      </body>
    </html>
  )
}
