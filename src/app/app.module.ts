import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';

import { AppRoutes } from './app.route';
import { SignupComponent } from './signup/signup.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StudentComponent } from './student/student.component';
import { StaffComponent } from './staff/staff.component';
import { SchoolComponent } from './school/school.component';
import { DefaultimagePipe } from './defaultimage.pipe';
import { DefaultPipe } from './pipe/default.pipe';
import { UserComponent } from './user/user.component';
import { IfDirective } from './directives/ifcustom.directive';
import { HostListenDirective } from './directives/hostlistener';
import { HiddenDirective } from './directives/hidden.directive';
import { StudentListComponent } from './student-list/student-list.component';
import { LoginComponent } from './login/login.component';

//services
import { ApiService } from './service/api.service';
import { StartupService } from './startup.service';
import { User } from './service/user.service';
import { StudentResolver } from './service/resolver/student.resolver';

@NgModule({
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
    DefaultPipe,
    UserComponent,
    IfDirective,
    HostListenDirective,
    HiddenDirective,
    StudentListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( AppRoutes ),
    FormsModule,
    HttpModule,
    HttpClientModule,    
    ReactiveFormsModule
  ],
  providers: [ ApiService, User,  StartupService,
    {
      provide: APP_INITIALIZER, // Provider for APP_INITIALIZER
      useFactory: startupServiceFactory,
      deps: [StartupService],
      multi: true
    },
    StudentResolver,
	],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function startupServiceFactory(
  startupService: StartupService
): Function {
  return () => startupService.load();
  
}
  
