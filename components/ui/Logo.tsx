'use client'

import Image from 'next/image'
import { Brain } from 'lucide-react'

interface LogoProps {
  className?: string
  showText?: boolean
  variant?: 'default' | 'white' | 'dark'
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export default function Logo({ 
  className = '', 
  showText = true, 
  variant = 'default',
  size = 'md'
}: LogoProps) {
  // Usar directamente el logo sin verificar existencia para evitar delay
  const logoPath = '/assets/images/logo/logo.png'
  
  const sizeClasses = {
    sm: 'h-4 w-auto',
    md: 'h-8 w-auto', 
    lg: 'h-12 w-auto',
    xl: 'h-16 w-auto'
  }

  const dimensions = {
    sm: { width: 60, height: 16 },
    md: { width: 120, height: 32 },
    lg: { width: 180, height: 48 },
    xl: { width: 240, height: 64 }
  }

  // Asegurar que el tamaño existe
  const currentSize = size || 'md'

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className="relative">
        <Image
          src={logoPath}
          alt="OrbisReach Logo"
          width={dimensions[currentSize].width}
          height={dimensions[currentSize].height}
          className={`object-contain ${sizeClasses[currentSize]}`}
          priority
          onError={(e) => {
            // Fallback si la imagen no carga
            const target = e.target as HTMLImageElement
            target.style.display = 'none'
            const parent = target.parentElement
            if (parent) {
              parent.innerHTML = `<div class="flex items-center space-x-2"><svg class="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>${showText ? '<span class="text-2xl font-bold text-white">OrbisReach</span>' : ''}</div>`
            }
          }}
        />
      </div>
    </div>
  )
}
