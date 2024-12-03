// api/db.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db.json');  // Ruta al archivo db.json
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

module.exports = (req, res) => {
  server(req, res);
};
