'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, AlertCircle, Loader2, ArrowRight, Target } from 'lucide-react'
import Logo from '@/components/ui/Logo'

const subnichos = [
  { id: 'ecommerce', name: 'E-commerce', icon: '🛒' },
  { id: 'retail', name: 'Retail Físico', icon: '🏪' },
  { id: 'distribucion', name: 'Distribución', icon: '📦' },
  { id: 'marca', name: 'Marca Propia', icon: '👗' },
]

export default function DiagnosticoExpressPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    empresa: '',
    subnicho: '',
    tamañoEmpresa: '',
    facturacionAnual: '',
    problemasActuales: '',
    objetivos: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')
  const [diagnostico, setDiagnostico] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus('idle')
    setMessage('')
    setDiagnostico('')

    try {
      const response = await fetch('/api/diagnostico', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setMessage('¡Diagnóstico generado exitosamente!')
        setDiagnostico(data.diagnostico)
      } else {
        setStatus('error')
        setMessage(data.message || 'Error al generar el diagnóstico. Inténtalo de nuevo.')
      }
    } catch (error) {
      setStatus('error')
      setMessage('Error de conexión. Inténtalo de nuevo.')
    } finally {
      setIsSubmitting(false)
    }
  }

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
            Diagnóstico{' '}
            <span className="bg-gradient-to-r from-[#8243f9] to-[#6d35d1] bg-clip-text text-transparent">
              Express
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Descubre cómo la IA puede transformar tu negocio de moda en solo 5 minutos.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Target className="h-6 w-6 text-[#8243f9] mr-3" />
              Información de tu Empresa
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-300 mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#8243f9] focus:border-transparent text-white placeholder-gray-400"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#8243f9] focus:border-transparent text-white placeholder-gray-400"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="empresa" className="block text-sm font-medium text-gray-300 mb-2">
                  Nombre de la Empresa *
                </label>
                <input
                  type="text"
                  id="empresa"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#8243f9] focus:border-transparent text-white placeholder-gray-400"
                  required
                />
              </div>

              <div>
                <label htmlFor="subnicho" className="block text-sm font-medium text-gray-300 mb-2">
                  Tipo de Negocio *
                </label>
                <select
                  id="subnicho"
                  name="subnicho"
                  value={formData.subnicho}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#8243f9] focus:border-transparent text-white"
                  required
                >
                  <option value="">Selecciona tu tipo de negocio</option>
                  {subnichos.map((subnicho) => (
                    <option key={subnicho.id} value={subnicho.id}>
                      {subnicho.icon} {subnicho.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="tamañoEmpresa" className="block text-sm font-medium text-gray-300 mb-2">
                    Tamaño de Empresa
                  </label>
                  <select
                    id="tamañoEmpresa"
                    name="tamañoEmpresa"
                    value={formData.tamañoEmpresa}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#8243f9] focus:border-transparent text-white"
                  >
                    <option value="">Selecciona el tamaño</option>
                    <option value="startup">Startup (1-10 empleados)</option>
                    <option value="pequeña">Pequeña (11-50 empleados)</option>
                    <option value="mediana">Mediana (51-200 empleados)</option>
                    <option value="grande">Grande (200+ empleados)</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="facturacionAnual" className="block text-sm font-medium text-gray-300 mb-2">
                    Facturación Anual
                  </label>
                  <select
                    id="facturacionAnual"
                    name="facturacionAnual"
                    value={formData.facturacionAnual}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#8243f9] focus:border-transparent text-white"
                  >
                    <option value="">Selecciona el rango</option>
                    <option value="0-100k">€0 - €100K</option>
                    <option value="100k-500k">€100K - €500K</option>
                    <option value="500k-1m">€500K - €1M</option>
                    <option value="1m-5m">€1M - €5M</option>
                    <option value="5m+">€5M+</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="problemasActuales" className="block text-sm font-medium text-gray-300 mb-2">
                  Principales Desafíos Actuales
                </label>
                <textarea
                  id="problemasActuales"
                  name="problemasActuales"
                  rows={3}
                  value={formData.problemasActuales}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#8243f9] focus:border-transparent text-white placeholder-gray-400"
                  placeholder="Ej: Exceso de stock, dificultad para predecir tendencias, baja conversión..."
                />
              </div>

              <div>
                <label htmlFor="objetivos" className="block text-sm font-medium text-gray-300 mb-2">
                  Objetivos Principales
                </label>
                <textarea
                  id="objetivos"
                  name="objetivos"
                  rows={3}
                  value={formData.objetivos}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#8243f9] focus:border-transparent text-white placeholder-gray-400"
                  placeholder="Ej: Aumentar ventas, reducir costos, mejorar experiencia del cliente..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#8243f9] to-[#6d35d1] hover:from-[#6d35d1] hover:to-[#8243f9] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Generando Diagnóstico...
                  </>
                ) : (
                  <>
                    Generar Diagnóstico <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </motion.button>

              {status !== 'idle' && (
                <div className={`mt-4 flex items-center justify-center space-x-2 ${
                  status === 'success' ? 'text-green-400' : 'text-red-400'
                }`}>
                  {status === 'success' ? (
                    <CheckCircle className="h-5 w-5" />
                  ) : (
                    <AlertCircle className="h-5 w-5" />
                  )}
                  <span className="text-sm text-center">{message}</span>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}