import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { NgForOf} from '@angular/common'
import { Pokemon } from '../types';
import { filter } from 'rxjs';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass']
})
export class PokemonListComponent implements OnInit{

  listPokemon:Pokemon[]=[]
  displayPokemon:Pokemon[]=[]
  pokemonNumber:number = 1008
  addingValues = 30

  constructor(private pokemonService:PokemonService) {}
  ngOnInit(): void {
    this.getListOfPokemon()
  }

  getListOfPokemon(){
    this.pokemonService.getPokemonListData(this.pokemonNumber).subscribe((pokemonNamesList:any)=>{
      pokemonNamesList.results.forEach((pokemon:any)=>{
        this.getPokemonInfo(pokemon.name)
      })
    })
  }

  searchPokemon(searchValue: string){
    searchValue = searchValue.toLowerCase()

    if(searchValue.length > 0){
      const filteredPokemons = this.listPokemon.filter((pokemon) =>
      pokemon.name.includes(searchValue)
      );
      this.displayPokemon = filteredPokemons
    } else {
      this.displayPokemon = this.listPokemon
    }
  }

  onScroll(): void {
    this.addingValues += 30
    this.displayPokemon = this.listPokemon.slice(0,this.addingValues)
  }

  getPokemonInfo(pokemonName:string){
    this.pokemonService.getPokemonByName(pokemonName).subscribe((pokemon:any)=>{
      const pokemonInfo:Pokemon={
        id:String(pokemon.id).padStart(3, '0'),
        name:pokemon.name,
        sprite:pokemon.sprites.other['official-artwork'].front_default,
        types: pokemon.types.map((typeSection: { type: { name: string; }; })=>{
          return typeSection.type.name
        })
      }
      this.listPokemon.push(pokemonInfo)

      this.listPokemon.sort((a, b) => parseInt(a.id,10) - parseInt(b.id,10));

      this.displayPokemon = this.listPokemon.slice(0, 33)
    })
  }

  sortById(){
    this.listPokemon = this.listPokemon.sort((a, b) => parseInt(a.id,10) - parseInt(b.id,10));
    this.displayPokemon = this.listPokemon
  }

}
