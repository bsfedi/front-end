import { Component, OnInit } from '@angular/core';
import { TestsService } from 'src/app/services/Test/tests.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-change-mdp-oublie',
  templateUrl: './change-mdp-oublie.component.html',
  styleUrls: ['./change-mdp-oublie.component.css']
})
export class ChangeMdpOublieComponent implements OnInit {
  form: any = {
    email: null,

  };
  constructor(
    private testservice:TestsService,
    private userService:UserService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    
    this.userService.motdepasseoublie(this.form).subscribe(
      data => {
        //console.log(data);
        Swal.fire('','Merci de vérifier dans vos e-mails que vous avez reçu un message' , 'success')
      },
      err => {
        Swal.fire('', err.error.message, 'error')
        //console.log(error);
        
      }
    );

  }
}
