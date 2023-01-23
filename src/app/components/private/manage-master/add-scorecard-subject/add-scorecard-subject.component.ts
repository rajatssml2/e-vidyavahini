import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/_services/user.service';

import { HttpService } from '../../../../_services/http.service';

@Component({
  selector: 'app-add-scorecard-subject',
  templateUrl: './add-scorecard-subject.component.html',
  styleUrls: ['./add-scorecard-subject.component.css']
})
export class AddScorecardSubjectComponent implements OnInit {
  scorecardForm : UntypedFormGroup = new UntypedFormGroup(
    {
      employee_name:new UntypedFormControl("",[Validators.required]),
      employee_salary:new UntypedFormControl(""),
      employee_age :new UntypedFormControl(""),
    }
  );
  id:any
  
  constructor(private httpService: HttpService,private route:ActivatedRoute, public toastService: ToastrService, public userService: UserService, public router: Router) {}

  ngOnInit(){
    this.route.paramMap.subscribe( paramMap => {
      this.id = paramMap.get('id');
  })
    console.log("this.id ==",this.id )
    if(this.id) {
      this.getEmpById()
      
    }
  }

  getEmpById() {
    this.userService.setLoading(true)
    this.httpService.getEmpById('employee/'+this.id).subscribe((res:any)=>{
      console.log(res)
      this.userService.setLoading(false);
      if(res && res.status=='success') {
        this.scorecardForm.patchValue({
          employee_name: res.data.employee_name,
          employee_age: res.data.employee_age,
          employee_salary: res.data.employee_salary
        })
       
      } else {
        this.toastService.error('Something got error');
      }
    },error=>{
      console.log(error);
      this.userService.setLoading(false);
      this.toastService.error(error.message);
    })
  }

  onSubmit(event:any) {
    console.log("scorecardForm==",this.scorecardForm.value)

    if(this.scorecardForm.invalid){
      return;
    }

    let obj = {
      employee_name: this.scorecardForm.value.employee_name,
      employee_salary: this.scorecardForm.value.employee_salary,
      employee_age: this.scorecardForm.value.employee_age,
    }
    this.userService.setLoading(true)
    this.httpService.createSubject('create', obj).subscribe((res:any)=>{
      console.log(res)
      this.userService.setLoading(false);
      if(res && res.status=='success') {
        
        this.toastService.success(res.message);
        this.router.navigate(['/scorecard-subject'])
      } else {
        this.toastService.error('Something got error');
      }
    },error=>{
      console.log(error);
      this.userService.setLoading(false);
      this.toastService.error(error.message);
    })
    
  }
  onUpdate(event:any) {
    console.log("scorecardForm==",this.scorecardForm.value)

    if(this.scorecardForm.invalid){
      return;
    }

    let obj = {
      employee_name: this.scorecardForm.value.employee_name,
      employee_salary: this.scorecardForm.value.employee_salary,
      employee_age: this.scorecardForm.value.employee_age,
    }
    this.userService.setLoading(true)
    this.httpService.updateSubject('update/'+this.id, obj).subscribe((res:any)=>{
      console.log(res)
      this.userService.setLoading(false);
      if(res && res.status=='success') {
        
        this.toastService.success(res.message);
        this.router.navigate(['/scorecard-subject'])
      } else {
        this.toastService.error('Something got error');
      }
    },error=>{
      console.log(error);
      this.userService.setLoading(false);
      this.toastService.error(error.message);
    })
    
  }

  onDelete(event:any) {
    
    this.userService.setLoading(true)
    this.httpService.deleteSubject('delete/'+this.id).subscribe((res:any)=>{
      console.log(res)
      this.userService.setLoading(false);
      if(res && res.status=='success') {
        
        this.toastService.success(res.message);
        this.router.navigate(['/scorecard-subject'])
      } else {
        this.toastService.error('Something got error');
      }
    },error=>{
      console.log(error);
      this.userService.setLoading(false);
      this.toastService.error(error.message);
    })
    
  }
}
