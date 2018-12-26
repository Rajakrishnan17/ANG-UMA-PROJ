import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { User } from '../service/user.service';
import { Formdata } from '../model/user.model';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

    signupform: FormGroup;
    userdata: Formdata;
    show: boolean;
    btname: string;
    userlist_array: any;
    submitted = false;
    msg: string = null;
    
    constructor(public fb: FormBuilder, public userService: User) {
        this.userdata = this.userService.getUser();
    }

    ngOnInit() {
        this.show = false;
        this.btname = 'Show';
        //formdata
        this.signupform = this.fb.group({
            'firstName': ['', Validators.required],
            'lastName': ['', Validators.required],
            'email': ['', [Validators.required, Validators.email]],
            'password': ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    setuservalues() {
        this.userdata.firstName = this.signupform.controls.firstName.value;
        this.userdata.lastName = this.signupform.controls.lastName.value;
        this.userdata.email = this.signupform.controls.email.value;
        this.userdata.password = this.signupform.controls.password.value;
    }    

    adduser() {
        this.submitted = true;      
        this.setuservalues();
        if (this.signupform.invalid) {
            return;
        }          
        else{
            this.userService.useradd(this.userdata).subscribe(
                (success) => {  
                    //localStorage.setItem('msg',JSON.stringify(success));               
                    
                    this.msg = JSON.stringify(success);
                    //this.signupform.reset();
                    console.log(JSON.stringify(success)); 
                    
                },
                (error) => { console.log("error"); }
            )
        } 
    }

    //update user

    updateuser(id: any) {
        this.userService.usergetdata(id).subscribe(
          (success) => {
            this.userdata = success[0];
            this.signupform.setValue(this.userdata);
            console.log(this.userdata);
            this.signupform.updateValueAndValidity();
            console.log(success);
          }
        )
    }


    //list user data
    showTable() {
      this.userService.userlist().subscribe(
        (success) => {
          this.userlist_array = success;
          console.log("success");
          //console.log(this.userlist_array);
        },
        (error) => {
          console.log(error);
        }
      );
      if (this.show == true) {
        this.show = false;
        this.btname = 'Show';
      }
      else {
        this.show = true;
        this.btname = 'Hide';
      }
  
    }

    
    //delete user with id
    deleteuser(id: any) {
        // this.idvalue = this.userlist_array.id;
        this.userService.userdelete(id).subscribe(
          (success) => {
            this.userlist_array = success;
            console.log("User Deleted");
          },
          (error) => {
            console.log("Error");
          }
        )
      }
}
