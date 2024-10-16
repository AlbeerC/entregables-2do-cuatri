import Character from "./Character"

class Wizard extends Character {
    private intelligence: number
    private power: number

    constructor(name: string, intelligence: number) {
        super(name)
        this.intelligence = intelligence
        this.power = 100
    }
    
    attack(): void {
        if (this.power >= 20) {
            console.log(`${this.name} ha lanzado un hechizo`)
            this.power = this.power - 20
        } else {
            console.log(`${this.name} no tiene suficiente poder para lanzar un hechizo`)
        }
    }

    defend(): void {
        console.log(`${this.name} ha lanzado su defensa`)
    }

    rechargePower(): void {
        if (this.intelligence >= 8) {
            console.log(`${this.name} ha recargado su poder`)
            this.power = this.power + 20
        } else {
            console.log(`${this.name} no tiene suficiente inteligencia para recargar su poder`)
        }
    }
}

export default Wizard