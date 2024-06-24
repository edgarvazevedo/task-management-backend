# Backend Node.js con Express y MongoDB

## Estructura de Carpetas y Archivos:
backend/
│
├── src/
│ ├── models/
│ │ └── Task.ts
│ ├── routes/
│ │ └── tasks.ts
│ ├── database.ts
│ └── index.ts
│
├── .env
├── .gitignore
├── package.json
└── README.md


- **`src/`**: Directorio principal del código fuente del backend.
- **`models/`**: Contiene el archivo de modelo `Task.ts` para definir el esquema de la colección de tareas.
- **`routes/`**: Contiene el archivo `tasks.ts` con las rutas CRUD para manipular tareas.
- **`database.ts`**: Archivo para conectar a MongoDB utilizando mongoose.
- **`index.ts`**: Archivo principal para iniciar el servidor Express y definir las rutas.
- **`.env`**: Archivo de configuración para almacenar la URI de MongoDB.
- **`.gitignore`**: Archivo para especificar qué archivos y carpetas deben ser ignorados por Git.
- **`package.json`**: Archivo de manifesto de Node.js con las dependencias del proyecto.
- **`README.md`**: Documentación del proyecto con instrucciones para instalación y ejecución.

## Configuración del MongoDB

Para ejecutar el backend, necesita configurar una base de datos MongoDB. Siga estos pasos:

1. **Instalación de MongoDB:**
   - Si aún no tiene MongoDB instalado, siga las instrucciones en [MongoDB Installation](https://docs.mongodb.com/manual/installation/) para su sistema operativo.

2. **Iniciar MongoDB Localmente:**
   - Inicie el servidor de MongoDB en su máquina local. Puede usar el siguiente comando:
     ```bash
     mongod
     ```
   - MongoDB se ejecutará en `localhost:27017` de forma predeterminada.

3. **Configuración del Archivo `.env`:**
   - Cree un archivo `.env` en el directorio raíz del backend si aún no existe.
   - Agregue la URI de conexión de MongoDB en el archivo `.env`:
     ```
     MONGODB_URI=mongodb://localhost:27017/nombre-de-su-base-de-datos
     ```
   - Reemplace `nombre-de-su-base-de-datos` con el nombre de su base de datos MongoDB.

## Instrucciones para Clonar y Ejecutar el Backend:

1. **Clonar el Repositorio:**
   ```bash
   git clone <url-de-su-repositorio>

2. **Instalar Dependencias:**
    cd backend
    npm install

3. **Configurar y Cargar Variables de Entorno:**
Asegúrese de haber configurado la URI de MongoDB en el archivo .env como se describió anteriormente.

4. **Ejecutar el Servidor:**
    npm start

Esto iniciará el servidor Node.js y conectará a MongoDB utilizando la configuración del archivo .env.
