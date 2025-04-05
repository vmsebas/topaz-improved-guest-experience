FROM node:18-alpine AS build

WORKDIR /app

# Copiar archivos de configuración
COPY package*.json ./
COPY tsconfig*.json ./
COPY vite.config.ts ./
COPY tailwind.config.ts ./
COPY postcss.config.js ./
COPY index.html ./

# Instalar dependencias
RUN npm ci

# Copiar código fuente
COPY src/ ./src/
COPY public/ ./public/

# Construir la aplicación
RUN npm run build

# Etapa de producción
FROM nginx:alpine

# Copiar archivos de construcción desde la etapa anterior
COPY --from=build /app/dist /usr/share/nginx/html

# Configuración de nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
