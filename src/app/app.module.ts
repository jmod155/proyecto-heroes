import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import localEs from "@angular/common/locales/es"
import { NavbarComponent } from './compartida/navbar/navbar.component';
import { EjemploPipesComponent } from './components/ejemplo-pipes/ejemplo-pipes.component';
registerLocaleData(localEs);

@NgModule({
  //van declarados todos los componentes
  declarations: [
    AppComponent,
    NavbarComponent,
    EjemploPipesComponent
  ],
  //van todas la librerias que utilicemos
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  //van los servicios - clase que contiene metodos relacionados con el backend
  providers: [
   
  ],
  //cual es el componente principal
  bootstrap: [AppComponent]
})
export class AppModule { }
