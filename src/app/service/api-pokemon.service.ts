import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiPokemonService {
  private urlApi ='https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) { }

  public getPokemons(index:number): Observable<any> {
    return this.http.get<any>(this.urlApi+index.toString());
  }
}
