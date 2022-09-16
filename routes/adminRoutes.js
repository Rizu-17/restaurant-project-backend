const express = require("express");
const adminController = require("../controllers/adminController");

const router = express.Router();

router.route("/add").post(adminController.createAdmin);
router.route("/login").post(adminController.signin);

module.exports = router;
