const express = require("express");
const connectDB = require("./config/db");
const auth = require('./routes/auth.routes');

// Inicializa el servidor express
const app = express();

// Conectar a la base de datos ejemplo2
connectDB();

// Middleware para parsear JSON
app.use(express.json());

// Definir las rutas
app.use("/api/auth", auth);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
