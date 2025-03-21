import { Component } from '@angular/core';





@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() { }
  alertButtons = ['OK'];
  ValorCarro = 0;
  valorRodados = 0;
  valorFinal = 0;
  carro='';


  valorViagem() {
this.valorFinal=this.valorRodados * this.ValorCarro


switch(this.carro){
  case 'normal':
    this.valorFinal = this.valorRodados * 2.50 + 5
    break;
  case 'superior':
    this.valorFinal = this.valorRodados * 3.50 + 7.50;
    break;
    case 'vip':
      this.valorFinal = this.valorRodados * 5.50 + 10;
      break;
}







    if (this.valorFinal > 150) {
      this.valorFinal = this.valorFinal * (25 / 100);
    } else {
      this.valorFinal = this.valorFinal * (20 / 100);
    }




  }

}

