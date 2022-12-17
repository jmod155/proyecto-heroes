import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioNgmodelComponent } from './formulario-ngmodel/formulario-ngmodel.component';
import { FormularioReactivosComponent } from './formulario-reactivos/formulario-reactivos.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { 
        path: 'ngmodel',
        component: FormularioNgmodelComponent
      },
      { 
        path: 'reactivo',
        component: FormularioReactivosComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormulariosRoutingModule { }