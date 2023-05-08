import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './Componentes/index/index.component';
import { RegistroComponent } from './Componentes/registro/registro.component';
import { LoginComponent } from './Componentes/login/login.component';
import { DashboardComponent } from './Componentes/dashboard/dashboard.component';
import { Pagina404Component } from './Componentes/pagina404/pagina404.component';

const routes: Routes = [
  {path:'', component:IndexComponent},
  {path:'registro', component: RegistroComponent},
  {path:'login', component: LoginComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'**', component:Pagina404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
