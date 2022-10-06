import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestsService } from 'src/app/services/Test/tests.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-verifie-email',
  templateUrl: './verifie-email.component.html',
  styleUrls: ['./verifie-email.component.css']
})
export class VerifieEmailComponent implements OnInit {
  verifie
  currentUser
  constructor(    
    private tests : TestsService,
    private userservice:UserService,
    private tokenStorageService: TokenStorageService,
    private http:HttpClient,
    private router:Router) { }

  ngOnInit(): void {
    this.currentUser = this.tokenStorageService.getUser();
    this.verify(this.currentUser.user.id)
  }
  verify(id):void{

    this.userservice.verify(id)
    .subscribe(
      data => {
        console.log(data);
        this.verifie=data ;
        Swal.fire(' ', this.verifie.email, 'success')
  
  
      },
      error => {
        console.log(error);
      });
  }
}
