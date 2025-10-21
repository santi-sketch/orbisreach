import { NextRequest, NextResponse } from 'next/server'

async function generateDiagnosticoWithOpenAI(data: any) {
  const { nombre, empresa, subnicho, tamañoEmpresa, facturacionAnual, problemasActuales, objetivos } = data

  // Verificar que la API key esté configurada
  if (!process.env.OPENAI_API_KEY) {
    throw new Error('OPENAI_API_KEY no está configurada')
  }

  // Mapeo de subnichos
  const subnichoMap = {
    'ecommerce': 'E-commerce',
    'retail': 'Retail Físico', 
    'distribucion': 'Distribución',
    'marca': 'Marca Propia'
  }

  // Mapeo de tamaños
  const tamañoMap = {
    'startup': 'Startup (1-10 empleados)',
    'pequeña': 'Pequeña (11-50 empleados)',
    'mediana': 'Mediana (51-200 empleados)',
    'grande': 'Grande (200+ empleados)'
  }

  const subnichoName = subnichoMap[subnicho as keyof typeof subnichoMap] || subnicho
  const tamañoName = tamañoMap[tamañoEmpresa as keyof typeof tamañoMap] || tamañoEmpresa

  // Crear prompt para OpenAI
  const prompt = `Eres un consultor experto en IA para empresas de moda y retail. 

Genera un diagnóstico personalizado y detallado para la empresa "${empresa}" basándote en la siguiente información:

**Información de la empresa:**
- Nombre: ${nombre}
- Empresa: ${empresa}
- Tipo de negocio: ${subnichoName}
- Tamaño: ${tamañoName || 'No especificado'}
- Facturación anual: ${facturacionAnual || 'No especificada'}
- Desafíos actuales: ${problemasActuales || 'No especificados'}
- Objetivos: ${objetivos || 'No especificados'}

**Instrucciones:**
1. Genera un diagnóstico profesional y personalizado
2. Incluye análisis específicos basados en el tipo de negocio (${subnichoName})
3. Proporciona recomendaciones concretas de IA aplicables a su sector
4. Incluye estimaciones de ROI realistas
5. Sugiere un plan de implementación por fases
6. Mantén un tono profesional pero accesible
7. Usa emojis para hacer el contenido más atractivo
8. Incluye métricas específicas y casos de uso reales

**Formato del diagnóstico:**
- Título personalizado
- Saludo personalizado
- Análisis del perfil de empresa
- Desafíos identificados y análisis
- Recomendaciones específicas por sector
- Plan de acción por fases
- ROI estimado con métricas
- Próximos pasos concretos

Genera un diagnóstico completo y profesional que demuestre valor real para ${empresa}.`

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [
          {
            role: 'system',
            content: 'Eres un consultor experto en IA para empresas de moda y retail. Generas diagnósticos personalizados, profesionales y accionables.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        max_tokens: 2000,
        temperature: 0.7,
      }),
    })

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status}`)
    }

    const result = await response.json()
    return result.choices[0].message.content

  } catch (error) {
    console.error('Error calling OpenAI API:', error)
    throw error
  }
}

async function generateDiagnostico(data: any) {
  const { nombre, empresa, subnicho, tamañoEmpresa, facturacionAnual, problemasActuales, objetivos } = data

  // Mapeo de subnichos
  const subnichoMap = {
    'ecommerce': 'E-commerce',
    'retail': 'Retail Físico', 
    'distribucion': 'Distribución',
    'marca': 'Marca Propia'
  }

  // Mapeo de tamaños
  const tamañoMap = {
    'startup': 'Startup (1-10 empleados)',
    'pequeña': 'Pequeña (11-50 empleados)',
    'mediana': 'Mediana (51-200 empleados)',
    'grande': 'Grande (200+ empleados)'
  }

  const subnichoName = subnichoMap[subnicho as keyof typeof subnichoMap] || subnicho
  const tamañoName = tamañoMap[tamañoEmpresa as keyof typeof tamañoMap] || tamañoEmpresa

  // Generar diagnóstico basado en los datos
  let diagnostico = `# Diagnóstico Personalizado para ${empresa}\n\n`
  
  diagnostico += `**Hola ${nombre},**\n\n`
  diagnostico += `Basándome en la información proporcionada sobre ${empresa}, he generado un diagnóstico específico para tu negocio de ${subnichoName}.\n\n`

  // Análisis del perfil de empresa
  diagnostico += `## 📊 Perfil de tu Empresa\n\n`
  diagnostico += `- **Tipo de Negocio:** ${subnichoName}\n`
  if (tamañoEmpresa) diagnostico += `- **Tamaño:** ${tamañoName}\n`
  if (facturacionAnual) diagnostico += `- **Facturación Anual:** ${facturacionAnual}\n\n`

  // Análisis de problemas
  if (problemasActuales) {
    diagnostico += `## ⚠️ Desafíos Identificados\n\n`
    diagnostico += `Has mencionado los siguientes desafíos:\n`
    diagnostico += `"${problemasActuales}"\n\n`
    
    diagnostico += `**Análisis:** Estos son desafíos comunes en el sector de ${subnichoName}. La IA puede ayudarte a:\n`
    diagnostico += `- Automatizar procesos repetitivos\n`
    diagnostico += `- Predecir tendencias y demanda\n`
    diagnostico += `- Optimizar inventario y stock\n`
    diagnostico += `- Personalizar la experiencia del cliente\n\n`
  }

  // Recomendaciones específicas por subnicho
  diagnostico += `## 🎯 Recomendaciones Específicas para ${subnichoName}\n\n`

  switch (subnicho) {
    case 'ecommerce':
      diagnostico += `**Para E-commerce, te recomiendo enfocarte en:**\n\n`
      diagnostico += `1. **Motor de Recomendaciones Personalizadas**\n`
      diagnostico += `   - Aumentar conversión en un 15-25%\n`
      diagnostico += `   - Mejorar la experiencia de compra\n\n`
      diagnostico += `2. **Optimización de Inventario**\n`
      diagnostico += `   - Reducir exceso de stock en un 30-40%\n`
      diagnostico += `   - Predecir demanda por producto y talla\n\n`
      diagnostico += `3. **Marketing Inteligente**\n`
      diagnostico += `   - Segmentación automática de clientes\n`
      diagnostico += `   - Campañas personalizadas por comportamiento\n\n`
      break

    case 'retail':
      diagnostico += `**Para Retail Físico, te recomiendo:**\n\n`
      diagnostico += `1. **Predicción de Tendencias**\n`
      diagnostico += `   - Anticipar qué productos tendrán éxito\n`
      diagnostico += `   - Optimizar compras y merchandising\n\n`
      diagnostico += `2. **Gestión Inteligente de Stock**\n`
      diagnostico += `   - Reducir roturas de stock\n`
      diagnostico += `   - Optimizar distribución por tienda\n\n`
      diagnostico += `3. **Análisis de Comportamiento**\n`
      diagnostico += `   - Entender patrones de compra\n`
      diagnostico += `   - Mejorar layout y disposición\n\n`
      break

    case 'distribucion':
      diagnostico += `**Para Distribución, te recomiendo:**\n\n`
      diagnostico += `1. **Optimización de Rutas**\n`
      diagnostico += `   - Reducir costos de logística en un 20-30%\n`
      diagnostico += `   - Mejorar tiempos de entrega\n\n`
      diagnostico += `2. **Predicción de Demanda**\n`
      diagnostico += `   - Anticipar necesidades de clientes\n`
      diagnostico += `   - Optimizar niveles de stock\n\n`
      diagnostico += `3. **Automatización de Procesos**\n`
      diagnostico += `   - Gestión automática de pedidos\n`
      diagnostico += `   - Optimización de almacenes\n\n`
      break

    case 'marca':
      diagnostico += `**Para Marca Propia, te recomiendo:**\n\n`
      diagnostico += `1. **Desarrollo de Producto Inteligente**\n`
      diagnostico += `   - Analizar tendencias emergentes\n`
      diagnostico += `   - Optimizar colecciones\n\n`
      diagnostico += `2. **Marketing Predictivo**\n`
      diagnostico += `   - Identificar audiencias objetivo\n`
      diagnostico += `   - Optimizar campañas publicitarias\n\n`
      diagnostico += `3. **Gestión de Marca**\n`
      diagnostico += `   - Monitoreo de reputación\n`
      diagnostico += `   - Análisis de competencia\n\n`
      break
  }

  // Objetivos específicos
  if (objetivos) {
    diagnostico += `## 🎯 Objetivos Específicos\n\n`
    diagnostico += `Has mencionado estos objetivos:\n`
    diagnostico += `"${objetivos}"\n\n`
    diagnostico += `**Plan de Acción:**\n`
    diagnostico += `1. **Fase 1 (Mes 1-2):** Implementar solución de "quick win"\n`
    diagnostico += `2. **Fase 2 (Mes 3-6):** Escalar automatizaciones\n`
    diagnostico += `3. **Fase 3 (Mes 6+):** Optimización continua\n\n`
  }

  // ROI estimado
  diagnostico += `## 💰 ROI Estimado\n\n`
  diagnostico += `Basándome en empresas similares en ${subnichoName}, puedes esperar:\n\n`
  diagnostico += `- **Ahorro en costos:** 20-40% en operaciones\n`
  diagnostico += `- **Aumento en ventas:** 15-30% en el primer año\n`
  diagnostico += `- **Mejora en eficiencia:** 50-70% en tareas repetitivas\n`
  diagnostico += `- **ROI total:** 200-400% en 12 meses\n\n`

  // Próximos pasos
  diagnostico += `## 🚀 Próximos Pasos\n\n`
  diagnostico += `1. **Reunión de Diagnóstico Detallado** (30 min)\n`
  diagnostico += `   - Análisis profundo de tus procesos\n`
  diagnostico += `   - Identificación de oportunidades específicas\n\n`
  diagnostico += `2. **Propuesta Personalizada**\n`
  diagnostico += `   - Roadmap de implementación\n`
  diagnostico += `   - Cronograma y presupuesto\n\n`
  diagnostico += `3. **Implementación del Primer Quick Win**\n`
  diagnostico += `   - Resultados visibles en 2-4 semanas\n`
  diagnostico += `   - Base para escalar soluciones\n\n`

  diagnostico += `---\n\n`
  diagnostico += `**¿Listo para comenzar tu transformación digital?**\n\n`
  diagnostico += `Te recomiendo agendar una reunión de diagnóstico detallado donde podremos profundizar en tus necesidades específicas y crear un plan de acción personalizado.\n\n`
  diagnostico += `**Contacto:** info@orbisreach.com\n`
  diagnostico += `**Teléfono:** +34 XXX XXX XXX\n\n`
  diagnostico += `*Este diagnóstico fue generado por nuestra IA especializada en retail y moda.*`

  return diagnostico
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validar datos requeridos
    if (!body.nombre || !body.email || !body.empresa || !body.subnicho) {
      return NextResponse.json(
        { message: 'Faltan campos requeridos' },
        { status: 400 }
      )
    }

    // Intentar generar diagnóstico con OpenAI
    let diagnostico
    try {
      diagnostico = await generateDiagnosticoWithOpenAI(body)
    } catch (openaiError) {
      console.warn('OpenAI no disponible, usando diagnóstico estático:', openaiError)
      // Fallback a diagnóstico estático si OpenAI falla
      diagnostico = await generateDiagnostico(body)
    }

    // Aquí podrías guardar en base de datos si está configurada
    // const diagnosticoData = {
    //   nombre: body.nombre,
    //   email: body.email,
    //   empresa: body.empresa,
    //   subnicho: body.subnicho,
    //   tamaño_empresa: body.tamañoEmpresa,
    //   facturacion_anual: body.facturacionAnual,
    //   problemas_actuales: body.problemasActuales,
    //   objetivos: body.objetivos,
    //   diagnostico_ai: diagnostico,
    //   created_at: new Date().toISOString()
    // }

    // await supabase
    //   .from('diagnosticos_express')
    //   .insert([diagnosticoData])

    return NextResponse.json({
      success: true,
      diagnostico: diagnostico,
      message: 'Diagnóstico generado exitosamente'
    })

  } catch (error) {
    console.error('Error generando diagnóstico:', error)
    return NextResponse.json(
      { message: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}