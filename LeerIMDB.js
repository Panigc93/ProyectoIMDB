"use strict";
exports.__esModule = true;
var fs = require("fs");
var carteleraNueva = fs.readFileSync('imdbBBDD.json', 'utf8');
var carteleraVer = JSON.parse(carteleraNueva);
console.log(typeof (carteleraVer));
