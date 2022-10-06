import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TestsService } from 'src/app/services/Test/tests.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';
@Component({
  selector: 'app-detail-test',
  templateUrl: './detail-test.component.html',
  styleUrls: ['./detail-test.component.css']
})
export class DetailTestComponent implements OnInit {
  currentTest = null;
  slug;
  test:any ;
  message="";
  aa:any ;
  isSuccessful = false;
  constructor(
    private http: HttpClient,
    private tests : TestsService,
    private tokenStorageService: TokenStorageService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.slug = this.route.snapshot.params.slug;
    console.log(this.slug)
    this.getdetailTest(this.slug).subscribe((res) => {
      this.test = res['test'];
      //console.log(this.test.question_set.length)
      //this.aa =this.test['question_set']['0']['id'];
      //console.log(this.aa)
    });
  }

  getdetailTest(slug: string) {
    return this.http.get(this.tests.getdetailTestadmin(slug),{headers: this.tests.headers()});
  }

  getquestion(id):void{
    this.tests.getquestion(id)
    .subscribe(
      response => {
        //console.log(response);
        this.message = 'aaaaaaa';

      },
      error => {
        console.log(error);
      });
  }

  Deconnexion(): void {
    this.tokenStorageService.signOut();
    this.router.navigate(['/auth/login']);
  }

  SupprimerQuestion(id){

    this.tests.SupprimerQuestion(id)
    .subscribe(
      response => {
        console.log("question supprimé");

        window.location.reload();
      },
      error => {
        console.log(error);
      });
  }
}
