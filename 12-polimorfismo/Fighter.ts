import Character from "./Character"

class Fighter extends Character {
    strength: number
    armour: number

    constructor(name: string, strength: number) {
        super(name)
        this.strength = strength
        this.armour = 100
    }

    attack(): void {
        if (this.strength >= 10) {
            console.log(`${this.name} ha lanzado un golpe`)
            this.strength = this.strength - 10
        } else {
            console.log(`${this.name} no tiene suficiente fuerza para golpear`)
        }
    }

    defend(): void {
        if (this.armour >= 20) {
            console.log(`${this.name} ha bloqueado un ataque con su armadura`)
            this.armour = this.armour - 20
        } else {
            console.log(`${this.name} no tiene suficiente armadura para bloquear un ataque`)
        }
    }
}

export default Fighter