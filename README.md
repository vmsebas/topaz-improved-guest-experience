# Lisbon Tiles - Guía Turística de Lisboa

## Descripción del Proyecto

Lisbon Tiles es una aplicación web completa diseñada para turistas y visitantes de Lisboa. Proporciona información detallada sobre restaurantes, atracciones turísticas, servicios de transporte y consejos locales para mejorar la experiencia de los visitantes en la ciudad.

### Características Principales

- **Restaurantes y Gastronomía**: Listado detallado de restaurantes por categorías (portugueses, mariscos, mercados, pizzerías, vegetarianos e internacionales).
- **Atracciones Turísticas**: Información sobre los principales puntos de interés en Lisboa.
- **Transporte**: Guía completa de opciones de transporte público y privado en la ciudad.
- **Blog**: Artículos y consejos sobre la cultura, historia y experiencias en Lisboa.
- **Servicios**: Información sobre servicios disponibles para turistas.
- **Contacto**: Formulario para consultas y asistencia.

### Estructura del Proyecto

- **Páginas principales**: Inicio, Atracciones, Restaurantes, Transporte, Servicios, Blog, Contacto
- **Componentes reutilizables**: Tarjetas de información, filtros, navegación, pie de página
- **Diseño responsivo**: Adaptado para dispositivos móviles, tablets y escritorio

## Tecnologías Utilizadas

Este proyecto está construido con:

- **Vite**: Entorno de desarrollo rápido para React
- **TypeScript**: Lenguaje tipado para mayor robustez del código
- **React**: Biblioteca para construir interfaces de usuario
- **shadcn-ui**: Componentes de UI reutilizables y accesibles
- **Tailwind CSS**: Framework CSS para diseño rápido y responsivo
- **React Router**: Navegación entre páginas
- **React Query**: Gestión de estado y datos

## Cómo ejecutar el proyecto

Para ejecutar este proyecto localmente:

```sh
# Paso 1: Clonar el repositorio
git clone <URL_DEL_REPOSITORIO>

# Paso 2: Navegar al directorio del proyecto
cd lisbon-tiles-topaz

# Paso 3: Instalar las dependencias necesarias
npm i

# Paso 4: Iniciar el servidor de desarrollo
npm run dev
```

## Despliegue

### Despliegue en Netlify

Para desplegar este proyecto en Netlify:

1. Sube tu código a GitHub
2. Inicia sesión en Netlify
3. Haz clic en "New site from Git"
4. Elige tu repositorio
5. Comando de construcción: `npm run build`
6. Directorio de publicación: `dist`
7. Haz clic en "Deploy site"

La configuración de construcción ya está configurada en el archivo netlify.toml.

## Uso de dominio personalizado

Para usar un dominio personalizado, recomendamos utilizar Netlify u otro servicio de alojamiento que permita configurar dominios personalizados.