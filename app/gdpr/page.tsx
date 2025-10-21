'use client'

import { motion } from 'framer-motion'
import Logo from '@/components/ui/Logo'

export default function GDPRPage() {
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
            Cumplimiento{' '}
            <span className="bg-gradient-to-r from-[#8243f9] to-[#6d35d1] bg-clip-text text-transparent">
              GDPR
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Reglamento General de Protección de Datos (UE) 2016/679
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 prose prose-invert max-w-none"
          >
            <h2 className="text-2xl font-bold text-white mb-6">¿Qué es el GDPR?</h2>
            <p className="text-gray-300 mb-6">
              El Reglamento General de Protección de Datos (GDPR) es la ley de protección de datos más estricta del mundo. Entró en vigor el 25 de mayo de 2018 y se aplica a todas las organizaciones que procesan datos personales de ciudadanos de la UE, independientemente de dónde se encuentre la organización.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6">Nuestro Compromiso con el GDPR</h2>
            <p className="text-gray-300 mb-6">
              En OrbisReach, nos comprometemos a cumplir plenamente con el GDPR y a proteger los derechos de privacidad de todos nuestros usuarios. Hemos implementado medidas técnicas y organizativas apropiadas para garantizar el cumplimiento.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6">Tus Derechos bajo el GDPR</h2>
            
            <h3 className="text-xl font-semibold text-white mb-4">1. Derecho de Acceso (Artículo 15)</h3>
            <p className="text-gray-300 mb-4">
              Tienes derecho a obtener confirmación de si estamos procesando tus datos personales y, si es así, acceso a esos datos.
            </p>

            <h3 className="text-xl font-semibold text-white mb-4">2. Derecho de Rectificación (Artículo 16)</h3>
            <p className="text-gray-300 mb-4">
              Tienes derecho a que corrijamos datos personales inexactos o incompletos.
            </p>

            <h3 className="text-xl font-semibold text-white mb-4">3. Derecho al Olvido (Artículo 17)</h3>
            <p className="text-gray-300 mb-4">
              Tienes derecho a solicitar la eliminación de tus datos personales en ciertas circunstancias.
            </p>

            <h3 className="text-xl font-semibold text-white mb-4">4. Derecho de Limitación del Procesamiento (Artículo 18)</h3>
            <p className="text-gray-300 mb-4">
              Tienes derecho a restringir el procesamiento de tus datos personales en ciertas circunstancias.
            </p>

            <h3 className="text-xl font-semibold text-white mb-4">5. Derecho de Portabilidad (Artículo 20)</h3>
            <p className="text-gray-300 mb-4">
              Tienes derecho a recibir tus datos personales en un formato estructurado y legible por máquina.
            </p>

            <h3 className="text-xl font-semibold text-white mb-4">6. Derecho de Oposición (Artículo 21)</h3>
            <p className="text-gray-300 mb-6">
              Tienes derecho a oponerte al procesamiento de tus datos personales en ciertas circunstancias.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6">Base Legal para el Procesamiento</h2>
            <p className="text-gray-300 mb-4">
              Procesamos tus datos personales basándonos en las siguientes bases legales:
            </p>
            <ul className="text-gray-300 mb-6 list-disc list-inside space-y-2">
              <li><strong>Consentimiento:</strong> Cuando has dado tu consentimiento explícito</li>
              <li><strong>Ejecución de contrato:</strong> Para proporcionar nuestros servicios</li>
              <li><strong>Interés legítimo:</strong> Para mejorar nuestros servicios y comunicaciones</li>
              <li><strong>Cumplimiento legal:</strong> Para cumplir con obligaciones legales</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-6">Transferencias Internacionales</h2>
            <p className="text-gray-300 mb-6">
              Algunos de nuestros proveedores de servicios pueden estar ubicados fuera del Espacio Económico Europeo (EEE). Cuando transferimos datos fuera del EEE, nos aseguramos de que existan salvaguardas adecuadas, como cláusulas contractuales estándar aprobadas por la UE.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6">Retención de Datos</h2>
            <p className="text-gray-300 mb-4">
              Conservamos tus datos personales solo durante el tiempo necesario para:
            </p>
            <ul className="text-gray-300 mb-6 list-disc list-inside space-y-2">
              <li>Cumplir con los propósitos para los que fueron recopilados</li>
              <li>Cumplir con obligaciones legales</li>
              <li>Resolver disputas</li>
              <li>Hacer cumplir nuestros acuerdos</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-6">Seguridad de Datos</h2>
            <p className="text-gray-300 mb-4">
              Hemos implementado medidas de seguridad técnicas y organizativas apropiadas para proteger tus datos personales contra:
            </p>
            <ul className="text-gray-300 mb-6 list-disc list-inside space-y-2">
              <li>Acceso no autorizado</li>
              <li>Alteración, divulgación o destrucción no autorizada</li>
              <li>Pérdida accidental</li>
              <li>Procesamiento no autorizado</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-6">Ejercer tus Derechos</h2>
            <p className="text-gray-300 mb-4">
              Para ejercer cualquiera de tus derechos bajo el GDPR, puedes contactarnos:
            </p>
            <div className="bg-gray-800/50 rounded-lg p-4 mb-6">
              <p className="text-white font-medium">Email: info@orbisreach.com</p>
              <p className="text-white font-medium">Asunto: Ejercicio de Derechos GDPR</p>
              <p className="text-white font-medium">Dirección: Barcelona, España</p>
            </div>

            <h2 className="text-2xl font-bold text-white mb-6">Autoridad de Control</h2>
            <p className="text-gray-300 mb-6">
              Tienes derecho a presentar una queja ante la autoridad de protección de datos de tu país si consideras que el procesamiento de tus datos personales infringe el GDPR. En España, la autoridad de control es la Agencia Española de Protección de Datos (AEPD).
            </p>

            <h2 className="text-2xl font-bold text-white mb-6">Actualizaciones</h2>
            <p className="text-gray-300 mb-6">
              Esta información sobre GDPR puede ser actualizada ocasionalmente para reflejar cambios en nuestras prácticas o en la legislación aplicable.
            </p>

            <div className="mt-8 p-4 bg-gradient-to-r from-[#8243f9]/20 to-[#6d35d1]/20 rounded-lg">
              <p className="text-gray-300 text-sm">
                Si tienes preguntas específicas sobre cómo aplicamos el GDPR a nuestros servicios de IA, no dudes en contactarnos.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}