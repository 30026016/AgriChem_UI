import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName : [''],
      password : ['']
    });
  }

  // tslint:disable-next-line: typedef
  OnSubmit(){
    console.log(this.loginForm.value.userName + ' ' + this.loginForm.value.password);
  }

}
