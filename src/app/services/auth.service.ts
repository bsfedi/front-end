import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://127.0.0.1:8000/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  apiHost = 'http://127.0.0.1:8000/';

  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'login/', {
      nom_utilisateur : credentials.nom_utilisateur,
      password :credentials.password
    }, httpOptions);
  }
  logingoogle(data): Observable<any>{ return this.http.post(`${this.apiHost}google/`, data, httpOptions); }
  loginfacebook(data): Observable<any>{ return this.http.post(`${this.apiHost}facebook/`, data, httpOptions); }

  register(user): Observable<any> {
    return this.http.post(AUTH_API + 'register/', {
      nom :user.nom,
      prenom:user.prenom,
      nom_utilisateur:user.nom_utilisateur,
      email:user.email,
      password:user.password
    }, httpOptions);
  }


}