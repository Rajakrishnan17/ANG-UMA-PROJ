import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutes } from './app.route';
import { SignupComponent } from './signup/signup.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StudentComponent } from './student/student.component';
import { StaffComponent } from './staff/staff.component';
import { SchoolComponent } from './school/school.component';
import { ApiService } from './service/api.service';
import { User } from './service/user.service';
import { DefaultimagePipe } from './defaultimage.pipe';
import { UserComponent } from './user/user.component';
import { IfDirective } from './directives/ifcustom.directive';
import { HostListenDirective } from './directives/hostlistener';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SigninComponent,
        SignupComponent,
        ContactusComponent,
        AboutusComponent,
        HeaderComponent,
        FooterComponent,
        StudentComponent,
        StaffComponent,
        SchoolComponent,
        DefaultimagePipe,
        UserComponent,
        IfDirective,
        HostListenDirective
      ],
      imports: [
        BrowserModule,
        RouterModule.forRoot( AppRoutes ),
        FormsModule,
        HttpModule,
        ReactiveFormsModule
      ],
      providers: [ ApiService, User],
    }).compileComponents();
  }));
  /*it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));*/
});
