import { NgModule } from '@angular/core';
import { PokemonListComponent } from './features/pokemons/pokemon-list/pokemon-list.component';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailComponent } from './features/pokemons/pokemon-detail/pokemon-detail.component';


const routes: Routes = [
  {path: '', component: PokemonListComponent},
  { path: 'pokedex/:id', component: PokemonDetailComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule { }