abstract class Character {

    protected name: string
    protected level: number
    protected healthPoints: number
    protected attacks: string[]

    constructor(name: string) {
        this.name = name
        this.level = 1
        this.healthPoints = 100
        this.attacks = ["Basico"]
    }

    abstract attack(): void
    abstract defend(): void

    levelUp(): void{
        this.level++
        console.log(`${this.name} subió al nivel ${this.level}`)
    }

    learnNewAttack(attack: string): void {
        this.attacks.push(attack)
        console.log(`${this.name} aprendió un nuevo ataque: ${attack}`)
    }
    
    getName(): string {
        return this.name
    }
    
    getLevel(): number {
        return this.level
    }

    getHealthPoints(): number {
        return this.healthPoints
    }

    getAttacks(): string[] {
        return this.attacks
    }

    setName(name: string): void {
        this.name = name
    }

    setLevel(level: number): void {
        this.level = level
    }

    setHealthPoints(healthPoints: number): void {
        this.healthPoints = healthPoints
    }
}

export default Character