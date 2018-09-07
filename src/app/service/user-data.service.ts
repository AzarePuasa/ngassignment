import { Injectable } from '@angular/core';
import { UserAPIService } from './userapi.service';
import { Observable } from 'rxjs/Observable';
import { UserDetails } from '../models/register.model';

@Injectable()
export class UserDataService {

  constructor(private api: UserAPIService) { }
    // Simulate GET /todos
    getAllTodos(): Observable<UserDetails[]> {
        return this.api.getAllUsers();
      }

    // Simulate POST /todos
    addUser(user: UserDetails): Observable<UserDetails> {
        return this.api.createUser(user);
    }

    // Simulate GET /todos/:id
    getTodoById(userId: number): Observable<UserDetails> {
        return this.api.getUserById(userId);
    }
}