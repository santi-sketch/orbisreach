'use client'

import { motion } from 'framer-motion'
import { 
  Brain, 
  BarChart3, 
  ShoppingBag, 
  Target, 
  Zap, 
  Shield,
  TrendingUp,
  Users,
  Package,
  Eye
} from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'Predicción de Tendencias',
    description: 'Nuestra IA analiza millones de datos de redes sociales, desfiles y ventas para predecir las próximas tendencias de moda.',
    benefits: ['Análisis en tiempo real', 'Precisión del 95%', 'Alertas tempranas'],
    color: 'from-pink-500 to-rose-500'
  },
  {
    icon: BarChart3,
    title: 'Optimización de Inventario',
    description: 'Reduce el exceso de stock y maximiza las ventas con predicciones inteligentes de demanda por producto.',
    benefits: ['-60% stock muerto', 'ROI mejorado', 'Gestión automática'],
    color: 'from-purple-500 to-indigo-500'
  },
  {
    icon: ShoppingBag,
    title: 'Personalización de Experiencia',
    description: 'Crea experiencias de compra únicas con recomendaciones personalizadas basadas en comportamiento del cliente.',
    benefits: ['+40% conversión', 'Mejor retención', 'Upselling inteligente'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Target,
    title: 'Segmentación Avanzada',
    description: 'Identifica y segmenta tu audiencia con precisión para campañas de marketing más efectivas.',
    benefits: ['Audiencias precisas', 'Campañas dirigidas', 'Mejor ROI publicitario'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Zap,
    title: 'Automatización Inteligente',
    description: 'Automatiza procesos repetitivos como pricing dinámico, gestión de descuentos y atención al cliente.',
    benefits: ['Ahorro de tiempo', 'Menos errores', 'Escalabilidad'],
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Shield,
    title: 'Análisis de Competencia',
    description: 'Monitorea a tus competidores y mantente siempre un paso adelante en el mercado.',
    benefits: ['Ventaja competitiva', 'Benchmarking automático', 'Alertas estratégicas'],
    color: 'from-red-500 to-pink-500'
  }
]

const stats = [
  { number: '500+', label: 'Marcas de Moda', icon: TrendingUp },
  { number: '40%', label: 'Aumento Promedio en Ventas', icon: BarChart3 },
  { number: '60%', label: 'Reducción de Stock Muerto', icon: Package },
  { number: '95%', label: 'Precisión en Predicciones', icon: Target },
  { number: '24/7', label: 'Monitoreo Automático', icon: Eye },
  { number: '50+', label: 'Países Cubiertos', icon: Users }
]

export default function FashionFeatures() {
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
            Soluciones de IA para{' '}
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Moda y Retail
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforma tu negocio de moda con las últimas tecnologías de inteligencia artificial 
            diseñadas específicamente para el sector retail y ecommerce.
          </p>
        </motion.div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 bg-gradient-to-r ${feature.color} rounded-lg group-hover:scale-110 transition-transform duration-200`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {feature.description}
              </p>
              
              <ul className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mr-3 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-purple-900 to-pink-900 rounded-3xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Resultados Comprobados
            </h3>
            <p className="text-xl text-white/80">
              Nuestros clientes han experimentado mejoras significativas en sus negocios
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-white/70">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}



