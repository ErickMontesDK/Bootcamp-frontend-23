import { Component, Input, OnInit } from '@angular/core';
import { Pokemon, pokemonTypeColorMap } from '../types';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.sass']
})
export class PokemonCardComponent implements OnInit{
  @Input() pokemon!:Pokemon

  ngOnInit():void{
    
   }

   assignColorType(type:string){
    return pokemonTypeColorMap[type].main
   }
   assignBackground(type:string){
    return pokemonTypeColorMap[type].background
   }
}
 