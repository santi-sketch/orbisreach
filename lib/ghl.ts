// Configuración de GoHighLevel (GHL)
// Reemplaza estas variables con tus credenciales reales de GHL

export const ghlConfig = {
  apiKey: process.env.GHL_API_KEY || '',
  locationId: process.env.GHL_LOCATION_ID || '',
  baseUrl: 'https://services.leadconnectorhq.com'
}

// Función para crear un evento en el calendario de GHL
export async function createGHLAppointment(appointmentData: {
  title: string
  description: string
  startTime: string
  endTime: string
  contactName: string
  contactEmail: string
  contactPhone: string
  locationId: string
}) {
  if (!ghlConfig.apiKey || !ghlConfig.locationId) {
    throw new Error('GHL_API_KEY y GHL_LOCATION_ID deben estar configurados')
  }

  try {
    const response = await fetch(`${ghlConfig.baseUrl}/calendars/${ghlConfig.locationId}/appointments`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${ghlConfig.apiKey}`,
        'Content-Type': 'application/json',
        'Version': '2021-07-28'
      },
      body: JSON.stringify({
        title: appointmentData.title,
        description: appointmentData.description,
        startTime: appointmentData.startTime,
        endTime: appointmentData.endTime,
        contact: {
          name: appointmentData.contactName,
          email: appointmentData.contactEmail,
          phone: appointmentData.contactPhone
        },
        locationId: appointmentData.locationId
      })
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(`Error de GHL: ${errorData.message || response.statusText}`)
    }

    return await response.json()
  } catch (error) {
    console.error('Error al crear cita en GHL:', error)
    throw error
  }
}

// Función para obtener horarios disponibles
export async function getAvailableTimeSlots(date: string) {
  if (!ghlConfig.apiKey || !ghlConfig.locationId) {
    throw new Error('GHL_API_KEY y GHL_LOCATION_ID deben estar configurados')
  }

  try {
    const response = await fetch(`${ghlConfig.baseUrl}/calendars/${ghlConfig.locationId}/availability?date=${date}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${ghlConfig.apiKey}`,
        'Version': '2021-07-28'
      }
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(`Error de GHL: ${errorData.message || response.statusText}`)
    }

    return await response.json()
  } catch (error) {
    console.error('Error al obtener horarios disponibles:', error)
    throw error
  }
}

// Función para crear un contacto en GHL
export async function createGHLContact(contactData: {
  name: string
  email: string
  phone: string
  company?: string
  tags?: string[]
}) {
  if (!ghlConfig.apiKey || !ghlConfig.locationId) {
    throw new Error('GHL_API_KEY y GHL_LOCATION_ID deben estar configurados')
  }

  try {
    const response = await fetch(`${ghlConfig.baseUrl}/contacts/`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${ghlConfig.apiKey}`,
        'Content-Type': 'application/json',
        'Version': '2021-07-28'
      },
      body: JSON.stringify({
        name: contactData.name,
        email: contactData.email,
        phone: contactData.phone,
        companyName: contactData.company,
        tags: contactData.tags || ['Website Lead'],
        locationId: ghlConfig.locationId
      })
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(`Error de GHL: ${errorData.message || response.statusText}`)
    }

    return await response.json()
  } catch (error) {
    console.error('Error al crear contacto en GHL:', error)
    throw error
  }
}

// Función para suscribir al newsletter y activar secuencia de emails
export async function subscribeToNewsletter(email: string, name?: string) {
  if (!ghlConfig.apiKey || !ghlConfig.locationId) {
    throw new Error('GHL_API_KEY y GHL_LOCATION_ID deben estar configurados')
  }

  try {
    // 1. Crear o actualizar contacto en GHL
    const contactResponse = await fetch(`${ghlConfig.baseUrl}/contacts/`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${ghlConfig.apiKey}`,
        'Content-Type': 'application/json',
        'Version': '2021-07-28'
      },
      body: JSON.stringify({
        email: email,
        name: name || email.split('@')[0], // Usar email como nombre si no se proporciona
        tags: ['Newsletter Subscriber', 'Website Lead'],
        locationId: ghlConfig.locationId,
        customFields: [
          {
            key: 'newsletter_subscription_date',
            value: new Date().toISOString()
          }
        ]
      })
    })

    if (!contactResponse.ok) {
      const errorData = await contactResponse.json()
      throw new Error(`Error al crear contacto: ${errorData.message || contactResponse.statusText}`)
    }

    const contact = await contactResponse.json()

    // 2. Activar secuencia de emails (si tienes una configurada en GHL)
    // Nota: Necesitarás configurar esta secuencia en tu dashboard de GHL
    try {
      await fetch(`${ghlConfig.baseUrl}/campaigns/sequences/start`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${ghlConfig.apiKey}`,
          'Content-Type': 'application/json',
          'Version': '2021-07-28'
        },
        body: JSON.stringify({
          contactId: contact.contact.id,
          sequenceId: process.env.GHL_NEWSLETTER_SEQUENCE_ID || 'newsletter-welcome', // ID de tu secuencia
          locationId: ghlConfig.locationId
        })
      })
    } catch (sequenceError) {
      console.log('Secuencia de emails no configurada o error:', sequenceError)
      // No lanzar error aquí, el contacto ya se creó
    }

    return {
      success: true,
      contact: contact.contact,
      message: 'Suscripción exitosa. Revisa tu email para confirmar.'
    }

  } catch (error) {
    console.error('Error al suscribir al newsletter:', error)
    throw error
  }
}
