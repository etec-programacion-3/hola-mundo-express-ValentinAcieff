/**
 * Importa y configura Express.
 * @module express
 */
import express from 'express';

/**
 * Instancia de la aplicación Express.
 * @type {express.Application}
 */
const app = express();

/**
 * Ruta principal que devuelve un saludo básico.
 * @name GET /
 * @function
 * @memberof module:express
 * @param {express.Request} req - Objeto de solicitud Express.
 * @param {express.Response} res - Objeto de respuesta Express.
 * @returns {void}
 */
app.get('/', (req, res) => {
  res.send("Hello World");
});

/**
 * Ruta específica para saludar a un usuario llamado Valentín.
 * @name GET /saludo/valentin
 * @function
 * @memberof module:express
 * @param {express.Request} req - Objeto de solicitud Express.
 * @param {express.Response} res - Objeto de respuesta Express.
 * @returns {void}
 */
app.get('/saludo/valentin', (req, res) => {
  res.send("Hola Valentín");
});

/**
 * Inicia el servidor Express en el puerto 3000.
 * @function
 * @memberof module:express
 * @param {number} port - Puerto en el que se iniciará el servidor Express.
 * @param {Function} callback - Función de devolución de llamada que se ejecuta cuando el servidor se inicia correctamente.
 * @returns {void}
 */
app.listen(3000, () => {
  console.log("Example app listening on port 3000");
});
