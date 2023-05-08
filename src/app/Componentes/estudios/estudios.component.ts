import { Component, OnInit } from '@angular/core';
import { ServiciosPortfolioService } from 'src/app/servicios/servicios-portfolio.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent  implements OnInit {
  estudios: any = [];
  iconFlecha: string = "";
  enlaceMenu: string = "";
  seccion= "Estudios";

 constructor(private serviciosPortfolio:ServiciosPortfolioService) { }

 ngOnInit(): void {
   this.serviciosPortfolio.getDatos().subscribe(miproyecto => {
     console.log(miproyecto);
     this.estudios=miproyecto.estudios;
     this.iconFlecha=miproyecto.iconFlecha;
     this.enlaceMenu=miproyecto.enlaceMenu;
     
 });
}

}
