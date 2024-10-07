"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VehicleRegistration_1 = require("./VehicleRegistration");
// Clase Vehicle: crea un vehículo, con la posibilidad de elegir tipo de vehículo, marca, modelo y año
// Clase VehicleRegistration: Acá se irán registrando los vehículos, con la posibilidad de agregar nuevos y eliminar o modificar existentes
var registration = new VehicleRegistration_1.default();
// Se agregan vehículos a la lista de registro
registration.addVehicle("Auto", "Peugeout", "208", 2023, 1);
registration.addVehicle("Auto", "Fiat", "Cronos", 2024, 2);
registration.addVehicle("Moto", "Honda", "CBR600", 2022, 3);
registration.addVehicle("Camion", "Scania", "G340", 2013, 4);
// Se obtiene la lista de vehículos registrados
console.log(registration.getVehicles());
// Se elimina un vehículo de la lista
registration.deleteVehicle(1);
console.log(registration.getVehicles());
// Se modifica cierta propiedad de un vehículo registrado
registration.modifyVehicle(3, "year", 2023);
registration.modifyVehicle(3, "brand", "Yamaha");
registration.modifyVehicle(3, "model", "MT-03");
console.log(registration.getVehicles());
// Se obtienen los vehículos de un tipo determinado
console.log(registration.getCars());
console.log(registration.getMotorbikes());
console.log(registration.getTrucks());
