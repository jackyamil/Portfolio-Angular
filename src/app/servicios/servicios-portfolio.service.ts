import { Injectable } from '@angular/core';
//esto es para suscribirse y recibir respuesta de forma asincrona
import { Observable } from 'rxjs';
//esto es para poder hacer las peticiones
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiciosPortfolioService {
//el http en minuscula se llama alias
  constructor(private http:HttpClient) { }

//metodo/funcion observable que debuelve los datos
  getDatos():Observable<any> {
    //se llama al Json con su path--ruta-, o bien, en su lugar se puede poner una Url para traer datos de un Json online
    return this.http.get('./assets/json/miproyecto.json')
  }  
}
