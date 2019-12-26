import { Injectable } from '@angular/core';
import { Global } from './global';
import { XhrFactory } from '@angular/common/http';

@Injectable()

export class UploadService{
    public url: string;

    constuctor(){
        this.url = Global.url;
    }

    makeFileRequest(url: string, params: Array<string>, files: Array<File>, name:string){
        return new Promise((res, rej) => {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
    
            for(var i = 0; i < files.length; i++){
                formData.append(name, files[i], files[i].name);
            }

            xhr.onreadystatechange = () => {
                if(xhr.readyState == 4){
                    if(xhr.status == 200){
                        console.log(JSON.parse(xhr.response));
                    } else {
                        console.log(xhr.response);
                    }
                }
            }

            xhr.open('POST', url, true);
            xhr.send(formData);
        });
    }
}