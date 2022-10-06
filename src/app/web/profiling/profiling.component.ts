import { Component, OnInit } from '@angular/core';
import { TestsService } from 'src/app/services/Test/tests.service';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-profiling',
  templateUrl: './profiling.component.html',
  styleUrls: ['./profiling.component.css']
})
export class ProfilingComponent implements OnInit {
  DJANGO_SERVER = 'http://127.0.0.1:8000'
  form: FormGroup;
  response;
  imageURL;
  image: File;
  onImageChanged(event: any){
    this.image = event.target.files[0];
  }
  constructor(private testservice:TestsService,
    private formBuilder: FormBuilder,) { }
  profilee = {
    niveau:'',
    certification:'',
    categorie:'',
    question4:'',


  }
  chatbotlist = {
    message:'',
  }
  chatbotvar
  chatbotvar1
  chatbotvar2
  eee
  imagesss
  aa=false
  ee=[]
  ee1=[]
  ngOnInit(): void {
    // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
    this.form = this.formBuilder.group({
      profile: ['']
    });
  
  }
    /* get liste of tests by categorie */
    gettestbycategorie(id){
      this.testservice.gettestbycategorie(id).subscribe((res) => {
        console.log(res)
        },
        error => {
          console.log(error);
        });
    }
  /*onSubmit(): void {
    const data1 = { 
  
      niveau:this.profilee.niveau, 
      certification: this.profilee.certification, //récupérer title of test inseré
      categorie: this.profilee.categorie, //récupérer description of test inseré
      question4: this.profilee.question4, //récupérer dureé of test inseré

     };
     //Ajouter nouveau test
      this.testservice.profiling(data1) 
      .subscribe(
        response => {
          console.log(response);
          this.aa=true;
          this.eee=response
        },
        error => {
          console.log(error);
        });
  }*/
  onChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('profile').setValue(file);
    }
  }
  Profiling(): void {
    const data1 = { /**data of test **/
      niveau:this.profilee.niveau, 
      certification: this.profilee.certification, //récupérer title of test inseré
      categorie: this.profilee.categorie, //récupérer description of test inseré
      question4: this.profilee.question4, //récupérer dureé of test inseré

     };
     //Ajouter nouveau test
      this.testservice.profilinguser(data1) 
      .subscribe(
        response => {
          console.log(response.tests)
          this.aa=true;
          this.eee=response.tests
        },
        error => {
          console.log(error);
        });
  }



  chatbot(){
    const data1 = { /**data of test **/
      message:this.chatbotlist.message, 

     };
     this.ee.push({'msg':data1.message})
     for (let i = 0; i < this.ee.length; i++) {
      console.log(this.ee[i]);
      this.chatbotvar=this.ee[i]
    }
    this.testservice.Cahtbot(data1).subscribe((res)=>
    {
      //console.log(res)
      

      
      this.chatbotvar1=res
     // this.chatbotvar2=this.chatbotvar1.message.text
      this.ee1.push({'msg1':this.chatbotvar1.message.text})
      
      for (let aazeazea of this.ee1){
        this.chatbotvar2=aazeazea.msg1
        console.log(this.chatbotvar2)
      }
      for (let i = 0; i < this.ee1.length; i++) {
       console.log(this.ee1[i]);
       //this.chatbotvar2=this.ee1[i]
      

    }


    },
    (err) => {  
      console.log(err);
    });

  }

}
