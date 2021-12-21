import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string = 'School Regestry';
  showAddStudent: boolean;
  subscription: Subscription;


  constructor(private uiService: UiService, private router : Router) { 
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddStudent = value)
  }

  ngOnInit(): void {
  }

  toggleAddStudent(){
    this.uiService.toggleAddStudent();
    // this.uiService.
  }

  hasRoute(route: string) {
    return this.router.url === route
  }
}
