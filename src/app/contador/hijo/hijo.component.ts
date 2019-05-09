import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit {

  @Input() contador : number;
  @Output() cambioContador = new EventEmitter<number>() ;

  constructor() { }

  ngOnInit() {
  }

  resertNieto(nuevoContador){
    this.contador = nuevoContador;
    this.cambioContador.emit(this.contador);
  }

  multiplicar(){
    console.log('multiplicar');
    this.contador *= 2;
    this.cambioContador.emit(this.contador);
  }
  dividir(){
    console.log('dividir');
    this.contador /= 2;
    this.cambioContador.emit(this.contador);
  }

}