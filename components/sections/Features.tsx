'use client'

import { motion } from 'framer-motion'
import { Globe, Target, TrendingUp, Users, Shield, Zap } from 'lucide-react'

const features = [
  {
    icon: Globe,
    title: 'Alcance Global',
    description: 'Conecta con audiencias en más de 50 países con estrategias localizadas.',
  },
  {
    icon: Target,
    title: 'Segmentación Precisa',
    description: 'Llega a tu audiencia ideal con herramientas avanzadas de targeting.',
  },
  {
    icon: TrendingUp,
    title: 'Crecimiento Medible',
    description: 'Mide y optimiza tus resultados con analytics en tiempo real.',
  },
  {
    icon: Users,
    title: 'Comunidad Activa',
    description: 'Únete a una red de más de 10,000 profesionales y empresas.',
  },
  {
    icon: Shield,
    title: 'Seguridad Garantizada',
    description: 'Protege tus datos con los más altos estándares de seguridad.',
  },
  {
    icon: Zap,
    title: 'Implementación Rápida',
    description: 'Comienza a ver resultados en menos de 24 horas.',
  },
]

export default function Features() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            ¿Por qué elegir{' '}
            <span className="gradient-text">OrbisReach</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos las herramientas y estrategias más avanzadas para expandir tu negocio globalmente.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary-100 rounded-lg group-hover:bg-primary-200 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}



