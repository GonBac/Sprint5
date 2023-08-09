const express = require("express");
const routes = express.Router();
const {
  holaMundo,
  todosUsuarios,
  todasTareas,
  agregarTarea,
  modificarTarea,
  tareasPorUsuarioId,
} = require("../controllers");

//Devolver hola mundito
routes.get("/HM", holaMundo);

//Traer todos los usuarios
routes.get("/usuarios", todosUsuarios);

//Traer todas las tareas
routes.get("/tareas", todasTareas);

//Agregar tarea
routes.post("/agregartarea", agregarTarea);

//Modificar tarea por id
routes.put("/modificartarea/:id", modificarTarea);

//Traer tareas por usuarioID
routes.get("/tareasporusuarioid/:usuario_id", tareasPorUsuarioId);

module.exports = routes;
