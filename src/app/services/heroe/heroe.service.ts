import { Injectable, PipeTransform } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IHeroe } from '../../interfaces/heroe.interface';
 
@Injectable({
  providedIn: 'root'
})
export class HeroeService {
heroe$:Subject<IHeroe>;
  constructor() { 
    this.heroe$=new Subject<IHeroe>
  }
  getHeroe$():Observable<IHeroe>{
   return this.heroe$;
  }

setHeroe(heroe:IHeroe){
this.heroe$.next(heroe);
}

}
