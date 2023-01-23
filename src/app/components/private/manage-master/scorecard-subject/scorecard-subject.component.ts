import { Component,OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/_services/user.service';

import { HttpService } from '../../../../_services/http.service';
@Component({
  selector: 'app-scorecard-subject',
  templateUrl: './scorecard-subject.component.html',
  styleUrls: ['./scorecard-subject.component.css']
})
export class ScorecardSubjectComponent implements OnInit {

  columnDefs = [
		{headerName: 'Name', field: 'employee_name', cellStyle: {color: 'red', cursor: 'pointer'}},
		{headerName: 'Age', field: 'employee_age' },
		{headerName: 'Salary', field: 'employee_salary'}
	];

	rowData = [
		{ employee_name: 'Toyota', employee_age: '20', employee_salary: '35000' }
	];

  constructor(private httpService: HttpService, public toastService: ToastrService, public userService: UserService, public router: Router) {}
  ngOnInit(): void {
    this.getDataList()
  }

  getDataList() {
    this.userService.setLoading(true);
    this.httpService.getSubjectList('employees').subscribe((res:any)=>{
      if(res && res.status=='success') {
        this.userService.setLoading(false);
        this.rowData = res.data
      }
    },error=>{
     
      this.userService.setLoading(false);
      this.toastService.error(error.message);
    })
  }

  addScorecard() {
    this.router.navigate(['/add-scorecard-subject'])
  }

}
