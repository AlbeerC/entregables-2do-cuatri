import Vehicle from './Vehicle'

class Truck extends Vehicle {
    private axles: number

    constructor(brand: string, model: string, year: number, plate: string, axles: number) {
        super(brand, model, year, plate)
        this.axles = axles
    }
}

export default Truck