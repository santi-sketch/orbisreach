# Configuración de Diagnóstico Express con OpenAI

## 1. Configurar OpenAI API

1. Ve a [platform.openai.com](https://platform.openai.com)
2. Crea una cuenta o inicia sesión
3. Ve a "API Keys" en el menú
4. Crea una nueva API key
5. Copia la clave y guárdala de forma segura

## 2. Configurar variables de entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```env
# OpenAI API Key (REQUERIDO)
OPENAI_API_KEY=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
# Supabase (opcional)
NEXT_PUBLIC_SUPABASE_URL=https://jabrxdocwvjhyizgmljd.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImphYnJ4ZG9jd3ZqaHlpemdtbGpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA4Mjc0MjQsImV4cCI6MjA3NjQwMzQyNH0.Uksb056UyqJV1doCE2c_KcXDvnZkrh1s7jNTBEMgE5o
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImphYnJ4ZG9jd3ZqaHlpemdtbGpkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MDgyNzQyNCwiZXhwIjoyMDc2NDAzNDI0fQ.aNZwe0Sdd4aBSg_bmdpTOrRwJCTSMMZqOCbWIz9MeXc
```

## 3. Crear proyecto en Supabase (opcional)

1. Ve a [supabase.com](https://supabase.com)
2. Crea una nueva cuenta o inicia sesión
3. Crea un nuevo proyecto
4. Anota la URL del proyecto y las claves API

## 2. Crear la tabla en Supabase

Ejecuta este SQL en el SQL Editor de Supabase:

```sql
CREATE TABLE diagnosticos_express (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  company_name TEXT NOT NULL,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  website TEXT,
  business_models TEXT[] NOT NULL,
  team_size TEXT NOT NULL,
  monthly_orders TEXT NOT NULL,
  challenges TEXT[] NOT NULL,
  goals TEXT[] NOT NULL,
  urgency TEXT NOT NULL,
  current_tools TEXT,
  other_challenge TEXT,
  other_goal TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Crear índices para mejorar el rendimiento
CREATE INDEX idx_diagnosticos_email ON diagnosticos_express(email);
CREATE INDEX idx_diagnosticos_created_at ON diagnosticos_express(created_at);
```

## 3. Configurar variables de entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```env
NEXT_PUBLIC_SUPABASE_URL=tu-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=tu-service-role-key
```

## 4. Instalar dependencias de Supabase

```bash
npm install @supabase/supabase-js
```

## 5. Activar la conexión con Supabase

1. Descomenta las líneas en `lib/supabase.ts`
2. Descomenta las líneas en `app/api/diagnostico/route.ts`
3. Comenta la línea de console.log en el endpoint

## 6. Probar el formulario

1. Ve a `/diagnostico-express`
2. Completa el formulario
3. Verifica que los datos se guarden en Supabase

## Estructura de la tabla

- **id**: UUID único generado automáticamente
- **company_name**: Nombre de la empresa
- **full_name**: Nombre completo del contacto
- **email**: Email del contacto
- **phone**: Teléfono/WhatsApp
- **website**: Sitio web (opcional)
- **business_models**: Array de modelos de negocio seleccionados
- **team_size**: Tamaño del equipo
- **monthly_orders**: Número de pedidos mensuales
- **challenges**: Array de desafíos seleccionados (máximo 3)
- **goals**: Array de objetivos seleccionados (máximo 3)
- **urgency**: Urgencia de la solución
- **current_tools**: Herramientas actuales (opcional)
- **other_challenge**: Otro desafío personalizado (opcional)
- **other_goal**: Otro objetivo personalizado (opcional)
- **created_at**: Timestamp de creación
