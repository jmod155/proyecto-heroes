import { Component,OnInit,OnDestroy } from '@angular/core';
import { FormGroup,ReactiveFormsModule,FormBuilder,Validators,AbstractControl } from "@angular/forms";
import { ICasa } from 'src/app/interfaces/casa.interface';
//import { ICasa } from 'src/app/interfaces/casa.interface';
import { CasaEditorialService } from '../../../serices/casa-editorial.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-heroe-c',
  templateUrl: './heroe-c.component.html',
  styleUrls: ['./heroe-c.component.css']
})
export class HeroeCComponent implements OnInit {
  frmHeroe: FormGroup = new FormGroup({});
   casas :ICasa[] | null=[];
   maxCharsTexArea:number = 100;
   valoresDigitados: string="";
   nombreArchivo:string="";
   archivo:string="";
  
  constructor(
    private formBuilder: FormBuilder,
    private _serviceCasaEditorial:CasaEditorialService 
  ){
    
  }
////////////////////////////archivo


///////////////////////////////////////////////////////
  
  ngOnInit(): void {
    console.log('Componente init');
    this.buildForm();
    this.getcasas();
  }
  buildForm(){
    this.frmHeroe = this.formBuilder.group({
      nombre: ['', [Validators.required ]],
      descripcion: ['', [Validators.required, Validators.minLength(15)]],
      poder: ['', [Validators.required,Validators.minLength(5)]],
      casa  : [-1, [Validators.required]],
      FuImagen: ['', [Validators.required]]
       
    });
  }
  getcasas(){
    this._serviceCasaEditorial.getcasasEditorial().map(value=>
     // alert(value.casa)
      this.casas?.push(value) )
  }
  guardar(){
   
       
    /* this.http.post('http://localhost:8001/upload.php', formData)
       .subscribe(res => {
         console.log(res);
         alert('Uploaded Successfully.');
       })*/
  
    


     if (this.frmHeroe.status =='INVALID')
     {
      alert ("verifique los errores en el formulario");
      this.valoresDigitados="";
     }
    else
    {
      this.valoresDigitados+=" Nombre:"+this.nombre?.value;
      this.valoresDigitados+=" - Poder:"+this.poder?.value;
      this.valoresDigitados+=" - Descripcion:"+this.descripcion?.value;
      this.valoresDigitados+=" - Nombre:"+this.casa?.value;
      //this.valoresDigitados+="Nombre:"+this.nombre?.value;
    }
     
  }

  get nombre(): AbstractControl | null { return this.frmHeroe.get('nombre') };
  get descripcion(): AbstractControl | null { return this.frmHeroe.get('descripcion') };
  get poder(): AbstractControl | null { return this.frmHeroe.get('poder') };
  get casa(): AbstractControl | null { return this.frmHeroe.get('casa') };
  get FuImagen(): AbstractControl | null { return this.frmHeroe.get('FuImagen') };
  getError(controlName: string){
    let error = '';
    const control = this.frmHeroe.get(controlName);
    if(control?.touched && control?.errors != null ){
      error = JSON.stringify(control?.errors)
    }
    return error;
  }
  /*getcasas(){
    this.casas=[
      {
          id:1,
          casa: "DC Comics"
     },
     {
         id:2,
         casa: "Marvel comics"
        
     }
     ];

  }*/
  contartextarea(control:any) {
   let valor:string = control.value;
   return this.maxCharsTexArea-valor.length;
   }
  
   getArchivoTipe(tipo:any)
   {
    const tiposValidos = [ 'png', 'jpg'];
     let valido:boolean=false;
     if (tiposValidos.includes(tipo ))
     {
      valido=true;
     }
     return valido;
   }

 
  
}


 
 