import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon, pokemonTypeColorMap } from '../types';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.sass']
})
export class PokemonCardComponent{
  @Input() pokemon!:Pokemon

  constructor(private router: Router) {}
   assignColorType(type:string){
    return pokemonTypeColorMap[type].main
   }

   assignBackground(type:string){
    return pokemonTypeColorMap[type].background
   }
   
   openDetail(){
    this.router.navigate([`/pokedex/${this.pokemon.id}`])
   }
}
 