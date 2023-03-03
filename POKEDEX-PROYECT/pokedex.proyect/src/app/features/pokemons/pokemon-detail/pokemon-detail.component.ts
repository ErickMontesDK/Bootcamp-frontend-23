import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { Pokemon, PokemonDetails, pokemonTypeColorMap } from '../types';

@Component({
	selector: 'app-pokemon-detail',
	templateUrl: './pokemon-detail.component.html',
	styleUrls: ['./pokemon-detail.component.sass']
})
export class PokemonDetailComponent implements OnInit {
	pokemon!: PokemonDetails;
	id!: string | null;

	constructor(
    private route: ActivatedRoute,
    private pokemonServices: PokemonService){}
  
	ngOnInit(): void {
		this.id = this.route.snapshot.paramMap.get('id');
		this.getPokemonDate(parseInt(this.id!,10).toString());
	}

	getPokemonDate(id: string){
		this.pokemonServices.getPokemonByName(id).subscribe((pokemonDate:any)=>{
			const pokemonSpeciesUrl = pokemonDate.species.url
			console.log(pokemonSpeciesUrl)
			this.pokemonServices.getPokemonSpeciesInfo(pokemonSpeciesUrl).subscribe((pokemonSpecies:any)=>{
				this.pokemon = {
					name: pokemonDate.name,
					id: pokemonDate.id,
					description: pokemonSpecies.flavor_text_entries[0].flavor_text,
					nickname: pokemonSpecies.genera.find((genus:any)=>{
						return genus.language.name === 'en'
					}).genus,
					defaultSprite: pokemonDate.sprites.other.dream_world.front_default,
					shinySprite: pokemonDate.sprites.other['official-artwork'].front_shiny || '',
					femaleSprite: pokemonDate.sprites.other.dream_world.front_female || '',
					hp: {base: pokemonDate.stats[0].base_stat, min: 0, max: 0},
					attack: {base: pokemonDate.stats[0].base_stat, min: 0, max: 0},
					defense: {base: pokemonDate.stats[0].base_stat, min: 0, max: 0},
					specialAttack: {base: pokemonDate.stats[0].base_stat, min: 0, max: 0},
					specialDefense: {base: pokemonDate.stats[0].base_stat, min: 0, max: 0},
					speed: {base: pokemonDate.stats[0].base_stat, min: 0, max: 0},
					types: pokemonDate.types.map((stat: { type: { name: any; }; })=>{
						return stat.type.name;
					}),
					height: pokemonDate.height,
					weight: pokemonDate.weight,
					abilities: pokemonDate.abilities.map((abilities: any)=>{
						return abilities.ability.name;
					}),
					generation: pokemonSpecies.generation.url.split("/")[6]
				};
				console.log(this.pokemon);
				}
			)
		});
	}

	assignColorType(type:string){
    return pokemonTypeColorMap[type].main
   }
}
