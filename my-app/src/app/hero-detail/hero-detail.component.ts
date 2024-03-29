import { Component, Input } from '@angular/core';
import { SpanishTranslationPipe } from '../spanish-translation.pipe';

import {Hero} from '../hero';
import { FormsModule } from '@angular/forms';
import {NgIf, UpperCasePipe } from '@angular/common';



@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [FormsModule, NgIf, UpperCasePipe, SpanishTranslationPipe],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent {

  @Input() hero?: Hero;
  

}
