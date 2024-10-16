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
var Archer = /** @class */ (function (_super) {
    __extends(Archer, _super);
    function Archer(name, agility) {
        var _this = _super.call(this, name) || this;
        _this.agility = agility;
        _this.arrows = 20;
        _this.learnNewAttack("Flecha de fuego");
        return _this;
    }
    Archer.prototype.attack = function () {
        if (this.arrows >= 1) {
            console.log("".concat(this.name, " ha disparado una flecha"));
            this.arrows = this.arrows - 1;
        }
        else {
            console.log("".concat(this.name, " no tiene flechas para disparar"));
        }
    };
    Archer.prototype.defend = function () {
        if (this.agility >= 70) {
            console.log("".concat(this.name, " ha esquivado un ataque con su agilidad"));
        }
        else {
            console.log("".concat(this.name, " no tiene suficiente agilidad para esquivar un ataque"));
        }
    };
    Archer.prototype.evolve = function () {
        if (this.level >= 3) {
            console.log("".concat(this.name, " est\u00E1 listo para evolucionar a Sniper"));
            return true;
        }
        else {
            console.log("".concat(this.name, " no tiene suficiente nivel para evolucionar"));
            return false;
        }
    };
    return Archer;
}(Character_1.default));
exports.default = Archer;
