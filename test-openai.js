// Script para probar la API de OpenAI
require('dotenv').config({ path: '.env.local' });

async function testOpenAI() {
  console.log('🔍 Verificando configuración de OpenAI...');
  
  if (!process.env.OPENAI_API_KEY) {
    console.error('❌ OPENAI_API_KEY no encontrada en .env.local');
    return;
  }
  
  console.log('✅ OPENAI_API_KEY encontrada:', process.env.OPENAI_API_KEY.substring(0, 20) + '...');
  
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
            role: 'user',
            content: 'Responde solo "Hola, OpenAI funciona correctamente"'
          }
        ],
        max_tokens: 50,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('❌ Error de OpenAI API:', response.status, error);
      return;
    }

    const result = await response.json();
    console.log('✅ OpenAI API funciona correctamente!');
    console.log('📝 Respuesta:', result.choices[0].message.content);
    
  } catch (error) {
    console.error('❌ Error conectando con OpenAI:', error.message);
  }
}

testOpenAI();
