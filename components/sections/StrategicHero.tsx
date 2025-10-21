'use client'

import { motion } from 'framer-motion'
import { Brain } from 'lucide-react'
import Logo from '@/components/ui/Logo'

const subnichos = [
  {
    id: 'retail',
    name: 'Retail',
    description: 'Tienda física + ecommerce',
    icon: '🏪',
    color: 'from-gray-600 to-gray-700'
  },
  {
    id: 'distribuidores',
    name: 'Distribuidores',
    description: 'Mayoristas/showrooms/agents',
    icon: '📦',
    color: 'from-gray-700 to-gray-800'
  },
  {
    id: 'ecommerce',
    name: 'Ecommerce Puro',
    description: 'DNVBs/marketplaces propios',
    icon: '🛒',
    color: 'from-gray-500 to-gray-600'
  },
  {
    id: 'drops',
    name: 'Drops & Sostenibilidad',
    description: 'Lanzamientos limitados y logística circular',
    icon: '🌱',
    color: 'from-gray-800 to-gray-900'
  }
]


export default function StrategicHero() {

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900 pt-20 z-10">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gray-800/90 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-[#8243f9]/30 relative z-10">
              <div className="mr-2">
                <Logo variant="white" size="sm" />
              </div>
              Automatizaciones de IA para Moda
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              El 67% del{' '}
              <span className="bg-gradient-to-r from-[#8243f9] to-[#6d35d1] bg-clip-text text-transparent">
                Tiempo
              </span>
              {' '}de tu Equipo Se Va en Tareas que una{' '}
              <span className="bg-gradient-to-r from-[#8243f9] to-[#6d35d1] bg-clip-text text-transparent">
                IA
              </span>
              {' '}Puede Hacer
            </h1>
            
            <p className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
              Libera a tu equipo de lo repetitivo. Automatiza operaciones para retail, ecommerce y distribución de moda.
            </p>
          </motion.div>


          {/* Subnicho Selector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              ¿Cuál es tu modelo de negocio?
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto px-4">
              {subnichos.map((subnicho) => (
                <motion.a
                  key={subnicho.id}
                  href={`#${subnicho.id}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 rounded-xl border-2 transition-all duration-200 flex flex-col items-center text-center min-h-[140px] justify-center border-white/30 bg-gray-800/90 hover:bg-gray-700/90 hover:border-[#8243f9] relative z-10"
                >
                  <div className="text-2xl mb-2">
                    {subnicho.icon}
                  </div>
                  <h3 className="text-white font-semibold mb-1 text-sm">
                    {subnicho.name}
                  </h3>
                  <p className="text-white/70 text-xs leading-tight">
                    {subnicho.description}
                  </p>
                </motion.a>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
