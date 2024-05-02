import { Component } from '@angular/core';
import { NabvarComponent } from '../nabvar/nabvar.component';
import { RegistroComponent } from '../registro/registro.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NabvarComponent, RegistroComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
