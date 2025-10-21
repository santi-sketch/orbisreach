'use client'

import { motion } from 'framer-motion'
import Logo from '@/components/ui/Logo'

export default function TerminosPage() {
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
            Términos y{' '}
            <span className="bg-gradient-to-r from-[#8243f9] to-[#6d35d1] bg-clip-text text-transparent">
              Condiciones
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Última actualización: {new Date().toLocaleDateString('es-ES')}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 prose prose-invert max-w-none"
          >
            <h2 className="text-2xl font-bold text-white mb-6">1. Aceptación de los Términos</h2>
            <p className="text-gray-300 mb-6">
              Al acceder y utilizar los servicios de OrbisReach, aceptas estar sujeto a estos Términos y Condiciones. Si no estás de acuerdo con alguna parte de estos términos, no debes utilizar nuestros servicios.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6">2. Descripción del Servicio</h2>
            <p className="text-gray-300 mb-4">
              OrbisReach proporciona servicios de inteligencia artificial especializados en:
            </p>
            <ul className="text-gray-300 mb-6 list-disc list-inside space-y-2">
              <li>Predicción de tendencias de moda</li>
              <li>Optimización de inventario</li>
              <li>Personalización de experiencia de cliente</li>
              <li>Marketing inteligente</li>
              <li>Automatización de procesos</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-6">3. Uso Aceptable</h2>
            <p className="text-gray-300 mb-4">
              Al utilizar nuestros servicios, te comprometes a:
            </p>
            <ul className="text-gray-300 mb-6 list-disc list-inside space-y-2">
              <li>Proporcionar información veraz y actualizada</li>
              <li>No utilizar nuestros servicios para actividades ilegales</li>
              <li>No intentar acceder a sistemas o datos no autorizados</li>
              <li>Respetar los derechos de propiedad intelectual</li>
              <li>No interferir con el funcionamiento de nuestros servicios</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-6">4. Propiedad Intelectual</h2>
            <p className="text-gray-300 mb-6">
              Todos los derechos de propiedad intelectual relacionados con nuestros servicios, incluyendo algoritmos de IA, software, contenido y marcas comerciales, son propiedad de OrbisReach o sus licenciantes.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6">5. Limitación de Responsabilidad</h2>
            <p className="text-gray-300 mb-6">
              OrbisReach no será responsable por daños indirectos, incidentales, especiales o consecuenciales que puedan resultar del uso de nuestros servicios. Nuestra responsabilidad total no excederá el monto pagado por los servicios en los 12 meses anteriores.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6">6. Disponibilidad del Servicio</h2>
            <p className="text-gray-300 mb-6">
              Nos esforzamos por mantener nuestros servicios disponibles las 24 horas del día, pero no garantizamos la disponibilidad continua. Podemos realizar mantenimiento programado o no programado que pueda afectar temporalmente la disponibilidad.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6">7. Modificaciones</h2>
            <p className="text-gray-300 mb-6">
              Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en nuestro sitio web. El uso continuado de nuestros servicios constituye la aceptación de los términos modificados.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6">8. Terminación</h2>
            <p className="text-gray-300 mb-6">
              Podemos suspender o terminar tu acceso a nuestros servicios en cualquier momento, con o sin causa, con o sin previo aviso. También puedes terminar tu uso de nuestros servicios en cualquier momento.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6">9. Ley Aplicable</h2>
            <p className="text-gray-300 mb-6">
              Estos términos se rigen por las leyes de España. Cualquier disputa será resuelta en los tribunales competentes de Barcelona, España.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6">10. Contacto</h2>
            <p className="text-gray-300 mb-4">
              Para preguntas sobre estos Términos y Condiciones, puedes contactarnos en:
            </p>
            <div className="bg-gray-800/50 rounded-lg p-4">
              <p className="text-white font-medium">Email: info@orbisreach.com</p>
              <p className="text-white font-medium">Dirección: Barcelona, España</p>
            </div>

            <div className="mt-8 p-4 bg-gradient-to-r from-[#8243f9]/20 to-[#6d35d1]/20 rounded-lg">
              <p className="text-gray-300 text-sm">
                Al utilizar nuestros servicios, confirmas que has leído, entendido y aceptado estos Términos y Condiciones.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}