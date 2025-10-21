import StrategicHero from '@/components/sections/StrategicHero'
import SubnichoBlocks from '@/components/sections/SubnichoBlocks'
import HowWeWork from '@/components/sections/HowWeWork'
import Testimonials from '@/components/sections/Testimonials'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'

export default function HomePage() {
  return (
    <main>
      <StrategicHero />
      <SubnichoBlocks />
      <HowWeWork />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}