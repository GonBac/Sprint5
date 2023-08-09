const request = require("supertest");
const app = require("../index");

describe("Test Tareas /api/tareas", () => {
  test("Check que la posicion 0 del array sea igual a lo esperado", async () => {
    const response = await request(app).get("/api/tareas");

    expect(response.status).toBe(200);
    expect(response.body.tareas[0]).toEqual({
      id: 1,
      titulo: "Tarea1",
      prioridad_id: 1,
      usuario_id: 1,
      completado: true,
    });
  });
});

describe("Test greaterorequal & lessthan de la ruta /api/tareas ", () => {
  test("Check de que el status sea entre 200 y 300", async () => {
    const response = await request(app).get("/api/tareas");
    expect(response.status).toBeGreaterThanOrEqual(200);
    expect(response.status).toBeLessThan(300);
  });
});

describe("Test truthy en ruta /tareasporusuarioid ", () => {
  test("Check de que el valor completado sea verdadero", async () => {
    const response = await request(app).get("/api/tareasporusuarioid/1");
    expect(response.body.tareas[0].completado).toBeTruthy();
  });
});

describe("Test falsy en ruta /tareasporusuarioid", () => {
  test("Check de que el valor completado sea falso", async () => {
    const response = await request(app).get("/api/tareasporusuarioid/2");
    expect(response.body.tareas[0].completado).toBeFalsy();
  });
});

describe("Test undefined en ruta /tareasporusuarioid", () => {
  test("Check de que la propiedad no exista", async () => {
    const response = await request(app).get("/api/tareasporusuarioid/1");
    expect(response.body.tareas[0].bzme).toBeUndefined();
  });
});

describe("Test Contain en ruta /tareasporusuarioid", () => {
  test("Check que el titulo contenga Tarea1", async () => {
    const response = await request(app).get("/api/tareasporusuarioid/1");
    expect(response.body.tareas[0].titulo).toContain("Tarea1");
  });
});

describe("Test havelength en ruta /api/tareas ", () => {
  test("Check que la lista de tareas contenga 4 tareas", async () => {
    const response = await request(app).get("/api/tareas");
    expect(response.body.tareas).toHaveLength(4);
  });
});

describe("Test havelength(string) en ruta /tareasporusuarioid", () => {
  test("Check que el titulo contenga 6 caracteres", async () => {
    const response = await request(app).get("/api/tareasporusuarioid/1");
    expect(response.body.tareas[0].titulo).toHaveLength(6);
  });
});
