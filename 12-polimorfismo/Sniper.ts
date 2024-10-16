import Archer from "./Archer"

class Sniper extends Archer {
    private presicion: number
    private range: number
    private bullets: number

    constructor(name: string) {
        super(name, 40)
        this.presicion = 100
        this.range = 100
        this.bullets = 10
    }

    longRangeShot(): void {
        if (this.range >= 90 && this.presicion >= 90 && this.bullets >= 1) {
            console.log(`${this.name} ha disparado un disparo de larga distancia y ha acertado`)
            this.bullets = this.bullets - 1
        } else if (this.range < 90 && this.presicion < 90 && this.bullets >= 1) {
            console.log(`${this.name} ha disparado un disparo de larga distancia pero no ha acertado`)
            this.bullets = this.bullets - 1
        } else {
            console.log(`${this.name} no tiene balas para disparar`)
        }
    } 
}

export default Sniper