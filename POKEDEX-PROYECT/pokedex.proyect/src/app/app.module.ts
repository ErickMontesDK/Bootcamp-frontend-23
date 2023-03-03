import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PokemonsModule } from './features/pokemons/pokemons.module';
import { AppComponent } from './app.component';
import { PokemonService } from './features/pokemons/pokemon.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SharedModule } from './features/shared/shares.module';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    PokemonsModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [PokemonsModule,PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
