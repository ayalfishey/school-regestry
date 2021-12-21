import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Student } from 'src/app/Student';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  @Input() student: Student
  @Output() onDeleteStudent: EventEmitter<Student> = new EventEmitter()
  @Output() onToggleEnrolled: EventEmitter<Student> = new EventEmitter()
  faTimes = faTimes

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(student: Student){
    this.onDeleteStudent.emit(student)
  
  }

  onToggle(student: Student){
    this.onToggleEnrolled.emit(student)
  }

}
