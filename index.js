// const fs = require('fs')

// fs.writeFile('./texto.txt', 'linea uno', function (err) {
//   if (err) {
//     console.log(err);
//   }
//   console.log('archivo creado');
// })

// console.log('fin');

/* ================================================================================== */

const http = require('http');
const color = require('colors');

// const server = function (req, resp) {
//   resp.writeHead(200, { 'Content-type': 'text/html' });
//   resp.write('<h1>Hola mundo</h1>');
//   resp.end();
// }

const servidor = (req, resp) => {
  resp.writeHead(200, { 'Content-type': 'text/html' });
  resp.write('<h1>Hola, repositorio descargado desde github</h1>');
  resp.end();
}

const server = http.createServer(servidor);
server.listen(3443, function () {
  console.log("hola con el puerto 3443".green);
  console.log("error en el puerto 3443".red);
});
