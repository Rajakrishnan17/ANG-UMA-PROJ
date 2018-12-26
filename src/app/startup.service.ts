import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { resolve } from 'path';
import { reject } from 'q';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class StartupService {

  private baseUrl: string = "http://localhost/angular-crud/user/";
  constructor(public http: HttpClient) {     
  }
  
  gettime(){
    return this.http.get(this.baseUrl+'gettime');
  }

  load(): Promise<any>{
    let promise = new Promise(
      (resolve,reject)=>{
        this.http.get(this.baseUrl+'gettime').subscribe(
          (success)=>{
            resolve(success);
          },
          (error)=>{
            reject(error);
          }
        );       
      }
    );
    return promise;
  }
}
