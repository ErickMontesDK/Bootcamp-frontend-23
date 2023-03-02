import { NgModule } from '@angular/core';
import { PokemonListComponent } from './features/pokemons/pokemon-list/pokemon-list.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: 'pokemon', component: PokemonListComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule { }