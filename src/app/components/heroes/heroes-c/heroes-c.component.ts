
import { Component} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HeroeService } from 'src/app/services/heroe/heroe.service';
import { IHeroe } from '../../../interfaces/heroe.interface';
import { CapitalizarPipe } from '../../pipes/pipes/capitalizar.pipe';
@Component({
  selector: 'app-heroes-c',
  templateUrl: './heroes-c.component.html',
  styleUrls: ['./heroes-c.component.css']
})
export class HeroesCComponent {
  //heroe:IHeroe[]|null=[];
  heroe:IHeroe=[] as IHeroe| any;
  constructor(private _serviceHeroe:HeroeService,private route: ActivatedRoute)
  {
  /*  _serviceHeroe.getHeroe$().subscribe((data:IHeroe[]| any) => {
      this.heroe=data;
       
    });;*///me suscribo al observable
  }

  ngOnInit() {
    
    let heroeId = this.route.snapshot.queryParams["heroeId"];
    this.heroe= this._serviceHeroe.getHeroPorId(heroeId);
    //alert(heroeId)
    //this.getheroes();
}
/*getheroes(){
    this._serviceHeroe.getHeroe$().subscribe((data:IHeroe[]| any) => {
      this.heroes=data;
    });
   */
    
    verHeroehp()
    {
        
      
    }
}

