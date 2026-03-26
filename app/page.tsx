import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { PhilosophySection } from "@/components/philosophy-section"
import { QualitySection } from "@/components/quality-section"
import { InfrastructureSection } from "@/components/infrastructure-section"
import { CalculatorSection } from "@/components/calculator-section"
import { ApplicationForm } from "@/components/application-form"
import { GallerySection } from "@/components/gallery-section"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <PhilosophySection />
        <QualitySection />
        <InfrastructureSection />
        <CalculatorSection />
        <GallerySection />
        <ApplicationForm />
      </main>
      <SiteFooter />
    </>
  )
}
