import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LanchesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lanches',
  templateUrl: 'lanches.html',
})
export class LanchesPage {

  // Preços
  classicPreco  = "R$ 25,00";
  chessPreco    = "R$ 20,00";
  hotdogAmPreco = "R$ 10,00";
  hotdogBrPreco = "R$ 15,00";
  vegetarianoPreco  = "R$ 30,00";

  hambClassico: boolean = false;
  hambChess:    boolean = false;
  hotdogAm:     boolean = false;
  hotdogBr:     boolean = false;
  lancheVegeta:  boolean = false;

  temExpandido: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LanchesPage');
  }

  verificaClicks() {
    if (
      this.hambClassico == true ||
      this.hambChess    == true ||
      this.hotdogAm     == true ||
      this.hotdogBr     == true ||
      this.lancheVegeta == true
    ) {
      console.log("Entrou no true");
      this.temExpandido = true;
    }
    else {
      this.temExpandido = false;
    }
  }

  ocultaTudo() {
    this.hambClassico = false;
    this.hambChess    = false;
    this.hotdogAm     = false;
    this.hotdogBr     = false;
    this.lancheVegeta = false;
    this.verificaClicks();
  }

  classicoClick(){
    this.hambClassico == false ? this.hambClassico=true : this.hambClassico=false;
    this.verificaClicks();
  }

  chessClick(){
    this.hambChess == false ? this.hambChess=true : this.hambChess=false;
    this.verificaClicks();
  }

  hotdogAmClick(){
    this.hotdogAm == false ? this.hotdogAm=true : this.hotdogAm=false;
    this.verificaClicks();
  }

  hotdogBrClick(){
    this.hotdogBr == false ? this.hotdogBr=true : this.hotdogBr=false;
    this.verificaClicks();
  }

  vegetarianoClick(){
    this.lancheVegeta == false ? this.lancheVegeta=true : this.lancheVegeta=false;
    this.verificaClicks();
  }

}
