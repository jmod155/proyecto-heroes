import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesCComponent } from './heroes-c/heroes-c.component';
import { BuscadorCComponent } from './buscador-c/buscador-c.component';
import { HeroeTarjetaCComponent } from './heroe-tarjeta-c/heroe-tarjeta-c.component';
import { HeroeCComponent } from './heroe-c/heroe-c.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { 
        path: 'heroesC',
        component: HeroesCComponent
      },
      { 
        path: 'buscadorC/:heroeId',
        component: BuscadorCComponent
      },
      { 
        path: 'heroeTarjeta',
        component: HeroeTarjetaCComponent
      },
      { 
        path: 'heroeC/:heroeId',
        component: HeroeCComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }



