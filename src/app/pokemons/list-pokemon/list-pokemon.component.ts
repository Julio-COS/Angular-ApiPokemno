import { Component, OnInit } from '@angular/core';
import { ApiPokemonService } from '../../service/api-pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrl: './list-pokemon.component.css'
})
export class ListPokemonComponent implements OnInit {
  data:any={};
  pokemons=[];

  constructor(private pokeService: ApiPokemonService) { }
   
  ngOnInit():void{
    this.getPokemon();
  }

  getPokemon(): void {
    let pokemonData;
    for (let i = 1; i < 2; i++) {
        this.pokeService.getPokemons(i).subscribe(
          res=>{
            console.log(res);
          },
          err=>{
            console.log(err);
          }
        );
    }
  } 
}
  