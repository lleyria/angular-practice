import { Component } from '@angular/core';
import { Hero } from '../hero';
import { UpperCasePipe, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HEROES} from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [UpperCasePipe, FormsModule, NgFor],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})

export class HeroesComponent {
  heroes = HEROES;
}
