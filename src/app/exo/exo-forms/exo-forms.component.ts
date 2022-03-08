import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Produit } from 'src/app/models/produit.models';
import { priceDoubleStock, PRODUIT_INSERT_FORM } from '../forms/produit.form';

@Component({
  selector: 'app-exo-forms',
  templateUrl: './exo-forms.component.html',
  styleUrls: ['./exo-forms.component.css']
})
export class ExoFormsComponent implements OnInit {

  @Output('produit-submitted')
  produitSubmitted = new EventEmitter<Produit>()


    form: FormGroup;
  /*form = new FormGroup({
    //'produit': new FormControl(),
    'marque :': new FormControl(),
    'prix': new FormControl(),
    'modele': new FormControl(),
    'stock': new FormControl()
    
  });*/

  constructor(builder : FormBuilder) {
    this.form = builder.group(PRODUIT_INSERT_FORM, {
      validators: priceDoubleStock
    });
   }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.form)
    if( this.form.valid ){
      this.produitSubmitted.emit({
        'marque': this.form.value.marque,
        'modele': this.form.value.modele,
        'prix': this.form.value.prix,
        'stock': isNaN(this.form.value.stock) ? 1 : this.form.value.stock, 
        'en_vente': this.form.value.en_vente
      })
    }
    
  }
  }






/*
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-demo-forms',
  templateUrl: './demo-forms.component.html',
  styleUrls: ['./demo-forms.component.css']
})
export class DemoFormsComponent implements OnInit {

  form = new FormGroup({
    'nom': new FormControl(),
    'age': new FormControl()
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.form);
  }

}*/
