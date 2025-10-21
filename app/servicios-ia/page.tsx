'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { 
  Brain, 
  BarChart3, 
  ShoppingCart, 
  Target, 
  Shield,
  Zap,
  ArrowRight,
  CheckCircle,
  Sparkles,
  MessageCircle,
  Star,
  Quote
} from 'lucide-react'
import Logo from '@/components/ui/Logo'

export default function ServiciosIAPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [particles, setParticles] = useState<Array<{ id: number; left: number; delay: number; duration: number; size: number }>>([])

  useEffect(() => {
    setIsVisible(true)
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 3 + Math.random() * 2,
      size: 2 + Math.random() * 3,
    }))
    setParticles(newParticles)
  }, [])

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
        'Optimización de canales de marketing',
        'ROI tracking en tiempo real'
      ],
      price: 'Desde $2,000/mes',
      popular: false,
      color: 'from-green-500 to-emerald-500'
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
    },
    {
      icon: Zap,
      title: 'Procesos',
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
    }
  ]

  const packages = [
    {
      name: 'Starter',
      description: 'Perfecto para pequeñas marcas y startups',
      price: '$5,000',
      period: '/mes',
      features: [
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

  const testimonials = [
    {
      content: 'La IA nos ayudó a reducir drásticamente nuestro exceso de stock y a anticipar las tendencias antes que nuestros competidores. Increíble.',
      rating: 5,
    },
    {
      content: 'Nuestros clientes VIP ahora reciben recomendaciones perfectamente personalizadas. Las ventas aumentaron un 60% en solo 3 meses.',
      rating: 5,
    },
    {
      content: 'La IA nos permitió ser más sostenibles y eficientes, reduciendo el desperdicio mientras aumentábamos la rentabilidad un 25%.',
      rating: 5,
    },
  ]

  const faqs = [
    {
      question: '¿Cuánto tiempo toma ver resultados?',
      answer: 'La mayoría de nuestros clientes ven resultados significativos en las primeras 4-6 semanas, con mejoras continuas a lo largo del tiempo.',
    },
    {
      question: '¿Ofrecen soporte en español?',
      answer: 'Sí, nuestro equipo de soporte está disponible en español, inglés y otros idiomas para atender a clientes globales.',
    },
    {
      question: '¿Puedo cancelar mi suscripción en cualquier momento?',
      answer: 'Absolutamente. No hay contratos de permanencia y puedes cancelar tu suscripción cuando lo desees.',
    },
    {
      question: '¿Trabajan con empresas de todos los tamaños?',
      answer: 'Sí, desde startups hasta grandes retailers. Nuestras soluciones se adaptan a las necesidades específicas de cada empresa.',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Servicios de Inteligencia Artificial
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Soluciones especializadas para cada aspecto de tu negocio de moda, desde predicción de tendencias hasta optimización de inventario.
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
              className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-[#8243f9]/30 flex flex-col h-full ${service.popular ? 'ring-2 ring-purple-500' : ''}`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Recomendado
                  </span>
                </div>
              )}
              
              <div className="flex items-center mb-4">
                <div className={`p-3 bg-gradient-to-r ${service.color} rounded-lg group-hover:scale-110 transition-transform duration-200`}>
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="text-[#8243f9] font-medium">
                    {service.price}
                  </p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3 mb-6 flex-1">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-sm text-gray-300">
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
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 lg:p-12 mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Paquetes de Servicios
            </h3>
            <p className="text-xl text-gray-300">
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
                
                <motion.a
                  href="/agendar-reunion"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-[#8243f9] to-[#6d35d1] hover:from-[#6d35d1] hover:to-[#8243f9] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 mt-auto flex items-center justify-center"
                >
                  {pkg.name === 'Enterprise' ? 'Contactar Ventas' : 'Comenzar Ahora'}
                </motion.a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Lo que dicen las{' '}
            <span className="bg-gradient-to-r from-[#8243f9] to-[#6d35d1] bg-clip-text text-transparent">marcas de moda</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Más de 500 marcas de moda confían en nuestras soluciones de IA. 
            Descubre cómo han transformado sus negocios.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-[#8243f9] mb-4" />
                <p className="text-gray-300 italic">
                  "{testimonial.content}"
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 lg:p-12 mb-20"
        >
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center justify-center">
            <MessageCircle className="h-8 w-8 text-[#8243f9] mr-3" />
            Preguntas Frecuentes
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border-b border-white/10 pb-6 last:border-b-0"
              >
                <h4 className="font-semibold text-white mb-3 text-lg">
                  {faq.question}
                </h4>
                <p className="text-gray-300">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Coming Soon Section */}
        <div className="relative overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div className={`min-h-[420px] bg-gradient-to-br from-gray-900 via-[#2a1f3f] to-gray-900 rounded-3xl border border-white/10 backdrop-blur-xl flex items-center justify-center p-6 sm:p-10 relative ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-700`}>
            {/* floating particles */}
            {particles.map((p) => (
              <div
                key={p.id}
                className="absolute rounded-full bg-[#8243f9] opacity-20"
                style={{
                  left: `${p.left}%`,
                  bottom: '-20px',
                  width: `${p.size}px`,
                  height: `${p.size}px`,
                  animation: `float ${p.duration}s ease-in-out ${p.delay}s infinite`,
                }}
              />
            ))}

            {/* subtle grid */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5" />

            <div className="relative z-10 w-full max-w-5xl text-center">
              <div className="flex justify-center mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#8243f9]/20 to-[#6d35d1]/20 border border-[#8243f9]/30 backdrop-blur-sm">
                  <div className="w-2 h-2 rounded-full bg-[#8243f9] animate-pulse" />
                  <span className="text-white/80 text-sm font-medium tracking-wide">Próximamente disponible</span>
                </div>
              </div>

              {/* icon highlight */}
              <div className="flex justify-center mb-6">
                <div className="relative p-1">
                  <Logo variant="white" size="lg" />
                </div>
              </div>

              <h2 className="text-3xl sm:text-5xl font-bold mb-4 leading-tight">
                <span className="bg-gradient-to-r from-white via-[#e5d9ff] to-[#d4c7ff] bg-clip-text text-transparent">
                  Tu propia IA personalizada integrada en tu sistema
                </span>
              </h2>

              <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto mb-8">
                Una inteligencia artificial única, entrenada con tus datos y procesos, e integrada sin fricciones con tus sistemas actuales.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-[#8243f9]/40 transition-all duration-300">
                  <h3 className="text-[#cdb6ff] font-semibold mb-1">100% Personalizada</h3>
                  <p className="text-gray-400 text-sm">Entrenada con tus datos</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-[#8243f9]/40 transition-all duration-300">
                  <h3 className="text-[#cdb6ff] font-semibold mb-1">Integración Total</h3>
                  <p className="text-gray-400 text-sm">Compatibilidad con tus sistemas</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-[#8243f9]/40 transition-all duration-300">
                  <h3 className="text-[#cdb6ff] font-semibold mb-1">Sin Límites</h3>
                  <p className="text-gray-400 text-sm">Escalable y adaptable</p>
                </div>
              </div>

              <div className="mt-8">
                <a href="/lista-espera" className="group relative inline-flex items-center px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-[#8243f9] to-[#6d35d1] shadow-lg hover:shadow-[#8243f9]/40 transition-all duration-300">
                  <span className="relative z-10">Únete a la lista de espera</span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#b38aff] to-[#9ea3ff] blur opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
                </a>
              </div>
            </div>

            {/* decorative icons */}
            <div className="absolute top-6 right-6 opacity-20">
              <Sparkles className="w-7 h-7 text-[#cdb6ff] animate-spin" style={{ animationDuration: '10s' }} />
            </div>
            <div className="absolute bottom-6 left-6 opacity-20">
              <Zap className="w-6 h-6 text-[#9cc3ff] animate-bounce" style={{ animationDelay: '0.5s' }} />
            </div>

            {/* styles */}
            <style jsx>{`
              @keyframes float {
                0%, 100% { transform: translateY(0) translateX(0); }
                50% { transform: translateY(-100vh) translateX(20px); }
              }
              @keyframes gradient {
                0%, 100% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
              }
              .animate-gradient { background-size: 200% 200%; animation: gradient 3s ease infinite; }
              .bg-grid-pattern { background-image: linear-gradient(rgba(130,67,249,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(130,67,249,0.1) 1px, transparent 1px); background-size: 50px 50px; }
            `}</style>
          </div>
        </div>
      </div>
    </div>
  )
}