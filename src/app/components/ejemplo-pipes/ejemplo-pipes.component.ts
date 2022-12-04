import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo-pipes',
  templateUrl: './ejemplo-pipes.component.html',
  styleUrls: ['./ejemplo-pipes.component.css']
})
export class EjemploPipesComponent {
nombre :string ="JoSe MiguEl";
pi:number =Math.PI;
porcentaje:number=0.236;
salario:number=1234.5;
fecha:Date=new Date();
verContrasena:boolean=false;
nombreBoton:string="Mostrar Contraseña";
claseBoton:string="btn btn-info";
//
valorPromesa= new Promise <string> ((resolve)=>{
  setTimeout(()=>{
      resolve("llego la info");
  },5000);
});

heroe={
  nombre:"logan",
  edad:1000,
  otrosNombre:{
    nombre1:"wolverine",
    nombre2:"lobo"
  }
}
generarAlerta(){
  //alert('hola');
  this.nombre='clara ortiz'
}


valorContrasena()
{
  if (this.verContrasena)
  {
    this.verContrasena= false;
    this.nombreBoton="Mostrar Contraseña";
    this.claseBoton="btn btn-success";
  }
  else
  {

    this.verContrasena=true;
    this.nombreBoton="Ocultar Contraseña";
    this.claseBoton="btn btn-danger";
  }
}
}
