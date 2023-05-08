import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent implements OnInit{
  form: FormGroup;

  constructor(private formBuilder: FormBuilder){ 
   this.form= this.formBuilder.group({
     password:['', [Validators.required, Validators.minLength(8), Validators.pattern("(?=.[A-Z])[a-zA-Z]*")]],
     email:['', [Validators.required, Validators.email]],
  })
}
  ngOnInit(){ }
 
  get Password(){
    return this.form.get("password");
   }
   get Mail(){
    return this.form.get("email");
   }
 
   get PasswordInvalid(){
     return this.Password?.touched && !this.Password?.valid;
   }
 
   get MailInvalid() {
     return this.Mail?.touched && !this.Mail?.valid;
   }
   get PasswordValid(){
    return this.Password?.valid;
  }

  get MailValid() {
    return this.Mail?.valid;
  }
 
 
   onEnviar(event: Event){
     // Detenemos la propagación o ejecución del comportamiento submit de un form
     event.preventDefault; 
  
     if (this.form.valid){
       alert("Todo salio bien ¡Enviar formuario!")
     }else{    
       this.form.markAllAsTouched();
       alert("Todo salio MAL ¡Reintentar!")
     }
  
   }
 
 
 }
 

 
 







