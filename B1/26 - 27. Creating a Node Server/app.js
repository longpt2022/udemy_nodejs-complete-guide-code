const http = require('http');

// --- tạo server
// req: request, res: response
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  // Lệnh thoát khỏi event loop của server
  // process.exit();

  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  res.write('<body><h1>Hello from my Node.js</h1></body>');
  res.write('</head>');
  res.end();

  // k viết write() sau end() -> sẽ lỗi
  // res.write;
});

//  lắng nghe port
server.listen(3000);
