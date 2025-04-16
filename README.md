# 🌍 Geo-Domi

Geo-Domi es una aplicación modular dividida en **frontend** y **backend**, diseñada para trabajar de forma independiente y ordenada. Este proyecto utiliza tecnologías modernas como **React + Vite**, **Tailwind CSS**, y **Node.js con TypeScript**.

---

## 📁 Estructura del Proyecto

geo-domi/ ├── frontend/ → Aplicación React (Vite, TailwindCSS, Axios) ├── backend/ → Servidor Node.js (TypeScript, Firebase, Geolib) └── README.md → Documentación del proyecto

## ✅ Requisitos Previos

Asegúrate de tener instalado lo siguiente:

- 🔹 **Node.js** (>= 18): [https://nodejs.org/](https://nodejs.org/)
- 🔹 **npm** (o `yarn`, si prefieres)

---

## 🚀 Instalación y Ejecución

### 📦 1. Backend

Ubicación: `geo-domi/backend`

#### ▶️ Pasos para ejecutar

```bash
cd backend
npm install        # Instalar dependencias
npm run dev        # Iniciar servidor en modo desarrollo
```

Estructura esperada de backend:
server.ts: Punto de entrada del backend

.env: Archivo con variables de entorno

Librerías: firebase, geolib, dotenv, nodemon, ts-node-dev, etc.

📌 Nota: Asegúrate de tener un archivo .env en esta carpeta con tus claves API, configuraciones de Firebase, etc.

💻 2. Frontend
Ubicación: geo-domi/frontend

▶️ Pasos para ejecutar
bash
Copiar
Editar
cd frontend
npm install # Instalar dependencias
npm run dev

Otros comandos útiles:
bash
Copiar
Editar
npm run build # Construir para producción
npm run preview # Previsualizar versión producción
📁 Tecnologías utilizadas en el frontend:
⚛️ React 19

🧩 Vite

🌬️ Tailwind CSS

📡 Axios

📍 Geolib (para cálculos geográficos)

🛠️ Comandos Rápidos

Ubicación Comando Descripción
backend npm install Instala dependencias del backend
npm run dev Inicia el backend con nodemon
frontend npm install Instala dependencias del frontend
npm run dev Inicia el servidor de desarrollo (Vite)
npm run build Compila el proyecto para producción
npm run preview Muestra la versión optimizada del frontend

🧩 Variables de Entorno
Tanto en el backend como en el frontend, asegúrate de crear un archivo .env (no se sube al repositorio por seguridad).

Ejemplo en backend:

env
Copiar
Editar
GEOAPIFY_API_KEY=tu_clave_aqui
FIREBASE_API_KEY=otra_clave
