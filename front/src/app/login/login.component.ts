import {Component, Injectable, OnInit} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {User} from "../interfaces/user";
import {Router} from '@angular/router';
import {UserService} from "../services/user.service";
import { HttpErrorResponse } from '@angular/common/http';
import { AlertComponent } from '../alert/alert.component';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, AlertComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [UserService]
})
export class LoginComponent implements OnInit{
  isLogged = 0
  email = ''
  password = ''
  header = ''
  message = ''
  showAlert = false 

   
  constructor(private userService : UserService, private router : Router){}
  user?: User
  login(){

    this.userService.testlogin(this.email, this.password).subscribe({
      next: (user:any | undefined) => {
        if(user == null){
          this.showAlert = true
          this.header = 'Error'
          this.message = 'Error with your credentials. Try again!'
        }else{
          localStorage.setItem('user', JSON.stringify(user.body) )
          this.router.navigate(['home'])
        }
        console.log(user.body)
        
      },
      error: (err) => {
        console.log(err)
      }
    })
    this.router.navigate(['/login',this])
  }

  ngOnInit() {

  }

  checkLocalStorage(valueSearch:string){
    return localStorage.getItem(valueSearch)
  }
}
