import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { TestsService } from 'src/app/services/Test/tests.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import {UserService} from 'src/app/services/user.service'
import * as Chart from 'node_modules/chart.js/dist/chart.js';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { FormBuilder, FormGroup } from '@angular/forms';
declare var $: any;
@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  DJANGO_SERVER = 'http://127.0.0.1:8000'
  form: FormGroup;
  response;
  imageURL;
  image: File;
  onImageChanged(event: any){
    this.image = event.target.files[0];
  }
  index:number =0 ;
  currentUser: any; 
  msg1='' ;
  Tests ;
aaa ;
ee=[];
bb=[];
cc=[];
profile=false
updatepassword=false
updateprofile=false
imagesss
userimage={
  image:''
}
  constructor(
    private SocialauthService: SocialAuthService,
    private tests : TestsService,
    private tokenStorageService: TokenStorageService,
    private http:HttpClient,
    private router:Router,
    private userService:UserService,
    private formBuilder: FormBuilder,) { }
verifie
  ngOnInit() {

    $(document).ready(function(){
      $("#but").click(function(){
        $("#eee").slideToggle("slow");
      });
      $("#but1").click(function(){
        $("#eee1").slideToggle("slow");
      });
      $("#but2").click(function(){
        $("#eee2").slideToggle("slow");
      });
    });

    this.currentUser = this.tokenStorageService.getUser();
   // this.msg=; 
    this.msg1=this.currentUser.user.email;

    this.getTests().subscribe((res) => {
      this.Tests = res;
      console.log(this.Tests)
     for (let test of this.Tests){
        this.ee.push(test.titre)
        this.bb.push(test.score)
        this.cc.push(test.score_max)
        console.log(this.bb)
        console.log(this.ee)
      }






    });
    this.form = this.formBuilder.group({
      image: ['']
    });
    
}

get(){
  this.userService.getimages1(this.currentUser.user.id).subscribe((res)=>
  {
    console.log(res)

    this.imagesss=res ;
  },
  (err) => {  
    console.log(err);
  });
}
/************************************************* */
onChange(event) {
  if (event.target.files.length > 0) {
    const file = event.target.files[0];
    this.form.get('image').setValue(file);
  }}
  
updateimageuser(){
 /** const formData = new FormData();
  formData.append('file', this.form.get('image1').value);*/
  const formData =  new FormData();
  formData.append("image", this.form.get('image').value);
  const data1 = { /**data of test **/
    image:this.userimage.image, 
   };
  this.userService.ajouterimageuser(this.currentUser.user.id,formData)
  .subscribe(
    response => {
    console.log(response);
    },
    error => {
      console.log(error);
    });
}
/************************************************* */



monprofile(){
  this.profile=true
}
updatepwd(){
  this.updatepassword=true
}
updatemonprofile(){
  this.updateprofile=true
}
Deconnexion(): void {
  this.SocialauthService.signOut();
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
