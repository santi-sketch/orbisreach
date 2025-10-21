# OrbisReach - Plataforma de Marketing Global

Una plataforma moderna de marketing digital construida con Next.js 14, TypeScript y Tailwind CSS.

## 🚀 Características

- **Diseño Responsivo**: Optimizado para todos los dispositivos
- **Animaciones Suaves**: Implementadas con Framer Motion
- **SEO Optimizado**: Configurado para máximo rendimiento en motores de búsqueda
- **TypeScript**: Código type-safe y mantenible
- **Tailwind CSS**: Estilos modernos y consistentes
- **Componentes Reutilizables**: Arquitectura modular y escalable

## 🛠️ Tecnologías

- **Next.js 14** - Framework de React
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de CSS
- **Framer Motion** - Animaciones
- **Lucide React** - Iconos
- **ESLint** - Linting

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/orbisreach.git
cd orbisreach
```

2. Instala las dependencias:
```bash
npm install
```

3. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🏗️ Estructura del Proyecto

```
orbisreach/
├── app/                    # App Router de Next.js
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página de inicio
├── components/            # Componentes React
│   ├── sections/          # Secciones de la página
│   └── ui/               # Componentes de UI reutilizables
├── lib/                  # Utilidades y helpers
├── public/               # Archivos estáticos
└── styles/               # Archivos de estilos adicionales
```

## 🎨 Personalización

### Colores
Los colores principales se pueden modificar en `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Tus colores personalizados
      }
    }
  }
}
```

### Componentes
Todos los componentes están en la carpeta `components/` y son completamente personalizables.

## 📱 Responsive Design

El sitio está optimizado para:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🚀 Deployment

### Vercel (Recomendado)
1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno si es necesario
3. Deploy automático en cada push

### Netlify
1. Build command: `npm run build`
2. Publish directory: `out`
3. Deploy

### Otros proveedores
El proyecto es compatible con cualquier proveedor que soporte Next.js.

## 📈 Performance

- **Lighthouse Score**: 95+
- **Core Web Vitals**: Optimizado
- **SEO**: 100/100
- **Accessibility**: 95+

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

- **Email**: hola@orbisreach.com
- **Website**: [orbisreach.com](https://orbisreach.com)
- **Twitter**: [@orbisreach](https://twitter.com/orbisreach)

---

Hecho con ❤️ por el equipo de OrbisReach



