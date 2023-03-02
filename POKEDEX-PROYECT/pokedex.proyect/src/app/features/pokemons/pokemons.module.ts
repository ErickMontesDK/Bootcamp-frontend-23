import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SharedModule } from '../shared/shares.module';

@NgModule({
  declarations: [
    PokemonCardComponent,
    PokemonListComponent
  ],
  imports: [
    CommonModule,
    InfiniteScrollModule,
    SharedModule
  ],
  exports:[
    PokemonCardComponent,
    PokemonListComponent
  ]
})
export class PokemonsModule { }
