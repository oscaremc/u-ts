"use strict";
(function () {
    var hero = "flash";
    function returnName() {
        return hero;
    }
    var activateBatisignal = function () {
        return 'Batiseñar actividad! ';
    };
    console.log(typeof activateBatisignal);
    var heroName = returnName();
    console.log(heroName);
})();
(function () {
    var fullName = function (firstName, lastName) {
        return firstName + " " + (lastName || "---");
    };
    var name = fullName("tony");
    console.log({ name: name });
})();
(function () {
    var fullName = function (firstName) {
        var restArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restArgs[_i - 1] = arguments[_i];
        }
        return firstName + " " + restArgs.join(' ');
    };
    var superman = fullName('clark', 'Joseph', 'Kent');
    console.log({ superman: superman });
})();
