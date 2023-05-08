import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-myproyect',
  templateUrl: './form-myproyect.component.html',
  styleUrls: ['./form-myproyect.component.css']
})
export class FormMyproyectComponent implements OnInit{
  form: FormGroup;
  
  constructor (private formBuilder: FormBuilder){ 
    ///Creamos el grupo de controles para el formulario 
    this.form= this.formBuilder.group({
      logo1:['', [Validators.required]],
      descripcion1:['', [Validators.required, Validators.minLength(100)]],
      logo2:['', [Validators.required]],
      descripcion2:['', [Validators.required, Validators.minLength(100)]],
      logo3:['', [Validators.required]],
      descripcion3:['', [Validators.required, Validators.minLength(100)]],
      logo4:['', [Validators.required]],
      descripcion4:['', [Validators.required, Validators.minLength(100)]],

   })
  
  }
    ngOnInit(){}  

   get Logo1(){
    return this.form.get("logo1");
   }
   get Logo1Invalid(){
     return this.Logo1?.touched && !this.Logo1?.valid;
   }
   get Descripcion1(){
    return this.form.get("descripcion1");
   } 
   get Descripcion1Invalid(){ 
    return this.Descripcion1?.touched && !this.Descripcion1?.valid;
   }

   get Logo2(){
    return this.form.get("logo2");
   }
   get Logo2Invalid(){
     return this.Logo2?.touched && !this.Logo2?.valid;
   }
   get Descripcion2(){
    return this.form.get("descripcion2");
   } 
   get Descripcion2Invalid(){ 
    return this.Descripcion2?.touched && !this.Descripcion2?.valid;
   }


   get Logo3(){
    return this.form.get("logo3");
   }
   get Logo3Invalid(){
     return this.Logo3?.touched && !this.Logo3?.valid;
   }
   get Descripcion3(){
    return this.form.get("descripcion3");
   } 
   get Descripcion3Invalid(){ 
    return this.Descripcion3?.touched && !this.Descripcion3?.valid;
   }

   
   get Logo4(){
    return this.form.get("logo4");
   }
   get Logo4Invalid(){
     return this.Logo4?.touched && !this.Logo4?.valid;
   }
   get Descripcion4(){
    return this.form.get("descripcion4");
   } 
   get Descripcion4Invalid(){ 
    return this.Descripcion4?.touched && !this.Descripcion4?.valid;
   }


    onEnviar(event: Event){
      event.preventDefault; 
   
      if (this.form.valid){
        alert("Todo salio bien ¡Enviar formuario!")
      }else{  
        this.form.markAllAsTouched();
        alert("Algo salio MAL ¡Reintentar!")
      }
   
    }

}
