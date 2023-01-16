import { Component ,EventEmitter,Input,Output} from '@angular/core';
import { IHeroe } from '../../../interfaces/heroe.interface';
import { Router } from '@angular/router';
import { HeroeService } from '../../../services/heroe/heroe.service';


@Component({
  selector: 'app-heroe-tarjeta-c',
  templateUrl: './heroe-tarjeta-c.component.html',
  styleUrls: ['./heroe-tarjeta-c.component.css']
})
export class HeroeTarjetaCComponent {
  //variables para enviae y recibir informacion entre componentes
  @Input() heroesLista:IHeroe[] | null=[];
  @Output() verHeroePadre:EventEmitter<IHeroe|any> = new EventEmitter();
  //constructor
  constructor(private ruta: Router,private _serviceHeroe :HeroeService)
  {

  }
  //retorna el listado de heroes formato json //en caso de querer validar la informacion
  getheroesLista()
  {
    return JSON.stringify(this.heroesLista);
  }
  //cuando se da clic al boton editar se filtra por nombre y se envia al formulario padre la informacion
  verHeroe(heroe:string)
  {  
    //alert(heroe)
    let heroeR:IHeroe |any = this.heroesLista?.find(item => item.nombre === heroe)
    this.verHeroePadre.emit(heroeR);
     
  }
  //funcion para redireccionar al formulario de heroe
  redireccionar(heroeId?:string)
  {
    //let heroeR:IHeroe |any = this.heroesLista?.find(item => item.id === heroeId)
    
      
    //this._serviceHeroe.setHeroe(this.heroesLista);
   //this.ruta.navigate(["heroe/heroesC/",{heroeId}])
   this.ruta.navigate(['heroe/heroesC/:'],{queryParams: {heroeId: heroeId} })
  }
}
