"use strict";
// Implementar la clase RegistroAutomotor (Autos, motos camiones) y deben tener los siguientes métodos:
// Agregar vehículo get y set, modificar un vehículo, dar de baja
// Incorporar los conceptos composición y encapsulamiento
Object.defineProperty(exports, "__esModule", { value: true });
var Vehicle_1 = require("./Vehicle");
var VehicleRegistration = /** @class */ (function () {
    function VehicleRegistration() {
        this.vehicles = [];
    }
    VehicleRegistration.prototype.addVehicle = function (type, brand, model, year, id) {
        var vehicle = new Vehicle_1.default(type, brand, model, year, id);
        this.vehicles.push(vehicle);
    };
    VehicleRegistration.prototype.deleteVehicle = function (id) {
        var index = this.vehicles.findIndex(function (vehicle) { return vehicle.id === id; });
        if (index > -1) {
            this.vehicles.splice(index, 1);
        }
    };
    VehicleRegistration.prototype.modifyVehicle = function (id, property, value) {
        var index = this.vehicles.findIndex(function (vehicle) { return vehicle.id === id; });
        if (index > -1) {
            switch (property) {
                case 'type':
                    this.vehicles[index].setType(value);
                    break;
                case 'brand':
                    this.vehicles[index].setBrand(value);
                    break;
                case 'model':
                    this.vehicles[index].setModel(value);
                    break;
                case 'year':
                    this.vehicles[index].setYear(value);
                    break;
                default:
                    console.log("Propiedad no encontrada");
                    break;
            }
        }
    };
    VehicleRegistration.prototype.getCars = function () {
        return this.vehicles.filter(function (vehicle) { return vehicle.getType() == 'Auto'; })
            .map(function (vehicle) { return ("".concat(vehicle.getBrand(), ", ").concat(vehicle.getModel(), ", ").concat(vehicle.getYear())); });
    };
    VehicleRegistration.prototype.getMotorbikes = function () {
        return this.vehicles.filter(function (vehicle) { return vehicle.getType() == 'Moto'; })
            .map(function (vehicle) { return ("".concat(vehicle.getBrand(), ", ").concat(vehicle.getModel(), ", ").concat(vehicle.getYear())); });
    };
    VehicleRegistration.prototype.getTrucks = function () {
        return this.vehicles.filter(function (vehicle) { return vehicle.getType() === 'Camion'; })
            .map(function (vehicle) { return ("".concat(vehicle.getBrand(), ", ").concat(vehicle.getModel(), ", ").concat(vehicle.getYear())); });
    };
    VehicleRegistration.prototype.getVehicles = function () {
        return this.vehicles.map(function (vehicle) { return ("".concat(vehicle.getType(), ", ").concat(vehicle.getBrand(), ", ").concat(vehicle.getModel(), ", ").concat(vehicle.getYear())); });
    };
    return VehicleRegistration;
}());
exports.default = VehicleRegistration;
