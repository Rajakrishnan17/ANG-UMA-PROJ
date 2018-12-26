import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StudentListService } from './student-list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  studentform: FormGroup;
  servertime: any;
  studentdata: any;
  message: any; 
  studentid: number;
  submitted = false;
  currentUser: any;  

  constructor( public student: StudentListService, public fb: FormBuilder, public activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe((success)=>{
      console.log(success);
    },
    (error)=>{
      console.log(error);
    }
  )

  }

  ngOnInit() {
    this.studentList();
    //this.showtime();
    this.studentform = this.fb.group({
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  showtime(){
    this.student.gettime().subscribe(
      (successresponse)=>{ 
        console.log(successresponse);
        this.servertime = successresponse['time'];
      },
      (errorresponse)=>{
        console.log('error');
      }  
    );
  }

  studentList(){
    this.student.getstudent('getall').subscribe(
      (successresponse)=>{ 
        this.studentdata = successresponse;
      },
      (errorresponse)=>{
        console.log('error');
      }
    );
  }

  addStudent(){
    this.submitted = true;
    if(this.studentform.valid) {
      this.student.poststudent('add', this.studentform.value).subscribe(
        (successresponse)=>{
          this.message = successresponse['res'];
          this.studentList();
          this.studentform.reset();
          this.submitted = false;
        },
        (errorresponse)=>{
        }
      );
    }
  }
  
  //delete student data
  deleteStudent(studentid){
    this.message = '';
    this.student.deletestudent('delete/id', studentid).subscribe(
      (successresponse)=>{
        this.studentList();
      },
      (errorresponse)=>{
      }
    );
  }

  //update student data
  updateStudent(studentid){
    this.message = '';
    this.student.editstudent('update/id',studentid, this.studentform.value).subscribe(
      (successresponse)=>{
        this.message = successresponse['res'];
        this.currentUser = "";
        this.studentList();
        this.studentform.reset();  
      },
      (errorresponse)=>{
      }
    );
  }

  //get single student data
  getstudentData(studentid){
    this.student.getstudentbyid('getsingledata/id',studentid).subscribe(
      (successresponse)=>{ 
        this.currentUser = successresponse['id']; 
        this.studentform.controls.firstName.setValue(successresponse['firstname']);
        this.studentform.controls.lastName.setValue(successresponse['lastname']);
        this.studentform.controls.email.setValue(successresponse['email']);
      },
      (errorresponse)=>{
      }      
    );
  }
}
