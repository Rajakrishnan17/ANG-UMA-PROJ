import { Injectable } from '@angular/core';
import { Headers, Http, Response, URLSearchParams, ResponseContentType } from "@angular/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class ApiService {

    apiPath: string = "http://localhost/registration/";
    constructor ( private http:Http){}
    //get data
    get(path: string):Observable<any>{
        return this.http
		  .get(`${this.apiPath}${path}`, {
			
		  })
		  .pipe(
            map(res => res.json())
          );
    }
    // post data
    // headers: this.setHeaders(),
    // params: params
    post(path:string, data):Observable<any>{
        let header = {"Content-Type": "application/json", 'Accept': "application/json"};
        return this.http
        .post(this.apiPath + '' + path,
                data, 
                {
                headers:  new Headers(header)
                } )
        .pipe(
            map (res => res.json())
        );        
    }

    patch(path:string, id: string, content: Object = {}): Observable<any>{
        return this.http
        .put(this.apiPath + '' + path + '' + id +'', content)
        .pipe(
            map(res=> res.json)
        );

    }
    delete(path: string, id: string): Observable<any>{
        return this.http
        .delete(this.apiPath + '' + path + '' + id)
        .pipe(
            map(res=> res.json)    
        );

    }

}