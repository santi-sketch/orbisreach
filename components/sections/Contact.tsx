'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    title: '',
    content: 'info@orbisreach.com',
    description: 'Escríbenos cualquier consulta',
  },
  {
    icon: MapPin,
    title: '',
    content: 'Barcelona, España',
    description: '',
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
    answer: 'Sí, desde startups hasta grandes corporaciones. Adaptamos nuestras estrategias según el tamaño y necesidades de cada cliente.',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-gray-900 relative z-10 pt-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            ¿Listo para{' '}
            <span className="bg-gradient-to-r from-[#8243f9] to-[#6d35d1] bg-clip-text text-transparent">comenzar</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Contáctanos hoy mismo y descubre cómo OrbisReach puede transformar tu presencia global.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="card"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Envíanos un mensaje
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Apellido
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="Tu apellido"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  placeholder="tu@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Empresa
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  placeholder="Nombre de tu empresa"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Cuéntanos sobre tu proyecto..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#8243f9] to-[#6d35d1] hover:from-[#6d35d1] hover:to-[#5a2bb8] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 group flex items-center justify-center gap-2"
              >
                <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                Enviar Mensaje
              </button>
            </form>
          </motion.div>
          
          {/* Contact Info & FAQ */}
          <div className="space-y-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Información de contacto
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <div className="p-3 bg-[#8243f9]/10 rounded-lg mr-4">
                      <info.icon className="h-5 w-5 text-[#8243f9]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        {info.title}
                      </h4>
                      <p className="text-[#8243f9] font-medium mb-1">
                        {info.content}
                      </p>
                      <p className="text-sm text-white">
                        {info.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* FAQ */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <MessageCircle className="h-6 w-6 text-[#8243f9] mr-2" />
                Preguntas Frecuentes
              </h3>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={faq.question}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="border-b border-white/20 pb-4 last:border-b-0"
                  >
                    <h4 className="font-semibold text-[#8243f9] mb-2">
                      {faq.question}
                    </h4>
                    <p className="text-white text-sm">
                      {faq.answer}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
