'use client'

import { motion } from 'framer-motion'
import Logo from '@/components/ui/Logo'

export default function PrivacidadPage() {
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
            Política de{' '}
            <span className="bg-gradient-to-r from-[#8243f9] to-[#6d35d1] bg-clip-text text-transparent">
              Privacidad
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
            <h2 className="text-2xl font-bold text-white mb-6">1. Información que Recopilamos</h2>
            <p className="text-gray-300 mb-4">
              Recopilamos información que nos proporcionas directamente cuando:
            </p>
            <ul className="text-gray-300 mb-6 list-disc list-inside space-y-2">
              <li>Te registras en nuestros servicios</li>
              <li>Completas formularios de contacto o diagnóstico</li>
              <li>Te suscribes a nuestro newsletter</li>
              <li>Utilizas nuestros servicios de IA</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-6">2. Cómo Utilizamos tu Información</h2>
            <p className="text-gray-300 mb-4">
              Utilizamos la información recopilada para:
            </p>
            <ul className="text-gray-300 mb-6 list-disc list-inside space-y-2">
              <li>Proporcionar y mejorar nuestros servicios de IA</li>
              <li>Generar diagnósticos personalizados</li>
              <li>Comunicarnos contigo sobre nuestros servicios</li>
              <li>Enviar newsletters y actualizaciones</li>
              <li>Cumplir con obligaciones legales</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-6">3. Compartir Información</h2>
            <p className="text-gray-300 mb-4">
              No vendemos, alquilamos ni compartimos tu información personal con terceros, excepto:
            </p>
            <ul className="text-gray-300 mb-6 list-disc list-inside space-y-2">
              <li>Con tu consentimiento explícito</li>
              <li>Para cumplir con obligaciones legales</li>
              <li>Con proveedores de servicios que nos ayudan a operar nuestro negocio</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-6">4. Seguridad de Datos</h2>
            <p className="text-gray-300 mb-6">
              Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger tu información personal contra acceso no autorizado, alteración, divulgación o destrucción.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6">5. Tus Derechos</h2>
            <p className="text-gray-300 mb-4">
              Tienes derecho a:
            </p>
            <ul className="text-gray-300 mb-6 list-disc list-inside space-y-2">
              <li>Acceder a tu información personal</li>
              <li>Rectificar datos inexactos</li>
              <li>Solicitar la eliminación de tus datos</li>
              <li>Limitar el procesamiento de tus datos</li>
              <li>Portabilidad de datos</li>
              <li>Oponerte al procesamiento</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-6">6. Cookies</h2>
            <p className="text-gray-300 mb-6">
              Utilizamos cookies y tecnologías similares para mejorar tu experiencia en nuestro sitio web. Puedes gestionar las cookies a través de la configuración de tu navegador.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6">7. Contacto</h2>
            <p className="text-gray-300 mb-4">
              Si tienes preguntas sobre esta Política de Privacidad, puedes contactarnos en:
            </p>
            <div className="bg-gray-800/50 rounded-lg p-4">
              <p className="text-white font-medium">Email: info@orbisreach.com</p>
              <p className="text-white font-medium">Dirección: Barcelona, España</p>
            </div>

            <div className="mt-8 p-4 bg-gradient-to-r from-[#8243f9]/20 to-[#6d35d1]/20 rounded-lg">
              <p className="text-gray-300 text-sm">
                Esta política puede ser actualizada ocasionalmente. Te notificaremos sobre cambios significativos a través de nuestro sitio web o por email.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}