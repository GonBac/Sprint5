const { knex } = require("../db");

exports.holaMundo = async (req, res) => {
  res.json({ Mensaje: "Hola mundo" });
};

exports.todasTareas = async (req, res) => {
  const tareas = await knex.select("*").from("tarea");
  res.status(200).json({ tareas });
};

exports.todosUsuarios = async (req, res) => {
  const usuarios = await knex.select("*").from("usuario");

  res.status(200).json({ usuarios });
};

exports.agregarTarea = async (req, res) => {
  const nuevaTarea = req.body;
  await knex("tarea").insert(nuevaTarea);
  res.status(201).json({ Mensaje: "Tarea agregada correctamente" });
};

exports.modificarTarea = async (req, res) => {
  const tareaID = Number(req.params.id);
  const nuevaTarea = req.body;

  const tareaExistente = await knex("tarea").where("id", tareaID).first();

  if (!tareaExistente) {
    return res.status(404).json({ error: "La tarea no existe" });
  }
  const tareaActualizada = await knex("tarea")
    .where("id", tareaID)
    .update(nuevaTarea);

  if (tareaActualizada > 0) {
    res.status(200).json({ mensaje: "Tarea modificada correctamente" });
  } else {
    res.status(500).json({ error: "Error al modificar la tarea" });
  }
};

exports.tareasPorUsuarioId = async (req, res) => {
  const usuarioid = Number(req.params.usuario_id);
  const tareas = await knex
    .select("titulo", "completado")
    .from("tarea")
    .where("usuario_id", usuarioid);
  if (tareas.length > 0) {
    res.status(200).json({ tareas });
  } else {
    res.status(404).json({ Error: "No se encontro ese usuario ID" });
  }
};
