import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { Router } from '@angular/router';

@Injectable()
export class UserService {
  private urlFindAll: string = 'http://localhost:9069/users/';
  private urlAuthenticate: string = 'http://localhost:9069/users/auth';

  public token: boolean = false;

  usuario: User = {
    username: "",
    password: "",
    age: 0
  }

  constructor(private http: HttpClient,
    private router:Router) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.urlFindAll);
  }

  
}
