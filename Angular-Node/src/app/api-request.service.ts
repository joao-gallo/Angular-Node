import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pessoa } from './Pessoa';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {
  private apiUrl = 'http://localhost:7437/users';

  constructor(private http: HttpClient) { }
  getAll(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.apiUrl);
  }

  register(pessoa: Pessoa) {
    return this.http.post<Pessoa>(this.apiUrl, pessoa);
  }

  getOne(nome: string): Observable<any> {
    console.log(nome);

    const url = `${this.apiUrl}/${nome}`;
    return this.http.get<any>(url);
  }
}
