import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userTypeList: any=[{code:'officer', name: 'OFFICER'},{code:'school', name: 'SCHOOL'},{code:'teacher', name: 'TEACHER'}]
  loginForm : UntypedFormGroup = new UntypedFormGroup(
    {
      userType:new UntypedFormControl("",[Validators.required]),
      userName:new UntypedFormControl("",[Validators.required]),
      password:new UntypedFormControl("",[Validators.required]),
      captchAnswer:new UntypedFormControl("",[Validators.required]),
    }
  );

  constructor(private router: Router){}

  onSignIn() {

  }
  ngOnInit(): void {
    
  }

  onSubmit(event:any) {
    console.log("form==",event,this.loginForm.value)
    if(this.loginForm.status == 'INVALID') {
      return;
    }
    localStorage.setItem('isLoggedIn','true');
    this.router.navigate(['/welcome'])
  }

}
