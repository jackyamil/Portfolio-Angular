import { Component, OnInit} from '@angular/core';
import { ServiciosPortfolioService } from 'src/app/servicios/servicios-portfolio.service';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.css']
})
export class TrabajosComponent implements OnInit {
   seccion="Experiencia Laboral:";
   trabajos: any = [];
   iconFlecha: string = "";
   enlaceMenu: string = "";

   
  constructor(private serviciosPortfolio:ServiciosPortfolioService) { }

  ngOnInit(): void {
    this.serviciosPortfolio.getDatos().subscribe(miproyecto => {
      console.log(miproyecto);
      this.trabajos=miproyecto.trabajos;
      this.iconFlecha=miproyecto.iconFlecha;
      this.enlaceMenu=miproyecto.enlaceMenu;
      
  });
}
}
