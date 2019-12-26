import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { Project } from '../models/project';
import { Global } from './global';
import { Observable } from 'rxjs';

@Injectable()

export class ProjectService{
    public url:String;

    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;
    }

    testService(){
        return 'Prueba de servicio';
    }

    saveProject(project): Observable<any>{
        var params = JSON.stringify(project);
        var headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url + 'save', params, {headers: headers});
    }

    getProjects(){
        var headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url + 'projects', {headers: headers});
    }

    getProject(id: string){
        var headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url + 'project/' + id, {headers: headers});
    }

    deleteProject(id: string): Observable<any>{
        var headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.delete(this.url + 'project/' + id, {headers: headers});
    }

    updateProject(project): Observable<any>{
        console.log(project);
        var params = JSON.stringify(project);
        console.log(params);
        var headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.put(this.url + 'editar/' + project._id, params, {headers: headers});
    }
}