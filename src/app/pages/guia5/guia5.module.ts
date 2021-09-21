import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Guia5PageRoutingModule } from './guia5-routing.module';

import { Guia5Page } from './guia5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Guia5PageRoutingModule
  ],
  declarations: [Guia5Page]
})
export class Guia5PageModule {}
