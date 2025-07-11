# 📚 Mi Blog Personal

¡Bienvenido al repositorio de *Mi Blog Personal! Este proyecto es una aplicación web full-stack diseñada para crear, visualizar y gestionar posts de un blog. Es el espacio personal de María para compartir sus pensamientos sobre **tecnología, viajes y vida*.

## 🚀 Características Principales

* *Página de Inicio Atractiva:* Una sección "Hero" dinámica y una visualización de los últimos posts del blog.
* *Creación de Posts Sencilla:* Un formulario intuitivo para redactar nuevos posts con título, contenido, autor y categoría.
* *Visualización de Posts Detallada:* Una página dedicada para cada post, mostrando el contenido completo y opciones para interactuar (futuras actualizaciones).
* *Diseño Coherente:* Estilos unificados en toda la aplicación para una experiencia de usuario fluida y agradable.
* *Responsivo:* Adaptado para verse bien en diferentes tamaños de pantalla (escritorio, tablet, móvil).
* *Backend con MongoDB:* Almacenamiento persistente de los posts usando una base de datos NoSQL.

## 🛠️ Tecnologías Utilizadas

### Frontend (React)
* *React:* Biblioteca de JavaScript para construir interfaces de usuario.
* *React Router DOM:* Para la navegación y el manejo de rutas en la aplicación.
* *Axios:* Cliente HTTP basado en promesas para hacer solicitudes a la API.
* *CSS Puro:* Estilos personalizados para el diseño y la interfaz de usuario.

### Backend (Node.js con Express & MongoDB)
* *Node.js:* Entorno de ejecución para JavaScript.
* *Express.js:* Framework de Node.js para construir la API RESTful.
* *Mongoose:* Modelado de objetos para MongoDB, facilitando la interacción con la base de datos.
* *MongoDB Atlas:* Base de datos NoSQL en la nube para almacenar los posts.
* *CORS:* Middleware para habilitar el Cross-Origin Resource Sharing.
* *dotenv:* Para cargar variables de entorno desde un archivo .env.

## ⚙️ Instalación y Ejecución

Sigue estos pasos para levantar el proyecto en tu máquina local:

### Requisitos Previos

Asegúrate de tener instalado lo siguiente:
* [Node.js](https://nodejs.org/es/) (versión 14 o superior recomendada)
* [npm](https://www.npmjs.com/) (viene con Node.js)
* Una cuenta de [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) o una instancia local de MongoDB.

### Configuración del Backend

1.  *Clona el repositorio:*
    bash
    git clone <URL_DE_TU_REPOSITORIO>
    cd nombre-del-repositorio
    
2.  *Navega a la carpeta del backend* (asumiendo que tu archivo index.js del backend está en la raíz del proyecto o en una subcarpeta como backend/):
    bash
    cd <ruta_a_tu_backend> # por ejemplo, si está en la raíz, omite este paso
    
3.  *Instala las dependencias del backend:*
    bash
    npm install
    
4.  *Crea un archivo .env* en la raíz de tu carpeta del backend y añade tu URI de conexión a MongoDB Atlas:
    
    MONGODB_URI=tu_cadena_de_conexion_de_mongodb_atlas
    PORT=3001 # O el puerto que desees para tu API
    
5.  *Inicia el servidor backend:*
    bash
    npm start
    
    El servidor se ejecutará en http://localhost:3001 (o el puerto que configuraste).

### Configuración del Frontend

1.  *Navega a la carpeta del frontend* (asumiendo que tu aplicación React está en una subcarpeta como frontend/ o client/):
    bash
    cd <ruta_a_tu_frontend> # por ejemplo, cd client/
    
2.  *Instala las dependencias del frontend:*
    bash
    npm install
    
3.  *Inicia la aplicación React:*
    bash
    npm run dev # O npm start, dependiendo de tu configuración de script de inicio
    
    La aplicación se abrirá en tu navegador en http://localhost:5173 (o el puerto predeterminado de tu servidor de desarrollo React).

## 💡 Uso de la Aplicación

Una vez que el frontend y el backend estén en funcionamiento:

1.  *Visualiza Posts:* En la página de inicio, verás los posts existentes.
2.  *Crea Nuevos Posts:* Navega a la página "Crear Post" para añadir nuevas entradas al blog.
3.  *Detalle del Post:* Haz clic en el título de cualquier post para ver su contenido completo.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar este proyecto, por favor sigue estos pasos:

1.  Haz un "fork" de este repositorio.
2.  Crea una nueva rama (git checkout -b feature/nueva-caracteristica).
3.  Realiza tus cambios y haz commit (git commit -m 'feat: Añade nueva característica').
4.  Empuja tu rama (git push origin feature/nueva-caracteristica).
5.  Abre un Pull Request.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

---

*¡Gracias por visitar el repositorio de Mi Blog Personal!*
