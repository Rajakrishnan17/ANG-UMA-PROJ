import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signinform: FormGroup;

  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }
  buildForm() {
    this.signinform = this.fb.group({
      'username': ['', [Validators.required, Validators.minLength(6)]],
      'pwd': ['', [Validators.required]]
    });
  }
}
