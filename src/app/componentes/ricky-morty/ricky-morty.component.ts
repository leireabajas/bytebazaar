import { Component, OnInit } from '@angular/core';
import { Rickymorty } from '../../Common/rickymorty';
import { APIServiceService } from '../../data/apiservice.service';
import { RouterLink } from '@angular/router';
import { NabvarComponent } from '../nabvar/nabvar.component';


@Component({
  selector: 'app-ricky-morty',
  standalone: true,
  imports: [RouterLink,NabvarComponent],
  templateUrl: './ricky-morty.component.html',
  styleUrl: './ricky-morty.component.css'
})
export class RickyMortyComponent implements OnInit{
  personajesRyM!: Rickymorty;
  constructor(private apiService: APIServiceService){}

  ngOnInit(): void {
    this.loadPersonajesRyM();
  }
  loadPersonajesRyM(){
    this.apiService.getPersonajesRyM().subscribe(
      {
        next: (data) =>{
          
          this.personajesRyM = data
        },
        error: err => {
         
        },
        complete: () =>{
          
        }
      }
    )
  }

  loadPage(page: string){ //funcion que conecta con el servicio
    this.apiService.getPage(page).subscribe(
      {
        next:(data) =>{
          this.personajesRyM = data;
          
        },
        error: err => {
          
        },
        complete: () =>{
        
        }
      }
    )
  }
  
  

  generarNumeroAleatorio(): void {
    const randomNumber = Math.floor(Math.random() * 826) + 1;
    let descuento = 0;

    if (randomNumber >= 1 && randomNumber <= 300) {
        descuento = 5;
    } else if (randomNumber >= 301 && randomNumber <= 401) {
        descuento = 10;
    } else if (randomNumber >= 402 && randomNumber <= 600) {
        descuento = 15;
    } else if (randomNumber >= 601 && randomNumber <= 750) {
        descuento = 20;
    } else {
        descuento = 25;
    }

    alert('Te ha tocado esta tarjeta: ' + randomNumber + ', obtienes un ' + descuento + '% de descuento');
  }

  CambiaPagina(page: string){
    switch(page){
      case 'Anterior':
        this.loadPage(this.personajesRyM.info.prev)
      break;
      case 'Primera':
        this.loadPage('https://rickandmortyapi.com/api/character/?page=1')
      break;
      case 'Ultima':
        this.loadPage('https://rickandmortyapi.com/api/character/?page='+ this.personajesRyM.info.pages)
      break;
      case 'Penultima':
        this.loadPage('https://rickandmortyapi.com/api/character/?page='+ (this.personajesRyM.info.pages -1))
      break;
      case 'Siguiente':
        this.loadPage(this.personajesRyM.info.next)
      break;
      
    }
  }
}
