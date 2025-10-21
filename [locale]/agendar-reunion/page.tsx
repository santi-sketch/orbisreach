'use client'

import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'
import { useEffect } from 'react'

export default function AgendarReunionPage() {
  useEffect(() => {
    // Cargar el script de GHL
    const script = document.createElement('script')
    script.src = 'https://link.nexumautomations.com/js/form_embed.js'
    script.type = 'text/javascript'
    script.async = true
    
    // Añadir el script al head
    document.head.appendChild(script)
    
    // Ocultar cualquier CSS que se muestre como texto
    const style = document.createElement('style')
    style.textContent = `
      /* Ocultar cualquier código CSS que se muestre como texto */
      body > *:not(iframe):not(script):not(style) {
        display: none !important;
      }
      /* Asegurar que solo se muestre el contenido de la página */
      #__next, #root, main, [data-reactroot] {
        display: block !important;
      }
    `
    document.head.appendChild(style)
    
    // Limpiar cuando el componente se desmonte
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
      if (document.head.contains(style)) {
        document.head.removeChild(style)
      }
    }
  }, [])
  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="container max-w-3xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            Agenda una{' '}
            <span className="bg-gradient-to-r from-[#8243f9] to-[#6d35d1] bg-clip-text text-transparent">
              Reunión Gratuita
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Reserva 30 minutos para discutir cómo podemos automatizar tu negocio de moda.
          </p>
        </motion.div>

        {/* GHL Embed Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
        >
          {/* GHL Calendar Embed */}
          <div className="w-full overflow-hidden rounded-lg">
            <iframe 
              src="https://link.nexumautomations.com/widget/booking/360ULIwZNVRSoOsl2mST" 
              style={{ width: '100%', border: 'none', overflow: 'hidden' }} 
              scrolling="no" 
              id="360ULIwZNVRSoOsl2mST_1760871062830"
              title="Agendar Reunión"
              className="w-full min-h-[600px] border-0 rounded-lg"
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
