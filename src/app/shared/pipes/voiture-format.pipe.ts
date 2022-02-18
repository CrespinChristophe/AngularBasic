import { Pipe, PipeTransform } from '@angular/core';
import { Voiture } from '../../models/voiture.models';

@Pipe({
  name: 'voitureFormat'
})
export class VoitureFormatPipe implements PipeTransform {

  transform(voiture: Voiture, include_details: boolean = true): string{
    return "marque : "+ voiture.marque +
    " | modele : "+ voiture.modele +
    (include_details ?
    " | nombre de portes : "+ voiture.nbrPorte +
    "| puissance : "+ voiture.puissance+" CH" : '');
  }

}
