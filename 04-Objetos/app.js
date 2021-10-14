"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(function () {
    var flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo']
    };
    console.log(flash);
})();
(function () {
    var flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo']
    };
    flash = {
        name: 'Clark Kent',
        // age: 60,                 //su valor es opcionl
        powers: ['Super fuerza'],
        getName: function () {
            return this.name;
        }
    };
    console.log(flash);
})();
(function () {
    var flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo']
    };
    var superman = {
        name: 'Clark kent',
        age: 60,
        powers: ['Super fuerza']
    };
})();
(function () {
    var myCustomVariable = 'Fernando';
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Bruce',
        age: 43,
        powers: ['Super fuerza']
    };
    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);
})();
(function () {
    // DESTRUCTURACION TRADICIONAL
    var avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.123534
    };
    var poder = avengers.poder, vision = avengers.vision;
    console.log(poder.toFixed(2), vision.toUpperCase());
})();
(function () {
    var avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.123534
    };
    var printAvenger = function (_a) {
        var ironman = _a.ironman, resto = __rest(_a, ["ironman"]);
        console.log(ironman, resto);
    };
    printAvenger(avengers);
})();
(function () {
    var avengersArr = ['Cap. America', true, 150.15];
    var ironman = avengersArr[1];
    console.log({ ironman: ironman });
    var hulk = avengersArr[2];
    console.log({ hulk: hulk });
})();
(function () {
    var ironman = {
        name: 'Ironman',
        weapon: 'Armorsuit'
    };
    var captainAmerica = {
        name: 'Capitán América',
        weapon: 'Escudo'
    };
    var thor = {
        name: 'Thor',
        weapon: 'Mjolnir'
    };
    var avengers = [ironman, thor, captainAmerica];
    for (var _i = 0, avengers_1 = avengers; _i < avengers_1.length; _i++) {
        var avenger = avengers_1[_i];
        console.log(avenger.name, avenger.weapon);
    }
})();
