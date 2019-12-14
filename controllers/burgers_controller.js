let express = require('express');
let burger = require('../models/burger');
let router = express.Router();


router.get("/", function (req, res){

 burger.selectAll(function(data){

        let hbsObject = {
            burgers: data
        }
           res.render("index", hbsObject)
    })
});

router.post("/api/burgers", function (req, res){
    burger.insertOne(
        req.body.burger_name
    )
    //console.log("inside post")
   // console.log(req.body)
   // burger.insert(req.body.burger_name);
    // res.status(200).end();
})

router.put("/api/burgers/:id", function(req,res){

    burger.updateOne(req.params.id);
    res.status(200).end()
})

module.exports = router;