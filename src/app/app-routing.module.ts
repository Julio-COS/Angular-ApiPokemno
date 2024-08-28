import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./main/main.module').then(m=>m.MainModule)
  },
  {
    path:'pokemons',
    loadChildren: () => import('./pokemons/pokemons.module').then(m=>m.PokemonsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
