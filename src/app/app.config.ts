import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule, provideHttpClient } from '@angular/common/http'; // Agregamos esta importación para HttpClientModule

import { routes } from './app.routes';



export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),provideHttpClient()
    
  ]
};
