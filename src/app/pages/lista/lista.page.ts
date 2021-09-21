import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';


interface Componente {
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  textoBuscar: string = '';

  componentes : Componente[] = [

    {
      icon: "game-controller-outline",
      name: 'Progresion Del Terraria',
      redirecTo: '/guia1'
    },
    {
      icon: "game-controller-outline",
      name: 'Guia de Liches De Warframe',
      redirecTo: '/guia2'
    },
    {
      icon: "game-controller-outline",
      name: 'Guia de mama de Isaac',
      redirecTo: '/guia3'
    },
    {
      icon: "game-controller-outline",
      name: 'Guia de Ninguang Genshin',
      redirecTo: '/guia4'
    },
    {
      icon: "game-controller-outline",
      name: 'Guia del Traveler Genshin',
      redirecTo: '/guia5'
    },
    {
      icon: "game-controller-outline",
      name: 'Guia de Bennet Genshin',
      redirecTo: '/guia6'
    }
    
    
  ]
  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }
  mM(){

    this.menuController.open('menu');

  }

  buscar( event ){
    this.textoBuscar=event.detail.value

  }
}
