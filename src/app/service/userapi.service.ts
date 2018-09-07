import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

import { UserDetails } from '../models/register.model'
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

// we can now access environment.apiUrl
const API_URL = environment.apiUrl;

@Injectable()
export class UserAPIService {

    constructor(private httpClient: Http) { }

    // API: GET /todos
    getAllUsers():Observable<UserDetails[]> {

        let URI = `${API_URL}/user`;

        return this.httpClient.get(URI).map(response => {
        const todos = response.json();
        return todos.map((todo) => new UserDetails(todo));
        })
    }

    // API: POST /user
    createUser(user: UserDetails): Observable<UserDetails> {
        // will use this.http.post()
        let URI = `${API_URL}/user`;
        
        return this.httpClient
        .post(API_URL + '/user', user)
        .map(response => {
          return new UserDetails(response.json());
        })
        .catch(this.handleError);
    }

    // API: GET /user/:id
    public getUserById(userId: number): Observable<UserDetails> {
        // will use this.http.get()
        return this.httpClient
        .get(API_URL + '/user/' + userId)
        .map(response => {
          return new UserDetails(response.json());
        })
        .catch(this.handleError);
    }

    private handleError (error: Response | any) {
        console.error('ApiService::handleError', error);
        return Observable.throw(error);
      }
}