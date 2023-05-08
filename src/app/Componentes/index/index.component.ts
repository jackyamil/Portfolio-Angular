import { Component, OnInit } from '@angular/core';
import { ServiciosPortfolioService } from 'src/app/servicios/servicios-portfolio.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  

  constructor( private serviciosPortfolio:ServiciosPortfolioService) { }

  ngOnInit(): void {
    this.serviciosPortfolio.getDatos().subscribe(miproyecto => {
     console.log(miproyecto);
     
    })
    
  }
}
