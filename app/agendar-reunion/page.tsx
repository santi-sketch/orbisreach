'use client'

import { motion } from 'framer-motion'
import Logo from '@/components/ui/Logo'
import { useEffect } from 'react'

export default function GHLCalendar() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.type = 'text/javascript'
    script.async = true
    
    const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')
    if (!existingScript) {
      document.body.appendChild(script)
    }

    return () => {
      const scriptToRemove = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')
      if (scriptToRemove) {
        scriptToRemove.remove()
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="container max-w-4xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-6">
            <Logo variant="white" size="lg" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            Agenda una{' '}
            <span className="bg-gradient-to-r from-[#8243f9] to-[#6d35d1] bg-clip-text text-transparent">
              Reunión Gratuita
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Reserva 30 minutos para discutir cómo podemos automatizar tu negocio de moda con IA.
          </p>
        </motion.div>

        {/* Calendly Calendar Embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
        >
          <div className="w-full max-w-5xl mx-auto px-4">
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/santi-orbisreach/appointment?hide_gdpr_banner=1" 
              style={{
                minWidth: '320px', 
                height: '1000px',
                width: '100%'
              }}
            />
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-4">
              ¿Qué esperar en la reunión?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-300">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-[#8243f9] to-[#6d35d1] rounded-full flex items-center justify-center mb-3">
                  <span className="text-white font-bold">1</span>
                </div>
                <h4 className="font-medium text-white mb-2">Análisis de tu negocio</h4>
                <p>Revisamos tus procesos actuales y desafíos específicos</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-[#8243f9] to-[#6d35d1] rounded-full flex items-center justify-center mb-3">
                  <span className="text-white font-bold">2</span>
                </div>
                <h4 className="font-medium text-white mb-2">Oportunidades de IA</h4>
                <p>Identificamos dónde la IA puede generar mayor impacto</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-[#8243f9] to-[#6d35d1] rounded-full flex items-center justify-center mb-3">
                  <span className="text-white font-bold">3</span>
                </div>
                <h4 className="font-medium text-white mb-2">Plan personalizado</h4>
                <p>Te proponemos un roadmap específico para tu empresa</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}