import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { employee } from '../home/models/type/emptype';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AesServiceService } from '../../aes-service.service';
import { ApiService } from '../../api.service';
@Component({
  selector: 'app-land',
  templateUrl: './land.component.html',
  styleUrl: './land.component.scss'
})
export class LandComponent {


  //data of employees
  users: employee[] = [];


  //Login FormGroup
  loginForm: FormGroup = new FormGroup({});
  message:string = '';

  showPassword: boolean = false;


  constructor(private fb: FormBuilder, private router:Router, private aes: AesServiceService, private api: ApiService) { 

    this.api.getAllEmployees().subscribe(data => this.users = data as employee[])
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {



    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      this.message = "Email not found"
      this.loginForm.reset()

      this.users.forEach((e) => { 

        if (e.email == formData.email && e.role == 'admin') 

          {
            if (e.password == formData.password  && e.id == 1) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Login Success",
            showConfirmButton: false,
            timer: 1500
          });

          localStorage.setItem('currUser',e.username)
          localStorage.setItem('currUserId',e.id)
          this.router.navigateByUrl('/home');

            }

            else if (this.aes.decrypt(e.password) == formData.password) {

           Swal.fire({
              position: "center",
              icon: "success",
              title: "Login Success",
              showConfirmButton: false,
              timer: 1500
            });
  
            localStorage.setItem('currUser',e.username)
            localStorage.setItem('currUserId',e.id)
            this.router.navigateByUrl('/home');
            }

            else {
              this.loginForm.reset()
              this.message = "Wrong Password"
            }

            
      }  
      })

     

    } 
    
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

}
