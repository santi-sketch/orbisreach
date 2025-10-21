# Configuración de GoHighLevel (GHL) para Calendario

## 1. Obtener credenciales de GHL

### Paso 1: Acceder a GHL
1. Ve a [GoHighLevel](https://gohighlevel.com)
2. Inicia sesión en tu cuenta
3. Ve a **Settings** > **API Keys**

### Paso 2: Crear API Key
1. Haz clic en **"Create API Key"**
2. Dale un nombre descriptivo (ej: "Website Calendar Integration")
3. Selecciona los permisos necesarios:
   - `calendars.read`
   - `calendars.write`
   - `contacts.read`
   - `contacts.write`
4. Copia la API Key generada

### Paso 3: Obtener Location ID
1. Ve a **Settings** > **Locations**
2. Selecciona tu ubicación principal
3. Copia el **Location ID** de la URL o del panel

## 2. Configurar variables de entorno

Crea o actualiza tu archivo `.env.local`:

```env
# GoHighLevel API Configuration
GHL_API_KEY=tu-api-key-aqui
GHL_LOCATION_ID=tu-location-id-aqui

# OpenAI (si ya lo tienes configurado)
OPENAI_API_KEY=tu-openai-api-key-aqui

# Supabase (opcional)
NEXT_PUBLIC_SUPABASE_URL=tu-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=tu-service-role-key
```

## 3. Configurar calendario en GHL

### Paso 1: Crear calendario
1. Ve a **Calendar** > **Calendars**
2. Crea un nuevo calendario llamado "Consultas Website"
3. Configura los horarios de disponibilidad
4. Establece la duración de las citas (recomendado: 30 minutos)

### Paso 2: Configurar tipos de cita
1. Ve a **Calendar** > **Appointment Types**
2. Crea un tipo de cita para "Consulta Gratuita"
3. Establece duración de 30 minutos
4. Configura el calendario asignado

## 4. Funcionalidades implementadas

### ✅ Crear citas automáticamente
- Las citas se crean en GHL cuando alguien completa el formulario
- Se asigna automáticamente al calendario configurado

### ✅ Crear contactos
- Los contactos se crean automáticamente en GHL
- Se etiquetan como "Website Lead" y "Reunión Agendada"
- Se incluye el servicio de interés como tag

### ✅ Validación de datos
- Validación de email
- Validación de campos requeridos
- Manejo de errores de GHL

### ✅ Respuesta al usuario
- Confirmación de cita agendada
- Detalles de la reunión
- Redirección al inicio

## 5. Testing

### Probar la integración:
1. Completa el formulario de agendar reunión
2. Verifica que la cita aparezca en tu calendario de GHL
3. Verifica que el contacto se cree en GHL
4. Revisa los logs del servidor para errores

### Logs útiles:
- Revisa la consola del navegador para errores del frontend
- Revisa los logs del servidor Next.js para errores del backend
- Revisa el dashboard de GHL para ver las citas creadas

## 6. Solución de problemas

### Error: "GHL_API_KEY y GHL_LOCATION_ID deben estar configurados"
- Verifica que las variables de entorno estén en `.env.local`
- Reinicia el servidor de desarrollo
- Verifica que los nombres de las variables sean exactos

### Error: "Error de GHL: Unauthorized"
- Verifica que la API Key sea correcta
- Verifica que la API Key tenga los permisos necesarios
- Verifica que la API Key no haya expirado

### Error: "Error de GHL: Location not found"
- Verifica que el Location ID sea correcto
- Verifica que la ubicación esté activa en GHL

### Las citas no aparecen en GHL
- Verifica que el calendario esté configurado correctamente
- Verifica que el Location ID sea correcto
- Revisa los logs del servidor para errores específicos

## 7. Personalización adicional

### Modificar duración de citas:
Edita `app/api/agendar-reunion/route.ts` línea 35:
```typescript
const endTime = new Date(appointmentDate.getTime() + 30 * 60 * 1000) // Cambia 30 por los minutos deseados
```

### Modificar tags de contactos:
Edita `app/api/agendar-reunion/route.ts` línea 50:
```typescript
tags: ['Website Lead', 'Reunión Agendada', body.service] // Modifica los tags
```

### Modificar descripción de citas:
Edita `app/api/agendar-reunion/route.ts` líneas 40-50 para personalizar la descripción de las citas.



