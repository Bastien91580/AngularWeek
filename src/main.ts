export class Pokemon{
	name: string;
	speed: number;
	constructor(name, speed) {
	    this.name = name;
	    this.speed = speed
	    console.log(this.name)
	}	

}

export function firstAttaque(pokemonA, pokemonB){
	if(pokemonA.speed > pokemonB.speed)
		return 1;
	else
		return 2;
}
