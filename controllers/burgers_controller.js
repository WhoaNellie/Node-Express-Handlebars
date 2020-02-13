const express = require("express");
const router = express.Router();
// const burger = require("../models/burger.js");
const orm = require("../config/orm");

    router.get("/", async function(req, res) {
        let data = await orm.selectAll("burgers");
        for(let i = 0; i < data.length; i++){
            if(data[i].devoured == 0){
                data[i].devoured = false;
            }else{
                data[i].devoured = true;
            }
        }
        res.render("index", {burger : data});
    });
    
    router.post("/api/burger", async function(req, res) {
        let newBurg = await orm.insertOne("burgers", req.body.name);
        res.end();
    });
    
    router.put("/api/burger/:id", async function(req, res) {
        let devouredBurg = await orm.updateOne("burgers", req.params.id);
        res.end();
    });
     
    router.delete("/api/delburger/:id", async function(req, res) {
        let deletedBurg = await orm.deleteOne("burgers", req.params.id);
        res.end();
    });



module.exports = router;
