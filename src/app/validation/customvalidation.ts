import { FormGroup, FormControl } from '@angular/forms';

export class Customvalidation{   
    static datevalidation(){
        return (group: FormGroup): {[key: string]: boolean}=>{
            //console.log(group.get('startdate').value);
            //console.log(group.get('enddate').value);
            if(new Date(group.get('startdate').value) < new Date(group.get('enddate').value)){
                return null;
            }
            else{
                return{'Invalid Date': true} 
            }            
        }
    }
    static checkformat(){
        return (fg: FormGroup): {[key: string]: boolean}=>{
            //console.log(fg.get('startdate').value);
            if(fg.get('startdate').value){
                return null;
            }
            else{
                return{'Invalid Date Format': true} 
            }
        }
    }
}