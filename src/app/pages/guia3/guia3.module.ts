import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Guia3PageRoutingModule } from './guia3-routing.module';

import { Guia3Page } from './guia3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Guia3PageRoutingModule
  ],
  declarations: [Guia3Page]
})
export class Guia3PageModule {}
