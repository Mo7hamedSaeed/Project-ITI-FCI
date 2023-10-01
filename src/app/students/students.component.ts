import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit
{
  allStudents! : any[];
  loading:boolean = false;
  constructor(private myStudentsService:StudentsService){}

  ngOnInit(): void
  {
    this.loading = true;
    this.myStudentsService.getAllStudents().subscribe({next:(response)=>{
      this.allStudents=response;
      this.loading = false;
    }});
  };

}
