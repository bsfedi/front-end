import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TestsService } from 'src/app/services/Test/tests.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';
@Component({
  selector: 'app-test-detail',
  templateUrl: './test-detail.component.html',
  styleUrls: ['./test-detail.component.css']
})
export class TestDetailComponent implements OnInit {
  slug;
  selectedAnswer: number;
  test:any ;
  currentIndex : number =0;
  message:any ;
  reponses = [];
aa:any ;
  constructor(
    private http: HttpClient,
    private tests : TestsService,
    private router: Router,
    private route: ActivatedRoute,
    private tokenStorageService:TokenStorageService
  ) { }
    dure
  Tests:any ;
  TestsPasses ;
  minute:any = 0;
  seconde:any = 0;
  eeee=this.seconde
  interval;
  currentUser;
  show=false;
  form: any = {
    dure:null,

  };
aaa;
  ngOnInit(): void {
    this.slug = this.route.snapshot.params.slug;
    this.getTest(this.slug).subscribe((res) => {
      this.test = res['test']; 
      console.log(this.test)
      if(this.test.testpasses_set.termine) {
        this.router.navigate(['/tests/' + this.slug + '/resultat']);
      }
      this.initializeAnswers(); 
    });
    this.getinfoTest(this.slug).subscribe((res) => {
      
      console.log(res['test']['infotests_set'])
      
    });
    this.getTests().subscribe((res) => {
      this.Tests = res;
      
    });
    this.currentUser = this.tokenStorageService.getUser();
    }
    
 initializeAnswers() {
    const usersAnswers = this.test.testpasses_set.usersreponse_set;
    for(let i=0; i<usersAnswers.length; i++) {
      this.reponses.push(usersAnswers[i]['reponse']);
    }
    console.log(this.reponses);
  }
  submitQuiz(dure) {
    const body = {
      "testpasse": this.test.testpasses_set.id,
      "question": this.test.question_set[this.currentIndex].id,
      "reponse": this.selectedAnswer
    }
    this.getinfoTest(this.slug).subscribe((res) => {
      this.aaa=res['test']['infotests_set']
      this.form={
        dure:dure,
      };
      this.updateinfotest(this.aaa.id,this.form)
      
    });
    console.log(dure)
    this.tests.submitTest(body, this.slug).subscribe((res) => {
      this.router.navigate(['/tests/' + this.slug + '/resultat']);
    });
  }
  ee(){
    this.startTimer()
    this.show=true

  }
  startTimer() {
    this.interval = setInterval(() => {
      if(this.seconde >= 0) {
        this.seconde++;
        if(this.seconde==59){
          this.minute+=1 ;
          this.seconde=1;
          this.seconde++;
        }
        if(this.seconde>9){
          
        }
      } 
    },1000)
  }
  pauseTimer(value) {
    clearInterval(this.interval);
    console.log(value)
  }
  enregistrerreponse() {
    const body = {
      "testpasse": this.test.testpasses_set.id,
      "question": this.test.question_set[this.currentIndex].id,
      "reponse": this.selectedAnswer
    }

    this.tests.enregistrerreponse(body).subscribe((res) => {
      console.log(res);
    });
  }
  selectAnswer(id: number) {
    console.log("aaaé"+id);
    this.selectedAnswer = id;
    this.reponses[this.currentIndex] = id;
  }
  next1() {
    if(this.currentIndex === this.test.question_set.length-1) {
     // this.currentIndex += 1;  
      this.submitQuiz(0);
      return; }
      //this.aa =this.test['question_set'][this.currentIndex];
     // console.log(this.aa)
     if(this.selectedAnswer!=null){
       this.enregistrerreponse();
     }
     if(this.currentIndex !== this.test.question_set.length-1) {
      this.currentIndex += 1;
      this.selectedAnswer = null;

    }

  }
  previous() {
    if(this.currentIndex != 0) {
      this.currentIndex -= 1;  
    }
  }
  getTests() {
    return this.http.get(this.tests.Tests(),{headers: this.tests.headers()});
  }
  getTest(slug: string) {
    return this.http.get(this.tests.test(slug),{headers: this.tests.headers()});
  }
  getinfoTest(slug: string) {
    return this.http.get(this.tests.infotest(slug),{headers: this.tests.headers()});
  }
  updateinfotest(id,dure): void {
    this.tests.updateinfotest(id, dure)
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
