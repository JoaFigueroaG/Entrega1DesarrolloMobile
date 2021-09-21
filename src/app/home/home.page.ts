import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public loadingController: LoadingController,
    private menuController: MenuController
    ) {}

    mM(){

      this.menuController.open('menu');
  
    }
  

}


