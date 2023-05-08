import { Component, OnInit } from '@angular/core';
import { ServiciosPortfolioService } from 'src/app/servicios/servicios-portfolio.service';

@Component({
  selector: 'app-habilidad',
  templateUrl: './habilidad.component.html',
  styleUrls: ['./habilidad.component.css']
})
export class HabilidadComponent implements OnInit {
   seccion= "Hard y Soft Skills:" ;
   habilidades: any = [];
   iconFlecha: string = "";
   enlaceMenu: string = "";

  constructor(private serviciosPortfolio:ServiciosPortfolioService) {}

  ngOnInit(): void {
    this.serviciosPortfolio.getDatos().subscribe(miproyecto => {
      console.log(miproyecto);
      //definir informacion a mostrar
      this.habilidades=miproyecto.habilidades;
      this.iconFlecha=miproyecto.iconFlecha;
      this.enlaceMenu=miproyecto.enlaceMenu;
     
    });
  }
}
