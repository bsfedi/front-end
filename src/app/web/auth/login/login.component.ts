import { AuthService } from  'src/app/services/auth.service'
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import {  FacebookLoginProvider } from 'angularx-social-login';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { UserService } from 'src/app/services/user.service';
import { TestsService } from 'src/app/services/Test/tests.service';
declare var FB:any ;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: any = {
    nom_utilisateur: null,
    password1: null
  };
  form2=new FormGroup({
    nom_utilisateur:new FormControl('',Validators.required)
  })
  form1:any={}
  
  user: SocialUser;
  loggedIn: boolean;
  currentUser:any;
  msg:any ;
  nom:any ;
  prenom:any ;
  email :any ;
  password :any ;
  nom_utilisateur :any;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  constructor(
    private authService: AuthService,
    private router: Router ,
    private tokenStorage: TokenStorageService,
    private SocialauthService: SocialAuthService,
    private userService:UserService,
    private TestsService:TestsService,
    private Fbuilder:FormBuilder,

  ) { }
  Userinfo=this.Fbuilder.group({
    nom_utilisateur:['',Validators.compose([Validators.required,Validators.pattern('[A-Za-z0-9]*')])]
  })
    Users
    aaaa
    auth_token
    form12: any = {
      authtoken: null,  
    };
   
  ngOnInit(): void {

    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
    this.SocialauthService.authState.subscribe((user) => {
      this.user = user;
      console.log("aaaaaa"+this.user);
    });
  }
  getUsers(){
    return this.userService.getAll()
  }
  
  signInWithGoogle(): void {
    this.SocialauthService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.googleauth()
     
  }
  googleauth(){
  this.SocialauthService.authState.subscribe((user) => {
    //console.log(user)
    //console.log(user.id)
    //this.tokenStorage.saveUser(user); 
    this.form12 = {
      auth_token: user.idToken,  
    };

  this.authService.logingoogle(this.form12).subscribe(
    data => {
      console.log(data)
      //this.isLoginFailed = false;
      //this.isLoggedIn = true;
      this.tokenStorage.saveUser(data); 
   
      this.currentUser = this.tokenStorage.getUser();
      //console.log(this.currentUser)
      if (this.currentUser.user.is_superuser==true){
        this.router.navigate(['dashboard/admin']);
      }
      else{
        this.router.navigate(['Accueil']);}

    },
    error => {
      console.log(error);
      
    }
  );
});}
signInWithFB(): void {
  this.SocialauthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  this.facebookauth()

}

facebookauth(){
  this.SocialauthService.authState.subscribe((user) => {
    console.log(user.authToken);
    //console.log(user.id)
    //this.tokenStorage.saveUser(user); 
    this.form12 = {
      auth_token: user.authToken,  
    };

  this.authService.loginfacebook(this.form12).subscribe(
    data => {
      console.log(data)
      //this.isLoginFailed = false;
      //this.isLoggedIn = true;
      this.tokenStorage.saveUser(data); 
   
      this.currentUser = this.tokenStorage.getUser();
      //console.log(this.currentUser)
      if (this.currentUser.user.is_superuser==true){
        this.router.navigate(['dashboard/admin']);
      }
      else{
        this.router.navigate(['Accueil']);}

    },
    error => {
      console.log(error);
      
    }
  );
});}


  signOut(): void {
    this.SocialauthService.signOut();
  }

  //form validator 
  onSubmit(): void {
    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken); 
        this.tokenStorage.saveUser(data);
        //console.log(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.currentUser = this.tokenStorage.getUser();
        //console.log(this.currentUser)

        if (this.currentUser.user.is_superuser==true){
          this.router.navigate(['dashboard/admin']);
        }
        else{
          this.router.navigate(['Accueil']);}
      },
      err => {
        Swal.fire('', err.error.message, 'error')

        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );

  }

  reloadPage(): void {
    window.location.reload();
  }

}
