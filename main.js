// const http = require('http');
// const color = require('colors');

// const servidor = (req, resp) => {
//   resp.writeHead(200, { 'Content-type': 'text/html' });
//   resp.write('<h1>Hola con main.js</h1>');
//   resp.end();
// }

// const server = http.createServer(servidor);
// server.listen(3443, function () {
//   console.log("hola con el puerto 3443".green);
//   console.log("error en el puerto 3443".red);
// });

/* ======================= SERVIDOR USANDO EXPRESS ======================= */

const color = require('colors');
const express = require('express');

const server = express();
server.get('/', (req, res) => {
  res.send('<h1> <strong> HOLA CON EXPRESS desde mi cel</strong> </h1>')
})

server.listen(5446, "192.168.100.38", () => {
  console.log('Server en el puerto 5446'.green);
});