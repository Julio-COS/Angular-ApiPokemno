import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { PokemonComponent } from './pokemon/pokemon.component';

const routes: Routes = [
  {path:'',component:ListPokemonComponent},
  {path:':id',component:PokemonComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonsRoutingModule { }
