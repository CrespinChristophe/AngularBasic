import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appChildText]'
})
export class ChildTextDirective implements OnInit{

  @Input('appChildText')
  message = 'Salut'; //ça ne sert à rien de mettre une valeur par défaut

  constructor(private element: ElementRef) { 
    
  }

  ngOnInit(): void {
    this.createNewChild();
  
    /*const child = document.createElement('p');

    child.innerText = this.text ? this.text : 'bonjour';
    child.onclick = () => console.log("bonjour");
        
    this.message.nativeElement.appendChild(child);*/
   
   /*const msg = document.createElement("p");
   msg.innerText = this.message;
   this.element.nativeElement.appendChild(msg);
   msg.onclick = () => { let msg2 = document.createElement("p");*/
   /*document.createElement("br");*/
   /*msg2.innerText = this.message;
   this.element.nativeElement.appendChild(msg2);*/
   /*console.log('on passe');*/
  
  }

  createNewChild() {
    const msg = document.createElement("p");
    msg.innerText = this.message;
    msg.onclick = () => this.createNewChild();
    this.element.nativeElement.appendChild(msg);
     }

  /*createNewChild() {
   const msg = document.createElement("p");
   msg.innerText = this.message;
   msg.onclick = () => this.createNewChild();
   this.element.nativeElement.appendChild(msg);
  }*/

}

