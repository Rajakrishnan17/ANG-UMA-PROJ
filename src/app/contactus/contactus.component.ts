import { Component, OnInit, ViewChild } from '@angular/core';
import {  FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {  
  @ViewChild("f")form: any = {};
  constructor() { }

  ngOnInit() {
    
  }

}
