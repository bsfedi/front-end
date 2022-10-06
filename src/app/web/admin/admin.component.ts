import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
Users;
  currentUser:any ;
  msg;any
  constructor(
    private tokenStorageService: TokenStorageService,
    private router: Router ,
    private userService:UserService
    ) { }

  ngOnInit(): void {
    this.getUsers().subscribe((res) => {
      this.Users = res;
    });
    this.currentUser = this.tokenStorageService.getUser();
    if (this.currentUser.user.is_superuser==false){
      this.router.navigate(['dashboard']);
    }
  }
  
  Deconnexion(): void {
    this.tokenStorageService.signOut();
    this.router.navigate(['/auth/login']);
  }

  getUsers(){
    return this.userService.getAll()
  }
 
}

