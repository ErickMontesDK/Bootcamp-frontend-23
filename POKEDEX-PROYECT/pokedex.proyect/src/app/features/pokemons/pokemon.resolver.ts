import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { PokemonService } from './pokemon.service';
import { Pokemon } from './types';

@Injectable({ providedIn: 'root' })
export class PokemonResolver implements Resolve<Pokemon> {

  constructor(private pokemonService: PokemonService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Pokemon> {
    const id = route.paramMap.get('id');
    return this.pokemonService.getPokemonByName(id);
  }
}