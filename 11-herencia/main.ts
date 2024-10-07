import VehicleRegistration from "./VehicleRegistration"

const registration = new VehicleRegistration("AC", "Olavarría", 966)

registration.addCar("Audi", "A4", 2021, "AA 000 AA", 5)
registration.addMotorcycle("Honda", "XR250", 2023, "AB 000 AA", 250)
registration.addTruck("Scania", "R450", 2020, "AC 000 AA", 3)
registration.addMotorcycle("Yamaha", "FZ-R", 2022, "AD 000 AA", 250)
registration.addMotorcycle("Yamaha", "MT-03", 2024, "AE 000 AA", 320)

console.log(registration.getCars())
console.log(registration.getMotorcycles())
console.log(registration.getTrucks())

registration.deleteMotorcycle("AD 000 AA")
registration.modifyMotorcycle("AB 000 AA", "year", 2022)
console.log(registration.getMotorcycles())
