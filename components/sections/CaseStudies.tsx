'use client'

import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  Users, 
  Package, 
  DollarSign,
  ArrowRight,
  Star,
  CheckCircle
} from 'lucide-react'

const caseStudies = [
  {
    company: 'Fashion Forward',
    industry: 'Fast Fashion',
    logo: 'FF',
    challenge: 'Reducir el exceso de stock y mejorar la predicción de tendencias',
    solution: 'Implementamos nuestro sistema de predicción de tendencias y optimización de inventario',
    results: [
      { metric: '+45%', label: 'Aumento en ventas' },
      { metric: '-70%', label: 'Reducción de stock muerto' },
      { metric: '95%', label: 'Precisión en predicciones' },
      { metric: '+30%', label: 'Mejora en ROI' }
    ],
    testimonial: 'La IA nos ayudó a reducir drásticamente nuestro exceso de stock y a anticipar las tendencias antes que nuestros competidores.',
    author: 'María González',
    role: 'CEO, Fashion Forward',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    color: 'from-pink-500 to-rose-500'
  },
  {
    company: 'Luxury Retail Co',
    industry: 'Luxury Fashion',
    logo: 'LR',
    challenge: 'Personalizar la experiencia de compra para clientes VIP',
    solution: 'Desarrollamos un sistema de personalización avanzado con recomendaciones inteligentes',
    results: [
      { metric: '+60%', label: 'Aumento en conversión' },
      { metric: '+35%', label: 'Mejora en customer lifetime value' },
      { metric: '90%', label: 'Satisfacción del cliente' },
      { metric: '+50%', label: 'Upselling exitoso' }
    ],
    testimonial: 'Nuestros clientes VIP ahora reciben recomendaciones perfectamente personalizadas, lo que ha aumentado significativamente sus compras.',
    author: 'James Wilson',
    role: 'Director de E-commerce, Luxury Retail Co',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    company: 'EcoStyle',
    industry: 'Sustainable Fashion',
    logo: 'ES',
    challenge: 'Optimizar la cadena de suministro sostenible',
    solution: 'Implementamos IA para optimizar la producción y reducir el desperdicio',
    results: [
      { metric: '-40%', label: 'Reducción de desperdicio' },
      { metric: '+25%', label: 'Eficiencia en producción' },
      { metric: '85%', label: 'Precisión en demanda' },
      { metric: '+20%', label: 'Margen de beneficio' }
    ],
    testimonial: 'La IA nos permitió ser más sostenibles y eficientes, reduciendo el desperdicio mientras aumentábamos la rentabilidad.',
    author: 'Anna Schmidt',
    role: 'Founder, EcoStyle',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    color: 'from-green-500 to-emerald-500'
  }
]

const industries = [
  {
    name: 'Fast Fashion',
    clients: '150+',
    avgImprovement: '+40%',
    icon: '⚡'
  },
  {
    name: 'Luxury Fashion',
    clients: '80+',
    avgImprovement: '+55%',
    icon: '💎'
  },
  {
    name: 'Sustainable Fashion',
    clients: '60+',
    avgImprovement: '+35%',
    icon: '🌱'
  },
  {
    name: 'E-commerce',
    clients: '200+',
    avgImprovement: '+45%',
    icon: '🛒'
  },
  {
    name: 'Retail Chains',
    clients: '120+',
    avgImprovement: '+50%',
    icon: '🏪'
  },
  {
    name: 'Fashion Startups',
    clients: '100+',
    avgImprovement: '+60%',
    icon: '🚀'
  }
]

export default function CaseStudies() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Casos de{' '}
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Éxito
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre cómo marcas líderes en moda han transformado sus negocios 
            con nuestras soluciones de inteligencia artificial.
          </p>
        </motion.div>
        
        {/* Case Studies */}
        <div className="space-y-16 mb-20">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div>
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${study.color} rounded-2xl flex items-center justify-center text-white font-bold text-xl mr-4`}>
                      {study.logo}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {study.company}
                      </h3>
                      <p className="text-gray-600">
                        {study.industry}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Desafío:
                    </h4>
                    <p className="text-gray-600 mb-4">
                      {study.challenge}
                    </p>
                    
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Solución:
                    </h4>
                    <p className="text-gray-600">
                      {study.solution}
                    </p>
                  </div>
                  
                  {/* Results */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-gray-900 mb-1">
                          {result.metric}
                        </div>
                        <div className="text-sm text-gray-600">
                          {result.label}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Testimonial */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 italic mb-4">
                      "{study.testimonial}"
                    </p>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {study.author}
                      </div>
                      <div className="text-sm text-gray-600">
                        {study.role}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Right Content - Image */}
                <div className="relative">
                  <div className="aspect-square rounded-2xl overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.company}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="text-2xl font-bold mb-2">
                      {study.company}
                    </div>
                    <div className="text-white/80">
                      {study.industry}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Industries Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-purple-900 to-pink-900 rounded-3xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Sectores que Confían en Nosotros
            </h3>
            <p className="text-xl text-white/80">
              Más de 700 marcas de moda han transformado sus negocios con nuestras soluciones
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl mb-4">
                  {industry.icon}
                </div>
                <div className="text-white font-semibold mb-2">
                  {industry.name}
                </div>
                <div className="text-white/70 text-sm mb-1">
                  {industry.clients} clientes
                </div>
                <div className="text-green-400 text-sm font-medium">
                  {industry.avgImprovement} mejora promedio
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}


