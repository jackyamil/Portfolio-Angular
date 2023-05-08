import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Componentes/header/header.component';
import { BannerComponent } from './Componentes/banner/banner.component';
import { BarraMenuComponent } from './Componentes/barra-menu/barra-menu.component';
import { SobreMiComponent } from './Componentes/sobre-mi/sobre-mi.component';
import { TrabajosComponent } from './Componentes/trabajos/trabajos.component';
import { EstudiosComponent } from './Componentes/estudios/estudios.component';
import { HabilidadComponent } from './Componentes/habilidad/habilidad.component';
import { ProyectosComponent } from './Componentes/proyectos/proyectos.component';
import { FooterComponent } from './Componentes/footer/footer.component';
import { LoginComponent } from './Componentes/login/login.component';
import { RegistroComponent } from './Componentes/registro/registro.component';
import { DashboardComponent } from './Componentes/dashboard/dashboard.component';
import { IndexComponent } from './Componentes/index/index.component';
import { Pagina404Component } from './Componentes/pagina404/pagina404.component';
import { RedesSocialesComponent } from './Componentes/dashboard/redes-sociales/redes-sociales.component';
import { BanneryfondoComponent } from './Componentes/dashboard/banneryfondo/banneryfondo.component';
import { AcercadeMiComponent } from './Componentes/dashboard/acercade-mi/acercade-mi.component';
import { ExpeLaboralComponent } from './Componentes/dashboard/expe-laboral/expe-laboral.component';
import { EducacionComponent } from './Componentes/dashboard/educacion/educacion.component';
import { SkillsComponent } from './Componentes/dashboard/skills/skills.component';
import { MiProyectoComponent } from './Componentes/dashboard/mi-proyecto/mi-proyecto.component';
import { ContactoComponent } from './Componentes/dashboard/contacto/contacto.component';
import { BtncandadoAComponent } from './Componentes/dashboard/navbar/btncandado-a/btncandado-a.component';
import { BtncandadoCComponent } from './Componentes/header/btncandado-c/btncandado-c.component';
import { NavbarComponent } from './Componentes/dashboard/navbar/navbar.component';
import { FormFotoperfilComponent } from './Componentes/dashboard/acercade-mi/form-fotoperfil/form-fotoperfil.component';
import { FormNombreComponent } from './Componentes/dashboard/acercade-mi/form-nombre/form-nombre.component';
import { FormInfopersonalComponent } from './Componentes/dashboard/acercade-mi/form-infopersonal/form-infopersonal.component';
import { FormBannerComponent } from './Componentes/dashboard/banneryfondo/form-banner/form-banner.component';
import { FormFondoComponent } from './Componentes/dashboard/banneryfondo/form-fondo/form-fondo.component';
import { FormTelefonoComponent } from './Componentes/dashboard/contacto/form-telefono/form-telefono.component';
import { FormCorreoComponent } from './Componentes/dashboard/contacto/form-correo/form-correo.component';
import { FormPrimariaComponent } from './Componentes/dashboard/educacion/form-primaria/form-primaria.component';
import { FormSecundariaComponent } from './Componentes/dashboard/educacion/form-secundaria/form-secundaria.component';
import { FormCursoComponent } from './Componentes/dashboard/educacion/form-curso/form-curso.component';
import { FormEmpleoComponent } from './Componentes/dashboard/expe-laboral/form-empleo/form-empleo.component';
import { FormEmpleo2Component } from './Componentes/dashboard/expe-laboral/form-empleo2/form-empleo2.component';
import { FormEmpleo3Component } from './Componentes/dashboard/expe-laboral/form-empleo3/form-empleo3.component';
import { FormEmpleo4Component } from './Componentes/dashboard/expe-laboral/form-empleo4/form-empleo4.component';
import { FormEmpleo5Component } from './Componentes/dashboard/expe-laboral/form-empleo5/form-empleo5.component';
import { FormMyproyectComponent } from './Componentes/dashboard/mi-proyecto/form-myproyect/form-myproyect.component';
import { FormRed1Component } from './Componentes/dashboard/redes-sociales/form-red1/form-red1.component';
import { FormRed2Component } from './Componentes/dashboard/redes-sociales/form-red2/form-red2.component';
import { FormRed3Component } from './Componentes/dashboard/redes-sociales/form-red3/form-red3.component';
import { FormSkills1Component } from './Componentes/dashboard/skills/form-skills1/form-skills1.component';
import { FormSkills2Component } from './Componentes/dashboard/skills/form-skills2/form-skills2.component';
import { FormSkills3Component } from './Componentes/dashboard/skills/form-skills3/form-skills3.component';
import { FormSkills4Component } from './Componentes/dashboard/skills/form-skills4/form-skills4.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    BarraMenuComponent,
    SobreMiComponent,
    TrabajosComponent,
    EstudiosComponent,
    HabilidadComponent,
    ProyectosComponent,
    FooterComponent,
    LoginComponent,
    RegistroComponent,
    DashboardComponent,
    IndexComponent,
    Pagina404Component,
    RedesSocialesComponent,
    BanneryfondoComponent,
    AcercadeMiComponent,
    ExpeLaboralComponent,
    EducacionComponent,
    SkillsComponent,
    MiProyectoComponent,
    ContactoComponent,
    BtncandadoAComponent,
    BtncandadoCComponent,
    NavbarComponent,
    FormFotoperfilComponent,
    FormNombreComponent,
    FormInfopersonalComponent,
    FormBannerComponent,
    FormFondoComponent,
    FormTelefonoComponent,
    FormCorreoComponent,
    FormPrimariaComponent,
    FormSecundariaComponent,
    FormCursoComponent,
    FormEmpleoComponent,
    FormEmpleo2Component,
    FormEmpleo3Component,
    FormEmpleo4Component,
    FormEmpleo5Component,
    FormMyproyectComponent,
    FormRed1Component,
    FormRed2Component,
    FormRed3Component,
    FormSkills1Component,
    FormSkills2Component,
    FormSkills3Component,
    FormSkills4Component,
 
  
  ],  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
