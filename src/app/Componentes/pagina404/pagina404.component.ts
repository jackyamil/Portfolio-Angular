import { Component, OnInit } from '@angular/core';
import { ServiciosPortfolioService } from 'src/app/servicios/servicios-portfolio.service';

@Component({
  selector: 'app-pagina404',
  templateUrl: './pagina404.component.html',
  styleUrls: ['./pagina404.component.css']
})
export class Pagina404Component implements OnInit {
  error404: any=[];
  

  constructor(private serviciosPortfolio:ServiciosPortfolioService){}
  ngOnInit(): void {
    this.serviciosPortfolio.getDatos().subscribe(miproyecto => {
      console.log(miproyecto);
      this.error404=miproyecto.error404;
    })
  }

}
