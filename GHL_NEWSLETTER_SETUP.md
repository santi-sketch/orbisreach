# 📧 Configuración de Newsletter con GoHighLevel (GHL)

## 🚀 **Funcionalidades Implementadas**

### ✅ **Newsletter Automático**
- **Suscripción**: Los usuarios pueden suscribirse desde el footer
- **Integración GHL**: Se crean contactos automáticamente en GHL
- **Secuencias de Email**: Se activan automáticamente al suscribirse
- **Validación**: Email válido y manejo de errores
- **Feedback Visual**: Mensajes de éxito/error en tiempo real

## 🔧 **Configuración Requerida**

### 1. **Variables de Entorno (.env.local)**
```bash
# Configuración de GoHighLevel (GHL)
GHL_API_KEY=tu_clave_api_ghl_aqui
GHL_LOCATION_ID=tu_location_id_aqui
GHL_NEWSLETTER_SEQUENCE_ID=tu_secuencia_newsletter_aqui
```

### 2. **Obtener Credenciales de GHL**

#### **API Key:**
1. Ve a tu dashboard de GHL
2. Settings → API Keys
3. Crea una nueva API Key
4. Copia la clave (formato: `ghl_xxxxxxxxxxxxxxxx`)

#### **Location ID:**
1. En GHL, ve a Settings → Locations
2. Copia el ID de tu ubicación principal
3. Formato: número (ej: `123456789`)

#### **Newsletter Sequence ID:**
1. En GHL, ve a Marketing → Sequences
2. Crea una secuencia de bienvenida para newsletter
3. Copia el ID de la secuencia

## 📋 **Secuencia de Emails Recomendada**

### **Email 1: Bienvenida (Inmediato)**
- **Asunto**: "¡Bienvenido a FashionAI! 🎉"
- **Contenido**: 
  - Agradecimiento por suscribirse
  - Qué pueden esperar
  - Enlace a recursos gratuitos

### **Email 2: Casos de Éxito (Día 3)**
- **Asunto**: "Cómo [Empresa] ahorró 40% en costos con IA"
- **Contenido**:
  - Caso de estudio real
  - Métricas específicas
  - CTA para agendar consulta

### **Email 3: Tendencias (Día 7)**
- **Asunto**: "Las 5 tendencias de IA en moda que debes conocer"
- **Contenido**:
  - Insights del mercado
  - Predicciones para 2024
  - CTA para diagnóstico gratuito

### **Email 4: Recursos (Día 14)**
- **Asunto**: "Guía gratuita: Automatización para Retail"
- **Contenido**:
  - PDF descargable
  - Checklist de implementación
  - CTA para webinar

### **Email 5: Oferta Especial (Día 21)**
- **Asunto**: "Oferta exclusiva: Consultoría gratuita"
- **Contenido**:
  - Oferta limitada
  - Valor agregado
  - CTA para agendar

## 🎯 **Tags Automáticos en GHL**

Los contactos se etiquetan automáticamente con:
- `Newsletter Subscriber`
- `Website Lead`
- `newsletter_subscription_date` (campo personalizado)

## 📊 **Segmentación Avanzada**

### **Por Industria:**
- `Fashion Retail`
- `E-commerce`
- `Distribution`

### **Por Interés:**
- `Inventory Optimization`
- `Trend Prediction`
- `Customer Personalization`

## 🔄 **Flujo Completo**

1. **Usuario se suscribe** → Formulario en footer
2. **Se crea contacto** → Automáticamente en GHL
3. **Se activa secuencia** → Emails automáticos
4. **Se etiqueta** → Para segmentación futura
5. **Follow-up** → Secuencia de nurturing

## 🛠 **Personalización Adicional**

### **Campos Personalizados:**
```javascript
customFields: [
  {
    key: 'newsletter_subscription_date',
    value: new Date().toISOString()
  },
  {
    key: 'source',
    value: 'website_footer'
  },
  {
    key: 'industry',
    value: 'fashion_retail'
  }
]
```

### **Secuencias Condicionales:**
- **Nuevos suscriptores**: Secuencia de bienvenida
- **Suscriptores existentes**: Secuencia de re-engagement
- **Por ubicación**: Contenido localizado

## 📈 **Métricas a Seguir**

- **Tasa de suscripción**: % de visitantes que se suscriben
- **Tasa de apertura**: % de emails abiertos
- **Tasa de clics**: % de clics en CTAs
- **Conversión**: % de suscriptores que se convierten en clientes

## 🚨 **Notas Importantes**

1. **Cumplimiento GDPR**: Asegúrate de tener consentimiento explícito
2. **Frecuencia**: No más de 2-3 emails por semana
3. **Unsubscribe**: Incluye enlace de cancelación en cada email
4. **Testing**: Prueba en diferentes dispositivos y clientes de email

## 🔗 **Enlaces Útiles**

- [GHL API Documentation](https://highlevel.stoplight.io/docs/integrations)
- [GHL Sequences Guide](https://help.gohighlevel.com/support/solutions/articles/48001048447-email-sequences)
- [GDPR Compliance](https://gdpr.eu/what-is-gdpr/)

---

**¿Necesitas ayuda con la configuración?** Contacta al equipo de desarrollo.



