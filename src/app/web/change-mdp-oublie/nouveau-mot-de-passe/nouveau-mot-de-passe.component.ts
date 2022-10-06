import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestsService } from 'src/app/services/Test/tests.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-nouveau-mot-de-passe',
  templateUrl: './nouveau-mot-de-passe.component.html',
  styleUrls: ['./nouveau-mot-de-passe.component.css']
})
export class NouveauMotDePasseComponent implements OnInit {
  form: any = {
    password: null,
    token:null,
    uidb64:null,

  };
  token 
  eeeeee
  eee1
  uidb64
  constructor(
    private route:ActivatedRoute,
    private testservice:TestsService,
    private userService:UserService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      //console.log(params);
      //console.log(params.id);
      this.token=params.token
      this.uidb64=params.id
      this.form = {
        password: null,
        token:params.token,
        uidb64:params.id
       
    
      }; 
    });
  }
  onSubmit(): void {
    
    this.userService.nouveaumdp(this.form).subscribe(
      data => {
        console.log(data);
        Swal.fire('',"Réinitialisation du mot de passe réussie", 'success')
      },
      err => {
        console.log(err.error.detail);
        this.eeeeee= err.error.detail
        this.eee1= err.error.password.
        Swal.fire('',this.eeeeee, 'error')
        Swal.fire('',this.eee1, 'error')        
      }
    );

  }
}
