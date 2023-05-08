import { Component, OnInit } from '@angular/core';
import { ServiciosPortfolioService } from 'src/app/servicios/servicios-portfolio.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  copyright: string= "";
  contactos: any = [];
  enlaceMenu: string ="";
  iconFlecha: string = "";

  constructor(private serviciosPortfolio:ServiciosPortfolioService){}

  ngOnInit(): void {
    this.serviciosPortfolio.getDatos().subscribe(miproyecto => {
      console.log(miproyecto);
      this.copyright=miproyecto.copyright;
      this.contactos=miproyecto.contactos;
      this.enlaceMenu=miproyecto.enlaceMenu;
      this.iconFlecha=miproyecto.iconFlecha;
    })
  }

}
