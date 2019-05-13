import { PratoDiaPage } from './../pages/prato-dia/prato-dia';
import { SobremesasPage } from './../pages/sobremesas/sobremesas';
import { PratosPage } from './../pages/pratos/pratos';
import { LanchesPage } from './../pages/lanches/lanches';
import { BebidasPage } from './../pages/bebidas/bebidas';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BebidasPage,
    LanchesPage,
    PratosPage,
    SobremesasPage,
    PratoDiaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BebidasPage,
    LanchesPage,
    PratosPage,
    SobremesasPage,
    PratoDiaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
