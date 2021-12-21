import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Student } from 'src/app/Student';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {
  studentId: number;
  name: string;
  dateOfBirth: string;
  gpa?: number;
  enrolled: boolean;
  @Output() onAddStudent:EventEmitter<Student> = new EventEmitter()

  constructor() { }



  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.studentId && !this.name && !this.dateOfBirth){
      alert('Please fill all required fields')
      return
    }
    const newStudent ={
      id: -1,
      studentId: this.studentId,
      name: this.name,
      dateOfBirth: this.dateOfBirth,
      gpa: this.gpa,
      enrolled: this.enrolled
    } 
    this.onAddStudent.emit(newStudent);

    this.studentId = NaN;
    this.name = '';
    this.dateOfBirth = '';
    this.gpa = NaN;
    this.enrolled = false;
  }
}
