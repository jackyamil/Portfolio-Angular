import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-correo',
  templateUrl: './form-correo.component.html',
  styleUrls: ['./form-correo.component.css']
})
export class FormCorreoComponent implements OnInit {
  form: FormGroup;

   constructor(private formBuilder: FormBuilder){ 
    
    this.form= this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
   })

}
  ngOnInit(){}
 
  get Mail(){
   return this.form.get("email");
  }

  get MailInvalid() {
    return this.Mail?.touched && !this.Mail?.valid;
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
