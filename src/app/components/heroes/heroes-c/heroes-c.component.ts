import { Component ,Input} from '@angular/core';
import { IHeroe } from '../../../interfaces/heroe.interface';
@Component({
  selector: 'app-heroes-c',
  templateUrl: './heroes-c.component.html',
  styleUrls: ['./heroes-c.component.css']
})
export class HeroesCComponent {
@Input() heroesLista:IHeroe[] | null=[];

getheroesLista()
{
  return JSON.stringify(this.heroesLista);
}

}
