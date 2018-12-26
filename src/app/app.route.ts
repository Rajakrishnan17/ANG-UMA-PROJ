import { Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { StudentComponent } from './student/student.component';
import { StaffComponent } from './staff/staff.component';
import { SchoolComponent } from './school/school.component';
import { StudentListComponent } from './student-list/student-list.component';
import { LoginComponent } from './login/login.component';
import { StudentResolver } from './service/resolver/student.resolver';
import { Component } from '@angular/core';

export const AppRoutes: Routes = [
    { path: 'sign-in', component: SigninComponent },
    { path: 'sign-up', component: SignupComponent },
    { path: 'contact-us', component: ContactusComponent },
    { path: 'about-us', component: AboutusComponent },
    { path: 'student', component: StudentComponent },
    { path: 'staff', component:StaffComponent, canActivate:false},
    { path: 'school',component:SchoolComponent, 
        children:[
            {
                path: 'user',
                component: AboutusComponent,
            },
            {
                path: 'list',
                component: StudentListComponent,                
            }
        ],
        
    },
    { path: 'student-list', component: StudentListComponent,
       resolve: {
           studentResolver : StudentResolver
       }    },
    { path: 'login', component: LoginComponent },
];
