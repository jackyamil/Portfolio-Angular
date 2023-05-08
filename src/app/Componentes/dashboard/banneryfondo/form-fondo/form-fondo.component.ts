import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-fondo',
  templateUrl: './form-fondo.component.html',
  styleUrls: ['./form-fondo.component.css']
})
export class FormFondoComponent  implements OnInit{
  form: FormGroup;
  
  constructor(private formBuilder: FormBuilder){ 
    ///Creamos el grupo de controles para el formulario 
    this.form= this.formBuilder.group({
      fondo:['', [Validators.required]],
      
   })
  
  }
   ngOnInit(){}
  
   get Fondo(){
    return this.form.get("fondo");
   }
  
   get FondoInvalid(){
     return this.Fondo?.touched && !this.Fondo?.valid;
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
