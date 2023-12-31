import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { StudentsDetailsComponent } from './student-details/students-details.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'students',component:StudentsComponent},
  {path:'student/:seating_no',component:StudentsDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
