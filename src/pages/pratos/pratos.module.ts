import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PratosPage } from './pratos';

@NgModule({
  declarations: [
    PratosPage,
  ],
  imports: [
    IonicPageModule.forChild(PratosPage),
  ],
})
export class PratosPageModule {}
