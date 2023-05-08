import { Component, OnInit } from '@angular/core';
import { ServiciosPortfolioService } from 'src/app/servicios/servicios-portfolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logo: any=[];
  redes: any=[];
    constructor(private serviciosportfolioService:ServiciosPortfolioService) { }
  
    ngOnInit(): void {
      this.serviciosportfolioService.getDatos().subscribe(miproyecto => {
        console.log(miproyecto);
        this.logo=miproyecto.logo;
        this.redes=miproyecto.redes;
       
      });
    }
  

}
