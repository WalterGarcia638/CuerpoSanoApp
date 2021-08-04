import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { CSE_Ejercicio } from '../models/CSE_Ejercicio';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CSEEjercicioService {

  myAppUrl = 'https://localhost:44335/';
  myApiUrl = 'api/CSE_Ejercicio/';
  constructor(private http:HttpClient) { }

 getEjercicio(){
   return this.http.get(this.myAppUrl + this.myApiUrl);
 }

 guardarRegistro(ejercicio: CSE_Ejercicio): Observable<CSE_Ejercicio>{
  return this.http.post<CSE_Ejercicio>(this.myAppUrl + this.myApiUrl, ejercicio);
}
}
