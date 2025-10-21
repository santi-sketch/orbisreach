'use client'

import { motion } from 'framer-motion'
import { Shield, FileText, UserCheck, Database, AlertCircle, CheckCircle } from 'lucide-react'

export default function GDPRPage() {
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
            Cumplimiento{' '}
            <span className="bg-gradient-to-r from-[#8243f9] to-[#6d35d1] bg-clip-text text-transparent">
              GDPR
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Información sobre nuestro cumplimiento del Reglamento General de Protección de Datos (GDPR) de la UE.
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
          {/* ¿Qué es el GDPR? */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-gray-800 rounded-xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <FileText className="h-6 w-6 text-[#8243f9]" />
              <h2 className="text-2xl font-bold text-white">¿Qué es el GDPR?</h2>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <p>
                El Reglamento General de Protección de Datos (GDPR) es una regulación de la Unión Europea 
                que entró en vigor el 25 de mayo de 2018. Establece reglas estrictas sobre cómo las 
                organizaciones pueden recopilar, procesar y almacenar datos personales.
              </p>
              <p>
                En OrbisReach, nos comprometemos a cumplir plenamente con el GDPR y proteger los derechos 
                de privacidad de todos nuestros usuarios, especialmente aquellos en la Unión Europea.
              </p>
            </div>
          </motion.section>

          {/* Principios del GDPR */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-800 rounded-xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-6 w-6 text-[#8243f9]" />
              <h2 className="text-2xl font-bold text-white">Principios que Seguimos</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#8243f9] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Licitud, Lealtad y Transparencia</h3>
                    <p className="text-sm text-gray-300">Procesamos datos de manera legal, justa y transparente.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#8243f9] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Limitación de la Finalidad</h3>
                    <p className="text-sm text-gray-300">Los datos se recopilan para fines específicos y legítimos.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#8243f9] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Minimización de Datos</h3>
                    <p className="text-sm text-gray-300">Solo recopilamos datos necesarios para nuestros servicios.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#8243f9] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Exactitud</h3>
                    <p className="text-sm text-gray-300">Mantenemos datos precisos y actualizados.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#8243f9] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Limitación del Almacenamiento</h3>
                    <p className="text-sm text-gray-300">Los datos se conservan solo el tiempo necesario.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#8243f9] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Integridad y Confidencialidad</h3>
                    <p className="text-sm text-gray-300">Protegemos los datos con medidas de seguridad apropiadas.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Base legal */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-gray-800 rounded-xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Database className="h-6 w-6 text-[#8243f9]" />
              <h2 className="text-2xl font-bold text-white">Base Legal para el Procesamiento</h2>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Consentimiento</h3>
                <p>Cuando has dado tu consentimiento explícito para el procesamiento de tus datos personales.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Ejecución de Contrato</h3>
                <p>Cuando el procesamiento es necesario para la ejecución de un contrato contigo o para tomar medidas precontractuales.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Interés Legítimo</h3>
                <p>Cuando tenemos un interés legítimo en procesar tus datos, siempre que no se vean afectados tus derechos y libertades fundamentales.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Obligación Legal</h3>
                <p>Cuando el procesamiento es necesario para cumplir con una obligación legal.</p>
              </div>
            </div>
          </motion.section>

          {/* Derechos del interesado */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gray-800 rounded-xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <UserCheck className="h-6 w-6 text-[#8243f9]" />
              <h2 className="text-2xl font-bold text-white">Tus Derechos Bajo el GDPR</h2>
            </div>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Derecho de Acceso (Art. 15)</h3>
                    <p className="text-sm text-gray-300">Puedes solicitar información sobre qué datos personales procesamos sobre ti.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Derecho de Rectificación (Art. 16)</h3>
                    <p className="text-sm text-gray-300">Puedes solicitar la corrección de datos inexactos o incompletos.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Derecho de Supresión (Art. 17)</h3>
                    <p className="text-sm text-gray-300">Puedes solicitar la eliminación de tus datos personales en ciertas circunstancias.</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Derecho de Limitación (Art. 18)</h3>
                    <p className="text-sm text-gray-300">Puedes solicitar la limitación del procesamiento de tus datos.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Derecho de Portabilidad (Art. 20)</h3>
                    <p className="text-sm text-gray-300">Puedes recibir tus datos en un formato estructurado y legible.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Derecho de Oposición (Art. 21)</h3>
                    <p className="text-sm text-gray-300">Puedes oponerte al procesamiento de tus datos en ciertas circunstancias.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Transferencias internacionales */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="bg-gray-800 rounded-xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle className="h-6 w-6 text-[#8243f9]" />
              <h2 className="text-2xl font-bold text-white">Transferencias Internacionales</h2>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <p>
                Algunos de nuestros proveedores de servicios pueden estar ubicados fuera del Espacio Económico Europeo (EEE). 
                En estos casos, nos aseguramos de que se implementen las salvaguardas apropiadas.
              </p>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Decisiones de Adecuación</h3>
                <p>Transferimos datos a países que la Comisión Europea ha reconocido como que ofrecen un nivel adecuado de protección.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Cláusulas Contractuales Estándar</h3>
                <p>Utilizamos cláusulas contractuales estándar aprobadas por la Comisión Europea para transferencias a países sin decisión de adecuación.</p>
              </div>
            </div>
          </motion.section>

          {/* Ejercer derechos */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-gradient-to-r from-[#8243f9]/10 to-[#6d35d1]/10 rounded-xl p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              ¿Cómo Ejercer tus Derechos?
            </h2>
            <p className="text-gray-300 mb-6">
              Para ejercer cualquiera de tus derechos bajo el GDPR, puedes contactarnos utilizando la información 
              proporcionada a continuación. Responderemos a tu solicitud dentro de un mes.
            </p>
            
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Información Requerida</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Tu nombre completo y dirección de correo electrónico</li>
                <li>Descripción específica del derecho que deseas ejercer</li>
                <li>Información adicional que pueda ser necesaria para verificar tu identidad</li>
                <li>Si aplica, detalles específicos sobre los datos en cuestión</li>
              </ul>
            </div>
          </motion.section>

          {/* Contacto */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="bg-gray-800 rounded-xl p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              ¿Tienes Preguntas sobre el GDPR?
            </h2>
            <p className="text-gray-300 mb-6">
              Si tienes alguna pregunta sobre nuestro cumplimiento del GDPR o deseas ejercer 
              alguno de tus derechos, no dudes en contactarnos.
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