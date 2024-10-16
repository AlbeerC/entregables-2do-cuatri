"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Fighter_1 = require("./Fighter");
var Wizard_1 = require("./Wizard");
var Archer_1 = require("./Archer");
var Sniper_1 = require("./Sniper");
var wizard1 = new Wizard_1.default("Mago eléctrico", 9);
var figther1 = new Fighter_1.default("Scorpion", 90);
var archer1 = new Archer_1.default("Green Arrow", 70);
var magicBox = true;
// Mago
console.log("Wizard");
wizard1.attack();
wizard1.defend();
wizard1.rechargePower();
wizard1.levelUp();
// Caja mágica
if (magicBox) {
    wizard1.learnNewAttack("Hechizo a distancia");
}
console.log(wizard1.getAttacks());
console.log("-----------------------------");
// Luchador
console.log("Fighter");
figther1.attack();
figther1.defend();
console.log("-----------------------------");
// Arquero
console.log("Archer");
archer1.attack();
archer1.defend();
archer1.levelUp();
archer1.levelUp();
// Evolución de arquero a sniper
if (archer1.evolve()) {
    var sniper1 = new Sniper_1.default(archer1.getName());
    sniper1.setLevel(archer1.getLevel());
    sniper1.setHealthPoints(archer1.getHealthPoints());
    console.log("".concat(archer1.getName(), " ha evolucionado a Sniper!"));
    sniper1.longRangeShot();
}
else {
    console.log("".concat(archer1.getName(), " no puede evolucionar a Sniper"));
}
