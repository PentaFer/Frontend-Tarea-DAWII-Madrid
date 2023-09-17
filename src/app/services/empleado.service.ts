import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppSettings } from '../app-settings';
import { AddEmpleados, Empleado } from '../models/empleado.model';
import { Observable } from 'rxjs';


const url = AppSettings.API_ENDPOINT + '/empleado'

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(private http:HttpClient) { }

  registrarEmpleado(objeto:AddEmpleados): Observable<any>{
    return this.http.post(url, objeto);
  }
}
