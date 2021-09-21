import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Guia1PageRoutingModule } from './guia1-routing.module';

import { Guia1Page } from './guia1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Guia1PageRoutingModule
  ],
  declarations: [Guia1Page]
})
export class Guia1PageModule {}
