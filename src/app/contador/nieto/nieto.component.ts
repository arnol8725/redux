import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Reset } from '../counter.actions';
import { AppState } from '../app.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: []
})
export class NietoComponent implements OnInit {
 /*
  @Input() contador : number;
  @Output() cambioContador = new EventEmitter<number>() ;

  constructor() { 
    
  }
*/
contador : number;   
  constructor(private store: Store<AppState>) { 
    console.log('El valor de contador : ' + this.contador);
  }
  

  ngOnInit() {
    this.store.select('contador').subscribe( contador => {
      this.contador = contador;
      console.log(this.contador);
});
  }

  reset(){
    console.log('multiplicar');
   // this.contador = 0;
    //this.cambioContador.emit(this.contador);
    this.store.dispatch(new Reset);
  }
  
}
