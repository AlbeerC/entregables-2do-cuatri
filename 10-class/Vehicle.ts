// Implementar la clase RegistroAutomotor (Autos, motos camiones) y deben tener los siguientes métodos:
// Agregar vehículo get y set, modificar un vehículo, dar de baja
// Incorporar los conceptos composición y encapsulamiento

class Vehicle {

    private type: string
    private brand: string
    private model: string
    private year: number
    
    constructor(type: string, brand: string, model: string, year: number) {
        this.type = type
        this.brand = brand
        this.model = model
        this.year = year
    }

    getType(): string {
        return this.type
    }

    getBrand(): string {
        return this.brand
    }

    getModel(): string {
        return this.model
    }

    getYear(): number {
        return this.year
    }

    setType(type: string): void {
        this.type = type
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
}

export default Vehicle