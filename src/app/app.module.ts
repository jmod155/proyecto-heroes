import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import localEs from "@angular/common/locales/es"
import { NavbarComponent } from './compartida/navbar/navbar.component';
import { EjemploPipesComponent } from './components/ejemplo-pipes/ejemplo-pipes.component';
import { MayusculaPipe } from './components/pipes/pipes/mayuscula.pipe';
import { CapitalizarPipe } from './components/pipes/pipes/capitalizar.pipe';
import { CambiarContrasenaPipe } from './components/pipes/pipes/cambiar-contrasena.pipe';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
registerLocaleData(localEs);

@NgModule({   
  //van declarados todos los componentes
  declarations: [   
    AppComponent,
    NavbarComponent,
    EjemploPipesComponent,
    MayusculaPipe,
    CapitalizarPipe,
    CambiarContrasenaPipe,
    LoginComponent
  ],
  //van todas la librerias que utilicemos
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule//modulo para el manejo de rutas
  ],
  //van los servicios - clase que contiene metodos relacionados con el backend
  providers: [
   
  ],
  //cual es el componente principal
  bootstrap: [AppComponent]
})
export class AppModule { }
