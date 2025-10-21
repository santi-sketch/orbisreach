'use client'

import { motion } from 'framer-motion'
import { FileText, Scale, AlertTriangle, CheckCircle } from 'lucide-react'

export default function TerminosPage() {
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
            Términos y{' '}
            <span className="bg-gradient-to-r from-[#8243f9] to-[#6d35d1] bg-clip-text text-transparent">
              Condiciones
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Estos términos rigen el uso de nuestros servicios de inteligencia artificial para la industria de la moda.
          </p>
        </motion.div>

        {/* Last Updated */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gray-800 rounded-lg p-6 mb-12"
        >
          <p className="text-gray-300">
            <strong className="text-white">Última actualización:</strong> 15 de Diciembre de 2024
          </p>
        </motion.div>

        {/* Content */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Aceptación de términos */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-gray-800 rounded-xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="h-6 w-6 text-[#8243f9]" />
              <h2 className="text-2xl font-bold text-white">Aceptación de los Términos</h2>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <p>
                Al acceder y utilizar los servicios de OrbisReach, aceptas estar sujeto a estos términos y condiciones. 
                Si no estás de acuerdo con alguna parte de estos términos, no debes utilizar nuestros servicios.
              </p>
              <p>
                Estos términos constituyen un acuerdo legal entre tú y OrbisReach. Te recomendamos leer 
                cuidadosamente estos términos antes de utilizar nuestros servicios.
              </p>
            </div>
          </motion.section>

          {/* Definiciones */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-800 rounded-xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <FileText className="h-6 w-6 text-[#8243f9]" />
              <h2 className="text-2xl font-bold text-white">Definiciones</h2>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">"Servicios"</h3>
                <p>Se refiere a todas las soluciones de inteligencia artificial, software, plataformas y servicios relacionados ofrecidos por OrbisReach.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">"Cliente" o "Usuario"</h3>
                <p>Persona física o jurídica que utiliza nuestros servicios bajo estos términos.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">"Datos"</h3>
                <p>Toda información, contenido o datos proporcionados por el cliente en relación con el uso de nuestros servicios.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">"Plataforma"</h3>
                <p>Los sistemas, interfaces y tecnologías utilizadas para proporcionar nuestros servicios.</p>
              </div>
            </div>
          </motion.section>

          {/* Uso de servicios */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-gray-800 rounded-xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Scale className="h-6 w-6 text-[#8243f9]" />
              <h2 className="text-2xl font-bold text-white">Uso de los Servicios</h2>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <h3 className="text-lg font-semibold text-white">Uso Permitido</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Utilizar los servicios para fines comerciales legítimos relacionados con tu negocio</li>
                <li>Acceder a las funcionalidades de IA para optimizar procesos de moda y retail</li>
                <li>Generar reportes y análisis basados en los datos proporcionados</li>
                <li>Integrar nuestros servicios con tus sistemas existentes según las especificaciones técnicas</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-white mt-6">Uso Prohibido</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Utilizar los servicios para actividades ilegales o no autorizadas</li>
                <li>Intentar acceder a sistemas o datos de otros usuarios</li>
                <li>Modificar, descompilar o hacer ingeniería inversa de nuestros servicios</li>
                <li>Utilizar los servicios para competir directamente con OrbisReach</li>
                <li>Violar cualquier ley o regulación aplicable</li>
              </ul>
            </div>
          </motion.section>

          {/* Obligaciones del cliente */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gray-800 rounded-xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="h-6 w-6 text-[#8243f9]" />
              <h2 className="text-2xl font-bold text-white">Obligaciones del Cliente</h2>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Proporcionar información precisa y actualizada</li>
                <li>Mantener la confidencialidad de sus credenciales de acceso</li>
                <li>Notificar inmediatamente cualquier uso no autorizado de su cuenta</li>
                <li>Cumplir con todas las leyes y regulaciones aplicables</li>
                <li>Respetar los derechos de propiedad intelectual de terceros</li>
                <li>Utilizar los servicios de manera responsable y ética</li>
              </ul>
            </div>
          </motion.section>

          {/* Propiedad intelectual */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="bg-gray-800 rounded-xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <FileText className="h-6 w-6 text-[#8243f9]" />
              <h2 className="text-2xl font-bold text-white">Propiedad Intelectual</h2>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <p>
                OrbisReach retiene todos los derechos, títulos e intereses en y sobre los servicios, 
                incluyendo todos los derechos de propiedad intelectual.
              </p>
              <p>
                El cliente conserva la propiedad de sus datos y contenido. Al utilizar nuestros servicios, 
                el cliente otorga a OrbisReach una licencia limitada para procesar sus datos únicamente 
                para proporcionar los servicios solicitados.
              </p>
            </div>
          </motion.section>

          {/* Limitación de responsabilidad */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-gray-800 rounded-xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="h-6 w-6 text-[#8243f9]" />
              <h2 className="text-2xl font-bold text-white">Limitación de Responsabilidad</h2>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <p>
                En la máxima medida permitida por la ley, OrbisReach no será responsable de daños indirectos, 
                incidentales, especiales, consecuenciales o punitivos, incluyendo pero no limitado a pérdida 
                de beneficios, datos o uso.
              </p>
              <p>
                La responsabilidad total de OrbisReach no excederá el monto pagado por el cliente por los 
                servicios en los 12 meses anteriores al evento que dio lugar a la reclamación.
              </p>
            </div>
          </motion.section>

          {/* Modificaciones */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="bg-gradient-to-r from-[#8243f9]/10 to-[#6d35d1]/10 rounded-xl p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              Modificaciones de los Términos
            </h2>
            <p className="text-gray-300 mb-6">
              OrbisReach se reserva el derecho de modificar estos términos en cualquier momento. 
              Las modificaciones entrarán en vigor inmediatamente después de su publicación en nuestro sitio web.
            </p>
            <p className="text-gray-300">
              El uso continuado de nuestros servicios después de cualquier modificación constituye 
              tu aceptación de los nuevos términos.
            </p>
          </motion.section>

          {/* Contacto */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="bg-gray-800 rounded-xl p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              ¿Tienes Preguntas sobre estos Términos?
            </h2>
            <p className="text-gray-300 mb-6">
              Si tienes alguna pregunta sobre estos términos y condiciones, 
              no dudes en contactarnos.
            </p>
            <div className="space-y-2 text-gray-300">
              <p><strong>Email:</strong> info@orbisreach.com</p>
              <p><strong>Dirección:</strong> Barcelona, España</p>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  )
}