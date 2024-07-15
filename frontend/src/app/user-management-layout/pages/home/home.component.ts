import { Component } from '@angular/core';
import { employees } from './models/data/emplist';
import { employee} from './models/type/emptype';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  emp: employee[] = employees

  username: any = localStorage.getItem('currUser');

  constructor(private router: Router) {
    
  }

  logout(): void {
    localStorage.removeItem('currId')
    localStorage.removeItem('currName')
    localStorage.removeItem('currUsername')
    localStorage.removeItem('currPass')
    localStorage.removeItem('currEmail')
    localStorage.removeItem('currRole')
    localStorage.removeItem('currUserId')

    this.router.navigateByUrl('/')
  }
}
