const http = require('http');

// --- tạo server
// req: request, res: response
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  // Lệnh thoát khỏi event loop của server
  // process.exit();
});

//  lắng nghe port
server.listen(3000);
