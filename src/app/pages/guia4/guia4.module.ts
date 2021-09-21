import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Guia4PageRoutingModule } from './guia4-routing.module';

import { Guia4Page } from './guia4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Guia4PageRoutingModule
  ],
  declarations: [Guia4Page]
})
export class Guia4PageModule {}
