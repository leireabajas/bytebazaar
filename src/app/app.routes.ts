import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactoComponent } from './componentes/contacto/contacto.component';
import { HomeComponent } from './componentes/home/home.component';
import { MovilesComponent } from './componentes/catalogo/moviles/moviles.component';
import { RelojesComponent } from './componentes/catalogo/relojes/relojes.component';
import { GafasComponent } from './componentes/catalogo/gafas/gafas.component';
import { ImpresoraComponent } from './componentes/catalogo/impresora/impresora.component';

import { RegistroComponent } from './componentes/registro/registro.component';
import { LoginComponent } from './componentes/login/login.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';


// Importa otros componentes necesarios

export const routes: Routes = [
  
  
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component:HomeComponent },

  { path: 'notfound', component: NotFoundComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'moviles', component: MovilesComponent },
  { path: 'relojes', component: RelojesComponent },
  { path: 'gafas', component: GafasComponent },
  { path: 'impresora', component: ImpresoraComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent }

  // Agrega las otras rutas y componentes necesarios
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }