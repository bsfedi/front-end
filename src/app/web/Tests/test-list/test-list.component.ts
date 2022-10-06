import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TestsService } from 'src/app/services/Test/tests.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css']
})
export class TestListComponent implements OnInit {
  Tests;
  currentUser;
  titre  = '';
  constructor(
    private http: HttpClient,
    private tests : TestsService,
    private tokenStorageService: TokenStorageService,
    private router:Router,
    private route:ActivatedRoute
  ) { }
  dure: number = 60;
  interval;
  minute:any = 0;
  seconde:any = 1;
  hidden=false
  id
  startTimer() {
    this.interval = setInterval(() => {
      if(this.seconde > 0) {
        this.seconde++;
        if(this.seconde==59){
          this.minute+=1 ;
          this.seconde=1;
          this.seconde++;
        }
        
      } 
    },1000)
  }
  pauseTimer() {
    clearInterval(this.interval);
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;

    this.gettestbycategorie(this.id).subscribe((res) => {
        console.log(this.id)
        this.Tests=res
        for( let test of this.Tests)
       
        if (test.etat==true){
        console.log(test.titre)
          this.hidden=true
        }
        console.log(this.Tests)
        console.log(res) });
    /*this.getTests().subscribe((res) => {
      this.Tests = res;
      console.log(this.Tests)
    });*/
    this.currentUser = this.tokenStorageService.getUser();
  }
  gettestbycategorie(id){
    return this.tests.gettestbycategorie(id);
      }
  passertest(){

    for(let test of this.Tests)
    this.router.navigate(['/tests/' + test.slug + '/resultat']);
  }
  ee(){
    if(!this.currentUser.user){
      this.router.navigate(['/auth/login']);
    }else{

    for(let test of this.Tests)
    this.router.navigate(['/tests/' + test.slug]);
  }
  }
  /*getTests() {
    return this.http.get(this.tests.Tests());
  }*/

  Rechercherpartitre(): void {
    this.tests.Rechercherpartitre(this.titre)
      .subscribe(
        data => {
          this.Tests = data;
          console.log(data);
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
