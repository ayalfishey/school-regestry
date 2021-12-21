import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddStudent: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddStudent(): void{
    this.showAddStudent = !this.showAddStudent;
    this.subject.next(this.showAddStudent)
  }

  onToggle() : Observable<any>{
    return this.subject.asObservable();
  }
}
