import { Component, OnInit } from '@angular/core';
import { ServiciosPortfolioService } from 'src/app/servicios/servicios-portfolio.service';

@Component({
  selector: 'app-barra-menu',
  templateUrl: './barra-menu.component.html',
  styleUrls: ['./barra-menu.component.css']
})
export class BarraMenuComponent implements OnInit{
  barraMenu: any = [];

  constructor(private serviciosPortfolio:ServiciosPortfolioService){}

  ngOnInit(): void {
    this.serviciosPortfolio.getDatos().subscribe(miproyecto =>{
      console.log(miproyecto);
      this.barraMenu=miproyecto.barraMenu;

    })
  }

}
