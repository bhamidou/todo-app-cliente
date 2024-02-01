import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';
import { AlertComponent } from '../alert/alert.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [AlertComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  email = ''
  name = ''
  password = ''
  header = ''
  message = ''
  showAlert = false 


   
  constructor(private userService : UserService, private router : Router){}
  user?: User
  signup(){

    this.userService.signup(this.name,this.email, this.password).subscribe({
      next: (user:any | undefined) => {
        console.log(user)
        if(user == null || user == undefined ){
          this.showAlert = true
          this.header = 'Error'
          this.message = 'Error in the form. Try again!'
        }else{
          this.router.navigate(['/login',this])
        }
        
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  checkLocalStorage(valueSearch:string){
    return localStorage.getItem(valueSearch)
  }
}
