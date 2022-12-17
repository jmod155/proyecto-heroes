import { Component,OnInit,OnDestroy } from '@angular/core';
import { FormGroup,FormBuilder,Validators,AbstractControl } from "@angular/forms";
import { IRestContries } from 'src/app/interfaces/rest-contries.interface';
import { PaisService } from 'src/app/services/pais.service';


@Component({
  selector: 'app-formulario-reactivos',
  templateUrl: './formulario-reactivos.component.html',
  styleUrls: ['./formulario-reactivos.component.css']
})
export class FormularioReactivosComponent implements OnInit, OnDestroy{

  formGroup: FormGroup = new FormGroup({});
  paises: IRestContries[] | null = [];
  constructor(
    private formBuilder: FormBuilder,
    private _servicePais:PaisService
  ){
    
  }

  ngOnInit(): void {
    console.log('Componente init');
    this.buildForm();
    this.getPaises();
  }

  getPaises(){
    this._servicePais.getPaises().subscribe((data:IRestContries[] | null) => {
      this.paises = data;
    });
  }

  ngOnDestroy(): void {
    
    console.log('Componente DESTRUIDO');
  }

  buildForm(){
    this.formGroup = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', [Validators.required, Validators.minLength(5)]],
      paises: [-1, Validators.required],
      correo: ['', Validators.pattern('[a-z0-9]+@[a-z0-9]+\.[a-z]{2,4}$')],
      contrasena: ['', [Validators.required, this.validarContrasena]]
    });
  }

  validarContrasena(control:AbstractControl){
    const contrasena:string = control.value;
    let error = null;
    if(!contrasena.includes('$')){
      error = { pesos: 'Es requerido el signo $' }
    }
    if(!parseFloat(contrasena[0])){
      error = { ...error, number: 'Es requerido empezar con un numero' }
    }
    return error;
  }

  get usuarioNoValido(){
    return this.nombre?.invalid && this.nombre.touched
  }

  getError(controlName: string){
    let error = '';
    const control = this.formGroup.get(controlName);
    if(control?.touched && control?.errors != null ){
      error = JSON.stringify(control?.errors)
    }
    return error;
  }


  guardar(){
    console.log(this.formGroup);
  }

  get nombre(): AbstractControl | null { return this.formGroup.get('nombre') };
  get apellido(): AbstractControl | null { return this.formGroup.get('apellido') };
  get contrasena(): AbstractControl | null { return this.formGroup.get('contrasena') };
}