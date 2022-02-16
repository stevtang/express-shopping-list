"use strict";

const express = require("express");
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

module.exports = router;
