import { Component, OnInit } from '@angular/core';
import { ServiciosPortfolioService } from 'src/app/servicios/servicios-portfolio.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  implements OnInit {
  logo: any=[];
 
    constructor(private serviciosportfolioService:ServiciosPortfolioService) { }
  
    ngOnInit(): void {
      this.serviciosportfolioService.getDatos().subscribe(miproyecto => {
        console.log(miproyecto);
        this.logo=miproyecto.logo;
      
       
      });
    }

}
