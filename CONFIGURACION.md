# 🔧 Configuración para Lanzar la Página

## ✅ Estado Actual
- ✅ **Next.js 14** configurado y funcionando
- ✅ **Tailwind CSS** configurado
- ✅ **Framer Motion** configurado
- ✅ **Componentes** creados y funcionando
- ✅ **Páginas** creadas (principal, diagnóstico, agendar reunión)
- ✅ **OpenAI API** - Integración implementada (necesita API key)
- ❌ **Supabase** - Opcional, no crítico

## 🚀 Para Lanzar la Página

### 1. Configurar OpenAI (OBLIGATORIO para diagnósticos con IA)
```bash
# Crear archivo .env.local en la raíz del proyecto
touch .env.local
```

Añadir al archivo `.env.local`:
```env
OPENAI_API_KEY=sk-tu_clave_aqui
```

**Obtener la clave:**
1. Ve a https://platform.openai.com/api-keys
2. Crea una nueva API key
3. Copia la clave (empieza con `sk-`)
4. Pégala en `.env.local`

**⚠️ IMPORTANTE:** Sin esta clave, el diagnóstico usará respuestas predefinidas en lugar de IA real.

### 2. Configurar Supabase (OPCIONAL)
Si quieres guardar los diagnósticos en base de datos:

```env
NEXT_PUBLIC_SUPABASE_URL=tu_url_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_clave_anonima
```

**Configurar Supabase:**
1. Ve a https://supabase.com/dashboard
2. Crea un nuevo proyecto
3. Ve a Settings > API
4. Copia la URL y la clave anónima

### 3. Instalar Dependencias
```bash
npm install
```

### 4. Ejecutar en Desarrollo
```bash
npm run dev
```

### 5. Ejecutar en Producción
```bash
# Construir para producción
npm run build

# Ejecutar en producción
npm start
```

## 🔍 Verificar Configuración

### Probar OpenAI
```bash
node test-openai.js
```

### Probar la Página
1. Abre http://localhost:3000
2. Ve a "Diagnóstico Express"
3. Llena el formulario
4. Verifica que se genere el diagnóstico

## 📋 Checklist de Lanzamiento

- [ ] ✅ OpenAI API configurada
- [ ] ✅ Servidor funcionando (npm run dev)
- [ ] ✅ Página principal carga correctamente
- [ ] ✅ Formulario de diagnóstico funciona
- [ ] ✅ Calendario de reuniones funciona
- [ ] ✅ Responsive design verificado
- [ ] ✅ Enlaces funcionan correctamente

## 🚨 Problemas Comunes

### Error: "OPENAI_API_KEY no está configurada"
- Verifica que el archivo `.env.local` existe
- Verifica que la clave está correcta
- Reinicia el servidor (`npm run dev`)

### Error: "Module not found"
- Ejecuta `npm install`
- Verifica que todas las dependencias están instaladas

### Error de Framer Motion
- Ya está solucionado con la versión 10.16.4
- Si persiste, ejecuta `npm run build` para verificar

## 🌐 Para Deploy en Producción

### Vercel (Recomendado)
1. Conecta tu repositorio a Vercel
2. Añade las variables de entorno en Vercel Dashboard
3. Deploy automático

### Netlify
1. Conecta tu repositorio a Netlify
2. Añade las variables de entorno en Netlify Dashboard
3. Deploy automático

### Servidor Propio
1. Ejecuta `npm run build`
2. Sube la carpeta `.next` y archivos estáticos
3. Configura las variables de entorno en el servidor
4. Ejecuta `npm start`

## 📞 Soporte

Si tienes problemas:
1. Verifica que todas las dependencias están instaladas
2. Verifica que las variables de entorno están configuradas
3. Revisa la consola del navegador para errores
4. Revisa los logs del servidor


