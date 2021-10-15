"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Hero_1 = require("./classes/Hero");
var generics_1 = require("./generics/generics");
var get_pokemon_1 = require("./generics/get-pokemon");
var ironman = new Hero_1.Hero('Ironman', 1, 55);
console.log(ironman);
var name = 'Fernando';
console.log((0, generics_1.genericFuntionArrow)(3.141618).toFixed(2));
console.log((0, generics_1.genericFuntionArrow)(name).toUpperCase);
console.log((0, generics_1.genericFuntionArrow)(new Date()).getDate());
(0, get_pokemon_1.getPokemon)(4)
    .then(function (resp) { return console.log(resp); })
    .catch(function (error) { return console.log(error); })
    .finally(function () { return console.log("Fin de getPokemon"); });
