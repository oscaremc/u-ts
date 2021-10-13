"use strict";
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
