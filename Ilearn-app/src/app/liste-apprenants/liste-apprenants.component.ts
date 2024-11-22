import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Student } from './model/Student';
import { StudentService } from './service/Student-service';

@Component({
  selector: 'app-liste-apprenants',
  templateUrl: './liste-apprenants.component.html',
  styleUrls: ['./liste-apprenants.component.css']
})
export class ListeApprenantsComponent implements OnInit {


  public students:Student[]=[] ;
  constructor(private studentService : StudentService) { }

  ngOnInit(): void {
    this.studentService.getStudent().subscribe(value => {
      this.students = value;})}

  getStudent():void{
    this.studentService.getStudent().subscribe
      ((Response:Student[])=>{ this.students=Response;
      console.log(this.students);}
      );
  }
   deleteStudent(id: number) {
    this.studentService.deleteStudent(id).subscribe(
      (Response:void)=>{console.log(Response);
        this.getStudent();
      }
      );
  }
}
