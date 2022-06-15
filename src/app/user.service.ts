import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, ObservableLike, throwError } from 'rxjs';
import { User } from './user';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable()
export class UserService {

  private httpHeaders = new HttpHeaders({ 'Content-type': 'application/json' });
  private devUrl: string = 'http://localhost:9069/users/';
  private prodUrl: string = 'https://firebase-u-api-lrv.herokuapp.com/users/';
  // private urlAuthenticate: string = 'http://localhost:9069/users/auth';
  // private prodUrlAuthenticate: string = 'https://firebase-u-api-lrv.herokuapp.com/users/auth';

  public token: boolean = false;

  usuario: User = {
    username: "",
    password: "",
    age: 0
  }

  constructor(private http: HttpClient,
    private router:Router) {}

  getUsers(): Observable<User[]> {
    console.log("getting users");
    return this.http.get<User[]>(this.prodUrl);
  }

  getByUsername(username:string):Observable<User>{
    return this.http.get<User>(`${this.prodUrl}${username}`, {headers: this.httpHeaders})
    .pipe(
      catchError(e => {
        Swal.fire('Error al buscar', e.error.message, 'error');
        return throwError(e);
      })
    )
  }

  create(user:User):Observable<User>{
    return this.http.post<User>(this.prodUrl, user, {headers: this.httpHeaders})
    .pipe(
      catchError(e => {
        Swal.fire('Error al crear', e.error.message, 'error');
        return throwError(e);
      })
    );
  }
  
  update(user:User):Observable<any>{
    return this.http.put<any>(this.prodUrl, user, {headers:this.httpHeaders}).pipe(
      catchError(e => {
        Swal.fire('Error al editar', e.error.message, 'error');
        return throwError(e);
      })
    );
  }

  delete(user:User):Observable<any>{
    // return this.http.delete<any>(this.prodUrl, user)
    // this.http.delete not contain parameters for body
    return this.http.request<any>('delete',this.prodUrl, {body: user})
    .pipe(
        catchError(e => {
          Swal.fire('Error al eliminar', e.error.message, 'error');
          return throwError(e);
        })
    )
  }
}
