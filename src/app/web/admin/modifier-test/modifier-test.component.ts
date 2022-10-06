import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { TestsService } from 'src/app/services/Test/tests.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-modifier-test',
  templateUrl: './modifier-test.component.html',
  styleUrls: ['./modifier-test.component.css']
})
export class ModifierTestComponent implements OnInit {
  currentTest = null;
  message="";
  isSuccessful = false;
  constructor(
    private testService:TestsService ,
    private route:ActivatedRoute,
    private tokenStorageService:TokenStorageService,
    private router:Router  ) { }
    categories;
  ngOnInit(): void {
    this.getcategorie().subscribe((res) => {
      this.categories = res;
    });
    this.getTest(this.route.snapshot.paramMap.get('id'));
  }
  
  getTest(id): void {
    this.testService.getTest(id)
      .subscribe(
        data => {
          this.currentTest = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  ModifierTest(): void {
    this.testService.ModifierTest(this.currentTest.id, this.currentTest)
      .subscribe(
        response => {
          console.log(response);
          this.isSuccessful=true ;
          this.message = 'Le test a été modifié avec succès!!';

        },
        error => {
          console.log(error);
        });
  }
  getcategorie(){
    return this.testService.getcategorie();
  }
  Deconnexion(): void {
    this.tokenStorageService.signOut();
    this.router.navigate(['/auth/login']);
  }
}
