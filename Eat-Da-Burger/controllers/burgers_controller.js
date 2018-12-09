const express = require("express");
const router = express.Router();
const log = console.log
const burger = require("../models/burger.js");

router.get("/", (req, res)=> {
  burger.all((data)=> {
    let hbsObject = {
      burgers: data
    };
    log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", (req, res)=> {
  burger.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], ()=> {
    res.redirect("/");
  });
});

router.put("/:id", (req, res) => {
 let condition = "id = " + req.params.id;

 log("condition", condition);

  burger.update({devoured: req.body.devoured}, condition, ()=> {
    res.redirect("/");
  });
});

router.delete("/:id", (req, res)=> {
  let condition = "id = " + req.params.id;

  burger.delete(condition, ()=> {
    res.redirect("/");
  });
});

module.exports = router;
