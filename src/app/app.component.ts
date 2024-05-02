import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NabvarComponent } from './componentes/nabvar/nabvar.component';
import { FooterComponent } from './componentes/footer/footer.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink,  NabvarComponent, FooterComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bytebazaar';
}
