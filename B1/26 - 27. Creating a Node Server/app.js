const http = require('http');

// --- tạo server
// req: request, res: response
const server = http.createServer((req, res) => {
  console.log(req);
});

//  lắng nghe port
server.listen(3000);
