import { Component, OnInit } from '@angular/core';
import { Voiture } from 'src/app/models/voiture.models';

@Component({
  selector: 'app-demo-pipe',
  templateUrl: './demo-pipe.component.html',
  styleUrls: ['./demo-pipe.component.css']
})
export class DemoPipeComponent implements OnInit {

  date = new Date();
  voiture: Voiture = {
    marque: "bmw",
    modele: "vroum",
    nbrPorte: 5,
    puissance: 220
  }

  constructor() { }

  ngOnInit(): void {
  }

}
