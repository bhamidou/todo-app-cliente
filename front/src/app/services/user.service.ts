import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {catchError, Observable, of} from "rxjs";
import {User} from "../interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  private baseUrl : string = environment.baseUrl

  login(email:string, password:string): Observable<User | undefined> {
    let user = {
      email: email,
      password: password
    }
    
    return this.http.post<User>(this.baseUrl+'/login',user).pipe(
      
      catchError((error) =>{
        return of(undefined)
      })
    )
  }
  signup(name:string, email:string, password:string): Observable<User | undefined> {
    let user = {
      name: name,
      email: email,
      password: password
    }

    return this.http.post<User>(this.baseUrl+'/user',user).pipe(
      
      catchError((error) =>{
        return of(undefined)
      })
    )
  }
  testlogin(email:string, password:string): Observable<HttpResponse<User> | null> {
    let user = {
       email: email,
       password: password
    }
    const headers = new HttpHeaders({
       'x-token' : this.getToken()
    });
   
    return this.http.post<User>(this.baseUrl, user, { observe: 'response', headers }).pipe(
       catchError((error) =>{
         console.log(error);
         return of(null);
       })
    )
   }

  private token: string | number  = '';

  setToken(token: string): void {
    this.token = token;
  }

  getToken(): string | number {
    return this.token;
  }

  clearToken(): void {
    this.token = '';
  }
}
