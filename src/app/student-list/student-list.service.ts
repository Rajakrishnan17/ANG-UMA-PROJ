import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentListService {  
  private baseUrl: string = "http://localhost/angular-crud/user/";
  constructor(public http: HttpClient) {     
  }

  getstudent(path: string){
      return this.http.get(this.baseUrl+path);
  }

  poststudent(path: string, data){
      return this.http.post(this.baseUrl+path, data);
  }

  editstudent(path:string,id, data){
      return this.http.patch(this.baseUrl+path +"/"+ id, data);
  }

  deletestudent(path: string, id){
      return this.http.delete(this.baseUrl+path +"/"+ id)
  }

  getstudentbyid(path: string, id){
      return this.http.get(this.baseUrl+path +"/"+ id);
  }
  gettime(){
      return this.http.get(this.baseUrl+'gettime');
  }
  login(path: string, data){
      return this.http.post(this.baseUrl+path, data);
  }
}
