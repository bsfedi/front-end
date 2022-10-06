import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TestsService } from 'src/app/services/Test/tests.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';
import * as Chart from 'node_modules/chart.js/dist/chart.js';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {
  canvas:any; ctx:any;
  canvas2:any; ctx2:any; 
  canvas3:any; ctx3:any; 
  canvas4:any; ctx4:any; 
  constructor(    private http: HttpClient,
    private tests : TestsService,
    private tokenStorageService: TokenStorageService,
    private route: ActivatedRoute,
    private userService:UserService,
    private router: Router) { }
    Tests
    nbTests
    Users
    nbUsers
    Testspasses
    nbtestspasses
    nbet = 0
    ee=[]
    aa=[]
    bb=[]
    cc=[]
    dd=[]
    azeaze
    azeazeeee
    nbre1 
    nbre 
    repartition
    repartition1
    aa12=[]
    bb1=[]
    cc1=[]
    dd1=[]
    h1
    h2
    h3
    OK=0
    No=0
    aa13=[]
    bb13=[]
    cc13=[]
    jareb=[]
    jareb1=[]
    jareb2
  ngOnInit(): void {
    

    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');
    this.canvas2 = document.getElementById('myChart2');
    this.ctx2= this.canvas2.getContext('2d');
    this.canvas3 = document.getElementById('myChart3');
    this.ctx3= this.canvas3.getContext('2d');
    this.canvas4 = document.getElementById('myChart4');
    this.ctx4= this.canvas4.getContext('2d');

    this.getTests().subscribe((res) => {
      this.Tests = res;
      //console.log(this.Tests)
      this.nbTests=this.Tests.length
      console.log(this.nbTests)
      this.nbtestpasseparusers().subscribe((res) => {
        this.Testspasses = res;
        //console.log(this.Testspasses)
        for(let test of this. Tests){
          for (let testpass of this.Testspasses){

            if (testpass.test==test.id){
              this.ee.push(testpass.testpassecount)
              this.aa.push(test.titre)
              this.bb.push(test.score_max)
              this.cc.push(testpass.Meilleurscore)
              this.dd.push(testpass.Minscore)
            }
          }
        } 
        for (let test of this.Testspasses){
        let myChart = new Chart(this.ctx, {
          type: 'bar',
          data: {
              labels: this.aa,
              
              datasets: [

              {
              label: "nombre d'utilisateurs passe le test",
              backgroundColor: 'rgba(75, 192, 192, 0.5)',
              data: this.ee,
              barThickness: 50,
              barPercentage: 1.5,
              borderWidth: 1
            }
              ]
          },
          options: {
            plugins: {
            title: {
                    display: true,
                    text: 'Title',
                    titlePercentage: 1.5,
                    color: 'pink',                    
                    font: {
                      size: 22
                  }

                }
            }}
        });
        let myChart2 = new Chart(this.ctx2, {
          type: 'bar',
          data: {
              labels: this.aa,
              
              datasets: [
                {
                  label: "Meilleur score",
                  backgroundColor: 'rgba(255, 99, 132, 0.5)',
                  data: this.cc,
                  borderWidth: 3
              },
              {
              label: "Score Test ",
              backgroundColor: 'rgba(75, 192, 192, 0.5)',
              data: this.bb,
              borderWidth: 3},
              {
                label: "Min Score ",
                backgroundColor: 'rgba(153, 102, 255, 0.5)',
                data: this.dd,
                borderWidth:3}
              ]
          },
          options: {
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
        });}
      });
    });

    this.nbreNouveauxinscrits().subscribe((res) => {
      this.nbre1 = res;
      console.log(this.nbre1)
    
    this.nbreclientsnonactifs().subscribe((res) => {
      this.nbre= res;
      let myChart3 = new Chart(this.ctx3, {
        type: 'bar',
        data: {
            labels:[ "Client"],
            datasets: [
            {
            label: "nbre nouveaux clients inscrits",
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            data: this.nbre1,
            barThickness: 50,
            barPercentage: 1.5,
            borderWidth: 3}, 
            {         
            label: "nbre clients non actifs",
            backgroundColor:'rgba(153, 102, 255, 0.5)',
            data: this.nbre, 
             barThickness: 50,
            barPercentage: 1.5,
            borderWidth: 3},
            ]
        },
        options: {
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
          }],
          xAxes: [{
            barThickness: 6,  // number (pixels) or 'flex'
            maxBarThickness: 8 // number (pixels)
        }]
      }   
        }
      });
    });

    });
    
    this.getUsers().subscribe((res) => {
      this.Users = res;
      this.nbUsers=this.Users.length
    });

    this.getalltestpasseliste().subscribe((res) => {
        this.nbtestspasses=res
    });


      this.getallTestpasselist().subscribe((res2)=>{
      console.log(res2)});

        
        this.nbtestpasseparusers().subscribe((res) => {
          this.Testspasses = res;
          //console.log(this.Testspasses)
          for(let test of this. Tests){
            for (let testpass of this.Testspasses){
              if (testpass.test==test.id){
                this.ee.push(testpass.testpassecount)
                this.aa12.push(test.titre)
                this.bb1.push(test.score_max)
                this.cc.push(testpass.Meilleurscore)
                this.dd.push(testpass.Minscore)
              }
            }
          } 
  

     
      });
      this.getTests().subscribe((res) => {
        this.Tests = res;
      this.nbtestpasseparusers().subscribe((res) => {
        this.Testspasses = res;
        //console.log(this.Testspasses)
        for(let test of this.Tests){
          for (let testpass of this.Testspasses){
            if (testpass.test==test.id){
             // this.aa13.push(test.titre)
              this.Repartitiondesclient(testpass.test).subscribe((res123)=>{
                this.jareb2=res123
              console.log(this.jareb2.Ok)
              this.aa13.push(this.jareb2.titre)
              this.bb13.push(this.jareb2.Ok)
              this.cc13.push(this.jareb2.No)
       });
       

      }}}
      let myChart4 = new Chart(this.ctx4, {
        type: 'bar',
        data: {
            labels: this.aa13,
            
            datasets: [

              {
                label: "Echec",
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                data: this.cc13,
                borderWidth: 3
            },
            {
            label: "Succes",
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            data: this.bb13,
            borderWidth: 3},
          
            ]
        },
        options: {
          plugins: {
          title: {
                  display: true,
                  text: 'Title',
                  titlePercentage: 1.5,
                  color: 'pink',                    
                  font: {
                    size: 22
                }

              }
          }}
      });
      });});
    }


    getTests() {
      return this.http.get(this.tests.Tests());
    }

    getUsers(){
      return this.userService.getAll()
    }

    getalltestpasseliste(){
      return this.http.get(this.tests.nbtestpasse());
    }
    Repartitiondesclient(id){
      return this.tests.Repartitiondesclient(id);
    }
    nbtestpasseparusers(){
      return this.http.get(this.tests.nbtestpasseparusers());
    }



    Deconnexion(): void {
      this.tokenStorageService.signOut();
      this.router.navigate(['/auth/login']);
    }

    nbreclientsnonactifs(){
      return this.userService.nbreclientsnonactifs();
    }

    nbreNouveauxinscrits(){
      return this.userService.nbreNouveauxinscrits();
    }
    getallTestpasselist(){
      return this.tests.AllTestPassList();
    }
}
