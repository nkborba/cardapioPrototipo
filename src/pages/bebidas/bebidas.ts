import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BebidasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bebidas',
  templateUrl: 'bebidas.html',
})
export class BebidasPage {

  laranjaClicked: boolean = false;
  morangoClicked: boolean = false;
  cocaClicked: boolean = false;
  fantaClicked: boolean = false;
  choppClicked: boolean = false;
  algumClick: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BebidasPage');
  }

  laranjaClick() {
    this.laranjaClicked == false ? this.laranjaClicked = true : this.laranjaClicked = false;
    this.verificaClicks();
  }

  morangoClick() {
    this.morangoClicked == false ? this.morangoClicked = true : this.morangoClicked = false;
    this.verificaClicks();
  }

  cocaClick() {
    this.cocaClicked == false ? this.cocaClicked = true : this.cocaClicked = false;
    this.verificaClicks();
  }

  fantaClick() {
    this.fantaClicked == false ? this.fantaClicked = true : this.fantaClicked = false;
    this.verificaClicks();
  }

  choppClick() {
    this.choppClicked == false ? this.choppClicked = true : this.choppClicked = false;
    this.verificaClicks();
  }

  verificaClicks() {
    if (
      this.laranjaClicked == true ||
      this.morangoClicked == true ||
      this.cocaClicked == true ||
      this.fantaClicked == true ||
      this.choppClicked == true
    ) {
      console.log("Entrou no true");
      this.algumClick = true;
    }
    else {
      this.algumClick = false;
    }
  }

  ocultaTudo() {
    this.laranjaClicked = false;
    this.morangoClicked = false;
    this.cocaClicked = false;
    this.fantaClicked = false;
    this.choppClicked = false;
    this.verificaClicks();
  }

}
