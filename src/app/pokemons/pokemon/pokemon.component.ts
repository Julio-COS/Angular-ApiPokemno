import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiPokemonService } from '../../service/api-pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {
  pokemon:any={};

  constructor(private route: ActivatedRoute, private pokeService: ApiPokemonService){
    this.route.params.subscribe(params=>this.pokeService.getPokemons(params['id']).subscribe(data=>this.pokemon=data))
  }

  ngOnInit(): void {

  }

  setPokemon(){
    
  }
}
