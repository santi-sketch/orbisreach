'use client'

import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight } from 'lucide-react'

const stats = [
  { number: '10,000+', label: 'Empresas Activas' },
  { number: '50+', label: 'Países' },
  { number: '99.9%', label: 'Uptime' },
  { number: '24/7', label: 'Soporte' },
]

const benefits = [
  'Estrategias personalizadas para cada mercado',
  'Herramientas de analytics avanzadas',
  'Soporte técnico especializado',
  'Integración con las principales plataformas',
  'Capacitación y recursos educativos',
  'Comunidad global de profesionales',
]

export default function About() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Acerca de{' '}
              <span className="gradient-text">OrbisReach</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Somos una plataforma líder en marketing digital global que ayuda a empresas de todos los tamaños 
              a expandir su alcance y conectar con audiencias internacionales. Nuestra misión es democratizar 
              el acceso a herramientas de marketing global de clase mundial.
            </p>
            
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <CheckCircle className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
            
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="btn-primary group"
            >
              Conoce Más
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card text-center"
                >
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-100 rounded-full opacity-50" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary-100 rounded-full opacity-50" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}



