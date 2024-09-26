"use strict";
// Implementar la clase RegistroAutomotor (Autos, motos camiones) y deben tener los siguientes métodos:
// Agregar vehículo get y set, modificar un vehículo, dar de baja
// Incorporar los conceptos composición y encapsulamiento
Object.defineProperty(exports, "__esModule", { value: true });
var VehicleRegistration = /** @class */ (function () {
    function VehicleRegistration() {
        this.vehicles = [];
    }
    VehicleRegistration.prototype.addVehicle = function (vehicle) {
        this.vehicles.push(vehicle);
    };
    VehicleRegistration.prototype.deleteVehicle = function (vehicle) {
        var index = this.vehicles.indexOf(vehicle);
        if (index > -1) {
            this.vehicles.splice(index, 1);
        }
    };
    VehicleRegistration.prototype.modifyVehicle = function (vehicle, property, value) {
        var index = this.vehicles.indexOf(vehicle);
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
    VehicleRegistration.prototype.getVehicles = function () {
        return this.vehicles.map(function (vehicle) { return ("".concat(vehicle.getType(), ", ").concat(vehicle.getBrand(), ", ").concat(vehicle.getModel(), ", ").concat(vehicle.getYear())); });
    };
    return VehicleRegistration;
}());
exports.default = VehicleRegistration;
