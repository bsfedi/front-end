import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TestsService } from 'src/app/services/Test/tests.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-liste-tests',
  templateUrl: './liste-tests.component.html',
  styleUrls: ['./liste-tests.component.css']
})
export class ListeTestsComponent implements OnInit {
  Tests;
  nbTests ;
  constructor(
    private http: HttpClient,
    private tests : TestsService,
    private tokenStorageService :TokenStorageService,
    private router:Router
    
    ) { }

  ngOnInit(): void {
    this.getTests().subscribe((res) => {
      this.Tests = res;
      for(let test of this.Tests)
      if (test.etat==false)
        test.etat="Affiché"
        else 
        test.etat="Caché"
      this.nbTests=this.Tests.length
      console.log(this.nbTests)
    });
  }
  getTests() {
    return this.http.get(this.tests.Tests());
  }
  
  Deconnexion(): void {
    this.tokenStorageService.signOut();
    this.router.navigate(['/auth/login']);
  }
}
