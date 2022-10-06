
import { LoginComponent } from './web/auth/login/login.component';
import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './web/auth/auth.component';
import {UserprofileComponent} from './web/auth/userprofile/userprofile.component'
import {RegisterComponent} from './web/auth/register/register.component'
import {ProfilComponent} from './web/profil/profil.component';
import {ChangemdpComponent} from './web/changemdp/changemdp.component';
import { AdminComponent } from './web/admin/admin.component';
import { TestListComponent } from './web/Tests/test-list/test-list.component';
import { TestDetailComponent } from './web/Tests/test-detail/test-detail.component';
import { ListeTestsComponent } from './web/admin/liste-tests/liste-tests.component';

import { AjouterTestComponent } from './web/admin/ajouter-test/ajouter-test.component';
import { ModifierTestComponent } from './web/admin/modifier-test/modifier-test.component';
import { AjouterQuestionComponent } from './web/admin/ajouter-test/ajouter-question/ajouter-question.component';
import { DetailTestComponent } from './web/admin/detail-test/detail-test.component';
import { ModifierQuestionComponent } from './web/admin/detail-test/modifier-question/modifier-question.component';
import { CategorieComponent } from './web/admin/categorie/categorie.component';
import { AjouterCategorieComponent } from './web/admin/categorie/ajouter-categorie/ajouter-categorie.component';
import { TestResultatComponent } from './web/tests/test-resultat/test-resultat.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './web/dashboard/dashboard.component';
import { TestsPasseListeComponent } from './web/tests-passe-liste/tests-passe-liste.component';
import { DashboardAdminComponent } from './web/admin/dashboard-admin/dashboard-admin.component';
import { VerifieEmailComponent } from './web/verifie-email/verifie-email.component';
import { ChangeMdpOublieComponent } from './web/change-mdp-oublie/change-mdp-oublie.component';
import { NouveauMotDePasseComponent } from './web/change-mdp-oublie/nouveau-mot-de-passe/nouveau-mot-de-passe.component';
import { ProfilingComponent } from './web/profiling/profiling.component';
const routes: Routes = [
  { path: '', redirectTo: 'Accueil', pathMatch: 'full' },
  {path:'admin/dashboard',component:DashboardAdminComponent},
  { path: 'dashboard/admin', component: AdminComponent},
  {path:'dashboard/admin/list-test',component:ListeTestsComponent},
  {path:'dashboard/admin/modifier-test/:id',component:ModifierTestComponent},
  {path:'dashboard/admin/ajouter-question/:id',component:AjouterQuestionComponent},
  {path:'dashboard/admin/ajouter-test',component:AjouterTestComponent},
  {path: 'dashboard/profil/change mot de passe',component: ChangemdpComponent},
  {path: 'dashboard/admin/test-details/:slug',component: DetailTestComponent},
  {path:'tests/:slug',component:TestDetailComponent},
  {path:'dashboard/admin/modifier/:slug/modifier-question/:id',component:ModifierQuestionComponent},
  {path:'dashboard/admin/liste-categorie',component:CategorieComponent},
  {path:'dashboard/admin/categories/ajouter-categorie',component:AjouterCategorieComponent},
  {path:'tests/:slug/resultat',component:TestResultatComponent},
  {path:'Categorie/:id',component:TestListComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'tests',component:TestListComponent},
  {path:'mes-tests',component:TestsPasseListeComponent},
  {path:'Accueil',component:AccueilComponent},
  {path:'verifie-email',component:VerifieEmailComponent},
  {path:'mot-de-passe-oublié',component:ChangeMdpOublieComponent},
  {path:"nouveau-mot-de-passe",component:NouveauMotDePasseComponent},
  {path:"profiling",component:ProfilingComponent},
      {
        path: 'auth',
        component: AuthComponent,
        children: [
            {
              path: '',
              redirectTo: 'login',
              pathMatch: 'full'
            },
            {
              path: 'login',
              component: LoginComponent
            },
            {
              path: 'register',
              component: RegisterComponent
            }
          ]
      },

  {
    path: 'profile',
    component: UserprofileComponent,
    children: [
      {
        path: '',
        redirectTo: 'full',
        pathMatch: 'full'
      },

    ]
  },
  {path: 'tests', 
  component: TestListComponent,
  children: [
    {
      path: '',
      redirectTo: 'all',
      pathMatch: 'full'
    },
    {
      path: ':slug',
      component: TestDetailComponent
    },
  ]
},
  {
    path: 'dashboard/profil',
    component: ProfilComponent,
    children: [
      {
        path: '',
        redirectTo: 'profil',
        pathMatch: 'full'
      },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
