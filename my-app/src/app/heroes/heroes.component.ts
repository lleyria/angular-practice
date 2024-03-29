import { Component } from '@angular/core';
import { Hero } from '../hero';
import { RawData } from '../raw-data';
import { UpperCasePipe, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroService } from '../hero.service';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';


@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [HeroDetailComponent, UpperCasePipe, FormsModule, NgFor, NgIf],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})

export class HeroesComponent {
  constructor(private heroService: HeroService) {}
  heroes: Hero[] = [];
  humans: number = 0;

  ngOnInit(): void {
    this.getHeroes();
    this.getHumans();
  }

  selectedHero?: Hero;

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(data=> {
      this.heroes = data.map((x:RawData) => {
        delete x.episode;
        delete x.url;
        delete x.created;
        return x;
      });
  });
}

  getHumans():void {
    this.humans = this.heroes.reduce((acc, cv) =>  (cv.species === "Human")? acc +1: acc+0,0);
  }
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.getHumans();
  }

  onSelect(hero: Hero): void {
  this.selectedHero = hero;
}
}
