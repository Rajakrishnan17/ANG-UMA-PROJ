import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { min } from 'rxjs/operators';
import { Customvalidation } from '../validation/customvalidation';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  studentform: FormGroup;
  constructor( public fb: FormBuilder) { }
  
  ngOnInit() {
      this.buildform();
  }

  buildform(){
    this.studentform = this.fb.group({
      'name': ['', Validators.required],
      'email': ['', [Validators.required, Validators.email]],
      'age': ['', [Validators.required, Validators.min(18),Validators.max(110)]],
      'startdate':'',
      'enddate':''
    },{
       'validator': [ Customvalidation.datevalidation(), Customvalidation.checkformat()]
    }  
  );
}


}
