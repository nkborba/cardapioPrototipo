import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PratosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pratos',
  templateUrl: 'pratos.html',
})
export class PratosPage {

  precoSalada = "R$ 15,00";
  precoSopa   = "R$ 15,00";
  costela6    = "R$ 30,00";
  costela12   = "R$ 45,00";
  risotoCamarao = "R$ 45,00";

  saladaCaesarClicked: boolean = false;
  sopaBatataClicked: boolean = false;
  costela6Clicked: boolean = false;
  constela12Clicked: boolean = false;
  risotoCamaraoClicked: boolean = false;

  temExpandido: boolean = false;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PratosPage');
  }

  verificaClicks() {
    if (
      this.saladaCaesarClicked  == true ||
      this.sopaBatataClicked    == true ||
      this.costela6Clicked      == true ||
      this.constela12Clicked    == true ||
      this.risotoCamaraoClicked == true
    ) {
      console.log("Entrou no true");
      this.temExpandido = true;
    }
    else {
      this.temExpandido = false;
    }
  }

  ocultaTudo() {
    this.saladaCaesarClicked  = false;
    this.sopaBatataClicked    = false;
    this.costela6Clicked      = false;
    this.constela12Clicked    = false;
    this.risotoCamaraoClicked = false;
    this.verificaClicks();
  }

  saladaCaesarClick(){
    this.saladaCaesarClicked == false ? this.saladaCaesarClicked = true : this. saladaCaesarClicked = false;
    this.verificaClicks();
  }

  sopaDeBatataClick(){
    this.sopaBatataClicked == false ? this.sopaBatataClicked = true : this. sopaBatataClicked = false;
    this.verificaClicks();
  }

  costela6Click(){
    this.costela6Clicked == false ? this.costela6Clicked = true : this. costela6Clicked = false;
    this.verificaClicks();
  }

  costela12Click(){
    this.constela12Clicked == false ? this.constela12Clicked = true : this. constela12Clicked = false;
    this.verificaClicks();
  }

  risotoCamaraoClick(){
    this.risotoCamaraoClicked == false ? this.risotoCamaraoClicked = true : this. risotoCamaraoClicked = false;
    this.verificaClicks();
  }

}
