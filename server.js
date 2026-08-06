const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.js': 'text/javascript; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf'
};

const server = http.createServer((req, res) => {
  console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${req.url}`);

  let reqPath = decodeURIComponent(req.url.split('?')[0]);
  let filePath = path.join(PUBLIC_DIR, reqPath);

  // If path is a directory or route without extension, check for index.html
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  } else if (!path.extname(filePath)) {
    if (fs.existsSync(filePath + '.html')) {
      filePath = filePath + '.html';
    } else if (fs.existsSync(path.join(filePath, 'index.html'))) {
      filePath = path.join(filePath, 'index.html');
    }
  }

  // Check if file exists
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
    res.end(`
      <!DOCTYPE html>
      <html>
      <head><title>404 - Page Not Found</title></head>
      <body style="font-family: system-ui; text-align: center; padding: 50px;">
        <h1>404 - Page Not Found</h1>
        <p>The requested route <code>${req.url}</code> was not found.</p>
        <a href="/" style="color: #FE7B02; font-weight: bold;">Return to Home</a>
      </body>
      </html>
    `);
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('500 Internal Server Error: ' + err.code);
    } else {
      res.writeHead(200, { 
        'Content-Type': contentType,
        'Cache-Control': 'no-cache'
      });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, () => {
  console.log(`\n==================================================`);
  console.log(`🍕 Cucina Fresca Local Server Running!`);
  console.log(`🌐 Home Page:      http://localhost:${PORT}/`);
  console.log(`📋 Menu Page:      http://localhost:${PORT}/menu/`);
  console.log(`🖼️  Gallery Page:   http://localhost:${PORT}/gallery/`);
  console.log(`📲 Table 07 Order: http://localhost:${PORT}/table/07/`);
  console.log(`==================================================\n`);
});
