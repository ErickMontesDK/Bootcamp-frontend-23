import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SharedModule } from '../shared/shares.module';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';

@NgModule({
  declarations: [
    PokemonCardComponent,
    PokemonListComponent,
    PokemonDetailComponent
  ],
  imports: [
    CommonModule,
    InfiniteScrollModule,
    SharedModule
  ],
  exports:[
    PokemonCardComponent,
    PokemonListComponent,
    PokemonDetailComponent
  ]
})
export class PokemonsModule { }
