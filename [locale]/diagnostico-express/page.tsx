'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Building2, 
  User, 
  Mail, 
  Phone, 
  Globe, 
  Users, 
  ShoppingCart, 
  AlertCircle, 
  Target, 
  Calendar,
  Send,
  CheckCircle
} from 'lucide-react'

const businessModels = [
  { id: 'retail', label: 'Tienda física (retail)' },
  { id: 'ecommerce', label: 'Ecommerce/Tienda online' },
  { id: 'distribuidor', label: 'Distribuidor mayorista' },
  { id: 'marketplace', label: 'Marketplace (Amazon, etc)' },
  { id: 'fabricante', label: 'Fabricante/Diseñador' }
]

const teamSizes = [
  'Solo yo',
  '2-5 personas',
  '6-20 personas',
  '21-50 personas',
  'Más de 50'
]

const monthlyOrders = [
  'Menos de 100',
  '100-500',
  '500-2000',
  'Más de 2000'
]

const challenges = [
  'Perdemos clientes por responder tarde',
  'Demasiado tiempo en gestión manual de pedidos',
  'No sabemos qué productos venden mejor',
  'Inventario desorganizado',
  'Escaparates sin estrategia clara',
  'Competencia más automatizada',
  'Equipo sobrecargado',
  'No aprovechamos datos de clientes',
  'Otro'
]

const goals = [
  'Aumentar ventas sin más personal',
  'Automatizar atención al cliente',
  'Optimizar gestión de inventario',
  'Mejorar análisis de productos/escaparates',
  'Reducir tareas administrativas',
  'Competir con grandes marcas',
  'Escalar sin aumentar caos',
  'Otro'
]

const urgencyOptions = [
  'Esta semana',
  'En 1-2 semanas',
  'Este mes',
  'Solo exploro opciones'
]

export default function DiagnosticoExpress() {
  const [formData, setFormData] = useState({
    companyName: '',
    fullName: '',
    email: '',
    phone: '',
    website: '',
    businessModels: [] as string[],
    teamSize: '',
    monthlyOrders: '',
    challenges: [] as string[],
    goals: [] as string[],
    urgency: '',
    currentTools: '',
    otherChallenge: '',
    otherGoal: ''
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [diagnostico, setDiagnostico] = useState('')

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const handleCheckboxChange = (field: 'businessModels' | 'challenges' | 'goals', value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }))
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.companyName.trim()) newErrors.companyName = 'El nombre de la empresa es requerido'
    if (!formData.fullName.trim()) newErrors.fullName = 'El nombre completo es requerido'
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El email no es válido'
    }
    if (!formData.phone.trim()) newErrors.phone = 'El teléfono es requerido'
    if (formData.businessModels.length === 0) newErrors.businessModels = 'Selecciona al menos un modelo de negocio'
    if (!formData.teamSize) newErrors.teamSize = 'Selecciona el tamaño del equipo'
    if (!formData.monthlyOrders) newErrors.monthlyOrders = 'Selecciona el número de pedidos mensuales'
    if (formData.challenges.length === 0) newErrors.challenges = 'Selecciona al menos un desafío'
    if (formData.challenges.length > 3) newErrors.challenges = 'Selecciona máximo 3 desafíos'
    if (formData.goals.length === 0) newErrors.goals = 'Selecciona al menos un objetivo'
    if (formData.goals.length > 3) newErrors.goals = 'Selecciona máximo 3 objetivos'
    if (!formData.urgency) newErrors.urgency = 'Selecciona cuándo necesitas la solución'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/diagnostico', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        const result = await response.json()
        setDiagnostico(result.diagnostico)
        setIsSubmitted(true)
      } else {
        throw new Error('Error al enviar el formulario')
      }
    } catch (error) {
      console.error('Error:', error)
      setErrors({ submit: 'Error al enviar el formulario. Inténtalo de nuevo.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-900 py-12">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            {/* Header de éxito */}
            <div className="text-center mb-8">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-white mb-4">
                ¡Diagnóstico Generado!
              </h2>
              <p className="text-lg text-white/80">
                Aquí tienes tu análisis personalizado de oportunidades de automatización
              </p>
            </div>

            {/* Diagnóstico */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-8">
              <div className="prose prose-invert max-w-none">
                <div 
                  className="text-white leading-relaxed whitespace-pre-line"
                  dangerouslySetInnerHTML={{ 
                    __html: diagnostico.replace(/\n/g, '<br>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                  }}
                />
              </div>
            </div>

            {/* CTA para contacto */}
            <div className="bg-gradient-to-r from-[#8243f9]/20 to-[#6d35d1]/20 rounded-2xl p-8 border border-[#8243f9]/30 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                ¿Quieres implementar estas mejoras?
              </h3>
              <p className="text-white/80 mb-6">
                Nuestro equipo puede ayudarte a automatizar estos procesos y escalar tu negocio de moda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/#contact"
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center px-8 py-3 bg-[#8243f9] hover:bg-[#6d35d1] text-white font-semibold rounded-lg transition-colors duration-200"
                >
                  Contactar Ahora
                </motion.a>
                <motion.a
                  href="/"
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center px-8 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-200"
                >
                  Volver al Inicio
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="pt-20 pb-12">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Diagnóstico Express{' '}
              <span className="bg-gradient-to-r from-[#8243f9] to-[#6d35d1] bg-clip-text text-transparent">
                Gratuito
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Solo 2 minutos. Responde estas preguntas y recibe un análisis personalizado con las automatizaciones que tu negocio necesita.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="pb-20">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Información Básica */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Building2 className="h-6 w-6 mr-3 text-[#8243f9]" />
                  Información Básica
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Nombre de la empresa *
                    </label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => handleInputChange('companyName', e.target.value)}
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:ring-2 focus:ring-[#8243f9] focus:border-transparent"
                      placeholder="Ej: Mi Empresa de Moda"
                    />
                    {errors.companyName && <p className="text-red-400 text-sm mt-1">{errors.companyName}</p>}
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:ring-2 focus:ring-[#8243f9] focus:border-transparent"
                      placeholder="Tu nombre completo"
                    />
                    {errors.fullName && <p className="text-red-400 text-sm mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:ring-2 focus:ring-[#8243f9] focus:border-transparent"
                      placeholder="tu@email.com"
                    />
                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      Teléfono/WhatsApp *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:ring-2 focus:ring-[#8243f9] focus:border-transparent"
                      placeholder="+34 600 000 000"
                    />
                    {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-white font-medium mb-2">
                      Sitio web (opcional)
                    </label>
                    <input
                      type="url"
                      value={formData.website}
                      onChange={(e) => handleInputChange('website', e.target.value)}
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:ring-2 focus:ring-[#8243f9] focus:border-transparent"
                      placeholder="https://tuempresa.com"
                    />
                  </div>
                </div>
              </div>

              {/* Modelo de Negocio */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <ShoppingCart className="h-6 w-6 mr-3 text-[#8243f9]" />
                  Selecciona tu modelo de negocio *
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {businessModels.map((model) => (
                    <label key={model.id} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.businessModels.includes(model.id)}
                        onChange={() => handleCheckboxChange('businessModels', model.id)}
                        className="w-5 h-5 text-[#8243f9] bg-white/20 border-white/30 rounded focus:ring-[#8243f9] focus:ring-2"
                      />
                      <span className="text-white">{model.label}</span>
                    </label>
                  ))}
                </div>
                {errors.businessModels && <p className="text-red-400 text-sm mt-2">{errors.businessModels}</p>}
              </div>

              {/* Tamaño del Equipo y Pedidos */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <Users className="h-6 w-6 mr-3 text-[#8243f9]" />
                    Tamaño del equipo *
                  </h3>
                  <select
                    value={formData.teamSize}
                    onChange={(e) => handleInputChange('teamSize', e.target.value)}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:ring-2 focus:ring-[#8243f9] focus:border-transparent"
                  >
                    <option value="" className="bg-gray-800">Selecciona una opción</option>
                    {teamSizes.map((size) => (
                      <option key={size} value={size} className="bg-gray-800">{size}</option>
                    ))}
                  </select>
                  {errors.teamSize && <p className="text-red-400 text-sm mt-2">{errors.teamSize}</p>}
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <ShoppingCart className="h-6 w-6 mr-3 text-[#8243f9]" />
                    Pedidos/clientes mensuales *
                  </h3>
                  <select
                    value={formData.monthlyOrders}
                    onChange={(e) => handleInputChange('monthlyOrders', e.target.value)}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:ring-2 focus:ring-[#8243f9] focus:border-transparent"
                  >
                    <option value="" className="bg-gray-800">Selecciona una opción</option>
                    {monthlyOrders.map((order) => (
                      <option key={order} value={order} className="bg-gray-800">{order}</option>
                    ))}
                  </select>
                  {errors.monthlyOrders && <p className="text-red-400 text-sm mt-2">{errors.monthlyOrders}</p>}
                </div>
              </div>

              {/* Desafíos */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <AlertCircle className="h-6 w-6 mr-3 text-[#8243f9]" />
                  ¿Cuáles son tus mayores desafíos? * (máximo 3)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {challenges.map((challenge) => (
                    <label key={challenge} className="flex items-start space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.challenges.includes(challenge)}
                        onChange={() => handleCheckboxChange('challenges', challenge)}
                        disabled={!formData.challenges.includes(challenge) && formData.challenges.length >= 3}
                        className="w-5 h-5 text-[#8243f9] bg-white/20 border-white/30 rounded focus:ring-[#8243f9] focus:ring-2 mt-1"
                      />
                      <span className="text-white">{challenge}</span>
                    </label>
                  ))}
                </div>
                {formData.challenges.includes('Otro') && (
                  <div className="mt-4">
                    <input
                      type="text"
                      value={formData.otherChallenge}
                      onChange={(e) => handleInputChange('otherChallenge', e.target.value)}
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:ring-2 focus:ring-[#8243f9] focus:border-transparent"
                      placeholder="Describe tu desafío específico"
                    />
                  </div>
                )}
                {errors.challenges && <p className="text-red-400 text-sm mt-2">{errors.challenges}</p>}
              </div>

              {/* Objetivos */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Target className="h-6 w-6 mr-3 text-[#8243f9]" />
                  ¿Qué quieres lograr? * (máximo 3)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {goals.map((goal) => (
                    <label key={goal} className="flex items-start space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.goals.includes(goal)}
                        onChange={() => handleCheckboxChange('goals', goal)}
                        disabled={!formData.goals.includes(goal) && formData.goals.length >= 3}
                        className="w-5 h-5 text-[#8243f9] bg-white/20 border-white/30 rounded focus:ring-[#8243f9] focus:ring-2 mt-1"
                      />
                      <span className="text-white">{goal}</span>
                    </label>
                  ))}
                </div>
                {formData.goals.includes('Otro') && (
                  <div className="mt-4">
                    <input
                      type="text"
                      value={formData.otherGoal}
                      onChange={(e) => handleInputChange('otherGoal', e.target.value)}
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:ring-2 focus:ring-[#8243f9] focus:border-transparent"
                      placeholder="Describe tu objetivo específico"
                    />
                  </div>
                )}
                {errors.goals && <p className="text-red-400 text-sm mt-2">{errors.goals}</p>}
              </div>

              {/* Urgencia */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Calendar className="h-6 w-6 mr-3 text-[#8243f9]" />
                  ¿Cuándo necesitas una solución? *
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {urgencyOptions.map((option) => (
                    <label key={option} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name="urgency"
                        value={option}
                        checked={formData.urgency === option}
                        onChange={(e) => handleInputChange('urgency', e.target.value)}
                        className="w-5 h-5 text-[#8243f9] bg-white/20 border-white/30 focus:ring-[#8243f9] focus:ring-2"
                      />
                      <span className="text-white">{option}</span>
                    </label>
                  ))}
                </div>
                {errors.urgency && <p className="text-red-400 text-sm mt-2">{errors.urgency}</p>}
              </div>

              {/* Herramientas Actuales */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Globe className="h-6 w-6 mr-3 text-[#8243f9]" />
                  Herramientas actuales (opcional)
                </h3>
                <textarea
                  value={formData.currentTools}
                  onChange={(e) => handleInputChange('currentTools', e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:ring-2 focus:ring-[#8243f9] focus:border-transparent resize-none"
                  placeholder="Ej: Shopify, Excel, ninguna..."
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-12 py-4 bg-[#8243f9] hover:bg-[#6d35d1] disabled:bg-gray-500 text-white font-semibold rounded-lg transition-all duration-200 text-lg"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-3" />
                      Obtener Mi Diagnóstico Gratuito
                    </>
                  )}
                </motion.button>
                
                <p className="text-white/60 text-sm mt-4">
                  Recibirás tu diagnóstico personalizado por email en menos de 24 horas. Sin compromiso.
                </p>
                
                {errors.submit && (
                  <p className="text-red-400 text-sm mt-4">{errors.submit}</p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
