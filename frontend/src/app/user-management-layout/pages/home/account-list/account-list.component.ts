import { Component } from '@angular/core';
import { employee } from '../models/type/emptype';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ApiService } from '../../../api.service';
@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrl: './account-list.component.scss'
})
export class AccountListComponent {
users: employee[] = [];
//new BehaviorSubject<employee[]>([]) 
curr_filter: string = 'all';
root: boolean = false;
currentId: any = 0;
filter:any;

filtered: employee[] = []
  
// Pagination variables
currentPage: number = 1;
totalLength: any;
page:number = 1;
// itemsPerPage:number = 5;


  constructor(private router:Router,private api:ApiService) {

    this.api.getAllEmployees().subscribe(data => {
      this.users = data as employee[];
      this.currentId = localStorage.getItem('currUserId')
      this.filtered = this.users;
    })
    
  }

  filterByRole(role: any) {
    if (role.value === 'all') {
      this.filtered = [...this.users];
      this.curr_filter = role.value;
    } else {
      this.filtered = this.users.filter(user => user.role === role.value);
      this.curr_filter = role.value;
    }
  }

  editAccount(e:any, id: string, name:string, username:string, password:string, email:string, role:string): void {
    localStorage.setItem('currId',id)
    localStorage.setItem('currName',name)
    localStorage.setItem('currUsername',username)
    localStorage.setItem('currPass',password)
    localStorage.setItem('currEmail',email)
    localStorage.setItem('currRole',role)

    this.router.navigateByUrl('/home/edit-account')

   
  }

  deleteAccount(e:any, id: number, index: number) {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "User Deleted",
          icon: "success"
        });

        this.api.deleteEmployee(id).subscribe()
       
        setTimeout(() => {
          this.router.navigateByUrl('/home/add-account', {skipLocationChange: true}).then(()=>
            this.router.navigateByUrl('/home/account-list'));
        }, 50);



      }
    });

  }

  togglePassword(visibility: any,id: number) {
    if (visibility === 'hidden') {
      visibility = {visibility : 'shown'};
    }
    else {
      visibility = {visibility : 'hidden'};
    }
    this.api.updateVisibility(visibility,id).subscribe()
    setTimeout(() => {
      this.router.navigateByUrl('/home/add-account', {skipLocationChange: true}).then(()=>
        this.router.navigateByUrl('/home/account-list'));
    }, 50);
  }

  addAccount(e:any):void {
    this.router.navigateByUrl('/home/add-account');
  }


}
