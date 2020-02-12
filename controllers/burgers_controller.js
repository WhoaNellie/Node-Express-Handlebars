const express = require("express");
const router = express.Router();
// const burger = require("../models/burger.js");
const orm = require("./config/orm");

async function routes(){

    router.get("/", function(req, res) {
        let data = await orm.selectAll("burgers");
        res.render("index", {burgers : data});
    });
    
    router.post("/api/burger", function(req, res) {
    });
    
    router.put("/api/burger/:id", function(req, res) {
    });
     
  }


module.exports = router;

module.exports = routes;
