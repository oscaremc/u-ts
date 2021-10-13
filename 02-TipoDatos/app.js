"use strict";
var a = 10;
var b = 23;
var c;
c = {};
c = "df";
// ARREGLOS
(function () {
    var arr = [1, 2, 3, 4, 5, 6, 7];
    console.log(arr);
    var number = [1, 2, 3, 4, 5, 6, 7];
    console.log(number);
    var numbers = [1, 2, 3, "4", 5, 6, 7]; // arroja error por definir el tipo del array y agregar un elemento texto
    console.log(numbers);
    var num = [1, 2, 3, "4", 5, 6, 7]; //se asigna diferentes tipos de elemntos al array
    console.log(num);
})();
