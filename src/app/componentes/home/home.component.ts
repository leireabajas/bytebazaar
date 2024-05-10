import { Component, OnInit } from '@angular/core';
import { NabvarComponent } from '../nabvar/nabvar.component';
import { ProductosDestacadosComponent } from '../productos-destacados/productos-destacados.component';





@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NabvarComponent,ProductosDestacadosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {}
