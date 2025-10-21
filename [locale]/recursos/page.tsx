'use client'

import { motion } from 'framer-motion'
import { 
  BookOpen, 
  Download, 
  Play, 
  FileText, 
  Users, 
  Calendar,
  ExternalLink,
  ArrowRight
} from 'lucide-react'

const resources = [
  {
    type: 'Guía',
    title: 'Guía Completa de IA para Moda',
    description: 'Aprende cómo implementar inteligencia artificial en tu negocio de moda paso a paso',
    icon: BookOpen,
    downloadCount: '2.5k',
    size: '45 páginas',
    category: 'Guías'
  },
  {
    type: 'Webinar',
    title: 'El Futuro del Retail con IA',
    description: 'Descubre las tendencias más importantes en retail inteligente para 2024',
    icon: Play,
    duration: '45 min',
    date: '15 Ene 2024',
    category: 'Webinars'
  },
  {
    type: 'Template',
    title: 'Plantilla de Análisis de Competencia',
    description: 'Herramienta para analizar y monitorear a tus competidores con IA',
    icon: FileText,
    downloadCount: '1.8k',
    format: 'Excel',
    category: 'Templates'
  },
  {
    type: 'Guía',
    title: 'Optimización de Inventario con IA',
    description: 'Reduce costos y maximiza ventas con técnicas avanzadas de predicción',
    icon: BookOpen,
    downloadCount: '3.2k',
    size: '32 páginas',
    category: 'Guías'
  },
  {
    type: 'Webinar',
    title: 'Personalización en Ecommerce',
    description: 'Cómo aumentar conversiones con recomendaciones inteligentes',
    icon: Play,
    duration: '38 min',
    date: '22 Ene 2024',
    category: 'Webinars'
  },
  {
    type: 'Template',
    title: 'Dashboard de Métricas de IA',
    description: 'Plantilla para medir el ROI de tus implementaciones de IA',
    icon: FileText,
    downloadCount: '1.5k',
    format: 'PowerBI',
    category: 'Templates'
  }
]

const categories = ['Todos', 'Guías', 'Webinars', 'Templates']

export default function RecursosPage() {
  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Centro de{' '}
            <span className="bg-gradient-to-r from-[#8243f9] to-[#6d35d1] bg-clip-text text-transparent">
              Recursos
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Guías, webinars, plantillas y herramientas para impulsar tu negocio de moda con IA
          </p>
        </motion.div>

        {/* Categories Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                category === 'Todos'
                  ? 'bg-gradient-to-r from-[#8243f9] to-[#6d35d1] text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Resources Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#8243f9] to-[#6d35d1] rounded-lg flex items-center justify-center">
                  <resource.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs bg-white/10 text-gray-300 px-3 py-1 rounded-full">
                  {resource.category}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#8243f9] transition-colors">
                {resource.title}
              </h3>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                {resource.description}
              </p>
              
              <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                <div className="flex items-center space-x-4">
                  {resource.downloadCount && (
                    <span className="flex items-center">
                      <Download className="w-4 h-4 mr-1" />
                      {resource.downloadCount}
                    </span>
                  )}
                  {resource.duration && (
                    <span className="flex items-center">
                      <Play className="w-4 h-4 mr-1" />
                      {resource.duration}
                    </span>
                  )}
                  {resource.size && <span>{resource.size}</span>}
                  {resource.format && <span>{resource.format}</span>}
                </div>
                {resource.date && <span>{resource.date}</span>}
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-[#8243f9] to-[#6d35d1] hover:from-[#6d35d1] hover:to-[#8243f9] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center"
              >
                {resource.type === 'Webinar' ? 'Ver Webinar' : 'Descargar'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-[#8243f9]/20 to-[#6d35d1]/20 backdrop-blur-sm rounded-2xl p-8 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Mantente Actualizado
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Recibe las últimas guías, webinars y recursos directamente en tu bandeja de entrada. 
            Solo contenido de valor, sin spam.
          </p>
          
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Tu email"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-[#8243f9] focus:border-transparent text-white placeholder-gray-400"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#8243f9] to-[#6d35d1] hover:from-[#6d35d1] hover:to-[#8243f9] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200"
            >
              Suscribirse
            </motion.button>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-[#8243f9] mb-2">15K+</div>
            <div className="text-gray-300">Descargas Totales</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#8243f9] mb-2">50+</div>
            <div className="text-gray-300">Recursos Disponibles</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#8243f9] mb-2">95%</div>
            <div className="text-gray-300">Satisfacción de Usuarios</div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

