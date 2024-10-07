// Implementar la clase RegistroAutomotor (Autos, motos camiones) y deben tener los siguientes métodos:
// Agregar vehículo get y set, modificar un vehículo, dar de baja
// Incorporar los conceptos composición y encapsulamiento

import Vehicle from './Vehicle'

class VehicleRegistration {
    private vehicles: Vehicle[]

    constructor() {
        this.vehicles = []
    }

    addVehicle(type: string, brand: string, model: string, year: number, id: number): void {
        let vehicle = new Vehicle(type, brand, model, year, id)
        this.vehicles.push(vehicle)
    }

    deleteVehicle(id: number): void {
        const index = this.vehicles.findIndex(vehicle => vehicle.id === id)
        if (index > -1) {
            this.vehicles.splice(index, 1)
        }
    }
 
    modifyVehicle(id: number, property: string, value: any) {
        const index = this.vehicles.findIndex(vehicle => vehicle.id === id)
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

    getCars(): string[] {
        return this.vehicles.filter(vehicle => vehicle.getType() == 'Auto')
            .map(vehicle => (
                `${vehicle.getBrand()}, ${vehicle.getModel()}, ${vehicle.getYear()}`)
            )
    }

    getMotorbikes(): string[] {
        return this.vehicles.filter(vehicle => vehicle.getType() == 'Moto')
            .map(vehicle => (
                `${vehicle.getBrand()}, ${vehicle.getModel()}, ${vehicle.getYear()}`)
            )
    }

    getTrucks(): string[] {
        return this.vehicles.filter(vehicle => vehicle.getType() === 'Camion')
            .map(vehicle => (
                `${vehicle.getBrand()}, ${vehicle.getModel()}, ${vehicle.getYear()}`)
            )   
    }

    getVehicles(): string[] {
        return this.vehicles.map(vehicle => (
            `${vehicle.getType()}, ${vehicle.getBrand()}, ${vehicle.getModel()}, ${vehicle.getYear()}`)
        )
    }
}

export default VehicleRegistration