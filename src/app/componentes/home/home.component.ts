import { Component } from '@angular/core';
import { NabvarComponent } from '../nabvar/nabvar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NabvarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
