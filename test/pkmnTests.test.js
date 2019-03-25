const Pkmn = require('./../src/main.js');

test('Carapuce vs Salameche -> Salameche (1)', () => {
	let Carapuce = new Pkmn.Pokemon("Carapuce", 43);
	let Salameche = new Pkmn.Pokemon("Salameche", 65);
 	expect(Pkmn.firstAttaque(Salameche,Carapuce)).toBe(1);
});