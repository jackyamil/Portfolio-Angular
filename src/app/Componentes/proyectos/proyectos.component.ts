import { Component, OnInit} from '@angular/core';
import { ServiciosPortfolioService } from 'src/app/servicios/servicios-portfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
   seccion= "Proyectos: " ;
   titulo= "mi primer proyecto";
   fecha= "2023";
   proyectos: any = [];
   iconFlecha: string = "";
   enlaceMenu: string = "";
 
   
  constructor(private serviciosPortfolio:ServiciosPortfolioService) {}

  ngOnInit(): void {
    this.serviciosPortfolio.getDatos().subscribe(miproyecto => {
      console.log(miproyecto);
      //definir informacion a mostrar
      this.proyectos=miproyecto.proyectos;
      this.iconFlecha=miproyecto.iconFlecha;
      this.enlaceMenu=miproyecto.enlaceMenu;
      
    });
  }
}
