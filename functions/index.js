"use strict";

const functions = require("firebase-functions");

function one() {
  console.log("hello");
}

function two() {
  console.log("world");
}

exports.app_config2 = functions.https.onRequest((request, response) => {
  if (request.method !== "POST") {
    response.status(400).send(":(");
    return;
  } else {
    if (!request.body.getKey) {
        response.status(400).send("pt2 :(");
        return;
    } else {
        one();
        two();
        response.send("Hello World (post)...");
    }
  }
});