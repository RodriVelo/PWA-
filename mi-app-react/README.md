Correcciones:

- excelente estructura general del proyecto
- CRUD completo (agregar, editar, eliminar) implementado de forma clara y modular
- persistencia efectiva con localStorage
- diseño visual limpio y coherente, uso efectivo de CSS Modules
- navegación clara y componentes bien encapsulados: Cards, FormAdd, FormEdit, Contador, Select, Modal
- interfaz intuitiva con modales flotantes y botones de acción bien definidos
- FormAdd es completo, validado y permite múltiples géneros


Observaciones:
- No hacen falta tantos comentarios, menos aun con iconos.
- El codigo les quedo dentro de una carpeta que se llama mi-app-react.
- El editar Peliculas/series deberia ser un option tmb. Puedo poner cualquier cosa.

Nota: 10.

# ✨ **GesThor Mose - Gestor de Películas y Series**


![Banner](https://img.shields.io/badge/React-PWA-red?style=for-the-badge&logo=react)

---
## **Ver la pagina en la web**
**💡 Tip:** Haz *Ctrl + Click* (o *Cmd + Click* en Mac) en el botón de Vercel para abrirlo en una nueva pestaña.  
**🚀Deploy en Vercel:** [![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://pwa-zeta-nine.vercel.app/)  

---
## **📌 Descripción**

_Aplicación web moderna construida con React que funciona como un gestor personal de películas y series. Diseñada para almacenar, categorizar y gestionar tu colección audiovisual personal. Incluye funcionalidades de filtrado, búsqueda, ordenamiento y estadísticas básicas de visualización._

---

## **🌟 Características**

- ✅ **Gestión completa**: Agregar, editar y eliminar películas/series.
- 🔍 **Búsqueda y filtrado**: Filtrar por tipo (película/serie), estado (vistas/no vistas) y género.
- 🎯 **Ordenamiento**: Organización por fecha o calificación en orden ascendente/descendente.
- 💾 **Persistencia**: Almacenamiento local para mantener tu colección entre sesiones.

---

## **🛠 Tecnologías**

<div align="left">  
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />  
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/CSS_Modules-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS Modules" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
</div>

---

## **📋 Datos de la materia**

- **Materia**: Programación Web Avanzada
- **Profesores**: Lidia López, Agustín Chiarotto
- **Integrantes**:
  - Rodrigo Velo
  - Martin De La Iglesia
  - Enzo Ignacio Molina Beroiza

---

## **📦 Instalación**  

### Requisitos previos

#### Instalación de Node.js y npm (Windows)
1. **Descarga Node.js**:
   - Visita [https://nodejs.org/es/download/](https://nodejs.org/es/download/)
   - Descarga la versión LTS (soporte a largo plazo) para Windows
   - npm se instalará automáticamente con Node.js

2. **Instalación**:
   - Ejecuta el archivo descargado (ej: node-v18.x.x-x64.msi)
   - Sigue el asistente de instalación aceptando la configuración predeterminada
   - Marca la opción "Automatically install the necessary tools" cuando aparezca

3. **Verificación**:
   - Abre el símbolo del sistema (CMD) o PowerShell
   - Ejecuta los siguientes comandos para verificar la instalación:
     ```bash
     node -v
     npm -v
     ```
   - Deberías ver las versiones instaladas (ej: v18.x.x para Node y 9.x.x para npm)

#### Instalación de Git (Windows)
1. **Descarga Git**:
   - Visita [https://git-scm.com/download/win](https://git-scm.com/download/win)
   - El instalador debería descargarse automáticamente

2. **Instalación**:
   - Ejecuta el archivo descargado (ej: Git-2.40.0-64-bit.exe)
   - Sigue el asistente de instalación con estas opciones recomendadas:
     - Editor: Selecciona Visual Studio Code si lo tienes instalado
     - PATH environment: "Git from the command line and also from 3rd-party software"
     - HTTPS transport: "Use the OpenSSL library"
     - Line ending conversions: "Checkout Windows-style, commit Unix-style"
     - Terminal emulator: "Use Windows' default console window"
     - Default behavior of git pull: "Default"

3. **Verificación**:
   - Abre el símbolo del sistema (CMD) o PowerShell
   - Ejecuta:
     ```bash
     git --version
     ```
   - Deberías ver la versión instalada (ej: git version 2.40.0.windows.1)

### Pasos detallados
1. **Clona el repositorio**:  
   ```bash
   git clone https://github.com/RodriVelo/PWA- //Creo que este link no funciona, revisar.
   cd PWA-/mi-app-react
   ```

2. **Instala las dependencias**:  
   ```bash
   npm install
   ```
   Este comando instalará todas las dependencias necesarias definidas en el archivo package.json, incluyendo React, Vite y otras bibliotecas utilizadas en el proyecto.

3. **Inicia el servidor de desarrollo**:  
   ```bash
   npm run dev
   ```
   Esto iniciará el servidor de desarrollo Vite que compilará la aplicación y la servirá localmente.

4. **Accede a la aplicación**:  
   - Abre tu navegador web
   - Navega a la URL mostrada en la terminal (generalmente http://localhost:5173)
   - Verás la interfaz de GesThor Mose lista para usar

### Solución de problemas comunes
- Si encuentras el error "port already in use", puedes modificar el puerto en el archivo vite.config.js o detener el proceso que está usando ese puerto.
- Si hay problemas con las dependencias, prueba con `npm clean-cache` seguido de `npm install`.

---

## **💡 Conceptos clave de React utilizados**

### Hooks implementados

- **useState**: Para gestionar el estado de la aplicación
- **useEffect**: Para cargar datos y efectos secundarios

---

## **📚 Función de los siguientes archivos iniciales**

- **index.js:** Es el punto de entrada principal de la aplicación.Se encarga de renderizar el componente raíz (App) dentro del DOM.

- **App.js:** Componente principal de la aplicación. Es el punto de inicio del árbol de componentes.

- **index.css:** Archivo de estilos globales que se aplica a toda la aplicación. Se importa en index.js para que los estilos estén disponibles en todo el árbol de componentes.

- **package-json:** Ayuda a definir qué bibliotecas son necesarias y cómo debe comportarse la aplicación durante el desarrollo, las pruebas y la producción. Ya que contiene toda la configuración del proyecto, incluyendo: 
//OJO no es package-json --> package.json sin -
Dependencias (como React, ReactDOM, etc.).
Scripts para ejecutar tareas (start, build, test, etc.).
Información del proyecto (nombre, versión, descripción).
Configuraciones específicas (por ejemplo, de ESLint, Babel, etc.).
