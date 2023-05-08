import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-fotoperfil',
  templateUrl: './form-fotoperfil.component.html',
  styleUrls: ['./form-fotoperfil.component.css']
})
export class FormFotoperfilComponent implements OnInit{
  form: FormGroup;
  
  constructor(private formBuilder: FormBuilder){ 
    ///Creamos el grupo de controles para el formulario 
    this.form= this.formBuilder.group({
      fotoperfil:['', [Validators.required]],
      
   })
  
  }
   ngOnInit(){}
  
   get Fotoperfil(){
    return this.form.get("fotoperfil");
   }
  
   get FotoperfilInvalid(){
     return this.Fotoperfil?.touched && !this.Fotoperfil?.valid;
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
