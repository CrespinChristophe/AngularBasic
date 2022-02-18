import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-directive',
  templateUrl: './demo-directive.component.html',
  styleUrls: ['./demo-directive.component.css']
})
export class DemoDirectiveComponent implements OnInit {

  // bgStyle variables
  color: string = 'white';
  bgColor: string = 'darkred';

  // ngClass variables
  numberInput: number = 0;

  // ngIf variables
  displayed: boolean = false;

  Fruits = [
    "Apple",
    "Banana",
    "Cherry"
  ];

  constructor() { }

  ngOnInit(): void {
  }

  // ngIf method
  toggleDisplay() {
    this.displayed = !this.displayed;
  }

}