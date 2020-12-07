// jshint esversion: 8
const { logger, delayLogger } = require("../Objects/dot");
const {sleep} = require("./sleep");
const name = "Debajit Deb";



logger(name.split(' ')[0]);
delayLogger(name.split(' ')[1],2000);


let a = new Map();
a.set("a", 1);
a.set("b", 2)
a.set("c", 3)
a.set("d", 4)
a.set("e", 5)
logger(a);