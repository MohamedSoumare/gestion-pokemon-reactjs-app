// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('src/models/db.json');
const middlewares = jsonServer.defaults();

// Add delay middleware
server.use((req, res, next) => {
  setTimeout(next, 1000); // 1-second delay
});

// Use default middlewares (CORS, logger, etc.)
server.use(middlewares);

// Use router
server.use(router);

// Start server
const PORT = 3001;
server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});
