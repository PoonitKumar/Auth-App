const express = require("express");
const router = express.Router();
const cors = require("cors");
const {
  test,
  registerUser,
  loginUser,
  getProfile,
  logoutUser,
} = require("../controllers/authController");

router.use(
  cors({
    credentials: true,
    origin: "https://auth-app-frontend-49s7.onrender.com",
  })
);

router.get("/", test);

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/profile", getProfile);

router.post("/logout", logoutUser);

module.exports = router;
