import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { IUser } from './user';
import { IRepo } from "./repos/repo";

@Injectable()
export class UsersService {
    private _usersUrl = 'https://api.github.com/users/';

    constructor(private _http: Http) { }

    getUser(name: string): Observable<IUser> {
        return this._http.get(this._usersUrl + name)
            .map((response: Response) => <IUser> response.json())
            .catch(this.handleError);
    }
    getRepos(name: string): Observable<IRepo[]> {        
        return this._http.get(this._usersUrl + name + "/repos")
            .map((reposne: Response) => <IRepo[]>reposne.json())
            .catch(this.handleError); 
    }
    
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
