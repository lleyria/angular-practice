import { Pipe, PipeTransform } from '@angular/core';
import { FIELDS, SPANISH_FIELDS } from './constants';

@Pipe({
  name: 'spanishTranslation',
  standalone: true
})
export class SpanishTranslationPipe implements PipeTransform {

  value:string = '';

  transform(value: string, ...args: unknown[]): string {
    const traslatedValue = this.traslate(value)
    return traslatedValue;
  }

  traslate(value:string):string{
    switch (value){
      case FIELDS['name']:return SPANISH_FIELDS['name'];
      case FIELDS['status']: return SPANISH_FIELDS['status']   
      case FIELDS['species']: return SPANISH_FIELDS['species'] 
      case FIELDS['gender']: return SPANISH_FIELDS['gender']
      case FIELDS['origin']: return SPANISH_FIELDS['origin']
      case FIELDS['dead']: return SPANISH_FIELDS['dead']
      case FIELDS['alive']: return SPANISH_FIELDS['alive']
      case FIELDS['unknown']: return SPANISH_FIELDS['unknown']
      case FIELDS['male']: return SPANISH_FIELDS['male']
      case FIELDS['female']: return SPANISH_FIELDS['female']
      default: return value;
    }
  }

}
