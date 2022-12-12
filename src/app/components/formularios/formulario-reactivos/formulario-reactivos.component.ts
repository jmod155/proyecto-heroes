import { Component ,OnInit,OnDestroy } from '@angular/core';
import {FormGroup,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-formulario-reactivos',
  templateUrl: './formulario-reactivos.component.html',
  styleUrls: ['./formulario-reactivos.component.css']
})
export class FormularioReactivosComponent implements OnInit, OnDestroy {
  //variable que represnta el formulario
formGroup :FormGroup = new FormGroup({});
//se inyecta clase
constructor(private formBuilder:FormBuilder){

}
//se ejecuta en el init del formulario
ngOnInit(): void {
  //debugger;
  console.log('Componente init');
  this.builForm();
}
//se ejecuta cundo se destruya el componente
ngOnDestroy(): void {
  console.log('Componente DESTRUIDO');
}
//variable para construir el formulario
builForm(){
  //se crean los controles cada input es un control
  this.formGroup=this.formBuilder.group({
   nombre:[''],
   apellido:[''],
   correo:[''],
   contrasena:['']
  });
}

guardar()
{
  console.log(this.formGroup);
}
}
