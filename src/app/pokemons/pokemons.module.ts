import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonsRoutingModule } from './pokemons-routing.module';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PokemonComponent } from './pokemon/pokemon.component';


@NgModule({
  declarations: [
    ListPokemonComponent,
    PokemonComponent
  ],
  imports: [
    CommonModule,
    PokemonsRoutingModule,
    NgxPaginationModule
  ]
})
export class PokemonsModule { }
