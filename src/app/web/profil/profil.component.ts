import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import {UserService} from 'src/app/services/user.service'

import { ActivatedRoute, Router } from '@angular/router';
import { TestsService } from 'src/app/services/Test/tests.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  currentUser: any; 
  isSuccessful = false;
  message='';
  constructor(
    private router: Router ,
    private authService: AuthService,
    private route: ActivatedRoute,
    private tests:TestsService,
    private http: HttpClient,
    private tokenStorageService: TokenStorageService,
    private userService: UserService,
    
  ) { }
  verifie
  ngOnInit(): void {
    this.message = '';
    this.currentUser = this.tokenStorageService.getUser();
    const id = this.currentUser.token ;
    console.log(id)

  }

  modifierClient():void {
    this.userService.update(this.currentUser.user.id,this.currentUser.user)
    .subscribe(
      data => {
        this.isSuccessful = true;
        this.tokenStorageService.saveToken(data.accessToken);
        this.tokenStorageService.saveUser(data);
        console.log(data);
        this.currentUser.user.est_verifie=true
        this.message = "L'utilisateur a été mis à jour avec succès !";
      },
      error => {
        console.log(error);
      });
  }
  Deconnexion(): void {
    this.tokenStorageService.signOut();
    this.router.navigate(['/auth/login']);
  }
}
