import { Component,OnInit,OnDestroy } from '@angular/core';
import { FormGroup,ReactiveFormsModule,FormBuilder,Validators,AbstractControl } from "@angular/forms";
import { ICasa } from 'src/app/interfaces/casa.interface';
import { CasaEditorialService } from '../../../serices/casa-editorial.service';
import { DomSanitizer } from '@angular/platform-browser';
import { IHeroe } from '../../../interfaces/heroe.interface';
import { HeroeService } from '../../../services/heroe/heroe.service';
import {v4 as uuidv4} from 'uuid'; 
import { Subject } from 'rxjs';
@Component({
  selector: 'app-heroe-c',
  templateUrl: './heroe-c.component.html',
  styleUrls: ['./heroe-c.component.css']
})
export class HeroeCComponent implements OnInit {
  //declaracion de propiedades y variables
   frmHeroe: FormGroup = new FormGroup({});
   casas :ICasa[] | null=[];
   maxCharsTexArea:number = 100;
   valoresDigitados: string="";
   errorImagen:string="";
   nombreArchivo:string="";
   archivos:any=[];
   imagenVista:string="";
   heroeGuardado:IHeroe[]| null=[];
   //observable para enviar
   //heroe$:Subject <any>;
   //constructor
  constructor(
    private formBuilder: FormBuilder,
    private _serviceCasaEditorial:CasaEditorialService ,
    private sanitizer:DomSanitizer,
    private _serviceHeroe :HeroeService//se inyecta el servicio
  ){
    //this.heroe$=new Subject<any>;//se inicializa el 
  }
 
  //evento init ciclo vida de angular
  ngOnInit(): void {
   // console.log('Componente init');
    this.buildForm();
    this.getcasas();
  }
  //inicializar el formulario
  buildForm(){
    ///se declara el formulario y sus controles 
      this.frmHeroe = this.formBuilder.group({
      nombre: ['', [Validators.required ]],
      descripcion: ['', [Validators.required, Validators.minLength(15)]],
      poder: ['', [Validators.required,Validators.minLength(5)]],
      casa  : [-1, [Validators.required]],
      FuImagen: ['', [Validators.required]]
       
    });
  }
  //obtener casas editoriales para el combo
  getcasas(){
    this._serviceCasaEditorial.getcasasEditorial().map(value=>
     // alert(value.casa)
      this.casas?.push(value) )
  }

  removerRepetido(nombre?:string)
  {
   /* const indexOfObject :any = this.heroeGuardado?.findIndex(object => {
      return object.nombre === nombre;
    }); 
    alert(indexOfObject);
    if (indexOfObject>-1)
    {this.heroeGuardado?.splice(indexOfObject);}
    
    this.heroeGuardado?.splice(this.heroeGuardado?.findIndex(item => item.nombre === nombre))*/
  }
  //evento cuando se da clic sobre el boton del formulario
  guardar(){
     if (this.frmHeroe.status =='INVALID')
     {
      alert ("verifique los errores en el formulario");
      this.valoresDigitados="";
     }
    else
    {
    /*  this.removerRepetido(this.nombre?.value)
      this.valoresDigitados+=" Nombre:"+this.nombre?.value;
      this.valoresDigitados+=" - Poder:"+this.poder?.value;
      this.valoresDigitados+=" - Descripcion:"+this.descripcion?.value;
      this.valoresDigitados+=" - Casa Editorial:"+this.casa?.value;
      this.valoresDigitados+=" - Imagen:"+this.FuImagen?.value;*/  
     // variable para guardar lo digitado en el formulario
      let heroe:IHeroe = { id:uuidv4(),//funcion para crear identificador unico
                           nombre:this.nombre?.value,
                           poder:this.poder?.value,
                           casaEditorial:this.casa?.value,
                           descripcion:this.descripcion?.value,
                           imagen:this.imagenVista
      }
    //se envia la informacion del heroe digitado en el servicio 
      this._serviceHeroe.setHeroe(heroe);
      //se adiciona al arreglo el nuevo heroe digitado
      this.heroeGuardado?.push(heroe);
      //se quita la imagen del formulario
      this.imagenVista="";
      //se inicializa el formulario
      this.buildForm();
    }
     
  }
   
//funcion para mostrar los erroes de los controles
  getError(controlName: string){
    let error = '';
    const control = this.frmHeroe.get(controlName);
    if(control?.touched && control?.errors != null )
    {
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
  //contador de caracteres digitados en el textarea
  contartextarea(control:any) {
      let valor:string = control.value;
      return this.maxCharsTexArea-valor.length;
      }
  //validacion del tipo y tamaño del archivo a subir
   getArchivoTipe(tipo:string,size:number)
   {
    const tiposValidos = [ 'image/png', 'image/jpeg'];
     let valido:boolean=false;
     if (tiposValidos.includes(tipo))
     {
      if (size<=5000000)
      {
        valido=true;
      }
      else
      {
        this.errorImagen ='el tamaño del archivo no puede superar 5 mega'; 
      }
     
     }
     else{
        this.errorImagen ='Tipo de archivo no valido';
        }
     return valido;
    }
    //funcion para guardar el archivo  del uploapfile
   capturarArchivo (event:any){
    //debugger;
      const archivoSubir=event.target.files[0];
    //alert(event.target.files[0].type);
     if (this.getArchivoTipe(event.target.files[0].type,event.target.files[0].size))
     {  this.archivos.push(archivoSubir);
        console.log(event.target.files);
        this.extraerBAse64(archivoSubir).then((imagen:any) => {
        this.imagenVista=imagen.base;
      //alert(imagen.base);
        }) 
       }
       else
       { 
        event.target.value = null
       }
   }
 //funcion para convetir la imagen en badse 64 y poder mostrarlo en la pagina
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

//funcion que carga en el formulario cuando se envia desde  heroeTajeta
  verHeroe($event:IHeroe)
  {
  //se cargan los valores en cada control
    this.frmHeroe.controls['nombre'].setValue($event.nombre);
    this.frmHeroe.controls['casa'].setValue($event.casaEditorial);
    this.frmHeroe.controls['descripcion'].setValue($event.descripcion);
    this.imagenVista=$event.imagen;
    this.frmHeroe.controls['poder'].setValue($event.poder);
 

  }
//controladores del formulario
  get nombre(): AbstractControl | null { return this.frmHeroe.get('nombre') };
  get descripcion(): AbstractControl | null { return this.frmHeroe.get('descripcion') };
  get poder(): AbstractControl | null { return this.frmHeroe.get('poder') };
  get casa(): AbstractControl | null { return this.frmHeroe.get('casa') };
  get FuImagen(): AbstractControl | null { return this.frmHeroe.get('FuImagen') };
}


 
 