import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit
{

  allStudents! : any[];
  studentId: string = '';
  studentNotFound: boolean = false;

  constructor(private router: Router, private MyService:StudentsService){}
  ngOnInit(): void
  {
    this.getAllStudents();
  }


  // Get all students from students service
  getAllStudents()
  {
    this.MyService.getAllStudents().subscribe({next:(response)=>{
      this.allStudents=response;
    }});
  }


  checkStudentSeatingNo()
  {
    for(let student of this.allStudents)
    {
      if(student.seating_no == +this.studentId)
      {
        const studentExists = this.MyService.getStudentBySeatingNo(+this.studentId);
        if (studentExists)
        {
          this.router.navigate(['/student', this.studentId]);
        }
        break;
      }
      else
      {
        this.studentNotFound = true;
      }
    }
  }

}
