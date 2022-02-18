import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-demo-commu-children',
  templateUrl: './demo-commu-children.component.html',
  styleUrls: ['./demo-commu-children.component.css']
})
export class DemoCommuChildrenComponent implements OnInit {

  // Avec Input, je crée un attribut
  @Input('prend-info-stp')
  getInfo: string= "";

  color: string = 'black';

  // Avec Output, je crée un évènement
  @Output('change-color')
  emitter = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onChange() {
    this.emitter.emit(this.color);
  }

}