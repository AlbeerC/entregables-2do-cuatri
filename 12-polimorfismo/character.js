"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Character = /** @class */ (function () {
    function Character(name) {
        this.name = name;
        this.level = 1;
        this.healthPoints = 100;
        this.attacks = ["Basico"];
    }
    Character.prototype.levelUp = function () {
        this.level++;
        console.log("".concat(this.name, " subi\u00F3 al nivel ").concat(this.level));
    };
    Character.prototype.learnNewAttack = function (attack) {
        this.attacks.push(attack);
        console.log("".concat(this.name, " aprendi\u00F3 un nuevo ataque: ").concat(attack));
    };
    Character.prototype.getName = function () {
        return this.name;
    };
    Character.prototype.getLevel = function () {
        return this.level;
    };
    Character.prototype.getHealthPoints = function () {
        return this.healthPoints;
    };
    Character.prototype.getAttacks = function () {
        return this.attacks;
    };
    Character.prototype.setName = function (name) {
        this.name = name;
    };
    Character.prototype.setLevel = function (level) {
        this.level = level;
    };
    Character.prototype.setHealthPoints = function (healthPoints) {
        this.healthPoints = healthPoints;
    };
    return Character;
}());
exports.default = Character;
