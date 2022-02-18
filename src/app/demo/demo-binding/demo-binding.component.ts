import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demo-binding',
  templateUrl: './demo-binding.component.html',
  styleUrls: ['./demo-binding.component.css']
})
export class DemoBindingComponent implements OnInit {

  nomUser:string = "Christophe";
  color: string = "blue";

  constructor( private _router: Router ) {
    //this._router = router;
   }

  ngOnInit(): void {
  }

  onClick(param: any) {
    console.log(param);
    param.target.style.backgroundColor = 'green';
  }

  swapColor(){
    this.color = this.color === 'blue' ? 'red' : 'blue';
  }

  alertThenRedirect() {
    alert('vous allez etre redirige');
    // localhost:4200/exo
    
    
    this._router.navigateByUrl('/exo');
    
    // localhost:4200/produit/add/2/details

    //this._router.navigate(['produit', 1+1, 'details']);

    

  }

}
