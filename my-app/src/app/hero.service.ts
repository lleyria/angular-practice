import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private apiUrl = 'https://rickandmortyapi.com/api/character/1,2,3,4,5,10,11,12,13,22,25,125,49';

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<any> {
    const dataObservable = this.http.get<Hero[]>(this.apiUrl);
    return dataObservable;
  }
}
