'use client'

import { motion } from 'framer-motion'
import { Users, Target, Lightbulb, Award, CheckCircle } from 'lucide-react'
import Logo from '@/components/ui/Logo'

const values = [
  {
    icon: Target,
    title: 'Misión',
    description: 'Democratizar el acceso a la inteligencia artificial para empresas de moda y retail, permitiendo que cualquier marca, independientemente de su tamaño, pueda competir en igualdad de condiciones.',
  },
  {
    icon: Lightbulb,
    title: 'Visión',
    description: 'Ser la plataforma líder en soluciones de IA para la industria de la moda, transformando la forma en que las marcas entienden, predicen y satisfacen las necesidades de sus clientes.',
  },
  {
    icon: Award,
    title: 'Valores',
    description: 'Innovación constante, transparencia total, resultados medibles y un compromiso inquebrantable con el éxito de nuestros clientes.',
  },
]

const team = [
  {
    name: 'Equipo de Data Scientists',
    description: 'Expertos en machine learning y análisis de datos con más de 10 años de experiencia en retail y moda.',
  },
  {
    name: 'Especialistas en IA',
    description: 'Desarrolladores especializados en algoritmos de predicción de tendencias y personalización.',
  },
  {
    name: 'Consultores de Retail',
    description: 'Profesionales con experiencia directa en la industria de la moda y retail.',
  },
]

const achievements = [
  'Más de 500 marcas confían en nuestras soluciones',
  'Reducción promedio del 40% en exceso de stock',
  'Aumento del 60% en ventas con personalización',
  'ROI promedio de 300% en el primer año',
]

export default function EmpresaPage() {
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
            Acerca de{' '}
            <span className="bg-gradient-to-r from-[#8243f9] to-[#6d35d1] bg-clip-text text-transparent">
              OrbisReach
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Somos pioneros en la aplicación de inteligencia artificial para transformar la industria de la moda y retail.
          </p>
        </motion.div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-[#8243f9] to-[#6d35d1] rounded-xl flex items-center justify-center mb-6">
                <value.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
              <p className="text-gray-300 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Nuestro <span className="bg-gradient-to-r from-[#8243f9] to-[#6d35d1] bg-clip-text text-transparent">Equipo</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Un equipo multidisciplinario de expertos en IA, data science y retail trabajando juntos para crear soluciones innovadoras.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-3">{member.name}</h3>
                <p className="text-gray-300">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#8243f9]/20 to-[#6d35d1]/20 backdrop-blur-sm rounded-2xl p-8"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Nuestros <span className="bg-gradient-to-r from-[#8243f9] to-[#6d35d1] bg-clip-text text-transparent">Logros</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center"
              >
                <CheckCircle className="h-6 w-6 text-[#8243f9] mr-4 flex-shrink-0" />
                <span className="text-white text-lg">{achievement}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            ¿Listo para trabajar con nosotros?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Únete a las cientos de marcas que ya están transformando su negocio con nuestras soluciones de IA.
          </p>
          <motion.a
            href="/servicios-ia"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-gradient-to-r from-[#8243f9] to-[#6d35d1] hover:from-[#6d35d1] hover:to-[#8243f9] text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200"
          >
            Ver Nuestros Servicios
          </motion.a>
        </motion.div>
      </div>
    </div>
  )
}