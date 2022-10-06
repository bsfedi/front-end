import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TestsService } from 'src/app/services/Test/tests.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-modifier-question',
  templateUrl: './modifier-question.component.html',
  styleUrls: ['./modifier-question.component.css']
})
export class ModifierQuestionComponent implements OnInit {
  message:any ;
  currentQuestion:any ;
  currentReponse:any ;
  isSuccessful = false;
  isSuccessful1 = false;
  id ;
  slug:any ;
  test:any ;
  reponse:any ={
    label:'',
    question:''
  } ;
  test1 = {
    id:'',
    titre:'',
    description:'',
    dure:'',
    Niveau:'',
    slug:'',
    etat:'',
    categorie:'',
    version:''

  }
  azeaze
  Reponse1={
    label:'',
    est_correct:false,
    question:null
  }
  Reponse2={
    label:'',
    est_correct:false,
    question:null
  }
  Reponse3={
    label:null,
    est_correct:false,
    question:null
  }
  Reponse4={
    label:null,
    est_correct:false,
    question:null
  }

eeeee=1
  Reponse11
  constructor(
    private http:HttpClient,
    private tests :TestsService,  
    private route:ActivatedRoute,
    private tokenStorageService :TokenStorageService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getquestion(this.route.snapshot.paramMap.get('id'));
    this.slug = this.route.snapshot.params.slug;

    this.getdetailTest(this.slug).subscribe((res) => {
      this.test = res['test'];
      console.log(res)

     // for(let i=0;i<ee1.length;i++)
     /* for(let aa of this.test.question_set[i].reponse_set){
        
      console.log(aa.label)
    }*/
      console.log(this.test.question_set.length)

    });
    

     }
 
    
  newtestversion1(): void {
    const data1 = { /**data of test **/
      id:this.test.id,
      titre: this.test.titre,
      description: this.test.description,
      dure: this.test.dure,
      Niveau: this.test.Niveau,
      version:1+this.test.version ,
      slug: this.test.slug +1+this.test.version ,
      etat: this.test.etat,
      categorie:this.test.categorie ,
  };
  const data2 = { /**data of test **/
    id:this.test.id,
    titre: this.test.titre +" "+this.test.date,
    description: this.test.description,
    dure: this.test.dure,
    Niveau: this.test.Niveau,
    version:this.test.version ,
    slug: this.test.slug  ,
    etat: !this.test.etat,
    categorie:this.test.categorie ,
};

    this.tests.ModifierTest(this.test.id, data2)
      .subscribe(
        response => {
          console.log(response);
          this.isSuccessful=true ;
          this.message = 'Le test a été modifié avec succès!!';

        },
        error => {
          console.log(error);
        });
  
      this.tests.AjouterTest(data1) 
      .subscribe(
        response => {
          this.azeaze=response
          console.log(this.azeaze)
          for (let ee of this.test.question_set){

            const data = {
              label: ee.label,
              test: this.azeaze.id,
            };
           this.tests.ajouterQuestion(data)
           .subscribe(
             response => {
              this.isSuccessful=true
              //window.location.reload(); 
               

                //for(let eeeee of ee1.reponse_set){
                  for (let i = 0; i < ee.reponse_set.length; i++) {
                    const Reponse1 = {
                      label: ee.reponse_set[i].label,
                      est_correct:ee.reponse_set[i].est_correct,
                      question:response.id,
                     };  
                     this.tests.ajouterReponse(Reponse1).subscribe(
                      response => {
                        console.log(response);
                      }, error => {
                        console.log(error);
                      });
                  }
                  
           },
           error => {
             console.log(error);
           });}
   
             },
             error => {
               console.log(error);
             });
            
  }
  getReponsetest(id):void{

    this.tests.getReponsetest(id,this.currentQuestion.id)
    .subscribe(
      data => {
        console.log(data);
        this.reponse = data;
        this.message = 'aaaaaaa';

      },
      error => {
        console.log(error);
      });
  }

  getquestion(id):void{

    this.tests.getquestion(id)
    .subscribe(
      data => {
        
        console.log(data);
        this.currentQuestion = data;
      },
      error => {
        console.log(error);
      });
  }
  ModifierReponses(id): void {
    this.tests.ModifierReponses(id,this.currentQuestion)
      .subscribe(
        response => {
          
          console.log(response);
          this.message = 'Le test a été modifié avec succès!!';

        },
        error => {
          console.log(error);
        });
  }
  ModifierQuestion(): void {
    this.tests.ModifierQuestion(this.currentQuestion.id,this.currentQuestion)
      .subscribe(
        response => {
          this.newtestversion1()
          console.log(response);
          this.isSuccessful = true;

        },
        error => {
          console.log(error);
        });
  }
  ModifierReponse(id,i): void {

    this.tests.ModifierReponse(id,this.currentQuestion.id,this.currentQuestion["reponse_set"][i])
      .subscribe(
        response => {
          console.log(response);
          this.isSuccessful1 = true;

        },
        error => {
          console.log(error);
        });
  }
  getdetailTest(slug: string) {
    return this.http.get(this.tests.getdetailTestadmin(slug),{headers: this.tests.headers()});
  }
  Deconnexion(): void {
    this.tokenStorageService.signOut();
    this.router.navigate(['/auth/login']);
  }


}
