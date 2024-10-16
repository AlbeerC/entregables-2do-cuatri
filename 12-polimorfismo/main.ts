import Fighter from "./Fighter"
import Wizard from "./Wizard"
import Archer from "./Archer"
import Sniper from "./Sniper"

const wizard1 = new Wizard("Mago eléctrico", 9)
const figther1 = new Fighter("Scorpion", 90)
const archer1 = new Archer("Green Arrow", 70)

const magicBox = true

// Mago
console.log("Wizard")
wizard1.attack()
wizard1.defend()
wizard1.rechargePower()
wizard1.levelUp()
// Caja mágica
if (magicBox) {
    wizard1.learnNewAttack("Hechizo a distancia")
}
console.log(wizard1.getAttacks())
console.log("-----------------------------")

// Luchador
console.log("Fighter")
figther1.attack()
figther1.defend()
console.log("-----------------------------")

// Arquero
console.log("Archer")
archer1.attack()
archer1.defend()
archer1.levelUp()
archer1.levelUp()

// Evolución de arquero a sniper
if (archer1.evolve()) {
    const sniper1 = new Sniper(archer1.getName())
    sniper1.setLevel(archer1.getLevel())
    sniper1.setHealthPoints(archer1.getHealthPoints())
    console.log(`${archer1.getName()} ha evolucionado a Sniper!`)
    sniper1.longRangeShot()
} else {
    console.log(`${archer1.getName()} no puede evolucionar a Sniper`)
}