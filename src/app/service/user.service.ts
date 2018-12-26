import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Formdata } from '../model/user.model';
@Injectable({
    providedIn: 'root'
})

export class User{
    num: number;  fact: number = 1;
    constructor(       
       public apiService: ApiService,             
    ){}

    userdata: Formdata = new Formdata(null, null,null,null,null);

    setUser(frmd: Formdata){
        this.userdata = frmd;
    }
    
    //get user submitted data
    getUser(){
        return this.userdata;
    }    
    useradd(postData){
        return this.apiService.post('user/add', postData)    
    }
    userlist() {
        return this.apiService.get('user/getall/');    
    }
    usergetdata(id:any){
        return this.apiService.get('user/getsingledata/id/'+ id )
    }
    userdelete(data) {
        return this.apiService.delete('user/delete/id/', data);
    }
    userupdate(id,data){
        return this.apiService.patch('user/update/' , id + '/' ,data);
    }
    
    check_number (num){  
        if(num < 10)    
           return true;  
        else   
           return false;  
    }  

    factorial(n: number){       
       for(this.num=n; this.num>=1; this.num--){
        this.fact = this.fact * this.num;
       }
       return this.fact;
    }
    


    /*
    userget(id: any){
        this.apiService.get('user/get').subscribe(
            (success) => {console.log},
            (error) => {}
        )
    }
    useradd(postData){       
        this.apiService.post('user/add', postData).subscribe(
            (success) => { 'success' },
            (error) => { 'error'}
        )
    }*/
}


