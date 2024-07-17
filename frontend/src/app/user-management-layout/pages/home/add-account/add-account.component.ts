import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { employee } from '../models/type/emptype';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AesServiceService } from '../../../aes-service.service';
import { ApiService } from '../../../api.service';
@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrl: './add-account.component.scss'
})
export class AddAccountComponent {

  users: employee[] = [];
  employeeForm: FormGroup = new FormGroup({});
  roleOptions = ['admin', 'employee'];
  showPassword: boolean = false;
  emailexist: boolean = false;
  message: string = '';

  constructor(private fb: FormBuilder, private router:Router, private aes:AesServiceService, private api: ApiService) {

    
   }

  
  ngOnInit(): void {
   
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.api.getAllEmployees().subscribe(data => {
      this.users = data as employee[]});
      
  }

  

  // Function to submit the form
  onSubmit() {


 
    if (this.employeeForm.valid) {

      this.users.forEach((e)=> {
        if (this.employeeForm.value.email == e.email) {
          this.emailexist = true
        }
      })

      if (this.emailexist == false) {

      Swal.fire({
        title: "Are you sure about the information?",
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: "Create",
        denyButtonText: `Cancel`
      }).then((result) => {
        
    
        if (result.isConfirmed) {
          Swal.fire("Saved!", "", "success");
          var formData = this.employeeForm.value;
          formData.password = this.aes.encrypt(formData.password)
          this.api.createEmployee(formData).subscribe()

          setTimeout(() => {
                this.router.navigateByUrl('/home');
              },50)


        } else if (result.isDenied) {
          Swal.fire("Cancelled", "", "info");
        }
      });

    }
    else {
      this.message = 'Email Already Exists!'
      this.emailexist = false;
      }
      
      
    } else {
      // Handle form validation errors
      console.error("Form is invalid");
    }
  }

  backtohome(e:any):void {
    this.router.navigateByUrl('/home');
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

}
