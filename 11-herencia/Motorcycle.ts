import Vehicle from './Vehicle'

class Motorcycle extends Vehicle {
    private engineCapacity: number

    constructor(brand: string, model: string, year: number, plate: string, engineCapacity: number) {
        super(brand, model, year, plate)
        this.engineCapacity = engineCapacity
    }

    setBrand(brand: string): void {
        this.brand = brand
    }

    setModel(model: string): void {
        this.model = model
    }

    setYear(year: number): void {
        this.year = year
    }

    setPlate(plate: string): void {
        this.plate = plate
    }

    setEngineCapacity(engineCapacity: number): void {
        this.engineCapacity = engineCapacity
    }
}

export default Motorcycle