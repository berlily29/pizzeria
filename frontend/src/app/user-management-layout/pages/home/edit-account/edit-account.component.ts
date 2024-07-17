import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'
import { employee } from '../models/type/emptype';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AesServiceService } from '../../../aes-service.service';
import { ApiService } from '../../../api.service';
@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrl: './edit-account.component.scss'
})
export class EditAccountComponent {

  users: employee[] = [];

  editForm: FormGroup = new FormGroup({});
  roleOptions = ['admin', 'employee'];

  id: any = localStorage.getItem('currId');
  name: any = localStorage.getItem('currName');
  username: any = localStorage.getItem('currUsername');
  password: any = localStorage.getItem('currPass');
  email: any = localStorage.getItem('currEmail');
  role: any = localStorage.getItem('currRole');
  showPassword: boolean = false;
  emailexist: boolean = false;
  message: string = '';
  constructor(private fb: FormBuilder, private router:Router,private aes:AesServiceService,private api :ApiService) {
    this.api.getAllEmployees().subscribe(data => this.users = data as employee[]);
   }

  
  ngOnInit(): void {
    this.editForm = this.fb.group({
      name: [this.name, Validators.required],
      username: [this.username, Validators.required],
      email: [this.email, [Validators.required, Validators.email]],
      role: [this.role, Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  

  // Function to submit the form
  onSubmit() {
 
    if (this.editForm.valid) {

      this.users.forEach((e)=> {
        if (this.editForm.value.email == e.email && this.id == e.id) {
          this.emailexist = false;
        }
        else if (this.editForm.value.email == e.email && this.id != e.id) {
          this.emailexist = true
        }
      })

      if (this.emailexist == false) {

      Swal.fire({
        title: "Are you sure that you want some changes?",
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: "Edit",
        denyButtonText: `Don't Edit`
      }).then((result) => {
        
    
        if (result.isConfirmed) {
          Swal.fire("Saved!", "", "success");
          var formData = this.editForm.value;

          this.users.forEach((element,index) => {
            if(element.id == this.id)
               {
              formData.password = this.aes.encrypt(formData.password)
              this.api.updateEmployee(formData,this.id).subscribe()

              setTimeout(() => {
                this.router.navigateByUrl('/home');
              },50)
            }
      
      });

        } else if (result.isDenied) {
          Swal.fire("Cancelled", "", "info");
        }

      });
      
      
    } else {
      this.message = 'Email Already Exists!'
      this.emailexist = false;

    }

    }


  }

  backtohome(e:any):void {
    this.router.navigateByUrl('/home');
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  
  
}
