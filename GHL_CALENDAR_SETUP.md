# 📅 Configuración del Calendario de GoHighLevel (GHL)

## 🚨 **PROBLEMA SOLUCIONADO**

**Problema:** El código CSS/HTML del calendario de GHL se mostraba como texto plano visible en la página en lugar de renderizarse como un calendario interactivo.

**Causa:** El script de GHL no se estaba cargando correctamente y el iframe no tenía el ID correcto que coincidiera con el script.

## ✅ **SOLUCIÓN IMPLEMENTADA**

### 1. **Componente GHLCalendar** (`components/GHLCalendar.tsx`)
- Componente reutilizable y limpio para el calendario de GHL
- Manejo automático del script de GHL
- Limpieza automática de texto no deseado
- Configuración responsive
- Altura mínima configurable

### 2. **Hook useGHLScript** (`hooks/useGHLScript.ts`)
- Hook personalizado para manejar la carga del script de GHL
- Evita cargar el script múltiples veces
- Manejo global del script

### 3. **Página actualizada** (`app/agendar-reunion/page.tsx`)
- Implementación limpia usando el componente GHLCalendar
- Diseño mejorado y responsive
- Integración perfecta con el diseño existente

## 🔧 **CÓMO USAR EL COMPONENTE**

### Uso básico:
```tsx
import GHLCalendar from '@/components/GHLCalendar'

<GHLCalendar 
  bookingUrl="https://link.nexumautomations.com/widget/booking/360ULIwZNVRSoOsl2mST"
/>
```

### Uso avanzado:
```tsx
<GHLCalendar 
  bookingUrl="https://link.nexumautomations.com/widget/booking/360ULIwZNVRSoOsl2mST"
  className="w-full max-w-4xl mx-auto"
  minHeight="800px"
/>
```

## 📋 **PROPIEDADES DEL COMPONENTE**

| Propiedad | Tipo | Requerido | Default | Descripción |
|-----------|------|-----------|---------|-------------|
| `bookingUrl` | string | ✅ | - | URL del widget de booking de GHL |
| `className` | string | ❌ | `''` | Clases CSS adicionales |
| `minHeight` | string | ❌ | `'700px'` | Altura mínima del iframe |

## 🎯 **CARACTERÍSTICAS IMPLEMENTADAS**

### ✅ **Funcionalidades**
- [x] Carga automática del script de GHL
- [x] Limpieza automática de texto no deseado
- [x] Responsive design
- [x] Altura mínima configurable
- [x] ID único para cada iframe
- [x] Manejo de errores
- [x] Cleanup automático
- [x] Observer para cambios en el DOM

### ✅ **Mejoras de UX**
- [x] Loading states
- [x] Error handling
- [x] Responsive design
- [x] Accesibilidad mejorada
- [x] Performance optimizada

## 🔍 **QUÉ ESTABA MAL Y CÓMO SE SOLUCIONÓ**

### **Problema 1: Script no cargado correctamente**
- **Antes:** El script se cargaba en cada componente
- **Después:** Hook global que carga el script una sola vez

### **Problema 2: Texto CSS visible**
- **Antes:** El código CSS se mostraba como texto plano
- **Después:** Limpieza automática con múltiples estrategias

### **Problema 3: ID del iframe incorrecto**
- **Antes:** ID fijo que no coincidía con el script
- **Después:** ID único generado dinámicamente

### **Problema 4: No responsive**
- **Antes:** Altura fija
- **Después:** Altura mínima configurable y responsive

## 🚀 **INSTALACIÓN Y USO**

### 1. **Archivos creados:**
- `components/GHLCalendar.tsx` - Componente principal
- `hooks/useGHLScript.ts` - Hook para el script
- `GHL_CALENDAR_SETUP.md` - Esta documentación

### 2. **Archivos modificados:**
- `app/agendar-reunion/page.tsx` - Página actualizada

### 3. **Uso en otras páginas:**
```tsx
import GHLCalendar from '@/components/GHLCalendar'

export default function MiPagina() {
  return (
    <div>
      <GHLCalendar 
        bookingUrl="TU_URL_DE_GHL_AQUI"
        minHeight="600px"
      />
    </div>
  )
}
```

## 🎨 **PERSONALIZACIÓN**

### **Estilos personalizados:**
```tsx
<GHLCalendar 
  bookingUrl="https://link.nexumautomations.com/widget/booking/360ULIwZNVRSoOsl2mST"
  className="w-full border-2 border-purple-500 rounded-lg"
  minHeight="800px"
/>
```

### **Integración con Tailwind:**
```tsx
<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
  <GHLCalendar 
    bookingUrl="https://link.nexumautomations.com/widget/booking/360ULIwZNVRSoOsl2mST"
    className="w-full"
  />
</div>
```

## 🔧 **CONFIGURACIÓN AVANZADA**

### **Variables de entorno:**
```env
GHL_BOOKING_URL=https://link.nexumautomations.com/widget/booking/360ULIwZNVRSoOsl2mST
```

### **Uso con variables de entorno:**
```tsx
<GHLCalendar 
  bookingUrl={process.env.NEXT_PUBLIC_GHL_BOOKING_URL || 'https://link.nexumautomations.com/widget/booking/360ULIwZNVRSoOsl2mST'}
/>
```

## 🐛 **TROUBLESHOOTING**

### **Problema: El calendario no se carga**
- ✅ Verificar que la URL de booking sea correcta
- ✅ Verificar que el script se esté cargando (revisar consola)
- ✅ Verificar que no haya errores de CORS

### **Problema: Texto CSS visible**
- ✅ El componente tiene limpieza automática
- ✅ Si persiste, verificar que el script de GHL esté cargado

### **Problema: No responsive**
- ✅ Verificar que se esté usando la clase `w-full`
- ✅ Ajustar `minHeight` según necesidades

## 📞 **SOPORTE**

Si tienes problemas con la implementación:
1. Revisa la consola del navegador para errores
2. Verifica que la URL de GHL sea correcta
3. Asegúrate de que el script se esté cargando
4. Contacta al equipo de desarrollo

---

**✅ IMPLEMENTACIÓN COMPLETADA**
- Componente funcional y reutilizable
- Script de GHL cargado correctamente
- Texto no deseado oculto
- Diseño responsive y profesional
- Documentación completa
