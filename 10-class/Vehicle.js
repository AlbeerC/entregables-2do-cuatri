"use strict";
// Implementar la clase RegistroAutomotor (Autos, motos camiones) y deben tener los siguientes métodos:
// Agregar vehículo get y set, modificar un vehículo, dar de baja
// Incorporar los conceptos composición y encapsulamiento
Object.defineProperty(exports, "__esModule", { value: true });
var Vehicle = /** @class */ (function () {
    function Vehicle(type, brand, model, year) {
        this.type = type;
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    Vehicle.prototype.getType = function () {
        return this.type;
    };
    Vehicle.prototype.getBrand = function () {
        return this.brand;
    };
    Vehicle.prototype.getModel = function () {
        return this.model;
    };
    Vehicle.prototype.getYear = function () {
        return this.year;
    };
    Vehicle.prototype.setType = function (type) {
        this.type = type;
    };
    Vehicle.prototype.setBrand = function (brand) {
        this.brand = brand;
    };
    Vehicle.prototype.setModel = function (model) {
        this.model = model;
    };
    Vehicle.prototype.setYear = function (year) {
        this.year = year;
    };
    return Vehicle;
}());
exports.default = Vehicle;
