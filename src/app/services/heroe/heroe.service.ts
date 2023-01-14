import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IHeroe } from '../../interfaces/heroe.interface';
 
@Injectable({
  providedIn: 'root'
})
export class HeroeService {

  heroe$:Subject<IHeroe[]>; //observable
  heroes:IHeroe[]=[];
  constructor() { 
    this.heroe$=new Subject<IHeroe[]>
  }
  
  getHeroe$():Observable<any>{
   return this.heroe$.asObservable();
  }
  
  setHeroe(heroe:IHeroe){
    this.heroes?.push(heroe);
    this.heroe$.next(this.heroes);
  }
  getHeroPorId(Id:string)
  { 
    let heroeFiltrado:IHeroe |any = this.heroes?.find(item => item.id === Id)
    return heroeFiltrado;
  }
}
