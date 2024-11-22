import { Component, OnInit } from '@angular/core';
import { Course } from '../Course';
import { FormationService } from '../liste-formations/service/formation-service';
import { Formation } from './Model/Formation';
import { trainingService } from './service/training-service';

@Component({
  selector: 'app-nos-formations',
  templateUrl: './nos-formations.component.html',
  styleUrls: ['./nos-formations.component.css']
})
export class NosFormationsComponent implements OnInit {

  public formations:Formation[]=[] ;
  public course :Course = new Course() ;
  public formation :Formation= new Formation() ;
  constructor(private trainingService : trainingService) { }

  ngOnInit(): void {
    this.trainingService.getFormation().subscribe(value => {
      this.formations = value;})
    }

  getFormation():void{
    this.trainingService.getFormation().subscribe
      ((Response:Formation[])=>{ this.formations=Response;
      console.log(this.formations);}

      );
  }
  addCourse(int : Number):void{
    this.trainingService.addCourse(this.course , this.formation.id);
  }

}
