import { Component, OnInit } from '@angular/core';
import { ServiciosPortfolioService } from 'src/app/servicios/servicios-portfolio.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  banner: string= "";
  altBanner: string="";

  constructor(private serviciosPortfolio:ServiciosPortfolioService){}
  ngOnInit(): void {
    this.serviciosPortfolio.getDatos().subscribe(miproyecto => {
      console.log(miproyecto);
      this.banner=miproyecto.banner;
    })
  }
  

}
