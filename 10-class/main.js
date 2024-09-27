"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vehicle_1 = require("./Vehicle");
var VehicleRegistration_1 = require("./VehicleRegistration");
// Clase Vehicle: crea un vehículo, con la posibilidad de elegir tipo de vehículo, marca, modelo y año
// Clase VehicleRegistration: Acá se irán registrando los vehículos, con la posibilidad de agregar nuevos y eliminar o modificar existentes
var car1 = new Vehicle_1.default("Auto", "Peugeout", "208", 2023);
var car2 = new Vehicle_1.default("Auto", "Fiat", "Cronos", 2024);
var motorcycle1 = new Vehicle_1.default("Moto", "Honda", "CBR600", 2022);
var truck1 = new Vehicle_1.default("Camion", "Scania", "G340", 2013);
// Se obtienen los datos del vehículo
console.log("".concat(car1.getType(), ", ").concat(car1.getBrand(), ", ").concat(car1.getModel(), ", ").concat(car1.getYear()));
car1.setYear(2024);
console.log("Changed year: ".concat(car1.getYear()));
var registration = new VehicleRegistration_1.default();
// Se agregan vehículos a la lista de registro
registration.addVehicle(car1);
registration.addVehicle(car2);
registration.addVehicle(motorcycle1);
registration.addVehicle(truck1);
// Se obtiene la lista de vehículos registrados
console.log(registration.getVehicles());
// Se elimina un vehículo de la lista
registration.deleteVehicle(car1);
console.log(registration.getVehicles());
// Se modifica cierta propiedad de un vehículo registrado
registration.modifyVehicle(motorcycle1, "year", 2023);
registration.modifyVehicle(motorcycle1, "brand", "Yamaha");
registration.modifyVehicle(motorcycle1, "model", "MT-03");
console.log(registration.getVehicles());
// Se obtienen los vehículos de un tipo determinado
console.log(registration.getCars());
console.log(registration.getMotorbikes());
console.log(registration.getTrucks());
