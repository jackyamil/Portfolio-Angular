import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-empleo3',
  templateUrl: './form-empleo3.component.html',
  styleUrls: ['./form-empleo3.component.css']
})
export class FormEmpleo3Component implements OnInit{
  form: FormGroup;
  
  constructor(private formBuilder: FormBuilder){ 
    ///Creamos el grupo de controles para el formulario 
    this.form= this.formBuilder.group({
      logo:['', [Validators.required]],
      nombre:['', [Validators.required, Validators.maxLength(30), Validators.minLength(10)]],
      descripcion:['', [Validators.required, Validators.maxLength(500), Validators.minLength(100)]],
   })
  
  }
    ngOnInit(){}  

   get Logo(){
    return this.form.get("logo");
   }
   get LogoInvalid(){
     return this.Logo?.touched && !this.Logo?.valid;
   }
   get Nombre(){
    return this.form.get("nombre");
   }   
   get NombreInvalid(){
     return this.Nombre?.touched && !this.Nombre?.valid;   
   }
   get Descripcion(){
    return this.form.get("descripcion");
   } 
   get DescripcionInvalid(){ 
    return this.Descripcion?.touched && !this.Descripcion?.valid;
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
