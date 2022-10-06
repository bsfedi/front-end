import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestsService } from '../services/Test/tests.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor(
    private http:HttpClient,
    private tests:TestsService,
    private tokenStorageService:TokenStorageService,
    private router :Router
  ) { }
  
    currentUser
    categories
  ngOnInit(): void {
    this.getcategorie().subscribe((res) => {
      this.categories = res;
    });
    this.currentUser = this.tokenStorageService.getUser();
  }

    Deconnexion(): void {
      this.tokenStorageService.signOut();
      this.router.navigate(['/auth/login']);
    }
    /* get liste of categorie*/
    getcategorie(){
      return this.tests.getcategorie();
    }
    /* get liste of tests by categorie */
    gettestbycategorie(id){
      this.tests.gettestbycategorie(id).subscribe((res) => {
        if(!this.currentUser.user){
            this.router.navigate(['/auth/login']);
        }
        else {this.categories=res}
      });
    }
}
