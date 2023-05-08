import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-telefono',
  templateUrl: './form-telefono.component.html',
  styleUrls: ['./form-telefono.component.css']
})
export class FormTelefonoComponent  implements OnInit{
  form: FormGroup;
  
  constructor(private formBuilder: FormBuilder){ 
   
    this.form= this.formBuilder.group({
      telefono:['', [Validators.required, Validators.maxLength(30), Validators.minLength(10)]],
      
   })
  
  }
    ngOnInit(){}

    get Telefono(){
      return this.form.get("telefono");
     }
   
     get TelefonoInvalid(){
       return this.Telefono?.touched && !this.Telefono?.valid;
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
