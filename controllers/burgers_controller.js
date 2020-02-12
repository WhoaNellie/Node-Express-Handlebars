const express = require("express");
const router = express.Router();
// const burger = require("../models/burger.js");
const orm = require("./config/orm");

async function routes(){

    router.get("/", function(req, res) {
        let data = await orm.selectAll("burgers");
        res.render("index", {burger : data});
    });
    
    router.post("/api/burger", function(req, res) {
        let newBurg = await orm.insertOne("burgers", req.body.name);
        // need to find a way to re-render the page and/or send back id when doing await
        res.end();
    });
    
    router.put("/api/burger/:id", function(req, res) {
        let newBurg = await orm.updateOne("burgers", req.params.id);
        res.end();
    });
     
  }


module.exports = router;

module.exports = routes;
