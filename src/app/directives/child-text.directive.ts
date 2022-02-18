import { Directive, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[appChildText]'
})
export class ChildTextDirective implements OnInit{
  compteurEvents: number = 0;
  @Input('appChildText')
  message = 'Salut'; //ça ne sert à rien de mettre une valeur par défaut

  @Output('appChildNbrEvents')
  emitter = new EventEmitter<number>();

  constructor(private element: ElementRef) { 
    
  }

  ngOnInit(): void {
    this.createNewChild();
      }

  createNewChild() {
    const msg = document.createElement("p");
    msg.innerText = this.message;
    msg.onclick = () => this.createNewChild();
    this.element.nativeElement.appendChild(msg);
    //++this.compteurEvents;
    this.emitter.emit();
    //console.log(this.compteurEvents);
     }
  }

