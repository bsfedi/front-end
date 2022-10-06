
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TestsService } from 'src/app/services/Test/tests.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-tests-passe-liste',
  templateUrl: './tests-passe-liste.component.html',
  styleUrls: ['./tests-passe-liste.component.css']
})
export class TestsPasseListeComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private tests : TestsService,
    private tokenStorageService: TokenStorageService,
    private router:Router,
    private route:ActivatedRoute
  ) { }
  currentUser
  Tests 
  image:any
  image1=false
  ngOnInit(): void {
    this.currentUser = this.tokenStorageService.getUser();
    this.getTests().subscribe((res) => {
      console.log(res)
      this.Tests = res;
      for (let test of this.Tests){
        if (test.score==test.score_max){
          this.image="/assets/26.jpg"
          this.image1=true
        }else{
          this.image="/assets/5.jpg"
          this.image1=false
        }
      }
      console.log(this.Tests)}
    );
  }
  Deconnexion(): void {
    this.tokenStorageService.signOut();
    this.router.navigate(['/auth/login']);
  }
  aa(){
    console.log(this.currentUser)
  }
  getinfoTest(slug: string) {
    return this.http.get(this.tests.infotest(slug),{headers: this.tests.headers()});
  }
  getTests() {
    return this.http.get(this.tests.gettestspassedetails(),{headers: this.tests.headers()});
  }
}
