import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TestsService } from 'src/app/services/Test/tests.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-test-resultat',
  templateUrl: './test-resultat.component.html',
  styleUrls: ['./test-resultat.component.css']
})
export class TestResultatComponent implements OnInit {

  constructor(
    private http :HttpClient,
    private tests:TestsService,
    private route:ActivatedRoute,
    private tokenStorageService:TokenStorageService,
    private router:Router
  ) { }
  slug ;
  test ;
  suc = false;
  aaa ;
  aaaa ;
  aaaa1 ;
  currentUser ;
  suc1 =false ;
  fauxreponse
  frep=false 
  Vraireponse
  Vrep=false
  categorie_id;
  currentIndex:any ;
  succes:any
  issucces=false
  nbrepcorrect=0
  nbrepincorrect=0
  question12
  ngOnInit(): void {

    this.slug = this.route.snapshot.params.slug;
    this.getTest(this.slug).subscribe((res) => {
      this.test = res['test'];
      
      if (this.test.testpasses_set.score>=this.test.score_max/2){
        this.succes="/assets/succes.png"
        this.issucces=true

      }else{
        this.succes="/assets/failed.png"
        this.issucces=false
      }
      for(let question of this.test['question_set'])
      this.currentIndex=question.label
        //this.currentIndex=question.label

      for(let question12 of this.test['testpasses_set']['usersreponse_set'])
      if(question12.est_correct==false){

        this.nbrepincorrect+=1
        this.frep=true
        this.Vrep=false
        question12.est_correct="/assets/incorrect.png"
 
      }
      for(let question12 of this.test['testpasses_set']['usersreponse_set'])

      if(question12.est_correct==true){
        this.nbrepcorrect+=1
        this.Vrep=true;
        this.frep=false;
        question12.est_correct="/assets/correct.png"

      }

      console.log(this.test)      
     });

     this.currentUser = this.tokenStorageService.getUser();
  }

  Deconnexion(): void {
    this.tokenStorageService.signOut();
    this.router.navigate(['/auth/login']);
  }

  getTest(slug: string) {
    return this.http.get(this.tests.test(slug),{headers: this.tests.headers()});
  }
}
