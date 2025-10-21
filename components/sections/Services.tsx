'use client'

import { motion } from 'framer-motion'
import { 
  Search, 
  Megaphone, 
  BarChart3, 
  Users, 
  Globe, 
  MessageSquare,
  ArrowRight 
} from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'SEO Global',
    description: 'Optimización para motores de búsqueda en múltiples idiomas y mercados.',
    features: ['Keywords research', 'Content optimization', 'Link building', 'Local SEO'],
    price: 'Desde $299/mes',
  },
  {
    icon: Megaphone,
    title: 'Marketing Digital',
    description: 'Campañas publicitarias efectivas en las principales plataformas digitales.',
    features: ['Google Ads', 'Facebook Ads', 'LinkedIn Ads', 'Analytics'],
    price: 'Desde $499/mes',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Insights',
    description: 'Análisis detallado del rendimiento y optimización continua.',
    features: ['Dashboard personalizado', 'Reportes automáticos', 'KPIs tracking', 'ROI analysis'],
    price: 'Desde $199/mes',
  },
  {
    icon: Users,
    title: 'Gestión de Comunidad',
    description: 'Construcción y gestión de comunidades globales para tu marca.',
    features: ['Community management', 'Content creation', 'Engagement strategies', 'Crisis management'],
    price: 'Desde $399/mes',
  },
  {
    icon: Globe,
    title: 'Expansión Internacional',
    description: 'Estrategias personalizadas para entrar en nuevos mercados globales.',
    features: ['Market research', 'Localization', 'Cultural adaptation', 'Partnership development'],
    price: 'Desde $799/mes',
  },
  {
    icon: MessageSquare,
    title: 'Consultoría Estratégica',
    description: 'Asesoramiento experto para maximizar tu presencia global.',
    features: ['Strategy development', 'Competitive analysis', 'Growth planning', 'Training sessions'],
    price: 'Desde $599/mes',
  },
]

export default function Services() {
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
            Nuestros{' '}
            <span className="gradient-text">Servicios</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos una gama completa de servicios para impulsar tu presencia global y conectar con audiencias internacionales.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary-100 rounded-lg group-hover:bg-primary-200 transition-colors">
                  <service.icon className="h-6 w-6 text-primary-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-primary-600 font-medium">
                    {service.price}
                  </p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="w-full btn-primary group">
                Más Información
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            ¿No encuentras lo que buscas? Contáctanos para una consulta personalizada.
          </p>
          <button className="btn-secondary">
            Consulta Personalizada
          </button>
        </motion.div>
      </div>
    </section>
  )
}


