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

  @Input() heroesLista:IHeroe[] | null=[];
  @Output() verHeroePadre:EventEmitter<IHeroe|any> = new EventEmitter();
  constructor(private ruta: Router,private _serviceHeroe :HeroeService)
  {

  }
  getheroesLista()
  {
    return JSON.stringify(this.heroesLista);
  }
  
  verHeroe(heroe:string)
  {  
    //alert(heroe)
    let heroeR:IHeroe |any = this.heroesLista?.find(item => item.nombre === heroe)
    this.verHeroePadre.emit(heroeR);
     
  }
  redireccionar(heroeId?:string)
  {
    //let heroeR:IHeroe |any = this.heroesLista?.find(item => item.id === heroeId)
    
      
    //this._serviceHeroe.setHeroe(this.heroesLista);
   //this.ruta.navigate(["heroe/heroesC/",{heroeId}])
   this.ruta.navigate(['heroe/heroesC/:'],{queryParams: {heroeId: heroeId} })
  }
}
