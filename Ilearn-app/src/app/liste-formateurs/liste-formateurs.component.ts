import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Formateur } from './model/Formateur';
import { FormateurService } from './service/formateurs-service';

@Component({
  selector: 'app-liste-formateurs',
  templateUrl: './liste-formateurs.component.html',
  styleUrls: ['./liste-formateurs.component.css']
})
export class ListeFormateursComponent implements OnInit {
public formateurs:Formateur[]=[] ;
  constructor(private formateurService : FormateurService) { }

  ngOnInit(): void {
this.getFormateur();
  }
  deleteFormateur(id: number) {
    this.formateurService.deleteFormateur(id).subscribe(
        data => {
          console.log(data);
          this.getFormateur();

  });}
   updateFormateur(formateur: Formateur){this.formateurService.updateFormateur(formateur).subscribe(
    data => {
      console.log(data);
      this.formateurService.getFormateur();
    },
    (error:HttpErrorResponse) => {alert(error.message);
});}

getFormateur(){
  this.formateurService.getFormateur().subscribe(value => {
    this.formateurs = value;})
}


}


