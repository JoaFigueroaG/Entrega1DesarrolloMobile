import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Guia2PageRoutingModule } from './guia2-routing.module';

import { Guia2Page } from './guia2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Guia2PageRoutingModule
  ],
  declarations: [Guia2Page]
})
export class Guia2PageModule {}
