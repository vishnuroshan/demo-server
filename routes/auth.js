const router = require("express").Router();
const authController = require("../controllers/auth");

router.get("/api/ping", (request, response) => {
  response.set("Access-Control-Allow-Origin", "http://localhost:4200/");
  response.status(200).json({ message: "pong" });
});

router.post("/api/send-reset-password-email", (request, response) => {
  const result = authController.forgotPassword(request.body);
  response.set("Access-Control-Allow-Origin", "http://localhost:4200/");
  response.status(result.status).json(result);
});

router.post("/api/login", (request, response) => {
  const result = authController.login(request.body);
  response.set("Access-Control-Allow-Origin", "http://localhost:4200/");
  response.status(result.status).json(result);
});
router.post("/api/reset-password/:token", (request, response) => {
  response.set("Access-Control-Allow-Origin", "http://localhost:4200/");
  const result = authController.resetPassword({
    ...request.body,
    ...request.params,
  });
  response.status(result.status).json(result);
});

router.get("/api/verify-user/:token", (request, response) => {
  response.set("Access-Control-Allow-Origin", "http://localhost:4200/");
  const result = authController.verifyUser(request.params);
  response.status(result.status).json(result);
});

router.get("/api/collaborators", (request, response) => {
  response.set("Access-Control-Allow-Origin", "http://localhost:4200/");
  const result = authController.listApi(request.query);
  response.status(200).json({ status: 200, ...result });
});
router.get("/api/documents", (request, response) => {
  response.set("Access-Control-Allow-Origin", "http://localhost:4200/");
  const result = authController.documentApi(request.query);
  response.status(200).json({ status: 200, ...result });
});

router.get("/api/get-default-filter-values", (request, response) => {
  response.set("Access-Control-Allow-Origin", "http://localhost:4200/");
  const result = authController.getAllFilters();
  response.status(200).json({ status: 200, ...result });
});
module.exports = router;
