import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, catchError, of } from 'rxjs';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http: HttpClient) { }
  private baseUrl : string = environment.baseUrl+'/task'

  getTasks(): Observable<Task | undefined> {
    const headerToken = new HttpHeaders({
       'x-token': this.getToken(),
    });
   
    const options = {
       headers: headerToken
    };
   
    return this.http.get<Task>(this.baseUrl, options).pipe(
       catchError((error) => {
         return of(undefined)
       })
    )
  }
  getTask(id:number): Observable<Task | undefined> {
    const headerToken = new HttpHeaders({
       'x-token': this.getToken(),
    });
   
    const options = {
       headers: headerToken
    };
   
    return this.http.get<Task>(this.baseUrl+'/'+id, options).pipe(
       catchError((error) => {
         return of(undefined)
       })
    )
  }

  getPending(): Observable<Task | undefined> {
    const headerToken = new HttpHeaders({
       'x-token': this.getToken(),
    });
   
    const options = {
       headers: headerToken
    };
   
    return this.http.get<Task>(this.baseUrl+'/pending', options).pipe(
       catchError((error) => {
         return of(undefined)
       })
    )
  }

  getMytask(): Observable<Task | undefined> {
   const headerToken = new HttpHeaders({
      'x-token': this.getToken(),
   });
  
   const options = {
      headers: headerToken
   };
  
   return this.http.get<Task>(this.baseUrl+'/my-tasks', options).pipe(
      catchError((error) => {
        return of(undefined)
      })
   )
 }

  createTask(task:Task): Observable<Task | undefined> {
    const headerToken = new HttpHeaders({
      'x-token': this.getToken(),
   });
  
   const options = {
      headers: headerToken
   };

   return this.http.post<Task>(this.baseUrl, task,options).pipe(
      catchError((error) => {
        return of(undefined)
      })
   )
    
  }
  updateTask(id:number, task:any): Observable<Task | undefined> {
    const headerToken = new HttpHeaders({
      'x-token': this.getToken(),
   });
  
   const options = {
      headers: headerToken
   };

   return this.http.put<Task>(this.baseUrl+'/'+id, task,options).pipe(
      catchError((error) => {
        return of(undefined)
      })
   )
    
  }
  asignMe(arrId:any): Observable<Task | undefined> {
    const headerToken = new HttpHeaders({
      'x-token': this.getToken(),
   });
  
   const options = {
      headers: headerToken
   };

   return this.http.post<Task>(this.baseUrl+'/asign-me/', arrId,options).pipe(
      catchError((error) => {
        return of(undefined)
      })
   )
    
  }

  finished(): Observable<Task | undefined> {
   const headerToken = new HttpHeaders({
     'x-token': this.getToken(),
  });
 
  const options = {
     headers: headerToken
  };

  return this.http.get<Task>(this.baseUrl+'/finish/',options).pipe(
     catchError((error) => {
       return of(undefined)
     })
  )
   
 }

 finishTask(taskId:any): Observable<Task | undefined> {
   const headerToken = new HttpHeaders({
     'x-token': this.getToken(),
  });
 
  const options = {
     headers: headerToken
  };

  return this.http.post<Task>(this.baseUrl+'/finish/', taskId,options).pipe(
     catchError((error) => {
       return of(undefined)
     })
  )
   
 }

  getToken():string{
    let local = localStorage.getItem('user') as string
    return JSON.parse(local).token 

  }

}
