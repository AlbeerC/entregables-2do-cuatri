// Implementar la clase RegistroAutomotor (Autos, motos camiones) y deben tener los siguientes métodos:
// Agregar vehículo get y set, modificar un vehículo, dar de baja
// Incorporar los conceptos composición y encapsulamiento

import Vehicle from './Vehicle'

class VehicleRegistration {
    private vehicles: Vehicle[]

    constructor() {
        this.vehicles = []
    }

    addVehicle(vehicle: Vehicle): void {
        this.vehicles.push(vehicle)
    }

    deleteVehicle(vehicle: Vehicle): void {
        const index = this.vehicles.indexOf(vehicle)
        if (index > -1) {
            this.vehicles.splice(index, 1)
        }
    }
 
    modifyVehicle(vehicle: Vehicle, property: string, value: any) {
        const index = this.vehicles.indexOf(vehicle)
        if (index > -1) {
            switch (property) {
                case 'type':
                    this.vehicles[index].setType(value)
                    break
                case 'brand':
                    this.vehicles[index].setBrand(value)
                    break
                case 'model':
                    this.vehicles[index].setModel(value)
                    break
                case 'year':
                    this.vehicles[index].setYear(value)
                    break
                default:
                    console.log("Propiedad no encontrada")
                    break
            }
        }
    }

    getVehicles(): string[] {
        return this.vehicles.map(vehicle => (
            `${vehicle.getType()}, ${vehicle.getBrand()}, ${vehicle.getModel()}, ${vehicle.getYear()}`)
        )
    }
}

export default VehicleRegistration