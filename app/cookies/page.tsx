'use client'

import { motion } from 'framer-motion'
import Logo from '@/components/ui/Logo'

export default function CookiesPage() {
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
              Cookies
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
            <h2 className="text-2xl font-bold text-white mb-6">¿Qué son las Cookies?</h2>
            <p className="text-gray-300 mb-6">
              Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas nuestro sitio web. Nos ayudan a mejorar tu experiencia de navegación y a entender cómo utilizas nuestro sitio.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6">Tipos de Cookies que Utilizamos</h2>
            
            <h3 className="text-xl font-semibold text-white mb-4">Cookies Esenciales</h3>
            <p className="text-gray-300 mb-4">
              Estas cookies son necesarias para el funcionamiento básico del sitio web y no se pueden desactivar:
            </p>
            <ul className="text-gray-300 mb-6 list-disc list-inside space-y-2">
              <li>Cookies de sesión para mantener tu sesión activa</li>
              <li>Cookies de seguridad para proteger contra ataques</li>
              <li>Cookies de funcionalidad básica del sitio</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-4">Cookies de Rendimiento</h3>
            <p className="text-gray-300 mb-4">
              Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web:
            </p>
            <ul className="text-gray-300 mb-6 list-disc list-inside space-y-2">
              <li>Google Analytics para análisis de tráfico</li>
              <li>Cookies de métricas de rendimiento</li>
              <li>Datos de uso anónimos</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-4">Cookies de Funcionalidad</h3>
            <p className="text-gray-300 mb-4">
              Mejoran la funcionalidad del sitio web y personalizan tu experiencia:
            </p>
            <ul className="text-gray-300 mb-6 list-disc list-inside space-y-2">
              <li>Preferencias de idioma</li>
              <li>Configuraciones de usuario</li>
              <li>Recordar formularios completados</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-6">Cookies de Terceros</h2>
            <p className="text-gray-300 mb-4">
              Algunos servicios de terceros que utilizamos pueden establecer sus propias cookies:
            </p>
            <ul className="text-gray-300 mb-6 list-disc list-inside space-y-2">
              <li><strong>Google Analytics:</strong> Para análisis de tráfico web</li>
              <li><strong>LinkedIn:</strong> Para funcionalidades sociales</li>
              <li><strong>Servicios de email:</strong> Para newsletter y comunicaciones</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-6">Gestión de Cookies</h2>
            <p className="text-gray-300 mb-4">
              Puedes controlar y gestionar las cookies de varias maneras:
            </p>
            
            <h3 className="text-xl font-semibold text-white mb-4">Configuración del Navegador</h3>
            <p className="text-gray-300 mb-4">
              La mayoría de los navegadores te permiten:
            </p>
            <ul className="text-gray-300 mb-6 list-disc list-inside space-y-2">
              <li>Ver qué cookies están almacenadas</li>
              <li>Eliminar cookies individualmente o todas</li>
              <li>Bloquear cookies de sitios específicos</li>
              <li>Configurar alertas cuando se establecen cookies</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-4">Enlaces de Configuración por Navegador</h3>
            <div className="bg-gray-800/50 rounded-lg p-4 mb-6">
              <ul className="text-gray-300 space-y-2">
                <li><strong>Chrome:</strong> Configuración > Privacidad y seguridad > Cookies</li>
                <li><strong>Firefox:</strong> Opciones > Privacidad y seguridad > Cookies</li>
                <li><strong>Safari:</strong> Preferencias > Privacidad > Cookies</li>
                <li><strong>Edge:</strong> Configuración > Cookies y permisos de sitio</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-white mb-6">Cookies en Nuestros Servicios de IA</h2>
            <p className="text-gray-300 mb-4">
              Para nuestros servicios de inteligencia artificial, utilizamos cookies adicionales para:
            </p>
            <ul className="text-gray-300 mb-6 list-disc list-inside space-y-2">
              <li>Recordar configuraciones de diagnóstico</li>
              <li>Mantener sesiones de análisis de datos</li>
              <li>Personalizar recomendaciones</li>
              <li>Mejorar algoritmos de predicción</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-6">Actualizaciones de esta Política</h2>
            <p className="text-gray-300 mb-6">
              Podemos actualizar esta Política de Cookies ocasionalmente para reflejar cambios en nuestras prácticas o por razones operativas, legales o regulatorias. Te recomendamos revisar esta página periódicamente.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6">Contacto</h2>
            <p className="text-gray-300 mb-4">
              Si tienes preguntas sobre nuestra Política de Cookies, puedes contactarnos en:
            </p>
            <div className="bg-gray-800/50 rounded-lg p-4">
              <p className="text-white font-medium">Email: info@orbisreach.com</p>
              <p className="text-white font-medium">Dirección: Barcelona, España</p>
            </div>

            <div className="mt-8 p-4 bg-gradient-to-r from-[#8243f9]/20 to-[#6d35d1]/20 rounded-lg">
              <p className="text-gray-300 text-sm">
                Al continuar utilizando nuestro sitio web, aceptas el uso de cookies según se describe en esta política.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}