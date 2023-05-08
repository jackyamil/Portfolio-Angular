import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-primaria',
  templateUrl: './form-primaria.component.html',
  styleUrls: ['./form-primaria.component.css']
})
export class FormPrimariaComponent  implements OnInit{
  form: FormGroup;
  
  constructor(private formBuilder: FormBuilder){ 
   
    this.form= this.formBuilder.group({
      nombre:['', [Validators.required, Validators.maxLength(30), Validators.minLength(10)]],
      descripcion:['', [Validators.required, Validators.maxLength(500), Validators.minLength(100)]],
   })
  
  }
    ngOnInit(){}

    get Nombre(){
      return this.form.get("nombre");
     }
   
     get NombreInvalid(){
       return this.Nombre?.touched && !this.Nombre?.valid;
     }
     get Descripcion(){
      return this.form.get("descripcion");
     }
    
     get DescripcionInvalid(){
       return this.Descripcion?.touched && !this.Descripcion?.valid;
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
