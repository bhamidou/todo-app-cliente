import { Component } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Router, RouterLink } from '@angular/router';
import { UserTask } from '../../interfaces/user-task';
import { Task } from '../../interfaces/task';

@Component({
  selector: 'app-finished-task',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './finished-task.component.html',
  styleUrl: './finished-task.component.css'
})

export class FinishedTaskComponent {
  arrIds:any = []
  getTasks:any = []
  createInput = false
  constructor(private taskService : TasksService, private router : Router){}

  ngOnInit(): void {
    this.finished()
  }

  task?: Task
  
  finished(){
    this.taskService.finished().subscribe({
      next: (UserTask:any | undefined) => {
        this.getTasks = UserTask
        console.log(this.getTasks)
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

}
