import { Component, OnInit } from '@angular/core';
import { Task } from '../../interfaces/task';
import { TasksService } from '../../services/tasks.service';
import { Router, RouterLink } from '@angular/router';
import { UserTask } from '../../interfaces/user-task';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-taks',
  standalone: true,
  imports: [RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './list-taks.component.html',
  styleUrl: './list-taks.component.css'
})
export class ListTaksComponent implements OnInit {
  getTasks:any = []


  ngOnInit(): void {
      this.getAll()
  }
  constructor(private taskService : TasksService, private router : Router){}
  task?: Task
  getAll():Array<UserTask|undefined>{
    let rtnTask:any = []
    this.taskService.getTasks().subscribe({
      next: (UserTask:any | undefined) => {
        console.log(UserTask)
        this.getTasks = UserTask
      },
      error: (err) => {
        console.log(err)
      }
    })
    return rtnTask
  }

}
