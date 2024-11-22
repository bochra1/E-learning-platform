import { error } from '@angular/compiler/src/util';
import { Component, forwardRef, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Student } from '../Student';
import { InscriptionService } from './Service/inscription-service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  student : Student = new Student();
  sex = true ;
  occupations=["Student","Autre"];
  selected: String="Occupation" ;

  constructor(private inscriptionService : InscriptionService) { }

  ngOnInit(): void { }


addStudent(){
  this.student.sex = this.sex ? "Female" : "Male" ;
  this.inscriptionService.addStudent(this.student).subscribe(data=>{
    alert("successfully Student is register?");})}



}
