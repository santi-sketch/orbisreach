'use client'

import { motion } from 'framer-motion'
import { Search, Map, Zap, BarChart3, ArrowRight, CheckCircle } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Diagnóstico Express',
    duration: '30-45 min',
    icon: Search,
    description: 'Entendemos tu modelo de negocio, procesos actuales y puntos de fricción.',
    details: [
      'Análisis de tu funnel de ventas actual',
      'Identificación de tareas repetitivas',
      'Mapeo de herramientas y sistemas existentes',
      'Evaluación de oportunidades de automatización'
    ],
    color: 'from-gray-600 to-gray-700'
  },
  {
    number: '02',
    title: 'Roadmap y Quick Win',
    duration: '2-3 semanas',
    icon: Map,
    description: 'Creamos un plan de acción y implementamos la primera automatización.',
    details: [
      'Roadmap personalizado de automatizaciones',
      'Implementación del primer "quick win"',
      'Configuración de conectores seguros',
      'Entrenamiento de asistentes inteligentes'
    ],
    color: 'from-gray-700 to-gray-800'
  },
  {
    number: '03',
    title: 'Escalado por Fases',
    duration: 'Continuo',
    icon: Zap,
    description: 'Expandimos las automatizaciones según tus necesidades y resultados.',
    details: [
      'Nuevas automatizaciones por fases',
      'Optimización basada en datos reales',
      'Integración con nuevas herramientas',
      'Capacitación continua de tu equipo'
    ],
    color: 'from-gray-500 to-gray-600'
  },
  {
    number: '04',
    title: 'Medición y Mejora',
    duration: 'Ongoing',
    icon: BarChart3,
    description: 'Monitoreamos resultados y optimizamos continuamente.',
    details: [
      'Dashboard de KPIs en tiempo real',
      'Reportes mensuales de resultados',
      'Optimización continua de procesos',
      'Soporte y mantenimiento 24/7'
    ],
    color: 'from-[#8243f9] to-[#6d35d1]'
  }
]


export default function HowWeWork() {
  return (
    <section id="how-we-work" className="section-padding bg-gray-900 relative z-10 pt-32">
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
            Cómo{' '}
            <span className="bg-gradient-to-r from-[#8243f9] to-[#6d35d1] bg-clip-text text-transparent">
              Trabajamos
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Un proceso probado que garantiza resultados desde el primer día. 
            Sin sorpresas, solo resultados medibles.
          </p>
        </motion.div>
        
        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-[#8243f9] to-transparent z-0" />
              )}
              
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative z-10 border-2 border-transparent hover:border-[#8243f9]/30">
                {/* Step Number */}
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#8243f9] to-[#6d35d1] rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {step.duration}
                    </p>
                  </div>
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-r from-[#8243f9] to-[#6d35d1] rounded-xl flex items-center justify-center mb-6">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                
                {/* Description */}
                <p className="text-gray-600 mb-6">
                  {step.description}
                </p>
                
                {/* Details */}
                <ul className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        
        
      </div>
    </section>
  )
}
