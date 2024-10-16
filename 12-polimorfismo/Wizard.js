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
Object.defineProperty(exports, "__esModule", { value: true });
var Character_1 = require("./Character");
var Wizard = /** @class */ (function (_super) {
    __extends(Wizard, _super);
    function Wizard(name, intelligence) {
        var _this = _super.call(this, name) || this;
        _this.intelligence = intelligence;
        _this.power = 100;
        return _this;
    }
    Wizard.prototype.attack = function () {
        if (this.power >= 20) {
            console.log("".concat(this.name, " ha lanzado un hechizo"));
            this.power = this.power - 20;
        }
        else {
            console.log("".concat(this.name, " no tiene suficiente poder para lanzar un hechizo"));
        }
    };
    Wizard.prototype.defend = function () {
        console.log("".concat(this.name, " ha lanzado su defensa"));
    };
    Wizard.prototype.rechargePower = function () {
        if (this.intelligence >= 8) {
            console.log("".concat(this.name, " ha recargado su poder"));
            this.power = this.power + 20;
        }
        else {
            console.log("".concat(this.name, " no tiene suficiente inteligencia para recargar su poder"));
        }
    };
    return Wizard;
}(Character_1.default));
exports.default = Wizard;
