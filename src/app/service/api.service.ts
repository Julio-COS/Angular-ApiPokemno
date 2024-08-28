import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlApi ='https://pokeapi.co/api/v2/pokemon/';
  private offset:number=0;
  private limit:number=0;

  offsetGet():number{
    return this.offset;
  }
  limitGet():number{
    return this.limit;
  }
  
  constructor(private http:HttpClient) { }

  private getDataByGen(offset:number, limit:number): Observable<any>{
    this.offset=offset;
    this.limit=limit;
    return this.http.get<any>(this.urlApi+"?offset="+offset.toString()+"&limit="+limit.toString());
  }

  public getDataFirstGen(): Observable<any> {
    return this.getDataByGen(0, 151);
  }

  public getDataSecondGen(): Observable<any> {
    return this.getDataByGen(151, 100);
  }
}
