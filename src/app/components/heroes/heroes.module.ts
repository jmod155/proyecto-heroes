import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroeTarjetaCComponent } from './heroe-tarjeta-c/heroe-tarjeta-c.component';
import { HeroeCComponent } from './heroe-c/heroe-c.component';
import { BuscadorCComponent } from './buscador-c/buscador-c.component';
import { HeroesCComponent } from './heroes-c/heroes-c.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeroeTarjetaCComponent,
    HeroeCComponent,
    BuscadorCComponent,
    HeroesCComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HeroesRoutingModule,
    ReactiveFormsModule
  ]
})
export class HeroesModule { }
