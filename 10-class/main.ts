import Vehicle from "./Vehicle"
import VehicleRegistration from "./VehicleRegistration"

// Clase Vehicle: crea un vehículo, con la posibilidad de elegir tipo de vehículo, marca, modelo y año
// Clase VehicleRegistration: Acá se irán registrando los vehículos, con la posibilidad de agregar nuevos y eliminar o modificar existentes

let car1: Vehicle = new Vehicle("Auto", "Peugeout", "208", 2023)
let motorcycle1: Vehicle = new Vehicle("Moto", "Honda", "CBR600", 2022)
let truck1: Vehicle = new Vehicle("Camion", "Scania", "G340", 2013)

// Se obtienen los datos del vehículo
console.log(`${car1.getType()}, ${car1.getBrand()}, ${car1.getModel()}, ${car1.getYear()}`)
car1.setYear(2024)
console.log(`Changed year: ${car1.getYear()}`)


let registration: VehicleRegistration = new VehicleRegistration()

// Se agregan vehículos a la lista de registro
registration.addVehicle(car1)
registration.addVehicle(motorcycle1)
registration.addVehicle(truck1)
// Se obtiene la lista de vehículos registrados
console.log(registration.getVehicles())
// Se elimina un vehículo de la lista
registration.deleteVehicle(car1)
console.log(registration.getVehicles())
// Se modifica cierta propiedad de un vehículo registrado
registration.modifyVehicle(motorcycle1, "year", 2023)
registration.modifyVehicle(motorcycle1, "brand", "Yamaha")
registration.modifyVehicle(motorcycle1, "model", "MT-03")
console.log(registration.getVehicles())