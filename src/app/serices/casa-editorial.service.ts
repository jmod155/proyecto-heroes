import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IRestContries } from '../interfaces/rest-contries.interface';
import { ICasa } from 'src/app/interfaces/casa.interface';
@Injectable({
  providedIn: 'root'
})
export class CasaEditorialService {

  constructor() { }
       casas:ICasa[] | undefined; 
 getcasasEditorial(){
  this.casas =[
    {
        id:1,
        casa: "DC Comics"
   },
   {
       id:2,
       casa: "Marvel comics"
      
   }
   ];
    return  this.casas; 
  }
}
