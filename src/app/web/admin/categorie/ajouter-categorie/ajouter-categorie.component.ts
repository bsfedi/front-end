import { Component, OnInit } from '@angular/core';
import { TestsService } from 'src/app/services/Test/tests.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-ajouter-categorie',
  templateUrl: './ajouter-categorie.component.html',
  styleUrls: ['./ajouter-categorie.component.css']
})
export class AjouterCategorieComponent implements OnInit {

  constructor(
    private testservice:TestsService,
    private tokenStorageService:TokenStorageService
  ) { }
  categorie = {
    id:'',
    label:'',}
    isSuccessful = false;
  ngOnInit(): void {
  }

  onSubmit(): void {
    const data = {
      id:this.categorie.id,
      label: this.categorie.label,
      };
      this.testservice.ajoutercategorie(data).subscribe(
        response => {
          console.log(response);
          this.isSuccessful = true;
        },
        error => {
          console.log(error);
        });
  }
  Deconnexion(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
