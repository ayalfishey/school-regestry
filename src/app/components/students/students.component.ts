import { Component, OnInit } from '@angular/core';

import { Student } from 'src/app/Student';
import { StudentService } from 'src/app/services/student.service';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  students: Student[] = [];
  showAddStudent: boolean;
  subscription: Subscription;
  
  constructor(private studentService: StudentService, private uiService: UiService) { 
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddStudent = value)
  }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe((students) => this.students = students);
  }

  deleteStudent(student: Student): void{
    this.studentService.deleteStudent(student).subscribe(() => 
      this.students = this.students.filter (s => s.id !== student.id )
    );
  }

  toggleEnrolled(student: Student){
    student.enrolled = !student.enrolled
    this.studentService.updateStudentEnrolled(student).subscribe();
  }

  addStudent(student: Student){
    student.id = this.students.length + 1;
    this.studentService.addStudent(student).subscribe(st =>(this.students.push(st)));
  }

}
