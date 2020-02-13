const express = require("express");
const router = express.Router();
// const burger = require("../models/burger.js");
const orm = require("../config/orm");

    router.get("/", async function(req, res) {
        let data = await orm.selectAll("burgers");
        // console.log(data);
        res.render("index", {burger : data});
    });
    
    router.post("/api/burger", async function(req, res) {
        // will this run insertOne if it's never called?
        console.log(req.body);
        let newBurg = await orm.insertOne("burgers", req.body.name);
        res.end();
    });
    
    router.put("/api/burger/:id", async function(req, res) {
        // do i need to put this in a variable?
        console.log(req.params);
        await orm.updateOne("burgers", req.params.id);
        res.end();
    });
     



module.exports = router;
