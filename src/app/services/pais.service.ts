import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IRestContries } from '../interfaces/rest-contries.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private _http: HttpClient) { }

  getPaises(){
    return this._http.get<IRestContries[] | null>('https://restcountries.com/v2/all');
  }

}