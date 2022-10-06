import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestsService } from 'src/app/services/Test/tests.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
categories ;
  constructor(
    private testservice:TestsService,
    private http:HttpClient,
    private tokenStorageService:TokenStorageService,
    private router:Router,) { }

  ngOnInit(): void {
    this.getcategorie().subscribe((res) => {
      this.categories = res;
    });
 
  }

  clickMethod(name: string) {
    if(confirm("Are you sure to delete "+name)) {
      console.log("Implement delete functionality here");
    }
  }
  getcategorie(){
    return this.testservice.getcategorie();
  }
  deletecategorie(id){
    this.testservice.deletecategorie(id).subscribe(
      response => {
        console.log("Categorie supprimé");
      },
      error => {
        console.log(error);
      });
  }
  Deconnexion(): void {
    this.tokenStorageService.signOut();
    this.router.navigate(['/auth/login']);
  }

  deletecategorie1(id){
     
    Swal.fire({  
      title: 'Voulez-vous vraiment supprimer categorie?',  
      text: 'Toute les tests associé à cet catégorie sera supprimé',  
      icon: 'warning',  
      showCancelButton: true,  
      confirmButtonText: 'Oui!',  
      cancelButtonText: 'Cancel'  
    }).then((result) => {  
      if (result.value) {
        this.deletecategorie(id)
        Swal.fire(  
          'Ok!',  
          'Categorie Supprimé!',
          'success'  
        )  
      } else if (result.dismiss === Swal.DismissReason.cancel) {  
        Swal.fire(  
          'Annulé',  
          'Annulé',  
          'error'  
        )  
      }  
    })  
  }  
}
