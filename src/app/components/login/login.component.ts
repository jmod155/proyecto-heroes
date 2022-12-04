import { Component } from '@angular/core';
import { LoginService } from '../../serices/login.service';
import { IPersona } from '../../interfaces/persona.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
count:number =0;
  //instancio a la clase login.service
  constructor(private _serviceLogin:LoginService){

  }
login()
{
 let persona:IPersona={
  nombre:"Jose Miguel",
  correo:'josemiguel155@gmail.com',
  count:this.count

 }
 this.count++;
 this._serviceLogin.login(persona);
}

}
