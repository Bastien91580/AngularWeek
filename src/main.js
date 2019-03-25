"use strict";
exports.__esModule = true;
var Pokemon = /** @class */ (function () {
    function Pokemon(_name, _speed, _health, _attack, _defence) {
        this.name = _name;
        this.speed = _speed;
        this.health = _health;
        this.attack = _attack;
        this.defence = _defence;
    }
    Pokemon.prototype.launchAttack = function (pokemonExt, random) {
        var damage = calculateDamages(this.attack, pokemonExt.defence, random);
        if (damage > 0) {
            pokemonExt.health -= damage;
            console.log(this.name + " inflige " + damage + " pts. de dégats à " + pokemonExt.name + ".");
            return damage;
        }
        else {
            console.log("Ce n'est pas efficace, " + pokemonExt.name + " résiste!");
            return 0;
        }
    };
    return Pokemon;
}());
exports.Pokemon = Pokemon;
function whoAttaquefirst(pokemonA, pokemonB) {
    if (pokemonA.speed > pokemonB.speed) {
        console.log(pokemonA.name + " attaque en premier.");
        return 1;
    }
    else {
        console.log(pokemonB.name + " attaque en premier.");
        return 2;
    }
}
exports.whoAttaquefirst = whoAttaquefirst;
function calculateDamages(_attack, _defence, random) {
    var powerBase = random;
    var levelAttack = 1;
    var damage = Math.floor(Math.floor(Math.floor(2 * levelAttack / 5 + 2) * _attack * powerBase / _defence) / 50) + 2;
    return damage;
}
exports.calculateDamages = calculateDamages;
function fight(pokemonA, pokemonB, randomA, randomB) {
    console.log("Le combat entre " + pokemonA.name + " et " + pokemonB.name + " commence !");
    var first = whoAttaquefirst(pokemonA, pokemonB);
    var A;
    var B;
    if (first === 1) {
        A = pokemonA;
        B = pokemonB;
    }
    else {
        A = pokemonB;
        B = pokemonA;
    }
    while (A.health !== 0 && B.health !== 0) {
        A.launchAttack(B, randomA);
        if (alive(B) === "ko") {
            console.log(B.name + " est KO, " + A.name + " est le vainqueur");
            return 1;
        }
        B.launchAttack(A, randomB);
        if (alive(A) === "ko") {
            console.log(A.name + " est KO, " + B.name + " est le vainqueur");
            return 2;
        }
    }
}
exports.fight = fight;
function alive(pokemon) {
    if (pokemon.health <= 0)
        return "ko";
    else
        return "ok";
}
exports.alive = alive;
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
exports.getRandomInt = getRandomInt;
