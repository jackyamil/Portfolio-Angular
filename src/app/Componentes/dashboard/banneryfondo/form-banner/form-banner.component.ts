import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-banner',
  templateUrl: './form-banner.component.html',
  styleUrls: ['./form-banner.component.css']
})
export class FormBannerComponent  implements OnInit{
  form: FormGroup;
  
  constructor(private formBuilder: FormBuilder){ 
   
    this.form= this.formBuilder.group({
      banner:['', [Validators.required]],
      
   })
  
  }
   ngOnInit(){}
  
   get Banner(){
    return this.form.get("banner");
   }
  
   get BannerInvalid(){
     return this.Banner?.touched && !this.Banner?.valid;
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
