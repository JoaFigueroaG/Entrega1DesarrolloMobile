import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Guia6PageRoutingModule } from './guia6-routing.module';

import { Guia6Page } from './guia6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Guia6PageRoutingModule
  ],
  declarations: [Guia6Page]
})
export class Guia6PageModule {}
