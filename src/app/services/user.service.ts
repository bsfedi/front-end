import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';
import { HttpHeaders } from '@angular/common/http';
const baseUrl = 'http://127.0.0.1:8000/api/modifier';
const baseUrl2 = 'http://127.0.0.1:8000/api/list-user/';
const baseUrl1 = 'http://127.0.0.1:8000/api/auth/modifier/password/' ;


@Injectable({
  providedIn: 'root'
})

export class UserService {
  currentUser;
  constructor(private http: HttpClient,
    private tokenStorageService:TokenStorageService) { }
    apiHost = 'http://127.0.0.1:8000/';
  httpHeaders = {'Content-Type': 'application/json'};
  headers() {
    
    this.currentUser = this.tokenStorageService.getUser();
    const token = this.currentUser.token
    if (token !== '') {
      this.httpHeaders['Authorization'] = 'Token ' + token;

    }

    return new HttpHeaders(this.httpHeaders);
  }
  /************ update User  **********/
  update(id, data): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
  /************** get User  **********/
  get(id): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }
  /********* get all the users *********/
  getAll(): Observable<any> {
    return this.http.get(baseUrl2);
  }
  /************ Update password *******/
  updatepassword(data,token): Observable<any> {
    return this.http.put(`${baseUrl1}`,data,token);
  }
  verify(id): Observable<any> {
    return this.http.get(`${this.apiHost}api/verify-email/${id}`) ;
  }
  nbreNouveauxinscrits(){return this.http.get(`${this.apiHost}nbreNouveauxinscritsAPI`);} /**** Get Categorie ****/
  
  nbreclientsnonactifs(){return this.http.get(`${this.apiHost}nbreclientsnonactifsAPI`);} /**** Get Categorie ****/
  
  motdepasseoublie(body){
    return this.http.post(this.apiHost + 'mot-de-passe-oublier', body)
  }
  nouveaumdp(body){
    return this.http.post(this.apiHost + 'nouveau-mdp', body)
  }
  public getimages1(id) {
    return this.http.get<any>(`${this.apiHost}image/${id}`);
  }

  public ajouterimageuser(id,data): Observable<any> {return this.http.put(`${this.apiHost}image/${id}`, data);}




}