"use strict";


const request = require("supertest");
const app = require("./app");
let db = require("./fakeDb");

let item1 = { name: "apple", price: 2.0 };
let item2 = { name: "pear", price: 4.1 };

beforeEach(function () {
  db.items.push(item1);
  db.items.push(item2);
});

afterEach(function () {
  db.items.length = 0;
});

describe("GET /items", function () {
  it("Gets a list of items", async function () {
    const resp = await request(app).get("/items");
    expect(resp.body).toEqual({
      items: [
        { name: "apple", price: 2.0 },
        { name: "pear", price: 4.1 },
      ]
    });
  });
});
