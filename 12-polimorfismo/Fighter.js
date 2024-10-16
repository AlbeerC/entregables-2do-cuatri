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
var Fighter = /** @class */ (function (_super) {
    __extends(Fighter, _super);
    function Fighter(name, strength) {
        var _this = _super.call(this, name) || this;
        _this.strength = strength;
        _this.armour = 100;
        return _this;
    }
    Fighter.prototype.attack = function () {
        if (this.strength >= 10) {
            console.log("".concat(this.name, " ha lanzado un golpe"));
            this.strength = this.strength - 10;
        }
        else {
            console.log("".concat(this.name, " no tiene suficiente fuerza para golpear"));
        }
    };
    Fighter.prototype.defend = function () {
        if (this.armour >= 20) {
            console.log("".concat(this.name, " ha bloqueado un ataque con su armadura"));
            this.armour = this.armour - 20;
        }
        else {
            console.log("".concat(this.name, " no tiene suficiente armadura para bloquear un ataque"));
        }
    };
    return Fighter;
}(Character_1.default));
exports.default = Fighter;
