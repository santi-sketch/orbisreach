import { NextRequest, NextResponse } from 'next/server'
import { subscribeToNewsletter } from '@/lib/ghl'

export async function POST(request: NextRequest) {
  try {
    const { email, name } = await request.json()

    // Validación básica
    if (!email) {
      return NextResponse.json(
        { error: 'Email es requerido' },
        { status: 400 }
      )
    }

    // Validación de formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Formato de email inválido' },
        { status: 400 }
      )
    }

    // Suscribir al newsletter en GHL
    const result = await subscribeToNewsletter(email, name)

    return NextResponse.json({
      success: true,
      message: 'Suscripción exitosa. Revisa tu email para confirmar.',
      data: result
    })

  } catch (error) {
    console.error('Error en suscripción al newsletter:', error)
    
    return NextResponse.json(
      { 
        error: 'Error interno del servidor',
        message: 'No pudimos procesar tu suscripción. Inténtalo de nuevo.'
      },
      { status: 500 }
    )
  }
}
