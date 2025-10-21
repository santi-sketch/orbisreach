'use client'

import { motion } from 'framer-motion'
import { Cookie, Settings, Shield, Eye, Database } from 'lucide-react'

export default function CookiesPage() {
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
            Política de{' '}
            <span className="bg-gradient-to-r from-[#8243f9] to-[#6d35d1] bg-clip-text text-transparent">
              Cookies
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Información sobre cómo utilizamos las cookies y tecnologías similares en nuestro sitio web.
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
          {/* ¿Qué son las cookies? */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-gray-800 rounded-xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Cookie className="h-6 w-6 text-[#8243f9]" />
              <h2 className="text-2xl font-bold text-white">¿Qué son las Cookies?</h2>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <p>
                Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas 
                nuestro sitio web. Estas cookies nos permiten reconocer tu dispositivo y recordar información 
                sobre tu visita.
              </p>
              <p>
                Utilizamos cookies para mejorar tu experiencia de navegación, analizar el tráfico del sitio 
                y personalizar el contenido según tus preferencias.
              </p>
            </div>
          </motion.section>

          {/* Tipos de cookies */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-800 rounded-xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Settings className="h-6 w-6 text-[#8243f9]" />
              <h2 className="text-2xl font-bold text-white">Tipos de Cookies que Utilizamos</h2>
            </div>
            
            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Cookies Estrictamente Necesarias</h3>
                <p className="mb-2">Estas cookies son esenciales para el funcionamiento del sitio web:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Cookies de sesión para mantener tu sesión activa</li>
                  <li>Cookies de seguridad para proteger contra ataques</li>
                  <li>Cookies de preferencias de idioma y región</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Cookies de Rendimiento</h3>
                <p className="mb-2">Nos ayudan a entender cómo interactúas con nuestro sitio:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Google Analytics para análisis de tráfico</li>
                  <li>Cookies de tiempo de carga de páginas</li>
                  <li>Cookies de errores y rendimiento</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Cookies de Funcionalidad</h3>
                <p className="mb-2">Mejoran la funcionalidad y personalización:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Preferencias de usuario y configuraciones</li>
                  <li>Cookies de recordar formularios</li>
                  <li>Cookies de personalización de contenido</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Cookies de Marketing</h3>
                <p className="mb-2">Se utilizan para mostrar anuncios relevantes:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Cookies de seguimiento de conversiones</li>
                  <li>Cookies de remarketing</li>
                  <li>Cookies de redes sociales</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Cookies específicas */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-gray-800 rounded-xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Database className="h-6 w-6 text-[#8243f9]" />
              <h2 className="text-2xl font-bold text-white">Cookies Específicas que Utilizamos</h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-gray-300">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-3 px-4 font-semibold text-white">Nombre</th>
                    <th className="text-left py-3 px-4 font-semibold text-white">Propósito</th>
                    <th className="text-left py-3 px-4 font-semibold text-white">Duración</th>
                    <th className="text-left py-3 px-4 font-semibold text-white">Tipo</th>
                  </tr>
                </thead>
                <tbody className="space-y-2">
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-4 font-mono">_ga</td>
                    <td className="py-3 px-4">Distinguir usuarios únicos</td>
                    <td className="py-3 px-4">2 años</td>
                    <td className="py-3 px-4">Analítica</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-4 font-mono">_gid</td>
                    <td className="py-3 px-4">Distinguir usuarios únicos</td>
                    <td className="py-3 px-4">24 horas</td>
                    <td className="py-3 px-4">Analítica</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-4 font-mono">session_id</td>
                    <td className="py-3 px-4">Mantener sesión de usuario</td>
                    <td className="py-3 px-4">Sesión</td>
                    <td className="py-3 px-4">Necesaria</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-4 font-mono">preferences</td>
                    <td className="py-3 px-4">Recordar preferencias del usuario</td>
                    <td className="py-3 px-4">1 año</td>
                    <td className="py-3 px-4">Funcionalidad</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-mono">marketing_consent</td>
                    <td className="py-3 px-4">Consentimiento para marketing</td>
                    <td className="py-3 px-4">1 año</td>
                    <td className="py-3 px-4">Marketing</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.section>

          {/* Gestión de cookies */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gray-800 rounded-xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Eye className="h-6 w-6 text-[#8243f9]" />
              <h2 className="text-2xl font-bold text-white">Cómo Gestionar las Cookies</h2>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <h3 className="text-lg font-semibold text-white">Configuración del Navegador</h3>
              <p>Puedes controlar y eliminar cookies a través de la configuración de tu navegador:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>Chrome:</strong> Configuración > Privacidad y seguridad > Cookies</li>
                <li><strong>Firefox:</strong> Opciones > Privacidad y seguridad > Cookies</li>
                <li><strong>Safari:</strong> Preferencias > Privacidad > Cookies</li>
                <li><strong>Edge:</strong> Configuración > Cookies y permisos del sitio</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-white mt-6">Centro de Preferencias</h3>
              <p>
                También puedes gestionar tus preferencias de cookies a través de nuestro centro de preferencias 
                que aparecerá en tu primera visita al sitio.
              </p>
            </div>
          </motion.section>

          {/* Cookies de terceros */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="bg-gray-800 rounded-xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-6 w-6 text-[#8243f9]" />
              <h2 className="text-2xl font-bold text-white">Cookies de Terceros</h2>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <p>Utilizamos servicios de terceros que pueden establecer sus propias cookies:</p>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Google Analytics</h3>
                <p>Para analizar el uso del sitio web y mejorar nuestros servicios.</p>
                <p className="text-sm text-gray-400">Más información: <a href="https://policies.google.com/privacy" className="text-[#8243f9] hover:underline">Política de Privacidad de Google</a></p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Redes Sociales</h3>
                <p>Para integrar contenido de redes sociales y funciones de compartir.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Servicios de Pago</h3>
                <p>Para procesar pagos de forma segura.</p>
              </div>
            </div>
          </motion.section>

          {/* Actualizaciones */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-gradient-to-r from-[#8243f9]/10 to-[#6d35d1]/10 rounded-xl p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              Actualizaciones de esta Política
            </h2>
            <p className="text-gray-300 mb-6">
              Podemos actualizar esta política de cookies ocasionalmente para reflejar cambios en nuestras 
              prácticas o por razones operativas, legales o regulatorias.
            </p>
            <p className="text-gray-300">
              Te recomendamos revisar esta página periódicamente para mantenerte informado sobre nuestro 
              uso de cookies.
            </p>
          </motion.section>

          {/* Contacto */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="bg-gray-800 rounded-xl p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              ¿Tienes Preguntas sobre las Cookies?
            </h2>
            <p className="text-gray-300 mb-6">
              Si tienes alguna pregunta sobre nuestra política de cookies, 
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