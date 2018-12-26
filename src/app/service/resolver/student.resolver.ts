import { Injectable } from "@angular/core";
import { Router, Resolve } from "@angular/router";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StudentResolver implements Resolve<any> {	 
    private baseUrl: string = "http://localhost/angular-crud/user/";
        constructor(public http: HttpClient) {     
    }    
    resolve() {
        return this.http.get(this.baseUrl+'gettime');
    }
}