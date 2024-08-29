import { Component, OnInit } from '@angular/core';
import { ApiPokemonService } from '../../service/api-pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrl: './list-pokemon.component.css'
})
export class ListPokemonComponent implements OnInit {
  pokemons:any=[];

  constructor(private pokeService: ApiPokemonService) { }
   
  ngOnInit():void{
    this.getPokemon();
  }

  getPokemon(): void {
    for (let i = 1; i < 151; i++) {
        this.pokeService.getPokemons(i).subscribe(
          res=>{
            this.pokemons.push(res);
          },
          err=>{
            console.log(err);
          }
        );
    }
  } 
}
  