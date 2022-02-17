"use strict";

const express = require("express");
//const { request } = require("./app");
const db = require("./fakeDb");

const router = new express.Router();

// GET items return list of shopping items
router.get("/", function (req, res) {
  return res.json({ items: db.items });
});

// POST items accept JSON, add item, return item
router.post("/", function (req, res) {
  db.items.push(req.body);
  console.log(db.items);
  return res.json({ added: req.body });
});

// GET returns a single specific item from the shopping items
router.get("/:name", function (req, res){

  for (let i of db.items){
    if (i.name == req.params.name){
      return res.json(i)
    }
  }
})

//PATCH updates a single specific item from shopping items
router.patch("/:name", function (req, res){

  for (let i of db.items){
    if (i.name == req.params.name){
      i.name = req.body.name;
      i.price = req.body.price;
      return res.json({'updated': i});
    }
  }
})

//DELETE delets a single specific item from shopping items
router.delete("/:name", function (req, res){
    debugger;
  for (let i = 0; i < db.items.length; i++){
    if (req.params.name === db.items[i].name){
      db.items.splice(i, 1);
      return res.json({message: "Deleted"});
    }
  }
})

module.exports = router;
