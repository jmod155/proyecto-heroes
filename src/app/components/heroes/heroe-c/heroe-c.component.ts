import { Component,OnInit,OnDestroy } from '@angular/core';
import { FormGroup,ReactiveFormsModule,FormBuilder,Validators,AbstractControl } from "@angular/forms";
import { ICasa } from 'src/app/interfaces/casa.interface';
//import { ICasa } from 'src/app/interfaces/casa.interface';
import { CasaEditorialService } from '../../../serices/casa-editorial.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { ThisReceiver } from '@angular/compiler';
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
   archivos:any=[];
   imagenVista:string="";
  constructor(
    private formBuilder: FormBuilder,
    private _serviceCasaEditorial:CasaEditorialService 
    ,private sanitizer:DomSanitizer,
   
  ){
    
  }
////////////////////////////archivo


///////////////////////////////////////////////////////
  
  ngOnInit(): void {
   // console.log('Componente init');
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
      this.valoresDigitados+=" - Casa Editorial:"+this.casa?.value;
      this.valoresDigitados+=" - Imagen:"+this.FuImagen?.value;
     
 
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
  
   getArchivoTipe(tipo:string)
   {
    const tiposValidos = [ 'image/png', 'image/jpeg'];
     let valido:boolean=false;
     if (tiposValidos.includes(tipo))
     {
      valido=true;
     }
     return valido;
   }
   capturarArchivo (event:any){
    debugger;
    const archivoSubir=event.target.files[0];
    alert(event.target.files[0].type);
    if (this.getArchivoTipe(event.target.files[0].type))
    {

    this.archivos.push(archivoSubir);
    console.log(event.target.files);
     this.extraerBAse64(archivoSubir).then((imagen:any) => {
      this.imagenVista=imagen.base;
      alert(imagen.base);
    }) 
       }
       else
       {//alert(event.target.files[0]);
        event.target.value = null
       }
   }
 
  extraerBAse64=async ($event:any) => new Promise((resolve)=>
  { 
  try{
       const unsafeImg = window.URL.createObjectURL($event);
       const image =this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
       const reader = new FileReader();
       reader.readAsDataURL($event);
       reader.onload=() => {
        resolve({
         
          base: reader.result,
          
          
          
        })  ;
       };
         reader.onerror=error => {
          resolve({
            base:null
          });
         };
         return reader   
    }
    catch(e){
      return null;
    }
    
  }) 
   
}


 
 