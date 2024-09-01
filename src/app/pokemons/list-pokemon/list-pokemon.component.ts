import { Component, OnInit } from '@angular/core';
import { ApiPokemonService } from '../../service/api-pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrl: './list-pokemon.component.css'
})
export class ListPokemonComponent implements OnInit {
  pokemons:any=[];
  cantidad:number=151;
  p: number = 1;

  constructor(private pokeService: ApiPokemonService, private router: Router) { }
   
  ngOnInit():void{
    this.getPokemon();
  }
  llenarDataSelect(){
    
  }


  getPokemon(): void {
    for (let i = 1; i < this.cantidad; i++) {
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

  redirigir(id:string){
    this.router.navigate(['pokemons/'+id]);
  }
}
  