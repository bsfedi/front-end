import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TestsService } from 'src/app/services/Test/tests.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import {UserService} from 'src/app/services/user.service'
import * as Chart from 'node_modules/chart.js/dist/chart.js';
//import {jsPDF} from 'jspdf';
import { ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UploadService } from 'src/app/upload.service';
import jsPDF from 'jspdf';
import htmlToPdfmake from 'html-to-pdfmake';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  DJANGO_SERVER = 'http://127.0.0.1:8000'
  form: FormGroup;
  response;
  imageURL; 
  pdf=false
  public downloadAsPDF() {

    const pdf = new jsPDF('p', 'pt', 'a3'); // For A4 Sheet layout
    pdf.html(document.getElementById('pdfTable'),{

        margin: [
          50,
          25,
          50,
          25,
        ],
        callback:(doc)=>{
        
        
          doc.save('mytests.pdf');
          
        }
      });
  }
 
  public downloadAsPDF12() {

    let doc = new jsPDF('p','pt','a3');

    doc.text(this.currentUser.user.nom,10, 10);

    doc.html(document.getElementById('pdfTable'),{
      margin: [40, 60, 40, 60],
      callback:(doc)=>{
        
        
        doc.save('mytests.pdf');
        
      }
    });

  }


  canvas:any; ctx:any;
  canvas2:any; ctx2:any; 
  canvas3:any; ctx3:any;
  canvas4:any; ctx4:any;
  index:number =0 ;
  currentUser: any; 
  msg1='' ;
  Tests ;
  aaa ;
  Testspasee ;
  ee=[];
  bb=[];
  cc=[];
  aa1=[];
  bb1=[];
  cc1=[];
  dd=[]
  ff=[]
  mmmm ;
  a33;
  aaaaaaaa;
  show=false;
  testsss
  nbrepcorrect=0
  ver 
  verifié
  testeeeeee=[]
  constructor(private tests : TestsService,
    private tokenStorageService: TokenStorageService,
    private http:HttpClient,
    private router:Router,
    private userService:UserService,
    private formBuilder: FormBuilder, private uploadService: UploadService
) { }

  ngOnInit() {
    this.canvas = document.getElementById('myChart');
    this.canvas2 = document.getElementById('myChart2');
    this.canvas3 = document.getElementById('myChart3');
    this.canvas4 = document.getElementById('myChart4');
    this.ctx = this.canvas.getContext('2d');
    this.ctx2 = this.canvas2.getContext('2d');
    this.ctx3 = this.canvas3.getContext('2d');
    this.ctx4 = this.canvas4.getContext('2d');
  
    this.currentUser = this.tokenStorageService.getUser();

   // this.msg=; 
    this.msg1=this.currentUser.user.email;

    this.getTests().subscribe((res) => {
      this.Tests = res;
      console.log(this.Tests)
      

      for (let test of this.Tests){
        if( test.nb_testpasse>0)
          this.show=true
      }

     for (let test of this.Tests){
       if(test.completed){

          this.ee.push(test.titre)
          this.bb.push(test.score)
          this.cc.push(test.score_max)
          this.dd.push(test.score/10)
        
        console.log(this.bb)
        console.log(this.ee)}
      }

      for (let test of this.Tests){
        let myChart3 = new Chart(this.ctx3, {
          type: 'line',
          data: {
              labels: this.ee,
              
              datasets: [{
                  label: 'Score',
                  data: this.bb,
                  backgroundColor:  'rgba(75, 192, 192, 0.5)',
                  borderWidth: 1,
                  borderColor: 'rgba(75, 192, 192, 0.5)',
              },
              {
                label: 'Reponse Correct',
                data: this.ff,
                backgroundColor:'rgba(255, 99, 132, 0.5)',
                borderWidth: 1,
                borderColor:'rgba(255, 99, 132, 0.5)',
            },]
          },      title: {
            display: true,
            text: 'Chart Title',
          },
          options: {
            animations: {
              tension: {
                duration: 1000,
                easing: 'easeInOutQuad',
                from: 1,
                to: 0,
                loop: true
              }
            },
            plugins: {
              title: {
                      display: true,
                      text: 'Reponse Correct Chart',
                      titlePercentage: 1.5,
                      color: '#FF3390',                    
                      font: {
                        size: 22
                    }
  
                  }
              },
            scales: {
              y: { // defining min and max so hiding the dataset does not change scale range
                min: 0,
                max: 100
              }
            }
          }
        });
        let myChart = new Chart(this.ctx, {
          type: 'bar',
          data: {
              labels: this.ee,
              
              datasets: [
                {
                  label: "Score",
                  backgroundColor: 'rgba(255, 99, 132, 0.5)',
                  data: this.bb,
                  borderWidth: 1
              },
{
              label: "Score Test ",
              backgroundColor: 'rgba(75, 192, 192, 0.5)',
              data: this.cc,
              borderWidth: 1}
              ]
          },
          options: {
            plugins: {
              title: {
                      display: true,
                      text: 'Score Test Chart',
                      titlePercentage: 1.5,
                      color: '#FF3390',                    
                      font: {
                        size: 22
                    }
  
                  }
              },
        legend: {
            display: true
        },
            responsive: true,
            display:true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
          }
        });


        let myChart2 = new Chart(this.ctx2, {
          type: 'pie',
          data: {
              labels: ["Test Passe","Test Total"],
              datasets: [{
                  label: 'Active Angular Vesrions',
                  data: [test.nb_testpasse,test.nb_test],
                  backgroundColor: [      'rgba(54, 162, 235, 0.5)',
                  'rgba(153, 102, 255, 0.5)',], 
                  borderWidth: 1
              }]
          },

        });

}

    });
   
    this.getlisteTestsPasse(this.currentUser.user.id).subscribe((res) => {
      this.Testspasee = res;
    
      for(let aa of this.Testspasee)
      //this.testsss=aa.test

        this.getalltestpasselistebyid(aa.test).subscribe((res) => {
          this.a33=res;
          console.log(this.a33)
          for (let i = 0; i < this.a33.length; i++) {
            if (this.a33[i].user==this.currentUser.user.id){
              if (this.a33[i].termine){
              this.aa1.push(i+1)
              this.bb1.push(this.a33[i].titre)
              this.cc1.push(this.a33[i].score)
            }}}

            let myChart4 = new Chart(this.ctx4, {
              type: 'line',
              data: {
                  labels: this.bb1,
                  
                  datasets: [
      
                  {
                    label: "rang",
                    backgroundColor: 'rgb(95, 137, 170)',
                    data: this.aa1  ,
                    borderWidth: 1,
                    borderColor:'rgb(95, 137, 170)'
                },                  {
                  label: "Score",
                  backgroundColor: 'red',
                  data: this.cc1,
                  borderWidth: 1,
                  borderColor:'red'
              },
                  ]
              },
              options: {
                plugins: {
                  title: {
                          display: true,
                          text: 'Rang Test Chart',
                          titlePercentage: 1.5,
                          color: '#FF3390',                    
                          font: {
                            size: 22
                        }
      
                      }
                  },
                  animations: {
                    tension: {
                      duration: 1000,
                      easing: 'easeInOutQuad',
                      from: 1,
                      to: 0,
                      loop: true
                    }
                  },
            legend: {
                display: true
            },
                responsive: true,
                display:true,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
              }
            });
            });
          });
     
  

        }
 

Deconnexion(): void {
  this.tokenStorageService.signOut();
  this.router.navigate(['/auth/login']);
}


getalltestpasselistebyid(id){
  return this.http.get(this.tests.getlisteTestsPassebyid(id));
}
getlisteTestsPasse(id){
  return this.http.get(this.tests.getlisteTestsPasse(id));
}
getTests() {
  return this.http.get(this.tests.gettestspassedetails(),{headers: this.tests.headers()});
}


}
