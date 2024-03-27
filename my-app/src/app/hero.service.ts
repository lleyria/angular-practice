import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0';

  //constructor(private http: HttpClient) { }

  getHeroes(): Observable<any[]> {
    // const hola =  this.http.get<any>(this.apiUrl);
    // console.log('hola', hola);
    const heroes = of(HEROES);
    return heroes;
  }
}
