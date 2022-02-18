import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-text',
  templateUrl: './child-text.component.html',
  styleUrls: ['./child-text.component.css']
})
export class ChildTextComponent implements OnInit {
compteur: number = 0;
  constructor(private cdref: ChangeDetectorRef) { } // pour ne pas avoir l'erreur "spéciale" dans la console

  ngOnInit(): void {
  }

count(){
this.compteur++;
this.cdref.detectChanges();  // pour ne pas avoir l'erreur "spéciale" dans la console
}
}
