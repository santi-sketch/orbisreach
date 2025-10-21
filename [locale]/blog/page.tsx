'use client'

import { motion } from 'framer-motion'
import { Calendar, User, ArrowRight, Tag } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: "El Futuro de la IA en la Industria de la Moda",
    excerpt: "Exploramos cómo la inteligencia artificial está revolucionando el diseño, producción y venta de moda.",
    author: "Santi Climent",
    date: "15 Diciembre 2024",
    category: "Inteligencia Artificial",
    readTime: "5 min",
    image: "/api/placeholder/600/300"
  },
  {
    id: 2,
    title: "Optimización de Inventarios con Machine Learning",
    excerpt: "Descubre cómo reducir costos y mejorar la eficiencia en la gestión de inventarios usando IA.",
    author: "Santi Climent", 
    date: "10 Diciembre 2024",
    category: "Optimización",
    readTime: "7 min",
    image: "/api/placeholder/600/300"
  },
  {
    id: 3,
    title: "Predicción de Tendencias: El Secreto del Éxito",
    excerpt: "Cómo las marcas líderes usan datos y algoritmos para anticipar las próximas tendencias de moda.",
    author: "Santi Climent",
    date: "5 Diciembre 2024", 
    category: "Tendencias",
    readTime: "6 min",
    image: "/api/placeholder/600/300"
  }
]

const categories = [
  "Inteligencia Artificial",
  "Optimización", 
  "Tendencias",
  "E-commerce",
  "Retail"
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Blog de{' '}
            <span className="bg-gradient-to-r from-[#8243f9] to-[#6d35d1] bg-clip-text text-transparent">
              OrbisReach
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Descubre las últimas tendencias en inteligencia artificial aplicada a la moda, 
            retail y e-commerce. Artículos técnicos, casos de éxito y guías prácticas.
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 bg-gray-800 hover:bg-[#8243f9] text-gray-300 hover:text-white rounded-lg transition-colors duration-200"
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-700 transition-colors duration-300 group"
            >
              <div className="h-48 bg-gradient-to-br from-[#8243f9]/20 to-[#6d35d1]/20 flex items-center justify-center">
                <Tag className="h-16 w-16 text-[#8243f9]" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 bg-[#8243f9]/20 text-[#8243f9] text-xs rounded-full">
                    {post.category}
                  </span>
                  <span className="text-gray-400 text-sm">{post.readTime}</span>
                </div>
                
                <h2 className="text-xl font-semibold text-white mb-3 group-hover:text-[#8243f9] transition-colors duration-200">
                  {post.title}
                </h2>
                
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                </div>
                
                <button className="flex items-center gap-2 text-[#8243f9] hover:text-white transition-colors duration-200 group">
                  Leer más
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-[#8243f9]/10 to-[#6d35d1]/10 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Mantente actualizado
          </h3>
          <p className="text-gray-300 mb-6">
            Recibe los últimos artículos sobre IA en moda directamente en tu inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Tu email"
              className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#8243f9] focus:border-transparent text-white placeholder-gray-400"
            />
            <button className="px-6 py-3 bg-[#8243f9] hover:bg-[#6d35d1] text-white rounded-lg transition-colors duration-200">
              Suscribirse
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

