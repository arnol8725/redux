import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Increment, Decrement, Reset } from './contador/counter.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  contador: number;
        
  //contador: Observable<number>;
  constructor(private store: Store<{ contador: number }>) {
    //this.contador = store.pipe(select('contador'));
    this.store.select('contador').subscribe( state => {
        //console.log('El valor del estado:' + state.contador);
        console.log(state);
        this.contador = state;

    });
  }
  //contador: number;
  increment() {
    this.store.dispatch(new Increment());
  }
 
  decrement() {
    this.store.dispatch(new Decrement());
  }
 
  reset() {
    this.store.dispatch(new Reset());
  }
  /*constructor(){
    this.contador = 10;
  }

  decrementar(){
    console.log('decrementar');
    this.contador = this.contador > 10? this.contador - 1 : 10;
  }
  incrementar(){
    console.log('incrementar');
    this.contador = this.contador >= 10? this.contador + 1 : 10;
  }*/
}
