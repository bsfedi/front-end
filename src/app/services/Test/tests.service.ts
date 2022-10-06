import { Injectable } from '@angular/core';
import { TokenStorageService } from '../token-storage.service';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClient,HttpRequest,HttpEvent } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TestsService {
  currentUser;
  constructor(
    private tokenStorageService: TokenStorageService,
    private http: HttpClient) { }

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

  /******************** Sur bsh na5aliha*********************/
  public profilinguser(formData) {
    return this.http.post<any>(`${this.apiHost}profilingAPI/`, formData);
  }

  Repartitiondesclient(id):Observable<any> {
    return this.http.get(`${this.apiHost}Repartitiondesclient/${id}`);
  } 
  gettestspassedetails() {
    return this.apiHost + 'my-tests/';
  } 

  submitTest(body, slug) {
    return this.http.post(this.apiHost + 'tests/' + slug + "/submit/", 
    body, 
    {headers: this.headers()});
  }

  /**********  Reponse API ********/

  ajouterReponse(data): Observable<any> {
    return this.http.post(`${this.apiHost}Reponse/`, 
    data);
    }

  ModifierReponses(id,data): Observable<any> 
    {return this.http.put(`${this.apiHost}Reponse/${id}/`, 
    data);
    }
                                      
  /*********** Enregistre Reponse  **********/
  enregistrerreponse(body) {
    return this.http.post(this.apiHost + 'enregistrer-reponse/', 
    body, 
    {headers: this.headers()});
    }

    getReponsetest(id,idquet): Observable<any> {
      return this.http.get(`${this.apiHost}updatereponse/${id}/${idquet}/`);
    }

    ModifierReponse(id,idquestion,data): Observable<any> {
      return this.http.put(`${this.apiHost}updatereponse/${id}/${idquestion}/`, 
      data);
    } 

    /**************  Question ************/

    /*********** Ajouter Question  **********/
    ajouterQuestion(data): Observable<any> { 
      return this.http.post(`${this.apiHost}Question/`, 
      data);
    } 

    /*********** Modifier Question **********/                          
    ModifierQuestion(id,data): Observable<any> {
      return this.http.put(`${this.apiHost}Question/${id}`, 
      data);
    } 
                                         
    SupprimerQuestion(id){return this.http.delete(`${this.apiHost}Question/${id}`);} /*********** Supprimer Question **********/ 
                                   
    /*********** get Question detail  **********/
    getquestion(id): Observable<any> {
      return this.http.get(`${this.apiHost}QuestionDetailAPI/${id}`);
    }   

    gettestbycategorie(id){
      return this.http.get(`${this.apiHost}Categorie/${id}/tests/`);
    }

    nbtestpasse(){return this.apiHost +'nbtestpasse/'}
    getlisteTestsPassebyid(id) {return this.apiHost + `tests-passe-list/${id}`;}
    getlisteTestsPasse(id) {return this.apiHost + `my-tests-passe/${id}`;}
    test(slug: string) {return this.apiHost + 'tests-detail/' + slug + "/";}    /*********** get Test for client  **********/
    infotest(slug: string) {return this.apiHost + 'InfoTestDetailAPI/' + slug + "/";}    /*********** get Test for client  **********/
    updateinfotest(id, data): Observable<any> {return this.http.put(`${this.apiHost}UpdateInfoTestDetailAPI/${id}`, data);}
    ModifierTest(id, data): Observable<any> {return this.http.put(`${this.apiHost}modifier-test/${id}`, data);} /*********** Modifier Test  **********/
    getTest(id): Observable<any> {return this.http.get(`${this.apiHost}get-test/${id}`);}     /*********** get Test detail  **********/
    Tests() {return this.apiHost + 'Tests-list/';}  /*********** get test liste for client  **********/
    AjouterTest(data): Observable<any> {return this.http.post(`${this.apiHost}Test/`, data);} /*********** Ajouter  Test **********/
    getdetailTestadmin(slug:string){return this.apiHost + 'tests-detail/admin/' + slug + "/";}       /*********** get Test detail for admin  **********/
    nbtestpasseparusers(){return this.apiHost +'nbtestpasseparusers/'}  
    Cahtbot(ee) {return this.http.post(this.apiHost + 'Chatboteee/',ee)}
    /**************** Categorie ***********/
    
  getcategorie(){return this.http.get(`${this.apiHost}Categorie/`);} /**** Get Categorie ****/

  ajoutercategorie(data){return this.http.post(`${this.apiHost}Categorie/`, data);} /**** Ajouter Categorie ****/
                                                            
  deletecategorie(id){return this.http.delete(`${this.apiHost}Supprimer/Categorie/${id}`);} /**** Supprimer Categorie ****/

  AllTestPassList(){return this.http.get(`${this.apiHost}alltestpasselistAPI/`);} /**** Get Categorie ****/


  /************************************************ */
  /************************************************ */
  /************************************************ */
  /************************************************ */



  
                                          
  Rechercherpartitre(titre): Observable<any> {return this.http.get(`${this.apiHost}Test?titre=${titre}`);}     /*********** get Test by tittre  **********/



  

}