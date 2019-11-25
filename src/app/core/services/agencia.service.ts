import { Injectable } from '@angular/core';
import { HOST } from '../../configs/var.constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Agencia } from '../../shared/models/Agencia';

@Injectable({
  providedIn: 'root'
})
export class AgenciaService {

  url = `${HOST}`;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'})
  };

  constructor(private http: HttpClient) { }

  // Accede a Backend
  listarAgencias() {
    return this.http.get<Agencia[]>(this.url + '/agencias');
  }

}
