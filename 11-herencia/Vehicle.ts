class Vehicle {
    protected brand: string
    protected model: string
    protected year: number
    public plate: string

    constructor(brand: string, model: string, year: number, plate: string) {
        this.brand = brand
        this.model = model
        this.year = year
        this.plate = plate
    }
}

export default Vehicle