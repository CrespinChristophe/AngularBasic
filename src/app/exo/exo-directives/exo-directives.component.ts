import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/models/Produit.models';
//import { Produit } from 'src/app/models/produit.models';

@Component({
  selector: 'app-exo-directives',
  templateUrl: './exo-directives.component.html',
  styleUrls: ['./exo-directives.component.css']
})
export class ExoDirectivesComponent implements OnInit {


  color: string = 'red';

  /*produit: Produit = {
    
    marque: "pomme",
    modele: "granny",
    stock: 17,
    prix: 3,
    en_vente: true

  }*/

  tabProduit: Produit [] = [
    {marque: 'granny', modele: "pomme", stock: 17,prix: 3,en_vente: true},
    {marque: 'conference', modele: "poire", stock: 12,prix: 5,en_vente: true},
    {marque: 'chiquita', modele: "banane", stock: 0,prix: 2,en_vente: false},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
