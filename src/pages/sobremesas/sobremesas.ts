import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SobremesasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sobremesas',
  templateUrl: 'sobremesas.html',
})
export class SobremesasPage {

  precoPetit      = "R$ 14,00";
  precoTortaCafe  = "R$ 12,00";
  precoCupcake    = "R$ 7,00";
  precoBanana     = "R$ 15,00";
  precoPanqueca   = "R$ 20,00";

  petitClicked:     boolean = false;
  tortaCafeClicked: boolean = false;
  cupcakeClicked:   boolean = false;
  bananaClicked:    boolean = false;
  panquecaClicked:  boolean = false;

  temExpandido: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SobremesasPage');
  }

  verificaClicks() {
    if (
      this.petitClicked       == true ||
      this.tortaCafeClicked   == true ||
      this.cupcakeClicked     == true ||
      this.bananaClicked      == true ||
      this.panquecaClicked    == true
    ) {
      console.log("Entrou no true");
      this.temExpandido = true;
    }
    else {
      this.temExpandido = false;
    }
  }

  ocultaTudo() {
    this.petitClicked     = false;
    this.tortaCafeClicked = false;
    this.cupcakeClicked   = false;
    this.bananaClicked    = false;
    this.panquecaClicked  = false;
    this.verificaClicks();
  }

  petitClick(){
    this.petitClicked == false ? this.petitClicked = true : this.petitClicked = false;
    this.verificaClicks();
  }

  tortaCafeClick(){
    this.tortaCafeClicked == false ? this.tortaCafeClicked = true : this.tortaCafeClicked = false;
    this.verificaClicks();
  }

  cupcakeClick(){
    this.cupcakeClicked == false ? this.cupcakeClicked = true : this.cupcakeClicked = false;
    this.verificaClicks();
  }

  bananaClick(){
    this.bananaClicked == false ? this.bananaClicked = true : this.bananaClicked = false;
    this.verificaClicks();
  }

  panquecaClick(){
    this.panquecaClicked == false ? this.panquecaClicked = true : this.panquecaClicked = false;
    this.verificaClicks();
  }

}
