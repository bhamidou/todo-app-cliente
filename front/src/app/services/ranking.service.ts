import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  constructor(private http: HttpClient) { }
  private baseUrl : string = environment.baseUrl+'/ranking'

  getPending(): Observable<any | undefined> {
   
    return this.http.get<any>(this.baseUrl+'/pending').pipe(
       catchError((error) => {
         return of(undefined)
       })
    )
  }

  getBest(): Observable<any | undefined> {
   
    return this.http.get<any>(this.baseUrl+'/best-programmer').pipe(
       catchError((error) => {
         return of(undefined)
       })
    )
  }

  getFinish(): Observable<any | undefined> {
   
    return this.http.get<any>(this.baseUrl+'/finish').pipe(
       catchError((error) => {
         return of(undefined)
       })
    )
  }
}
