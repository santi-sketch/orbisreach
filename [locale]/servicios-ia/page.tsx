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
  Sparkles
} from 'lucide-react'
import { useTranslations } from 'next-intl'
import Logo from '@/components/ui/Logo'

export default function ServiciosIAPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [particles, setParticles] = useState<Array<{ id: number; left: number; delay: number; duration: number; size: number }>>([])
  const t = useTranslations('services')

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
      title: t('trends.title'),
      description: t('trends.description'),
      features: t.raw('trends.features'),
      price: t('trends.price'),
      popular: false,
      color: 'from-gray-600 to-gray-700'
    },
    {
      icon: BarChart3,
      title: t('inventory.title'),
      description: t('inventory.description'),
      features: t.raw('inventory.features'),
      price: t('inventory.price'),
      popular: true,
      color: 'from-[#8243f9] to-[#6d35d1]'
    },
    {
      icon: ShoppingCart,
      title: t('personalization.title'),
      description: t('personalization.description'),
      features: t.raw('personalization.features'),
      price: t('personalization.price'),
      popular: false,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Target,
      title: t('marketing.title'),
      description: t('marketing.description'),
      features: t.raw('marketing.features'),
      price: t('marketing.price'),
      popular: false,
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Shield,
      title: t('competition.title'),
      description: t('competition.description'),
      features: t.raw('competition.features'),
      price: t('competition.price'),
      popular: false,
      color: 'from-gray-700 to-gray-800'
    },
    {
      icon: Zap,
      title: t('processes.title'),
      description: t('processes.description'),
      features: t.raw('processes.features'),
      price: t('processes.price'),
      popular: false,
      color: 'from-yellow-500 to-orange-500'
    }
  ]

  const packages = [
    {
      name: t('packages.starter.name'),
      description: t('packages.starter.description'),
      price: t('packages.starter.price'),
      period: t('packages.starter.period'),
      features: t.raw('packages.starter.features'),
      popular: false,
      color: 'border-gray-200'
    },
    {
      name: t('packages.professional.name'),
      description: t('packages.professional.description'),
      price: t('packages.professional.price'),
      period: t('packages.professional.period'),
      features: t.raw('packages.professional.features'),
      popular: true,
      color: 'border-purple-500'
    },
    {
      name: t('packages.enterprise.name'),
      description: t('packages.enterprise.description'),
      price: t('packages.enterprise.price'),
      period: t('packages.enterprise.period'),
      features: t.raw('packages.enterprise.features'),
      popular: false,
      color: 'border-gray-200'
    }
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
            {t('title')}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('subtitle')}
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
                    {t('packages.recommended')}
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
                {service.features.map((feature: string, featureIndex: number) => (
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
                {t('schedule')}
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
          className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              {t('packages.title')}
            </h3>
            <p className="text-xl text-gray-300">
              {t('packages.subtitle')}
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
                      {t('packages.recommended')}
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
                  {pkg.features.map((feature: string, featureIndex: number) => (
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
                  {pkg.name === t('packages.enterprise.name') ? t('packages.contactSales') : t('packages.startNow')}
                </motion.a>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Coming Soon Section - adapted to site style */}
        <div className="relative overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8 mt-16 px-4 sm:px-6 lg:px-8">
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
                  <span className="text-white/80 text-sm font-medium tracking-wide">{t('comingSoon.badge')}</span>
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
                  {t('comingSoon.title')}
                </span>
              </h2>

              <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto mb-8">
                {t('comingSoon.subtitle')}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
                {t.raw('comingSoon.features').map((f: any, i: number) => (
                  <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-[#8243f9]/40 transition-all duration-300">
                    <h3 className="text-[#cdb6ff] font-semibold mb-1">{f.title}</h3>
                    <p className="text-gray-400 text-sm">{f.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <a href="/lista-espera" className="group relative inline-flex items-center px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-[#8243f9] to-[#6d35d1] shadow-lg hover:shadow-[#8243f9]/40 transition-all duration-300">
                  <span className="relative z-10">{t('comingSoon.cta')}</span>
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