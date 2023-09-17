import { Injectable } from '@angular/core';
import { AppSettings } from '../app-settings';
import { HttpClient } from '@angular/common/http';
import { Pais } from '../models/pais.model';
import { Observable } from 'rxjs';



const url = AppSettings.API_ENDPOINT + '/pais'

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private http:HttpClient) { }


  listaPaises(): Observable<Pais[]>{
    return this.http.get<Pais[]>(url+"/lista");
  }
}
