import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TokenStorageService} from 'src/app/services/token-storage.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './web/auth/auth.component';
import { LoginComponent } from './web/auth/login/login.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angularx-social-login';

import { UserprofileComponent } from './web/auth/userprofile/userprofile.component';
import { RegisterComponent } from './web/auth/register/register.component';
import { ProfilComponent } from './web/profil/profil.component';
import { CommonModule } from '@angular/common';
import { ChangemdpComponent } from './web/changemdp/changemdp.component';
import { AdminComponent } from './web/admin/admin.component';
import { TestListComponent } from './web/Tests/test-list/test-list.component';
import { TestDetailComponent } from './web/Tests/test-detail/test-detail.component';
import { QuestionComponent } from './web/Tests/test-detail/question/question.component';
import { AjouterTestComponent } from './web/admin/ajouter-test/ajouter-test.component';
import { AjouterQuestionComponent } from './web/admin/ajouter-test/ajouter-question/ajouter-question.component';
import { AjouterReponseComponent } from './web/admin/ajouter-test/ajouter-question/ajouter-reponse/ajouter-reponse.component';
import { ListeTestsComponent } from './web/admin/liste-tests/liste-tests.component';
import { ModifierTestComponent } from './web/admin/modifier-test/modifier-test.component';
import { DetailTestComponent } from './web/admin/detail-test/detail-test.component';
import { ReponseComponent } from './web/Tests/test-detail/question/reponse/reponse.component';
import { ModifierQuestionComponent } from './web/admin/detail-test/modifier-question/modifier-question.component';
import { CategorieComponent } from './web/admin/categorie/categorie.component';
import { AjouterCategorieComponent } from './web/admin/categorie/ajouter-categorie/ajouter-categorie.component';
import { TestpasseComponent } from './web/tests/test-detail/testpasse/testpasse.component';
import { TestResultatComponent } from './web/tests/test-resultat/test-resultat.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccueilComponent } from './accueil/accueil.component';
import { DashboardComponent } from './web/dashboard/dashboard.component';
import { TestsPasseListeComponent } from './web/tests-passe-liste/tests-passe-liste.component';
import { DashboardAdminComponent } from './web/admin/dashboard-admin/dashboard-admin.component';
import { VerifieEmailComponent } from './web/verifie-email/verifie-email.component';
import { ChangeMdpOublieComponent } from './web/change-mdp-oublie/change-mdp-oublie.component';
import { NouveauMotDePasseComponent } from './web/change-mdp-oublie/nouveau-mot-de-passe/nouveau-mot-de-passe.component';
import { ProfilingComponent } from './web/profiling/profiling.component';  
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    UserprofileComponent,
    RegisterComponent,
    ProfilComponent,
    ChangemdpComponent,
    AdminComponent,
    TestListComponent,
    TestDetailComponent,
    QuestionComponent,
    AjouterTestComponent,
    AjouterQuestionComponent,
    AjouterReponseComponent,
    ListeTestsComponent,
    ModifierTestComponent,
    DetailTestComponent,
    ReponseComponent,
    ModifierQuestionComponent,
    CategorieComponent,
    AjouterCategorieComponent,
    TestpasseComponent,
    TestResultatComponent,
    AccueilComponent,
    DashboardComponent,
    TestsPasseListeComponent,
    DashboardAdminComponent,
    VerifieEmailComponent,
    ChangeMdpOublieComponent,
    NouveauMotDePasseComponent,
    ProfilingComponent,


    
  ],
  imports: [
    
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SocialLoginModule,
    BrowserAnimationsModule,
    
  ],
  providers: [
    CookieService,
    UserService,
    AuthService,
    TokenStorageService,

    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '583676920462-a5ii78agig0qa7eq6at581oh52qr3755.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('871826260342751')
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
