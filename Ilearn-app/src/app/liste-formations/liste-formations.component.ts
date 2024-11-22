import { Component, OnInit } from '@angular/core';
import { FormateurService } from '../liste-formateurs/service/formateurs-service';
import { Formation } from './model/Formation';
import { FormationService } from './service/formation-service';

@Component({
  selector: 'app-liste-formations',
  templateUrl: './liste-formations.component.html',
  styleUrls: ['./liste-formations.component.css']
})
export class ListeFormationsComponent implements OnInit {

  public formations:Formation[]=[] ;
  constructor(private formationService : FormationService) { }

  ngOnInit(): void {
    this.formationService.getFormation().subscribe(value => {
      this.formations = value;})
    }

  getFormation():void{
    this.formationService.getFormation().subscribe
      ((Response:Formation[])=>{ this.formations=Response;
      console.log(this.formations);}

      );
  }
   deleteFormation(id: number) {
    this.formationService.deleteFormation(id).subscribe(
      (Response:void)=>{console.log(Response);
        this.getFormation();
      }

      );
  }

}
