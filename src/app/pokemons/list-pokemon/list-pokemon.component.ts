import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrl: './list-pokemon.component.css'
})
export class ListPokemonComponent implements OnInit {
  data:any={};

  constructor(private apiService: ApiService) { }
   
  ngOnInit():void{
    this.llenarData();
  }

  getInitialNumber():number{
    return this.apiService.offsetGet();
  }

  llenarData(){
    this.apiService.getDataFirstGen().subscribe(data=>{
      this.data=data;
    })
  }

  llenarDataSelect(select:number){
    switch (select){
      case 1: this.apiService.getDataFirstGen().subscribe(data=>{this.data=data;}); break;
      case 2: this.apiService.getDataSecondGen().subscribe(data=>{this.data=data;}); break;
    }
  }

  imgPokemon(num:number):string{
    return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"+num+".png"
  }
}
