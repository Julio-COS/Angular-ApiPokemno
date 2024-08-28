import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonsRoutingModule } from './pokemons-routing.module';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';


@NgModule({
  declarations: [
    ListPokemonComponent
  ],
  imports: [
    CommonModule,
    PokemonsRoutingModule
  ]
})
export class PokemonsModule { }
