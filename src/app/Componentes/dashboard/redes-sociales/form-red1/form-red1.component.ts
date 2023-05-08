import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-red1',
  templateUrl: './form-red1.component.html',
  styleUrls: ['./form-red1.component.css']
})
export class FormRed1Component  implements OnInit{
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
