'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Clock, DollarSign, Target, Users, Zap, CheckCircle, TrendingUp } from 'lucide-react'

const subnichoData = [
  {
    id: 'retail',
    title: 'Retail',
    subtitle: 'Tienda física + ecommerce',
    icon: '🏪',
    color: 'from-gray-600 to-gray-700',
    problem: {
      title: 'El Dolor',
      description: 'Picos de demanda, consultas repetidas, inventario y citas descoordinadas. Los clientes esperan respuestas inmediatas pero tu equipo está saturado.',
      points: [
        'Consultas repetidas sobre tallas, colores y disponibilidad',
        'Citas perdidas por falta de seguimiento',
        'Inventario desactualizado en tiempo real',
        'Colas en horas pico frustran a los clientes'
      ]
    },
    solution: {
      title: 'Nuestra Solución',
      description: 'Asistente 24/7 para consultas, reservas y status de pedidos; priorización de clientes VIP; reactivación de carritos y citas no asistidas.',
      features: [
        'Respuestas instantáneas a consultas de producto',
        'Reservas automáticas con confirmación SMS/email',
        'Priorización inteligente de clientes VIP',
        'Reactivación automática de carritos abandonados',
        'Sincronización en tiempo real con inventario',
        'Recordatorios automáticos de citas'
      ]
    },
    impact: {
      title: 'El Impacto',
      description: 'Más ventas en horas pico, menos colas, más citas de alto valor.',
      metrics: [
        { value: '+40%', label: 'Ventas en horas pico' },
        { value: '-60%', label: 'Tiempo en colas' },
        { value: '+35%', label: 'Citas de alto valor' },
        { value: '95%', label: 'Satisfacción del cliente' }
      ]
    }
  },
  {
    id: 'distribuidores',
    title: 'Distribuidores',
    subtitle: 'Mayoristas/showrooms/agents',
    icon: '📦',
    color: 'from-gray-700 to-gray-800',
    problem: {
      title: 'El Dolor',
      description: 'Leads sin seguimiento, cotizaciones lentas, catálogos desactualizados. Los distribuidores pierden oportunidades por falta de respuesta rápida.',
      points: [
        'Leads B2B sin seguimiento sistemático',
        'Cotizaciones que tardan días en generarse',
        'Catálogos desactualizados confunden a clientes',
        'Falta de priorización por valor del cliente'
      ]
    },
    solution: {
      title: 'Nuestra Solución',
      description: 'Respuesta inmediata a consultas B2B, generación de propuestas y disponibilidad al instante, recordatorios y seguimiento multicanal.',
      features: [
        'Respuesta automática a consultas B2B',
        'Generación instantánea de cotizaciones',
        'Catálogo siempre actualizado',
        'Seguimiento multicanal automatizado',
        'Priorización por valor del cliente',
        'Integración con sistemas ERP'
      ]
    },
    impact: {
      title: 'El Impacto',
      description: 'Ciclos de venta más cortos y pedidos mayores por cuenta.',
      metrics: [
        { value: '-50%', label: 'Tiempo de respuesta' },
        { value: '+60%', label: 'Tamaño promedio de pedido' },
        { value: '+45%', label: 'Conversión de leads' },
        { value: '+30%', label: 'Retención de clientes' }
      ]
    }
  },
  {
    id: 'ecommerce',
    title: 'Ecommerce Puro',
    subtitle: 'DNVBs/marketplaces propios',
    icon: '🛒',
    color: 'from-gray-500 to-gray-600',
    problem: {
      title: 'El Dolor',
      description: 'Abandono de carrito, tickets repetidos, saturación en lanzamientos. Los ecommerce pierden ventas por falta de personalización.',
      points: [
        '70% de carritos abandonados sin seguimiento',
        'Tickets de soporte repetitivos',
        'Saturación en lanzamientos de productos',
        'Falta de personalización en la experiencia'
      ]
    },
    solution: {
      title: 'Nuestra Solución',
      description: 'Reactivación inteligente por canal, atención instantánea en PDP/checkout, segmentación por intención/valor, priorización a "ballenas".',
      features: [
        'Reactivación automática de carritos abandonados',
        'Atención instantánea en páginas de producto',
        'Segmentación inteligente por comportamiento',
        'Priorización de clientes de alto valor',
        'Personalización de ofertas en tiempo real',
        'Optimización automática del checkout'
      ]
    },
    impact: {
      title: 'El Impacto',
      description: 'Más conversión y menor coste por adquisición.',
      metrics: [
        { value: '+25%', label: 'Recuperación de carritos' },
        { value: '-40%', label: 'Coste por adquisición' },
        { value: '+30%', label: 'Valor promedio del pedido' },
        { value: '+50%', label: 'Retención de clientes' }
      ]
    }
  },
  {
    id: 'drops',
    title: 'Drops & Sostenibilidad',
    subtitle: 'Lanzamientos limitados y logística circular',
    icon: '🌱',
    color: 'from-[#8243f9] to-[#6d35d1]',
    problem: {
      title: 'El Dolor',
      description: 'Caos en drops, colas virtuales, falta de datos sobre demanda real; logística inversa para sostenibilidad. Los lanzamientos limitados generan frustración.',
      points: [
        'Colas virtuales que colapsan el sitio',
        'Falta de datos sobre demanda real',
        'Logística inversa compleja para sostenibilidad',
        'Experiencia frustrante en lanzamientos'
      ]
    },
    solution: {
      title: 'Nuestra Solución',
      description: 'Lista de espera inteligente, notificaciones just-in-time, verificación de clientes prioritarios, automatización de devoluciones/recogidas.',
      features: [
        'Lista de espera inteligente y ordenada',
        'Notificaciones just-in-time',
        'Verificación automática de clientes prioritarios',
        'Automatización de devoluciones',
        'Gestión de logística inversa',
        'Análisis de demanda en tiempo real'
      ]
    },
    impact: {
      title: 'El Impacto',
      description: 'Sold-outs ordenados, experiencia premium y menos fricción postventa.',
      metrics: [
        { value: '+80%', label: 'Satisfacción en drops' },
        { value: '-70%', label: 'Fricción postventa' },
        { value: '+60%', label: 'Eficiencia logística' },
        { value: '+40%', label: 'Retención post-drop' }
      ]
    }
  }
]

export default function SubnichoBlocks() {
  return (
    <section className="section-padding bg-gray-900 relative z-10">
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
            Soluciones por{' '}
            <span className="bg-gradient-to-r from-[#8243f9] to-[#6d35d1] bg-clip-text text-transparent">
              Subnicho
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cada modelo de negocio tiene sus propios desafíos. 
            Nuestras automatizaciones se adaptan a tu realidad específica.
          </p>
        </motion.div>
        
        {/* Subnicho Blocks */}
        <div className="space-y-20">
          {subnichoData.map((subnicho, index) => (
            <motion.div
              key={subnicho.id}
              id={subnicho.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border-2 border-[#8243f9]/20 hover:border-[#8243f9]/40 transition-all duration-300"
            >
              {/* Subnicho Header */}
              <div className="text-center mb-12">
                <motion.div 
                  className="text-6xl mb-4 inline-block cursor-pointer relative group"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: [0, -5, 5, -5, 0],
                    transition: { duration: 0.8, ease: "easeInOut" }
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ 
                    scale: 1, 
                    opacity: 1,
                    transition: { duration: 0.6, delay: index * 0.1 }
                  }}
                  viewport={{ once: true }}
                  animate={{
                    scale: [1, 1.05, 1],
                    transition: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                >
                  <div className="relative">
                    {subnicho.icon}
                    {/* Efecto de brillo en hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm scale-110">
                      {subnicho.icon}
                    </div>
                    {/* Efecto de sombra dinámica */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-all duration-300 blur-md scale-125 -z-10">
                      {subnicho.icon}
                    </div>
                  </div>
                </motion.div>
                <h3 className="text-3xl font-bold text-white mb-2">
                  {subnicho.title}
                </h3>
                <p className="text-xl text-gray-300">
                  {subnicho.subtitle}
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Problem */}
                <div className="lg:col-span-1">
                  <div className="bg-red-50 rounded-2xl p-6 h-full">
                    <h4 className="text-xl font-bold text-red-800 mb-4 flex items-center">
                      <Target className="h-5 w-5 mr-2" />
                      {subnicho.problem.title}
                    </h4>
                    <p className="text-red-700 mb-4">
                      {subnicho.problem.description}
                    </p>
                    <ul className="space-y-2">
                      {subnicho.problem.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start text-red-600 text-sm">
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Solution */}
                <div className="lg:col-span-1">
                  <motion.a
                    href="/diagnostico-express"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="block bg-gradient-to-br from-[#8243f9]/10 to-[#6d35d1]/10 rounded-2xl p-6 h-full cursor-pointer hover:from-[#8243f9]/20 hover:to-[#6d35d1]/20 transition-all duration-300 hover:shadow-lg border-2 border-transparent hover:border-[#8243f9]/40 group flex flex-col"
                  >
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-[#8243f9] mb-4 flex items-center group-hover:text-[#6d35d1] transition-colors">
                        <Zap className="h-5 w-5 mr-2" />
                        {subnicho.solution.title}
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </h4>
                      <p className="text-[#8243f9]/80 mb-4 group-hover:text-[#8243f9] transition-colors">
                        {subnicho.solution.description}
                      </p>
                      <ul className="space-y-2">
                        {subnicho.solution.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start text-[#8243f9]/70 text-sm group-hover:text-[#8243f9] transition-colors">
                            <CheckCircle className="h-4 w-4 text-[#8243f9] mr-3 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-4 text-center">
                      <span className="text-[#8243f9] font-medium text-sm group-hover:text-[#6d35d1] transition-colors">
                        Haz clic para obtener tu diagnóstico personalizado →
                      </span>
                    </div>
                  </motion.a>
                </div>
                
                {/* Impact */}
                <div className="lg:col-span-1">
                  <div className="bg-green-50 rounded-2xl p-6 h-full">
                    <h4 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                      <TrendingUp className="h-5 w-5 mr-2" />
                      {subnicho.impact.title}
                    </h4>
                    <p className="text-green-700 mb-4">
                      {subnicho.impact.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {subnicho.impact.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="text-center">
                          <div className="text-2xl font-bold text-green-800 mb-1">
                            {metric.value}
                          </div>
                          <div className="text-green-600 text-sm">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
