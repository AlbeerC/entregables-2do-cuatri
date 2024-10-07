"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Motorcycle_1 = require("./Motorcycle");
var Car_1 = require("./Car");
var Truck_1 = require("./Truck");
var VehicleRegistration = /** @class */ (function () {
    function VehicleRegistration(name, city, id) {
        this.trucks = [];
        this.cars = [];
        this.motorcycles = [];
        this.name = name;
        this.city = city;
        this.id = id;
    }
    VehicleRegistration.prototype.getTrucks = function () {
        return this.trucks;
    };
    VehicleRegistration.prototype.getCars = function () {
        return this.cars;
    };
    VehicleRegistration.prototype.getMotorcycles = function () {
        return this.motorcycles;
    };
    VehicleRegistration.prototype.addTruck = function (brand, model, year, plate, loadCapacity) {
        var newTruck = new Truck_1.default(brand, model, year, plate, loadCapacity);
        this.trucks.push(newTruck);
    };
    VehicleRegistration.prototype.addCar = function (brand, model, year, plate, doors) {
        var newCar = new Car_1.default(brand, model, year, plate, doors);
        this.cars.push(newCar);
    };
    VehicleRegistration.prototype.addMotorcycle = function (brand, model, year, plate, engineCapacity) {
        var newMotorcycle = new Motorcycle_1.default(brand, model, year, plate, engineCapacity);
        this.motorcycles.push(newMotorcycle);
    };
    VehicleRegistration.prototype.deleteMotorcycle = function (plate) {
        var index = this.motorcycles.findIndex(function (vehicle) { return vehicle.plate === plate; });
        if (index > -1) {
            this.motorcycles.splice(index, 1);
        }
    };
    VehicleRegistration.prototype.modifyMotorcycle = function (plate, property, value) {
        var index = this.motorcycles.findIndex(function (vehicle) { return vehicle.plate === plate; });
        if (index > -1) {
            switch (property) {
                case 'brand':
                    this.motorcycles[index].setBrand(value);
                    break;
                case 'model':
                    this.motorcycles[index].setModel(value);
                    break;
                case 'year':
                    this.motorcycles[index].setYear(value);
                    break;
                case 'plate':
                    this.motorcycles[index].setPlate(value);
                    break;
                case 'engineCapacity':
                    this.motorcycles[index].setEngineCapacity(value);
                    break;
                default:
                    console.log("Propiedad no encontrada");
                    break;
            }
        }
        else {
            console.log("Moto no encontrada");
        }
    };
    return VehicleRegistration;
}());
exports.default = VehicleRegistration;
