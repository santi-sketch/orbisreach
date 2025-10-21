import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validar que todos los campos requeridos estén presentes
    const requiredFields = [
      'companyName',
      'fullName', 
      'email',
      'phone',
      'businessModels',
      'teamSize',
      'monthlyOrders',
      'challenges',
      'goals',
      'urgency'
    ]

    for (const field of requiredFields) {
      if (!body[field] || (Array.isArray(body[field]) && body[field].length === 0)) {
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

    // Validar que businessModels tenga al menos un elemento
    if (body.businessModels.length === 0) {
      return NextResponse.json(
        { error: 'Debe seleccionar al menos un modelo de negocio' },
        { status: 400 }
      )
    }

    // Validar que challenges tenga entre 1 y 3 elementos
    if (body.challenges.length === 0 || body.challenges.length > 3) {
      return NextResponse.json(
        { error: 'Debe seleccionar entre 1 y 3 desafíos' },
        { status: 400 }
      )
    }

    // Validar que goals tenga entre 1 y 3 elementos
    if (body.goals.length === 0 || body.goals.length > 3) {
      return NextResponse.json(
        { error: 'Debe seleccionar entre 1 y 3 objetivos' },
        { status: 400 }
      )
    }

    // Generar diagnóstico con OpenAI
    const diagnostico = await generateDiagnostico(body)

    // Preparar datos para Supabase
    const diagnosticoData = {
      company_name: body.companyName,
      full_name: body.fullName,
      email: body.email,
      phone: body.phone,
      website: body.website || null,
      business_models: body.businessModels,
      team_size: body.teamSize,
      monthly_orders: body.monthlyOrders,
      challenges: body.challenges,
      goals: body.goals,
      urgency: body.urgency,
      current_tools: body.currentTools || null,
      other_challenge: body.otherChallenge || null,
      other_goal: body.otherGoal || null,
      diagnostico_ai: diagnostico,
      created_at: new Date().toISOString()
    }

    // Aquí deberías conectar con Supabase
    // Por ahora, solo simulamos el guardado
    console.log('Datos del diagnóstico:', diagnosticoData)

    // TODO: Implementar conexión real con Supabase
    // const { data, error } = await supabase
    //   .from('diagnosticos_express')
    //   .insert([diagnosticoData])

    // if (error) {
    //   console.error('Error al guardar en Supabase:', error)
    //   return NextResponse.json(
    //     { error: 'Error al guardar los datos' },
    //     { status: 500 }
    //   )
    // }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Diagnóstico generado correctamente',
        diagnostico: diagnostico,
        id: 'temp-id-' + Date.now()
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error en el endpoint de diagnóstico:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}

async function generateDiagnostico(data: any) {
  const openaiApiKey = process.env.OPENAI_API_KEY
  
  if (!openaiApiKey) {
    throw new Error('OPENAI_API_KEY no está configurada')
  }

  const prompt = `
Eres un consultor experto en automatización de IA para empresas de moda y retail. 
Analiza la siguiente información de una empresa y genera un diagnóstico profesional 
que identifique los puntos de mejora SIN dar soluciones específicas.

INFORMACIÓN DE LA EMPRESA:
- Empresa: ${data.companyName}
- Modelo de negocio: ${data.businessModels.join(', ')}
- Tamaño del equipo: ${data.teamSize}
- Pedidos mensuales: ${data.monthlyOrders}
- Desafíos principales: ${data.challenges.join(', ')}
- Objetivos: ${data.goals.join(', ')}
- Urgencia: ${data.urgency}
- Herramientas actuales: ${data.currentTools || 'No especificadas'}

INSTRUCCIONES:
1. Identifica los 3-5 puntos críticos de mejora más importantes
2. Explica el impacto de cada problema en el negocio
3. Menciona las oportunidades de crecimiento no aprovechadas
4. NO proporciones soluciones específicas ni herramientas
5. Mantén un tono profesional pero accesible
6. Máximo 500 palabras
7. Enfócate en problemas de procesos, eficiencia y escalabilidad

Formato de respuesta:
- Título: "Diagnóstico de Oportunidades de Automatización"
- Puntos de mejora numerados con títulos descriptivos
- Explicación del impacto de cada problema
- Conclusión sobre el potencial de mejora

Responde en español y sé específico sobre la industria de la moda/retail.
`

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openaiApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [
          {
            role: 'system',
            content: 'Eres un consultor experto en automatización de IA para empresas de moda y retail. Generas diagnósticos profesionales que identifican problemas sin dar soluciones específicas.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        max_tokens: 800,
        temperature: 0.7,
      }),
    })

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status}`)
    }

    const result = await response.json()
    return result.choices[0].message.content

  } catch (error) {
    console.error('Error al generar diagnóstico con OpenAI:', error)
    throw new Error('Error al generar el diagnóstico automático')
  }
}
