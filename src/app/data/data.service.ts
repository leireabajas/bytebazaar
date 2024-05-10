import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../Common/producto';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

   getProductosDestacados(): Observable<Producto>{
    return this.http.get<Producto>('./assets/data/data.json')
   }
}
