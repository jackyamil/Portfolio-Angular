import { Component, OnInit } from '@angular/core';
import { ServiciosPortfolioService } from 'src/app/servicios/servicios-portfolio.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit{
//crear variable de instancia para almacenar los datos con los que trata el servicio
  nombre: string = '';
  apellido: string = '';
  puesto: string = '';
  fotoPerfil: string = '';
  alt: string ='';
  sobreMi: string = '';
  iconFlecha: string = '';
  enlaceMenu: string = '';
 


  constructor(
    //inyectar el servicio para tener acceso en la clase a los metodos
    private serviciosPortfolio:ServiciosPortfolioService) { }

  ngOnInit(): void {
    //esto es almacenar en la variable de instancia los datos recuperados por el servicio
    this.serviciosPortfolio.getDatos().subscribe(miproyecto => {
      console.log(miproyecto);
      //definir informacion a mostrar
      this.nombre=miproyecto.nombre;
      this.apellido=miproyecto.apellido;
      this.puesto=miproyecto.puesto;
      this.fotoPerfil=miproyecto.fotoPerfil;
      this.alt=miproyecto.alt;
      this.iconFlecha=miproyecto.iconFlecha;
      this.sobreMi=miproyecto.sobreMi;
      this.enlaceMenu=miproyecto.enlaceMenu;
    });
  }

}
