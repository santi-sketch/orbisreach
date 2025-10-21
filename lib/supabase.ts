// Configuración de Supabase
// Reemplaza estas variables con tus credenciales reales de Supabase

export const supabaseConfig = {
  url: process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
  serviceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY || ''
}

// Función para crear el cliente de Supabase
// Descomenta cuando tengas las credenciales configuradas

/*
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  supabaseConfig.url,
  supabaseConfig.serviceRoleKey
)
*/

// SQL para crear la tabla en Supabase:
/*
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
  diagnostico_ai TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Crear índices para mejorar el rendimiento
CREATE INDEX idx_diagnosticos_email ON diagnosticos_express(email);
CREATE INDEX idx_diagnosticos_created_at ON diagnosticos_express(created_at);
*/
