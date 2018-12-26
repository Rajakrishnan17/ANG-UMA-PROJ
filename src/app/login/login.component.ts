import { Component, OnInit } from '@angular/core';
import { StudentListService } from '../student-list/student-list.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  studentform: FormGroup;
  submitted = false;
  message: any;
  constructor(public student: StudentListService, public fb: FormBuilder) { }

  ngOnInit() {
    this.studentlogin();
    this.studentform = this.fb.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  studentlogin(){
      this.submitted = true;
      if(this.studentform.valid) {
        this.student.login('login', this.studentform.value).subscribe(
          (successresponse)=>{
            this.message = successresponse['res'];
            this.studentform.reset();
            this.submitted = false;
          },
          (errorresponse)=>{
          }
        );
      }
  }

}
