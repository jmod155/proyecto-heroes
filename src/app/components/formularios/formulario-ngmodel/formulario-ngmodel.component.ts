import { Component } from '@angular/core';
import { IPersona } from '../../../interfaces/persona.interface';

@Component({
  selector: 'app-formulario-ngmodel',
  templateUrl: './formulario-ngmodel.component.html',
  styleUrls: ['./formulario-ngmodel.component.css']
})
export class FormularioNgmodelComponent {
 
  persona:IPersona={} as IPersona;
 constructor(){

 }
 guardar()
 {

 }
}
