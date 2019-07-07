"use strict";

const functions = require("firebase-functions");
const fire_env = (JSON.stringify(functions.config()) === '{}') ? require('./runtimeconfig.json') : functions.config()

function one() {
  console.log("hello");
}

function two() {
  console.log("world");
}

function config() {
 console.log(fire_env['my']['config'])
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
      config();
      response.send("Hello World (post)...");
    }
  }
});