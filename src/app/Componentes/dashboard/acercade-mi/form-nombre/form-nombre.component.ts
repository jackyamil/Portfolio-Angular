import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-nombre',
  templateUrl: './form-nombre.component.html',
  styleUrls: ['./form-nombre.component.css']
})
export class FormNombreComponent  implements OnInit{
  form: FormGroup;
  
  constructor(private formBuilder: FormBuilder){ 
   
    this.form= this.formBuilder.group({
      nombre:['', [Validators.required, Validators.maxLength(25), Validators.minLength(4)]],
      
   })
  
  }
    ngOnInit(){}

    get Nombre(){
      return this.form.get("nombre");
     }
   
     get NombreInvalid(){
       return this.Nombre?.touched && !this.Nombre?.valid;
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
