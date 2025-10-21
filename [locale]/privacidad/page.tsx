'use client'

import { motion } from 'framer-motion'
import { Shield, Eye, Lock, Database, UserCheck } from 'lucide-react'

export default function PrivacidadPage() {
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
              Privacidad
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            En OrbisReach respetamos tu privacidad y nos comprometemos a proteger tus datos personales.
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
          {/* Información que recopilamos */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-gray-800 rounded-xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Database className="h-6 w-6 text-[#8243f9]" />
              <h2 className="text-2xl font-bold text-white">Información que Recopilamos</h2>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Información Personal</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Nombre completo y datos de contacto (email, teléfono)</li>
                  <li>Información de la empresa (nombre, sector, tamaño)</li>
                  <li>Datos de facturación y pago</li>
                  <li>Comunicaciones y preferencias de marketing</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Información Técnica</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Dirección IP y datos de navegación</li>
                  <li>Cookies y tecnologías similares</li>
                  <li>Información del dispositivo y navegador</li>
                  <li>Datos de uso de nuestros servicios</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Cómo usamos la información */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-800 rounded-xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Eye className="h-6 w-6 text-[#8243f9]" />
              <h2 className="text-2xl font-bold text-white">Cómo Usamos tu Información</h2>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Proporcionar y mejorar nuestros servicios de IA</li>
                <li>Personalizar tu experiencia y recomendaciones</li>
                <li>Procesar pagos y gestionar tu cuenta</li>
                <li>Comunicarnos contigo sobre nuestros servicios</li>
                <li>Cumplir con obligaciones legales y regulatorias</li>
                <li>Analizar el uso de nuestros servicios para mejorarlos</li>
              </ul>
            </div>
          </motion.section>

          {/* Compartir información */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-gray-800 rounded-xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <UserCheck className="h-6 w-6 text-[#8243f9]" />
              <h2 className="text-2xl font-bold text-white">Compartir tu Información</h2>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <p>No vendemos, alquilamos ni compartimos tu información personal con terceros, excepto en las siguientes circunstancias:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Con tu consentimiento explícito</li>
                <li>Para cumplir con obligaciones legales</li>
                <li>Con proveedores de servicios que nos ayudan a operar (bajo acuerdos de confidencialidad)</li>
                <li>En caso de fusión, adquisición o venta de activos</li>
              </ul>
            </div>
          </motion.section>

          {/* Seguridad */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gray-800 rounded-xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-6 w-6 text-[#8243f9]" />
              <h2 className="text-2xl font-bold text-white">Seguridad de los Datos</h2>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <p>Implementamos medidas de seguridad técnicas y organizativas para proteger tu información:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Encriptación de datos en tránsito y en reposo</li>
                <li>Acceso restringido a información personal</li>
                <li>Monitoreo continuo de seguridad</li>
                <li>Capacitación regular del personal en privacidad</li>
                <li>Auditorías de seguridad periódicas</li>
              </ul>
            </div>
          </motion.section>

          {/* Tus derechos */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="bg-gray-800 rounded-xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Lock className="h-6 w-6 text-[#8243f9]" />
              <h2 className="text-2xl font-bold text-white">Tus Derechos</h2>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <p>Bajo el RGPD y otras leyes de privacidad, tienes los siguientes derechos:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Acceso:</strong> Solicitar una copia de tus datos personales</li>
                <li><strong>Rectificación:</strong> Corregir datos inexactos o incompletos</li>
                <li><strong>Eliminación:</strong> Solicitar la eliminación de tus datos</li>
                <li><strong>Limitación:</strong> Restringir el procesamiento de tus datos</li>
                <li><strong>Portabilidad:</strong> Recibir tus datos en formato estructurado</li>
                <li><strong>Oposición:</strong> Oponerte al procesamiento de tus datos</li>
              </ul>
            </div>
          </motion.section>

          {/* Contacto */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-gradient-to-r from-[#8243f9]/10 to-[#6d35d1]/10 rounded-xl p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              ¿Tienes Preguntas sobre Privacidad?
            </h2>
            <p className="text-gray-300 mb-6">
              Si tienes alguna pregunta sobre esta política de privacidad o sobre cómo manejamos tus datos, 
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