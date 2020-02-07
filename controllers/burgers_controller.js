const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

router.get("/", function(req, res) {
});

router.post("/api/burger", function(req, res) {
});

router.put("/api/burger/:id", function(req, res) {
});

module.exports = router;
