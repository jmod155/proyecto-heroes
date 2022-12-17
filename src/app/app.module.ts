import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import localEs from "@angular/common/locales/es"
//archivos de rutas
import { AppRoutingModule } from './app-routing.module';
//componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './compartida/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
//pipes
import { MayusculaPipe } from './components/pipes/pipes/mayuscula.pipe';
import { EjemploPipesComponent } from './components/ejemplo-pipes/ejemplo-pipes.component';
import { CapitalizarPipe } from './components/pipes/pipes/capitalizar.pipe';
import { CambiarContrasenaPipe } from './components/pipes/pipes/cambiar-contrasena.pipe';


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
    LoginComponent,
  

  ],
  //van todas la librerias que utilicemos
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,//modulo para el manejo de rutas
    FormsModule,//para manejo de formularios de angular
    ReactiveFormsModule//para uso de formularios reactivos de angular
  ],
  //van los servicios - clase que contiene metodos relacionados con el backend
  providers: [
   
  ],
  //cual es el componente principal
  bootstrap: [AppComponent]
})
export class AppModule { }
