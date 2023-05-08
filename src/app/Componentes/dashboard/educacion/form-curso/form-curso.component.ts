import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-curso',
  templateUrl: './form-curso.component.html',
  styleUrls: ['./form-curso.component.css']
})
export class FormCursoComponent  implements OnInit{
  form: FormGroup;
  
  constructor(private formBuilder: FormBuilder){ 
   
    this.form= this.formBuilder.group({
      nombre:['', [Validators.required, Validators.maxLength(30), Validators.minLength(10)]],
      url:['', [Validators.required,]],
      certificado:['', [Validators.required]],
      
    })
   
   }
    ngOnInit(){}
   
    get Certificado(){
     return this.form.get("certificado");
    }
   
    get CertificadoInvalid(){
      return this.Certificado?.touched && !this.Certificado?.valid;
    }
    get Nombre(){
      return this.form.get("nombre");
     }
   
     get NombreInvalid(){
       return this.Nombre?.touched && !this.Nombre?.valid;
     }
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
