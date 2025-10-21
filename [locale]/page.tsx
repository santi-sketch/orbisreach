import StrategicHero from '@/components/sections/StrategicHero'
import SubnichoBlocks from '@/components/sections/SubnichoBlocks'
import HowWeWork from '@/components/sections/HowWeWork'
import Testimonials from '@/components/sections/Testimonials'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Contenido principal */}
      <div className="relative" style={{ zIndex: 20 }}>
        <StrategicHero />
        <SubnichoBlocks />
        <HowWeWork />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
      
      {/* Gradiente de fondo que se superpone sobre el contenido */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 15,
          background: `
            radial-gradient(ellipse 1200px 800px at 50% 30%, 
              rgba(130, 67, 249, 0.15) 0%, 
              rgba(109, 53, 209, 0.1) 25%, 
              rgba(88, 28, 135, 0.08) 50%, 
              rgba(45, 0, 90, 0.05) 75%, 
              transparent 100%
            ),
            radial-gradient(ellipse 800px 600px at 30% 70%, 
              rgba(130, 67, 249, 0.08) 0%, 
              rgba(109, 53, 209, 0.05) 30%, 
              transparent 70%
            ),
            radial-gradient(ellipse 600px 400px at 70% 20%, 
              rgba(130, 67, 249, 0.06) 0%, 
              transparent 60%
            ),
            conic-gradient(from 45deg at 50% 40%, 
              transparent 0deg, 
              rgba(130, 67, 249, 0.03) 60deg, 
              rgba(109, 53, 209, 0.05) 120deg, 
              rgba(88, 28, 135, 0.03) 180deg, 
              transparent 240deg, 
              transparent 360deg
            )
          `
        }}
      />
      
      {/* Estrellas de fondo con animación individual */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 10 }}>
        {/* Estrellas grandes - animación lenta */}
        <div className="absolute w-2 h-2 bg-white rounded-full star-twinkle-slow" style={{ top: '30%', left: '10%', animationDelay: '0s' }}></div>
        <div className="absolute w-2 h-2 bg-white rounded-full star-twinkle-slow" style={{ top: '70%', left: '20%', animationDelay: '1.2s' }}></div>
        <div className="absolute w-2 h-2 bg-white rounded-full star-twinkle-slow" style={{ top: '20%', left: '45%', animationDelay: '0.8s' }}></div>
        <div className="absolute w-2 h-2 bg-white rounded-full star-twinkle-slow" style={{ top: '80%', left: '65%', animationDelay: '2.1s' }}></div>
        <div className="absolute w-2 h-2 bg-white rounded-full star-twinkle-slow" style={{ top: '40%', left: '80%', animationDelay: '1.5s' }}></div>
        
        {/* Estrellas medianas - animación normal */}
        <div className="absolute w-1.5 h-1.5 bg-white rounded-full star-twinkle" style={{ top: '15%', left: '25%', animationDelay: '0.3s' }}></div>
        <div className="absolute w-1.5 h-1.5 bg-white rounded-full star-twinkle" style={{ top: '55%', left: '35%', animationDelay: '1.8s' }}></div>
        <div className="absolute w-1.5 h-1.5 bg-white rounded-full star-twinkle" style={{ top: '35%', left: '60%', animationDelay: '0.6s' }}></div>
        <div className="absolute w-1.5 h-1.5 bg-white rounded-full star-twinkle" style={{ top: '75%', left: '85%', animationDelay: '2.4s' }}></div>
        <div className="absolute w-1.5 h-1.5 bg-white rounded-full star-twinkle" style={{ top: '10%', left: '70%', animationDelay: '1.1s' }}></div>
        
        {/* Estrellas pequeñas - animación rápida */}
        <div className="absolute w-1 h-1 bg-white rounded-full star-twinkle-fast" style={{ top: '25%', left: '5%', animationDelay: '0.9s' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full star-twinkle-fast" style={{ top: '65%', left: '15%', animationDelay: '2.2s' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full star-twinkle-fast" style={{ top: '45%', left: '50%', animationDelay: '0.4s' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full star-twinkle-fast" style={{ top: '85%', left: '75%', animationDelay: '1.7s' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full star-twinkle-fast" style={{ top: '5%', left: '90%', animationDelay: '2.7s' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full star-twinkle-fast" style={{ top: '50%', left: '95%', animationDelay: '0.7s' }}></div>
        
        {/* Estrellas adicionales - mezcla de animaciones */}
        <div className="absolute w-1 h-1 bg-white rounded-full star-twinkle" style={{ top: '12%', left: '40%', animationDelay: '1.9s' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full star-twinkle-slow" style={{ top: '60%', left: '55%', animationDelay: '0.2s' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full star-twinkle-fast" style={{ top: '30%', left: '30%', animationDelay: '2.5s' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full star-twinkle" style={{ top: '90%', left: '25%', animationDelay: '1.4s' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full star-twinkle-slow" style={{ top: '8%', left: '60%', animationDelay: '2.8s' }}></div>
        
        {/* Más estrellas para mayor densidad */}
        <div className="absolute w-0.5 h-0.5 bg-white rounded-full star-twinkle-fast" style={{ top: '18%', left: '8%', animationDelay: '1.3s' }}></div>
        <div className="absolute w-0.5 h-0.5 bg-white rounded-full star-twinkle" style={{ top: '42%', left: '12%', animationDelay: '2.6s' }}></div>
        <div className="absolute w-0.5 h-0.5 bg-white rounded-full star-twinkle-slow" style={{ top: '68%', left: '38%', animationDelay: '0.5s' }}></div>
        <div className="absolute w-0.5 h-0.5 bg-white rounded-full star-twinkle-fast" style={{ top: '22%', left: '72%', animationDelay: '1.9s' }}></div>
        <div className="absolute w-0.5 h-0.5 bg-white rounded-full star-twinkle" style={{ top: '88%', left: '42%', animationDelay: '2.3s' }}></div>
        <div className="absolute w-0.5 h-0.5 bg-white rounded-full star-twinkle-slow" style={{ top: '38%', left: '88%', animationDelay: '0.8s' }}></div>
      </div>
    </main>
  )
}
