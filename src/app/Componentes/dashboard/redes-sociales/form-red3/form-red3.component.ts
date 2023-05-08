import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-red3',
  templateUrl: './form-red3.component.html',
  styleUrls: ['./form-red3.component.css']
})
export class FormRed3Component implements OnInit{
  form: FormGroup;
  
  constructor(private formBuilder: FormBuilder){ 
   
    this.form= this.formBuilder.group({
      url:['', [Validators.required,]],
      
    })
   
   }
    ngOnInit(){}
 
     get Url(){
      return this.form.get("url");
     }
   
     get UrlInvalid(){
       return this.Url?.touched && !this.Url?.valid;
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
