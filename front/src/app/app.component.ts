import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import { Router} from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import { User } from './interfaces/user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, HeaderComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit{
  title = 'todo-app';
  id = 0
  email = ''
  name = ''
  roles = []

  constructor(private router : Router){
  }
  ngOnInit() {
    if(localStorage.getItem('user') == null || localStorage.getItem('user') ==undefined){
      //this.router.navigate([['login'],['signup']])
    }else{
      this.setHeader()
    }
  }
  getLocalStorage(valueSearch:string){
    return localStorage.getItem(valueSearch)
  }

  setHeader(){
    if (localStorage.getItem('user') !=null || localStorage.getItem('user') !=undefined ){
      return {
        email: this.getUserLocal().rtnUser.msg.email,
        name: this.getUserLocal().rtnUser.msg.name,
        roles: this.getUserLocal().rtnUser.roles
      }
    }else{
      return {
        name:'Inicia sesión'
      }
    }
  }

  getUserLocal():any{
    return this.getLocalStorage('user')  != null ||this.getLocalStorage('user')  != undefined ? JSON.parse(this.getLocalStorage('user') as string) : null
  }

  checkAdmin():boolean{
    let checkAdmin  = false
    
    if(localStorage.getItem('user') !=null || localStorage.getItem('user') !=undefined){

      let user = this.getUserLocal().rtnUser
      let i = 0
      while(i<user.roles.length && !checkAdmin){
        if(user.roles[i] == 1){
          checkAdmin = true
        }
        i++
      }
    }
    return  checkAdmin
  }
}
