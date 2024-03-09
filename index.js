import express from "express";
import usuarioRoutes from "./routes/usuariosRoutes.js";
//crear la app

const app = express();

//habilitar pug
app.set("view engine", "pug");
app.set("views", "./views");

//carpeta publica 

app.use(express.static ('public'));

//routing
app.use("/auth", usuarioRoutes);

//definir puerto y arrancar proyecto

const port = 3000;
app.listen(port, () => {
  console.log(`El servidor esta corriendo el puerto ${port}`);
});