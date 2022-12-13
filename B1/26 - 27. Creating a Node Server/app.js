const http = require('http');

// --- tạo server
// req: request, res: response
const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write(
      '<body><form action="/message" method="POST"><input type="text" /><button type="submit">Send</button></form></body>'
    );
    res.write('</head>');
    // thêm "return" để những đoạn code "res" ở dưới end() k đc thực hiện
    return res.end();
  }

  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  res.write('<body><h1>Hello from my Node.js</h1></body>');
  res.write('</head>');
  res.end();
});

//  lắng nghe port
server.listen(3000);
