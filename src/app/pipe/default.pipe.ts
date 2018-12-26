import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'defaultpipe'
})
export class DefaultPipe implements PipeTransform {

    transform(value: string, fallback?: string, forcehttps: boolean=false): string {
      let image ="";
      if(value){
        image = value;
      }
      else{
        image= fallback;
      }

      if(forcehttps){
        if(image.indexOf('http')==-1 && image.indexOf('https')==-1){
            image = "https://"+image;
        }
        else if (image.indexOf("https") == -1) {
            image = image.replace("http", "https");
        }
      }
      return image;
    }
  
  }
  