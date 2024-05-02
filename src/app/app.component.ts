import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { NabvarComponent } from './componentes/nabvar/nabvar.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink,  NabvarComponent, 
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bytebazaar';
}
