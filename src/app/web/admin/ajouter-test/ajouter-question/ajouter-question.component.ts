import { Component, OnInit } from '@angular/core';

import { Router,ActivatedRoute } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';
import { TestsService } from 'src/app/services/Test/tests.service';
@Component({
  selector: 'app-ajouter-question',
  templateUrl: './ajouter-question.component.html',
  styleUrls: ['./ajouter-question.component.css']
})
export class AjouterQuestionComponent implements OnInit {
  
  constructor(
    private testservice:TestsService,
    private route:ActivatedRoute,
    private router : Router ,
    private tokenStorageService:TokenStorageService)  
    { }

    Question = {
    label:'',
    test:'',
    }
    Reponse1={
      label:'',
      est_correct:false,
      question:''
    }
    Reponse2={
      label:'',
      est_correct:false,
      question:''
    }
    Reponse3={
      label:'',
      est_correct:false,
      question:''
    }
    Reponse4={
      label:'',
      est_correct:false,
      question:''
    }
    isSuccessful=false ;
    Reponse11
    currentTest;
    eeeeeeeeeeeeee
    errorr
  ngOnInit(): void {
    this.getTest(this.route.snapshot.paramMap.get('id')); //get l'id de test from cureent route
  }
  /***** get test with her id ******/
  getTest(id): void
   {
    this.testservice.getTest(id)
      .subscribe(
        data => {
          this.currentTest = data;
          //console.log(data);
        },
        error => {
          console.log(error);
        });
   }
  /***** ajouter Question with reponses */
  Ajouter(): void {
        const data = {
          label: this.Question.label, // get label inserte by user
          test: this.currentTest.id, // get l'id de test
        };
        //ajouter question 
       this.testservice.ajouterQuestion(data)
       .subscribe(
         response => {
          this.isSuccessful=true
          //window.location.reload(); 
           //console.log(response);
           const Reponse1 = {
            label: this.Reponse1.label, //get label inserte by user
            est_correct:this.Reponse1.est_correct, //get l'etat de reponse inserte
            question:response.id, // récupere l'id de question apres l'insertion
          };
          const Reponse2 = {
            label: this.Reponse2.label,
            est_correct:this.Reponse2.est_correct,
            question:response.id,
          };
          const Reponse3 = {
            label: this.Reponse3.label,
            est_correct:this.Reponse3.est_correct,
            question:response.id,
          };
          const Reponse4 = {
            label: this.Reponse4.label,
            est_correct:this.Reponse4.est_correct,
            question:response.id,
          };
                      /***ajouter Reponse 1 *******/
            this.testservice.ajouterReponse(Reponse1).subscribe(
            response => {
              console.log(response);
            }, error => {
              console.log(error);
            });
                        /***ajouter Reponse 2 *******/
            this.testservice.ajouterReponse(Reponse2).subscribe(
              response => {
                console.log(response);
              }, error => {
                console.log(error);
              });               
                         /***ajouter Reponse 3 *******/
              this.testservice.ajouterReponse(Reponse3).subscribe(
              response => {
                console.log(response);
              }, error => {
                console.log(error);
              });
                          /***ajouter Reponse 4 *******/
              this.testservice.ajouterReponse(Reponse4).subscribe(
                response => {
                  console.log(response);
                }, error => {
                  console.log(error);
                });
                
          },
       
         error => {
           console.log(error);
         });
        
              this.router.navigate(['/dashboard/admin/list-test']);  
  }

  Deconnexion(): void {
    this.tokenStorageService.signOut();
    this.router.navigate(['/auth/login']);
  }

  ajuterplus(): void {
    const data = {
      label: this.Question.label,
      test: this.currentTest.id,
    };
   this.testservice.ajouterQuestion(data)
   .subscribe(
     response => {
      this.isSuccessful=true
      //window.location.reload(); 
       //console.log(response);
            const Reponse1 = {
              label: this.Reponse1.label,
              est_correct:this.Reponse1.est_correct,
              question:response.id,
            };
            const Reponse2 = {
              label: this.Reponse2.label,
              est_correct:this.Reponse2.est_correct,
              question:response.id,
            };
            const Reponse3 = {
              label: this.Reponse3.label,
              est_correct:this.Reponse3.est_correct,
              question:response.id,
            };
            const Reponse4 = {
              label: this.Reponse4.label,
              est_correct:this.Reponse4.est_correct,
              question:response.id,
            };
                        /***ajouter Reponse 1 *******/
              this.testservice.ajouterReponse(Reponse1).subscribe(
              response => {
               // console.log(response);
              }, error => {
                console.log(error);
              });
                          /***ajouter Reponse 2 *******/
              this.testservice.ajouterReponse(Reponse2).subscribe(
                response => {
                  //console.log(response);
                }, error => {
                  console.log(error);
                });               
                           /***ajouter Reponse 3 *******/
                this.testservice.ajouterReponse(Reponse3).subscribe(
                response => {
                  //console.log(response);
                }, error => {
                  console.log(error);
                });
                            /***ajouter Reponse 4 *******/
                this.testservice.ajouterReponse(Reponse4).subscribe(
                  response => {
                    //console.log(response);
                  }, error => {
                    console.log(error);
                  });
                  window.location.reload();   
                  
     },
     
     error => {
       this.errorr=error.error.label
       console.log(error);
     });
    
               
  }
}
