import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo-pipes',
  templateUrl: './ejemplo-pipes.component.html',
  styleUrls: ['./ejemplo-pipes.component.css']
})
export class EjemploPipesComponent {
nombre :string ="Jose Miguel";
pi:number =Math.PI;
porcentaje:number=0.236;
salario:number=1234.5;
fecha:Date=new Date();
}
