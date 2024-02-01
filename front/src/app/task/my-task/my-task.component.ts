import { Component } from '@angular/core';
import { UserTask } from '../../interfaces/user-task';
import { TasksService } from '../../services/tasks.service';
import { Router, RouterLink } from '@angular/router';
import { Task } from '../../interfaces/task';

@Component({
  selector: 'app-my-task',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './my-task.component.html',
  styleUrl: './my-task.component.css'
})
export class MyTaskComponent {
  getTasks:any = []


  ngOnInit(): void {
      this.getTasks = this.getAll()
  }
  constructor(private taskService : TasksService, private router : Router){}
  task?: Task
  getAll():Array<UserTask|undefined>{
    let rtnTask:any = []
    this.taskService.getMytask().subscribe({
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
