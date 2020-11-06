import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  userList;

  constructor(private fb: FormBuilder, private http: HttpClient, private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: [''],
      password: ['']
    });
  }

  // tslint:disable-next-line: typedef
  OnSubmit() {

    if (this.loginForm.value.userName == this.userList[0].userName && this.loginForm.value.password == this.userList[0].passWord) {
      this.router.navigateByUrl('/agri-application');
    }
    else {
      console.log(this.userList);
      alert("Your Username or Password is Invalid !");
    }
  }

  GetUser() {
    this.loginService.getAllUser().subscribe(data => {
      this.userList = data;
    });

  }
}