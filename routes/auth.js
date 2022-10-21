const router = require("express").Router();
const authController = require("../controllers/auth");

router.get("/api/ping", (request, response) => {
  response.set("Access-Control-Allow-Origin", "http://localhost:4200/");
  response.status(200).json({ message: "pong" });
});

router.post("/api/users/forgot-password", (request, response) => {
  const result = authController.forgotPassword(request.body);
  response.set("Access-Control-Allow-Origin", "http://localhost:4200/");
  response.status(result.status).json(result);
});

router.post("/api/login", (request, response) => {
  const result = authController.login(request.body);
  response.set("Access-Control-Allow-Origin", "http://localhost:4200/");
  response.status(result.status).json(result);
});
router.post("/api/users/reset-password/:token", (request, response) => {
  response.set("Access-Control-Allow-Origin", "http://localhost:4200/");
  const result = authController.resetPassword({
    ...request.body,
    ...request.params,
  });
  response.status(result.status).json(result);
});

router.post("/api/users/verify-token/:uid/:token", (request, response) => {
  response.set("Access-Control-Allow-Origin", "http://localhost:4200/");
  const result = authController.verifyUser(request.params);
  response.status(result.status).json(result);
});

router.get('/api/collaborations/search', (request, response) => {
  response.set('Access-Control-Allow-Origin', 'http://localhost:4200/');
  const result = authController.listApi(request.query);
  response.status(200).json({ ...result });
});
router.get("/api/documents/search", (request, response) => {
  response.set("Access-Control-Allow-Origin", "http://localhost:4200/");
  const result = authController.documentApi(request.query);
  response.status(200).json({ ...result });
});

router.get('/api/collaborations/filter-values', (request, response) => {
  response.set('Access-Control-Allow-Origin', 'http://localhost:4200/');
  const result = authController.getAllFilters();
  response.status(200).json({ ...result });
});

router.get('/api/providers/:id', (request, response) => {
  response.set('Access-Control-Allow-Origin', 'http://localhost:4200/');
  const result = authController.getUser(request.params);
  response.status(200).json(result);
});

// CRUD for admin/super admin users
router.post('/api/zivianusers', (request, response) => {
  response.set('Access-Control-Allow-Origin', 'http://localhost:4200/');
  authController.createUser(request.body);
  response.status(200).json({ message: 'User created'});
});

router.get('/api/zivianusers', (request, response) => {
  response.set('Access-Control-Allow-Origin', 'http://localhost:4200/');
  const result = authController.usersApi(request.query);
  response.status(200).json({ ...result });
});

router.get('/api/zivianusers/:id', (request, response) => {
  response.set('Access-Control-Allow-Origin', 'http://localhost:4200/');
  const result = authController.usersApi(request.params);
  response.status(200).json({ ...result });
});

router.delete('/api/zivianusers/:id', (request, response) => {
  response.set('Access-Control-Allow-Origin', 'http://localhost:4200/');
  response.status(200).json({ message: 'User Deleted' });
});

router.put('/api/zivianusers/:id', (request, response) => {
  response.set('Access-Control-Allow-Origin', 'http://localhost:4200/');
  authController.updateUser(request.body);
  response.status(200).json({ message: 'User updated' });
});


module.exports = router;
