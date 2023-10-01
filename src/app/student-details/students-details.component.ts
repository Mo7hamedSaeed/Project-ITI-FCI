import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-students-details',
  templateUrl: './students-details.component.html',
  styleUrls: ['./students-details.component.css']
})
export class StudentsDetailsComponent implements OnInit {

  selectedStudent:any={};
  loading:boolean = false;
  constructor(private router:ActivatedRoute, private myStudentsService:StudentsService) { }
  ngOnInit(): void
  {

  let seatingNo =  parseInt(this.router.snapshot.paramMap.get('seating_no')!);
  this.loading = true;
  this.myStudentsService.getStudentBySeatingNo(seatingNo).subscribe({next:(response)=>{
    this.selectedStudent = response;
    this.loading = false;
  }});

  this.setTextColorStyles();
  this.setBackgroundColors();
  this.getCircleBorder();
  }

  setTextColorStyles()
  {
    // Clear the previous styles
    let TextColorStyles = '';

      let studentCase = this.selectedStudent.student_case;
      // Set background color based on studentCase
      if (studentCase === 1) {
        TextColorStyles = 'blue';
      } else{
        TextColorStyles='red';
      }
      return TextColorStyles;
    }

    setBackgroundColors() {
      let backgroundColorStyles = '';
      let studentCase = this.selectedStudent.student_case;
      if (studentCase === 1)
      {
        backgroundColorStyles = 'blue';
      }
      else
      {
        backgroundColorStyles='red';
      }
      return backgroundColorStyles;
    }

    getCircleBorder() {
      const studentCase = this.selectedStudent.student_case;
      let borderStyle = '10px solid ';

      if (studentCase === 1) {
        borderStyle += 'blue'; // Green border for high ratings
      } else
      {
        borderStyle += 'red';
      }

      return borderStyle;
    }

}
