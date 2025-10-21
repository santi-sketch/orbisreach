'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

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

export default function Testimonials() {
  return (
    <section className="section-padding bg-gray-900 relative z-10">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Lo que dicen las{' '}
            <span className="bg-gradient-to-r from-[#8243f9] to-[#6d35d1] bg-clip-text text-transparent">marcas de moda</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Más de 500 marcas de moda confían en nuestras soluciones de IA. 
            Descubre cómo han transformado sus negocios.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/90 backdrop-blur-sm rounded-xl p-6 group hover:bg-gray-700/90 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <Quote className="h-8 w-8 text-[#8243f9]" />
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
