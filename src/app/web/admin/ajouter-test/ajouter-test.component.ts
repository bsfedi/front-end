import { Component, OnInit } from '@angular/core';
import {TestsService} from 'src/app/services/Test/tests.service';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-ajouter-test',
  templateUrl: './ajouter-test.component.html',
  styleUrls: ['./ajouter-test.component.css']
  
})
export class AjouterTestComponent implements OnInit {

  constructor(
    private testservice:TestsService,
    private tokenStorageService : TokenStorageService,
    private router:Router
  ) { }
  
  Users;
  test1 = {
    id:'',
    titre:'',
    description:'',
    dure:'',
    Niveau:'',
    slug:'',
    etat:'',
    categorie:''

  }
  getcategorie(){
    return this.testservice.getcategorie();
  }
  categories;
  ngOnInit(): void {
    this.getcategorie().subscribe((res) => {
      this.categories = res;
    });
  }
  /**** Add Test  *****/
  onSubmit(): void {
    const data1 = { /**data of test **/
      id:this.test1.id, 
      titre: this.test1.titre, //récupérer title of test inseré
      description: this.test1.description, //récupérer description of test inseré
      dure: this.test1.dure, //récupérer dureé of test inseré
      Niveau: this.test1.Niveau, //récupérer Niveau of test inseré
      slug: this.test1.slug, //récupérer slug of test inseré
      etat: this.test1.etat, //récupérer etat of test inseré
      categorie:this.test1.categorie   //récupérer categorie of test inseré
     };
     //Ajouter nouveau test
      this.testservice.AjouterTest(data1) 
      .subscribe(
        response => {
          console.log(response);
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
