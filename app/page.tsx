import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { FlavorCarousel } from "@/components/flavor-carousel"
import { BentoGrid } from "@/components/bento-grid"
import { TechStackSection } from "@/components/tech-stack-section"
import { ProjectsSection } from "@/components/projects-section"
import { CertificatesSection } from "@/components/certificates-section"
import { SocialSection } from "@/components/social-section"
import { Footer } from "@/components/footer"
import { ClientsSection } from "@/components/clients-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FlavorCarousel />
      <BentoGrid />
      <TechStackSection />
      <ProjectsSection />
      <ClientsSection />
      <CertificatesSection />
      <SocialSection />
      <Footer />
    </main>
  )
}

