import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import {UserService} from 'src/app/services/user.service'
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-changemdp',
  templateUrl: './changemdp.component.html',
  styleUrls: ['./changemdp.component.css']
})
export class ChangemdpComponent implements OnInit {
  currentUser: any;
  message1:any ;
  message2: any
  form: any = {
    password:null,
    new_password: null,
    cnew_password:null,
  };
  ee;
  isSuccessful = null;
  isSuccessful1 = false;
  isSuccessfulconfirmation=false ;
  passwordactual=false ;
  isLoggedIn = false;
  isSuccessful2=false
  isLoginFailed = false;
  constructor(
    private router: Router ,
    private authService: AuthService,
    private route: ActivatedRoute,
    private tokenStorageService: TokenStorageService,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.currentUser = this.tokenStorageService.getUser();
  }
   direBonjour():void {
    console.log("Bonjour cher lecteur !!! ")
  }
  //this.userService.updatepassword(this.form),{headers: this.userService.headers()};
  onSubmit():void {
       
    this.userService.updatepassword(this.form,{headers: this.userService.headers()})
    .subscribe(
      response => {

        this.ee=response.message
        console.log(this.ee)
        if(this.ee=="Mot de passe mis à jour avec succès !"){
          this.isSuccessful=true
          this.isSuccessful1=false}
else{
          this.isSuccessful=false
          this.isSuccessful1=true
        }


        /*else if (this.form.new_password != this.form.cnew_password){
         
          this.isSuccessfulconfirmation=true ;
        }
        else{
          
          this.isSuccessful1=true;
        }*/
      },
      error => {
        console.log(error);
        this.isSuccessful=false
      });
  }
  Deconnexion(): void {
    this.tokenStorageService.signOut();
    this.router.navigate(['/auth/login']);
  }
}
