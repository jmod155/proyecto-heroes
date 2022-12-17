import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EjemploPipesComponent } from './components/ejemplo-pipes/ejemplo-pipes.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path:'login', component: LoginComponent },
  { path:'pipes', component: EjemploPipesComponent},
  {
    path: 'form',
    loadChildren: () => import('./components/formularios/formularios.module').then(m => m.FormulariosModule)
  },
  {
    path:'heroe',
    loadChildren: () => import('./components/heroes/heroes.module').then(m => m.HeroesModule)
  },
  { path: '', pathMatch:'full', redirectTo:'login'},
  { path: '**', pathMatch:'full', redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }