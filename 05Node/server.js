const http = require("http");
const path = require("path");
const fs = require("fs");
const fsPromises = require("fs").promises;


const logEvent = require("./logEvent");
const EventEmitter = require("events");

class Emitter extends EventEmitter {}

const myEmitter = new Emitter();

// myEmitter.on("log", (msg) => logEvent(msg));

// myEmitter.emit("log", "Log Event Message");
