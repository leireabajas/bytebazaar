import { Component } from '@angular/core';
import { NabvarComponent } from '../nabvar/nabvar.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NabvarComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
