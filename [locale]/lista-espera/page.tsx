'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

export default function ListaEsperaPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')
  const t = useTranslations('waitlist')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus('idle')
    setMessage('')

    const formData = new FormData(e.currentTarget)
    const payload = {
      email: String(formData.get('email') || ''),
      name: String(formData.get('name') || ''),
      company: String(formData.get('company') || ''),
      message: String(formData.get('notes') || ''),
      source: 'waitlist-servicios-ia',
    }

    try {
      // Reutilizamos el endpoint de newsletter; aceptará al menos el email
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json().catch(() => ({}))
      if (res.ok) {
        setStatus('success')
        setMessage(t('form.success'))
        e.currentTarget.reset()
      } else {
        setStatus('error')
        setMessage(data?.message || t('form.error'))
      }
    } catch (err) {
      setStatus('error')
      setMessage(t('form.error'))
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
        >
          <h1 className="text-3xl font-bold text-white mb-2 text-center">{t('title')}</h1>
          <p className="text-gray-300 mb-8 text-center">
            {t('subtitle')}
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm text-gray-300 mb-1">{t('form.name')}</label>
              <input id="name" name="name" type="text" className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8243f9]" placeholder={t('form.namePlaceholder')} />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-gray-300 mb-1">{t('form.email')}</label>
              <input id="email" name="email" type="email" required className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8243f9]" placeholder={t('form.emailPlaceholder')} />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm text-gray-300 mb-1">{t('form.company')}</label>
              <input id="company" name="company" type="text" className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8243f9]" placeholder={t('form.companyPlaceholder')} />
            </div>
            <div>
              <label htmlFor="notes" className="block text-sm text-gray-300 mb-1">{t('form.notes')}</label>
              <textarea id="notes" name="notes" rows={4} className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8243f9]" placeholder={t('form.notesPlaceholder')} />
            </div>

            {message && (
              <div className={`px-4 py-3 rounded-lg text-sm ${status === 'success' ? 'bg-green-500/10 text-green-300' : status === 'error' ? 'bg-red-500/10 text-red-300' : 'text-gray-300'}`}>
                {message}
              </div>
            )}

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-[#8243f9] to-[#6d35d1] disabled:opacity-60"
              >
                {isSubmitting ? t('form.submitting') : t('form.submit')}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  )
}