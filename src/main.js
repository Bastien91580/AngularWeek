"use strict";
exports.__esModule = true;
var Pokemon = /** @class */ (function () {
    function Pokemon(name, speed) {
        this.name = name;
        this.speed = speed;
        console.log(this.name);
    }
    return Pokemon;
}());
exports.Pokemon = Pokemon;
function firstAttaque(pokemonA, pokemonB) {
    if (pokemonA.speed > pokemonB.speed)
        return 1;
    else
        return 2;
}
exports.firstAttaque = firstAttaque;
