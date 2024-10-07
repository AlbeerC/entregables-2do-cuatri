import Motorcycle from './Motorcycle'
import Car from './Car'
import Truck from './Truck'

class VehicleRegistration {
    trucks: Truck[]
    cars: Car[]
    motorcycles: Motorcycle[]
    name: string
    city: string
    id: number

    constructor(name: string, city: string, id: number) {
        this.trucks = []
        this.cars = []
        this.motorcycles = []
        this.name = name
        this.city = city
        this.id = id
    }

    getTrucks(): Truck[] {
        return this.trucks
    }

    getCars(): Car[] {
        return this.cars
    }

    getMotorcycles(): Motorcycle[] {
        return this.motorcycles
    }

    addTruck(brand: string, model: string, year: number, plate: string, loadCapacity: number): void {
        const newTruck = new Truck(brand, model, year, plate, loadCapacity)
        this.trucks.push(newTruck)
    }

    addCar(brand: string, model: string, year: number, plate: string, doors: number): void {
        const newCar = new Car(brand, model, year, plate, doors)
        this.cars.push(newCar)
    }

    addMotorcycle(brand: string, model: string, year: number, plate: string, engineCapacity: number): void {
        const newMotorcycle = new Motorcycle(brand, model, year, plate, engineCapacity)
        this.motorcycles.push(newMotorcycle)
    }

    deleteMotorcycle(plate: string): void {
        const index = this.motorcycles.findIndex(vehicle => vehicle.plate === plate)
        if (index > -1) {
            this.motorcycles.splice(index, 1)
        }
    }

    modifyMotorcycle(plate: string, property: string, value: any): void {
        const index = this.motorcycles.findIndex(vehicle => vehicle.plate === plate)
        if (index > -1) {
            switch (property) {
                case 'brand':
                    this.motorcycles[index].setBrand(value)
                    break
                case 'model':
                    this.motorcycles[index].setModel(value)
                    break
                case 'year':
                    this.motorcycles[index].setYear(value)
                    break
                case 'plate':
                    this.motorcycles[index].setPlate(value)
                    break
                case 'engineCapacity':
                    this.motorcycles[index].setEngineCapacity(value)
                    break
                default:
                    console.log("Propiedad no encontrada")
                    break
            }
        } else {
            console.log("Moto no encontrada")
        }
    }
}

export default VehicleRegistration