import { Injectable } from '@angular/core';
import { Student } from 'src/app/Student';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = 'http://localhost:500/students'
  constructor(private http: HttpClient) { }

  getStudents() : Observable<Student[]>{
    return this.http.get<Student[]>(this.apiUrl);
  }

  deleteStudent(student: Student): Observable<Student> {
    const url = `${this.apiUrl}/${student.id}`
    // console.log(url);
    return this.http.delete<Student>(url)

  }

  updateStudentEnrolled(student: Student): Observable<Student>{
    const url = `${this.apiUrl}/${student.id}`
    return this.http.put<Student>(url, student, httpOptions)
  }

  addStudent(student : Student): Observable<Student>{
    return this.http.post<Student>(this.apiUrl, student, httpOptions);
  }
}
