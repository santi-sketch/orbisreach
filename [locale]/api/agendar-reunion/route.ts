import { NextRequest, NextResponse } from 'next/server'
import { createGHLAppointment, createGHLContact } from '@/lib/ghl'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validar campos requeridos
    const requiredFields = ['name', 'email', 'phone', 'service', 'preferredDate', 'preferredTime']
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Campo requerido faltante: ${field}` },
          { status: 400 }
        )
      }
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Formato de email inválido' },
        { status: 400 }
      )
    }

    // Crear fecha y hora de la cita
    const appointmentDate = new Date(`${body.preferredDate}T${body.preferredTime}`)
    const endTime = new Date(appointmentDate.getTime() + 30 * 60 * 1000) // +30 minutos

    // Crear contacto en GHL
    const contact = await createGHLContact({
      name: body.name,
      email: body.email,
      phone: body.phone,
      company: body.company,
      tags: ['Website Lead', 'Reunión Agendada', body.service]
    })

    // Crear cita en GHL
    const appointment = await createGHLAppointment({
      title: `Consulta: ${body.service}`,
      description: `
        Servicio de interés: ${body.service}
        Empresa: ${body.company || 'No especificada'}
        Mensaje: ${body.message || 'Sin mensaje adicional'}
        
        Contacto:
        - Nombre: ${body.name}
        - Email: ${body.email}
        - Teléfono: ${body.phone}
      `,
      startTime: appointmentDate.toISOString(),
      endTime: endTime.toISOString(),
      contactName: body.name,
      contactEmail: body.email,
      contactPhone: body.phone,
      locationId: process.env.GHL_LOCATION_ID || ''
    })

    // Enviar email de confirmación (opcional)
    // Aquí podrías integrar con un servicio de email como SendGrid, Resend, etc.

    return NextResponse.json({
      success: true,
      message: 'Reunión agendada correctamente',
      appointmentId: appointment.id,
      contactId: contact.id,
      appointment: {
        title: appointment.title,
        startTime: appointment.startTime,
        endTime: appointment.endTime
      }
    })

  } catch (error) {
    console.error('Error en el endpoint de agendar reunión:', error)
    
    // Si es un error de GHL, devolver mensaje específico
    if (error.message.includes('GHL')) {
      return NextResponse.json(
        { error: 'Error al conectar con el calendario. Por favor, inténtalo de nuevo.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}

// Endpoint para obtener horarios disponibles
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const date = searchParams.get('date')

    if (!date) {
      return NextResponse.json(
        { error: 'Parámetro de fecha requerido' },
        { status: 400 }
      )
    }

    const { getAvailableTimeSlots } = await import('@/lib/ghl')
    const timeSlots = await getAvailableTimeSlots(date)

    return NextResponse.json({
      success: true,
      timeSlots: timeSlots.availableSlots || []
    })

  } catch (error) {
    console.error('Error al obtener horarios disponibles:', error)
    return NextResponse.json(
      { error: 'Error al obtener horarios disponibles' },
      { status: 500 }
    )
  }
}

