'use client'

import { motion } from 'framer-motion'
import { Users, Target, Award, Mail, MapPin } from 'lucide-react'
import Logo from '@/components/ui/Logo'

export default function EmpresaPage() {
  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Acerca de{' '}
            <span className="bg-gradient-to-r from-[#8243f9] to-[#6d35d1] bg-clip-text text-transparent">
              OrbisReach
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Somos pioneros en la aplicación de inteligencia artificial para revolucionar 
            la industria de la moda y el retail.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Nuestra Misión</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Democratizar el acceso a la inteligencia artificial para empresas de moda, 
                retail y ecommerce, permitiendo que cualquier marca pueda competir en el 
                mercado global con herramientas de vanguardia.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Creemos que la tecnología debe ser accesible, comprensible y, sobre todo, 
                debe generar resultados tangibles para nuestros clientes.
              </p>
            </div>
            <div className="flex justify-center">
              <motion.div 
                className="w-48 h-48 bg-gradient-to-br from-[#8243f9]/20 to-[#6d35d1]/20 rounded-full flex items-center justify-center"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Logo size="xl" />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Nuestros Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#8243f9] to-[#6d35d1] rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Innovación</h3>
              <p className="text-gray-300">
                Siempre a la vanguardia de la tecnología, implementamos las últimas 
                soluciones de IA para mantener a nuestros clientes competitivos.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#8243f9] to-[#6d35d1] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Colaboración</h3>
              <p className="text-gray-300">
                Trabajamos codo a codo con nuestros clientes, entendiendo sus necesidades 
                y adaptando nuestras soluciones a su realidad.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#8243f9] to-[#6d35d1] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Excelencia</h3>
              <p className="text-gray-300">
                Nos comprometemos con la más alta calidad en cada proyecto, 
                garantizando resultados medibles y sostenibles.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Nuestro Equipo</h2>
          <div className="flex justify-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 text-center max-w-md">
              <div className="w-32 h-32 bg-gradient-to-r from-[#8243f9] to-[#6d35d1] rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl font-bold text-white">SC</span>
              </div>
              <a 
                href="https://www.linkedin.com/in/santi-climent-473204384/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl font-semibold text-white mb-3 hover:text-[#8243f9] transition-colors duration-300 cursor-pointer inline-block"
              >
                Santi Climent
              </a>
              <p className="text-[#8243f9] mb-4 text-lg">CEO & Founder</p>
              <p className="text-gray-300">
                Fundador y líder visionario de OrbisReach, especializado en inteligencia artificial 
                aplicada al retail y ecommerce. Con una pasión por democratizar el acceso a la 
                tecnología de vanguardia para empresas de moda.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">¿Quieres conocernos mejor?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-[#8243f9] mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300">info@orbisreach.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-[#8243f9] mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Ubicación</h3>
              <p className="text-gray-300">Barcelona, España</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
