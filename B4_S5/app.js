const http = require('http');

// --- tạo server
const server = http.createServer();

console.log(routes.someText);

//  lắng nghe port
server.listen(3000);
