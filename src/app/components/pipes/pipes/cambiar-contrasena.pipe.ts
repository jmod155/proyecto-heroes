import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cambiarContrasena'
})
export class CambiarContrasenaPipe implements PipeTransform {

  transform(value: string,mostrarContrasena :boolean): string {
    let retorno:string;
   if(mostrarContrasena)
   {
    retorno =value;
   }
   else
   {
    retorno ="****** *******";
   }
   
    return retorno;
  }
  }


