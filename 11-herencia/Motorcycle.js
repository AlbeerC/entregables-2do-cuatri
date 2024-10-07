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
var Vehicle_1 = require("./Vehicle");
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle(brand, model, year, plate, engineCapacity) {
        var _this = _super.call(this, brand, model, year, plate) || this;
        _this.engineCapacity = engineCapacity;
        return _this;
    }
    Motorcycle.prototype.setBrand = function (brand) {
        this.brand = brand;
    };
    Motorcycle.prototype.setModel = function (model) {
        this.model = model;
    };
    Motorcycle.prototype.setYear = function (year) {
        this.year = year;
    };
    Motorcycle.prototype.setPlate = function (plate) {
        this.plate = plate;
    };
    Motorcycle.prototype.setEngineCapacity = function (engineCapacity) {
        this.engineCapacity = engineCapacity;
    };
    return Motorcycle;
}(Vehicle_1.default));
exports.default = Motorcycle;
