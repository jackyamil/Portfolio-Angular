import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-infopersonal',
  templateUrl: './form-infopersonal.component.html',
  styleUrls: ['./form-infopersonal.component.css']
})
export class FormInfopersonalComponent implements OnInit{
form: FormGroup;

constructor(private formBuilder: FormBuilder){ 
  ///Creamos el grupo de controles para el formulario 
  this.form= this.formBuilder.group({
    descripcion:['', [Validators.required, Validators.maxLength(500), Validators.minLength(100)]],
    
 })

}

 ngOnInit(){}

 get Descripcion(){
  return this.form.get("descripcion");
 }

 get DescripcionInvalid(){
   return this.Descripcion?.touched && !this.Descripcion?.valid;
 }


  onEnviar(event: Event){
    // Detenemos la propagación o ejecución del comportamiento submit de un form
    event.preventDefault; 
 
    if (this.form.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert("Todo salio bien ¡Enviar formuario!")
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.form.markAllAsTouched();
      alert("Algo salio MAL ¡Reintentar!")
    }
 
  }

}
