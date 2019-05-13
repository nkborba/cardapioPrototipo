import { PratoDiaPage } from './../prato-dia/prato-dia';
import { BebidasPage } from './../bebidas/bebidas';
import { SobremesasPage } from './../sobremesas/sobremesas';
import { PratosPage } from './../pratos/pratos';
import { LanchesPage } from './../lanches/lanches';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  teste = 10;

  constructor(public navCtrl: NavController) {
  }

  abrePratoDia(){
    console.log('Clicou para abrir página de Prato do Dia');
    this.navCtrl.push(PratoDiaPage);
  }

  abreLanches(){
    console.log('Clicou para abrir página de Lanches');
    this.navCtrl.push(LanchesPage);
  }

  abrePratos(){
    console.log('Clicou para abrir página de Pratos');
    this.navCtrl.push(PratosPage);
  }

  abreSobremesas(){
    console.log('Clicou para abrir página de Sobremesas');
    this.navCtrl.push(SobremesasPage);
  }

  abreBebidas(){
    console.log('Clicou para abrir página de Bebidas');
    this.navCtrl.push(BebidasPage);
  }

}
