'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, User, ArrowRight, Tag } from 'lucide-react'
import Logo from '@/components/ui/Logo'

const blogPosts = [
  {
    id: 1,
    title: 'Cómo la IA está Revolucionando la Industria de la Moda',
    excerpt: 'Descubre las últimas tendencias en inteligencia artificial aplicada al retail y cómo está transformando la forma en que las marcas entienden a sus clientes.',
    author: 'Equipo OrbisReach',
    date: '2024-01-15',
    category: 'Tendencias',
    readTime: '5 min',
    image: '/api/placeholder/400/250',
  },
  {
    id: 2,
    title: 'Predicción de Tendencias: El Futuro del Retail',
    excerpt: 'Exploramos cómo los algoritmos de machine learning pueden anticipar las próximas tendencias de moda con una precisión nunca antes vista.',
    author: 'Equipo OrbisReach',
    date: '2024-01-10',
    category: 'IA',
    readTime: '7 min',
    image: '/api/placeholder/400/250',
  },
  {
    id: 3,
    title: 'Optimización de Inventario con Inteligencia Artificial',
    excerpt: 'Aprende cómo reducir el exceso de stock y maximizar las ventas utilizando algoritmos de predicción de demanda avanzados.',
    author: 'Equipo OrbisReach',
    date: '2024-01-05',
    category: 'Optimización',
    readTime: '6 min',
    image: '/api/placeholder/400/250',
  },
  {
    id: 4,
    title: 'Personalización en E-commerce: Casos de Éxito',
    excerpt: 'Analizamos casos reales de empresas que han implementado sistemas de recomendación personalizada y los resultados obtenidos.',
    author: 'Equipo OrbisReach',
    date: '2024-01-01',
    category: 'Casos de Estudio',
    readTime: '8 min',
    image: '/api/placeholder/400/250',
  },
]

const categories = ['Todas', 'Tendencias', 'IA', 'Optimización', 'Casos de Estudio']

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('Todas')

  // Filtrar artículos basado en la categoría seleccionada
  const filteredPosts = selectedCategory === 'Todas' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

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
          <div className="flex justify-center mb-6">
            <Logo variant="white" size="lg" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Blog de{' '}
            <span className="bg-gradient-to-r from-[#8243f9] to-[#6d35d1] bg-clip-text text-transparent">
              OrbisReach
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Descubre las últimas tendencias en IA para moda y retail, casos de éxito y consejos prácticos para transformar tu negocio.
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-200 ${
                category === selectedCategory
                  ? 'bg-gradient-to-r from-[#8243f9] to-[#6d35d1] text-white'
                  : 'bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white'
              }`}
            >
              <Tag className="h-4 w-4 inline mr-2" />
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Results Counter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-center mb-8"
        >
          <p className="text-gray-300">
            {selectedCategory === 'Todas' 
              ? `Mostrando todos los artículos (${filteredPosts.length})`
              : `Mostrando artículos de "${selectedCategory}" (${filteredPosts.length})`
            }
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-[#8243f9]/20 to-[#6d35d1]/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#8243f9] to-[#6d35d1] rounded-full flex items-center justify-center mx-auto mb-2">
                    <ArrowRight className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-white/60 text-sm">Imagen del artículo</p>
                </div>
              </div>

              <div className="p-6">
                {/* Category */}
                <div className="flex items-center mb-3">
                  <span className="px-3 py-1 bg-[#8243f9]/20 text-[#8243f9] text-sm rounded-full">
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-[#8243f9] transition-colors duration-200">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(post.date).toLocaleDateString('es-ES')}
                  </div>
                </div>

                {/* Read Time */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">{post.readTime} de lectura</span>
                  <motion.a
                    href={`/blog/${post.id}`}
                    whileHover={{ x: 5 }}
                    className="text-[#8243f9] hover:text-white transition-colors duration-200 flex items-center"
                  >
                    Leer más <ArrowRight className="h-4 w-4 ml-1" />
                  </motion.a>
                </div>
              </div>
            </motion.article>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center py-16"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-[#8243f9]/20 to-[#6d35d1]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Tag className="h-8 w-8 text-[#8243f9]" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              No hay artículos en esta categoría
            </h3>
            <p className="text-gray-400 mb-6">
              Pronto agregaremos más contenido en la categoría "{selectedCategory}".
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory('Todas')}
              className="px-6 py-2 bg-gradient-to-r from-[#8243f9] to-[#6d35d1] hover:from-[#6d35d1] hover:to-[#8243f9] text-white font-semibold rounded-lg transition-all duration-200"
            >
              Ver todos los artículos
            </motion.button>
          </motion.div>
        )}

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-[#8243f9]/20 to-[#6d35d1]/20 backdrop-blur-sm rounded-2xl p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            Mantente Actualizado
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Suscríbete a nuestro newsletter para recibir las últimas noticias sobre IA en moda y retail directamente en tu bandeja de entrada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Tu email"
              className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#8243f9] focus:border-transparent text-white placeholder-gray-400"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-[#8243f9] to-[#6d35d1] hover:from-[#6d35d1] hover:to-[#8243f9] text-white font-semibold rounded-lg transition-all duration-200"
            >
              Suscribirse
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}