'use client'

import { motion } from 'framer-motion'
import { CheckCircle, X, Star, ArrowRight, Sparkles, Zap, Crown } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    description: 'Perfecto para pequeñas marcas y startups',
    price: '$5,000',
    period: '/mes',
    icon: Zap,
    color: 'from-blue-500 to-cyan-500',
    popular: false,
    features: [
      'Predicción de tendencias básica',
      'Optimización de inventario simple',
      'Dashboard básico con métricas clave',
      'Soporte por email (24-48h)',
      'Hasta 1,000 productos',
      'Integración con Shopify/WooCommerce',
      'Reportes mensuales',
      '1 usuario incluido'
    ],
    limitations: [
      'Sin personalización avanzada',
      'Sin soporte telefónico',
      'Sin integraciones personalizadas'
    ],
    cta: 'Comenzar Prueba Gratuita',
    trial: '14 días gratis'
  },
  {
    name: 'Professional',
    description: 'Ideal para marcas en crecimiento',
    price: '$12,000',
    period: '/mes',
    icon: Star,
    color: 'from-purple-500 to-pink-500',
    popular: true,
    features: [
      'Todas las funciones de Starter',
      'Predicción de tendencias avanzada',
      'Personalización de experiencia completa',
      'Marketing inteligente automatizado',
      'Soporte prioritario (4-8h)',
      'Hasta 10,000 productos',
      'Integraciones personalizadas',
      'Hasta 5 usuarios',
      'Reportes en tiempo real',
      'Análisis de competencia básico',
      'API completa',
      'Capacitación incluida'
    ],
    limitations: [
      'Sin desarrollo personalizado',
      'Sin soporte 24/7'
    ],
    cta: 'Comenzar Prueba Gratuita',
    trial: '14 días gratis'
  },
  {
    name: 'Enterprise',
    description: 'Para grandes marcas y retailers',
    price: 'Personalizado',
    period: '',
    icon: Crown,
    color: 'from-yellow-500 to-orange-500',
    popular: false,
    features: [
      'Todas las funciones incluidas',
      'Desarrollo personalizado',
      'Soporte 24/7 con dedicated manager',
      'Productos ilimitados',
      'Múltiples marcas y regiones',
      'Integraciones complejas',
      'Usuarios ilimitados',
      'Análisis de competencia avanzado',
      'Consultoría estratégica',
      'SLA garantizado',
      'Onboarding personalizado',
      'Capacitación avanzada'
    ],
    limitations: [],
    cta: 'Contactar Ventas',
    trial: 'Demo personalizada'
  }
]

export default function Pricing() {
  return (
    <section className="section-padding">
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
            Precios{' '}
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Transparentes
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Elige el plan que mejor se adapte a las necesidades de tu marca. 
            Todos los planes incluyen prueba gratuita de 14 días.
          </p>
        </motion.div>
        
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-3xl p-8 border-2 ${
                plan.popular 
                  ? 'border-purple-500 scale-105 shadow-2xl' 
                  : 'border-gray-200 hover:border-purple-300'
              } transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Sparkles className="h-4 w-4 mr-2" />
                    Más Popular
                  </span>
                </div>
              )}
              
              {/* Plan Header */}
              <div className="text-center mb-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <plan.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 ml-1">
                    {plan.period}
                  </span>
                </div>
                <div className="text-sm text-purple-600 font-medium">
                  {plan.trial}
                </div>
              </div>
              
              {/* Features */}
              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 mb-4">
                  Incluye:
                </h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                {plan.limitations.length > 0 && (
                  <div className="mt-6">
                    <h4 className="font-semibold text-gray-900 mb-4">
                      No incluye:
                    </h4>
                    <ul className="space-y-3">
                      {plan.limitations.map((limitation, limitationIndex) => (
                        <li key={limitationIndex} className="flex items-start">
                          <X className="h-5 w-5 text-red-400 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-500 text-sm">
                            {limitation}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              
              {/* CTA Button */}
              <button className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-200 ${
                plan.popular
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                  : plan.name === 'Enterprise'
                  ? 'bg-gray-900 text-white hover:bg-gray-800'
                  : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
              }`}>
                {plan.cta}
                <ArrowRight className="ml-2 h-4 w-4 inline" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}