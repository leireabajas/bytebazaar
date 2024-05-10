import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data/data.service';
import { Producto } from '../../Common/producto';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-productos-destacados',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './productos-destacados.component.html',
  styleUrl: './productos-destacados.component.css'
})
export class ProductosDestacadosComponent implements OnInit{
  producto!: Producto;
  constructor(private dataService: DataService){

  }
  ngOnInit(): void {
    this.loadProductosDestacados();
  }

  loadProductosDestacados(){
    this.dataService.getProductosDestacados().subscribe(
    {
      next: (data) =>{
        console.log(data)
        this.producto = data
        
      },
      error: err => {
        console.log(err)
      },
      complete: () => {
        console.log('completado') 
      }
    }
    )
    }
  
}
