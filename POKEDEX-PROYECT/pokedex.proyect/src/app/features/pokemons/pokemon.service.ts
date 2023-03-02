import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PokemonService {
  
  constructor(private http: HttpClient) {
  }

   getPokemonListData(limit:number){
    const pokemonRangeData = this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
    return pokemonRangeData
   }

   getPokemonByName(identifier:string | number){
    const pokemonData = this.http.get(`https://pokeapi.co/api/v2/pokemon/${identifier}`);
    return pokemonData
   }

   getPokemonListByGeneration(regionNumber:number){
    const listPokemonInGeneration = this.http.get(`https://pokeapi.co/api/v2/generation/${regionNumber}`);
    return listPokemonInGeneration
   }
}
