'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Globe } from 'lucide-react'
import Logo from '@/components/ui/Logo'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [language, setLanguage] = useState('es')

  const navigation = [
    { name: 'Inicio', href: '/' },
    { name: 'Proceso', href: '/#how-we-work' },
    { name: 'Contacto', href: '#contact' },
  ]

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es')
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full z-50 bg-gray-900/20 backdrop-blur-sm transition-all duration-300"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 w-full max-w-none">
          {/* Logo - Extremo Izquierdo */}
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer flex-shrink-0"
          >
            <Logo variant="white" size="lg" />
          </motion.a>

          {/* Desktop Navigation - Centro Perfecto */}
          <div className="hidden md:flex items-center space-x-8 flex-1 justify-center absolute left-1/2 transform -translate-x-1/2">
            {navigation.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ y: -2 }}
                className="text-white hover:text-[#8243f9] transition-colors duration-200 font-medium"
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Language Selector - Extremo Derecho */}
          <div className="hidden md:flex items-center ml-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage}
              className="flex items-center justify-center px-4 py-2 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg transition-all duration-200 backdrop-blur-sm border border-white/20 min-w-[60px]"
            >
              <span className="text-lg">{language === 'es' ? 'ES' : 'EN'}</span>
            </motion.button>
          </div>

          {/* Mobile menu button - Extremo Derecho */}
          <div className="md:hidden flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage}
              className="flex items-center justify-center px-3 py-2 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg transition-all duration-200 backdrop-blur-sm border border-white/20 min-w-[50px]"
            >
              <span className="text-base">{language === 'es' ? 'ES' : 'EN'}</span>
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-white hover:bg-white/20 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200"
            >
              <div className="px-4 py-6 space-y-4">
                {navigation.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsOpen(false)}
                    className="block text-lg text-gray-700 hover:text-primary-600 transition-colors duration-200"
                  >
                    {item.name}
                  </motion.a>
                ))}
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navigation.length * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleLanguage}
                  className="w-full flex items-center justify-center px-4 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg transition-all duration-200 backdrop-blur-sm border border-white/20 mt-4"
                >
                  <span className="text-lg">{language === 'es' ? 'ES' : 'EN'}</span>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
