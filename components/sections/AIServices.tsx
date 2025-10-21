'use client'

import { motion } from 'framer-motion'
import { 
  Brain, 
  BarChart3, 
  ShoppingCart, 
  Target, 
  Zap, 
  Shield,
  ArrowRight,
  CheckCircle,
  Sparkles
} from 'lucide-react'

const services = [
  {
    icon: Brain,
    title: 'Predicción de Tendencias',
    description: 'Analizamos millones de datos de redes sociales, desfiles, influencers y ventas para predecir las próximas tendencias de moda.',
    features: [
      'Análisis de redes sociales en tiempo real',
      'Monitoreo de influencers y celebridades',
      'Análisis de desfiles y fashion weeks',
      'Predicción de colores y estilos',
      'Alertas tempranas de tendencias emergentes',
      'Dashboard interactivo de tendencias'
    ],
    price: 'Desde $2,500/mes',
    popular: false,
    color: 'from-gray-600 to-gray-700'
  },
  {
    icon: BarChart3,
    title: 'Optimización de Inventario',
    description: 'Reduce el exceso de stock y maximiza las ventas con predicciones inteligentes de demanda por producto, talla y color.',
    features: [
      'Predicción de demanda por SKU',
      'Optimización de tallas y colores',
      'Gestión automática de stock',
      'Alertas de reposición inteligente',
      'Análisis de estacionalidad',
      'Integración con sistemas ERP'
    ],
    price: 'Desde $3,500/mes',
    popular: true,
    color: 'from-[#8243f9] to-[#6d35d1]'
  },
  {
    icon: ShoppingCart,
    title: 'Personalización de Experiencia',
    description: 'Crea experiencias de compra únicas con recomendaciones personalizadas basadas en comportamiento, preferencias y historial.',
    features: [
      'Motor de recomendaciones avanzado',
      'Personalización de catálogo',
      'Upselling y cross-selling inteligente',
      'Segmentación dinámica de clientes',
      'A/B testing automatizado',
      'Análisis de customer journey'
    ],
    price: 'Desde $4,000/mes',
    popular: false,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Target,
    title: 'Marketing Inteligente',
    description: 'Optimiza tus campañas de marketing con segmentación avanzada, timing perfecto y mensajes personalizados.',
    features: [
      'Segmentación de audiencia automática',
      'Timing óptimo de campañas',
      'Personalización de mensajes',
      'Predicción de customer lifetime value',
      'Optimización de canales de marketing',
      'ROI tracking en tiempo real'
    ],
    price: 'Desde $2,000/mes',
    popular: false,
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Zap,
    title: 'Automatización de Procesos',
    description: 'Automatiza procesos repetitivos como pricing dinámico, gestión de descuentos y atención al cliente.',
    features: [
      'Pricing dinámico inteligente',
      'Gestión automática de descuentos',
      'Chatbot para atención al cliente',
      'Automatización de emails',
      'Gestión de devoluciones',
      'Workflows personalizables'
    ],
    price: 'Desde $1,500/mes',
    popular: false,
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Shield,
    title: 'Análisis de Competencia',
    description: 'Monitorea a tus competidores y mantente siempre un paso adelante con análisis de precios, productos y estrategias.',
    features: [
      'Monitoreo de precios competitivos',
      'Análisis de productos de la competencia',
      'Tracking de campañas publicitarias',
      'Benchmarking automático',
      'Alertas de cambios estratégicos',
      'Reportes de inteligencia de mercado'
    ],
    price: 'Desde $1,800/mes',
    popular: false,
    color: 'from-gray-700 to-gray-800'
  }
]

const packages = [
  {
    name: 'Starter',
    description: 'Perfecto para pequeñas marcas y startups',
    price: '$5,000',
    period: '/mes',
    features: [
      'Predicción de tendencias básica',
      'Optimización de inventario simple',
      'Dashboard básico',
      'Soporte por email',
      'Hasta 1,000 productos'
    ],
    popular: false,
    color: 'border-gray-200'
  },
  {
    name: 'Professional',
    description: 'Ideal para marcas en crecimiento',
    price: '$12,000',
    period: '/mes',
    features: [
      'Todas las funciones de Starter',
      'Personalización avanzada',
      'Marketing inteligente',
      'Soporte prioritario',
      'Hasta 10,000 productos',
      'Integraciones personalizadas'
    ],
    popular: true,
    color: 'border-purple-500'
  },
  {
    name: 'Enterprise',
    description: 'Para grandes marcas y retailers',
    price: 'Personalizado',
    period: '',
    features: [
      'Todas las funciones incluidas',
      'Desarrollo personalizado',
      'Soporte 24/7',
      'Productos ilimitados',
      'Múltiples marcas',
      'Dedicated account manager'
    ],
    popular: false,
    color: 'border-gray-200'
  }
]

export default function AIServices() {
  return (
    <section className="section-padding bg-gray-900">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Servicios de{' '}
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Inteligencia Artificial
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Soluciones especializadas para cada aspecto de tu negocio de moda, 
            desde predicción de tendencias hasta optimización de inventario.
          </p>
        </motion.div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`card group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-[#8243f9]/30 flex flex-col h-full ${service.popular ? 'ring-2 ring-purple-500' : ''}`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Más Popular
                  </span>
                </div>
              )}
              
              <div className="flex items-center mb-4">
                <div className={`p-3 bg-gradient-to-r ${service.color} rounded-lg group-hover:scale-110 transition-transform duration-200`}>
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-purple-600 font-medium">
                    {service.price}
                  </p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3 mb-6 flex-1">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <motion.a
                href="/agendar-reunion"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-[#8243f9] to-[#6d35d1] hover:from-[#6d35d1] hover:to-[#8243f9] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 mt-auto flex items-center justify-center"
              >
                Agendar Reunión
              </motion.a>
            </motion.div>
          ))}
        </div>
        
        {/* Packages Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-3xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Paquetes de Servicios
            </h3>
            <p className="text-xl text-gray-600">
              Elige el paquete que mejor se adapte a las necesidades de tu marca
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white rounded-2xl p-8 border-2 ${pkg.color} ${pkg.popular ? 'relative scale-105' : ''} flex flex-col h-full`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Recomendado
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">
                    {pkg.name}
                  </h4>
                  <p className="text-gray-600 mb-4">
                    {pkg.description}
                  </p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">
                      {pkg.price}
                    </span>
                    <span className="text-gray-600 ml-1">
                      {pkg.period}
                    </span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 bg-gradient-to-r from-[#8243f9] to-[#6d35d1] hover:from-[#6d35d1] hover:to-[#8243f9] text-white mt-auto">
                  {pkg.name === 'Enterprise' ? 'Contactar Ventas' : 'Comenzar Ahora'}
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
