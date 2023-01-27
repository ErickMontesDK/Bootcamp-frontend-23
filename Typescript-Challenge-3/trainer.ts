import { Pokemon, PokemonType } from "./pokemon";

function getpokemonsId(target: Function){
    const maxNumberOfPokemons = 6;
    const trainerNumberOfPokemons = Math.ceil(Math.random() * maxNumberOfPokemons)
    const teamPokemonIds = []
  
    for(let i=0; i<trainerNumberOfPokemons; i++){
      const totalOfPokemon = 1008
      const id = Math.ceil(Math.random() * totalOfPokemon)
  
      teamPokemonIds.push(id)
    }
  
    target.prototype.pokemonIdsAssigned = teamPokemonIds
}
  
@getpokemonsId
export class TrainerPokemon {
    name: string;
    pokemonIdsAssigned: number[];
    pokemonTeam: PokemonType[];

    constructor(name: string){
        this.name = name
    }

    async getTeamPokemonData(){
        const pokemonTeamData = await Promise.all(
            this.pokemonIdsAssigned.map( async (id: number) => {
                const pokemonRawData = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(response => response.json())
                    const name = pokemonRawData.name;
                    const types = pokemonRawData.types.map(typeOption=>typeOption.type.name);
                    const ppAvailable =  pokemonRawData.stats[1].base_stat;

                return new Pokemon (name, ppAvailable,id, types)
            })
        )
        this.pokemonTeam =  pokemonTeamData
        console.log(this.pokemonTeam)
    }
}

