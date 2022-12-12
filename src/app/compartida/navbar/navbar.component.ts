import { Component } from '@angular/core';
import { LoginComponent } from '../../components/login/login.component';
import { LoginService } from '../../serices/login.service';
import { IPersona } from '../../interfaces/persona.interface';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
//suscribirse al observable
persona:IPersona={} as IPersona;
  constructor(private _serviceLogin:LoginService)
  {
    _serviceLogin.getPersonas$().subscribe((data :IPersona)=> {
      this.persona=data;
    });

  }
//dessuscribir el observable
  logout(){
    this._serviceLogin.persona$.unsubscribe();
    this._serviceLogin.persona$= new Subject();
    this.persona={} as IPersona;
  }
}
 