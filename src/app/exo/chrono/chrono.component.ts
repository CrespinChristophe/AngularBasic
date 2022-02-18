import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-chrono',
  templateUrl: './chrono.component.html',
  styleUrls: ['./chrono.component.css']
})
export class ChronoComponent implements OnInit {


  heure: number | undefined;
  ladate = new Date();
  h = 0;
  m = 0;
  s = 0;

  constructor() { }

  ngOnInit(): void {
  }

  addSeconds(){
   
    this.s++;
    
  }
  start(){
    //alert('Le chrono start');
    setInterval(/*this.addSeconds*/() => this.s++, 1000);
    


  }

  stop(){
    alert('Le chrono stop')
  }

  reset(){
    alert('Le chrono est reset')
  }


}
/*//let date = new Date();
//alert(date.getHours)

function endInterval() { // Paramètre interval facultatif mais prend l'avantage sur la const
    clearInterval(interval);
    // interval.endInterval();
    console.log('interval stopped');
}



function func() {
var ladate=new Date()

var h=ladate.getHours();
if (h<10) {h = "0" + h}
var m=ladate.getMinutes();
if (m<10) {m = "0" + m}
var s=ladate.getSeconds();
if (s<10) {s = "0" + s}

document.write(h+":"+m+":"+s);
document.write("<BR>");
}


//for(i=1;i>0;i++)s

setInterval(func, 1000)

*/