
import { Component ,EventEmitter,Input,Output} from '@angular/core';
import { IHeroe } from '../../../interfaces/heroe.interface';
import { CapitalizarPipe } from '../../pipes/pipes/capitalizar.pipe';
@Component({
  selector: 'app-heroes-c',
  templateUrl: './heroes-c.component.html',
  styleUrls: ['./heroes-c.component.css']
})
export class HeroesCComponent {
@Input() heroesLista:IHeroe[] | null=[];
@Output() verHeroePadre:EventEmitter<IHeroe|any> = new EventEmitter();
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
}
