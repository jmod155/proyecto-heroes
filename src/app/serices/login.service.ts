import { Injectable } from '@angular/core';

import { Interpolation } from '@angular/compiler';

import { Observable, Subject } from 'rxjs';
//importa modulo para observables
Interpolation
@Injectable({
  providedIn: 'root'
})
export class LoginService {
//promesas ->observables
persona$:Subject<any>;

  constructor() {

    this.persona$=new Subject<any>;
   }
   getPersonas$(): Observable<any>{
    return this.persona$.asObservable();
   }


login(persona:any){
  this.persona$.next(persona);
}


}