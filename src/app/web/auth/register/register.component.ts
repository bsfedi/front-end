import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { TokenStorageService } from 'src/app/services/token-storage.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {
    nom: null,
    prenom:null,
    nom_utilisateur:null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false; 
  errorMessage = '';
  message='';
  form12: any = {
    authtoken: null,  
  };
  currentUser:any;
  constructor(private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private SocialauthService: SocialAuthService,

    private router: Router) { }

  ngOnInit(): void {
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

        //this.router.navigate(['/Accueil']);

    },
    error => {
      console.log(error);
      
    }
  );
});}
  onSubmit(): void {
    
    this.authService.register(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        Swal.fire('Votre inscription est réussie!', 'merci de valider votre email .!', 'success')
        //this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.isSignUpFailed = false;
        /*this.router.navigate(['dashboard/profil']);*/
      },
      err => {
        Swal.fire('', err.error.message, 'error')

        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );

  }
} 