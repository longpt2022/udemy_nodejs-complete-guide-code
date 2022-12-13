const http = require('http');
const routes = require('./routes');

// --- tạo server
const server = http.createServer(routes.handler);

console.log(routes.someText);

//  lắng nghe port
server.listen(3000);
