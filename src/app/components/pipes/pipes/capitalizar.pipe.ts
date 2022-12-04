import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizar'
})
export class CapitalizarPipe implements PipeTransform {

   
    transform(value: string, tipo:number ): string {
      let retorno : string;
      switch(tipo) { 
        case 1: { 
          retorno=value.toUpperCase();
           break; 
        } 
        case 2: { 
          retorno=value.toLowerCase();
           break; 
        } 
        case 3: { 

         // retorno=value.toLowerCase().replace(/\b[a-z]/g,c=>c.toUpperCase())
          retorno=value.toLowerCase()
                  .trim()
                  .split(' ')
                  .map( v => v[0].toUpperCase() + v.substring(1) )
                  .join(' ');
          break; 
       } 
        default: { 
          retorno="Tipo No valido"
           break; 
        } 
     } 
      return retorno;
  
  }

}
