const express = require("express");
const cors = require('cors');
const connectDB = require("./config/db");
const auth = require('./routes/auth.routes');
const task = require('./routes/task.routes');

// Inicializa el servidor express
const app = express();

// Conectar a la base de datos ejemplo2
connectDB();

// Middleware para parsear JSON
app.use(express.json());
// Middleware activando CORS
app.use(cors());

// Definir las rutas
app.use("/api/auth", auth);
app.use("/api/task", task);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
