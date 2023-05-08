import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-skills3',
  templateUrl: './form-skills3.component.html',
  styleUrls: ['./form-skills3.component.css']
})
export class FormSkills3Component implements OnInit{
  form: FormGroup;
  
  constructor(private formBuilder: FormBuilder){ 
   
    this.form= this.formBuilder.group({
      nombre:['', [Validators.required, Validators.maxLength(10), Validators.minLength(2)]],
      numero:['', [Validators.required, Validators.maxLength(3), Validators.minLength(1),]],
   })
  
  }
    ngOnInit(){}

    get Nombre(){
      return this.form.get("nombre");
     }
   
     get NombreInvalid(){
       return this.Nombre?.touched && !this.Nombre?.valid;
     }
     get Numero(){
      return this.form.get("numero");
     }
    
     get NumeroInvalid(){
       return this.Numero?.touched && !this.Numero?.valid;
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
