import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { EjemploPipesComponent } from './components/ejemplo-pipes/ejemplo-pipes.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},//ruta par al login
  {path:'pipes',component:EjemploPipesComponent},
  //si la url esta vacia
  {path:'',pathMatch:'full',redirectTo:'login'},
  //si no encuentra la ruta
  {path:'**',pathMatch:'full',redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
