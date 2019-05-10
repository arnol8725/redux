import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import {  AppState } from '../app.reducer';
import { store, container } from '@angular/core/src/render3';
import { Decrement, Reset, Mult, Div } from '../counter.actions';


@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit {
/*
  @Input() contador : number;
  @Output() cambioContador = new EventEmitter<number>() ;
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

  resertNieto(nuevoContador){
    this.contador = nuevoContador;
    //this.cambioContador.emit(this.contador);
    this.store.dispatch(new Reset);
  }

  multiplicar(){
    console.log('multiplicar');
    //this.contador *= 2;
    //this.cambioContador.emit(this.contador);
    this.store.dispatch(new Mult);
  }
  dividir(){
    console.log('dividir');
   // this.contador /= 2;
    this.store.dispatch(new Div(2));
    //this.cambioContador.emit(this.contador);
  }

}
