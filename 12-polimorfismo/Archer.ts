import Character from "./Character"

class Archer extends Character {
    private arrows: number
    private agility: number

    constructor(name: string, agility: number) {
        super(name)
        this.agility = agility
        this.arrows = 20
        this.learnNewAttack("Flecha de fuego")
    }

    attack(): void {
        if (this.arrows >= 1) {
            console.log(`${this.name} ha disparado una flecha`)
            this.arrows = this.arrows - 1
        } else {
            console.log(`${this.name} no tiene flechas para disparar`)
        }
    }

    defend(): void {
        if (this.agility >= 70) {
            console.log(`${this.name} ha esquivado un ataque con su agilidad`)
        } else {
            console.log(`${this.name} no tiene suficiente agilidad para esquivar un ataque`)
        }
    }

    evolve(): boolean {
        if (this.level >= 3) {
            console.log(`${this.name} está listo para evolucionar a Sniper`)
            return true
        } else {
            console.log(`${this.name} no tiene suficiente nivel para evolucionar`)
            return false
        }
    }
}

export default Archer