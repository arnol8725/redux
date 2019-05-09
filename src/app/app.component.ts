import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  contador: number;
  constructor(){
    this.contador = 10;
  }

  decrementar(){
    console.log('decrementar');
    this.contador = this.contador > 10? this.contador - 1 : 10;
  }
  incrementar(){
    console.log('incrementar');
    this.contador = this.contador >= 10? this.contador + 1 : 10;
  }
}
