'use client'

import { motion } from 'framer-motion'
import { Clock, DollarSign, Target, TrendingUp, Users, Zap } from 'lucide-react'

const kpis = [
  {
    icon: Clock,
    title: 'Tiempo Ahorrado',
    metric: '-70%',
    description: 'tareas repetitivas de backoffice',
    color: 'from-[#8243f9] to-[#6d35d1]'
  },
  {
    icon: DollarSign,
    title: 'Conversión Mejorada',
    metric: '+15-35%',
    description: 'en campañas de remarketing/reactivación',
    color: 'from-[#8243f9] to-[#6d35d1]'
  },
  {
    icon: Zap,
    title: 'Respuesta Instantánea',
    metric: '<1 min',
    description: 'a leads entrantes (24/7)',
    color: 'from-[#8243f9] to-[#6d35d1]'
  },
  {
    icon: Target,
    title: 'Citas Cualificadas',
    metric: '+20-40%',
    description: 'en lanzamientos/drops',
    color: 'from-[#8243f9] to-[#6d35d1]'
  }
]

const additionalStats = [
  {
    number: '500+',
    label: 'Marcas Atendidas',
    icon: Users
  },
  {
    number: '95%',
    label: 'Precisión en Predicciones',
    icon: TrendingUp
  },
  {
    number: '24/7',
    label: 'Disponibilidad',
    icon: Clock
  },
  {
    number: '50+',
    label: 'Países Cubiertos',
    icon: Target
  }
]

export default function ResultsKPIs() {
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
            Resultados{' '}
            <span className="bg-gradient-to-r from-[#8243f9] to-[#6d35d1] bg-clip-text text-transparent">
              Medibles
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nuestros clientes experimentan mejoras significativas en tiempo, dinero y foco. 
            Sin promesas vacías, solo resultados reales.
          </p>
        </motion.div>
        
        {/* Main KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {kpis.map((kpi, index) => (
            <motion.div
              key={kpi.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center mb-6">
                <div className={`p-4 bg-gradient-to-r ${kpi.color} rounded-xl group-hover:scale-110 transition-transform duration-200`}>
                  <kpi.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              
              <div className="text-4xl font-bold text-white mb-2">
                {kpi.metric}
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-2">
                {kpi.title}
              </h3>
              
              <p className="text-gray-300">
                {kpi.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Datos que Importan
            </h3>
            <p className="text-xl text-white/80">
              Más de 500 marcas confían en nuestras automatizaciones
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {additionalStats.map((stat, index) => (
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
                <div className="text-white/70">
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
