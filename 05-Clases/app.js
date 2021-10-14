"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function () {
    var Avenger = /** @class */ (function () {
        function Avenger(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        Avenger.avgAge = 35;
        return Avenger;
    }());
    var antman = new Avenger('Antman', 'Capitan', 'Scott Lang');
    console.log(antman);
})();
(function () {
    var Avenger = /** @class */ (function () {
        // static getAvgAge(){
        //     return `${this.name}`
        // }
        function Avenger(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        Avenger.prototype.bio = function () {
            return this.name + " (" + this.team + ")!!!";
        };
        Avenger.avgAge = 35;
        return Avenger;
    }());
    var antman = new Avenger('Antman', 'Capitan', 'Scott Lang');
    console.log(antman);
    console.log(antman.bio());
    // console.log(Avenger.getAvgAge());
})();
(function () {
    var Avenger = /** @class */ (function () {
        function Avenger(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log('Constructor Avenger llamado!');
        }
        Avenger.prototype.getFullname = function () {
            return this.name + " " + this.realName;
        };
        return Avenger;
    }());
    var Xmen = /** @class */ (function (_super) {
        __extends(Xmen, _super);
        function Xmen(name, realName, isMutant) {
            var _this = _super.call(this, name, realName) || this;
            _this.isMutant = isMutant;
            console.log('Constructor Xmen llamado');
            return _this;
        }
        Object.defineProperty(Xmen.prototype, "fullName", {
            get: function () {
                return this.name + " - " + this.realName;
            },
            set: function (name) {
                if (name.length < 3) {
                    throw new Error('EL nombre debe de ser mayor de 3 letras');
                }
                this.name = name;
            },
            enumerable: false,
            configurable: true
        });
        Xmen.prototype.getFullnameDesdeXmen = function () {
            console.log(_super.prototype.getFullname.call(this));
        };
        return Xmen;
    }(Avenger));
    // const wolverine = new Xmen('Wolverine','Logan', true)
    // wolverine.fullName = 'Fe';
    // console.log(wolverine.fullName );
    // wolverine.getFullnameDesdeXmen();
})();
(function () {
    var Mutante = /** @class */ (function () {
        function Mutante(name, realName) {
            this.name = name;
            this.realName = realName;
        }
        return Mutante;
    }());
    var Xmen = /** @class */ (function (_super) {
        __extends(Xmen, _super);
        function Xmen() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Xmen.prototype.salvarMundo = function () {
            return 'Mundo a salvo!';
        };
        return Xmen;
    }(Mutante));
    var Villian = /** @class */ (function (_super) {
        __extends(Villian, _super);
        function Villian() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Villian.prototype.conquistarMundo = function () {
            return 'Mundo conquistado';
        };
        return Villian;
    }(Mutante));
    var wolverine = new Xmen('Wolverine', 'Logan');
    var magneto = new Villian('Magneto', 'Magnus');
    // console.log(wolverine.salvarMundo());
    // console.log(magneto.conquistarMundo());
    var printName = function (character) {
        console.log(character.realName);
    };
    // printName( magneto );
})();
(function () {
    var flash = {
        name: 'Barry Allen',
        age: 24,
        powers: [1, 2]
    };
    var superman = {
        name: 'Clark Kent',
        age: 60,
        powers: [1],
        getName: function () {
            return this.name;
        }
    };
})();
(function () {
    var Mutant = /** @class */ (function () {
        function Mutant() {
        }
        Mutant.prototype.mutantPower = function (id) {
            return this.name + ' ' + this.realName;
        };
        return Mutant;
    }());
})();
//# sourceMappingURL=app.js.map