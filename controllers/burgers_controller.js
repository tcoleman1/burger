let express = require('express');
let burger = require('../models/burger');
let router = express.Router();


router.get("/", function (req, res){

    let s = burger.selectAll();
    let d = burger.devour();

    connection.query("SELECT * FROM burgers", function (err) {
        if(err) throw err;

        res.render("index", {burgers: s, devoured: d})
    })
});

router.post("/api/burgers", function (req, res){
    burger.inser(req.body.burger_name);
    res.status(200).end();
})

router.put("/api/burgers/:id", function(req,res){

    burger.update(req.params.id);
    res.status(200).end()
})

module.exports = router;