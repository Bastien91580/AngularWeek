const Pkmn = require('./../src/main.js');

test('Carapuce vs Salameche -> Salameche (1)', () => {
	let Carapuce = new Pkmn.Pokemon("Carapuce", 43, 44, 48, 65);
	let Salameche = new Pkmn.Pokemon("Salameche", 65, 39, 52, 43);
 	expect(Pkmn.whoAttaquefirst(Salameche, Carapuce)).toBe(1);
});

test('Carapuce vs Salameche -> Salameche (2)', () => {
	let Carapuce = new Pkmn.Pokemon("Carapuce", 43, 44, 48, 65);
	let Salameche = new Pkmn.Pokemon("Salameche", 65, 39, 52, 43);
 	expect(Pkmn.whoAttaquefirst(Carapuce, Salameche)).toBe(2);
});

test('Carapuce attaque Salameche', () => {
	let Carapuce = new Pkmn.Pokemon("Carapuce", 43, 44, 48, 65);
	let Salameche = new Pkmn.Pokemon("Salameche", 65, 39, 52, 43);
	// 1. Math.floor(2 * 10 / 5 + 2) -> 2/7 -> 2
	// 2. Math.floor((1.) * 48 * 10 / 43) -> 22
	// 3. Math.floor((2.) / 50) + 2; -> 2
 	expect(Carapuce.launchAttack(Salameche, 10)).toBe(2);
});

test('Salameche attaque Carapuce', () => {
	let Carapuce = new Pkmn.Pokemon("Carapuce", 43, 44, 48, 65);
	let Salameche = new Pkmn.Pokemon("Salameche", 65, 39, 52, 43);
 	expect(Salameche.launchAttack(Carapuce, 100)).toBe(5);
 	//Math.floor(Math.floor(Math.floor(2 * levelAttack / 5 + 2) * _attack * powerBase / _defence) / 50) + 2;
 	// 1. Math.floor(2 * 100 / 5 + 2) -> 2/7 -> 2
	// 2. Math.floor((1.) * 48 * 10 / 43) -> 160
	// 3. Math.floor((2.) / 50) + 2; -> 5
});

test('Combat entre Carapuce et Salameche', () => {
	let Carapuce = new Pkmn.Pokemon("Carapuce", 43, 44, 48, 65);
	let Salameche = new Pkmn.Pokemon("Salameche", 65, 39, 52, 43);
 	expect(Pkmn.fight(Carapuce, Salameche, 40, 40)).toBe(2);

});



// constructor(_name, _speed, _health, _attack, _defence)
//let Carapuce = new Pkmn.Pokemon("Carapuce", 43, 44, 48, 65);
//let Salameche = new Pkmn.Pokemon("Salameche", 65, 39, 52, 43);