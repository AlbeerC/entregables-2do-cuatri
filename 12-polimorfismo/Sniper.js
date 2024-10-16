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
var Archer_1 = require("./Archer");
var Sniper = /** @class */ (function (_super) {
    __extends(Sniper, _super);
    function Sniper(name) {
        var _this = _super.call(this, name, 40) || this;
        _this.presicion = 100;
        _this.range = 100;
        _this.bullets = 10;
        return _this;
    }
    Sniper.prototype.longRangeShot = function () {
        if (this.range >= 90 && this.presicion >= 90 && this.bullets >= 1) {
            console.log("".concat(this.name, " ha disparado un disparo de larga distancia y ha acertado"));
            this.bullets = this.bullets - 1;
        }
        else if (this.range < 90 && this.presicion < 90 && this.bullets >= 1) {
            console.log("".concat(this.name, " ha disparado un disparo de larga distancia pero no ha acertado"));
            this.bullets = this.bullets - 1;
        }
        else {
            console.log("".concat(this.name, " no tiene balas para disparar"));
        }
    };
    return Sniper;
}(Archer_1.default));
exports.default = Sniper;
