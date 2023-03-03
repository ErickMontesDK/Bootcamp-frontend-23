export type Pokemon = {
  id: string
  name: string
  sprite: string
  types: string[]
}

export type PokemonDetails = {
	name: string,
	id: string,
	description: string,
	defaultSprite: string,
	shinySprite?: string,
	femaleSprite?: string,
	hp: {base: number, min: number, max: number},
	attack: {base: number, min: number, max: number},
	defense: {base: number, min: number, max: number},
	specialAttack: {base: number, min: number, max: number},
	specialDefense: {base: number, min: number, max: number},
	speed: {base: number, min: number, max: number},
	types: string[],
	height: number,
	weight: number,
	abilities: string[],
 	weekness: string[],
	generation: number
}

export const pokemonTypeColorMap: Record<string, { main: string; background: string; }> = {
	normal: {main:'#A8A77A', background:'#B5B9C4'},
	fire: {main:'#EE8130', background:'#FFA756'},
	water: {main:'#6390F0', background:'#58ABF6'},
	electric: {main:'#F7D02C', background:'#F2CB55'},
	grass: {main:'#7AC74C', background:'#8BBE8A'},
	ice: {main:'#96D9D6', background:'#91D8DF'},
	fighting: {main:'#C22E28', background:'#EB4971'},
	poison: {main:'#A33EA1', background:'#9F6E97'},
	ground: {main:'#E2BF65', background:'#F78551'},
	flying: {main:'#A98FF3', background:'#83A2E3'},
	psychic: {main:'#F95587', background:'#FF6568'},
	bug: {main:'#A6B91A', background:'#8BD674'},
	rock: {main:'#B6A136', background:'#D4C294'},
	ghost: {main:'#735797', background:'#8571BE'},
	dragon: {main:'#6F35FC', background:'#7383B9'},
	dark: {main:'#705746', background:'#6F6E78'},
	steel: {main:'#B7B7CE', background:'#4C91B2'},
	fairy: {main:'#D685AD', background:'#EBA8C3'}
};