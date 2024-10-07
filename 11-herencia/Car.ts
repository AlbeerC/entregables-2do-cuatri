import Vehicle from './Vehicle'

class Car extends Vehicle {
    private doors: number

    constructor(brand: string, model: string, year: number, plate: string, doors: number) {
        super(brand, model, year, plate)
        this.doors = doors
    }
}

export default Car